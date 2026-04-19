<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const billingCycle = ref<'monthly' | 'annual'>('annual')

const plans = [
  {
    key: 'essentials',
    tier: 1,
    popular: false,
    monthlyPrice: 249,
    annualPrice: 199,
    annualTotal: 2388,
    isCustom: false
  },
  {
    key: 'professional',
    tier: 2,
    popular: true,
    monthlyPrice: 599,
    annualPrice: 499,
    annualTotal: 5988,
    isCustom: false
  },
  {
    key: 'enterprise',
    tier: 3,
    popular: false,
    monthlyPrice: 0,
    annualPrice: 0,
    annualTotal: 0,
    isCustom: true
  },
]

const getPrice = (plan: typeof plans[0]) => {
  if (plan.isCustom) return null
  return billingCycle.value === 'annual' ? plan.annualPrice : plan.monthlyPrice
}

const competitors = [
  { name: 'Autodesk BIM Collaborate Pro', annual: '$1,284', monthly: '$107', focus: 'Cloud BIM, Revit co-authoring' },
  { name: 'BIM Track / Newforma Konekt', annual: '$588 – $1,188', monthly: '$49 – $99', focus: 'Issue tracking' },
  { name: 'Revizto', annual: '~$600 – $800*', monthly: '~$50 – $67', focus: 'BIM collaboration, clash detection' },
  { name: 'Plannerly', annual: '$468 – $1,188', monthly: '$39 – $99', focus: 'BIM execution plans' },
  { name: 'Bluebeam Complete', annual: '$440', monthly: '$37', focus: 'PDF markup, document review' },
  { name: 'Bluebeam Core', annual: '$330', monthly: '$28', focus: 'Basic AEC collaboration' },
  { name: 'Procore', annual: '$10,000 – $60,000+', monthly: 'Unlimited users', focus: 'Full construction management' },
]

const featureComparison = [
  { feature: 'Full Task Management', revizto: 'partial', newforma: true, bluebeam: false, invoratec: true },
  { feature: 'Native Revit Add-in', revizto: false, newforma: false, bluebeam: false, invoratec: true, exclusive: true },
  { feature: 'ACC Integration', revizto: false, newforma: 'partial', bluebeam: false, invoratec: true },
  { feature: 'Built-in AI Features', revizto: false, newforma: false, bluebeam: false, invoratec: true },
  { feature: 'Web + Desktop Apps', revizto: true, newforma: 'partial', bluebeam: true, invoratec: true },
  { feature: 'Time Tracking Hub', revizto: false, newforma: false, bluebeam: false, invoratec: true, exclusive: true },
  { feature: 'Dashboard Widgets (15+)', revizto: false, newforma: 'partial', bluebeam: false, invoratec: true },
  { feature: '100+ AI Tools', revizto: false, newforma: false, bluebeam: false, invoratec: true, exclusive: true },
  { feature: 'Role-Based Access Control', revizto: 'partial', newforma: true, bluebeam: 'partial', invoratec: true },
  { feature: '45+ Property Types', revizto: false, newforma: false, bluebeam: false, invoratec: true, exclusive: true },
]

const teamCosts = [
  { title: 'BIM Collaborate Pro + ClickUp Business', price: '$14,280', note: '$12,840 + $1,440' },
  { title: 'Bluebeam Complete + Procore', price: '$14,400+', note: '$4,400 + $10,000+' },
  { title: 'Revizto + Notion Business', price: '$8,400', note: '$6,000 + $2,400' },
]

const volumeDiscounts = [
  { users: '10–24', discount: '10%', price: '¥449' },
  { users: '25–49', discount: '15%', price: '¥424' },
  { users: '50+', discount: '20%', price: '¥399', extra: true },
]
</script>

