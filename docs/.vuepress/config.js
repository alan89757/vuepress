
module.exports = {
  title: 'vuepress文档系统',
  description: '分享文档',
  base: '/vuepress/',
  port: 8080,
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      '/',
      ['/contact', "联系我们"],
      ['/about', '关于我们']
    ]
  }
}