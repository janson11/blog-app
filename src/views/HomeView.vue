<script setup>
import BlogCard from '@/components/BlogCard.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';
import { usePosts } from '@/composables/usePost';


// 一行代码获取所有文章相关的数据和方法
const {
    isLoading,
    error,
    activeCategory,
    keyword,
    categories,
    filteredArticles,
    setCategory
} = usePosts()
</script>


<template>
    <div class="home">
        <!-- 搜索框 -->
        <div class="search-bar">
            <input v-model="keyword" type="text" placeholder="搜索文章标题或摘要..." class="search-input" />
            <span v-if="keyword" class="clear-btn" @click="keyword = ''">x</span>
        </div>

        <!-- 分类筛选器 -->
        <CategoryFilter :categories="categories" :active-category="activeCategory"
            @update-category="setCategory" />

        <!-- 加载 / 空 / 正常 -->
        <p v-if="isLoading">加载中...</p>
        <p v-else-if="error">{{ error }}</p>
        <p v-else-if="filteredArticles.length === 0">没有找到匹配的文章</p>
        <div v-else class="article-grid">
            <BlogCard v-for="article in filteredArticles" :key="article.id" :id="article.id" :title="article.title"
                :summary="article.summary" :date="article.date" :category="article.category" />
        </div>
    </div>
</template>

<style scoped>
.home {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

.search-bar {
    position: relative;
    margin-bottom: 20px;
}

.search-input {
    width: 100%;
    padding: 12px 40px 12px 16px;
    color: var(--color-text);
    background: var(--color-background-soft);
    border: 2px solid var(--color-border);
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
}

.search-input:focus {
    border-color: #42b883;
}

.clear-btn {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #999;
    font-size: 18px;
}

.article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 20px;
}
</style>
