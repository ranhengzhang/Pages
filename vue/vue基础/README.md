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
