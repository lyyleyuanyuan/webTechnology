
# 记录一些css 常用属性及方法

## a标签清除下划线

<cssProperty-textDecoration/>

```scss
a { text-decoration: none; }
```
+ **none** ：无装饰
+ **underline** ：下划线
+ **blink** ：闪烁
+ **overline** ：上划线
+ **through** ：贯穿线

## 盒子模型:box-sizing

```scss
div { box-sizing: content-box; }
```

+ **content-box** ：`padding` 和 `border` **不被包含**在定义的 `width` 和 `height`之内。 
  + width = content + border + padding +  margin
  + 盒子实际宽度/高度 = 内容 + 边框 + 间隙 + 间隔

+ **border-box** ：`padding` 和 `border` **被包含**在定义的 `width` 和 `height` 之内。 
  + width = content
  + 内容 = 盒子实际宽度/高度 - 边框 - 间隙 - 间隔 

+ **inherit** ：初始即content-box

 
 <comment-comment/> 
 