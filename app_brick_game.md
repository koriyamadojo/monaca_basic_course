# シンプルゲーム

[ブロック崩しゲーム](https://docs.monaca.io/ja/sampleapp/samples/break_the_bricks/)
を作ります。

ブロック崩しゲームのサンプルコードはこちら
- <https://docs.monaca.io/ja/_downloads/break_the_bricks.zip>
- <https://github.com/koriyamadojo/monaca-brick-game-sample>

このアプリでは、ゲームにランキング機能をつけるのがゴールです。

こちらの資料を参考にしています

- [ブロック崩しゲーム](https://docs.monaca.io/ja/sampleapp/samples/break_the_bricks/)
- [Monacaアプリのゲームにランキング機能をつける](http://mb.cloud.nifty.com/doc/current/tutorial/monaca_breakout.html#スコアランキングを表示する)

---

### Pixi.js

Pixi.jsは、Goodboy Digital社が配布している2D描画用のjavascriptライブラリです。
WebGL経由でGPUを使う(（非対応のデバイスではCanvasを使う）のでHTML５のレンダリングエンジンの中でもパフォーマンスが高いと言われてます。
この**Pixi.js**を使用したゲームを作ります。

* Pixi.js
  - <http://www.pixijs.com/>
  - MITライセンス
  
---

## プロジェクトの作成

Monacaの「新規プロジェクトの作成」→「サンプルアプリ」→「ブロック崩し」を選択してプロジェクトを作成します。
アプリ名は任意に変更してください。

<img width="480" src="./images/424/000.png">

### ファイル構成

* index.html
  - スタート画面のページ
* js/main.js
  - ゲームアプリのメイン処理のJavaScript ファイル
* css/style.css
  - アプリ共通スタイルシート
* img/*.png
  - 画像ファイル
* TrueType のフォント(画面表示用)
  - res/VT323-Regular.ttf

### 必要な JS/CSS コンポーネント

* Pixi
  - JavaScriptベースのレンダリングエンジンです。

### 必要な JS/CSS コンポーネント

なし

---

### ソースコードの解説

サンプルアプリでは、既にゲームが動作するところまで出来ている。

#### js/main.js

main.js は、ゲームの処理を定義している。

BBオブジェクトが主な処理をしているメインのコードです

BBオブジェクトの主なプロパティ(変数)は下記です

- スクリーンサイズ用 ( screenSize )
- パドル用 ( paddle )
- ボール用 ( balls )
- ブロック用 ( blocks )
- スコア用 ( score )

メソッド(関数)は下記となってます。
- マップの作成用 ( setMap() )
- ボールの配置用 ( addBall() )
- パドルの配置用 ( addPaddle() )
- ゲームのリセット用 ( reset() )
- スコアの計算用 ( addScore() )
- ゲームの終了用 ( endGame() )

#### Pixiの流れ

Pixiの処理の流れは、ステージとレンダリング用のエリアを作ってオブジェクト(画像等)を配置し、時間毎にオブジェクトの位置などを変更していきます。


1. オブジェクト（画像スプライトやテキストなど）、ステージ、レンダラーを作る
2. ステージにオブジェクトを乗せる
3. レンダラーのViewをHTMLの要素に追加する
4. アニメーション処理を作る。この中で1コマで行う処理を書く。オブジェクトを動かしたり。最終的にレンダラーを使ってス5. テージを描画する処理を含める
6. アニメーション処理を繰り返し実行

```javascript
...

// ステージを作成
var stage = new PIXI.Stage(背景色を指定);

// レンダラーを作成
var renderer = PIXI.autoDetectRenderer(width, height);

// レンダラーのviewをDOMに追加する
document.getElementById("pixiview").appendChild(renderer.view);

// テキストオブジェクトを作る
var textobj = new PIXI.Text("Hello World!", {font:'bold 60pt Arial'});

// テキストオブジェクトをステージに乗せる
stage.addChild(textobj);

// アニメーション関数を定義する
function animate(){
    requestAnimFrame(animate); // 次の描画タイミングにanimateを登録する(毎回登録する)
    // フレーム毎の処理をする
    renderer.render(stage);   // 描画する
}

// 次のアニメーションフレームでanimate()を呼び出される為に登録をする
requestAnimFrame(animate);
...
```
---
