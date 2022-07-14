##公共组件库的文档##

<template>
    <k-button type="primary">Click me</k-button>
    <k-input placeholder="请输入用户名"/>
</template>

<script>
    export default {
        data(){
            return {
                content: '这是一个消息'
            }
        },
        mounted(){
            this.$notice({
                title: '提示',
                content: this.content,
                duration: 3
            })
        }
    }
</script>