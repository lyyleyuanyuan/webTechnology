
<style>
table thead {
display:none;
}
</style>

# flex 布局详解
## flex弹性盒模型
<flexlayout-flexBox/>

## 属性解释

### flexbox

对于某个元素只要声明了`display: flex` 或者 `display:inline-flex`，那么这个元素就成为了弹性容器，具有flex弹性布局的特性。

flex布局是一种一维布局模型，一次只能处理一个维度（一行或者一列）上的元素布局,也就是说，**flex布局大部分的属性都是作用于主轴的，在交叉轴上很多时候只能被动地变化**。

+ 容器属性
  |    |      |      |      |      |      |
  | ---- | ---- | ---- | ---- | ---- | ---- |
  | flex-direction  | flex-wrap       | flex-flow       | justify-content | align-items     | align-content   |

+ 元素属性
  |    |      |      |      |      |      |
  | ---- | ---- | ---- | ---- | ---- | ---- |
  | order        | flex-grow    | flex-shrink  | flex-basis   | flex         | align-self   |


1. 每个弹性容器都有两根轴：**主轴和交叉轴**，两轴之间成90度关系。
2. 每根轴都有 **起点** 和 **终点**，这对于元素的对齐非常重要。
3. 弹性容器中的所有子元素称为<弹性元素>，**弹性元素永远沿主轴排列**。
4. 弹性元素也可以通过`display:flex`设置为另一个弹性容器，形成嵌套关系。

> **注意**<br/>水平的不一定就是主轴。<br/> 一个元素既可以是弹性容器也可以是弹性元素。

  

### flex-direction (主轴的方向设置)
我们可以在弹性容器上通过 `flex-direction` 修改主轴沿着主轴（Main Axis）(父容器) 的排列方向。弹性元素的排列方式也会发生改变，因为**弹性元素永远沿主轴排列**。
<flexlayout-flexDirection/>
+ **row** ： 水平（顺）
+ **column** ： 垂直（顺）
+ **row-reverse** ： 水平（逆）
+ **column-reverse** ： 垂直（逆）

### flex-wrap (沿主轴的排列处理)
弹性元素永远沿主轴排列，如果主轴排不下通过设置 `flex-wrap: nowrap | wrap | wrap-reverse` 可使得主轴上的元素不折行、折行、反向折行。**默认不折行**`nowrap`。

<flexlayout-flexWrap/>
+ **nowrap** ： 不折行
  + 子元素多的情况下是不会直接溢出父容器，这里就涉及到元素的**弹性伸缩应对**
  <!-- ，下面会讲到。 -->
+ **wrap** ： 正向折行
  + 顾名思义就是另起一行，那么折行之后行与行之间的间距（对齐）怎样调整？这里又涉及到**交叉轴上的多行对齐**
  <!-- ，下面会讲到。 -->
+ **wrap-reverse** ： 反向折行
  + 是从容器底部开始的折行，但每行元素之间的排列仍保留正向

### flex-flow (组合/复合属性)
+ `flex-direction` 和 `flex-wrap` 两个属性的排列组合。`组合/复合属性`
+ flex-flow = flex-drection + flex-wrap
+ `flex-flow` 相当于规定了flex布局的“工作流(flow)”

```scss
.wrap { flex-flow: row nowrap; }
```


:::tip
`flex 布局` 文档还在陆续写作中，先上传部分
:::