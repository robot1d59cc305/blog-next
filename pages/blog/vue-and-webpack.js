import Blog from '../../components/Blog'

export default () => (
  <Blog>
    <h1 id="vuejswebpack">Vue.js 和 Webpack</h1>

    <p><strong>转载前请务必先联系邮箱</strong></p>

    <p>最近在把 SISE Game（我们学校的校内游戏直播网站） 从原本的 Ruby on Rails 彻底用 Node.js 重写，  经过一些考虑，决定用 Vue.js 和 Express.js 实现前后端分离的架构，在这几天的重写过程中，积累了对 Webpack 和 Vue.js 的一些新的看法。</p>

    <h2 id="aboutvuejs">About Vue.js</h2>

    <p>Vue 是个很年轻的 MVVM Library，常常有很多人用 Angular 和 Vue 比较，因为两者都是 MVVM，但实际上，前者是 Framework，而后者是 Library。前者有很陡峭的学习曲线，后者可以很快地掌握运用到项目中去。</p>

    <p>Vue 的官方是用 <strong>a library for building modern web interfaces</strong> 来描述自己的。Vue 适合和 React 对比，因为在使用 Vue 的 Components System 开发比较大型的 Single Page Application 的时候，我发现它和 React 有一些相似的地方。如果你赞同 React 的思想，但又不想写 JSX，那么，你就可能需要试试 Vue 了。</p>

    <p>一个用 Vue 实现 Data binding 的 Demo：</p>

    <pre><code className="html language-html">{`<!-- index.html -->
<div id="#app">
  <input v-model="msg" />
  <p>{{ msg }}</p>
</div>
<script>
  var app = new Vue({
        el: '#app',
    data: {
        msg: 'hello Vue.js'
    }
  })
</script>
`}</code></pre>

    <h2 id="whyvuejs">Why Vue.js</h2>

    <p>前端开发发展到现在，我们做过的很多努力，都是在尝试把开发者从繁琐的 DOM  操作和管理 DOM state 中解放出去，我们希望只需要通过描述数据和行为，DOM 自己就可以发生对应的变化，React 在 View 这一层实现了这一目标，而 MVVM 则是通过 ViewModel 的 Data Binding。React 宣称自己是 View，那么在我看来， Vue 则是 View + ViewModel，并且 Vue 更加 lightweight 和 flexible。</p>

    <p>Vue 最让我喜欢的是它的 Components System，利用它可以构建组件化的中大型应用。React 当然也是组件化的，但是 Virtual DOM (JSX) 在一些场景让我很不满意。比如有一次，我用一个使用 React 的项目中，想要在一 <code>{`<video>`}</code> 里使用 <code>webkit-playsinline</code> 这个 attribute，但是 React 不支持，渲染的时候直接被 ignored，我必须手动地操作 DOM 给 <code>{`<video>`}</code> setAttribute。相反，Vue 的 Components System 当中，写的是真正的 DOM，不需要担心不支持不兼容的各种情况。</p>

    <p>容易被用作对比的是 Angular。我第一次听说 Vue 的时候，也是把它当作一个 lightweight 的 Angular alternative. 但是当真正实践使用 Vue 的时候，才发现它和 Angular 有着很大的不同。Angular 是一个 Framework，一旦你使用它，就必须按照它的一套去组织你的项目。以前写 Angular 项目的过程和经历对我个人来说都不太愉快，我更加倾向于 Vue 这种更灵活的方案。</p>

    <p>关于 Vue 和其它库和框架的对比，官方也有作者更详细的 <a href="http://vuejs.org/guide/faq.html">解答</a>（<a href="http://cn.vuejs.org/guide/faq.html">中文版本</a>）</p>

    <h2 id="usingvuejs">Using Vue.js</h2>

    <p>SISE Game 并不算一个大型的 Web APP，但也规范地使用组件化的开发，整个项目的结构大致如下：</p>

    <pre><code className="text language-text">{`├── app
│   ├── app.js #entry
│   ├── app.vue
│   ├── config.js
│   ├── filters # 自定义的一些 filters
│   ├── components #各种组件
│   ├── models
│   ├── utils
│   └── views #各种页面的 views
│       ├── home.vue
│       ├── room.vue
│       ├── signin.vue
│       ├── signup.vue
│       └── user.vue
├── bower.json
├── build
├── gulpfile.js
├── index.html
├── node_modules
├── package.json
├── static #静态文件
│   ├── images
│   ├── styles
│   └── swfs
└── webpack.config.js
`}</code></pre>

    <h3 id="">组件化</h3>

    <p>Vue 通过自己的 <code>.vue</code> 文件来定义 components，<code>.vue</code> 文件里包含组件的模板、逻辑和样式，从而实现组件和组件之间的<strong>分治</strong>，非常易于维护。</p>

    <pre><code className="html language-html">{`<!-- components/user.vue -->
<template>
  <p>Hello {{ name }}</p>
  <button v-on="click: alertName()">alert!</button>
</template>

<script>
  module.exports = {
        data: function(){
      return {
        name: 'Randy'
      }
    },
    methods: {
        alertName: function(){
        alert(this.name);
      }
    }
  }
</script>

<style>
  p{
        color: #69C;
  }
</style>
`}</code></pre>

    <p>以上就是一个简单的 component 实现，借助 webpack，甚至可以直接在 component 里写 es6、scss 和 jade。</p>

    <h3 id="-1">路由</h3>

    <p>路由对于 Single Page Application 来说应该算是不可少的东西，Vue 作为一个 Library，它本身并不提供这些组件。目前官方的 vue-router 仍处于 technical preview 的状态，官方也建议可以使用 component 和 Director.js 实现路由，比如：</p>

    <pre><code className="html language-html">{`<div id="app">
  <component is="{{ currentView }}"></component>
</div>
`}</code></pre>

    <pre><code className="javascript language-javascript">{`Vue.component('home', { /* ... */})
Vue.component('page1', { /* ... */})
var app = new Vue({
        el: '#app',
  data: {
        currentView: 'home'
  }
})
// Switching pages in your route handler:
app.currentView = 'page1'
`}</code></pre>

    <p>这样你只需要操作 <code>app.currentView</code> 的值就可以实现视图的切换，这一步通常会配合 Director.js 这类的 hash router.</p>

    <h2 id="aboutwebpack">About Webpack</h2>

    <p>与其费周章说明 Webpack 是什么东西，倒不如先说说不用 Webpack 以前的一些现实。</p>

    <p>我们在写前端 JavaScript 的时候，通常是写在多个 <code>.js</code> 文件里，通过闭包避免全局变量污染，然后一股脑地用 <code>{`<script>`}</code> 引入。</p>

    <pre><code className="html language-html">{`<body>
  ...
  <script src="a.js"></script>
  <script src="b.js"></script>
  <script src="c.js"></script>
</body>
`}</code></pre>

    <p>出于性能上的追求，我们会应该把 <code>a.js</code> <code>b.js</code> <code>c.js</code> 合并为同一个文件 <code>bundle.js</code> 来减少请求数量，变成：</p>

    <pre><code className="html language-html">{`<body>
  ...
  <script src="bundle.js"></script>
</body>
`}</code></pre>

    <p>使用 Gulp/Grunt 等自动化构建工具很容易可以实现这样的 concat，但是很快我们就会发现，单纯的 concat 并不是一个好的方案，因为代码文件之间的依赖关系不明确，这样一来，有时不得不花一些时间去组织 concat 的顺序。我们很希望像写 Node 一样模块化地去写前端 JavaScript。</p>

    <p>又有些时候，在两个不同的页面当中我们常常会共用一些代码，单纯的 concat 会增加很多不必要的体积。</p>

    <p>所以  ，我们理想的情况是，可以在前端优雅地写符合模块规范（AMD, UMD, CommonJS）的代码并且自动打包，最好还能自动把重用的文件分离出来。</p>

    <p>嘿，Webpack 就很擅长做这种事。</p>

    <h2 id="usingwebpack">Using Webpack</h2>

    <p>Webpack 兼容所有模块规范（如果你不知道到底用哪一种，就用 CommonJS）。</p>

    <p>配置 webpack 比较简单，你需要定义入口文件和 bundle 输出的目录：</p>

    <pre><code className="javascript language-javascript">{`// webpack.config.js
      module.exports = {
        entry: './app.js',
  output: {
        path: './build',
    filename: 'bundle.js'
  }
}
`}</code></pre>

    <p>这样，你就能在前端这样去写 JavaScript：</p>

    <pre><code className="javascript language-javascript">// /app.js
      var Vue = require('vue');
var app = new Vue({/*...*/})
</code></pre>

    <p>这是 CommonJS 的写法，如果你写过 Node.js，应该对这种写法相当熟悉。这时运行 <code>$ webpack</code> ，webpack 会自动根据入口文件 <code>app.js</code> 中的依赖关系来打包成单个 js 文件，输出到配置文件中指定的 output path 中。</p>

    <p>webpack 也可以通过 plugin 自动分析重用的模块并且打包成单独的文件：</p>

    <pre><code className="javascript language-javascript">{`// webpack.config.js
      var webpack = require('webpack'),
  CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
        entry: './app.js',
  output: {
        path: './build',
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin('vendor.js')
  ]
}
`}</code></pre>

    <h3 id="-2">多入口文件</h3>

    <p>webpack 的一个特色是可以指定多个入口文件，最后打包成多个 bundle。比如说 Timeline page 和 Profile page 是不同的页面，我们不希望两个页面的 js 被打包在一起，这时我们就可以为 timeline 和 profile 两个页面定义不同的入口：</p>

    <pre><code className="javascript language-javascript">{`// webpack.config.js
      module.exports = {
        entry: {
        timeline: './timeline.js',
    profile: './profile.js'
  },
  output: {
        path: './build',
    filename: '[name].bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin('vendor.js')
  ]
}
`}</code></pre>

    <p>最后会被分别打包成 <code>timeline.bundle.js</code> 和 <code>profile.bundle.js</code>。</p>

    <h3 id="loader">loader</h3>

    <p>webpack 神奇的地方在于，任何的文件都能被 <code>require()</code>。依靠各种 loader，使你可以直接 <code>require()</code> 样式、图片等静态文件。这些静态文件最后都会被处理（比如 scss pre-process 和图片的压缩）和打包在配置好的 output path 中。</p>

    <pre><code className="scss language-scss">{`#container{
      background - image: url(require('./images/background.png'));
  p{
        color: #69C;
  }
}
</code></pre>

    <pre><code className="javascript language-javascript">// app.js
      require('./styles/app.scss')
// blablabla....
`}</code></pre>

    <p>你可以像上面这样在 JavaScript 中引入 scss （和在样式中引入图片），只要你配置好处理 scss 的 loader：</p>

    <pre><code className="javascript language-javascript">{`module.exports = {
      entry: './app.js',
  output: {
        path: './build',
    filename: 'bundle.js'
  },
  module: {
        loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style','css!sass')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192' // 图片低于 8MB 时转换成 inline base64，非常神奇！
      }
    ]
  }
}
`}</code></pre>

    <p>css 默认被编译到 JavaScript 中成为字符串后再被插入到 <code>{`<style>`}</code> 中，我个人建议使用 <code>ExtractTextPlugin</code> 这个插件把 css 分离出去。</p>

    <h2 id="whyvuejswebpack">Why Vue.js + Webpack</h2>

    <p>在以往的一些小型的前端项目中，我习惯把逻辑（<code>scripts</code>）、视图（<code>views</code>）和样式（<code>styles</code>）分开在独立的目录当中，保证三者不耦合在一起。但是随着项目越来越大，这样的结构会让开发越来越痛苦，比如要增加或修改某个 <code>view</code> 的时候，就要在 <code>scripts</code> 和 <code>sytles</code> 里找到对应这个 <code>view</code> 的逻辑和样式进行修改。</p>

    <p>为了避免这样随着项目增大带来的难于维护，我开始尝试<strong>前端组件化</strong>，把 <code>views</code> 拆分成不同的组件（component），为单个组件编写对应的逻辑和样式：</p>

    <pre><code>{`app/components
├── Chat
│   ├── Chat.jade
│   ├── Chat.js
│   └── Chat.scss
└── Video
    ├── Video.jade
    ├── Video.js
    └── Video.scss
`}</code></pre>

    <p>这样的开发模式，不仅提高代码的可维护性和可重用性，还有利于团队之间的协作，一个组件由一个人去维护，更好地实现<strong>分治</strong>。幸运的是，随着 React 越来越火，组件化的开发模式也就越来越被接受。</p>

    <h2 id="usingvuejswebpack">Using Vue.js + Webpack</h2>

    <p>在 Vue 中，可以利用一个 <code>.vue</code> 文件实现组件化，而不需要对每个组件分别建立 style, scripts 和 view。这样做的好处是使组件能更加直观，而坏处是目前有些 editor 对 <code>.vue</code> 的语法支持还是不太好。我用 Atom 写 <code>.vue</code> 的时候，<code>{`<style>`}</code> 的那一块并不能自动补全。不过我个人不依赖 css 的补全，所以没有太大的影响。如果你比较依赖这个，建议你还是把这些代码分离出来。</p>

    <p>一个简单的 Vue Component：</p>

    <pre><code className="html language-html">{`<!-- components/sample.vue -->

<template lang="jade">
  .test
    h1 hello {{ msg }}
      </template>

<script>
module.exports = {
        el: '#app',
  data: {
        msg: 'world'
  }
}
</script>

<style lang="sass">
  .test{
        h1{
      text-align: center;
    }
  }
</style>
`}</code></pre>

    <p>我们使用 Webpack 就可以自动将 <code>.vue</code> 文件编译成正常的 JavaScript 代码，只需要在 Webpack 中配置好 <code>vue-loader</code> 即可：</p>

    <pre><code className="javascript language-javascript">{`// webpack.config.js

      module.exports = {
        entry: './app.js',
  output: {
        path: './build',
    filename: 'app.js'
  },
  module: {
        loaders: [
      {
        test: /\.vue$/, loader: 'vue-loader'
      }
    ]
  }
}
`}</code></pre>

    <p>这样，就可以正常地在文件中 <code>require()</code> 所有 <code>.vue</code> 文件：</p>

    <pre><code className="javascript language-javascript">{`module.exports = {
      el: '#app',
    data: {/* ... */},
    components: {
        'sample': require('./components/sample.vue')
    }
  }
`}</code></pre>

    <h3 id="css">css 分离</h3>

    <p><code>vue-loader</code> 使用 <code>style-loader</code> 把 component 当中的样式编译成字符串后插入到 <code>{`<head>`}</code> 中去。但我们希望把 css 文件独立出去，那么可以使用上一篇文章提到的 <code>ExtractTextPlugin</code> 插件，配合 <code>vue-loader</code> 的 <code>withLoaders()</code> 方法实现生成独立样式文件：</p>

    <pre><code className="javascript language-javascript">{`// webpack.config.js
      var vue = require('vue-loader')
  , ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
        entry: './app.js',
  output: {
        path: './build',
    filename: 'app.js'
  },
  module: {
        loaders: [
      {
        test: /\.vue$/, loader: vue.withLoaders({
        sass: ExtractTextPlugin.extract("css!sass") // 编译 Sass
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css') // 输出到 output path 下的 app.css 文件
  ]
}
`}</code></pre>

    <h2 id="-3">总结</h2>

    <p>webpack 是一个十分好用的模块打包工具，使用它更加利于实现前端开发工程化。</p>

    <p>很多人认为 webpack 可以取代 Gulp/Grunt 等构建工具，其实不然。Webpack 仅仅是<strong>顺便</strong>替构建工具分担了一些预编译预处理的工作，而构建工作不仅仅只有预编译啊。</p>

    <p>Vue.js 和 Webpack 的结合使用方法写到这里就已经算是写完了，当然，还有很多其它的实践方法，都要靠读者自己去摸索了，这个系列仅仅是想给没有使用过 Vue.js 或者 Webpack 的读者一个大概的认识。</p>

    <p>最后趁这个机会感慨一下，前端开发是让人感到兴奋的，我以前也写很多有关前端的东西，但从来不愿意称自己为『前端开发者』，是由于自己对前端开发的各种浅见，认为前端开发低端、repetitive、不能成大事。但是经过更加深入的实践，才慢慢发现前端也是工程化的、有学问的、有活力的。我很高兴可以作为一名『前端开发者』，在这里感受日新月异的氛围的技术浪潮。</p>

    <h2 id="-4">延伸阅读</h2>

    <ul>
      <li><a href="https://github.com/fouber/blog/issues/10">前端工程——基础篇</a></li>

      <li><a href="http://webpack.github.io/docs/tutorials/getting-started/">Webpack Getting Started</a></li>

      <li><a href="http://segmentfault.com/a/1190000002551952">Webpack 入门指迷</a></li>

      <li><a href="https://www.youtube.com/watch?v=VkTCL6Nqm6Y">How Instagram.com Works</a></li>

      <li><a href="http://vuejs.org/guide/components.html">Vue.js - Component System</a></li>

      <li><a href="http://vuejs.org/guide/application.html">Vue.js - Building Larger Apps</a></li>

      <li><a href="https://github.com/vuejs/vue-router">vue-router</a></li>

      <li><a href="http://teahour.fm/2015/08/16/vuejs-creator-evan-you.html">和 Vue.js 框架的作者聊聊前端框架开发背后的故事</a></li>
    </ul>
  </Blog>
)