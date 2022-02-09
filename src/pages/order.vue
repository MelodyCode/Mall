<!--订单父组件-->
<template>
    <div>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
//import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'

export default {
    name: 'order',
    data() {
        return {
            title:'',
            tip:''
        }
    },
    components: {
       //OrderHeader,
       NavFooter,
       ServiceBar
    },
    //第一次从购物车到订单列表等，经过mounted；订单确认-》订单列表不会经过order的mounted
    
    
}
</script>
