<template>
    <div class="nav-bar" :class="{'is-fixed':isFixed}">
        <div class="container" >
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <!--定义插槽，按钮变化-->
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name:'nav-bar',
    props:{
        //从父组件传入 title = product.name
        title:String
    },
    data() {
        return {
            isFixed: false
        }
    },
    mounted() {
        //监听滚动条滚动事件
        window.addEventListener('scroll',this.initHeight);
    },
    methods: {
        initHeight() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.isFixed = scrollTop > 152 ? true: false;
        },
        //页面销毁时销毁事件，否则其他界面加载时也会加载该事件，浪费资源
        destroyed() {
            //第三个参数（事件行为处理方式）默认true捕获false:冒泡
            window.removeEventListener('scroll',this.initHeight,false)
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;//让文字垂直方向居中
        border-top: 1px solid $colorH;
        background-color: $colorG;
        z-index: 11;
        &.is-fixed{
            //在父容器中添加fixed，父容器的宽度和container一样？？？？？？
            position:fixed;
            top:0;
            //撑开
            width: 100%;
            box-shadow:0 5px 5px $colorE;
        }
        .container{
            @include flex();
            
            .pro-title {
                font-size: 18px;
                color: $colorB;
                font-weight:bold;
            }
            .pro-param {
                font-size:fontJ;
                span{
                    margin:0 10px;
                }
                a{
                    color:$colorC;
                }
            }
        }
    }
</style>