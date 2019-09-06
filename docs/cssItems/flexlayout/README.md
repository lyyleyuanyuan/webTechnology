
<style>
table thead {
display:none;
}
</style>

# flex 布局详解
## flex弹性盒模型
<flexlayout-flexBox/>

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

  
## 容器属性详解

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
默认情况下，item在主轴上排列成一条线，即**弹性元素永远沿主轴排列**。<br/>
通过设置**flex-wrap: nowrap | wrap | wrap-reverse**决定父容器内item当排列不下时是否换行以及换行的方式。<br/>
可使得主轴上的元素`不折行` 、 `折行` 、 `反向折行` 。默认不折行 nowrap。
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
+ `flex-flow` 相当于规定了flex布局的“工作流(flow)”。

```scss
.wrap { flex-flow: row nowrap; }
```

### justify-content（主轴上item的对齐方式）
决定父容器内item在主轴上的对齐方式
<flexlayout-justifyContent/>
+ **flex-start** ：左对齐
+ **flex-end** ：右对齐
+ **center** ：居中对齐
+ **space-between** ：两端对齐
+ **space-around** ：沿轴线均匀分布

### align-items (交叉轴上的单行对齐)
决定了父容器内item在交叉轴上的对齐方式。<br/>
默认值是stretch，当元素没有设置具体尺寸时会将容器在交叉轴方向撑满。
<flexlayout-alignItems/>

**当主轴水平时，其具体含义为**
+ **flex-start** ：顶端对齐
+ **flex-end** ：底部对齐
+ **center** ：竖直方向上居中对齐
+ **baseline** ：item第一行文字的基线对齐
+ **stretch** ：当item未设置高度时，item将和父容器等高对齐

### align-content(交叉轴上的多行对齐)
当有多根主轴时即item不止一行时，多行在交叉轴轴上的对齐方式,如果只有一行，该属性不起作用。 <br/>
**只对多行元素有效**，会以多行作为整体进行对齐，**容器必须开启换行**。<br/>
必须设置 `flex-wrap` 属性为 `wrap` 或者 `wrap-reverse`<br/>
定义了align-content后，align-items属性将失效。
<flexlayout-alignContent/>

**当主轴水平时，其具体含义为**
+ **flex-start** ：左对齐
+ **flex-end** ：右对齐
+ **center** ：居中对齐
+ **space-between** ：两端对齐
+ **space-around** ：沿轴线均匀分布
+ **stretch** ：各行将根据其flex-grow值伸展以充分占据剩余空间


## 元素属性详解

### order
order的值是整数，默认为0，整数越小，item排列越靠前。<br/>
值相同时，以dom中元素排列为准。
<flexlayout-order/>
```scss
.item { order: 0; }
```

### flex-grow(放大比例)
在flex布局中，父容器剩余宽度默认是不进行分配的，也就是所有弹性元素的`flex-grow`都为0。<br/>
通过指定 `flex-grow` 整数值，分配父容器剩余宽度的比例，**叠加**到原来item的尺寸上，**负值无效**。<br/>
**无多余宽度时，flex-grow无效**。<br/>
+ **计算方法**
  + 容器剩余宽度：50px
  + 分成每份：50px / (3+2) = 10px
  + 元素1放大为：50px + 3 * 10 = 80px

<flexlayout-flexGrow/>


### flex-shrink(缩小比例)
`flex-shrink` 默认为1，当父容器宽度不够分配时，元素都将等比例缩小，占满整个宽度。<br/>
`flex-shrink: 1` 并非严格等比缩小，**会考虑弹性元素本身的大小**。<br/>
一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。 <br/>
父容器设置的 `flex-wrap:wrap/wrap-reverse` 则不存在空间不足的情况，**flex-shrink无效**。 <br/>
**负值对该属性无效**。
+ **计算方法**
  + 容器剩余宽度：-70px
    + 弹性元素1：50px（→37.03px）
    + 弹性元素2：100px（→74.08px）
    + 弹性元素3：120px（→88.89px）
  + 缩小因子的分母：1*50 + 1*100 + 1*120 = 270 (1为各元素flex-shrink的值)
  + 元素1的缩小因子：1*50/270
  + 元素1的缩小宽度为缩小因子乘于容器剩余宽度：1*50/270 * (-70)
  + 元素1最后则缩小为：50px + (1*50/270 *(-70)) = 37.03px

<flexlayout-flexShrink/>

### flex-basis(初始尺寸)
弹性处理之余，有些元素尺寸需固定不进行弹性调整。除了width和height以外，还可以使用 `flex-basis` 属性。<br/>
`flex-basis` 设置的是元素在主轴上的初始尺寸，初始尺寸就是元素在 `flex-grow` 和 `flex-shrink` 生效前的尺寸。
+ **与width/height的区别**
  + **两者都为0**
    + width: 0 ; —— 完全没显示
    + flex-basis: 0 ; —— 根据内容撑开宽度
  + **两者非0**
    + —— 数值相同时两者等效
    + —— 同时设置，flex-basis优先级高
  + **flex-basis为auto**
    + flex-basis为auto时，如设置了width则元素尺寸由width决定；没有设置则由内容决定
  <!-- + flex-basis == 主轴上的尺寸 != width
    + 将主轴方向改为：上→下
    + 此时主轴上的尺寸是元素的height
    + flex-basis == height -->


### flex(复合属性)
flex = flex-grow + flex-shrink + flex-basis。<br/>
`flex` 属性是 `flex-grow` 、 `flex-shrink` 和 `flex-basis` 三属性的简写总和。<br/>
默认值为0 1 auto。<br/>
该属性有两个快捷写法：**`auto`（1 1 auto）** 和 **`none`（0 0 auto）**。<br/>
+ **快捷写法**
  + `flex: 1;` => `flex: 1 1 0%;`
  + `flex: 2;` => `flex: 2 1 0%;`
  + `flex: auto;` => `flex: 1 1 auto;`
  + `flex: none;` => `flex: 0 0 auto;` // 常用于固定尺寸 不伸缩
+ **flex:1 和 flex:auto 的区别**
  + 其实可以归结于 `flex-basis:0` 和 `flex-basis:auto` 的区别。
  + `flex-basis` 是指定初始尺寸，当设置为0时（绝对弹性元素），此时相当于告诉 `flex-grow` 和 `flex-shrink` 在伸缩的时候不需要考虑我的尺寸；相反当设置为auto时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑。

### align-self(单独设置对齐方式)
`align-self` 单独对某个元素设置交叉轴对齐方式。<br/>
值与 `align-items` 相同。<br/>
可覆盖容器的 `align-items` 属性。<br/>
默认值为 `auto` ，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于stretch。<br/>
<flexlayout-flexSelf/>
 
 <comment-comment/> 
 