<template>
    <button :class="'i-button-size'+size" :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>
<script>
import bus from '@/bus/bus'

function oneOf(value,validList){
    for(let i=0;i<validList.length;i++){
        if(value===validList[i]){
            return true

        }``
    }
    return false
}
export default {
    data(){
        return {
            msg:'我是button组件的数据'
        }
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        size:{
            validator(value){
                return oneOf(value,['small','large','fault'])
            },
            default:'default'
        }
    },
    methods:{
        handleClick(event){
            // console.log(123)
            // // this.$emit('on-click',this.msg)
            bus.$emit('todo',this.msg)
        }
    }
}
</script>

<style>
button{
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}
.i-button-sizelarge{
    padding: 12px;
}
.i-button-sizefault{
    padding: 8px;
}
.i-button-sizesmall{
    padding: 4px;
}

</style>
