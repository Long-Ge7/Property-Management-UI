<template>
    <div class="login">
        <div class="login-con">
            <ul class="menu-teb">
                <li v-for="(v) in MenuData" :class="{ current: v.current }" :key="v.type" @click="clickMenu(v)">
                    {{ v.txt }}
                </li>
            </ul>
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
                label-width="auto" class="demo-ruleForm">
                <el-form-item prop="username">
                    <label>邮箱</label>
                    <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
                </el-form-item> 
                <el-form-item prop="password">
                    <label>密码</label>
                    <el-input v-model="ruleForm.password" type="password" autocomplete="off" minlength="6" maxlength="15"/>
                </el-form-item>
                <el-form-item prop="passwords" v-show="model === 'register'" type="password">
                    <label>重复密码</label>
                    <el-input v-model="ruleForm.passwords" minlength="6" maxlength="15"/>
                </el-form-item>
                <el-form-item>
                    <el-button :disabled="btnbool" type="primary" class="lkgin-btn block" @click="submitForm(ruleFormRef)">
                        {{ model === 'login' ? "登录" : '注册' }}
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">

import { reactive, ref,onMounted, watch} from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import * as ck from "../../util/verfifcation.js"
import {useRouter} from 'vue-router'
let router = useRouter()

import link from "../../api/Link.js"
import apiUrl from "../../api/url.js"
// import process from 'process'
import { ElMessage } from 'element-plus'
import useMds from '../../hook/index.js'

const ruleFormRef = ref<FormInstance>()

const checkUser = (rule: any, value: any, callback: any) => {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z{2,4}])$/;
    if (!value) {
        return callback(new Error("邮箱不能空！！！"))
    }else if(ck.CkEmail(value)){
        return callback(new Error("邮箱格式不对！！！"))
    }else{
        callback()
    } 
};


const validatePass = (rule: any, value: any, callback: any) => {
    let reg = /^(?!D+$)(?![^a-zA-Z]+$)\S{6,15}$/;
    if (!value) {
        callback(new Error('密码不能空！！！'))
    } else if(reg.test(value)){
        callback(new Error('密码格式有误必须在6至15位!!'))
    }else{
        callback()
    }

}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if(model.value==="login"){
        callback()
    }

    if (value === '') {
        callback(new Error('重复密码不能空'))
    } else if (value !== ruleForm.password) {
        callback(new Error("两次密码必须相同"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    username: '',
    password: '',
    passwords: '',
    pass: '',
    checkPass: '',
    age: '',
})


const rules = reactive<FormRules<typeof ruleForm>>({
    password: [{ validator: validatePass, trigger: 'blur' }],
    passwords: [{ validator: validatePass2, trigger: 'blur' }],
    username: [{ validator: checkUser, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            if (model.value==='login') {
                console.log('登录');
                
                link(apiUrl.register,'get',{},{name:ruleForm.username,pwd:useMds(ruleForm.password).value}).then((ok:any)=>{
                    if (ok.data.length!=0) {
                        console.log('登录成功');
                        
                        router.push('/home')
                    }else{
                        console.log('登录失败');
                    }
                })

            }else{
                let data ={
                    name:ruleForm.username,
                    pwd:useMds(ruleForm.password).value
                }

                link(apiUrl.register,"POST",data).then((ok:any)=>{
                console.log(ok);
                if (Object.keys(ok.data).length!==0) {
                    ElMessage('注册成功')

                    model.value="login"

                    MenuData.forEach(v=>{
                        v.current=false
                    })
                    MenuData[0].current=true
                }else{
                    ElMessage.error('注册失败')
                    
                }
                
            })
            }

            

        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}


const MenuData = reactive([
    { txt: "登录", current: true, type: "login" },
    { txt: "注册", current: false, type: "register" }
]);

let model = ref('login')

// onMounted(()=>{
//     console.log(process.env.VUE_APP_API)
// })

let clickMenu = (item: any) => {
    MenuData.forEach((elemt) => {
        elemt.current = false
    })
    item.current = true;

    model.value = item.type;
}
let btnbool = ref(true)
watch(ruleForm,(newval,oldval)=>{
    
    if (model.value==='login') {
        if (newval.username!=''&&newval.password!='') {
            btnbool.value=false
        }else{
            btnbool.value=true
        }
    } else {
        if (newval.username!=''&&newval.password!=''&&newval.passwords!='') {
            btnbool.value=false
        }else{
            btnbool.value=true
        }
    }
})
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

.login {
    background-color: rebeccapurple;
    height: 100%;
}

html,
body,
#app {
    height: 100%;
}

.menu-teb {
    text-align: center;

    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }

    .current {
        background-color: rgb(193, 179, 179);
    }
}

.demo-ruleForm {
    margin: 0 auto;

    .block {
        display: block;
        width: 100%;
    }

    .login-btn {
        margin-top: 20px;
    }
}
</style>