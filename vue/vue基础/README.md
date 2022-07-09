# Vue基础

## 去掉开发环境提示

```javascript
Vue.config.productionTip = false
```

## Vue对象中的属性

### el

一般为CSS选择器，也可以使用`document.getElementById`，但是一般不用

在某些时候使用`$mount`方法进行关联：

```javascript
var v = new Vue({
    data: {
        ...
    }
})

v.$mount('#box')
```

`$mount`方法并不是`Vue`对象的方法，而是`Vue`对象原型的一个方法。这种写法一般在异步请求时使用

### data

有时使用函数式声明：

```javascript
new Vue({
    el: '#box',
    data(){
        return{
            ...
        }
    }
})
```

原因如下：

[面试官：为什么data属性是一个函数而不是一个对象？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/vue/data.html ':include height=700px')

>   [面试官：为什么data属性是一个函数而不是一个对象？ | web前端面试 - 面试官系列](https://vue3js.cn/interview/vue/data.html)

## 数据代理

```typescript
Object.defineProperty(obj: oject, key: string, {
	value: object,			// 赋给对象的值
	enumerable: boolean,	// 该属性是否可以在类似Object.keys等操作中被枚举，默认false
	writable: boolean,		// 该属性是否可以被修改，默认false
	configurable: boolean,	// 控制属性是否可以被删除，默认false
	get(){
    	;
	},
	set(obj: object){
        ;
    }
})
```

Vue中的数据代理是通过`vm`对象来代理`data`对象中属性的操作（读/写）

>   **好处**：更加方便地操作`data`中的数据

>   **基本原理**：通过`Object.defineProperty()`把`data`对象中所有属性添加到`vm`上。并为每一个添加到`vm`上的属性指定对应的`getter`和`setter`，在`getter`/`setter`内部操作（读/写）`data`中对应的属性

## 事件处理

时间绑定时，如果需要传参，但又不希望失去`event`，可以在绑定时按顺序使用`$event`：

```html
<div @click="f(0, $event)"></div>

<script>
    f(n, e){}
</script>
```

### 事件修饰符

|  修饰符   |                       作用                       |          原生JS           |
| :-------: | :----------------------------------------------: | :-----------------------: |
| `prevent` |                   阻止默认事件                   | `event.preventDefault()`  |
|  `stop`   |                   阻止事件冒泡                   | `event.stopPropagation()` |
|  `once`   |                  事件只触发一次                  |                           |
| `capture` |                使用事件的捕获模式                |                           |
|  `self`   |   只有`event.target`是当前操作的元素时触发事件   |                           |
| `passive` | 事件的默认行为立即执行，无序等待事件回调执行完毕 |                           |

>   

```html
<div @click.prevent=""></div>
```

### key

在`keyup`、`keydown`、`keypress`等事件中，如果使用Vue，不需要在方法中判断，直接以`.name|.number`形式使用即可：

```html
<div @keydown.enter=""></div>
<div @keyup.13=""></uiv>
```

>   `name`应当为对应键的`key`，即`event.key`锁对应的值
>
>   同时，Vue也为常用键准备了别名
>
>   |      |   别名   |
>   | :--: | :------: |
>   | 回车 | `enter`  |
>   | 删除 | `delete` |
>   | 退出 |  `esc`   |
>   | 空格 | `space`  |
>   | 换行 |  `tab`   |
>   |  上  |   `up`   |
>   |  下  |  `down`  |
>   |  左  |  `left`  |
>   |  右  | `right`  |
>
>   >   如果需要自己定义新的别名，只需要修改`Vue.config.keyCodes`即可：
>   >
>   >   ```javascript
>   >   Vue.config.keyCodes.huiche = 13
>   >   ```

>   但是`.numer`的形式并不推荐使用，因为`event.keyCode`正在被逐步弃用

>   <kbd>Tab</kbd>键由于在`keyup`触发之前就已经触发了默认事件，所以一般`keyup`无效

>   系统修饰键（<kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>Meta</kbd>﹙<kbd>Win</kbd>﹚）
>
>   -   配合`keyup`使用时：按下修饰键的同时，再按下其它按键，随后释放其它按键，事件才能被触发
>   -   配合`keydown`使用时：正常触发

### 补充

事件后的修饰可以使用链式调用：

```html
<div @keyup.prevent.stop.ctrl.y></div>
```

## 计算属性

计算属性应当写在`computed`中：

```javascript
new Vue({
    el: '#root',
    computed: {
        name: {
            get(){
                ;
            },
            set(newValue){
                ;
            }
        }
    }
})
```

>   如果将计算属性写为一个方法，则默认只有`getter`：
>
>   ```javascript
>   new Vue({
>       el: '#root',
>       computed: {
>           name[:function](){
>               ;
>           }
>       }
>   })
>   ```
>
>   

>   计算属性的原理是，当有关`data`的值改变时，该值的`setter`会被触发，在这时会对有关计算属性进行一次更新
>
>   计算属性在`vm`中会有一个缓存，所以在`vm`中可以看见，但是在`vm._data`中是不可见的

>   `getter`在以下时候被调用：
>
>   1.   初次读取（之后的重复读取都会从缓存中读取）
>   2.   所依赖的数据发生变化时
>
>   `setter`在以下时候被调用：
>
>   1.   计算属性被修改时（当`vm`中的缓存被修改时）
>
>   >   如果在`setter`中修改了依赖的值，由于触发了依赖值的`setter`，计算属性的`getter`又会被调用一次

## 监视属性

监视属性写在`watch`中：

```javascript
new Vue({
    el: '#root',
    watch: {
        name: {
            handler(newValue, oldValue){
                ;
            },
            immediate: false,
            deep: false
        }
    }
})
```

其中：

>   -   `handler`会在属性被修改时调用

在Vue对象外也可以配置监听：

```typescript
vm.$watch(name: string, {
    handler(newValue, oldValue){
        ;
    }
})
```

如果只有一个`handler`，可以使用简写：

```javascript
new Vue({
    el: '#root',
    watch: {
        name(newValue, oldValue){
            ;
        }
    }
})
```

```typescript
vm.$watch(name: string, function(){
    ;
})
```

## 特殊案例

>   绑定`class`样式——对象写法

[demo01](demo01/index.html ':include')

[demo01](demo01/index.html ':include :type=code')

>   绑定style——对象写法

[demo02](demo02/index.html ':include')

[demo02](demo02/index.html ':include :type=code')

## 条件渲染

当多个结点使用同一条件时，可以使用`template`标签包住：

```html
<template v-if="...">
    <div>
        111
    </div>
    <div>
        222
    </div>
    <div>
        333
    </div>
</template>
```

在最终渲染之后，`template`标签将会被去除，不会影响整体结构

>   `template`只能使用`v-if`，不能使用`v-show`，因为`template`标签本身就不会被渲染到文档中

## 列表渲染

>   使用`v-for`时，每个标签应当绑定一个属性`key`作为子结点的唯一标识：
>
>   ```html
>   <ul>
>       <li v-for="item in list" :key="item.id"></li>
>   </ul>
>   ```
>
>   

>   `v-for`的循环一般会接收一个参数为结点内容，但是如果接收两个参数：`v-for="(item, index) in list"`，则会接收到节点内容和索引值
>
>   一般这种形式只在遍历对象时使用：`v-for="(value, key) in obj"`，可以方便地列出对象中的属性

## Vue监听原理

### 简易vm

```javascript
// 源数据
let data = {
    a : 'a',
    b : 'b'
};

// 准备一个实例对象，用于检测data中发生的变化
const obs = new Observer(data);

// 准备一个vm实例对象
let vm = {};
vm._data = data = obs;

function Observer(obj){
    // 汇总对象中的属性形成一个数组
    const keys = Object.keys(obj);

    keys.forEach(key => {
        Object.defineProperties(this, key, {
            get(){
                return obj[key];
            },
            set(val){
                obj[key] = val;
            }
        });
    });
};
```

