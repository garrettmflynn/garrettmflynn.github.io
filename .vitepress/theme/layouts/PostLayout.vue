<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import PostHeader from '../components/PostHeader.vue';
const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-before>
            <PostHeader />
        </template>

        <template #layout-bottom>
        </template>
    </Layout>
</template>

<style scoped>
.Layout {
    min-height: 100dvh;
}
</style>