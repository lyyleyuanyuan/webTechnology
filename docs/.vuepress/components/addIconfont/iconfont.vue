<style scoped lang="scss">
ul,
li {
  margin: 0;
  list-style-type: none;
}
.last_list {
  margin-top: 20px;
}
</style>

<template>
  <div class="commonBox">
    <ul>
      <li>
        <b>(图一)</b>
        <img src="../../public/images/iconfont/iconfont1.png" alt />
      </li>
      <li>
        <b>(图二)</b>
        <img src="../../public/images/iconfont/iconfont2.png" alt />
      </li>
      <li>
        <b>(图三)</b>
        <img src="../../public/images/iconfont/iconfont3.png" alt />
      </li>
      <li class="last_list">
        <b>(图四) &nbsp; 点击图三的“Get Code”可以查看到经过设置后，html的具体使用方式</b>
        <img src="../../public/images/iconfont/iconfont4.png" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "iconfont",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
