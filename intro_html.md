# HTML入門

ではまず、HTMLから見ていきましょう。実際に動いているものを見たほうが分かりやすいので、基本を押さえたあとは、演習をして実際に動作させてみましょう。

新しく、Blankプロジェクトを作成し、開いてください。


## EMMETを使って快適HTMLコーディング

HTMLは、タグ `<こんなの >` を用いて、前と後ろを囲う形で記述します。ただ、この記述の仕方はコンピュータが解釈するのには都合がよくても、人間が書くには非効率です。そこで、今では多くの開発現場で使われているEMMET（旧Zen-Coding）を紹介します。

HTMLの記述は面倒くさい印象がありますが、これをマスターするとHTMLを素早く記述できるようになります。

EMMET(エメット)とは、HTMLやCSSを少ないタイピング量で記述することを目的として開発された、コーディング補助のためのプラグインです。多くのエディタに対応していますが、Monaca Cloud IDEにも対応しています。

いったん覚えてしまうと手放せないくらい便利になるので、最初にマスターしてしまいましょう。

[Emmet - MonacaDocs](https://docs.monaca.io/ja/manual/development/monaca_ide/zen_coding/)  

## 基本形(HTML5)

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

HTML5以前はもっと複雑な宣言が必要でしたが、HTML5前提でいくと最低限これだけあれば大丈夫です。
なお、EMMETでは`!`だけでこれが展開されます。

## 基本的なタグ

### `<br>`

改行するときに使います。 `<br />`と書くこともありますが、HTML5的には `<br>`だけでOKです。閉じタグは不要です。

```
ここで改行します<br>
```

### `<h1> ~ <h6>`

見出しを表現するのに使います。
```
<h1>見出しです</h1>
```

### `<p>`

段落

```
<p>段落を表します</p>
```

### `<a>`

リンク

```
<a href='index.html'>index.htmlへリンクします</a>
```

### `<div>`

ブロック要素を表します。

```
<div>div要素</div>
```

### `<span>`

インライン要素を表します。divとの違いは、改行しないことです。

```
<span>これがspan要素</span>
```

### `<table> <hhead> <tbody> <tr> <th> <td>`

テーブルを作ります。

`table>(thead>tr>th{ヘッダー$}*4)+(tbody>(tr>td{データ$}*4)*3)`をEMMETで展開してみましょう。

```html
    <table>
        <thead>
    		<tr>
    			<th>ヘッダー1</th>
    			<th>ヘッダー2</th>
    			<th>ヘッダー3</th>
    			<th>ヘッダー4</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td>データ1</td>
    			<td>データ2</td>
    			<td>データ3</td>
    			<td>データ4</td>
    		</tr>
    		<tr>
    			<td>データ1</td>
    			<td>データ2</td>
    			<td>データ3</td>
    			<td>データ4</td>
    		</tr>
    		<tr>
    			<td>データ1</td>
    			<td>データ2</td>
    			<td>データ3</td>
    			<td>データ4</td>
    		</tr>
    	</tbody>
    </table>
 ```

* tableタグ・・・一番外側で囲う
* tr・・・行を表す
* th・・・ヘッダのセルを表す
* td・・・データのセルを表す
* thead・・・ヘッダ行をまとめるときに使う
* tbody・・・データ行をまとめるときに使う

### `<ol><ul><li>`

リストを作ります。

* ol・・・Ordered List。順序のあるリストを作る場合に使います。
* ul・・・Unordered List。順序のないリストを作る場合に使います。
* li・・・olやulのリスト要素になります。

`ul>li{リスト$}*3`をEMMETで展開してみましょう。

```html
    <ul>
        <li>リスト1</li>
    	<li>リスト2</li>
    	<li>リスト3</li>
    </ul>
```

### `<img>`

画像を挿入します。

```html
<img src="picture.jpg" alt="これは絵です">
```

src・・・画像の場所を示します。
alt・・・画像が表示できない場合などのための説明テキストです。

