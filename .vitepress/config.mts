import { defineConfig } from 'vitepress'
import { withI18n } from 'vitepress-i18n';

// https://vitepress.dev/reference/site-config
export default defineConfig(withI18n({
  title: "NeraBBS-Docs",
  description: "NeraBBS 项目文档",

  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/what-is-nerabbs' },
      { text: '参考', link: '/reference' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '简介',
          collapsed: false,
          items: [
            { text: '什么是 NeraBBS？', link: '/guide/what-is-nerabbs' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        },
        {
          text: '疑难解答',
          collapsed: true,
          items: [
            {text: '浏览器提示 “您的连接不是私密连接”', link: '/guide/troubleshooting/browser-your-connection-is-not-private'}
          ]
        },
        {
          items: [
            { text: '配置和 API 参考', link: '/reference' },
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: []
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shaokeyibb/NeraBBS' }
    ],

    footer: {
      message: 'NeraBBS 项目基于 GPL-3.0 协议发布 | NeraBBS-Docs 项目保留所有权利。',
      copyright: '版权所有 © 2023-至今 HikariLan'
    }
  }
}, {
  locales: ['zhHans']
}))
