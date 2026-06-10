import { defineStore } from "pinia";
import { ref, computed } from 'vue'

// defineStore('仓库名', () => { ... })
// 第二个参数用函数写法，与组合式 API 风格一致
export const useFavoriteStore = defineStore('favorite', () => {
    // ====== state：用 ref 定义状态 ======
    // 用一个数组存储收藏的文章 ID
    const favoriteIds = ref([])
    // 从localStorage 恢复收藏列表
    const saved = localStorage.getItem('blog-favorites')
    if (saved) {
        favoriteIds.value = JSON.parse(saved)
    }
    // ====== getters：用 computed 定义计算属性 ======
    const favoriteCount = computed(() => favoriteIds.value.length)

    // 判断某篇文章是否已收藏
    function isFavorite(articleId) {
        return favoriteIds.value.includes(articleId)
    }
    // ====== actions：用普通函数定义修改方法 ======
    // 切换收藏状态（收藏 → 取消，未收藏 → 收藏）
    function toggleFavorite(articleId) {
        const index = favoriteIds.value.indexOf(articleId)
        if (index == -1) {
            favoriteIds.value.push(articleId) // 添加收藏
        } else {
            favoriteIds.value.splice(index, 1)// 取消收藏
        }
        // 同步到localStorage(持久化保存)
        localStorage.setItem('blog-favorites', JSON.stringify(favoriteIds.value))
    }
    return { favoriteIds, favoriteCount, isFavorite, toggleFavorite }
})