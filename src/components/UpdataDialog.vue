<template>
  <el-dialog v-model="$store.state.HomeModule.dialogFormVisible" title="请输入修改信息" width="500">
    <el-form :model="form" :label-width="formLabelWidth">


      <el-form-item label="楼盘名称" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off" />
      </el-form-item>

      <el-form-item label="房源类型" :label-width="formLabelWidth">
        <el-input v-model="form.type" autocomplete="off" />
      </el-form-item>

      <el-form-item label="门牌号" :label-width="formLabelWidth">
        <el-input v-model="form.num" autocomplete="off" />
      </el-form-item>

      <el-form-item label="房源户型" :label-width="formLabelWidth">
        <el-input v-model="form.hometype" autocomplete="off" />
      </el-form-item>

      <el-form-item label="户主" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>

    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog(0)">取消</el-button>
        <el-button type="primary" @click="closeDialog(1)">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useStore } from "vuex"
import link from "../api/Link.js"
import url from "../api/url.js"
let store = useStore()

//修改
let closeDialog = (num: number) => {
  store.commit("DIALOG");
  if (num === 1) {
    let data = {
      name: form.name,
      title: form.title,
      type: form.type,
      num: form.num,
      hometype: form.hometype,
    };
    link(`${url.userlist}/${store.state.HomeModule.uplistData.id}`, "PUT", data)
      .then((ok: any) => {
        console.log(ok);
        // 处理成功响应
      })
  }
};


const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: "",
  title: "",
  type: "",
  num: "",
  hometype: "",
})

</script>