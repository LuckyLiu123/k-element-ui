<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-if="error">{{error}}</p>
        <!-- <p>{{ model }}</p> -->
        <!-- <p>{{ rules[prop] }}</p> -->
    </div>
</template>
<script>

import Validator from 'async-validator'

export default {
    name: 'KFormItem',
    inject: ['model', 'rules'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: String
    },
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    },
    data(){
        return {
            error: ''
        }
    },
    methods: {
        validate(){
            // 加载一个校验库，async-validator
            // 1. 获取校验规则和值
            const rules = this.rules[this.prop]
            const value = this.model[this.prop]

            // 2. 获得校验器实例
            const validator = new Validator({[this.prop]: rules})
            return validator.validate({[this.prop]: value}, (errors) => {
                if(errors){
                    this.error = errors[0].message
                }else{
                    this.error = ''
                }
            })

        }
    }
}
</script>