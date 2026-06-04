<script setup>
</script>

<template>
  <div id="app" class="navbar">
    <!-- 顶部导航栏 -->
    <header>
      <h1>My Blog</h1>
      <nav>
        <a href="/">首页</a>
        <a href="#">关于</a>
      </nav>
    </header>


    <!-- 主页内容 -->
    <main class="container">
      <p>博客内容将在这里展示</p>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <p>2026 My Blog. Powered by Vue3.</p>
    </footer>
  </div>

</template>
<style>
/* 全局重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f5f5f5;
  color: #333;
}

/* 导航栏 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar h1 {
  font-size: 24px;
  color: #42b883;
}

.navbar a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}

/* 主内容区 */
.container {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
}

/* 页脚 */
.footer {
  text-align: center;
  padding: 20px;
  color: #999;
  border-top: 1px solid #eee;
}
</style>