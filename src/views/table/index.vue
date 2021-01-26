/**
* create by zhangxiang on 2021-01-25 17:34
* 类注释：
* 备注：
*/
<template>
  <div class="index">
    <el-card style="margin-bottom: 10px">
      <el-form :model="formData">
        <el-row>
          <el-col :span="12">
            <el-form-item label="频道：">
              <el-select v-model="formData.channeName" @change="loadType">
                <el-option v-for="item in channeList" :key="item.value" :label="item.name" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="节目名称：">
              <el-select v-model="formData.name" @change="loadData()">
                <el-option v-for="item in optionsList" :key="item.channelId" :label="item.programName"
                           :value="item.channelId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <m-table
        :load-data="loadData"
        :is-index="true"
        :is-selection="true"
        :table-data="tableData"
        :table-cols="tableCols"
        :pagination="pagination">
      <template v-slot:input="data">
        <span v-if="data.data.type===1">{{ data.data.id }}</span>
        <el-input v-else v-model="data.data.id"/>
      </template>
      <template v-slot:opt="data">
        <el-button @click="play(data.data)">播放</el-button>
      </template>
      <template v-slot:empty>
        <div>我是空数据提示内容</div>
      </template>
    </m-table>
  </div>
</template>

<script type="text/ecmascript-6">
import mTable from '@/components/table'

export default {
  name: "index",
  components: {
    mTable
  },
  props: {},
  data() {
    return {
      pagination: {pageSize: 10, pageNum: 1, total: 0},
      tableData: [],
      optionsList: [],
      tableCols: [
        {
          label: "日期", prop: 'broadcast_date', formatter: (row) => {
          }
        },
        {label: "节目名称", prop: 'name',},
        {label: "频道", prop: 'channel_name',},
        {label: "id", type: "slot", slotName: 'input',},
        {label: "id", prop: "id", type: "input"},
        {label: "操作", type: "slot", slotName: 'opt',},
        {
          label: "操作", type: "button", formatter: (row) => {
            if (row.index % 2 === 1) {
              return [{
                label: "播放",
                handle: (row) => {
                  this.play(row)
                },
                isDisabled: (row) => {
                  return row.index % 3 === 1
                }
              },
                {
                  label: "放映",
                  handle: (row) => {
                    this.play(row)
                  },
                  disabled: true
                },]
            } else {
              return [{
                label: "收听", handle: (row) => {
                  console.log("收听", row)
                }
              }]
            }
          },

        }
      ],
      channeList: [
        {name: "中国之声", value: 1},
        {name: "经济之声", value: 2},
        {name: "中华之声", value: 3},
        {name: "音乐之声", value: 4},
        {name: "都市之声", value: 5},
        {name: "神州之声", value: 6},
        {name: "香港之声", value: 7},
        {name: "民族之声", value: 8},
        {name: "文艺之声", value: 9},
      ],
      formData: {
        channeName: 9
      },
    }
  },
  computed: {},
  methods: {
    play(data) {
      data.type = 1
      console.log("data:", data)
    },
    loadType() {
      this.formData.name = ""
      this.dataList = []
      this.$jsonp('http://tacc.radio.cn/pcpages/liveSchedules', {
        channel_id: this.formData.channeName,
      }).then(res => {
        this.optionsList = res.data.program
      })
    },
    loadData(pageNumOne) {
      if (!pageNumOne) this.pagination.pageNum = 1
      this.$jsonp('http://tacc.radio.cn/pcpages/searchs/livehistory', {
        channelname: this.formData.channeName,
        name: this.formData.name,
        start: this.pagination.pageNum,
        rows: this.pagination.pageSize,
      }).then(res => {
        console.log(res)
        this.tableData = res.passprogram
        this.pagination.total = res.total
      })
    },
  },
  activated() {
  },
  mounted() {
  },
  created() {
    this.loadType()
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>