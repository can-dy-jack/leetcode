/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '电子笔记',
  tagline: 'leetcode题目解析与博客转载',
  favicon: 'img/book.svg',
  url: 'https://can-dy-jack.github.io',
  baseUrl: '/leetcode/',

  organizationName: 'can-dy-jack',
  projectName: 'leetcode',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  deploymentBranch: 'pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/can-dy-jack/leetcode/tree/master/docs/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // editUrl: '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['typescript']
      },
      navbar: {
        title: '电子图书馆',
        logo: {
          alt: '电子图书馆',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'LeetCode题集',
          },
          {to: 'blog', label: '博客', position: 'left'},
          {to: 'ryfblog', label: '搬运：阮一峰的博客', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '电子图书馆组成',
            items: [
              {
                label: 'LeetCode题集',
                to: 'docs',
              },
              {
                label: '搬运：阮一峰的博客',
                to: 'ryfblog',
              },
            ],
          },
          {
            title: '最新文章',
            items: [
              {
                label: '黄仁勋的 Nvidia 故事',
                to: 'ryfblog/257',
              },
              {
                label: '卡马克的猫',
                to: 'ryfblog/258',
              },
              {
                label: '不同的平均值数目',
                to: 'docs/daily/2023-06-04',
              },
            ],
          },
          {
            title: '相关技术',
            items: [
              {
                label: 'React',
                href: 'https://react.dev',
              },
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Giscus',
                href: 'https://giscus.app/zh-CN',
              },
            ],
          },
          {
            title: '友情链接',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'MDN',
                href: 'https://developer.mozilla.org',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/',
              },
              {
                label: 'CC BY-NC-SA 4.0',
                href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
              },
              {
                label: 'LeetCode',
                href: 'https://leetcode.cn',
              },
            ],
          },
        ],
        logo: {
          alt: 'CC Logo',
          src: '/img/cc.logo.white.svg',
          href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} kart jim, Inc. Built with Docusaurus.`,
      },
      giscus: {
        repo: 'can-dy-jack/leetcode',
        repoId: 'R_kgDOJrNR7g',
        category: 'Show and tell',
        categoryId: 'DIC_kwDOJrNR7s4CXFrw',

        theme: 'light',
        darkTheme: 'dark'
      },
      clientModules: [require.resolve('./src/clientModules/routeModules.js')]
    }),
  
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ryfblog',
        path: 'ryfblog',
        routeBasePath: 'ryfblog',
        sidebarPath: require.resolve('./sidebarsryfblog.js'),
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
  ],
};

module.exports = config;
