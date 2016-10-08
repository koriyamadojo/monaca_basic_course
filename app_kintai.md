# 勤怠アプリ

ニフティクラウド　モバイルバックエンド（Nifty Cloud Mobile Backend）とMoncaを用いて、次のような勤怠アプリを作ります。

![2016-10-08 11 29 52](https://cloud.githubusercontent.com/assets/843192/19209680/94a0e796-8d4a-11e6-8854-e40b00dc97a0.png)

* 画面に現在時刻が表示されている
* 「出勤」を押すと出勤時間を記録する
* 「退勤」を押すと退勤時間を記録する
* 画面いは今日の出勤時間と退勤時間が表示あれている
* 「履歴へ」を押すと別画面でこれまでの履歴を表示する

今回は、次のことを学びます。

* ニフティクラウド　モバイルバックエンドを用いたデータの書き込み・読み込み
* Onsen UIの導入
* JavaScriptの分割
* イベントベースのプログラムの組み立て方

プロジェクトを作成します。
「新規プロジェクトの作成」から、「Onsen UI」→「Onsen UI V2 JS Minimum」を選択します

![2016-10-08 11 38 26](https://cloud.githubusercontent.com/assets/843192/19209715/d1b04ea0-8d4b-11e6-9138-79b5f4a7bd60.png)

まずはHTMLを書いてしまいます。
index.htmlに下記を入力してください。

```html 
<body>
    <ons-navigator id="navigator" page='page1'></ons-navigator>
    <ons-template id='page1'>
        <ons-page>
            <ons-toolbar>
                <div class='center'>勤怠アプリ</div>
            </ons-toolbar>
            <div>
                <p>現在の日時</p>
                <p id='date_display'>現在の日付が入ります</p>
                <p id="time_display">現在の時間が入ります</p>
            </div>
            <div>
                <ons-button id="in-button">出勤</ons-button>
                <ons-button id="out-button">退勤</ons-button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>出勤時刻</th>
                            <th>退勤時刻</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            <td id='today_in'></td>
                            <td id='today_out'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <ons-button id="push-button">履歴へ</ons-button>
            </div>
        </ons-page>
    </ons-template>
    
    <ons-template id="page2">
        <ons-page>
            <ons-toolbar>
                <div class="left"><ons-back-button>戻る</ons-back-button></div>
                <div class="center">履歴</div>
            </ons-toolbar>
            
            <p>履歴ページ</p>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>時間</th>
                            <th>出勤/退勤</th>
                        </tr>    
                    </thead>
                    <tbody id='all_history'>
                    </tbody>
                </table>
            </div>
        </ons-page>
    </ons-template>
</body>
```



