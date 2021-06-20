# demo

# 如果感觉可以，请留下您的start

##  在线预览
### git subtree push --prefix=dist origin gh-pages

[在线预览](https://zhangxiang0316.github.io/vueUtils).

## gzip压缩

```
//引入该插件
const CompressionWebpackPlugin = require("compression-webpack-plugin")
//匹配此 {RegExp} 的资源
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

const plugins = []
// start 生成 gzip 压缩文件
plugins.push(
new CompressionWebpackPlugin({
filename: "[path].gz[query]", //目标资源名称
algorithm: "gzip",
test: productionGzipExtensions, //处理所有匹配此 {RegExp} 的资源
threshold: 10240,//只处理比这个值大的资源。按字节计算(楼主设置10K以上进行压缩)
minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
})
);
 config.plugins = [...config.plugins, ...plugins];
```

## Tomcat 配置

![img.png](img.png)

```
 <Connector port="8085" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" 
			   compression="on"   
			   useSendfile="false"
               compressionMinSize="2048"  
               compressableMimeType="text/html,text/xml,text/javascript,application/x-javascript,application/javascript,text/css,text/plain"/>
```

## nginx配置

```
server {
		listen 8081;
		server_name liangyuqing.cn;
		
		gzip on;
		gzip_min_length 1k;
		gzip_comp_level 6;
		gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
		gzip_vary on;
		gzip_disable "MSIE [1-6]\.";
```


## 现阶段大部分功能已经完善，后续会添加更多的组件

首先先带搭建看一下页面
![](https://img-blog.csdnimg.cn/img_convert/653dbc3a0607be723117ca7be9143adc.png)
![](https://img-blog.csdnimg.cn/img_convert/37863aa77d0fa3a7b9e22d1da3f17bcb.png)
![](https://img-blog.csdnimg.cn/img_convert/864fb66fad9be064e3fd5ba8ecb9aaf2.png)
![](https://img-blog.csdnimg.cn/img_convert/eb8f22fac784df027af52c12ed0753cb.png)
![](https://img-blog.csdnimg.cn/img_convert/e123191146cb77e5ac7a6a722ca27831.png)
![](https://img-blog.csdnimg.cn/img_convert/16bbf82d241d6188aef66ba469fece09.png)

## 项目基于element ui 二次封装后的zx-lib
现在先来说一下zx-lib
* zx-lib 为element ui 二次封装的form表单以及table组件，现在已上传到npm
*  大家可以在线使用
*  使用方法:
*  npm i zx-lib -S
*  main.js 中引用
*  import zxLib from 'zx-lib'
*  Vue.use(zxLib)
## 记得前提是你已经引用过了element ui
现在组件中已经封装了如下组件，后续会慢慢添加其他组件
![](https://img-blog.csdnimg.cn/img_convert/9ad3a5ddf3cc4ff5135c583c42eb0635.png)
![](https://img-blog.csdnimg.cn/img_convert/c08ff2f8257d5c91bb633a0653d6d027.png)
zxForm中插槽，可以根据自己需要添加自己所需组件
* zxForm 中内置所有改变点击事件通过
```
this.$emit('event', params) 
```
回调回主页面
![](https://img-blog.csdnimg.cn/img_convert/a8c28e76b5c47a8d0c52258e2e4f7615.png)
* type代表是事件类型
* prop代表那个字段改变
* value代表改变后的值
* data中放的为form表单中所有值
  表单中内置两个prop值代表提交与重置
  ![](https://img-blog.csdnimg.cn/img_convert/bc378a8c034bb5586c411e53a433e177.png)
  ![](https://img-blog.csdnimg.cn/img_convert/a1dcb5aa816d006c6acce55fc529f762.png)
  提交采取Promise形式，若自己写提交验证可以使用
```
   Promise.all([this.$refs.mForm.submit(), this.$refs.mForm1.submit()]).then(datas => {
        console.log("---同时提交-->", '校验成功')
      })
```


也请大家给点小星星

# 现在来说一下表单拖拽

表单拖拽使用vuedraggable实现

配合zx-lib来实现拖拽表单

## 拖拽表单现已实现json数据导入导出复制，导出vue文件以及在线预览 ，表单可以拖拽排序，双击删除




更多的介绍欢迎大家查看源码

[源码地址](https://github.com/zhangxiang0316/vueUtils)

[项目在线体验地址](https://zhangxiang0316.github.io/vueUtils/#/form)
 
