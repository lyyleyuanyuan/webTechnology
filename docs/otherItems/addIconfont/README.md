# icon字体制作及引入

 咱们用vue 经常会使用像`element-ui`、`iView`等这类的UI组件库，但组件库内的icon还是和自己项目中的icon有出入或者图标库不够全（设计师灵感啊喂~）下面给大家带来创造自己的iconFont图标教程

**操作步骤归纳起来可分为三步：**
+ 准备自定义ICON素材 
+ 生成字体文件
+ 在CSS中引用字体文件

## 准备自定义icon素材 
+ 把icon从设计师给的源文件内导出相应的svg。（如果~设计师够好。让他/她为你省事~~⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄）
+ 或者直接从<a target="_blank" href="https://www.iconfont.cn/">Iconfont-阿里巴巴矢量图标库</a>内找到心仪的icon导出svg
:::tip
**注意**

icomoon要求素材格式必须为SVG格式，所以其他格式的素材需提前转换，在此不做赘述。
:::


## 生成图标字体
+ 打开<a target="_blank" href="https://icomoon.io/app/#/select">字体在线生成工具</a>
+ 单击`Import Icons`按钮 导入我们准备好的svg 图标，或者`Add Icons From Library`引用这个网站上的一些现成图标 **（图一）**。
+ 素材添加完成后，选择需要的图标，点击右下角`Generate Font F`按钮进入属性设置页面 **（图二）**。
+ 点击`Preferences`按钮，进行字体属性设置 **（图三）**。
  + 这里我们可以设置字体的名称，字体样式名称，以及对浏览器的兼容性 **（图三）**
+ 下载字体文件及demo，点击页面右下方的`Download`按钮打包下载所有资源 **（图三）**。
+ 解压下载后的压缩包，可以得到demo，style.css 及fonts就是我们要的。使用时，一起拷贝到我们的项目中即可。

<addIconfont-iconfont/>

## 在项目中引用
+ 将所要用的css 及字体文件放到一个文件夹中。
+ 在公共页面中引入css。
  >一般是在项目的index.html内头部`link`引用。vue项目则是在main.js中`import`,以此类推
+ 在需要使用icon的页面添加相应标签的class，作为样式引用即可。 **（图四）**


 
 <comment-comment/> 
 