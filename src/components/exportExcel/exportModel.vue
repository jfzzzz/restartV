<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-card class="display_card">
          <div slot="header">
            <span>excel导出模块</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <!-- card body -->
          <download-excel
            class="export-excel-wrapper"
            :data="json_data"
            :fields="json_fields"
            name="filename.xls"
          >
            <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
            <el-button type="primary" size="small">导出EXCEL</el-button>
          </download-excel>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="propname" label="属性名" width="180"></el-table-column>
          <el-table-column prop="type" label="类型" width="180"></el-table-column>
          <el-table-column prop="discriable" label="描述"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json_fields: {
        "Complete name": "name", //常规字段
        Telephone: "phone.mobile", //支持嵌套属性
        "Telephone 2": {
          field: "phone.landline",
          //自定义回调函数
          callback: value => {
            return `Landline Phone - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010"
          }
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244"
          }
        }
      ],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ],
      tableData: [{
          propname: 'data',
          type: 'Array',
          discriable: '需要导出的数据，支持中文'
        },{
          propname: 'fields',
          type: 'Object',
          discriable: '定义需要导出的数据'
        },{
          propname: 'name',
          type: 'string',
          discriable: '导出EXCEL的文件名'
        },{
          propname: 'type',
          type: 'string',
          discriable: '导出EXCLE的文件类型，两种格式xls,csv,默认是xls'
        },]
    };
  }
};
</script>

<style scoped>
</style>
