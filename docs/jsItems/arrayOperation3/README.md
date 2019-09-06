
# 数组内查找
## indexOf:从头查找

**语法： Arr.indexOf(searchElement,fromIndex)**

  - `indexOf()` 方法用于查找数组是否存在某个元素，返回下标。
  - 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

  **参数:**
  - **searchElement(必须):** 被查找的元素
  - **fromIndex(可选):** 开始查找的位置(不能大于等于数组的长度，返回-1)，接受负值，默认值为0。

  ```js
  let array = ['啦啦', 2, 4, 24, NaN]
  console.log(array.indexOf('啦')); // -1 
  console.log(array.indexOf('NaN')); // -1 
  console.log(array.indexOf('啦啦')); // 0
  ```
  ::: tip
  + indexOf()不能识别NaN
  + 数组的indexOf搜索跟字符串的indexOf不一样,数组的indexOf使用严格相等===搜索元素，即数组元素要完全匹配才能搜索成功。
  :::


## lastIndexOf:从尾查找

**语法： Arr.lastIndexOf(searchElement,fromIndex)**

  - `lastIndexOf()` 方法用于查找指定元素在数组中的最后一个位置，返回下标。
  - 返回指定元素,在数组中的最后一个的索引，如果不存在则返回 -1,（从数组后面往前查找）。

  **参数:**
  - **searchElement(必须):** 被查找的元素
  - **fromIndex(可选):** 逆向查找开始位置，默认值数组的长度-1，即查找整个数组。
    - 正值。如果该值大于或等于数组的长度，则整个数组会被查找。
    - 负值。将其视为从数组末尾向前的偏移。(比如-2，从数组最后第二个元素开始往前查找)
    - 负值。其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

  ```js
  let a = ['OB', 4, 'Koro1', 1, 2, 'Koro1', 3, 4, 5, 'Koro1']; // 数组长度为10
  let b = a.lastIndexOf('Koro1', 4); // 从下标4开始往前找 返回下标2
  let b = a.lastIndexOf('Koro1', 100); // 大于或数组的长度 查找整个数组 返回9
  let b = a.lastIndexOf('Koro1', -11); // -1 数组不会被查找
  let b = a.lastIndexOf('Koro1', -9); // 从第二个元素4往前查找，没有找到 返回-1
  ```

## includes:是否存在

**语法： Arr.includes(searchElement,fromIndex=0)**

  - `includes()` 查找数组是否包含某个元素。
  - 返回一个布尔值，表示某个数组是否包含给定的值。

  **参数:**
  - **searchElement(必须):** 被查找的元素
  - **fromIndex(可选):** 默认值为0，参数表示搜索的起始位置，接受负值。
    - 正值超过数组长度，数组不会被搜索，返回false。
    - 负值绝对值超过长数组度，重置从0开始搜索.
  ```js
  let a = ['OB', 'Koro1', 1, NaN];
  let b = a.includes(NaN); // true 识别NaN
  let b = a.includes('Koro1', 100); // false 超过数组长度 不搜索
  let b = a.includes('Koro1', -3); // true 从倒数第三个元素开始搜索 
  let b = a.includes('Koro1', -100); // true 负值绝对值超过数组长度，搜索整个数组
  ```
  ::: tip
  + includes方法是为了弥补indexOf方法的缺陷而出现的:
  + indexOf方法不能识别NaN
  + indexOf方法检查是否包含某个值不够语义化，需要判断是否不等于-1，表达不够直观
  :::

 
 <comment-comment/> 
 