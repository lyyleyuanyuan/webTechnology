# JavaScript常用开发技巧
## 千分位数字
<jsvascriptSkills-ThousandNum/>
```js
const ThousandNum = function (num) {
  var res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  });
  return res;
}
const money = ThousandNum(20190214);  // "20,190,214"
```
## 生成随机ID
<jsvascriptSkills-RandomId/>
```js
// 随机数版本36进制版本 去掉"0."
const RandomId = len => Math.random().toString(36).substr(3)
const id = RandomId();
```
## 时间戳
```js
const timestamp = +new Date("2019-02-14");
// timestamp => 1550102400000
```
## 精确小数
```js
const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(1.69, 1);
// num => 1.7
```
## 取最小最大值
```js
const arr = [0, 1, 2];
const min = Math.min(...arr);
const max = Math.max(...arr);
// min max => 0 2
```
## 删除对象无用属性
```js
const obj = { a: 0, b: 1, c: 2 }; // 只想拿b和c
const { a, ...rest } = obj;
// rest => { b: 1, c: 2 }
```