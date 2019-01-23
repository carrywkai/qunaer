

# qunaer

## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 1.项目初始化

### 1.1初始化项目的配置文件

+ 在index.html文件当中配置移动端项目

  ```html
   <!-- 移动端的配置文件 -->
      <meta name="viewport" 
            content="width=device-width,
                     initial-scale=1.0,
                     minimum-scale=1.0,
                     maximum-scale=1.0,
                     user-scalable=no">
  ```

+ 重置页面样式 以及 解决移动端的1像素边框问题

  ```js
  // 引入重置样式
  import './assets/styles/reset.css'
  // 移动端的1像素边框的问题
  // 有些移动设备的像素比较高，当设置1像素边框的时候，可能是2像素的物理像素
  import './assets/styles/border.css'
  ```

+ 解决移动端的300毫秒的点击延迟

  ```js
  // 使用npm下载 fastclick 第三方包
  npm install fastclick --save
  // 在main.js 引入fastclick 依赖包
  import fastClick from 'fastclick'
  // 调用 fastClick的方法
  fastClick.attach(document.body)
  ```
