<template>
  <div class="product-runInfo" style="overflow-y:auto">
    <p style="margin:0">
      <strong>{{this.boilerNo}}</strong>
     <!-- &nbsp;{{this.address}}-->
    </p>
    <animation
      :stove-animation="controllerFormData.stoveAnimation"
      :fan-animation-list="controllerFormData.fanAnimationList"
      :beng-animation-list="controllerFormData.bengAnimationList"
    ></animation>
    <el-row class="run-tab">
      <el-tabs
        type="card"
        v-model="controllerFormData.activeName"
        :style="{'float':'left','width':'100%','overflow-y':'auto'}"
      >
        <el-tab-pane
          label="异常信息"
          name="first"
          v-if="controllerFormData.exceptionInfoMap&&Object.keys(controllerFormData.exceptionInfoMap).length>0"
        >
          <el-row v-for="item in controllerFormData.exceptionInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}</span>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="基本信息" name="second">
          <el-row v-for="item in controllerFormData.baseInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="当前模拟量" name="third">
          <el-row v-for="item in controllerFormData.mockInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="设定参数" name="fourth">
          <el-row v-for="item in controllerFormData.settingInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="设备信息" name="five">
          <el-row v-for="item in controllerFormData.deviceInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
import { getControllerByteData, getControllerType } from "@/api/controller";
import { getDeviceByByteDataAndType, getCmdMapByDevice } from "@/deviceAdapter";
import animation from "./components/animation";
import { constants } from "fs";
export default {
  name: "controller-run-info",
  components: {
    animation
  },
  data() {
    return {
      timer: null,
      deviceType: null,
      subType: "",
      runTabHeight: document.body.clientHeight - 125,
      timeInterVal: 10,
      controllerFormData: {
        activeName: "second",
        stoveAnimation: "",
        deviceFocusInfoMap: {},
        fanAnimationList: [],
        bengAnimationList: [],
        exceptionInfoMap: {},
        baseInfoMap: {},
        mockInfoMap: {},
        settingInfoMap: {},
        deviceInfoMap: {}
      }
    };
  },
  props: {
    boilerNo: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: "未出售"
    },
    visible: {
      type: Boolean,
      default: false
    },
    controllerNo: {
      type: String,
      default: null
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    stopTimer() {
      console.log("stopTimer");
      this.deviceType = null;
      this.subType = "";
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = null;
    },
    startTimer() {
      console.log("startTimer");
      this.deviceType = null;
      this.subType = "";
      this.setTimeInterval();
      this.showControllerData();
    },
    setTimeInterval() {
      this.timer = setInterval(() => {
        console.log("work..............");
        this.showControllerData();
      }, 1000 * this.timeInterVal);
    },
    getDeviceByByteArray() {
      if (this.controllerNo) {
        console.log(this.controllerNo)
        getControllerByteData(this.controllerNo).then(data => {
          this.initControllerInfo();
          let controllerByteData = data.data;
          if (controllerByteData.length > 0 && this.deviceType) {
            this.getDevice(controllerByteData);
          }
        });
      }
    },
    showControllerData() {
      if (!this.deviceType) {
        getControllerType(this.controllerNo).then(data => {
          this.deviceType = data.data.deviceType;
          this.getDeviceByByteArray();
        });
      } else {
        this.getDeviceByByteArray();
      }
    },
    getDevice(byteData) {
      //console.log(this.deviceType + this.subType)
      getDeviceByByteDataAndType(byteData, this.deviceType).then(data => {
        if (data.getSubDeviceType() != "-1") {
          this.subType = "_" + data.getSubDeviceType();
        }
        this.controllerFormData.deviceFocusInfoMap = data.getDeviceFocusFields().map;
        this.controllerFormData.bengAnimationList = data.getBeng();
        this.controllerFormData.fanAnimationList = data.getFan();
        this.controllerFormData.stoveAnimation = data
          .getStoveElement()
          .getElementPrefixAndValuesString();
        this.controllerFormData.exceptionInfoMap = data.getExceptionFields().map;
        this.controllerFormData.baseInfoMap = data.getBaseInfoFields().map;

        this.controllerFormData.mockInfoMap = data.getMockFields().map;

        this.controllerFormData.settingInfoMap = data.getSettingFields().map;
        this.controllerFormData.deviceInfoMap = data.getDeviceFields().map;
      });
    },
    initControllerInfo() {
      this.controllerFormData.bengAnimationList = [];
      this.controllerFormData.fanAnimationList = [];
      this.controllerFormData.stoveAnimation = "";
      this.controllerFormData.exceptionInfoMap = {};
      this.controllerFormData.baseInfoMap = {};
      this.controllerFormData.mockInfoMap = {};
      this.controllerFormData.settingInfoMap = {};
      this.controllerFormData.deviceInfoMap = {};
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.product-runInfo {
  padding-left: 5px;
  padding-right: 5px;
  .deviceImg {
    float: left;
  }
  .deviceShuiBeng {
    margin-top: 71.3px;
    margin-left: 5%;
  }
  .run-tab {
    font-size: 14px;
    font-weight: 500;
    color: #303133;
  }
}
</style>
