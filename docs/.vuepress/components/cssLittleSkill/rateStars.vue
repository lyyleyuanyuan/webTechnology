<style scoped lang="scss">
$main: #ffa822; // 高亮颜色
$basic: #999; // 默认颜色
$content: "\e900";
$contentone: "\e901";
// 去掉input默认样式
.rateInput {
  -webkit-appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.rate-content {
  display: flex;
  flex-flow: row-reverse;
  // transform: rotateZ(180deg);
  // 单个星星
  input[name="rate"] {
    font-family: "iconfont"; // 之前引入的iconfont字体
    // transform: rotateZ(180deg);
    margin: 0;
    font-size: 30px;
    padding-right: 10px;
    font-size: 18px;
     &::after {
      content: $content;
      color: $basic;
      // transition: color 0.8s ease; // 加点颜色过渡效果
    }
    // 高亮的星星
    &:checked,
    &:checked ~ input[name="rate"],
    &:hover,
    &:hover ~ input[name="rate"] {
      &::after {
        content: $contentone;
        color: $main;
      }
      // 鼠标移入使星星放大
      &:hover {
        transform: scale(1.2);
        // transform: scale(1.2) rotateZ(180deg);
      }
    }
  }
}
</style>

<template>
  <div class="commonBox">
    <el-collapse class="collapseMine" v-model="activeNames">
      <el-collapse-item title="live demo" name="1">
        <div class="commonContent">
          <div class="commonContentShow">
            <div class="rate-content">
              <input class="rateInput" type="radio" name="rate" />
              <input class="rateInput" type="radio" name="rate" />
              <input class="rateInput" type="radio" name="rate" />
              <input class="rateInput" type="radio" name="rate" />
              <input class="rateInput" type="radio" name="rate" />
            </div>
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
      activeNames: "1"
    };
  },
  methods: {},
  mounted() {}
};
</script>
