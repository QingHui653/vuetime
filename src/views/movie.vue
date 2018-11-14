<template>
<div>
  <el-button type="primary" icon="el-icon-search" @click="handleIconClick">搜索</el-button>
  <el-input placeholder="请输入搜索片名" suffix-icon ="el-icon-search" clearable="true" v-model="movieName"></el-input>
  <el-table
    :data="tableData"
    stripe
    v-bind:border="true"
    tooltip-effect="dark"
    highlight-current-row>
    <el-table-column header-align="center" type="selection" width="50"></el-table-column>
    <el-table-column header-align="center" type="index" width="50"></el-table-column>
    <el-table-column header-align="center" prop="movieName" label="片名" width="400"></el-table-column>
    <el-table-column header-align="center" prop="movieLink" resizable v-bind:show-overflow-tooltip="true" label="网址"></el-table-column>
  </el-table>
  <el-pagination @size-change="handleSizeChange" 
                 @current-change="handleCurrentChange" 
                 :current-page="currentPage" 
                 :page-sizes="[10, 20, 50, 100]" 
                 :page-size="pageSize" 
                 layout="total, sizes, prev, pager, next, jumper" 
                 :total="count"
                 background/>
</div>
</template>
<script>
export default {
  name: 'movie',
  data () {
    return {
      tableData: [],
      currentRow: null,
      multipleSelection: [],
      currentPage: 1,
      pageSize: 10,
      count: 0,
      movieName: ''
    }
  },
  mounted: function () {
    this.loadTable()
  },
  methods: {
    loadTable () {
      console.info('loadTable')
      var _this = this
      var params = new URLSearchParams()
      params.append('movieName', this.movieName)
      params.append('currentPage', this.currentPage)
      params.append('pageSize', this.pageSize)
      var url = 'http://193.112.44.172:8089/findPage'
      /* var url = 'http://localhost:8089/findPage' */
      this.$http.post(url, params)
        .then(function (res) {
          console.info(res)
          var page = res.data
          _this.tableData = page.list
          _this.pageSize = page.pageSize
          _this.count = page.count
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.currentPage = 1
      this.loadTable()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.loadTable()
    },
    handleIconClick (ev) {
      console.log(ev)
      console.log(this.name)
      this.currentPage = 1
      this.loadTable()
    }
  }
}
</script>
<style>
.el-pagination{
  margin-top:15px;
  float:right
}
.el-button{
  float:right
}
.el-input.el-input--suffix{
  margin-right: 15px;
  margin-bottom: 15px;
  width: 200px;
  float:right
}
</style>