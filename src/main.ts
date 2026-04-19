import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './styles/main.css'

// Import translations
import en from './i18n/en.json'
import zh from './i18n/zh.json'

// Import views
import HomeView from './views/HomeView.vue'
import FeaturesView from './views/FeaturesView.vue'
import PricingView from './views/PricingView.vue'
import AboutView from './views/AboutView.vue'
import BlogPostView from './views/BlogPostView.vue'
import CaseStudyView from './views/CaseStudyView.vue'
import ActivityView from './views/ActivityView.vue'
import ActivityRegistrationView from './views/ActivityRegistrationView.vue'
import NewMediaView from './views/NewMediaView.vue'
import DocsView from './views/DocsView.vue'
import LegalView from './views/LegalView.vue'
import DemoView from './views/DemoView.vue'
import DownloadView from './views/DownloadView.vue'
import ContactView from './views/ContactView.vue'
import ServiceBIMConsultingView from './views/ServiceBIMConsultingView.vue'
import ServiceAIEmpowermentView from './views/ServiceAIEmpowermentView.vue'
import ServiceTechnicalSupportView from './views/ServiceTechnicalSupportView.vue'

// Terms and Policy views
import TermsOfServiceView from './views/terms/TermsOfServiceView.vue'
import PrivacyPolicyView from './views/terms/PrivacyPolicyView.vue'
import SecurityPolicyView from './views/terms/SecurityPolicyView.vue'
import CookiePolicyView from './views/terms/CookiePolicyView.vue'
import DeveloperTermsView from './views/terms/DeveloperTermsView.vue'
import DPAView from './views/terms/DPAView.vue'
import SubprocessorsView from './views/terms/SubprocessorsView.vue'
import AITermsView from './views/terms/AITermsView.vue'
import IntegrationsView from './views/terms/IntegrationsView.vue'

// Router setup
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/product', name: 'product', component: FeaturesView },
  { path: '/pricing', name: 'pricing', component: PricingView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/new-media', name: 'new-media', component: NewMediaView },
  // Keep old routes for backwards compatibility
  { path: '/blog', redirect: '/new-media' },
  { path: '/blog/:slug', name: 'blog-post', component: BlogPostView },
  { path: '/cases', redirect: '/new-media' },
  { path: '/cases/:slug', name: 'case-detail', component: CaseStudyView },
  { path: '/activities/:slug', name: 'activity-detail', component: ActivityView },
  { path: '/activities/:slug/register', name: 'activity-register', component: ActivityRegistrationView },
  { path: '/docs', name: 'docs', component: DocsView },
  { path: '/legal', name: 'legal', component: LegalView },
  { path: '/demo', name: 'demo', component: DemoView },
  { path: '/download', name: 'download', component: DownloadView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/features', redirect: '/product' },
  { path: '/services/bim-consulting', name: 'service-bim', component: ServiceBIMConsultingView },
  { path: '/services/ai-empowerment', name: 'service-ai', component: ServiceAIEmpowermentView },
  { path: '/services/technical-support', name: 'service-support', component: ServiceTechnicalSupportView },
  // Terms and Policy routes
  { path: '/terms', name: 'terms', component: TermsOfServiceView },
  { path: '/terms/privacy', name: 'privacy', component: PrivacyPolicyView },
  { path: '/terms/security', name: 'security', component: SecurityPolicyView },
  { path: '/terms/cookies', name: 'cookies', component: CookiePolicyView },
  { path: '/terms/developer', name: 'developer-terms', component: DeveloperTermsView },
  { path: '/terms/dpa', name: 'dpa', component: DPAView },
  { path: '/terms/subprocessors', name: 'subprocessors', component: SubprocessorsView },
  { path: '/terms/ai', name: 'ai-terms', component: AITermsView },
  { path: '/terms/integrations', name: 'integrations', component: IntegrationsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// i18n setup
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh',
  fallbackLocale: 'zh',
  messages: { en, zh },
})

// Create app
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')