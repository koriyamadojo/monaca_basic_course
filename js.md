#JacaScript入門
##準備
JavaScriptには二つの記述方法があります。
1. HTMLファイルの`<script >`タグ内に記述する
2. 外部jsファイルとして記述する

今回は1で解説を進めます。  

まず[HTML入門](https://koriyamadojo.gitbooks.io/basic_course/content/intro_html.html)を参考に、Blankプロジェクトを作成し、EMMETでHTMLの基本形を作成します。
```html
<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
	<title>タイトル</title>
</head>
<body>
	
</body>
</html>

```
このとき、`<head>`というタグが作成されます。  
タグの中で`script[type='text/javascript']`と打ってTabキーを押すと、JavaScriptを記述するためのタグが作成されます。
```html
<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
	<title>タイトル</title>
    <script type="text/javascript">
    </script>
</head>
<body>
	
</body>
</html>

```
これでHTMLファイル内にJavaScriptを記述する準備は完了です。  
以降は、この`<script>`タグの中にJavaScriptを記述していきます。

##関数とイベント
JavaScriptは、大きく分けて関数とイベントで記述されています。

###関数
関数とは、一度にまとめて行いたい処理を一つにまとめたものです。  
例えば、以下の処理は「abc」という名前の関数として記述されています。
```html
<script type="text/javascript">
    function abc() {  
        alert("abc");  
    }
</script>
```
関数abcは、実行すると画面上に以下のアラートを表示します。
![](スクリーンショット 2016-06-11 15.19.23.png)

関数の特徴は、他の処理から呼び出されることによって動き始めることです。  
呼び出されない限り実行されることはありません。  
また、一度定義しておけば後で何度でも呼び出すことができます。

###イベント
イベントは、WEBブラウザ上で何らかのアクションが起こると発生します。

 - WEBブラウザそのものから発生するイベントの例
  + ブラウザの読込が完了した時
  + ウィンドウのサイズを変更した時
 - ユーザーがアクションを起こしたタイミングで発生するイベントの例
  + ボタンをクリックした時
  + Enterキーを押した時

JavaScriptは、このようなイベントが発生したタイミングで処理を記述することができます。

上記の例の中から、「ブラウザの読込が完了した時」のイベント処理を記述してみます。  
```html
<script type="text/javascript">
    window.onload = function () {
        alert("abc");
    }
</script>
```
`window.onload`が「ブラウザの読込が完了した時」というイベントを指定しています。  
この時に実行したい処理を`function() { }`の中に記述しています。  

