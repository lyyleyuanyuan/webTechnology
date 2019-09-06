# 清除浮动的几种方法

**不清除浮动会发生高度塌陷:** <br/>浮动元素父元素高度自适应（父元素不写高度时， 子元素写了浮动后， 父元素会发生高度塌陷）

<!-- * clear清除浮动（添加空div法）在浮动元素下方添加空div, 并给该元素写css样式:{clear:both; height:0; overflow:hidden; }

* 给浮动元素父级设置高度
* 父级同时浮动（需要给父级同级元素添加浮动）
* 父级设置成inline-block， 其margin: 0 auto居中方式失效
* 给父级添加overflow:hidden 清除浮动方法
* 万能清除法 after伪类 清浮动（现在主流方法， 推荐使用） -->

## 父级div定义伪类:after和zoom

  - **原理:** IE8以上和非IE浏览器才支持:after， zoom(IE转有属性)可解决ie6, ie7浮动问题
  - **优点:** 浏览器支持好， 不容易出现怪问题
  - **缺点:** 代码多， 不少初学者不理解原理， 要两句代码结合使用， 才能让主流浏览器都支持
  - **建议:** 推荐使用， 建议定义公共类， 以减少CSS代码
  

```html
<div class=" clearfloat">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
```

  

```scss
.clearfloat:after {
  content: ".";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.clearfloat {
  zoom: 1
}
```

## 在结尾处添加空div标签clear:both

  - **原理:** 添加一个空div， 利用css提高的clear:both清除浮动， 让父级div能自动获取到高度
  - **优点:** 简单， 代码少， 浏览器支持好， 不容易出现怪问题
  - **缺点:** 不少初学者不理解原理； 如果页面浮动布局多， 就要增加很多空div， 让人感觉很不爽
  - **建议:** 不推荐使用， 但此方法是以前主要使用的一种清除浮动方法

  

```html
<div>
  <div class="left">Left</div>
  <div class="right">Right</div>
  <div class="clearfloat"></div>
</div>
```

  

```scss
.clearfloat {
  clear: both
}
```

## 父级div定义height

  - **原理:** 父级div手动定义height， 就解决了父级div无法自动获取到高度的问题
  - **优点:** 简单， 代码少， 容易掌握
  - **缺点:** 只适合高度固定的布局， 要给出精确的高度， 如果高度和父级div不一样时， 会产生问题
  - **建议:** 不推荐使用， 只建议高度固定的布局时使用

  

```html
<div class="clearfloat">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
```

  

```scss
.clearfloat {
  height: 200px;
}
```

## 父级div定义overflow:hidden

  - **原理:** 必须定义width或zoom:1， 同时不能定义height， 使用overflow:hidden时， 浏览器会自动检查浮动区域的高度
  - **优点:** 简单， 代码少， 浏览器支持好
  - **缺点:** 不能和position配合使用， 因为超出的尺寸的会被隐藏
  - **建议:** 只推荐没有使用position或对overflow:hidden理解比较深的朋友使用
  

```html
<div class="clearfloat">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
```

```scss
.clearfloat {
  width: 98%;
  overflow: hidden
}
```

## 父级div定义overflow:auto

  - **原理:** 必须定义width或zoom:1， 同时不能定义height， 使用overflow:auto时， 浏览器会自动检查浮动区域的高度
  - **优点:** 简单， 代码少， 浏览器支持好
  - **缺点:** 内部宽高超过父级div时， 会出现滚动条。 
  - **建议:** 不推荐使用， 如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧。 
  

```html
<div class="clearfloat">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
```

```scss
.clearfloat {
  width: 98%;
  overflow: auto
}
```

## 父级div也一起浮动

  - **原理:** 所有代码一起浮动， 就变成了一个整体
  - **优点:** 没有优点
  - **缺点:** 会产生新的浮动问题。 
  - **建议:** 不推荐使用， 只作了解。 
  

```html
<div class="clearfloat">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
<div class="clearfloatOne"></div>
```

  

```scss
.clearfloat {
  float: left;
}

.clearfloatOne {
  clear: both
}
```

## 父级div定义display:table

  - **原理:** 将div属性变成表格
  - **优点:** 没有优点
  - **缺点:** 会产生新的未知问题
  - **建议:** 不推荐使用， 只作了解。 
  

```html
<div class="clearfloat">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
```

  

```scss
.clearfloat {
  display: table;
}
```


 
 <comment-comment/> 
 