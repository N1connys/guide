const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'N1connys的个人博客',
  tagline: '心血来潮，用docusurus搭建的博客，用于记录生活和学习记录',
  url: 'https://n1connys.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'N1connys', // Usually your GitHub org/user name.
  projectName: 'lifeblog', // Usually your repo name.
  organizationName: 'u8d5e', // Usually your GitHub org/user name.
  projectName: 'u8d5e.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
————————————————
版权声明：本文为CSDN博主「饭碗、碗碗香」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_44240478/article/details/124883373

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/N1connys/hexoblog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'N1connys site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '搭建教程',
          },
          {to: '/blog', label: '博客', position: 'right'},
          {
            href: 'https://space.bilibili.com/179309941?spm_id_from=333.1007.0.0',
            label: 'bilibili',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '搭建教程',
            items: [
              {
                label: '搭建教程',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'bilibili',
                href: 'https://space.bilibili.com/179309941?spm_id_from=333.1007.0.0',
              },
              {
                label: 'Github',
                href: 'https://github.com/N1connys',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
