<script setup>
// 导航栏目前只需要展示，后续会加入搜索和暗黑模式切换
import { useDarkMode } from '@/composables/useDarkMode';
import { useFavoriteStore } from '@/store/useFavoriteStore';

const { isDark, toggleDark } = useDarkMode()
const favoriteStore = useFavoriteStore()

</script>

<template>
    <header class="navbar">
        <RouterLink to="/" class="logo">JANSON Blog</RouterLink>
        <!-- 顶部导航栏 -->

        <nav>
            <RouterLink to="/">首页</RouterLink>
            <button class="theme-btn" @click="toggleDark">
                {{ isDark ? '☀ 亮色' : '☾ 暗黑' }}
            </button>
             <!-- 收藏数量徽标 -->
            <span class="fav-badge" v-if="favoriteStore.favoriteCount >0">
                收藏 {{ favoriteStore.favoriteCount }}
            </span>
        </nav>

    </header>
</template>

<style scoped>
.fav-badge {
  background: #e74c3c;
  color: #fff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 13px;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 40px;
    background: var(--color-background-soft);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo {
    font-size: 22px;
    font-weight: bold;
    color: #42b883;
    text-decoration: none;
}

nav a {
    margin-left: 24px;
    text-decoration: none;
    color: var(--color-text);
    font-size: 15px;
}

nav a:hover {
    color: #42b883;
}

.theme-btn {
    margin-left: 16px;
    padding: 4px 10px;
    color: var(--color-text);
    background: var(--color-background-mute);
    border: 1px solid var(--color-border-hover);
    border-radius: 6px;
    cursor: pointer;
}
</style>
