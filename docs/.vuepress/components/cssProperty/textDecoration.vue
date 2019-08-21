<style scoped lang="scss">
.key_title {
  min-width: 120px;
  display: inline-block;
}
</style>

<template>
  <div class="commonBox">
    <el-collapse class="collapseMine" v-model="activeNames">
      <el-collapse-item title="动态展示" name="1">
        <div class="commonContent">
          <div class="commonContentShow">
            <a :style="containerStyle">我是一个a标签</a>
          </div>
          <div class="Option_Box">
            <span class="key_title">text-decoration:</span>
            <el-radio
              v-model="containerStyle['text-decoration']"
              v-for="(value ,index) in attributesItems"
              :key="index"
              :label="value"
              size="mini"
            ></el-radio>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "flex",
  data() {
    return {
      activeNames: "1",
      containerStyle: {
        "text-decoration": "none"
      },
      attributesItems: [
        "none",
        "underline",
        "blink",
        "overline",
        "line-through"
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
