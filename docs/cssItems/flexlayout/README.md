
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

对于某个元素只要声明了`display: flex` 或者 `display:inline-flex`，那么这个元素就成为了弹性容器，具有flex弹性布局的特性。<br/>
flex布局是一种一维布局模型，一次只能处理一个维度（一行或者一列）上的元素布局。<br/>
也就是说，**flex布局大部分的属性都是作用于主轴的，在交叉轴上很多时候只能被动地变化**。
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

**注意**
:::tip
水平的不一定就是主轴。<br/> 一个元素既可以是弹性容器也可以是弹性元素。<br/>使用flex布局，容器内元素即flex item的`float`，`clear`、`vertical-align`属性将失效。
:::


  

### flex-direction (主轴的方向设置)
<!-- 决定主轴的方向，即项目排列的方向 -->
我们可以在弹性容器上通过 `flex-direction` 决定主轴的方向，即项目排列的方向。<br/>
弹性元素的排列方式也会发生改变，因为**弹性元素永远沿主轴排列**。

<flexlayout-flexDirection/>
+ **row** ： 主轴为水平方向，项目沿主轴从左至右排列
+ **column** ： 主轴为竖直方向，项目沿主轴从上至下排列
+ **row-reverse** ： 主轴水平，项目从右至左排列，与row反向
+ **column-reverse** ： 主轴竖直，项目从下至上排列，与column反向

### flex-wrap (沿主轴的排列处理)
默认情况下，item在主轴上排列成一条线，即**弹性元素永远沿主轴排列**<br/>
通过设置**flex-wrap: nowrap | wrap | wrap-reverse**决定当排列不下时是否换行以及换行的方式<br/>
可使得主轴上的元素`不折行` 、 `折行` 、 `反向折行` 。默认不折行 nowrap 。

<flexlayout-flexWrap/>
+ **nowrap** ： 自动缩小项目，不折行
  + 子元素多的情况下是不会直接溢出父容器，这里就涉及到元素的**弹性伸缩应对**
  <!-- ，下面会讲到。 -->
+ **wrap** ： 折行，且第一行在上方
  + 顾名思义就是另起一行，那么折行之后行与行之间的间距（对齐）怎样调整？这里又涉及到**交叉轴上的多行对齐**
  <!-- ，下面会讲到。 -->
+ **wrap-reverse** ： 折行，第一行在下面
  + 是从容器底部开始的折行，但每行元素之间的排列仍保留正向

### flex-flow (组合/复合属性)
+ flex-flow = flex-drection + flex-wrap
+ `flex-direction` 和 `flex-wrap` 两个属性的排列组合。`组合/复合属性`
+ `flex-flow` 相当于规定了flex布局的“工作流(flow)”

```scss
.wrap { flex-flow: row nowrap; }
```

<!-- ### justify-content (组合/复合属性)
决定item在主轴上的对齐方式
+ flex-flow = flex-drection + flex-wrap
+ `flex-direction` 和 `flex-wrap` 两个属性的排列组合。`组合/复合属性`
+ `flex-flow` 相当于规定了flex布局的“工作流(flow)” -->

:::tip
`flex 布局` 文档还在陆续写作中，未完待续。。。
:::