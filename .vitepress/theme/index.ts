// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import PostLayout from './layouts/PostLayout.vue';
import './style.css';

export default {
    extends: DefaultTheme,
    Layout: PostLayout,
    // Layout: () => {
    //   return h(DefaultTheme.Layout, null, {
    //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
    //   })
    // },
    enhanceApp({ app, router, siteData }) {
        // app.component( 'start', StartLayout );
    }
} satisfies Theme