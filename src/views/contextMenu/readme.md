### dom激活右键菜单的状态：
挂载指令的dom在右键菜单被激活的情况下，会被添加一个contextmenu-active的class
```html
<!-- template -->
<div id="app" v-contextmenu="contextmenus"></div>
```

```css
#app {
  background-color: #fff;
}
#app.contextmenu-active {
  background-color: #f5f5f5;
}
```


### 主题：
右键菜单默认主题为light，你可以添加dark修饰符来使用dark主题
```html
<!-- template -->
<div id="app" v-contextmenu.dark="contextmenus"></div>
```

## 📒 完整参数
| prop           | type     | 描述                                           |
|----------------|----------|-----------------------------------------------|
| text           | string   | 菜单项文字                                      |
| subText        | string   | 菜单项文字补充                                   |
| action         | function | 菜单项点击后执行的方法                            |
| divider        | bool     | 分割线，与其他参数不共存                           |
| children       | array    | 子菜单                                          |
| disable        | bool     | 禁用菜单项                                       |
| hide           | bool     | 隐藏菜单项                                       |