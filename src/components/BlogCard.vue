<script setup>
// 声明该组件接收的 props
// defineProps 是编译宏，无需导入即可使用
const props = defineProps({
    title: String, // 文章标题，字符串类型
    summary: String, // 文章摘要
    date: String,//发布日期
    category: String // 分类标签
})
// 也可以写成数组形式（不校验类型）：
// const props = defineProps(['title', 'summary', 'date', 'category'])
</script>
<template>
    <div class="card">
        <span  class="tag">{{category}}</span>
        <h3>{{ title }}</h3>
        <p>{{ summary }}</p>
        <span class="date">{{ date }}</span>
    </div>
</template>


<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.tag {
  display: inline-block;
  padding: 2px 10px;
  background: #e8f5e9;
  color: #42b883;
  border-radius: 12px;
  font-size: 12px;
}
.card h3 { margin: 10px 0 8px; font-size: 18px; }
.card p { color: #666; font-size: 14px; line-height: 1.6; }
.date { font-size: 12px; color: #999; }
</style>