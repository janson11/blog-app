<script setup>
import { useFavoriteStore } from '@/store/useFavoriteStore';
// 声明该组件接收的 props
// defineProps 是编译宏，无需导入即可使用
const props = defineProps({
    id: Number,// 新增文章ID,用于跳转。
    title: String, // 文章标题，字符串类型
    summary: String, // 文章摘要
    date: String,//发布日期
    category: String // 分类标签
})

const favoriteStore = useFavoriteStore()

// 点击收藏时调用
function handleFavorite(e) {
    e.preventDefault() //阻止RouterLink的跳转
    favoriteStore.toggleFavorite(props.id)
}

// 也可以写成数组形式（不校验类型）：
// const props = defineProps(['title', 'summary', 'date', 'category'])
</script>

<template>
    <!-- 整个卡片被 RouterLink 包裹，点击任意位置都能跳转 -->
    <RouterLink :to="{ name: 'post', params: { id } }" class="card-link">
        <div class="card">
            <span class="tag">{{ category }}</span>
            <h3>{{ title }}</h3>
            <p>{{ summary }}</p>
            <div class="card-footer">
                <span class="date"> {{ date }}</span>
                  <!-- 收藏按钮：已收藏显示实心，未收藏显示空心 -->
                   <button class = "fav-btn" @click="handleFavorite">
                    {{ favoriteStore.isFavorite(id) ? '♥' : '♡' }}
                   </button>
            </div>
        </div>
    </RouterLink>
</template>


<style scoped>
.card-link {
  display: block;
  height: 100%;
  color: inherit;
  padding: 0;
}

.card {
  height: 100%;
  padding: 20px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  border-color: var(--color-border-hover);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.tag,
h3,
.date {
  color: #42b883;
}

p {
  color: var(--color-text);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.fav-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #e74c3c;
  padding: 4px 8px;
}
.fav-btn:hover {
  transform: scale(1.2);
}
</style>
