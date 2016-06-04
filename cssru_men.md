# CSS入門

CSSには3つの書き方があります。

## (1)style属性として記述

```
<p style="color:red;">赤い字</p>
```

## (2)styleタグの中に記述

```html
<!DOCTYPE HTML>
<html>
<head>
(中略)
    <style type="text/css">
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>青い字</p>
</body>
</html>
```

## (3)外部ファイルの中に記述

* style.cssの中に記載

```css
.green {
    color: breen;
  }
```

```html
<div class='green'>緑の字</div>

```

## よく使うCSSスタイル名

### color

フォントの色

### font-size

フォントサイズ

### margin

外の余白

### padding

中の余白

### height width

高さ、幅



参考：
実戦的 HTML & CSS 入門 | TipsZone  http://tipszone.jp/20120713_html/
