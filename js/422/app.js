//各種設定値記載
var current;
var YOUR_APP_KEY = "アプリケーションキー";
var YOUR_CLIENT_KEY = "クライアントキー";
var ncmb;
var map;

//ニフティクラウドmobile backendの準備
 $(function(){
    ncmb = new NCMB(YOUR_APP_KEY,YOUR_CLIENT_KEY);
    console.debug("ニフティクラウドmobile backendの準備");
});

//OSMの描画
function writemap(lon,lat) {
    console.log(lat+":"+lon+":");

    // ビュー追加
    map = L.map('canvas').setView([lat, lon], 15);

    //OSMレイヤー追加
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
		maxZoom: 18
	}).addTo(map);
}

//OSMの描画時に位置情報取得に成功した場合のコールバック
var onGeoSuccess = function(position){
    console.debug("onGeoSuccess()");
    current = new CurrentPoint();    
    current.geopoint = position.coords; //位置情報を保存する
    writemap(current.geopoint.longitude,current.geopoint.latitude);
};

//位置情報取得に失敗した場合のコールバック
var onGeoError = function(error){
    console.log("現在位置を取得できませんでした");
};

//位置情報取得時に設定するオプション
var geoOption = {
    timeout: 6000
};

//現在地を保持するクラスを作成
function CurrentPoint(){
    geopoint=null;  //端末の位置情報を保持する
}
//現在地をポイントとして登録する
function save_geopoint(){
     navigator.geolocation.getCurrentPosition(onSaveSuccess, onGeoError, geoOption);
     console.debug("save_geopoint");
}

//ポイントの登録時に位置情報取得に成功した場合のコールバック
var onSaveSuccess = function(location){
    console.debug("onSaveSuccess");

    navigator.notification.prompt(
        ' ',  // メッセージ
        onPrompt,                  // 呼び出すコールバック
        'ポンイントの登録',     // タイトル
        ['登録','やめる'],             // ボタンのラベル名
        'ポイント名'                 // デフォルトのテキスト
    );

    function onPrompt(results) {
        current.geopoint = location.coords; 
        var geoPoint = new ncmb.GeoPoint(location.coords.latitude, location.coords.longitude);
        console.log(location.coords.latitude + ":" + location.coords.longitude);
        var Places = ncmb.DataStore("PlacePoints");
        var point = new Places();
        point.set("name",results.input1);
        point.set("geo", geoPoint);

        point.save()
            .then(function(){

            var marker = L.marker([location.coords.latitude, location.coords.longitude])
                .bindPopup("<h1>" + results.input1 + "</h1>")
                .addTo(map);


            })
            .catch(function(err){// エラー処理
            });
    }

};

//登録されたポイントを引き出し地図上に表示する
function find_geopoint(){
    navigator.geolocation.getCurrentPosition(onFindSuccess, onGeoError, geoOption);
    console.debug("find_geopoint");
}

//登録ポイントの表示時に位置情報取得に成功した場合のコールバック
var onFindSuccess = function(location){
    console.debug("onFindSuccess");
    current.geopoint = location.coords; 
    var geoPoint = new ncmb.GeoPoint(location.coords.latitude, location.coords.longitude);
    console.log("findpoints:"+location.coords.latitude + ":" + location.coords.longitude);

    var PlacePointsClass = ncmb.DataStore("PlacePoints");
    //ニフティクラウド mobile backendにアクセスして検索開始位置を指定
    PlacePointsClass.withinKilometers("geo", geoPoint, 5)
        .fetchAll()
        .then(function(results){
        var data = [];
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var regist_location = result.get("geo");
            var name = result.get("name");

            //マーカー＆ポップアップ追加
            var marker = L.marker([regist_location.latitude, regist_location.longitude])
                .bindPopup("<h1>" + name + "</h1>")
                .addTo(map);
        }
    });
};

