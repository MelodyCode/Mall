<!--订单父组件-->
<template>
    <div>
       
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>

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
      
       NavFooter,
       ServiceBar
    },
    mounted() {
        let path = this.$route.path;
        //order界面的集中封装
        if (path == '/order/confirm') {
             //订单确认
            this.title = '订单确认'
            this.tip = '请填写收货地址'
        } else if(path == '/order/list'){
            //订单列表
            this.title = '订单列表'
            this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
        } else if(path == '/order/pay') {
            //订单支付界面
            this.title = '订单支付'
            this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
        } else {
            this.title = '订单支付'
            this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
        }

    }
}
</script>
