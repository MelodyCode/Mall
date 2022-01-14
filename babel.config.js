module.exports = {
  //解码规则
  "presets": [
    '@vue/cli-plugin-babel/preset'
  ],
  //插件
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
