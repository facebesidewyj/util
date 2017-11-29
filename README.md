# JavaScript工具库

在学习JS的过程中，自己手动实现了一些常用的小功能，方便我们平时的开发，现在把这个项目开源出来，供大家学习，共同进步。
语法标准：ECMASript5。

> 本项目供学习使用，如有必要使用到生产项目中，请做好测试。由于本人水平有限，很多地方没有考虑周到，难免会出现Bug，请多多见谅！

本项目持续更新，下面是API使用文档。

## Functions

<dl>
  <dt><a href="#newTypeof">newTypeof(obj, type)</a> ⇒ <code>Boolean</code></dt>
  <dd>
  <p>元素类型判断</p>
</dd>
  <dt><a href="#trim">trim(str, type)</a> ⇒ <code>String</code></dt>
  <dd>
  <p>字符串去空格</p>
</dd>
  <dt><a href="#repeatStr">repeatStr(str, count)</a> ⇒ <code>String</code></dt>
  <dd>
  <p>重复循环字符串</p>
</dd>
  <dt><a href="#toggleCase">toggleCase(str)</a> ⇒ <code>String</code></dt>
  <dd>
  <p>字符串大小写转换</p>
</dd>
  <dt><a href="#countStr">countStr(str, subStr)</a> ⇒ <code>String</code></dt>
  <dd>
  <p>统计字符串出现的次数</p>
</dd>
  <dt><a href="#checkParametersType">checkParametersType(str, type)</a> ⇒ <code>Boolean</code></dt>
  <dd>
  <p>检查参数的类型是否符合条件(可根据需求修改)</p>
</dd>
  <dt><a href="#checkPasswordLevel">checkPasswordLevel(str)</a> ⇒ <code>Number</code></dt>
  <dd>
  <p>检查密码强度等级</p>
</dd>
  <dt><a href="#noRepeatArray">noRepeatArray(arr)</a> ⇒ <code>Array</code></dt>
  <dd>
  <p>数组去重函数</p>
</dd>
  <dt><a href="#maxInArray">maxInArray(arr)</a> ⇒ <code>Number</code></dt>
  <dd>
  <p>获取数字数组中的最大值</p>
</dd>
  <dt><a href="#minInArray">minInArray(arr)</a> ⇒ <code>Number</code></dt>
  <dd>
  <p>获取数字数组中的最小值</p>
</dd>
  <dt><a href="#removeValueForArray">removeValueForArray(arr, val)</a> ⇒ <code>Array</code></dt>
  <dd>
  <p>删除数组中的指定元素</p>
</dd>
  <dt><a href="#formatDate">formatDate(date, fmt)</a> ⇒ <code>String</code></dt>
  <dd>
  <p>格式化日期</p>
</dd>
  <dt><a href="#formatDateToFriendly">formatDateToFriendly(date)</a> ⇒ <code>String</code></dt>
  <dd>
  <p>将日期转换成友好格式显示</p>
</dd>
  <dt><a href="#getRandomColor">getRandomColor()</a> ⇒ <code>String</code></dt>
  <dd>
  <p>获得随机的颜色值</p>
</dd>
  <dt><a href="#getRandomNumber">getRandomNumber(num1, num2)</a> ⇒ <code>Number</code></dt>
  <dd>
  <p>返回指定范围的随机数</p>
</dd>
  <dt><a href="#hasClass">hasClass(obj, className)</a> ⇒ <code>Boolean</code></dt>
  <dd>
  <p>判断一个对象是否含有某个class名</p>
</dd>
  <dt>
  <a href="#addClass">addClass(obj, className)</a>
</dt>
  <dd>
  <p>添加类名操作</p>
</dd>
  <dt>
  <a href="#removeClass">removeClass(obj, className)</a>
</dt>
  <dd>
  <p>移除类名</p>
</dd>
  <dt>
  <a href="#hide">hide(obj)</a>
</dt>
  <dd>
  <p>隐藏</p>
</dd>
  <dt>
  <a href="#show">show(obj)</a>
</dt>
  <dd>
  <p>显示</p>
</dd>
</dl>

[]()

## newTypeof(obj, type) ⇒ `Boolean`

元素类型判断

**Kind**: global function **Returns**: `Boolean` - 返回的布尔结果

Param | Type     | Description
----- | -------- | -----------
obj   | `Obejct` | 传入的对象
type  | `String` | 传入的类型

[]()

## trim(str, type) ⇒ `String`

字符串去空格

**Kind**: global function **Returns**: `String` - 返回结果字符串

Param | Type     | Description
----- | -------- | ---------------------------
str   | `String` | 传入的目标字符串
type  | `Number` | 选择去空格的类型：1为去除所有空格、2为去除前后空格、

```
                 3为去除前空格、4为去除后空格 |
```

