// 全局的一些配置
export default {
  rootPath: '/product', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  // domain: 'dubbo.apache.org', // 站点部署域名，无需协议和path等
  // defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'Home',
        link: '/en-us/index.html',
      },
      {
        key: 'tech',
        text: 'Technical Column',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'news',
        text: 'News',
        link: '/en-us/news/index.html',
      },
    ],
    interLink: [
      [
        {
          text: 'Zhihu',
          link: 'https://www.zhihu.com/people/a-li-xi-tong-ruan-jian-ji-zhu-90/activities'
        },
        {
          text: 'Official E-mail',
          link: 'mailto:alibabainfra@service.alibaba.com'
        },
        {
          text: 'Hiring',
          link: 'https://job.alibaba.com/zhaopin/index.htm'
        },
      ],
      [
        {
          text: 'Dubbo',
          link: 'http://dubbo.apache.org/zh-cn/'
        },
        {
          text: 'Nacos',
          link: 'https://nacos.io/zh-cn/'
        },
        {
          text: 'Pouch',
          link: 'http://pouchcontainer.io'
        },
        {
          text: 'AlibabaCloud Developer Center',
          link: 'https://developer.aliyun.com'
        },
      ]
    ],
    copyright: 'Copyright © 2018 alibabainfra.org| An Alibaba Ware  Project',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'tech',
        text: '技术专栏',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'news',
        text: '新闻事件',
        link: '/zh-cn/news/index.html',
      },
    ],
    interLink: [
      [
        {
          text: '知乎',
          link: 'https://www.zhihu.com/people/a-li-xi-tong-ruan-jian-ji-zhu-90/activities'
        },
        {
          text: '官方邮箱',
          link: 'mailto:alibabainfra@service.alibaba.com'
        },
        {
          text: '招贤纳士',
          link: 'https://job.alibaba.com/zhaopin/index.htm'
        },
      ], [
        {
          text: 'Dubbo',
          link: 'http://dubbo.apache.org/zh-cn/'
        },
        {
          text: 'Nacos',
          link: 'https://nacos.io/zh-cn/'
        },
        {
          text: 'Pouch',
          link: 'http://pouchcontainer.io'
        },
        {
          text: '阿里云开发者中心',
          link: 'https://developer.aliyun.com'
        },
      ],
    ],
    copyright: 'Copyright © 2018 alibabainfra.org| An Alibaba Ware  Project',
  },
};
