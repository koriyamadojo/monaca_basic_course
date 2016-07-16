## クライアントのみのアプリ

### おみくじアプリ

おみくじ占いアプリ - Monaca Docs
[https://docs.monaca.io/ja/sampleapp/samples/omikuji/](https://docs.monaca.io/ja/sampleapp/samples/omikuji/)

このアプリを作るのがゴールです。

上記のようにMonacaにはすでにおみくじアプリのテンプレートがありますが、今回は、これを空のプロジェクトから順に作っていきます。
プロジェクトの新規作成から「No Framework」→「最小限のテンプレート」を選んでプロジェクトを作成してください。

<img width="1038" alt="newproject" src="https://cloud.githubusercontent.com/assets/843192/16891368/885f638a-4b33-11e6-83c6-38ba760a6483.png">

プロジェクトを開くと、下記のように、最小限のコードが書かれたプロジェクトとなっています。ここにアプリケーションのためのコードを書いていきます。

<img width="1464" alt="omikuji-001" src="https://cloud.githubusercontent.com/assets/843192/16891389/e54b023e-4b33-11e6-9ce0-c0eac8d50a01.png">

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




