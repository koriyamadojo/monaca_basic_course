# カメラアプリ

Monacaで、スマホのカメラを使って写真を撮影し、画面に表示する方法を学びます。

「新規プロジェクトの作成」から「No Framework」を選び、「最小限のテンプレート」から新しくプロジェクトを作成します。

## Cordovaプラグインの有効化

Monacaからカメラ機能を使うには、Cordovaプラグインとしてカメラ機能を有効にします。
画面上部の「設定」→「Cordovaプラグインの管理」を選択します。

<img width="482" alt="2016-07-16 11 43 46" src="https://cloud.githubusercontent.com/assets/843192/16892345/9b470f86-4b4a-11e6-8ec8-20b74a60e5c4.png">

「camera」を探して、「有効」を押します。

<img width="340" alt="2016-07-16 11 45 37" src="https://cloud.githubusercontent.com/assets/843192/16892355/dacdb600-4b4a-11e6-9ec3-7d64bb24ed41.png">

下図のように、「組み込まれたプラグイン」の中にcameraがあればOKです。

<img width="799" alt="2016-07-16 11 47 00" src="https://cloud.githubusercontent.com/assets/843192/16892361/0771842a-4b4b-11e6-8312-44b7ab547948.png">

## HTMLのコーディング

HTMLを作って行きましょう。

<img width="414" alt="2016-07-16 12 25 31" src="https://cloud.githubusercontent.com/assets/843192/16892527/7172f142-4b50-11e6-932e-7f4b730bf8fb.png">

ここでは、「撮影」ボタンと「消去」ボタンを追加して、その下に、撮影した画像が表示される領域を作りました。

## JavaScriptのコーディング

カメラの撮影と表示をする部分をJavaScriptでコーディングしていきます。
wwwフォルダの下にjsフォルダを作り、camera.jsというファイルを新規作成して、下記のコードを入力します。

<img width="578" alt="2016-07-16 12 17 01" src="https://cloud.githubusercontent.com/assets/843192/16892497/3845a17c-4b4f-11e6-9670-b384f4b82927.png">

jsファイルができたら、HTMLファイルのほうから読み込むようにします。

<img width="510" alt="2016-07-16 12 26 18" src="https://cloud.githubusercontent.com/assets/843192/16892531/9f758f28-4b50-11e6-884d-16dae7b86630.png">


## 動作確認

「撮影」ボタンを押すと、カメラが起動して写真が撮影できます。撮った写真は画面に表示されていきます。連続して写真を撮っていくと、どんどん右に追加されていきます。「削除」を押すと、写真を消去します。

<img width="300" src='https://cloud.githubusercontent.com/assets/843192/16892508/b42487fe-4b4f-11e6-92d8-bf283275bd94.png' >

## 課題

* CSSを使って、ボタンや画像の表示を見やすくきれいにしてみましょう。
* JavaScriptの処理をjQueryで書きなおしてみましょう。
