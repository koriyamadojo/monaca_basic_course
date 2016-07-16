# クライアントのみのアプリ

## おみくじアプリ

おみくじ占いアプリ - Monaca Docs
[https://docs.monaca.io/ja/sampleapp/samples/omikuji/](https://docs.monaca.io/ja/sampleapp/samples/omikuji/)

このアプリを作るのがゴールです。

### プロジェクトの作成

上記のようにMonacaにはすでにおみくじアプリのテンプレートがありますが、今回は、これを空のプロジェクトから順に作っていきます。
プロジェクトの新規作成から「No Framework」→「最小限のテンプレート」を選んでプロジェクトを作成してください。

<img width="1038" alt="newproject" src="https://cloud.githubusercontent.com/assets/843192/16891368/885f638a-4b33-11e6-83c6-38ba760a6483.png">

プロジェクトを開くと、下記のように、最小限のコードが書かれたプロジェクトとなっています。ここにアプリケーションのためのコードを書いていきます。

<img width="1464" alt="omikuji-001" src="https://cloud.githubusercontent.com/assets/843192/16891389/e54b023e-4b33-11e6-9ce0-c0eac8d50a01.png">

### 画像のアップロード

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

### HTMLのコーディング

bodyタグ内に下記のコードを入力していきます。

<img width="935" alt="omikuji-005" src="https://cloud.githubusercontent.com/assets/843192/16891507/9b648026-4b35-11e6-9a5e-be7807975954.png">


### JavaScriptのコーディング

headタグ内のscriptタグ内に下記のコードを入力していきます。

<img width="782" alt="omikuji-006" src="https://cloud.githubusercontent.com/assets/843192/16891546/71d596d6-4b36-11e6-8027-2d5697b599eb.png">

ここまででアプリは最低限動作します。画面上部の「保存」を押して、「プレビュー」を押し、右のプレビューウィンドウからアプリの動作確認をしてみてください。スマホの実機がある人は、実機デバッグもしてみてください。

### CSSのコーディング

最後にCSSを書いて、見た目の整頓を行います。さきほど書いたscriptのすぐ下に、下記のように入力していきます。

<img width="543" alt="omikuji-007" src="https://cloud.githubusercontent.com/assets/843192/16891569/dabcf93c-4b36-11e6-969f-de0c09169b6b.png">


### JavaScript, CSSを外部ファイルにする

以上でアプリのコーディングはいったん完成し、冒頭で見たサンプルアプリとほぼ同じ状態になっています。
ただし、このサンプルアプリには、index.htmlというHTMLファイルの中に、JavaScriptもCSSも記述してしまっているという、ややまずい点があるので、最後にそこを改善しましょう。

まず、cssの外部ファイルはstyle.cssというものがあるので、それを使います。styleタグ内に記載した内容を、style.css内にカット＆ペーストしてください。

<img width="662" alt="omikuji-008" src="https://cloud.githubusercontent.com/assets/843192/16891626/b6bb76b6-4b37-11e6-8d2b-fb17da7fbcf6.png">

次にJavaScriptも外部ファイルに移しましょう。

wwwフォルダの下に、jsフォルダを作り、その中で新規ファイルを作成して、omikuji.jsと名前をつけます。

<img width="901" alt="omikuji-009" src="https://cloud.githubusercontent.com/assets/843192/16891635/e1bfe982-4b37-11e6-983b-63762059fc01.png">
