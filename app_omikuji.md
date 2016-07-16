# おみくじアプリ

おみくじ占いアプリ - Monaca Docs
[https://docs.monaca.io/ja/sampleapp/samples/omikuji/](https://docs.monaca.io/ja/sampleapp/samples/omikuji/)

このアプリを作るのがゴールです。

## プロジェクトの作成

上記のようにMonacaにはすでにおみくじアプリのテンプレートがありますが、今回は、これを空のプロジェクトから順に作っていきます。
プロジェクトの新規作成から「No Framework」→「最小限のテンプレート」を選んでプロジェクトを作成してください。

<img width="1038" alt="newproject" src="https://cloud.githubusercontent.com/assets/843192/16891368/885f638a-4b33-11e6-83c6-38ba760a6483.png">

プロジェクトを開くと、下記のように、最小限のコードが書かれたプロジェクトとなっています。ここにアプリケーションのためのコードを書いていきます。

<img width="1464" alt="omikuji-001" src="https://cloud.githubusercontent.com/assets/843192/16891389/e54b023e-4b33-11e6-9ce0-c0eac8d50a01.png">

## 画像のアップロード

まず、アプリで使う画像を用意しましょう。

下記にアプリ内で使う7ファイルをアップしてあるので、ダウンロードしておいてください。zipファイルを展開すると7つの画像があります。

[https://s3-ap-northeast-1.amazonaws.com/tohokutechdojo-koriyama/monaca-omikuji/omikuji-images.zip](https://s3-ap-northeast-1.amazonaws.com/tohokutechdojo-koriyama/monaca-omikuji/omikuji-images.zip)


画像は`www`フォルダの下の`images`フォルダの中に置きたいので、まず`images`フォルダを作ります。
下記の画像のように`www`フォルダのところで右クリックして、「新規フォルダー」を選び、「images」というフォルダを作ってください。

<img width="532" alt="omikuji-002" src="https://cloud.githubusercontent.com/assets/843192/16891408/21b1c6ae-4b34-11e6-8d92-ea26474b1fe5.png">

フォルダができたら、その`images`フォルダの上で右クリックして、アップロードを選択して、画像をアップロードします。

<img width="678" alt="omikuji-003" src="https://cloud.githubusercontent.com/assets/843192/16891451/87d87c3e-4b34-11e6-9bca-826b2a94fd96.png">


下記のようになれば画像のアップロードは完了です。

<img width="245" alt="omikuji-004" src="https://cloud.githubusercontent.com/assets/843192/16891483/18b24cb2-4b35-11e6-88ac-bec7ee52b197.png">

## HTMLのコーディング

bodyタグ内に下記のコードを入力していきます。

<img width="935" alt="omikuji-005" src="https://cloud.githubusercontent.com/assets/843192/16891507/9b648026-4b35-11e6-9a5e-be7807975954.png">


## JavaScriptのコーディング

headタグ内のscriptタグ内に下記のコードを入力していきます。

<img width="782" alt="omikuji-006" src="https://cloud.githubusercontent.com/assets/843192/16891546/71d596d6-4b36-11e6-8027-2d5697b599eb.png">

ここまででアプリは最低限動作します。画面上部の「保存」を押して、「プレビュー」を押し、右のプレビューウィンドウからアプリの動作確認をしてみてください。スマホの実機がある人は、実機デバッグもしてみてください。

## CSSのコーディング

最後にCSSを書いて、見た目の整頓を行います。さきほど書いたscriptのすぐ下に、下記のように入力していきます。

<img width="543" alt="omikuji-007" src="https://cloud.githubusercontent.com/assets/843192/16891569/dabcf93c-4b36-11e6-969f-de0c09169b6b.png">


## JavaScript, CSSを外部ファイルにする

以上でアプリのコーディングはいったん完成し、冒頭で見たサンプルアプリとほぼ同じ状態になっています。
ただし、このサンプルアプリには、index.htmlというHTMLファイルの中に、JavaScriptもCSSも記述してしまっているという、ややまずい点があるので、
改善しましょう。

まず、cssの外部ファイルはstyle.cssというものがあるので、それを使います。styleタグ内に記載した内容を、style.css内にカット＆ペーストしてください。

画像のパス（そのコードが記述されたファイルから見たときの画像ファイルの位置が変わっているので、2行目の

    background-image: url("images/omikuji-bg.png");

を

    background-image: url("../images/omikuji-bg.png");

に修正します。

下記のようになればOKです。

<img width="689" alt="2016-07-16 09 41 37" src="https://cloud.githubusercontent.com/assets/843192/16891718/862e1d44-4b39-11e6-8409-bcf5820874df.png">

次にJavaScriptも外部ファイルに移しましょう。

wwwフォルダの下に、jsフォルダを作り、その中で新規ファイルを作成して、omikuji.jsと名前をつけます。

<img width="901" alt="omikuji-009" src="https://cloud.githubusercontent.com/assets/843192/16891635/e1bfe982-4b37-11e6-983b-63762059fc01.png">

scriptタグ内の中身をカット＆ペーストします。

<img width="885" alt="2016-07-16 09 32 49" src="https://cloud.githubusercontent.com/assets/843192/16891649/4719e6f2-4b38-11e6-8bcf-b213982ad5e1.png">

## JavaScriptのイベント登録もJavaScript内で行うようにリファクタリングする

このアプリでは、「はじめる」を押したときにおみくじを発動する、というJavaScriptイベントを登録していますが、現時点ではその指定は`onClick='omikuji'`というようにHTMLファイルに記述されてしまっています。

このアプリではこのクリックイベント1つしかないので問題になりませんが、たくさんボタンがあってそれを1つ1つのボタンに記述していると、コードが込み入ってきてよくわからなくなってしまいます。

HTMLファイルは構造だけを記述するべきなので、このコードもさきほど作った`omikuji.js`のほうに移動してみましょう。

まずHTMLファイルのほうから、onClickイベント部分の記述は削除します。

<img width="775" alt="2016-07-16 10 05 16" src="https://cloud.githubusercontent.com/assets/843192/16891889/d0e64af2-4b3c-11e6-858e-0e3ca35a2c54.png">


そして、`omikuji.js`のほうに以下の4行を追加します。

<img width="876" alt="2016-07-16 10 14 27" src="https://cloud.githubusercontent.com/assets/843192/16891939/1b34ceac-4b3e-11e6-8928-a725bf9899cd.png">

これでもう一度動作確認を行ってみましょう。さきほどと同じようにおみくじアプリが動作しました。

なお、この4行部分は、下記のように書いてもほぼ同じように動作します。

```javascript
window.onload = function() {
    var button = document.getElementById("button");
    button.addEventListener("click", omikuji, false);
}
```

どちらを記述してもOKですが、`document.addEventListener('DOMContentLoaded'`を使うほうが、どちらかというと望ましいようです。

このように、ソースコードの移動や整理を行って、よりよいコードに直す作業をリファクタリングといいます。

おみくじアプリについては以上です。
