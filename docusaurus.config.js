// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Dev Union',
  tagline: 'Unleashing Potential Through Collaborative Learning',
  favicon: 'imgs/favicon_io/favicon.ico',

  // TODO - Set the production url of your site here
  url: 'https://open-dev-union.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'open-dev-union', // Usually your GitHub org/user name.
  projectName: 'odu-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],

  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:"/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs:{
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      announcementBar: {
        id: 'support_us',
        content:
            'We are looking for collaborators, <a target="_blank" rel="noopener noreferrer" href="https://discord.com/channels/1127563522163867739/1127567372438483074/1127584693446004777">join our community</a>',
        backgroundColor: '#d0e3e3',
        textColor: '#091E42',
        isCloseable: true,
      },
      // TODO Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: false,
        title:"OpenDevUnion",
        logo: {
          alt: 'opu-img',
          src: 'imgs/logo/on-white-removebg.png',
          srcDark: 'imgs/logo/on-black-removebg.png',
          width: 60
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Getting Started',
          // },
          {
            href: 'https://github.com/open-dev-union/odu-website',
            label: 'Visit our GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
            {
                label: 'Getting Started',
                to: '/',
            },
            {
                label: 'Discord',
                href: 'https://discord.gg/mZhV4d36yK',
            },
              {
                label: 'GitHub',
                href: 'https://github.com/firasrg/open-dev-union',
            },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
