<style scoped lang="scss">
.order_selectBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 10px;
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
                :style="{'flex-shrink':item.order}"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="common_Option_Box select_box order_selectBox">
          <div :key="indexs" v-for="(items,indexs) in items">
            <b class="key">{{items.name}}:</b>
            <div>
              <el-input-number controls-position="right" v-model="items.order" size="mini"></el-input-number>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "flexShrink",
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
      items: [
        {
          name: "item1",
          order: 1
        },
        {
          name: "item2",
          order: 1
        },
        {
          name: "item3",
          order: 1
        },
        {
          name: "item4",
          order: 1
        },
        {
          name: "item5",
          order: 1
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
