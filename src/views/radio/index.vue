/**
* create by zhangxiang on 2021-01-21 09:33
* 类注释：
* 备注：
*/
<template>
  <div>
    <el-card style="margin: 10px 0;" v-if="totalTime>0">
      <span>{{ playData.name + "\t" + playData.broadcast_date }}</span>
      <el-slider
          v-model="timeNow"
          :max="this.audio&&this.audio.duration&&parseInt(this.audio.duration)"
          @change="changeTime">
      </el-slider>
      <el-row>
        <el-col :span="20">
          <span>{{ parseInt(timeNow) |formTime }}</span>
        </el-col>
        <el-col :span="4" style="text-align: right">
          <span>{{ parseInt(totalTime) |formTime }}</span>
        </el-col>
      </el-row>
      <el-row style="margin-top: 5px">
        <el-col>
          <el-button @click="kuai">快进</el-button>
          <el-button @click="tui">快退</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 10px">
      <el-form :model="formData">
        <el-row>
          <el-col :span="6">
            <el-form-item label="频道：">
              <el-select v-model="formData.channeName" @change="loadType()">
                <el-option v-for="item in channeList" :label="item.name" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="节目名称：">
              <el-select v-model="formData.name" @change="loadData()">
                <el-option v-for="item in optionsList" :label="item.programName" :value="item.channelId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="dataList">
        <el-table-column align="center" prop="channel_name" label="频道"></el-table-column>
        <el-table-column align="center" prop="name" label="节目名称"></el-table-column>
        <el-table-column align="center" prop="broadcast_date" label="日期"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="success" @click="play(scope.row)">播放</el-button>
<!--            <el-button type="success" @click="downLoad(scope.row)">下载</el-button>-->
          </template>
        </el-table-column>
      </el-table>
      <page :pagination="pagination" @refresh="loadData"></page>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import page from '@/components/page/page'

export default {
  name: "index",
  components: {
    page
  },
  props: {},
  data() {
    return {
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
        {name: "老年之声", value: 10},
        {name: "高速广播", value: 11},
        {name: "藏语广播", value: 12},
        {name: "维语广播", value: 13},
        {name: "娱乐广播", value: 14},
        {name: "华夏之声", value: 17},
        {name: "哈语广播", value: 24},
      ],
      formData: {
        channeName: 9
      },
      optionsList: [],
      timeNow: 0,
      dataList: [],
      audio: null,
      totalTime: 0,
      playData: {},
      pagination: {pageSize: 100, pageNum: 1, total: 0},
    }
  },
  computed: {},
  methods: {
    loadType() {
      this.formData.name = ""
      this.dataList = []
      axios.get("/pcpages/liveSchedules", {
        params: {
          channel_id: this.formData.channeName
        }
      }).then(res => {
        this.optionsList = res.data.data.program
      })
    },
    loadData(needPageOne) {
      if (!needPageOne) this.pagination.pageNum = 1
      axios.get('/pcpages/searchs/livehistory', {
            params: {
              channelname: this.formData.channeName,
              name: this.formData.name,
              start: this.pagination.pageNum,
              rows: this.pagination.pageSize,
            }
          }
      ).then(res => {
        res = res.data;
        if (typeof (res) == "string" && res.startsWith('(')) {
          res = JSON.parse(res.substring(1, res.length - 1))
        }
        this.dataList = res.passprogram
        this.pagination.total = res.total
      })
    },
    downLoad(row) {
      this.downLoadFileReName('/audio2020' + row.stream_url1, row.name + "\t" + row.broadcast_date + ".m4a")
    },
    downLoadFileReName(url, filename) {

      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          var blob = xhr.response
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, filename);
          } else {
            const link = document.createElement('a');
            const body = document.querySelector('body');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            link.style.display = 'none';
            body.appendChild(link);
            link.click();
            body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
          }
        }
      };
      xhr.send();
    },
    play(row) {
      this.playData = row
      if (!this.audio) {
        this.audio = new Audio()
        this.audio.addEventListener("timeupdate", () => {
          this.totalTime = this.audio.duration;
          if (parseInt(this.timeNow) >= parseInt(this.totalTime)) {
            const index = this.dataList.findIndex(item => {
              return item.id = row.id
            })
            this.play(this.dataList[index + 1])
          }
        });
      }
      this.audio.src ='http://'+ row.stream_domain1 + row.stream_url1
      console.log(this.audio.src)
      this.audio.play();
      clearInterval(this.time)
      this.time = setInterval(() => {
        this.timeNow = this.audio.currentTime
      }, 10)
    },
    kuai() {
      if (this.audio.currentTime < this.totalTime)
        this.audio.currentTime += 10
    },
    tui() {
      if (this.audio.currentTime > 10)
        this.audio.currentTime -= 10
      else {
        this.audio.currentTime = 0
      }
    },
    changeTime() {
      this.audio.currentTime = this.timeNow
    }
  },
  filters: {
    formTime(val) {
      if (val < 60) {
        return `${val}秒`
      } else {
        return `${parseInt(val / 60)}分${val % 60}秒`
      }
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