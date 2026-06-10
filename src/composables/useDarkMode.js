import { ref, watchEffect } from 'vue'

export function useDarkMode() {
    // 从localStorage读取用户之前的设置
    const saved = localStorage.getItem('blog-theme')
    const isDark = ref(saved === 'dark')

    // 应用主题到DOM
    function applyTheme(dark) {
        if (dark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('blog-theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('blog-theme', 'light')
        }
    }

    // watchEffect 自动追踪idDark 变化时同步到DOM
    watchEffect(() => {
        applyTheme(isDark.value)
    })

    // 切换暗黑模式
    function toggleDark() {
        isDark.value = !isDark.value
    }

    return { isDark, toggleDark }

}