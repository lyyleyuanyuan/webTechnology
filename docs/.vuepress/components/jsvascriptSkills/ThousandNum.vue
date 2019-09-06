<style scoped lang="scss">
.key_title {
  min-width: 120px;
  display: inline-block;
}
</style>

<template>
  <div class="commonBox">
    <el-collapse class="collapseMine" v-model="activeNames">
      <el-collapse-item title="LIVE DEMO" name="1">
        <div class="commonContent">
          <div class="commonContentShow">
            <p>{{ThousandNum(inputNumber)}}</p>
          </div>
          <div class="common_Option_Box">
            <span class="key_title">输入数字:</span>
            <el-input placeholder="请输入内容" type="number" v-model="inputNumber" clearable></el-input>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "ThousandNum",
  data() {
    return {
      activeNames: "1",
      inputNumber: ""
    };
  },
  methods: {
    ThousandNum(num) {
      var res = num.toString().replace(/\d+/, function(n) {
        // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
          return $1 + ",";
        });
      });
      return res;
    }
  }
};
</script>
