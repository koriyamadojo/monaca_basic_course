#jQuery入門
jQueryとは、Javascript言語で記述された関数のまとまりです。

jQueryを利用するためには、[本家サイト](https://jquery.com/)よりJavaScriptファイルをダウンロードし、  
HTMLコード上で読み込んでおく必要があります。
```html
<head>
    <script type="text/javascript" src="【ダウンロードしたJavaScriptファイルの場所】"></script>
</head>
```

<br>
[JavaScript入門](https://koriyamadojo.gitbooks.io/basic_course/content/js.html)で作成したボタンクリックイベントをjQueryに書き換えてみると、以下のようになります。
```html
<script type="text/javascript">
    $(function() {							// ①
        $("#btn1")on("click", function () {	// ②
            alert("abc");					// ③
        });
    });
</script>
```
[解説]

①HTMLの読込が完了した時のイベントを指定しています。  
　つまり`window.onload`と同じです。

②idが「btn1」の要素に対して、クリックイベントを定義しています。  
　同じことをJavaScriptでやろうとすると、以下のように2行に渡って記述する必要があります。
```JavaScript
var eBtn1 = document.getElementById("btn1");
eBtn1.addEventListener("click", function(){
```

③②のイベント中に行いたい処理を記述しています。

###jQueryの利点

#####可読性の向上
上記で示した通り、同じ処理をJavaScriptとjQueryとで比べてみると、記述量が減って読みやすくなっていると思います。

#####クロスブラウザ対応ができる
JavaScriptは複雑な処理になってくると、ブラウザの種類によって異なる挙動をしてしまうことがあります。  
jQueryを利用すると、ブラウザ間の動きの違いを気にすることなく処理を記述することができます。

#####CSSと同じセレクタが使える
idが「btn1」の要素を「#btn1」のように表現することを、「セレクタ表記」といいます。  
この表記はCSSでもjQueryでも同じ書き方をすることができます。


なお、JavaScriptもjQueryも便利なリファレンスがWEB上にたくさん載っています。  
是非調べながら書いてみてください。

<br>