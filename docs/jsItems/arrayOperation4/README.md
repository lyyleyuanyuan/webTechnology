# 数组遍历

>1. 对于空数组是不会执行回调函数的
>2. 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
>3. 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
>4. 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。

## forEach

**语法： Arr.forEach(function (currentValue, index, arr), thisValue)**

  - `forEach()` 按升序为数组中含有效值的每一项执行一次回调函数。

  **参数:**
  - **function(必须):** 数组中每个元素需要调用的函数。
  - **回调函数的参数:**
    - **currentValue(必须):** 数组当前元素的值
    - **index(可选):**  当前元素的索引值
    - **arr(可选):** 数组对象本身
  - **thisValue(可选):** 当执行回调函数时this绑定对象的值，默认值为undefined
  ```js
  let a = [1, 2, , 3]; // 最后第二个元素是空的，不会遍历(undefined、null会遍历)
  let obj = { name: 'OBKoro1' };
  let result = a.forEach(function (value, index, array) {
    a[3] = '改变元素';
    a.push('添加到尾端，不会被遍历')
    console.log(value, 'forEach传递的第一个参数'); // 分别打印 1 ,2 ,改变元素
    console.log(this.name); // OBKoro1 打印三次 this绑定在obj对象上
    // break; // break会报错
    return value; // return只能结束本次回调 会执行下次回调
    console.log('不会执行，因为return 会执行下一次循环回调')
  }, obj);
  console.log(result); // 即使return了一个值,也还是返回undefined
  // 回调函数也接受接头函数写法
  ```
  ::: tip
  + 无法中途退出循环，只能用return退出本次回调，进行下一次回调。
  + 它总是返回 undefined值,即使你return了一个值。
  :::

## every

**语法： Arr.every(function (currentValue, index, arr), thisValue)**

  - `every()` 方法用于检测数组所有元素是否都符合函数定义的条件。

  **参数:**
  - **function(必须):** 数组中每个元素需要调用的函数。
  - **回调函数的参数:**
    - **currentValue(必须):** 数组当前元素的值
    - **index(可选):**  当前元素的索引值
    - **arr(可选):** 数组对象本身
  - **thisValue(可选):** 当执行回调函数时this绑定对象的值，默认值为undefined
  ```js
  function isBigEnough(element, index, array) {
    return element >= 10; // 判断数组中的所有元素是否都大于10
  }
  let result = [12, 5, 8, 130, 44].every(isBigEnough); // false
  let result = [12, 54, 18, 130, 44].every(isBigEnough); // true
  // 接受箭头函数写法 
  [12, 5, 8, 130, 44].every(x => x >= 10); // false
  [12, 54, 18, 130, 44].every(x => x >= 10); // true
  ```
  ::: tip
  + 如果数组中检测到有一个元素不满足，则整个表达式返回 false，且剩余的元素不会再进行检测。
  + 如果所有元素都满足条件，则返回 true。
  :::

## some

**语法： Arr.some(function (currentValue, index, arr), thisValue)**

  - `some()` 数组中的是否有满足判断条件的元素。

  **参数:**
  - **function(必须):** 数组中每个元素需要调用的函数。
  - **回调函数的参数:**
    - **currentValue(必须):** 数组当前元素的值
    - **index(可选):**  当前元素的索引值
    - **arr(可选):** 数组对象本身
  - **thisValue(可选):** 当执行回调函数时this绑定对象的值，默认值为undefined
  ```js
  function isBigEnough(element, index, array) {
    return (element >= 10); //数组中是否有一个元素大于 10
  }
  let result = [2, 5, 8, 1, 4].some(isBigEnough); // false
  let result = [12, 5, 8, 1, 4].some(isBigEnough); // true
  ```
  ::: tip
  + 如果有一个元素满足条件，则表达式返回true, 剩余的元素不会再执行检测。
  + 如果没有满足条件的元素，则返回false。
  :::

## filter

**语法： Arr.filter(function (currentValue, index, arr), thisValue)**

  - `filter()` 过滤原始数组。
  - 返回一个新数组, 其包含通过所提供函数实现的测试的所有元素。

  **参数:**
  - **function(必须):** 数组中每个元素需要调用的函数。
  - **回调函数的参数:**
    - **currentValue(必须):** 数组当前元素的值
    - **index(可选):**  当前元素的索引值
    - **arr(可选):** 数组对象本身
  - **thisValue(可选):** 当执行回调函数时this绑定对象的值，默认值为undefined
  ```js
  let a = [32, 33, 16, 40];
  let result = a.filter(function (value, index, array) {
    return value >= 18; // 返回a数组中所有大于18的元素
  });
  console.log(result, a);// [32,33,40] [32,33,16,40]
  ```

