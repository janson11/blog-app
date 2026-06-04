// 父组件使用 BlogCard 时，通过冒号绑定属性传入数据：
// props 是单向数据流：只能父 → 子，子组件不能修改 props 的值。如果子组件需要修改，应该通过 emit 通知父组件去改
// 父组件通过 @事件名="处理函数" 来监听子组件事件：
// 完整的数据流向
// 父组件通过 props 向下 传数据，子组件通过 emit 向上 发事件。

// 数据始终由父组件「拥有」和修改，子组件只负责展示和通知。


<script setup>
import { ref } from 'vue'
import BlogCard from '@/components/BlogCard.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';

// 响应子组件发来的 update-category 事件
function handleCategoryChange(cat) {
    activeCategory.value = cat;
}


// 文章数据
const articles = ref([
    { id: 1, title: 'Vue3 入门完全指南', summary: '从零开始学习 Vue3 组合式 API', date: '2024-05-10', category: 'Vue' },
    { id: 2, title: 'JS 异步编程详解', summary: '搞懂 Promise 和 async/await', date: '2024-05-08', category: 'JavaScript' },
    { id: 3, title: 'CSS Grid 布局实战', summary: '用 Grid 实现响应式布局', date: '2024-05-05', category: 'CSS' },
    { id: 4, title: 'Vue3 响应式原理', summary: '深入理解 ref 和 reactive', date: '2024-05-03', category: 'Vue' },
    { id: 5, title: 'Flexbox 完全指南', summary: '一文学会弹性布局', date: '2024-05-01', category: 'CSS' },
])

// 提取所有分类(去重)
const categories = computed(() => {
    const cats = articles.value.map(a => a.category)
    return ['全部', ...new Set(cats)]
})

//当前选中的分类
const activeCategory = ref('全部')

// 根据分类过滤文章
const filteredArticles = computed(() => {
    if (activeCategoryl.value === '全部') return articles.value
    return articles.value.filter(a => a.category === activeCategory.value)
})

// 处理子组件发来的分类切换事件
function handleCategoryChange(cat) {
    activeCategory.value = cat
}

</script>


<template>
    <div class="home">
        <h2 class="section-title">最新文章</h2>
        <!-- 分类筛选组件 -->
        <CategoryFilter :categories="categories" :active-category="activeCategory"
            @update-category="handleCategoryChange" />
        <!-- 空状态 -->
        <p v-if="filteredArticles.length === 0" class="empty-tip">
            改分类下暂无文章
        </p>
        <!-- 文章卡片列表 -->
        <div v-else class="article-grid">
            <BlogCard v-for="article in filteredArticles" :key="article.id" :title="article.title"
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

.section-title {
    font-size: 24px;
    margin-bottom: 20px;
}

.article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 20px;
}

.empty-tip {
    text-align: center;
    color: #999;
    padding: 60px 0;
}
</style>