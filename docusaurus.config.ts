import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Codex of Realms',
  tagline: 'A pocket D&D-style bestiary & lore wiki',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://theMastermemes.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/testing1/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'theMastermemes', // Usually your GitHub org/user name.
  projectName: 'testing1', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Codex of Realms',
      logo: {
        alt: 'Codex Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'bestiarySidebar',
          position: 'left',
          label: 'Bestiary',
        },
        {
          type: 'docSidebar',
          sidebarId: 'spellsSidebar',
          position: 'left',
          label: 'Spells',
        },
        {
          type: 'docSidebar',
          sidebarId: 'regionsSidebar',
          position: 'left',
          label: 'Regions',
        },
        {
          type: 'docSidebar',
          sidebarId: 'deitiesSidebar',
          position: 'left',
          label: 'Deities',
        },
        {
          href: 'https://github.com/theMastermemes/testing1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Bestiary',
              to: '/docs/bestiary',
            },
            {
              label: 'Spells',
              to: '/docs/spells',
            },
          ],
        },
        {
          title: 'Realms',
          items: [
            {
              label: 'Regions',
              to: '/docs/regions',
            },
            {
              label: 'Deities',
              to: '/docs/deities',
            },
            {
              label: 'Classes',
              to: '/docs/classes',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Search',
              to: '/search',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/theMastermemes/testing1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Codex of Realms. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
