<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Placeholder blog posts
const posts = [
  { slug: 'ai-bim-revolution', date: '2024-01-15', category: 'Technology' },
  { slug: 'construction-efficiency', date: '2024-01-10', category: 'Industry' },
  { slug: 'digital-twin-guide', date: '2024-01-05', category: 'Tutorial' },
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section bg-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ t('blog.hero.title') }}</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ t('blog.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="section bg-gray-50 pt-0">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in posts"
            :key="post.slug"
            class="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow"
          >
            <div class="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center">
              <span class="text-5xl">📝</span>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full">{{ post.category }}</span>
                <span class="text-sm text-gray-500">{{ post.date }}</span>
              </div>
              <h2 class="text-h3 text-gray-900 mb-2">{{ t(`blog.posts.${post.slug}.title`) }}</h2>
              <p class="text-gray-600 mb-4">{{ t(`blog.posts.${post.slug}.excerpt`) }}</p>
              <router-link
                :to="`/blog/${post.slug}`"
                class="text-primary-600 font-medium hover:underline inline-flex items-center"
              >
                {{ t('blog.readMore') }}
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>