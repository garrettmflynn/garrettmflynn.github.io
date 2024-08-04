import { defineConfig } from 'vitepress'

const siteCopyright = 'Copyright © 2024-present Garrett Flynn';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Garrett Flynn",
  description: "Building Neural Interfaces since 2019",

  head: [['link', { rel: 'icon', href: '/assets/garrett-flynn.jpg' }]],
  
  themeConfig: {

    // logo: '/assets/garrett-flynn.jpg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Courses', link: '/courses' },
      { text: 'Blog', link: '/posts' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/garrettmflynn' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/garrettmflynn/' }    
    ],

    footer: {
      message: 'Built with 🧠 by Garrett Flynn',
      copyright: siteCopyright
    }
  }
})
