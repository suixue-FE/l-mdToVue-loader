<!-- 
作者：lizhenxue
时间：2021/01/10
描述： 
-->
<template>
<div class= 'app' >
  1
  <test></test>
</div>
</template>

<script>
import test from './test.md'
export default {
name:'App',
// 注册组件
components: {test},
data() {
return {

};
},
//计算属性
computed: {},
//监听
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='' scoped>
</style>