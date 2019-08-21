
# 记录一些css 常用属性及方法

## a标签清除下划线

<cssProperty-textDecoration/>

```css
a {
    text-decoration: none || underline || blink || overline || line-through;
    /* none: 无装饰 || underline: 下划线 || blink: 闪烁  || overline: 上划线  || line-through: 贯穿线  */
}
```

## 盒子模型:box-sizing

```css
div {
    box-sizing: content-box | border-box | inherit;
    /* content-box: width=border+padding+content  || border-box: width=content  || inherit: 初始即content-box  */
}
```

+ content-box

  padding和border不被包含在定义的width和height之内。 盒子实际宽度（高度）=内容（content）+ 边框（border）+ 间隙（padding）+ 间隔（margin）

+ border-box

  padding和border被包含在定义的width和height之内。 内容（content）=盒子实际宽度（高度）- 边框（border）- 间隙（padding）- 间隔（margin）
