<template>
    <div>
        <el-table :data="tableData.listdata.slice((currentPage4-1)*pageSize4,currentPage4*pageSize4)" style="width: 100%">
            <el-table-column prop="id" label="编号"/>
            <el-table-column prop="title" label="楼盘"/>
            <el-table-column prop="type" label="房源类型" />
            <el-table-column prop="num" label="门牌号" />
            <el-table-column prop="hometype" label="房源类型" />
            <el-table-column prop="name" label="户主" />
        <el-table-column>
            <template #header>
                <el-input v-model="search" size="small" placeholder="请输入查询内容！" @blur="searchLink"/>
            </template>
        </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"

      :current-page="currentPage4"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.listdata.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    </div>
</template>

<script setup lang="ts">

import { ref , onMounted, reactive} from 'vue'
import link from "../../../api/Link.js"
import apiUrl from "../../../api/url.js"

let search = ref("")

const currentPage4 = ref(1)

const pageSize4 = ref(15)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
    pageSize4.value=val
}
const handleCurrentChange = (val: number) => {
    currentPage4.value=val
}

let tableData=reactive({
    listdata:[]
})

let searchLink=(()=>{
    link(apiUrl.userlist,'get',{},{name:search.value}).then((ok:any)=>{
        console.log(ok);
        tableData.listdata=ok.data
    })
})

onMounted(()=>{
    link(apiUrl.userlist).then((ok:any)=>{
        console.log(ok);
        tableData.listdata=ok.data
    })
})


</script>
