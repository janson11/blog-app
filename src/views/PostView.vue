<script setup>
import { computed } from 'vue';
import { usePosts } from '@/composables/usePost';
import { useRoute } from 'vue-router';
import { useFavoriteStore } from '@/store/useFavoriteStore';
const favoriteStore = useFavoriteStore();

const route = useRoute()
const id = Number(route.params.id)

const { isLoading, error, getArticleById } = usePosts()
// getArticleById 从已加载的数据中查找，不需要再次 fetch
const article = computed(() => getArticleById(id))
</script>

<template>
    <p v-if="isLoading">加载中...</p>
    <p v-else-if="error">{{ error }}</p>
    <div v-else-if="!article">文章不存在</div>
    <article v-else class="post-view">
        <h1> {{ article.title }}</h1>
        <!-- 详情页的收藏按钮：状态与首页完全同步 -->
         <button class="fav-btn" @click="favoriteStore.toggleFavorite(article.id)"> {{ favoriteStore.isFavorite(article.id) ? '♥ 已收藏' : '♡ 收藏' }}</button>
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
