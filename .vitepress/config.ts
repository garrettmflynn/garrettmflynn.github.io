import { defineConfig, createContentLoader } from 'vitepress';
import path from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed } from 'feed'

import { formatPageContentForRSS } from './theme/utils';

const siteTitle = 'Garrett Flynn';
const siteDescription = 'Building Neural Interfaces since 2019';
const blogDir = 'posts';

const hostName = 'https://garrettflynn.com';
const author = [
  {
    name: 'Garrett Flynn',
    email: 'garrettmflynn@gmail.com',
    link: `${hostName}/`
  }
]

const siteCopyright = 'Copyright © 2024-present Garrett Flynn';

const formattedPagesForRSS: Record<string, string> = {};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: siteTitle,
  description: siteDescription,

  head: [['link', { rel: 'icon', href: '/garrett-flynn.jpg' }]],

  themeConfig: {

    // logo: '/garrett-flynn.jpg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about' },
      { text: 'Courses', link: '/courses' },
      // { text: 'Blog', link: '/posts' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/garrettmflynn' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/garrettmflynn/' }
    ],

    footer: {
      message: 'Built with 🧠 by Garrett Flynn',
      copyright: siteCopyright
    }
  },

  transformHtml(_code, _id, { content, pageData }) {
    const { filePath } = pageData;
    const dirname = path.dirname(filePath);
    const basename = path.basename(filePath, '.md');

    if (dirname === blogDir) {
      const html = formatPageContentForRSS(content, hostName);
      if (html) {
        formattedPagesForRSS[`/${dirname}/${basename}`] = html;
      }
    }
  },


  buildEnd: async (config) => {

    const feed = new Feed({
      title: siteTitle,
      description: siteDescription,
      id: hostName,
      link: hostName,
      copyright: siteCopyright,
      language: 'en',
    });

    // Load data from all the blog markdown files, sorted by date
    const posts = await createContentLoader(`/${blogDir}/*.md`, {
      render: true,
      includeSrc: true,
      transform(rawData) {
        return rawData.sort((a, b) => {
          return +new Date(b.frontmatter.date).getTime() - +new Date(a.frontmatter.date).getTime()
        });
      }
    }).load();

    for (const { url, excerpt, frontmatter, html } of posts) {

      if (frontmatter.status === 'draft') continue;

      const improvedHtml = formattedPagesForRSS[url];

      feed.addItem({
        title: frontmatter.title,
        id: `${hostName}${url}`,
        link: `${hostName}${url}`,
        description: excerpt,
        content: improvedHtml || html,
        author,
        date: frontmatter.date
      });
    }

    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2());
  }

})
