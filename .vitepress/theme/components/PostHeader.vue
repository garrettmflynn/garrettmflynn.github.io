<template>
    <header 
        class="vp-doc" 
        :data-image="frontmatter.image"
        v-bind:style="[frontmatter.image ? { 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + frontmatter.image + ')' } : {} ]"
    >
        <h1 v-if="page.title">
            {{ page.title }}
        </h1>
        <h3 v-if="frontmatter.date">
            {{ formatDate( frontmatter.date ) }}
        </h3>
    </header>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { formatDate } from '../utils';
const { page, frontmatter } = useData();
</script>

<style scoped>
header {
    margin-bottom: 2rem;
}

header[data-image] {
    color: white;
    padding: 5rem 2rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

header h3 {
    font-weight: 300;
    margin-top: 0.25rem;
    color: lightgray;
}

</style>