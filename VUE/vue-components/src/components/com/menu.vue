<template>
    <div class="menu">
        {{message}}{{app.user}}
    </div>
</template>
<script>
import bus from '@/bus/bus'
export default {
    inject:['app'],
    data(){
        return {
            message:'menu'
        }
    },
    created(){
        let self=this
        bus.$on('todo',(val)=>{
            self.message=val
        })
    }
}
</script>

<style>

</style>