<template>
  <div class="pt-20 bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="container-custom text-center">
        <div class="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 px-4 py-2 rounded-full text-primary-400 text-sm mb-8">
          <span class="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
          {{ t('pricing.badge') }}
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ t('pricing.hero.title') }}<br>
          <span class="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">{{ t('pricing.hero.titleHighlight') }}</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">{{ t('pricing.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Seamless Integration Callout -->
    <section class="py-12">
      <div class="container-custom">
        <div class="bg-gradient-to-r from-primary-500/10 to-blue-500/10 border border-primary-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-blue-500"></div>
          <span class="inline-block bg-gradient-to-r from-primary-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
            {{ t('pricing.callout.badge') }}
          </span>
          <h3 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent mb-4">
            {{ t('pricing.callout.title') }}
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">{{ t('pricing.callout.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">{{ t('pricing.plans.label') }}</div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('pricing.plans.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-8">{{ t('pricing.plans.subtitle') }}</p>

          <!-- Billing Toggle -->
          <div class="inline-flex items-center bg-gray-100 rounded-full p-1.5">
            <button
              @click="billingCycle = 'monthly'"
              class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              :class="billingCycle === 'monthly' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-500 hover:text-gray-700'"
            >
              {{ t('pricing.monthly') }}
            </button>
            <button
              @click="billingCycle = 'annual'"
              class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2"
              :class="billingCycle === 'annual' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-500 hover:text-gray-700'"
            >
              {{ t('pricing.annual') }}
              <span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{{ t('pricing.save') }}</span>
            </button>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="plan in plans"
            :key="plan.key"
            class="relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-1"
            :class="{
              'ring-2 ring-primary-500 shadow-2xl': plan.popular,
              'bg-gradient-to-b from-primary-50 to-white': plan.popular
            }"
          >
            <!-- Popular badge -->
            <div
              v-if="plan.popular"
              class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-blue-500 text-white text-sm font-bold px-5 py-1.5 rounded-full uppercase tracking-wide"
            >
              {{ t('pricing.popular') }}
            </div>

            <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{{ t('pricing.tier') }} {{ plan.tier }}</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ t(`pricing.plans.${plan.key}.name`) }}</h3>
            <p class="text-sm text-gray-500 mb-4">{{ t(`pricing.plans.${plan.key}.tagline`) }}</p>

            <div class="mb-2" v-if="!plan.isCustom">
              <span class="text-gray-400 text-2xl">{{ t('pricing.currency') }}</span>
              <span class="text-5xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">{{ getPrice(plan) }}</span>
              <span class="text-gray-500">/{{ t('pricing.perUserMonth') }}</span>
            </div>
            <div class="mb-2" v-else>
              <span class="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">{{ t('pricing.custom') }}</span>
            </div>
            <p class="text-gray-500 text-sm mb-8">
              <template v-if="!plan.isCustom">
                {{ billingCycle === 'annual' ? t('pricing.billedAnnually', { amount: plan.annualTotal }) : t('pricing.billedMonthly') }}
              </template>
              <template v-else>
                {{ t('pricing.tailored') }}
              </template>
            </p>

            <ul class="space-y-4 mb-8">
              <li
                v-for="n in (plan.key === 'enterprise' ? 11 : (plan.key === 'professional' ? 9 : 7))"
                :key="n"
                class="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0"
                :class="{ 'text-primary-600 font-medium': plan.key === 'professional' && n === 2 }"
              >
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-600">
                  {{ t(`pricing.plans.${plan.key}.features.${n - 1}`) }}
                  <span v-if="plan.key === 'professional' && n === 2" class="ml-2 bg-primary-100 text-primary-700 text-xs font-bold px-2 py-0.5 rounded uppercase">{{ t('pricing.exclusive') }}</span>
                </span>
              </li>
            </ul>

            <router-link
              to="/demo"
              class="btn w-full py-4 text-lg font-semibold"
              :class="plan.popular ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white hover:shadow-lg' : 'btn-outline'"
            >
              {{ plan.key === 'enterprise' ? t('pricing.contactSales') : t('pricing.startTrial') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Comparison -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="text-xs font-bold text-primary-400 uppercase tracking-wider mb-4">{{ t('pricing.comparison.label') }}</div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('pricing.comparison.title') }}</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">{{ t('pricing.comparison.subtitle') }}</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-700">
                <th class="text-left py-4 px-6 text-gray-400 font-medium uppercase text-sm tracking-wider">{{ t('pricing.comparison.software') }}</th>
                <th class="text-left py-4 px-6 text-gray-400 font-medium uppercase text-sm tracking-wider">{{ t('pricing.comparison.annualPrice') }}</th>
                <th class="text-left py-4 px-6 text-gray-400 font-medium uppercase text-sm tracking-wider">{{ t('pricing.comparison.monthlyEquiv') }}</th>
                <th class="text-left py-4 px-6 text-gray-400 font-medium uppercase text-sm tracking-wider">{{ t('pricing.comparison.focus') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-primary-500/10 border-b border-primary-500/30">
                <td class="py-4 px-6 font-semibold text-primary-400">InvoratecAI Professional</td>
                <td class="py-4 px-6 font-semibold">¥5,988 – ¥7,188</td>
                <td class="py-4 px-6 font-semibold">¥499 – ¥599</td>
                <td class="py-4 px-6"><span class="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm">{{ t('pricing.comparison.unifiedPlatform') }}</span></td>
              </tr>
              <tr v-for="comp in competitors" :key="comp.name" class="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                <td class="py-4 px-6 text-gray-300">{{ comp.name }}</td>
                <td class="py-4 px-6 text-gray-400">{{ comp.annual }}</td>
                <td class="py-4 px-6 text-gray-400">{{ comp.monthly }}</td>
                <td class="py-4 px-6 text-gray-500">{{ comp.focus }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-gray-500 text-sm mt-4">{{ t('pricing.comparison.note') }}</p>
      </div>
    </section>

    <!-- Feature Comparison Grid -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">{{ t('pricing.features.label') }}</div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('pricing.features.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ t('pricing.features.subtitle') }}</p>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-[800px] w-full border-collapse">
            <!-- Header -->
            <thead>
              <tr class="bg-gray-100">
                <th class="p-5 font-semibold text-gray-600 text-left border border-gray-200 rounded-tl-2xl" style="width: 33%;">{{ t('pricing.features.feature') }}</th>
                <th class="p-5 font-semibold text-gray-600 text-center text-sm border border-gray-200" style="width: 16.75%;">Revizto</th>
                <th class="p-5 font-semibold text-gray-600 text-center text-sm border border-gray-200" style="width: 16.75%;">Newforma<br><span class="text-xs text-gray-400">(BIM Track)</span></th>
                <th class="p-5 font-semibold text-gray-600 text-center text-sm border border-gray-200" style="width: 16.75%;">Bluebeam</th>
                <th class="p-5 font-semibold text-primary-700 text-center text-sm border border-gray-200 bg-gradient-to-b from-primary-100 to-primary-50 rounded-tr-2xl" style="width: 16.75%;">InvoratecAI</th>
              </tr>
            </thead>
            <!-- Rows -->
            <tbody>
              <tr v-for="(row, idx) in featureComparison" :key="idx">
                <td class="bg-white p-4 text-gray-700 border border-gray-200">
                  <div class="flex flex-col gap-1">
                    <span v-if="row.exclusive" class="self-start bg-gradient-to-r from-primary-500 to-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">{{ t('pricing.onlyUs') }}</span>
                    <span class="whitespace-nowrap">{{ t(`pricing.features.items.${idx}`) }}</span>
                  </div>
                </td>
                <td class="bg-white p-4 text-center border border-gray-200">
                  <span v-if="row.revizto === true" class="text-green-500 text-xl">✓</span>
                  <span v-else-if="row.revizto === false" class="text-gray-300 text-xl">✕</span>
                  <span v-else class="text-amber-500 text-sm">{{ row.revizto }}</span>
                </td>
                <td class="bg-white p-4 text-center border border-gray-200">
                  <span v-if="row.newforma === true" class="text-green-500 text-xl">✓</span>
                  <span v-else-if="row.newforma === false" class="text-gray-300 text-xl">✕</span>
                  <span v-else class="text-amber-500 text-sm">{{ row.newforma }}</span>
                </td>
                <td class="bg-white p-4 text-center border border-gray-200">
                  <span v-if="row.bluebeam === true" class="text-green-500 text-xl">✓</span>
                  <span v-else-if="row.bluebeam === false" class="text-gray-300 text-xl">✕</span>
                  <span v-else class="text-amber-500 text-sm">{{ row.bluebeam }}</span>
                </td>
                <td class="bg-primary-50 p-4 text-center border border-gray-200">
                  <span v-if="row.invoratec === true" class="text-primary-500 text-xl font-bold">✓</span>
                  <span v-else class="text-gray-300 text-xl">✕</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Team Cost Analysis -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">{{ t('pricing.teamCost.label') }}</div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('pricing.teamCost.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ t('pricing.teamCost.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="cost in teamCosts" :key="cost.title" class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <p class="text-gray-500 text-sm mb-4 min-h-[40px]">{{ cost.title }}</p>
            <p class="text-3xl font-bold text-gray-900 mb-2">{{ cost.price }}</p>
            <p class="text-gray-400 text-sm">{{ cost.note }}</p>
          </div>
          <!-- InvoratecAI Highlight -->
          <div class="bg-gradient-to-b from-primary-500 to-blue-600 rounded-2xl p-8 text-center shadow-lg text-white">
            <p class="text-primary-100 text-sm mb-4 min-h-[40px]">InvoratecAI Professional</p>
            <p class="text-3xl font-bold mb-2">¥59,880</p>
            <p class="text-primary-200 text-sm">{{ t('pricing.teamCost.unified') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Section -->
    <section class="py-16 bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">{{ t('pricing.roi.label') }}</div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{{ t('pricing.roi.title') }}</h2>
            <p class="text-gray-600 text-lg mb-8">{{ t('pricing.roi.description') }}</p>

            <div class="flex gap-12">
              <div class="text-center">
                <p class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent">8x</p>
                <p class="text-gray-500 text-sm uppercase tracking-wider mt-2">{{ t('pricing.roi.roiLabel') }}</p>
              </div>
              <div class="text-center">
                <p class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent">¥5,940</p>
                <p class="text-gray-500 text-sm uppercase tracking-wider mt-2">{{ t('pricing.roi.savingsLabel') }}</p>
              </div>
              <div class="text-center">
                <p class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent">11hrs</p>
                <p class="text-gray-500 text-sm uppercase tracking-wider mt-2">{{ t('pricing.roi.timeLabel') }}</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8">
            <div class="space-y-4">
              <div class="flex justify-between py-4 border-b border-gray-200">
                <span class="text-gray-600">{{ t('pricing.roi.calc.timeSaved') }}</span>
                <span class="font-semibold">30 {{ t('pricing.roi.calc.minDay') }}</span>
              </div>
              <div class="flex justify-between py-4 border-b border-gray-200">
                <span class="text-gray-600">{{ t('pricing.roi.calc.monthlyHours') }}</span>
                <span class="font-semibold">11 {{ t('pricing.roi.calc.hours') }}</span>
              </div>
              <div class="flex justify-between py-4 border-b border-gray-200">
                <span class="text-gray-600">{{ t('pricing.roi.calc.hourlyRate') }}</span>
                <span class="font-semibold">¥540/{{ t('pricing.roi.calc.hour') }}</span>
              </div>
              <div class="flex justify-between py-4 border-b border-gray-200">
                <span class="text-gray-600">{{ t('pricing.roi.calc.valueSaved') }}</span>
                <span class="font-semibold">¥5,940/{{ t('pricing.roi.calc.month') }}</span>
              </div>
              <div class="flex justify-between py-4 border-b border-gray-200">
                <span class="text-gray-600">{{ t('pricing.roi.calc.invoratecCost') }}</span>
                <span class="font-semibold">¥599/{{ t('pricing.roi.calc.month') }}</span>
              </div>
              <div class="flex justify-between py-4">
                <span class="text-primary-600 font-semibold text-lg">{{ t('pricing.roi.calc.netRoi') }}</span>
                <span class="text-primary-600 font-bold text-lg">8x {{ t('pricing.roi.calc.return') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Volume Discounts -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">{{ t('pricing.volume.label') }}</div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('pricing.volume.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ t('pricing.volume.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div v-for="vol in volumeDiscounts" :key="vol.users" class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:border-primary-300 border-2 border-transparent transition-all">
            <p class="text-4xl font-bold text-gray-900 mb-2">{{ vol.users }}</p>
            <p class="text-gray-500 mb-6">{{ t('pricing.volume.users') }}</p>
            <p class="text-3xl font-bold bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent mb-2">{{ vol.discount }}</p>
            <p class="text-gray-600">{{ vol.price }}/{{ t('pricing.volume.perUserMonth') }}</p>
            <p v-if="vol.extra" class="text-primary-600 text-sm mt-4 font-medium">+ {{ t('pricing.volume.dedicatedManager') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
      <div class="container-custom text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('pricing.cta.title') }}</h2>
        <p class="text-gray-300 max-w-xl mx-auto mb-10 text-lg">{{ t('pricing.cta.subtitle') }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/demo" class="btn bg-gradient-to-r from-primary-500 to-blue-500 text-white px-10 py-4 text-lg font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all">
            {{ t('pricing.cta.trial') }}
          </router-link>
          <router-link to="/contact" class="btn border-2 border-gray-600 text-white px-10 py-4 text-lg font-semibold hover:border-white transition-all">
            {{ t('pricing.cta.sales') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
