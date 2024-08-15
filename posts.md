---
title: Blog
sidebar: false
---

<script setup>
import { data as posts } from '/data/posts.data'
import { formatDate, getSorted } from '/.vitepress/theme/utils';
const sortedPosts = getSorted( posts );
</script>

<ul v-if="sortedPosts.length">
    <li 
        v-for="post of sortedPosts"
    >
        <a 
            :href="post.url" 
            v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + post.frontmatter.image + ')' }"        
        >
            <div>
                <strong>{{ post.frontmatter.title }}</strong><br/>
                <span>{{ formatDate( post.frontmatter.date ) }}</span>
            </div>
        </a>
    </li>
</ul>

<div v-else>
    <p>There's nothing here yet!</p>
    <small>Check back later for updates.</small>
</div>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

li {
    flex-grow: 1;
}

a {
    text-decoration: none;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border: 1px solid var( --vp-c-text-3 );
    border-radius: 5px;
    min-height: 200px;

    color: white;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    transition: all 0.3s;
}

a:hover {
    color: white;
}

a strong {
    font-size: 20px;
}

a span {
    font-size: var(--vp-code-font-size);
    color: lightgray;
    font-weight: 300;
}

</style>