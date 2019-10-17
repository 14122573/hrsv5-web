/**
 * 定义菜单的数据结构
 * 这里的数据后期会从后台返回
 * 
 */
const Menu = [

    {
        //如果有二级菜单只需要添加 children即可,数据结构和一级菜单保持一致
        icon: 'el-icon-menu', title: '功能选项', path: '/features', children: [
            {
                icon: 'el-icon-setting', title: 'Layout 布局', path: '', children: [
                    { icon: 'el-icon-setting', title: '基础布局', path: '/Layout1' },
                    { icon: 'el-icon-setting', title: '分栏间隔', path: '/Layout2' },
                    { icon: 'el-icon-setting', title: '混合布局', path: '/Layout3' },
                    { icon: 'el-icon-setting', title: '混合布局', path: '/Layout4' },
                    { icon: 'el-icon-setting', title: '分栏偏移', path: '/Layout5' }
                ]
            },
            { icon: 'el-icon-setting', title: 'Container 布局容器', path: '' },
            { icon: 'el-icon-setting', title: 'Button 按钮', path: '' },
            { icon: 'el-icon-setting', title: 'Radio 单选框', path: '' },
            { icon: 'el-icon-setting', title: 'Checkbox 多选框', path: '' },
            { icon: 'el-icon-setting', title: 'Select 选择器', path: '' },
            { icon: 'el-icon-setting', title: 'Switch 开关', path: '' },
            { icon: 'el-icon-setting', title: 'DatePicker 日期选择器', path: '' },
            { icon: 'el-icon-setting', title: 'Upload 上传', path: '' },
            { icon: 'el-icon-setting', title: 'Form 表单', path: '' },
            { icon: 'el-icon-setting', title: 'Table 表格', path: '' },
            { icon: 'el-icon-setting', title: 'Tag 标签', path: '' },
            { icon: 'el-icon-setting', title: 'Pagination 分页', path: '' },
            { icon: 'el-icon-setting', title: 'Badge 标记', path: '' },
            { icon: 'el-icon-setting', title: 'Loading 加载', path: '' },
            { icon: 'el-icon-setting', title: 'Message 消息提示', path: '' },
            { icon: 'el-icon-setting', title: 'MessageBox 弹框', path: '' },
            { icon: 'el-icon-setting', title: 'Notification 通知', path: '' },
            { icon: 'el-icon-setting', title: 'Tree 树形控件', path: '' },
            { icon: 'el-icon-setting', title: 'NavMenu 导航菜单', path: '' },
            { icon: 'el-icon-setting', title: 'Tabs 标签页', path: '' },
            { icon: 'el-icon-setting', title: 'PageHeader 页头', path: '' },
            { icon: 'el-icon-setting', title: 'Dropdown 下拉菜单', path: '' },
            { icon: 'el-icon-setting', title: 'Steps 步骤条', path: '' },
            { icon: 'el-icon-setting', title: 'Dialog 对话框', path: '' },
            { icon: 'el-icon-setting', title: 'Tooltip 文字提示', path: '' },
            { icon: 'el-icon-setting', title: 'Popover 弹出框', path: '' },
            { icon: 'el-icon-setting', title: 'Collapse 折叠面板', path: '' },
            { icon: 'el-icon-setting', title: 'Divider 分割线', path: '' },
            { icon: 'el-icon-setting', title: 'Image 图片', path: '' },
            { icon: 'el-icon-setting', title: 'InfiniteScroll 无限滚动', path: '' },
        ]
    }
]

export default Menu;