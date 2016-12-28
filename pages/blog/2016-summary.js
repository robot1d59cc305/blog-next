import Blog from '../../components/Blog'

export default () => (
  <Blog>
    <h1 id="2016">2016 年终总结</h1>

    <h2 id="">博客篇</h2>

    <p>开篇讲讲这个博客这一年的「成绩」：</p>

    <h4 id="-1">访问量</h4>

    <p>因为今年年中进行过博客迁移，从 github pages 迁到了阿里云，还换了整个 blog platform. 所以新旧博客的统计要结合起来看。</p>

    <p>旧博客统计：</p>

    <p><img src="/static/images/old_blog.png" alt="旧博客统计" /></p>

    <p>新博客统计：</p>

    <p><img src="/static/images/new_blog.png" alt="新博客统计" /></p>

    <p>总计： PV <strong>49,406</strong>，UV <strong>15,800</strong></p>

    <h4 id="-2">访问设备</h4>

    <p><img src="/static/images/newblog_devices.png" alt="访问设备" /></p>

    <p>iPhone 用户仍然排第一，第二是小米。</p>

    <h4 id="-3">来源浏览器</h4>

    <p><img src="/static/images/newblog_browser.png" alt="" /></p>

    <h4 id="-4">文章排行</h4>

    <p><img src="/static/images/oldblog_post_trend.png" alt="旧博客排行" /></p>

    <p>上半年一个 Vue 和 Webpack 系列访问量比较大。下半年给自己的博客定位不是单纯的技术博客，访问量比较大的是关于退学的两篇文章。</p>

    <p><img src="/static/images/newblog_post_trend.png" alt="新博客排行" /></p>

    <p>坚持做独立博客很难，坚持写博客更难。我没有开公众号，因为开公众号会让我感到有压力，更会让我「为了推送而写文章」。也是因为赞同<a href="http://coolshell.cn/articles/17391.html">陈皓的观点</a>。</p>

    <h2 id="-5">技术篇</h2>

    <p>今年因为工作原因，把大部分的精力花在了 React 上，Vue 反倒没什么机会写了。写 React 的过程中对 Thinking in React 有了不同的看法。我从前不喜欢 JSX, 不喜欢 <code>setState</code>, 但是慢慢地开始思考 Functional Programming, Reactive Programming. 后来发现，React 是不是 React 已经不重要了，因为 React 只是实现它思想的手段，更重要的是在其背后的，UI Development 的观念 —— <code>(state) =&gt; View</code>。无论如何争论 Functional Programming，它的的确确改变了我对程序开发的想法，我开始追求 Pure Function，开始讲究函数的 side-effect. 我想下一年我还会对 FRP 做更深入的研究。关于这方面的感悟，我会单独写成文章。</p>

    <p>比较快乐的是在一些项目里使用了 TypeScript. 自己也写了<a href="http://lutaonan.com/is-static-type-in-javascript-a-burden/">文章</a>，录了<a href="http://www.bilibili.com/video/av6511223/">视频</a>, 来表达我对这个语言的看法。</p>

    <p>这一年参加了两个 Talk, 一个是珠三角技术沙龙，讲的是 Vue 和 Native. 另一个是 Node 地下铁，讲了 TypeScript. 关于技术分享，我在知乎有<a href="https://www.zhihu.com/question/52777303/answer/136427221">一篇回答</a> 讲了我对国内技术分享会议的看法。希望我自己在接下来的一年能有更大的长进，然后用自己的行动去告诉大家技术分享应该怎么做。</p>

    <p>比较遗憾的是工作之后减少了写开源项目的时间，今年对开源社区最大的贡献就只有给一本<a href="https://github.com/basarat/typescript-book">TypeScript 书</a> 贡献了些内容。</p>

    <h2 id="-6">工作篇</h2>

    <p><img src="/static/images/gitlab.png" alt="Gitlab Summary" /></p>

    <p>从 3 月份入职，完成了一个项目的重构，帮助了一些还有些迷茫的朋友，用自己的热情感染了团队的技术氛围，是在这一年工作上让我自己感到满足的事情。</p>

    <h2 id="-7">读书篇</h2>

    <p><a href="https://book.douban.com/subject/25930025/"><strong>Just for Fun: The Story of an Accidental Revolutionary</strong></a></p>

    <p>Linux 创始人 Linus 的自传，记录了 Linus 的少年时期和 Linux 的诞生，之中还夹杂一些对开放源代码的观念。读完以后很受鼓舞，能像 Linus 一样是我做软件开发的终极目标。</p>

    <p><a href="https://book.douban.com/subject/26835090/"><strong>Soft Skills: The software developer's life manual</strong></a></p>

    <p>中文名叫《软技能：代码之外的生存指南》。我很不喜欢这类教别人做人的书，但是受人推荐，还是读完了。</p>

    <p>书里有几个章节我印象比较深刻。比如谈到大公司、中等规模公司、创业公司之前的区别：</p>

    <blockquote>
      <p>在大公司工作令人沮丧，因为他们感到他们个人的贡献无足轻重</p>

      <p>为大公司工作的一个显而易见的事情就是成长机会</p>
    </blockquote>

    <p>结合自身条件和自己喜欢的工作环境进行职业选择，是需要深思熟虑的事情。</p>

    <p>书中还谈了个人品牌的打造，学历问题等等。都值得一读。</p>

    <p><a href="https://book.douban.com/subject/1467587/"><strong>The Art of UNIX Programming</strong></a></p>

    <p>中文名是《UNIX 编程艺术》。万幸我用 macOS 也算是 UNIX 环境的重度用户，所以在读这本书的时候不会感到吃力。这本书实际上和 UNIX 源代码没有什么关系，讲的是 UNIX 下的程序（比如 grep），这些程序的设计哲学让我对软件有了新的思考。</p>

    <p>编写复杂软件又不至于把自己搞混乱的方法是降低软件整体的复杂度。软件本身的复杂度不会因为实现方式和代码组织的优秀而降低，但是这能使整体复杂度降低。降低整体复杂度的方法是<strong>用清晰的接口把复杂的软件分解成若干个简单的模块</strong>。</p>

    <p>每把剃刀都自有其哲学，更何况是软件开发呢。即使是开发一个小函数，它的输入和输出也是需要讲究的。</p>

    <p><a href="https://book.douban.com/subject/26849305/"><strong>Becomming Steve Jobs</strong></a></p>

    <p>我没有读《乔布斯传》，而是选了这本《成为乔布斯》，是听说这本传记记录的乔布斯要更真实。事实上通过很多途径都已经宏观上对乔布斯有了很大程度上的了解，所以读传记的时候已经没有对某些事件产生触动。反而触动我的是一些小细节上，比如书中提到乔布斯父亲的话：</p>

    <blockquote>
      <p>对于一个橱柜来说，别人看不到的底面与表面的抛光一样重要；对于一辆雪佛兰汽车来说，别人看不到的刹车片和汽车的油漆一样重要。</p>
    </blockquote>

    <p><a href="https://book.douban.com/subject/6558202/"><strong>容忍与自由</strong></a></p>

    <p>我求学时期读了很多民国作家的书，唯独胡适先生的书读得不多。今年读了这本文集，意犹未尽，还想读他的《中国的哲学》，但看来要等下一年了。</p>

    <p><a href="https://book.douban.com/subject/26759508/"><strong>Elon Musk</strong></a></p>

    <p>硅谷「钢铁侠」Elon Musk 的传记。十分羡慕财富自由又有想法的人。</p>

    <p><a href="https://book.douban.com/subject/25985021/"><strong>A brief history of humankind</strong></a></p>

    <p>推荐这本有趣的《人类简史》，看人类是如何从原始人进化过来的。</p>

    <h2 id="-8">游戏篇</h2>

    <p>今年买了 PS4, 人生第一台游戏机。玩了几款大作，《最后的生还者》、《神秘海域》、《GTA5》、《看门狗》。印象较深的是《最后的生还者》，没有 PS4 的也建议视频通关。</p>

    <p>下半年换了 Macbook Pro 也入了 Steam 的坑，Steam 的游戏和 PS4 比简直就是白菜价。沉迷了一段时间 Don't Starve. 通关了 Firewatch.</p>

    <h2 id="-9">自我总结</h2>

    <p>这一年的成长比较横向，不仅仅在技术，还学习了音乐，健身等等。遗憾是改不掉一直以来喜欢「急」的缺点，急于完成事情，不多加考虑。甚至容易使自己在快要完成一件事情的时候，容易由于太急，最后烂尾，比如</p>
  </Blog>
)