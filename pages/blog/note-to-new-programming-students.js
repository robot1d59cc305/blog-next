import Blog from '../../components/Blog'

export default () => (
  <Blog>
    <h1>写给即将学习编程的大学新生</h1>
    <p>写下这篇文章，是由于我想和即将进入大学有意学习编程的同学谈谈关于编程的事，因为你可能需要一些建议，来步入这个新的阶段。</p>

    <p>编程是非常有趣的一件事情，学会编程就像成为魔术师，你可以创造任何你想创造的东西。在我出生到现在的这 20 年里，除了文学，没有比编程更吸引我的活动。就像 Zed Shaw 所说的，『编程作为一项智力活动，是唯一一种能让你创建交互式艺术的艺术形式。你可以创建项目让别人使用，而且你可以间接地和使用者沟通。没有其他的艺术形式能做到如此程度的交互性。电影领着观众走向一个方向，绘画是不会动的。而代码却是双向互动的。』</p>

    <h3 id="">一些困惑</h3>

    <p>但是当你开始接触（我所在的）大学的计算机相关课程，你会发现，所谓的编程学习，无非是老师教一章内容，要求你用学到的语法去解一些数学题。于是很多人选择放弃，认为编程乏味无趣，用很长的课时学习，却只能写出简单的四则运算，或者解数学题。</p>

    <p>然而这并非编程的全部，因为这恰恰能生动地表明编程语言只不过是一种工具，你可以用它来解数学题，也能做其它更有趣、更实用的程序。</p>

    <p>在（我所在的）大学，计算机相关课程教 C/C++。有一次，一位大三的朋友问我说，『我学 C 学了一段时间，为什么我还是感觉很没用？』我是这样回答他的：</p>

    <p>你学 C 学了一段时间感觉没有用处并非你个人的问题，我无法跟你解释为什么，不过我可以告诉你的是，Linus Torvalds 用 C 写了 Linux 和 Git; Antirez 用 C 写了数据库 Redis. 你可能连 Git 是什么都不知道，如何用 C 写出这种水平的程序呢？</p>

    <p>所以，当你学习 C/C++ 基础后进入困惑期时，不要因为用它写不出实用的程序而止步不前，而应该开始接触其它的编程语言。当你所学和所做的东西越来越多的时候，你慢慢就会发现，编程语言只不过是一种工具，重要的在于你想做什么，用什么语言合适去做（华软的校内游戏直播网站 SISE Game 就是例子，网站的后端用 Ruby on Rails 写，但实时聊天是用 Node.js (JavaScript) ，因为相对于 Ruby, Node.js 更加适合处理 WebSocket）。 <strong>你之所以感觉 C/C++ 没用，是因为你暂时还没有足够的眼界和能力去使用他去进行创造</strong>。</p>

    <p>应该去学什么？我的建议是一门严谨的强类型语言（如 Java）和一门愉快的脚本语言（如 JavaScript, Ruby, Python）。当然了，如果你想学一些能立竿见影的技能，你也可以写写前端（HTML, CSS）。</p>

    <h3 id="sohow">So, How?</h3>

    <p>对于应该如何去学习，我不打算在这里论述，我只想列出一些有用的建议：</p>

    <ol>
      <li><p>无论你要学什么，你读的第一篇文章应该是《提问的智慧》</p></li>

      <li><p>用 Google 搜索技术相关的信息</p></li>

      <li><p>购买付费可靠的科学上网服务，不要吝啬一顿饭的钱。</p></li>

      <li><p>不要害怕英文，英文非常重要。</p></li>
    </ol>

    <p>几乎所有最新的技术在刚出来的时候只有英文文档，优质的 Tutorial 大多数也是英文的。</p>

    <ol>
      <li>参与一些质量高的社区，关注一些值得关注的人。</li>
    </ol>

    <p>这一点很重要。学校所教的内容是陈旧、过时的（虽然这也许不是学校的错），你必须和社区保持同步，不断接触和学习新的技术。AngularJS 发布至今都有 6 年了，但在我们学校仍然在教 ExtJS，很多学生甚至毕业出来找工作的时候，连 AngularJS 都没听说过。</p>

    <p>国内的 <a href="http://v2ex.com">V2EX</a> 和国外的 <a href="https://news.ycombinator.com/">Hackernews</a> 都是不错的社区。</p>

    <h3 id="-1">一些现状</h3>

    <p>你并不能指望大学的课程或者大学老师能给你带来什么，一切都应该靠你自己。无论在多优秀或者多差劲的学校，学校本身能影响你的是辅助性的，而不是决定性的。在我的学校，几乎都在打游戏和应付考试，据我所知，即使是重点大学，这样的学生也大有人在，我渐渐明白，『你今后人生的艰难，恰恰不是因为你没能考上一个满意的学校，而是在这所学校里，在一个能让自己自由充分成长的黄金四年里，把自己给荒废了』（采铜的回答）。</p>

    <h3 id="-2">为未来铺路</h3>

    <p>如果你以后有意从事编程的相关工作，你应该要知道，在找工作时和其它竞争者拉开差距的，并非你从哪里毕业，在学校当什么干部，而是你有足够的能力，并且能清楚地让别人看到你的能力。</p>

    <p>让别人看到你能力的方法是开源社区和博客，所以我建议你在学习的过程中，多为开源做贡献，甚至可以维护一个自己的开源项目。另外还可以把自己的所学记录和总结到独立博客中。一个好的 Github Account 和好的独立博客是一份最好的简历。也许你也只有在大学这自由的四年才能有时间做这两件事情。</p>

    <h3 id="-3">最后</h3>

    <p>我在广州大学华软软件学院读书已经有一年了，这一年里我遇到过许多对现在对未来感到迷茫的朋友，他们对教育抱有希望，对知识怀有渴望。我曾经试图做一些事情去改变现状，但是效果都不大，该混日子的还是继续混日子，到毕业后才开始抱怨就业难。我呸，互联网行业都缺人缺到什么地步了你跟我说就业难？</p>

    <p>不过，只要我还没被学校开除，我还是会尽我所能地为迷茫的朋友做一些事情。至于做些什么，我还没想好，我不知道应该怎么做，如果你有好的建议，欢迎联系我。</p>

    <p>如果你看完这篇文章，还有问题可以联系我的 Email: randypriv@gmail.com，只要你读过《提问的智慧》，问的问题经过自己思考，我都会尽快地详细地回复。</p>

    <p>『你会编程。他们不会。这真他妈的酷。』</p>
  </Blog>
)