## map

**语法： Arr.map(function (currentValue, index, arr), thisValue)**

  - `map()` 对数组中的每个元素进行处理。
  - 返回一个新数组, 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

  **参数:**
  - **function(必须):** 数组中每个元素需要调用的函数。
  - **回调函数的参数:**
    - **currentValue(必须):** 数组当前元素的值
    - **index(可选):**  当前元素的索引值
    - **arr(可选):** 数组对象本身
  - **thisValue(可选):** 当执行回调函数时this绑定对象的值，默认值为undefined
  ```js
  let a = ['1', '2', '3', '4'];
  let result = a.map(function (value, index, array) {
    return value + '新数组的新元素'
  });
  console.log(result, a);
  // ["1新数组的新元素","2新数组的新元素","3新数组的新元素","4新数组的新元素"] 
  // ["1","2","3","4"]
  ```

## reduce & reduceRight

**语法： Arr.reduce(function (total, currentValue, index, arr), initialValue)**

  - `reduce()` 为数组提供累加器，合并为一个值。
  - 对累加器和数组中的每个元素（从左到右）应用一个函数，最终合并为一个值。

  **参数:**
  - **function(必须):** 数组中每个元素需要调用的函数。
  - **回调函数的参数:**
    - **total(必须):** 初始值, 或者上一次调用回调返回的值
    - **currentValue(必须):** 数组当前元素的值
    - **index(可选):**  当前元素的索引值
    - **arr(可选):** 数组对象本身
  - **thisValue(可选):** 指定第一次回调 的第一个参数
    - 如果 initialValue 在调用 reduce 时被提供，那么第一个 total 将等于 initialValue，此时 currentValue 等于数组中的第一个值；
    - 如果 initialValue 未被提供，那么 total 等于数组中的第一个值，currentValue 等于数组中的第二个值。此时如果数组为空，那么将抛出 TypeError。
    - 如果数组仅有一个元素，并且没有提供 initialValue，或提供了 initialValue 但数组为空，那么回调不会被执行，数组的唯一值将被返回。
  ```js
  // 数组求和 
  let sum = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
  }, 0); // 6
  // 将二维数组转化为一维 将数组元素展开
  let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
     return a.concat(b)
   }); // [0, 1, 2, 3, 4, 5]
  ```
  ::: tip
  `reduceRight()`方法除了与reduce执行方向相反外，其他完全与其一致，请参考上述 reduce 方法介绍。
  :::

## find & findIndex

**语法： Arr.find(function(currentValue, index, arr), thisValue)**
**语法： Arr.findIndex(function(currentValue, index, arr), thisValue)**

  - `find()` 用于找出第一个符合条件的数组成员，并返回该成员，如果没有符合条件的成员，则返回undefined。
  - `findIndex()` 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
  - 这两个方法都可以识别NaN,弥补了indexOf的不足。

  **参数:**
  - **function(必须):** 数组中每个元素需要调用的函数。
  - **回调函数的参数:**
    - **currentValue(必须):** 数组当前元素的值
    - **index(可选):**  当前元素的索引值
    - **arr(可选):** 数组对象本身
  - **thisValue(可选):** 指定第一次回调 的第一个参数
  ```js
  // find
  let a = [1, 4, -5, 10].find((n) => n < 0); // 返回元素-5
  let b = [1, 4, -5, 10, NaN].find((n) => Object.is(NaN, n)); // 返回元素NaN
  // findIndex
  let a = [1, 4, -5, 10].findIndex((n) => n < 0); // 返回索引2
  let b = [1, 4, -5, 10, NaN].findIndex((n) => Object.is(NaN, n)); // 返回索引4
  ```

## keys & values & entries 

**语法： Arr.keys()**
**语法： Arr.values()**
**语法： Arr.entries()**

  - `keys()` 遍历键名。
  - `values()` 遍历键值。
  - `entries()` 遍历键名+键值。
  - 三个方法都返回一个新的 Array Iterator 对象，对象根据方法不同包含不同的值。

  ```js
  for (let index of ['a', 'b'].keys()) {
    console.log(index);
  }
  // 0
  // 1

  for (let elem of ['a', 'b'].values()) {
    console.log(elem);
  }
  // 'a'
  // 'b'

  for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
  }
  // 0 "a"
  // 1 "b"
  ```
  **如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历:**
  ```js
  let letter = ['a', 'b', 'c'];
  let entries = letter.entries();
  console.log(entries.next().value); // [0, 'a']
  console.log(entries.next().value); // [1, 'b']
  console.log(entries.next().value); // [2, 'c']
  ```
