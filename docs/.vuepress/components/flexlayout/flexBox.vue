<template>
  <div class="commonBox flexBox_Common">
    <el-collapse class="collapseMine" v-model="activeNames">
      <el-collapse-item title="LIVE DEMO" name="1">
        <div class="defautItems">
          <div></div>
          <div class="slider_box">
            <span>宽度： {{itemsWith}}%</span>
            <div class="block">
              <el-slider
                v-model="itemsWith"
                show-input
                input-size="mini"
                @change="changeItemsWidth"
              ></el-slider>
            </div>
          </div>
        </div>
        <div class="commonContent">
          <div class="commonContentShow">
            <div class="live_Flex_box" :style="containerStyle">
              <div
                class="flex-item"
                v-for="(item ,index) in items"
                :style="itemsStyles"
                :key="index"
              >{{item}}</div>
            </div>
          </div>
        </div>
        <div class="common_Option_Box select_box">
          <div class="key-value" :key="indexs" v-for="(items,indexs) in keyValueItems">
            <b class="key">{{items}} : </b>
            <div>
              <el-radio
                v-model="containerStyle[items]"
                v-for="(value ,index) in radioItems[indexs]"
                :key="index"
                :label="value"
              ></el-radio>
            </div>
          </div>
          <div class="language-css extra-class">
            <pre><code ref="flexContainer"></code></pre>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  name: "flexBox",
  data() {
    return {
      activeNames: "1",
      itemsNum: 5,
      itemsWith: 24,
      itemsStyles: "",
      keyValueItems: {
        flexDirection: "flex-direction",
        flexWrap: "flex-wrap",
        justifyContent: "justify-content",
        alignItems: "align-items",
        alignContent: "align-content"
      },
      containerStyle: {
        "align-items": "flex-start",
        "justify-content": "flex-start",
        "align-content": "stretch",
        "flex-direction": "row",
        "flex-wrap": "nowrap"
      },
      items: ["item1", "item2", "item3", "item4", "item5"],
      radioItems: {
        flexDirection: ["row", "row-reverse", "column", "column-reverse"],
        flexWrap: ["nowrap", "wrap", "wrap-reverse"],
        justifyContent: [
          "flex-start",
          "flex-end",
          "center",
          "space-between",
          "space-around"
        ],
        alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
        alignContent: [
          "stretch",
          "flex-start",
          "flex-end",
          "center",
          "space-between",
          "space-around"
        ]
      }
    };
  },
  watch: {
    containerStyle: {
      handler() {
        this.setContainerStyleStr();
      },
      deep: true
    }
  },
  computed: {},
  methods: {
    styleToString(style) {
      let styleStr = "";
      for (let key in style) {
        styleStr += `${key}: ${style[key]};\n`;
      }
      return styleStr;
    },
    setContainerStyleStr() {
      this.$refs["flexContainer"].innerHTML = Prism.highlight(
        "display: flex;\n" + this.styleToString(this.containerStyle),
        Prism.languages.css
      );
    },
    changeItemsWidth(value) {
      this.itemsStyles = {
        width: (value ? value : this.itemsWith) + "%"
      };
    }
  },
  mounted() {
    this.setContainerStyleStr();
    this.changeItemsWidth();
  }
};
</script>
