<!-- basicExplanation -->
# JS基础知识必备

## 内置类型
+ JS 中分为七种内置类型，七种内置类型又分为两大类型：`基本数据类型`和`对象`。
  + **基本数据类型：** `null`、`undefined`、`boolean`、`number`、`string`、`symbol`

  + **对象：** `object`

+ 数字类型是浮点类型的，没有整型。
+ NaN 也属于 number 类型，并且 NaN 不等于自身。

+ 对于基本类型来说，如果使用字面量的方式，那么这个变量只是个字面量，只有在必要的时候才会转换为对应的类型

## 闭包
**闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。**
```js
function A() {
  let a = 1
  function B() {
    console.log(a)
  }
  return B
}
```


**经典闭包面试题**
+ 循环中使用闭包解决 var 定义函数的问题
  ```js
  for ( var i=1; i<=5; i++) {
    setTimeout( function timer() {
      console.log( i );
    }, i*1000 );
  }
  // console 5次 '6'

  // 首先因为 setTimeout 是个异步函数，
  // 所有会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。
  ```

+ 方法一：使用闭包
  ```js
  for (var i = 1; i <= 5; i++) {
    (function(j) {
      setTimeout(function timer() {
        console.log(j);
      }, j * 1000);
    })(i);
  }
  ```
+ 方法二：使用`setTimeout`的第三个参数
  ```js
  for ( var i=1; i<=5; i++) {
    setTimeout( function timer(j) {
      console.log( j );
    }, i*1000, i);
  }
  ```
+ 方法三：使用 `let` 定义 `i` 
  ```js
  for ( let i=1; i<=5; i++) {
    setTimeout( function timer() {
      console.log( i );
    }, i*1000 );
  }
  // 因为let 是定义块级作用域
  ```
