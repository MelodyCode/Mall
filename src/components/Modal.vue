<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
        <!--遮罩-->
        <div class="mask">          
        </div>
        <!--弹框-->
        <div class="modal-dialog">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
            </div>
            <div class="modal-body">
                <!--插入modal框的内容-->
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn" v-if="btntype==1" v-on:click="$emit('submit')">{{sureText}}</a>
                <a href="javascript:;" class="btn btn-default" v-if="btntype==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
                <div class="btn-group" v-if="btntype==3">
                    <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn btn-default"  v-on:click="$emit('cancel')">{{cancelText}}</a>
                </div>
            </div>
        </div>
        </div>
    </transition>
</template>
<script>


export default {
    name:'modal',
    props:{
        //modal的尺寸，参数为大中middle小
        modalType:{
            type:String,
            default:'form'
        },
        //弹框标题
        title:String,
         //按钮类型：1:确定按钮，2取消按钮 3:确定取消
        btntype:String,
        //modal-footer
        sureText:{
            type:String,
            default:'确定'
        },
        cancelText:{
            type:String,
            default:'取消'
        },
        showModal:Boolean
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';

@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>
