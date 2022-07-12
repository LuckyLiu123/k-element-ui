# k-element-ui
创建一套公共的vue组件库


查看本地文档内容
npm run docs:dev

打包文档
npm run docs:build

一键部署github pages文档
npm run deploy:build

自动构建完整的样式内容和各个组件单独的样式，且打包一个完整的组件包和各个组件的单独包
npm run dist

组件的按需加载
在demo项目上安装 babel-plugin-component，然后在.babelrc 文件中写上这部分内容
```js
    {
        "plugins": [
            ["component", {
                "libraryName": "k-element-ui",
                "libDir": "lib",
                "styleLibrary": {
                    "name": "styles",
                    "base": false, // no base.css file
                    "path": "[module].css"
                }
            }]
        ]
    }
```

像这样做加载一个Button
```js
    import Vue from 'vue'
    import { Button } from 'k-element-ui'

    Vue.component('a-button', Button)
```

因为我们只在组件库的入口点里面设置了 install 方法用来注册组件，所以这里我们按需引入的时候，就需要自己手动注册


主题定制
在demo项目入口的同级目录下创建一个global.scss文件，然后写入类似下面这样的代码：
```scss
    $--color-primary: red;
    @import "~k-element-ui/src/styles/index.scss";
```

然后在入口文件中把对组件库的样式引入，改成引入我们自定义的global.scss文件。
```js
    import Vue from vue
    import KElementUI from 'k-element-ui'
    // import 'k-element-ui/lib/styles/k-element-ui.css'
    import './global.scss'
    // 其他代码 ...

    Vue.use(KElementUI)
```
其实这里就是覆盖了组件库中var.css里面的变量值，然后其余组件的基础样式还是使用了各自的样式内容，这样就可以达到主题定制了。