[]()

## repeatStr(str, count) ⇒ `String`

重复循环字符串

**Kind**: global function **Returns**: `String` - 循环之后的字符串

Param | Type     | Description
----- | -------- | -----------
str   | `String` | 传入要循环的字符串
count | `Number` | 循环次数

[]()

## toggleCase(str) ⇒ `String`

字符串大小写转换

**Kind**: global function **Returns**: `String` - 返回转换好的字符串

Param | Type     | Description
----- | -------- | -----------
str   | `String` | 传入的字符串

[]()

## countStr(str, subStr) ⇒ `String`

统计字符串出现的次数

**Kind**: global function **Returns**: `String` - 返回字符串出现的次数

Param  | Type     | Description
------ | -------- | -----------
str    | `String` | 传入的字符串
subStr | `String` | 要查找的字符串

[]()

## checkParametersType(str, type) ⇒ `Boolean`

检查参数的类型是否符合条件(可根据需求修改)

**Kind**: global function **Returns**: `Boolean` - 返回的布尔值

Param | Type     | Description
----- | -------- | ------------------------------
str   | `String` | 传入的字符串
type  | `String` | 要符合的类型，例如phone，email，IDcard15等

[]()

## checkPasswordLevel(str) ⇒ `Number`

检查密码强度等级

**Kind**: global function **Returns**: `Number` - 返回的强度等级（最高为4级）

Param | Type     | Description
----- | -------- | -----------
str   | `String` | 传入的密码串

[]()

## noRepeatArray(arr) ⇒ `Array`

数组去重函数

**Kind**: global function **Returns**: `Array` - 去重之后的数组

Param | Type    | Description
----- | ------- | -----------
arr   | `Array` | 传入的数组

[]()

## maxInArray(arr) ⇒ `Number`

获取数字数组中的最大值

**Kind**: global function **Returns**: `Number` - 返回的最大值

Param | Type    | Description
----- | ------- | -----------
arr   | `Array` | 传入的数字数组

[]()

## minInArray(arr) ⇒ `Number`

获取数字数组中的最小值

**Kind**: global function **Returns**: `Number` - 返回的最小值

Param | Type    | Description
----- | ------- | -----------
arr   | `Array` | 传入的数字数组

[]()

## removeValueForArray(arr, val) ⇒ `Array`

删除数组中的指定元素

**Kind**: global function **Returns**: `Array` - 返回删除元素之后的数组

Param | Type     | Description
----- | -------- | -----------
arr   | `Array`  | 传入要删除的数组
val   | `Object` | 要删除的元素

[]()

## formatDate(date, fmt) ⇒ `String`

格式化日期

**Kind**: global function **Returns**: `String` - 返回格式化好的字符串

Param | Type   | Description
----- | ------ | ---------------------------
date  | `Date` | 要格式化的日期，不传时默认当前时间，也可以是一个时间戳

| fmt | `String` | 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S， 默认：yyyy-MM-dd HH:mm:ss |

[]()

## formatDateToFriendly(date) ⇒ `String`

将日期转换成友好格式显示

**Kind**: global function **Returns**: `String` - 返回日期的友好格式显示

Param | Type   | Description
----- | ------ | --------------
date  | `Date` | 传入的日期，可以为空和时间戳

[]()

## getRandomColor() ⇒ `String`

获得随机的颜色值

**Kind**: global function **Returns**: `String` - 返回随机的颜色字符串 []()

## getRandomNumber(num1, num2) ⇒ `Number`

返回指定范围的随机数

**Kind**: global function **Returns**: `Number` - 返回的随机数

Param | Type     | Description
----- | -------- | -----------
num1  | `Number` | 传入的范围的最小值
num2  | `Number` | 传入的范围的最大值

[]()

## hasClass(obj, className) ⇒ `Boolean`

判断一个对象是否含有某个class名

**Kind**: global function **Returns**: `Boolean` - 含有返回true

Param     | Type     | Description
--------- | -------- | -----------
obj       | `Object` | 传入的Dom对象
className | `String` | 样式名

[]()

## addClass(obj, className)

添加类名操作

**Kind**: global function

Param     | Type     | Description
--------- | -------- | -----------
obj       | `Object` | 传入的Dom对象
className | `String` | 类名

[]()

## removeClass(obj, className)

移除类名

**Kind**: global function

Param     | Type     | Description
--------- | -------- | -----------
obj       | `Object` | 传入的Dom对象
className | `String` | 传入要删除的类名

[]()

## hide(obj)

隐藏

**Kind**: global function

Param | Type     | Description
----- | -------- | -----------
obj   | `Object` | 传入的Dom对象

[]()

## show(obj)

显示

**Kind**: global function

Param | Type     | Description
----- | -------- | -----------
obj   | `Object` | 传入的Dom对象
