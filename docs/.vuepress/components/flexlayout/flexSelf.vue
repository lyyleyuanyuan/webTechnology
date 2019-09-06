<style scoped lang="scss">
.order_selectBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.flexSelf_items {
  width: 16%;
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
                class="flex-item flexWrap_item"
                v-for="(item ,index) in items"
                :key="index"
                :style="{'align-self':item.alignSelf}"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="common_Option_Box select_box order_selectBox">
          <div class="flexSelf_items" :key="indexs" v-for="(items,indexs) in items">
            <b class="key">{{items.name}}:</b>
            <div>
              <el-select v-model="items.alignSelf" size="mini" placeholder="请选择">
                <el-option v-for="item in alignItems" :key="item" :label="item" :value="item"></el-option>
              </el-select>
              <!-- <el-input-number controls-position="right" v-model="items.order" size="mini"></el-input-number> -->
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "flexSelf",
  data() {
    return {
      activeNames: "1",
      containerStyle: {
        "align-items": "flex-start",
        "justify-content": "flex-start",
        "align-content": "flex-start",
        "flex-direction": "row",
        "flex-wrap": "nowrap"
      },
      alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      items: [
        {
          name: "item1",
          alignSelf: "flex-start"
        },
        {
          name: "item2",
          alignSelf: "flex-start"
        },
        {
          name: "item3",
          alignSelf: "flex-start"
        },
        {
          name: "item4",
          alignSelf: "flex-start"
        },
        {
          name: "item5",
          alignSelf: "flex-start"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
