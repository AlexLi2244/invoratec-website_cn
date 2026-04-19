<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-screen overflow-hidden">
    <!-- Background with subtle pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <!-- Geometric pattern overlay -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-1/2 h-full">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.1" />
              </linearGradient>
            </defs>
            <polygon points="30,0 100,0 100,100 0,100" fill="url(#heroGrad)" />
          </svg>
        </div>
      </div>
      <!-- Subtle grid lines -->
      <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10 pt-32 pb-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
        <!-- Left Column - Text Content -->
        <div class="order-2 lg:order-1">
          <!-- Brand Label -->
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="text-primary-400 font-semibold tracking-wider text-sm uppercase">{{ t('nav.logo') }}</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{{ t('hero.title_line1') }}</span>
            <br />
            <span class="text-white">{{ t('hero.title_line2') }}</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
            {{ t('hero.subtitle') }}
          </p>

          <!-- Feature List -->
          <div class="space-y-4 mb-10">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-slate-300">{{ t('hero.features.smart_data') }}</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-slate-300">{{ t('hero.features.automate_tasks') }}</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-slate-300">{{ t('hero.features.ai_assistant') }}</p>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4">
            <router-link to="/demo" class="btn btn-primary text-lg px-8 py-4">
              {{ t('hero.cta_primary') }}
            </router-link>
            <router-link to="/product" class="btn bg-white/10 border border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4">
              {{ t('hero.cta_secondary') }}
            </router-link>
          </div>
        </div>

        <!-- Right Column - Video Player -->
        <div class="order-1 lg:order-2">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border border-slate-700">
            <!-- Video Container - Bilibili embed for China -->
            <div class="relative aspect-video bg-slate-900">
              <iframe
                class="w-full h-full"
                src="//player.bilibili.com/player.html?bvid=BV1dLB8BMEfv&high_quality=1&danmaku=0"
                title="InvoratecAI Demo"
                frameborder="0"
                scrolling="no"
                allowfullscreen
              ></iframe>
            </div>

            <!-- Video Info Bar -->
            <div class="bg-slate-800 px-4 py-3 border-t border-slate-700">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-white text-sm font-medium">{{ t('hero.video.title') }}</p>
                    <p class="text-slate-400 text-xs">{{ t('hero.video.subtitle') }}</p>
                  </div>
                </div>
                <div class="text-slate-400 text-xs">4:48</div>
              </div>
            </div>
          </div>

          <!-- Floating Stats Cards -->
          <div class="hidden lg:flex gap-4 mt-6 justify-center">
            <div class="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl px-5 py-3">
              <div class="text-2xl font-bold text-white">70%+</div>
              <div class="text-slate-400 text-xs">{{ t('hero.stats.time') }}</div>
            </div>
            <div class="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl px-5 py-3">
              <div class="text-2xl font-bold text-white">1000+</div>
              <div class="text-slate-400 text-xs">{{ t('hero.stats.projects') }}</div>
            </div>
            <div class="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl px-5 py-3">
              <div class="text-2xl font-bold text-white">50%</div>
              <div class="text-slate-400 text-xs">{{ t('hero.stats.errors') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div class="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* iOS video fixes */
.video-player {
  /* Prevent iOS from showing blank video */
  background: #1e293b;
  /* Ensure proper sizing */
  object-fit: contain;
  /* Prevent user selection issues on iOS */
  -webkit-user-select: none;
  user-select: none;
}

/* Ensure video controls are accessible on mobile */
@media (max-width: 768px) {
  .video-player {
    /* On mobile, make sure video fits properly */
    object-fit: contain;
  }
}
</style>