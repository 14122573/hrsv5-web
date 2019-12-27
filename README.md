# hrsv5-web

### 1、api写法
- 前端包名定义，hrds/项目（a、b等）/功能模块（syspara）
- 功能模块文件夹下，是定义一个“与功能模块一致的js”（syspara.js）和 无数.vue

### 2、api写法
- 所有api访问后台，只需要知道项目/功能/方法，如/A/syspara/getSysPara
- method: 'post' 不要再写了,在request.js里面已经封装好了...默认就是post

### 3、页面代码规范
- 所有页面不允许有对按钮、表格、下拉框、复选框等等元素颜色、样式的定义
- 确认框、提示框等需要提出公共进行使用

### 4、所有的错误不需要再判断了,直接取值...只需要对你自己取得值判断是否为空
  - 如果你重写了错误消息,会导致后台返回的具体错误信息看不到

### 5、对于删除,更新,删除,保存成功的操作请使用 utils/js/message.js,里面封装的方法
  * 后续使用方式 : 
    * 删除成功 : `this.$Msg.deleteSuccess(res);`
    * 更新成功 : `this.$Msg.updateSuccess(res);`
    * 保存成功 : `this.$Msg.saveSuccess(res);`
    * 删除确认 : `this.$Msg.confirmMsg(titleMsg);`
        
### 6、代码请注意格式化,保证代码格式的统一, 请统一使用vue-format格式化插件
