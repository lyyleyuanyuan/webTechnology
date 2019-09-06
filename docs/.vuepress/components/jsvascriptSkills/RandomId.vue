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
            <p>{{showNumber}}</p>
          </div>
          <div class="common_Option_Box">
            <el-row>
              <el-button type="primary" @click="RandomId">生成随机数</el-button>
            </el-row>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "RandomId",
  data() {
    return {
      activeNames: "1",
      inputNumber: 10,
      showNumber: ""
    };
  },
  methods: {
    RandomId() {
      this.showNumber = Math.random()
        .toString(36)
        .substr(3);
    }
  }
};
</script>
