/**
* create by zhangxiang on 2021-01-25 17:21
* 类注释：通用table封装
* 备注：
*/
<template>
  <el-card :body-style="{ padding: '0' }">
    <el-table
        ref="cesTable"
        :data="tableData"
        :size="size"
        :id="id"
        :stripe="stripe"
        :fit="fit"
        :border="isBorder"
        :show-header="showHeader"
        :header-cell-style="headerCellStyle"
        :row-class-name="tableRowClassName"
        highlight-current-row
        :show-summary="showSummary"
        :sum-text="sumText"
        :defaultSelections="defaultSelections"
        v-loading="loading"
        @select="select"
        @select-all="selectAll"
        @cell-click="cellClick">
      <el-table-column v-if="isSelection" width="80" type="selection" align="center"/>
      <el-table-column v-if="isIndex" type="index" width="60" :label="indexLabel" align="center"/>
      <el-table-column
          v-for="item in tableCols"
          :key="item.id"
          :prop="item.prop"
          :fixed="item.fixed"
          :label="item.label"
          :width="item.width"
          align="center">
        <template slot-scope="scope">
          <slot v-if="item.type==='slot'" :name="item.slotName" :data="scope.row"></slot>
          <el-input
              v-if="item.type==='input'"
              v-model="scope.row[item.prop]"
              :size="item.size || size"
              :disabled="item.disabled || (item.isDisabled && item.isDisabled(scope.row))"
              @focus="item.focus && item.focus(scope.row)"
              @blur="item.blur && item.blur(scope.row)">
          </el-input>
          <span v-if="item.type==='button'">
              <el-button
                  v-for="(btn,index) in item.formatter(scope.row)||item.btnList"
                  :key="index"
                  :disabled="btn.disabled || (btn.isDisabled && btn.isDisabled(scope.row))"
                  :type="btn.type"
                  :size="btn.size || size"
                  :icon="btn.icon"
                  @click="btn.handle(scope.row)">
                {{ btn.label }}
              </el-button>
          </span>
          <span v-if="!item.type">
            {{ (item.formatter && item.formatter(scope.row)) || scope.row[item.prop] }}
          </span>
        </template>
      </el-table-column>
      <template v-slot:empty>
        <slot name="empty"></slot>
      </template>
    </el-table>
    <page :pagination="pagination" :pageSizeList="pageSizeList" :layout="layout" @refresh="refresh"></page>
  </el-card>
</template>

<script type="text/ecmascript-6">
import page from './page'

export default {
  name: "index",
  components: {
    page
  },
  props: {
    // 表格型号：mini,medium,small
    size: {type: String, default: "small"},
    //边框
    isBorder: {type: Boolean, default: false},
    //是否为斑马纹 table
    stripe: {type: Boolean, default: false},
    //列的宽度是否自撑开
    fit: {type: Boolean, default: true},
    //是否显示表头
    showHeader: {type: Boolean, default: true},
    //空数据时显示的文本内容
    emptyText: {type: String, default: "暂无数据"},
    //是否在表尾显示合计行
    showSummary: {type: Boolean, default: false},
    //合计行第一列的文本
    sumText: {type: String, default: "合计"},
    //表头样式
    headerCellStyle: {
      type: Object, default: () => {
        return {background: '#eef1f6', color: '#3B85F0'}
      }
    },
    // 是否显示表格索引
    isIndex: {type: Boolean, default: false},
    showSearchHeader: {type: Boolean, default: false},
    //加载数据
    loadData: {type: Function, default: null},
    //是否单选
    isSingle: {type: Boolean, default: false},
    //id
    id: {type: String, default: "table"},
    //loading
    loading: {type: Boolean, default: false},
    // 表格数据
    tableData: {type: Array, default: () => []},
    // 表格列配置
    tableCols: {type: Array, default: () => []},
    // 是否显示表格复选框
    isSelection: {type: Boolean, default: false},
    //设置选中行
    defaultSelections: {type: [Array, Object], default: () => null},
    //序号名称label
    indexLabel: {type: String, default: "序号"},
    //是否默认加载数据
    isLoadData: {type: Boolean, default: false},
    //设置行方法
    tableRowClassNames: {type: Function, default: null},
    // 分页数据
    pagination: {
      type: Object, default: () => {
        return {pageSize: 10, pageNum: 1, total: 0}
      }
    },
    //分页list
    pageSizeList: {
      type: Array,
      default: () => [10, 15, 20, 25, 30, 50, 100, 500],
    },
    //分页展示
    layout: {type: String, default: "total,sizes,prev,pager,next,jumper"},
  },
  watch: {
    defaultSelections(val) {
      this.$nextTick(function () {
        if (Array.isArray(val)) {
          val.forEach((row) => {
            this.$refs.cesTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.cesTable.toggleRowSelection(val);
        }
      });
    },
  },
  data() {
    return {}
  },
  methods: {
    // 表格勾选
    select(rows, row) {
      if (this.isSingle) {
        this.$refs.cesTable.clearSelection();
        this.$refs.cesTable.toggleRowSelection(row);
        this.$emit("select", row);
      } else {
        this.$emit("select", rows);
      }
    },
    // 全选
    selectAll(rows) {
      if (this.isSingle) {
        this.$refs.cesTable.clearSelection();
        this.$message({type: "error", message: "只支持单选"});
      } else {
        this.$emit("select", rows);
      }
    },
    // 行点击事件
    cellClick(row, column, cell, event) {
      this.$emit("cellClick", row, column, cell, event);
    },
    tableRowClassName({row, rowIndex}) {
      row.index = rowIndex;
      if (this.tableRowClassNames) {
        return this.tableRowClassNames(row);
      }
    },
    refresh(needPageOne) {
      this.loadData(needPageOne)
    },
  },
  created() {
    if (this.isLoadData) this.loadData()
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>