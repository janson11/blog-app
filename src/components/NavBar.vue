<script setup>
// 导航栏目前只需要展示，后续会加入搜索和暗黑模式切换
import { useDarkMode } from '@/composables/useDarkMode';

const { isDark, toggleDark } = useDarkMode()

</script>

<template>
    <header iclass="navbar">
        <a href="/" class="logo">JANSON Blog</a>
        <!-- 顶部导航栏 -->

        <nav>
            <a href="/">首页</a>
            <button class="theme-btn" @click="toggleDark">
                {{ isDark ? '&#x2600;亮色':'☾ 暗黑' }}
            </button>
        </nav>

    </header>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 40px;
    background: #fff;
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
    color: #333;
    font-size: 15px;
}

nav a:hover {
    color: #42b883;
}
</style>