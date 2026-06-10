/**
* 子传父：defineEmits
子组件要通知父组件发生了什么事（比如「我被点击了」），通过 emit 发送事件。

可以把它理解为「回调函数」——子组件触发事件，父组件监听并响应。
*/
<script setup>
const props = defineProps({
    categories: Array,  // 所有分类列表
    activeCategory: String // 当前选中的分类
})

// 声明要发送的事件
const emit = defineEmits(['update-category'])

function selectCategory(cat) {
    // 触发事件，将选中的分类传给父组件
    emit('update-category',cat)
}
</script>

<template>
    <div class="filter-bar">
        <button
        v-for="cat in categories"
        :key="cat"
        :class="{active:activeCategory===cat}"
        @click="selectCategory(cat)">
        {{ cat }}
        </button>
    </div>
</template>

<style scoped>
.filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
}

button {
    padding: 6px 12px;
    color: var(--color-text);
    background: var(--color-background-mute);
    border: 1px solid var(--color-border-hover);
    border-radius: 6px;
    cursor: pointer;
}

button.active,
button:hover {
    color: #fff;
    background: #42b883;
    border-color: #42b883;
}
</style>
