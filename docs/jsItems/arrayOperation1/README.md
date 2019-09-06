# 常用的数组操作方法

## of:返回参数数组

**语法： Arr.of(Arr1,Arr2,...)**

  - `of()` 方法用于返回由所有参数值组成的数组，如果没有参数，就返回一个空数组。

  ```js
  let a = Array.of(3, 11, 8); // [3,11,8]
  let a = Array.of(3); // [3]
  ```

## from:对象转为数组

**语法： Arr.from(obj)**

  - `from()` 用于将两类对象转为真正的数组。
  - 返回新的数组。
  - 不改变原数组。

  ```js
  // 1. 对象拥有length属性
  let obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
  let arr = Array.from(obj); // ['a','b','c'];
  // 2. 部署了 Iterator接口的数据结构 比如:字符串、Set、NodeList对象
  let arr = Array.from('hello'); // ['h','e','l','l']
  let arr = Array.from(new Set(['a', 'b'])); // ['a','b']
  ```

## concat:数组连接

**语法： Arr.concat(Arr1,Arr2,...)**

  - `concat()` 方法用于连接两个或多个数组。
  - 返回被连接数组的一个副本。
  - 不改变原数组。

  **参数**
  - **Arr1,Arr2,...（必须）：** 该参数可以是具体的值，也可以是数组对象。可以是任意多个。

  ```js
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  console.log(arr.concat([1], [1, 2, 3, 4], 'aaaa', ['bbbb', 'dddd']))
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 2, 3, 4, "aaaa", "bbbb", "dddd"]
  ```

## reverse:颠倒数组顺序

**语法： Arr.reverse()**

  - `concat()` 颠倒数组中元素的顺序。
  - 改变原数组。

  ```js
  let a = [1, 2, 3];
  a.reverse();
  console.log(a); // [3,2,1]
  ```

## copyWithin:数组内复制至其他位置

**语法： Arr.copyWithin(target, start = 0, end = this.length)**

  - `copyWithin()` 方法用于把数组内指定位置的成员复制到其他位置。
  - 在当前数组内部，将指定位置的成员复制到其他位置,并返回这个数组。
  - 改变原数组。

  **参数**
  - **三个参数都是数值，如果不是，会自动转为数值**。
  - **target（必需）：** 从该位置开始替换数据。如果为负值，表示倒数。
  - **start（可选）：** 从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
  - **end（可选）：** 到该位置前停止读取数据，默认等于数组长度。使用负数可从数组结尾处规定位置。

  ```js
  // -2相当于3号位，-1相当于4号位
  [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
  // [4, 2, 3, 4, 5]
  var a = ['OB1', 'Koro1', 'OB2', 'Koro2', 'OB3', 'Koro3', 'OB4', 'Koro4', 'OB5', 'Koro5']
  // 2位置开始被替换,3位置开始读取要替换的 5位置前面停止替换
  a.copyWithin(2, 3, 5)
  // ["OB1","Koro1","Koro2","OB3","OB3","Koro3","OB4","Koro4","OB5","Koro5"]
  ```
  :::tip
  + 第一个参数是开始被替换的元素位置
  + 要替换数据的位置范围:从第二个参数是开始读取的元素，在第三个参数前面一个元素停止读取
  + 数组的长度不会改变
  + 读了几个元素就从开始被替换的地方替换几个元素
  :::
  

## fill:填充数组

**语法： Arr.fill(target, start = 0, end = this.length)**

  - `fill()` 使用给定值，填充一个数组。
  - 改变原数组。

  **参数**
  - **target（必需）：** 要填充数组的值。
  - **start（可选）：** 填充的开始位置,默认值为0。
  - **end（可选）：** 填充的结束位置，默认是为this.length。

  ```js
  ['a', 'b', 'c'].fill(7)
  // [7, 7, 7]
  ['a', 'b', 'c'].fill(7, 1, 2)
  // ['a', 7, 'c']
  ```

## join:数组转字符串

**语法： Arr.join()**

  - `join()` 方法用于把数组中的所有元素放入一个字符串。
  - 元素是通过指定的分隔符进行分隔的，默认使用','号分割。
  - 不改变原数组。

  **参数**
  - **str(可选)：** 指定要使用的分隔符，默认使用逗号作为分隔符。

  ```js
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  console.log(arr.join()) // 1,2,3,4,5,6,7,8,9,0
  console.log(arr.join('-')) // 1-2-3-4-5-6-7-8-9-0
  ```
  
## slice:浅拷贝数组的元素

