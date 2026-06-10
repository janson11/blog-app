<script setup>
import { usePosts } from '@/composables/usePost';
import { useRoute } from 'vue-router';


const route = useRoute()
const id = Number(route.params.id)

const { idLoading, error, getArticleById } = usePosts()
// getArticleById 从已加载的数据中查找，不需要再次 fetch
const article = computed(() => getArticleById(id))
</script>

<template>
    <p v-if="idLoading"> 加载中...</p>
    <div v-else-if="!article">文章不存在</div>
    <article v-else>
        <h1> {{ article.title }}</h1>
        <div v-html="article.content"></div>
    </article>
</template>

<style scoped>
.post-view {
    max-width: 720px;
    margin: 40px auto;
    padding: 0 20px;
}

.category-tag {
    display: inline-block;
    padding: 4px 12px;
    background: #e8f5e9;
    color: #42b883;
    border-radius: 12px;
    font-size: 13px;
    margin-bottom: 12px;
}

h1 {
    font-size: 32px;
    margin-bottom: 12px;
    line-height: 1.4;
}

time {
    display: block;
    color: #999;
    font-size: 14px;
    margin-bottom: 30px;
}

.content {
    line-height: 1.8;
    font-size: 16px;
    color: #333;
}

.content :deep(h2) {
    margin: 24px 0 12px;
    font-size: 22px;
}

.content :deep(p) {
    margin-bottom: 12px;
}

.back-link {
    display: inline-block;
    margin-top: 40px;
    color: #42b883;
    text-decoration: none;
}

.not-found {
    text-align: center;
    padding: 60px 0;
}
</style>