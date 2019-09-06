<style lang="scss" scoped>
.stretch_Height {
  height: inherit !important;
}
</style>
<template>
  <div class="commonBox flexBox_Common">
    <el-collapse class="collapseMine" v-model="activeNames">
      <el-collapse-item title="LIVE DEMO" name="1">
        <div class="commonContent">
          <div class="commonContentShow">
            <div class="live_Flex_box" :style="containerStyle">
              <div
                class="flex-item flexDirection_item"
                v-for="(item ,index) in items"
                :key="index"
                :class="{'stretch_Height':containerStyle['align-items']=='stretch'}"
              >{{item}}</div>
            </div>
          </div>
        </div>
        <div class="common_Option_Box select_box">
          <div class="key-value" :key="indexs" v-for="(items,indexs) in keyValueItems">
            <b class="key">{{items}}:</b>
            <div>
              <el-radio
                v-model="containerStyle[items]"
                v-for="(value ,index) in radioItems[indexs]"
                :key="index"
                :label="value"
              ></el-radio>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "alignItems",
  data() {
    return {
      activeNames: "1",
      keyValueItems: {
        alignItems: "align-items"
      },
      containerStyle: {
        "align-items": "flex-start",
        "justify-content": "flex-start",
        "align-content": "flex-start",
        "flex-direction": "row",
        "flex-wrap": "nowrap"
      },
      items: ["item1", "item2", "item3", "item4", "item5"],
      radioItems: {
        alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"]
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
