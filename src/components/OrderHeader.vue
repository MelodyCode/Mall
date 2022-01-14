<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}<slot name="tip"></slot></h2>
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'


export default {
    name:'order-header',
    //接受传入的参数
    props:{
        title:String
    },
    computed:{
        ...mapState(['username'])
    }
}
</script>
<style lang="scss">
    .order-header{
        padding:30px 0;
        .header-logo{
            float:left
        }
        .title,.username{
            //行内块级元素
            display: inline-block;
            height: 55px;
            line-height: 55px;
        }
        .title {
            font-size: 28px;
            float:left;
            color:#333333;
            margin-left: 54px;
            span{
                font-size: 14px;
                margin-left:17px;
                color:#999999;
                font-weight: bold;
            }
        }
        .username{
            float: right;
            //<a>标签的优先级高于username控制a的样式应该在里
            a {
                color:#666666;
                font-size:16px;
            }
        }
    }
</style>
