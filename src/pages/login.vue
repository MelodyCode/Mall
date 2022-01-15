<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt="" ></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入帐号" v-model="username">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="btn-box">
                        <a href="" class="btn" v-on:click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">立即注册<span>|</span>忘记密码？</div> 
                    </div>
            </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
                <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
                <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
                <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程</a><span>|</span>
                <a href="https://coding.imooc.com/class/392.html" target="_blank">配套课程：Java通用型支付+电商平台双系统实战</a>
            </div>
            <p class="copyright">Copyright ©2020 mi.futurefe.com All Rights Reserved.</p>
        </div>
    </div>
</template>
<script> 
import {mapActions} from 'vuex'

export default {
    name: 'login',
    data(){
        return{
            username:'',
            password:'',
            userId:'',
          
        }
    },
    methods:{
        login(){
            let { username,password } = this;
            if(!username || !password){
                this.$message.error('请输入正确的用户名和密码');
                return;
            }
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
                //已经有借口拦截，所以返回的是res.data
                // From some method in one of your Vue components

// This will set a cookie with the name 'test' and the value 'Hello world!' that expires in one day
 
// To get the value of a cookie use

                this.$cookie.set('userId',res.id,{expires:'Session'});
               //dispatch派发action
                //this.$store.dispatch('saveUserName',res.username);
                //console.log(this.$cookies.get('userId'))
                this.saveUserName(res.username);
                this.$router.push({
                    name:'index',
                    params:{
                        from:'login'
                    }
                });
            })
        },
        ...mapActions(['saveUserName']),
        register() {
            this.axios.post('/user/register',{
                username:'admin1',
                password:'admin1',
                email:'admin1@163.com'
            }).then((res) => {
                this.res = res
                this.$message.success('注册成功!')
            })
        }
    }
   
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
    .login{
        .container{
            height: 113px;
            a{
                display: inline-block;
                img{
                    @include bgImg(auto,100%,'/imgs/login-logo.png')
                }
            }
        }
        .wrapper{
            background:url('/imgs/login-bg.jpg') no-repeat center;
            .container{
                height:576px;
                .login-form{
                    box-sizing: border-box;
                    padding-left: 31px;
                    padding-right: 31px;
                    
                    width:410px;
                    height:510px;
                    background-color:#ffffff;
                    position:absolute;
                    bottom:29px;
                    right:0;
                    h3{
                        line-height:23px;
                        font-size:24px;
                        text-align:center;
                        margin:40px auto 49px;
                        .checked{
                            color:#FF6600;
                        }
                        .sep-line{
                            margin:0 32px;
                        }
                    }
                    .input{
                        display:inline-block;
                        width:348px;
                        height:50px;
                        border:1px solid #E5E5E5;
                        margin-bottom:20px;
                        input{
                            width: 100%;
                            height: 100%;
                            border: none;
                            padding: 18px;
                            box-sizing: border-box;
                        }
                    }
                    .btn{
                        width:100%;
                        line-height:50px;
                        margin-top:10px;
                        font-size:16px;
                    }
                    .tips{
                        margin-top:14px;
                        display:flex;
                        justify-content:space-between;
                        font-size:14px;
                        cursor:pointer;
                        .sms{
                            color:#FF6600;
                        }         
                        .reg{
                            color:#999999;
                            span{
                                margin:0 7px;
                            }
                        }
                    }
                }
            }
        }
        .footer{
            height:100px;
            padding-top:60px;
            color:#999999;
            font-size:16px;
            text-align:center;
            .footer-link{
                a{
                    color:#999999;
                    display:inline-block;
                }
                span{
                    margin:0 10px;
                }
            }
            .copyright{
                margin-top:13px;
             }
        }     
    }
    

</style>