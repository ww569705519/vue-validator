/**
 * 说明：此为定制服务vux的表单验证插件
 * 插件文件：vux-validator.js
 * 作者：咸鱼 QQ：569705519
 */

export default {
	install: function (Vue, options) {
    // 添加的内容写在这个函数里面
    	// 需要验证的数组对象
    	var arr = []
    	// 3. 注入组件
			Vue.mixin({
			    created: function () {
		        // 逻辑...
		        
			    }
			})
    	var check = false
    	const _this = Vue.prototype
    	var temp = false
			// 1. 添加全局方法或属性
			Vue.myGlobalMethod = function () {
			    // 逻辑...
			}
			Vue.directive('time', {
				bind:function(el, binding,vnode,oldVnode){
					if (!binding.value) {
						return 
					}
					let dom = el
					dom.childNodes[2].style.color="#000"
				},
				update:function(el, binding,vnode,oldVnode){
					let dom = el
					if (!binding.value) {
						dom.childNodes[2].style.color="#999999"
						return 
					}
					
					dom.childNodes[2].style.color="#000"
				}

			})
			Vue.directive('va', {
				bind:function(el, binding,vnode,oldVnode){
					// 如果传进来rule规则
					if (binding.value.rule) {
						
					}
					// 获取当前组件this
					let  _this = vnode.context
					_this.error = _this.error || []
					let item = {
						'name': binding.value.name,
						'value': binding.value.value
					}
					switch(binding.value.type)
					{
					case 'array':
					  if (binding.value.value == '' || !binding.value.value) {
		      		// 将错误信息压进对象数组
		      		item.error = '请选择'+binding.value.text
		      	} 
					  break;
					case 'text':
					  if (binding.value.value == '' || binding.value.value == null) {
		      		// 将错误信息压进对象数组
		      		item.error = binding.value.text+"不能为空"
		      	} 
					  break;
					default:
						return false
					}
		     	_this.error.push(item)
		     	arr = _this.error
		     	// console.log(_this.error)
				},
				update:function(el, binding,vnode){
					console.log(binding.value.value)
					// 获取当前组件this
					let  _this = vnode.context
		      switch(binding.value.type)
					{
					case 'array':
					  if (binding.value.value.length != 0) {
							for(let v of _this.error) {
								if (v.name == binding.value.name) {
									v.error = null
									break
								}
							}
						}
					  break;
					case 'text':
					  if (binding.value.value && binding.value.value != '') {
		      		// 将错误信息压进对象数组
		      		for(let v of _this.error) {
								if (v.name == binding.value.name) {
									v.error = null
									break
								}
							}
		      		
		      	} else{
							for(let v of _this.error) {
								if (v.name == binding.value.name) {
									v.error = binding.value.text+"不能为空"
									break
								}
							}
		      	}
					  break;
					default:
						return false
					}
				},
			})
			
			/**
			 * 数组错误信息
			 * @param  {[type]} options [description]
			 * @return {[type]}         [description]
			 */
			Vue.prototype.$errorArr = function () {
				let str = null
				console.log(this.error)
				this.error = this.error || []
				// 判断有没有error属性，有即拥有错误信息
		    for(let v of this.error){
		      if (v.error) {
		    		str = v.error
		    		break
		      }
		    }
		    return str ? str : false
			}
			
    },

}