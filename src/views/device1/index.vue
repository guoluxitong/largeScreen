<template>
  <div class="loginBox" :style="{backgroundImage: 'url(' + backgroundUrl + ')'}">
    <el-row style="color: aliceblue">
      <el-col :span="8">
        <div >
              <h3 style="padding-left: 20px" >设备总数:{{devices}}台</h3>
              <h3 style="padding-left: 20px">设备在线总数:{{devicesOnline}}台</h3>
              <div id="chartPie" style="height:350px;"></div>
           <!-- <el-col :span="12">
              <h3 style="text-align: center">燃料介质炉子统计</h3>
              <el-table class="main-table"
                        :data="devicesArray.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                        v-loading="listLoading"
                        element-loading-text="给我一点时间"
                        style="width: 90%"
                        :cell-style="tableRowStyle"
                        :header-cell-style="tableRowStyle"
              >
                <el-table-column :show-overflow-tooltip="true" align="left" label="燃料">
                  <template slot-scope="scope">
                    <span>{{scope.row.power | dictionaryValueFieldFilter(fuelArray)}}</span>
                  </template>
                </el-table-column>
                <el-table-column style="color: aliceblue" :show-overflow-tooltip="true" align="left" label="介质">
                  <template slot-scope="scope">
                    <span >{{scope.row.media | dictionaryValueFieldFilter(mediumArray)}}</span>
                  </template>
                </el-table-column>
                <el-table-column style="color: aliceblue" align="left" :show-overflow-tooltip="true" label="数量">
                  <template slot-scope="scope">
                    <span >{{scope.row.amount}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <div class="pagination-container">
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :pager-count="5"
                  :current-page="currentPage"
                  :page-sizes="[5]"
                  layout="sizes, pager"
                  :total="devicesArray.length"
                ></el-pagination>
              </div>
            </el-col>-->
        </div>
      </el-col>
      <el-col :span="8">
        <div >
          <h3 style="padding-left: 20px" >设备总数:{{devices}}</h3>
          <h3 style="padding-left: 20px">设备在线总数:{{devicesOnline}}</h3>
          <div id="chartPie1" style="height:350px;"></div>
          <!-- <el-col :span="12">
             <h3 style="text-align: center">燃料介质炉子统计</h3>
             <el-table class="main-table"
                       :data="devicesArray.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                       v-loading="listLoading"
                       element-loading-text="给我一点时间"
                       style="width: 90%"
                       :cell-style="tableRowStyle"
                       :header-cell-style="tableRowStyle"
             >
               <el-table-column :show-overflow-tooltip="true" align="left" label="燃料">
                 <template slot-scope="scope">
                   <span>{{scope.row.power | dictionaryValueFieldFilter(fuelArray)}}</span>
                 </template>
               </el-table-column>
               <el-table-column style="color: aliceblue" :show-overflow-tooltip="true" align="left" label="介质">
                 <template slot-scope="scope">
                   <span >{{scope.row.media | dictionaryValueFieldFilter(mediumArray)}}</span>
                 </template>
               </el-table-column>
               <el-table-column style="color: aliceblue" align="left" :show-overflow-tooltip="true" label="数量">
                 <template slot-scope="scope">
                   <span >{{scope.row.amount}}</span>
                 </template>
               </el-table-column>
             </el-table>
             <div class="pagination-container">
               <el-pagination
                 background
                 @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :pager-count="5"
                 :current-page="currentPage"
                 :page-sizes="[5]"
                 layout="sizes, pager"
                 :total="devicesArray.length"
               ></el-pagination>
             </div>
           </el-col>-->
        </div>
      </el-col>
      <el-col :span="8">
        <div >
          <h3 style="padding-left: 20px" >设备总数:{{devices}}</h3>
          <h3 style="padding-left: 20px">设备在线总数:{{devicesOnline}}</h3>
          <div id="chartPie2" style="height:350px;"></div>
          <!-- <el-col :span="12">
             <h3 style="text-align: center">燃料介质炉子统计</h3>
             <el-table class="main-table"
                       :data="devicesArray.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                       v-loading="listLoading"
                       element-loading-text="给我一点时间"
                       style="width: 90%"
                       :cell-style="tableRowStyle"
                       :header-cell-style="tableRowStyle"
             >
               <el-table-column :show-overflow-tooltip="true" align="left" label="燃料">
                 <template slot-scope="scope">
                   <span>{{scope.row.power | dictionaryValueFieldFilter(fuelArray)}}</span>
                 </template>
               </el-table-column>
               <el-table-column style="color: aliceblue" :show-overflow-tooltip="true" align="left" label="介质">
                 <template slot-scope="scope">
                   <span >{{scope.row.media | dictionaryValueFieldFilter(mediumArray)}}</span>
                 </template>
               </el-table-column>
               <el-table-column style="color: aliceblue" align="left" :show-overflow-tooltip="true" label="数量">
                 <template slot-scope="scope">
                   <span >{{scope.row.amount}}</span>
                 </template>
               </el-table-column>
             </el-table>
             <div class="pagination-container">
               <el-pagination
                 background
                 @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"
                 :pager-count="5"
                 :current-page="currentPage"
                 :page-sizes="[5]"
                 layout="sizes, pager"
                 :total="devicesArray.length"
               ></el-pagination>
             </div>
           </el-col>-->
        </div>
      </el-col>
     <!-- <el-col :span="10" >
        <div >
          <h3 style="text-align: center">微信用户总数:{{weChats}}</h3>
          <el-table class="main-table"
                    :data="weChatUser.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
                    v-loading="listLoading"
                    element-loading-text="给我一点时间"
                    :cell-style="tableRowStyle"
                    :header-cell-style="tableRowStyle"
          >
            <el-table-column  align="left" :show-overflow-tooltip="true" label="用户名">
              <template slot-scope="scope">
                <span v-if="scope.row.realName.indexOf('管理员') != -1" v-html="replace(scope.row.realName)"></span>
                <span v-if="scope.row.realName.indexOf('管理员') ==-1">{{scope.row.realName}}</span>
              </template>
            </el-table-column>
            <el-table-column align="left" :show-overflow-tooltip="true" label="下线时间">
              <template slot-scope="scope">
                <span>{{dateFormat(scope.row.lastLoginDatetime)}}</span>
              </template>
            </el-table-column>
            <el-table-column align="left" :show-overflow-tooltip="true" label="创建时间">
              <template slot-scope="scope">
                <span>{{dateFormat(scope.row.createDatetime)}}</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination-container">
            <el-pagination
              background
              @size-change="handleSizeChange1"
              @current-change="handleCurrentChange1"
              :pager-count="5"
              :current-page="currentPage1"
              :page-sizes="[5]"
              layout=" sizes, pager"
              :total="weChatUser.length"
            ></el-pagination>
          </div>
        </div>
      </el-col>-->
    </el-row>
  </div>
</template>
<script>
  import { initMedium, initFuel } from "./device-dictionary";
  import { queryDevice,queryDeviceByMedium,queryDeviceByOnline } from "@/api/device";
  import { queryWeChatAmount,queryWeChatUser } from "@/api/wechat";
  import echarts from 'echarts';
  function dictionaryValueFilter(dictionaryValue, value) {
    const dictionaryValueItem = dictionaryValue.filter(item => {
      return item.value == value;
    });
    return dictionaryValueItem[0];
  }
  export default {
    data() {
      return {
        listLoading:false,
        backgroundUrl: "/static/common/background.jpg",
        devices:null,
        devicesOnline:null,
        devicesArray:[],
        weChats:'',
        weChatUser:[],
        currentPage1: 1,
        pageSize1: 5,
        currentPage: 1,
        pageSize: 5,
        mediumArray: [],
        fuelArray: [],
        product: {
          media: null,
          power: null,
        },
        chartPie: null,
      }
    },
    filters: {
      dictionaryValueFieldFilter(value, dictionaryValueArray) {
        if (dictionaryValueFilter(dictionaryValueArray, value))
          return dictionaryValueFilter(dictionaryValueArray, value).label;
        return;
      }
    },
    created() {
      setInterval(this.DeviceByOnline,10000)
        this.inint()
    },
    watch: {   //监听值变化：devicesOnline
      devicesOnline:function () {
        this.drawCharts()
      }
    },
    methods: {
    formateMedium: function (input) {
      var label=null
      for(var i=0;i<this.mediumArray.length; i++){
        if(this.mediumArray[i].value==input){
          label=this.mediumArray[i].label
          console.log(label)
        }
      }
        return  label
      },
      formateFuel: function (input) {
        var label=null
        for(var i=0;i<this.fuelArray.length; i++){
          if(this.fuelArray[i].value==input){
            label=this.fuelArray[i].label
          }
        }
        return  label
      },
      replace: function (input) {
        return input.replace('管理员', '独行')
      },
      dateFormat: function (time) {
        if (time) {
          var date = new Date(time);
          var year = date.getFullYear();
          /* 在日期格式中，月份是从0开始的，因此要加0
           * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
           * */
          var month =
            date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1;
          var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
          var hours =
            date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
          var minutes =
            date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
          var seconds =
            date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
          // 拼接
          return (
            year +
            "-" +
            month +
            "-" +
            day +
            " " +
            hours +
            ":" +
            minutes +
            ":" +
            seconds
          );
        }
        else {
          return;
        }
      },
      /* DeviceByOnline(){
        queryDeviceByOnline().then(data => {
          this.devicesOnline = data.data.data.length;
        });
      },*/
      inint() {
        initMedium().then(data => {
          this.mediumArray = data;
        });
        initFuel().then(data => {
          this.fuelArray = data;
        });
        queryDeviceByMedium().then(data => {
          this.devicesArray = data.data.data;
        });
        queryDevice().then(data => {
          this.devices = data.data.data;
          this.devicesOnline = data.data.data;
        });
        /*  queryDeviceByOnline().then(data => {
         this.devicesOnline = data.data.data.length;
       });*/

        queryWeChatAmount().then(data => {
          this.weChats = data.data.data;
        });
        queryWeChatUser().then(data => {
          this.weChatUser = data.data.data;
        });
      },
      handleSizeChange: function (pageSize) {
        this.pageSize = pageSize;
        this.handleCurrentChange(this.currentPage);
      },
      handleCurrentChange: function (currentPage) {
        //页码切换
        this.currentPage = currentPage;
      },
      handleSizeChange1: function (pageSize) {
        this.pageSize1 = pageSize;
        this.handleCurrentChange1(this.currentPage1);
      },
      handleCurrentChange1: function (currentPage) {
        //页码切换
        this.currentPage1 = currentPage;
      },
      tableRowStyle({row, rowIndex}) {
        return 'background-color: #286BA8 ;color: #fff;'
      },
     drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
         var value4=this.devices;
          var value5=this.devicesOnline;
          var list=[]

        for(var i=0;i<this.devicesArray.length;i++){
         var person=new Object();
          person.value=this.devicesArray[i].amount
          person.name=this.formateFuel(this.devicesArray[i].power) + this.formateMedium(this.devicesArray[i].media)
          list.push(person)
}

        this.chartPie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: '60%',
              center: ['50%', '60%'],
              data: list,

              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
      drawPieChart1() {
        this.chartPie = echarts.init(document.getElementById('chartPie1'));
        var value4=this.devices;
        var value5=this.devicesOnline;
        var list=[]

        for(var i=0;i<this.devicesArray.length;i++){
          var person=new Object();
          person.value=this.devicesArray[i].amount
          person.name=this.formateFuel(this.devicesArray[i].power) + this.formateMedium(this.devicesArray[i].media)
          list.push(person)
        }

        this.chartPie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: '60%',
              center: ['50%', '60%'],
              data: list,

              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
      drawPieChart2() {
        this.chartPie = echarts.init(document.getElementById('chartPie2'));
        var value4=this.devices;
        var value5=this.devicesOnline;
        var list=[]

        for(var i=0;i<this.devicesArray.length;i++){
          var that=this
          var person=new Object();
          person.value=this.devicesArray[i].amount
          person.name=this.formateFuel(this.devicesArray[i].power) + this.formateMedium(this.devicesArray[i].media)
          person.power=this.devicesArray[i].power
          person.media=this.devicesArray[i].media
          list.push(person)
        }

        this.chartPie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: '60%',
              center: ['50%', '60%'],
              data: list,

              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
        this.chartPie.off('click')
        this.chartPie.on('click', function(params) {
          console.log(that.pageSize1)
        })
      },
      drawCharts() {
        this.drawPieChart()
        this.drawPieChart1()
        this.drawPieChart2()
      },
    }
  }
</script>
<style scoped>
  .loginBox {
    position: fixed;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

</style>
