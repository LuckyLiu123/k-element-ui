<template>
    <button 
        class="k-element-button" 
        :class="{[`k-element-button-${type}`]: true}" 
        @click="clickHandle"
        type="button"
        >
        <slot></slot>
    </button>
</template>
<script>
import { oneOf } from '../../utils/assist';

export default {
    name: 'KButton',
    props: {
        type: {
            validator(value){
                return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'error']);
            },
            type: String,
            default: 'default'
        }
    },
    methods: {
        clickHandle(evt){
            this.$emit('click', evt);
        }
    }
}
</script>