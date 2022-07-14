<template>
    <div>
        <input 
            class="k-element-input" 
            :type="type" 
            :value="value" 
            v-bind="$attrs"
            @input="inputHandle"
            />
    </div>
</template>
<script>
export default {
    name: 'KInput',
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    data(){
        return {
        
        }
    },
    methods: {
        inputHandle(e){
            this.$emit('input', e.target.value);

            // 通知校验
            this.$parent.$emit('validate')
        }
    }
}
</script>