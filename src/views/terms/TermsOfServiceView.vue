<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TermsLayout from './TermsLayout.vue'

const { t } = useI18n()
</script>

<template>
  <TermsLayout>
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t('terms.tos.title') }}</h1>
    <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t('terms.security.lastUpdated') }}: December 24, 2024</p>

    <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
      <!-- Introduction -->
      <section class="mb-6 sm:mb-10">
        <p class="lead text-base sm:text-lg">{{ t('terms.tos.content.intro') }}</p>
        <p class="mt-4">{{ t('terms.tos.content.introNote') }}</p>
      </section>

      <!-- 1. Account Registration -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section1.title') }}</h2>
        <p>{{ t('terms.tos.content.section1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.tos.content.section1.note') }}</p>
      </section>

      <!-- 2. Services Description -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section2.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section2.subsection1.title') }}</h3>
        <p>{{ t('terms.tos.content.section2.subsection1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section2.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section2.subsection2.title') }}</h3>
        <p>{{ t('terms.tos.content.section2.subsection2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section2.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- 3. User Content -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section3.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section3.subsection1.title') }}</h3>
        <p>{{ t('terms.tos.content.section3.subsection1.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section3.subsection2.title') }}</h3>
        <p>{{ t('terms.tos.content.section3.subsection2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section3.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section3.subsection3.title') }}</h3>
        <p>{{ t('terms.tos.content.section3.subsection3.content') }}</p>
      </section>

      <!-- 4. Acceptable Use -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section4.title') }}</h2>
        <p>{{ t('terms.tos.content.section4.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section4.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- 5. Pricing and Payment -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section5.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section5.subsection1.title') }}</h3>
        <p>{{ t('terms.tos.content.section5.subsection1.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section5.subsection2.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section5.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section5.subsection3.title') }}</h3>
        <p>{{ t('terms.tos.content.section5.subsection3.content') }}</p>
      </section>

      <!-- 6. Intellectual Property -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section6.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section6.subsection1.title') }}</h3>
        <p>{{ t('terms.tos.content.section6.subsection1.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.tos.content.section6.subsection2.title') }}</h3>
        <p>{{ t('terms.tos.content.section6.subsection2.content') }}</p>
      </section>

      <!-- 7. Third-Party Services -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section7.title') }}</h2>
        <p>{{ t('terms.tos.content.section7.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section7.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.tos.content.section7.note') }}</p>
      </section>

      <!-- 8. Disclaimers -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section8.title') }}</h2>
        <p class="font-medium">{{ t('terms.tos.content.section8.disclaimer') }}</p>
        <p class="mt-4">{{ t('terms.tos.content.section8.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section8.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.tos.content.section8.note') }}</p>
      </section>

      <!-- 9. Limitation of Liability -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section9.title') }}</h2>
        <p>{{ t('terms.tos.content.section9.content') }}</p>
        <p class="mt-4">{{ t('terms.tos.content.section9.note') }}</p>
      </section>

      <!-- 10. Indemnification -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section10.title') }}</h2>
        <p>{{ t('terms.tos.content.section10.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section10.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- 11. Termination -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section11.title') }}</h2>
        <p>{{ t('terms.tos.content.section11.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.tos.content.section11.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.tos.content.section11.note') }}</p>
      </section>

      <!-- 12. Governing Law -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section12.title') }}</h2>
        <p>{{ t('terms.tos.content.section12.content') }}</p>
      </section>

      <!-- 13. Changes -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section13.title') }}</h2>
        <p>{{ t('terms.tos.content.section13.content') }}</p>
      </section>

      <!-- 14. Contact -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.tos.content.section14.title') }}</h2>
        <p>{{ t('terms.tos.content.section14.intro') }}</p>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <p><strong>{{ t('terms.tos.content.section14.company') }}</strong></p>
          <p><strong>{{ t('terms.tos.content.section14.legal') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.tos.content.section14.general') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
        </div>
      </section>
    </div>
  </TermsLayout>
</template>