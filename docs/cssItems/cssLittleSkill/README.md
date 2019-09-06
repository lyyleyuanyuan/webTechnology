# 一些CSS可以做到的小技巧
## rate评分组件
<cssLittleSkill-rateStars/>
```scss
$main: #ffa822; // 高亮颜色
$basic: #999; // 默认颜色
$content: "\e900";
$contentone: "\e901";
// 去掉input默认样式
.rateInput {
  -webkit-appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.rate-content {
  display: flex;
  flex-flow: row-reverse;
  // 单个星星
  input[name="rate"] {
    font-family: "iconfont"; // 之前引入的iconfont字体
    margin: 0;
    font-size: 30px;
    padding-right: 10px;
    font-size: 18px;
    // 默认显示的星星
    &::after {
      content: $content;
      color: $basic;
    }
    // 高亮的星星
    &:checked,&:hover,
    &:checked ~ input[name="rate"],
    &:hover ~ input[name="rate"] {
      &::after {
        content: $contentone;
        color: $main;
      }
      // 鼠标移入使星星放大
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
```
```html
<div class="rate-content">
  <input class="rateInput" type="radio" name="rate" />
  <input class="rateInput" type="radio" name="rate" />
  <input class="rateInput" type="radio" name="rate" />
  <input class="rateInput" type="radio" name="rate" />
  <input class="rateInput" type="radio" name="rate" />
</div>
```


+ **原理**
  + 找个好看的iconfont并且使用。如果不会~可以查看<a href="../../otherItems/iconfont">icon字体制作及引入</a>；
  + 用5个radio单选框，把默认样式去掉，显示星星；
  + 用checked伪类监听用户选中✅，由默认的星星变成高亮的星星；
  + 然后配合'~'兄弟操作符把当前选中的所有兄弟元素都一起高亮；
  + 把5个radio单选框反向排列；

+ **核心代码**
  + 元素反向排列：`display: flex; flex-flow: row-reverse;`
  + 兄弟元素操作：`input:checked ~ input`
> <a href="https://juejin.im/post/5d57adf5f265da03e3697e1b">rate评分组件参考文章</a>
 
 <comment-comment/> 
 