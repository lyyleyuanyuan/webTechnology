const nav = [
  { text: 'Home', link: '/' },
  { text: 'GitHub', link: 'https://github.com/lyyleyuanyuan/webTechnology' },
]
const sidebar = [
  {
    title: 'CSS',
    // collapsable: false,
    children: [
      ["/cssItems/cssProperty/", '常用属性总结'],
      ["/cssItems/clearfloat/", '清除浮动'],
      ["/cssItems/cssLittleSkill/", '奇技淫巧'],
    ]
  },
  {
    title: 'JS',
    // collapsable: false,
    children: [
      ["/jsItems/basicExplanation/", '基础详解'],
      ["/jsItems/jsvascriptSkills/", '开发技巧'],
      ["/jsItems/arrayOperation1/", '数组操作'],
      ["/jsItems/arrayOperation2/", '数组增删改'],
      ["/jsItems/arrayOperation3/", '数组内查找'],
      ["/jsItems/arrayOperation4/", '数组遍历'],
      ["/jsItems/debounceThrottle/", '防抖和节流'],
    ]
  },
]

module.exports = {
  title: "webTechnology",
  description: "记录一些常用的技巧",
  dest: "./dist", // 设置输出目录
  base: '/webTechnology/',
  repo: 'https://github.com/lyyleyuanyuan/webTechnology',
  plugins: [
    "vuepress-plugin-cat",
  ],
  themeConfig: {
    nav: nav,
    sidebar: sidebar,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: 'Refresh'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
