import { ref, computed, onMounted } from 'vue'

export function usePosts() {
    const articles = ref([]) //所有文章信息
    const isLoading = ref(true) // 加载状态
    const error = ref(null) // 错误信息
    const activeCategory = ref('全部') //当前选中的分类
    const keyword = ref('')  // 搜索关键词

    // 提前所有分类(去重)
    const categories = computed(() => {
        const cats = articles.value.map(a => a.category)
        return ['全部', ...new Set(cats)]
    })


    // computed 会自动追踪 keyword 和 activeCategory 的变化
    // 任何一项变了，过滤结果都会自动重新计算
    const filteredArticles = computed(() => {
        let result = articles.value

        // 第一步：按分类过滤
        if (activeCategory.value !== '全部') {
            result = result.filter(a => a.category === activeCategory.value)
        }

        // 第二步：按关键词过滤（搜索标题和摘要）
        if (keyword.value.trim()) {
            const kw = keyword.value.trim().toLowerCase()
            result = result.filter(a => a.title.toLowerCase().includes(kw) ||
                a.summary.toLowerCase().includes(kw))
        }
        return result
    })

    // 根据ID查找单篇文章
    function getArticleById(id) {
        return articles.value.find(a => a.id === id)
    }

    // 切换分类
    function setCategory(cat) {
        activeCategory.value = cat
    }

    // 异步加载文章数据
    async function fetchPosts() {
        isLoading.value = true
        error.value = null
        try {
            const response = await fetch('/posts.json')
            // 检查响应是否成功（404 或 500 时抛出错误）
            if (!response.ok) {
                throw new Error(`加载失败：HTTP ${response.status}`)
            }
            const data = await response.json()
            articles.value = data
        } catch (err) {
            error.value = err.message
            console.error('文章数据加载失败:', err)
        } finally {
            isLoading.value = false
        }
    }


    // 组件挂载时自动加载
    onMounted(() => {
        fetchPosts()
    })

    //返回给组件使用的数据和方法
    return {
        articles,
        isLoading,
        error,
        activeCategory,
        keyword,
        categories,
        filteredArticles,
        getArticleById,
        setCategory,
        fetchPosts
    }
}