<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getBlogPost, getBlogPostContent, getAllBlogPosts } from '../data/blogPosts'

const route = useRoute()
const { t, locale } = useI18n()

const slug = computed(() => route.params.slug as string)
const post = computed(() => getBlogPost(slug.value))
const postContent = computed(() => getBlogPostContent(slug.value))

const content = computed(() => {
  if (!postContent.value) return null
  // Support ja, zh, and en with fallback to en
  if (locale.value === 'ja' && postContent.value.ja) return postContent.value.ja
  if (locale.value === 'zh') return postContent.value.zh
  return postContent.value.en
})

// Get related posts (other posts in the same category)
const relatedPosts = computed(() => {
  if (!post.value) return []
  return getAllBlogPosts()
    .filter(p => p.category === post.value?.category && p.slug !== slug.value)
    .slice(0, 2)
})
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section with gradient background -->
    <section v-if="post && content" class="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container-custom py-16 relative z-10">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <router-link to="/new-media" class="text-primary-400 hover:text-primary-300 transition-colors">{{ t('newMedia.hero.title') }}</router-link>
          <span class="text-gray-500 mx-2">/</span>
          <span class="text-gray-400">{{ t('newMedia.categories.knowledge') }}</span>
        </nav>

        <div class="max-w-4xl">
          <!-- Category & Meta -->
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <span class="px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
              {{ post.category }}
            </span>
            <span class="text-gray-400">{{ post.date }}</span>
            <span class="text-gray-500">|</span>
            <span class="text-gray-400">{{ post.readTime }} {{ t('common.read') }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {{ content.title }}
          </h1>

          <!-- Excerpt -->
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            {{ content.excerpt }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
              {{ post.author.avatar }}
            </div>
            <div>
              <div class="font-medium text-white">{{ post.author.name }}</div>
              <div class="text-sm text-gray-400">{{ post.author.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Image -->
    <section v-if="post" class="bg-white">
      <div class="container-custom -mt-8 relative z-20">
        <div class="max-w-4xl mx-auto">
          <div class="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl overflow-hidden shadow-xl">
            <img
              :src="post.image"
              :alt="content?.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article v-if="content" class="section bg-white pt-12">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <!-- Tags -->
          <div v-if="post" class="flex flex-wrap gap-2 mb-12 pb-8 border-b border-gray-200">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Content Sections -->
          <div class="prose prose-lg max-w-none">
            <div
              v-for="(section, index) in content.sections"
              :key="index"
              class="mb-10"
            >
              <h2 v-if="section.heading" class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {{ section.heading }}
              </h2>

              <p class="text-gray-600 leading-relaxed text-lg mb-4">
                {{ section.content }}
              </p>

              <!-- List items -->
              <ul v-if="section.list" class="space-y-3 my-6">
                <li
                  v-for="(item, itemIndex) in section.list"
                  :key="itemIndex"
                  class="flex items-start gap-3"
                >
                  <span class="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    {{ itemIndex + 1 }}
                  </span>
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>

              <!-- Section image if provided -->
              <div v-if="section.image" class="my-8 rounded-xl overflow-hidden">
                <img :src="section.image" :alt="section.imageCaption || section.heading" class="w-full" />
                <p v-if="section.imageCaption" class="text-sm text-gray-500 mt-2 text-center italic">
                  {{ section.imageCaption }}
                </p>
              </div>
            </div>

            <!-- Conclusion -->
            <div v-if="content.conclusion" class="mt-12 p-8 bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl border border-primary-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                {{ t('blogDetail.conclusion') }}
              </h3>
              <p class="text-gray-700 leading-relaxed">
                {{ content.conclusion }}
              </p>
            </div>
          </div>

          <!-- Share & Actions -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p class="text-gray-600 mb-2">{{ t('blogDetail.shareArticle') }}</p>
                <div class="flex gap-3">
                  <button class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                  </button>
                  <button class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                  </button>
                  <button class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </button>
                </div>
              </div>

              <router-link to="/new-media" class="btn btn-outline">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                {{ t('common.backToNewMedia') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Related Articles -->
    <section v-if="relatedPosts.length > 0" class="section bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">
            {{ t('blogDetail.relatedArticles') }}
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <router-link
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.slug"
              :to="`/blog/${relatedPost.slug}`"
              class="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all"
            >
              <div class="aspect-video overflow-hidden">
                <img
                  :src="relatedPost.image"
                  :alt="relatedPost.slug"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div class="p-6">
                <span class="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                  {{ relatedPost.category }}
                </span>
                <h3 class="text-lg font-bold text-gray-900 mt-3 group-hover:text-primary-600 transition-colors">
                  {{ t(`blog.posts.${relatedPost.slug}.title`) }}
                </h3>
                <p class="text-gray-600 text-sm mt-2 line-clamp-2">
                  {{ t(`blog.posts.${relatedPost.slug}.excerpt`) }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('newMedia.cta.title') }}</h2>
        <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{{ t('newMedia.cta.subtitle') }}</p>
        <router-link to="/demo" class="btn bg-white text-primary-600 hover:bg-gray-100">
          {{ t('newMedia.cta.button') }}
        </router-link>
      </div>
    </section>

    <!-- 404 State -->
    <section v-if="!post || !content" class="section bg-white min-h-screen flex items-center">
      <div class="container-custom text-center">
        <div class="text-6xl mb-4">📄</div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          {{ t('blogDetail.notFound.title') }}
        </h1>
        <p class="text-gray-600 mb-8">
          {{ t('blogDetail.notFound.description') }}
        </p>
        <router-link to="/new-media" class="btn btn-primary">
          {{ t('common.backToNewMedia') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
