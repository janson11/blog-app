<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="app-shell">
    <NavBar />
    <main class="container">
      <RouterView />
    </main>
    <footer class="footer">2026 My Blog. Powered by Vue3.</footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  max-width: 960px;
  margin: 32px auto;
  padding: 0 20px;
  flex: 1;
}

.footer {
  text-align: center;
  padding: 20px;
  color: var(--color-text);
  border-top: 1px solid var(--color-border);
}
</style>
