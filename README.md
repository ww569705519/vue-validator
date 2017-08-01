# vux-validator
定制化服务vux某些表单的验证插件
## 立即使用
> html
```
<group label-width="105px" label-align="left">
    <popup-picker title="招聘渠道：" placeholder="点击选择" :data="list" v-model="value6" value-text-align="left" v-va='{model:"a",value:value6,text:"招聘渠道",type: "array"}'></popup-picker>
    <popup-picker title="人事范围：" placeholder="点击选择" :data="list" v-model="value5" value-text-align="left" v-va='{model:"b",value:value5,text:"人事范围",type: "array"}'></popup-picker>
    <popup-picker title="人事子范围：" placeholder="点击选择" :data="list" v-model="value4" value-text-align="left" v-va='{model:"c",value:value4,text:"a",type: "array"}'></popup-picker>
 </group>
```
> js

```
 methods: {
      submit(){
        if (this.$errorArr()) {
          this.$vux.toast.text(this.$errorArr(), 'middle')
          return false
        } 
        // ---其他代码逻辑---
        ...
        ...
        ...
        ...
      }
    }
```

## 使用介绍
在需要使用表单验证的元素上使用vue指令

```
v-va="{model:'???',value:???,text:'???',type: '???',rule}"
```
## v-va指令的Options 参数介绍
- model：需要验证的Model的标识，具有唯一性
- value：Model，需要验证的Model
- text：关键字
- type：array(一般为选择器的非空验证)，text(单纯的字符串，默认非空判断)等
- rule：目前还没做，到时会有内部的正则验证，以及用户自定义reg正则检验
## errorArr方法的介绍
一般来说移动端的表单验证会出现在点击提交按钮的时候，我们在点击提交按钮的时候，通过查看该实例的*errorArr*，如果有值，即将数组第一项用弹幕或者弹窗抛出，否则提交操作无法通过

```
    //数组错误信息
    Vue.prototype.$errorArr = function () {
        let error = null
        // 判断有没有error属性，有即拥有错误信息
        for(let v of arr){
            if (v.error) {
            	error = v.error
            	break
            }
        }
        if (error) {
          return error
        } else {
          return false
        }
    
    }
```
