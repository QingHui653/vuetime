<template>
   <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column prop="id"  label="ID"  width="80"></el-table-column>
      <el-table-column prop="userName" label="NAME" width="180"></el-table-column>
      <el-table-column prop="age" label="AGE" width="80"> </el-table-column>
      <el-table-column prop="ability" label="ABILITY"> </el-table-column>
      <el-table-column prop="value" label="VALUE" align="right"> </el-table-column>
    </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    console.info('111111')
    this.mock('/src/mock/t1.json').then(resp => {
      if (resp && resp.status === 200) {
        this.tableData = resp.data
      }
    })
  }
}
</script>
<style scoped>
</style>