**语法： Arr.slice(begin, end)**

  - `slice()` 方法返回一个从开始到结束（不包括结束）。
  - 选择的数组的一部分浅拷贝到一个新数组对象。
  - 不改变原数组。
    
  **参数**
  - **begin(可选):** 索引数值,接受负值，从该索引处开始提取原数组中的元素,默认值为0。
  - **end(可选):** 索引数值(不包括),接受负值，在该索引处前结束提取原数组元素，默认值为数组末尾(包括最后一个元素)。

  ```js
  let a = ['hello', 'world'];
  let b = a.slice(0, 1); // ['hello']
  a[0] = '改变原数组';
  console.log(a, b); // ['改变原数组','world'] ['hello']
  b[0] = '改变拷贝的数组';
  console.log(a, b); // ['改变原数组','world'] ['改变拷贝的数组']
  ```

 **如果是复杂数据类型(对象,数组)的话，改变其中一个，另外一个也会改变。**

  - slice()是浅拷贝，对于复杂的数据类型浅拷贝，拷贝的只是指向原数组的指针，所以无论改变原数组，还是浅拷贝的数组，都是改变原数组的数据。
  ```js
  let a = [{ name: 'OBKoro1' }];
  let b = a.slice();
  console.log(b, a); // [{"name":"OBKoro1"}] [{"name":"OBKoro1"}]
  a[0].name = '改变原数组';
  console.log(b, a); // [{"name":"改变原数组"}] [{"name":"改变原数组"}]
  b[0].name = '改变拷贝数组', b[0].koro = '改变拷贝数组';
  //[{"name":"改变拷贝数组","koro":"改变拷贝数组"}] [{"name":"改变拷贝数组","koro":"改变拷贝数组"}]
  ```

  ::: tip
  字符串也有一个slice() 方法是用来提取字符串的，不要弄混了。
  :::


## sort:数组排序

**语法： Arr.sort**

  - `sort()` 方法没有传比较函数的话，默认按字母升序。
  - 如果不是元素不是字符串的话，会调用toString()方法将元素转化为字符串的Unicode(万国码)位点，然后再比较字符。
  - 会改变原数组。

  **参数**
  - **规定排序顺序的比较函数：**

    sort的比较函数有两个默认参数，要在函数中接收这两个参数，这两个参数是数组中两个要比较的元素，通常我们用 a 和 b 接收两个将要比较的元素：
    + 若比较函数返回值<0，那么a将排到b的前面;
    + 若比较函数返回值=0，那么a 和 b 相对位置不变；
    + 若比较函数返回值>0，那么b 排在a 将的前面；

  **没有比较函数**
  ```js
  // 字符串排列 看起来很正常
  var a = ["Banana", "Orange", "Apple", "Mango"];
  a.sort(); // ["Apple","Banana","Mango","Orange"]
  // 数字排序的时候 因为转换成Unicode字符串之后，有些数字会比较大会排在后面 这显然不是我们想要的
  var a = [10, 1, 3, 20, 25, 8];
  console.log(a.sort()) // [1,10,20,25,3,8];
  ```
  **sort排序：数组元素为数字的升序、降序**
  ```js
  var array = [10, 1, 3, 4, 20, 4, 25, 8];
  // 升序 a-b < 0 a将排到b的前面，按照a的大小来排序的 
  // 比如被减数a是10，减数是20 10-20 < 0 被减数a(10)在减数b(20)前面 
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array); // [1,3,4,4,8,10,20,25];
  // 降序 被减数和减数调换了 20-10>0 被减数b(20)在减数a(10)的前面
  array.sort(function (a, b) {
    return b - a;
  });
  console.log(array); // [25,20,10,8,4,4,3,1];
  ```
  **sort排序：数组多条件排序**
  ```js
  var array = [{ id: 10, age: 2 }, { id: 5, age: 4 }, { id: 6, age: 10 }, { id: 9, age: 6 }, { id: 2, age: 8 }, { id: 10, age: 9 }];
  array.sort(function (a, b) {
    if (a.id === b.id) {// 如果id的值相等，按照age的值降序
      return b.age - a.age
    } else { // 如果id的值不相等，按照id的值升序
      return a.id - b.id
    }
  })
  // [{"id":2,"age":8},{"id":5,"age":4},{"id":6,"age":10},{"id":9,"age":6},{"id":10,"age":9},{"id":10,"age":2}
  ```
  **sort排序：自定义比较函数**
  ```js
  var array = [{ name: 'Koro1' }, { name: 'Koro1' }, { name: 'OB' }, { name: 'Koro1' }, { name: 'OB' }, { name: 'OB' }];
  array.sort(function (a, b) {
    if (a.name === 'Koro1') {// 如果name是'Koro1' 返回-1 ，-1<0 a排在b的前面
      return -1
    } else { // 如果不是的话，a排在b的后面
      return 1
    }
  })
  // [{"name":"Koro1"},{"name":"Koro1"},{"name":"Koro1"},{"name":"OB"},{"name":"OB"},{"name":"OB"}]
  ```