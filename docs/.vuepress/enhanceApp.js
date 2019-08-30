import ElementUI from 'element-ui'
import './public/styles/iconfont.css'
// import './public/styles/base.scss'
import './public/styles/element-variables.scss'


export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  // siteData // 站点元数据
}) => {
  Vue.use(ElementUI)
}

