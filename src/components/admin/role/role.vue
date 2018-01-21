<template>
    <div>
        <Row :gutter="10">
            <Col span="4">
                <Card>
                    <p slot="title">
                        <Icon type="ios-toggle"></Icon>
                        切换权限
                    </p>
                    <Row type="flex" justify="center" align="middle" class="switch-language-row1">
                        <RadioGroup :value="lang" @on-change="handleSwitch" vertical>
                            <Radio label='true'>
                                <span>true</span>
                            </Radio>
                            <Radio label='false'>
                                <span>false</span>
                            </Radio>
                        </RadioGroup>
                        <p class="switch-language-tip">左侧 菜单 是 从 后端请求 
                            <br> 切换上方 单选框 将 修改 vuex 保存 的菜单
                            <br> 同时 刷新 页面 菜单
                        </p>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import {formatRoutes} from '@/utils/utils'
export default {
  name: 'role',
  data () {
    return {
      lang: 'false',
      switch: false
    }
  },
  methods: {
    handleSwitch (lang) {
      this.lang = lang
      if (lang === 'true') {
        this.switch = true
      } else {
        this.switch = false
      }
      this.postRequest('/switchRole', {
        stitch: this.switch
      }).then(resp => {
        if (resp && resp.status === 200) {
          var fmtRoutes = formatRoutes(resp.data)
          this.$store.commit('initMenu', fmtRoutes)
        }
      })
    }
  }
}
</script>

<style>
.switch-language-row1{
    height: 240px !important;
}
.switch-language-tip{
    font-size: 12px;
    color: gray;
    margin-top: 30px;
}
</style>
