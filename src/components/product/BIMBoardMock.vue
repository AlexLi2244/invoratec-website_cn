<script setup lang="ts">
// BIM Board Screenshot - uses web-kanban as placeholder (similar Kanban UI)
</script>

<template>
  <div class="screenshot-container">
    <img
      src="/images/screenshots/web-kanban.png"
      alt="BIM Board"
      class="screenshot"
    />
  </div>
</template>

<style scoped>
.screenshot-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
