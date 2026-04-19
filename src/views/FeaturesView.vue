<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

// Get translation function
const { t } = useI18n()

// Import mock UI components
const MockWebTasksUI = defineAsyncComponent(() => import('@/components/features/MockWebTasksUI.vue'))
const MockViewerUI = defineAsyncComponent(() => import('@/components/features/MockViewerUI.vue'))
const MockTimelineUI = defineAsyncComponent(() => import('@/components/features/MockTimelineUI.vue'))
const MockCoordinationUI = defineAsyncComponent(() => import('@/components/features/MockCoordinationUI.vue'))
const MockSheetViewerUI = defineAsyncComponent(() => import('@/components/features/MockSheetViewerUI.vue'))
const MockReportsUI = defineAsyncComponent(() => import('@/components/features/MockReportsUI.vue'))
const MockTimeHubUI = defineAsyncComponent(() => import('@/components/features/MockTimeHubUI.vue'))
const MockACCHubUI = defineAsyncComponent(() => import('@/components/features/MockACCHubUI.vue'))
const MockRevitTasksUI = defineAsyncComponent(() => import('@/components/features/MockRevitTasksUI.vue'))
const MockAIAssistantUI = defineAsyncComponent(() => import('@/components/features/MockAIAssistantUI.vue'))
const MockDashboardUI = defineAsyncComponent(() => import('@/components/features/MockDashboardUI.vue'))
const MockToolsUI = defineAsyncComponent(() => import('@/components/features/MockToolsUI.vue'))
const MockProjectsUI = defineAsyncComponent(() => import('@/components/features/MockProjectsUI.vue'))
const MockACCUI = defineAsyncComponent(() => import('@/components/features/MockACCUI.vue'))

// Type definitions
interface FeatureHighlight {
  label: string
  desc: string
}

interface FeatureProperty {
  name: string
  type: string
  desc: string
}

interface FeatureItem {
  title: string
  subtitle: string
  icon: string
  color: string
  image: string
  mockComponent?: string  // Component name for mock UI
  highlights: FeatureHighlight[]
  properties: FeatureProperty[]
}

// Map of mock components for Web features
const webMockComponents: Record<string, ReturnType<typeof defineAsyncComponent>> = {
  tasks: MockWebTasksUI,
  viewer: MockViewerUI,
  timeline: MockTimelineUI,
  coordination: MockCoordinationUI,
  sheets: MockSheetViewerUI,
  reports: MockReportsUI,
  timehub: MockTimeHubUI,
  acchub: MockACCHubUI,
}

// Map of mock components for BIM features
const bimMockComponents: Record<string, ReturnType<typeof defineAsyncComponent>> = {
  tasks: MockRevitTasksUI,
  assistant: MockAIAssistantUI,
  dashboard: MockDashboardUI,
  tools: MockToolsUI,
  projects: MockProjectsUI,
  acc: MockACCUI,
}

// Get active web mock component
const activeWebMockComponent = computed(() => webMockComponents[activeWebSection.value])
// Get active BIM mock component
const activeBimMockComponent = computed(() => bimMockComponents[activeBimSection.value])

type WebFeatureKey = 'tasks' | 'viewer' | 'timeline' | 'coordination' | 'sheets' | 'reports' | 'timehub' | 'acchub'
type BimFeatureKey = 'tasks' | 'assistant' | 'dashboard' | 'tools' | 'projects' | 'acc'

// Active sections
const activeWebSection = ref<WebFeatureKey>('tasks')
const activeBimSection = ref<BimFeatureKey>('tasks')

// ==================== WEB APP FEATURES ====================
const webFeatures = computed<Record<WebFeatureKey, FeatureItem>>(() => ({
  tasks: {
    title: t('featuresPage.webFeatures.tasks.title'),
    subtitle: t('featuresPage.webFeatures.tasks.subtitle'),
    icon: '📋',
    color: 'from-violet-500 to-purple-600',
    image: '/images/features-detail/web-tasks.png',
    highlights: [
      { label: t('featuresPage.webFeatures.tasks.highlights.customPages.label'), desc: t('featuresPage.webFeatures.tasks.highlights.customPages.desc') },
      { label: t('featuresPage.webFeatures.tasks.highlights.smartFiltering.label'), desc: t('featuresPage.webFeatures.tasks.highlights.smartFiltering.desc') },
      { label: t('featuresPage.webFeatures.tasks.highlights.excelImport.label'), desc: t('featuresPage.webFeatures.tasks.highlights.excelImport.desc') },
      { label: t('featuresPage.webFeatures.tasks.highlights.subTasks.label'), desc: t('featuresPage.webFeatures.tasks.highlights.subTasks.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.tasks.properties.text.name'), type: t('featuresPage.webFeatures.tasks.properties.text.type'), desc: t('featuresPage.webFeatures.tasks.properties.text.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.number.name'), type: t('featuresPage.webFeatures.tasks.properties.number.type'), desc: t('featuresPage.webFeatures.tasks.properties.number.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.date.name'), type: t('featuresPage.webFeatures.tasks.properties.date.type'), desc: t('featuresPage.webFeatures.tasks.properties.date.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.select.name'), type: t('featuresPage.webFeatures.tasks.properties.select.type'), desc: t('featuresPage.webFeatures.tasks.properties.select.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.status.name'), type: t('featuresPage.webFeatures.tasks.properties.status.type'), desc: t('featuresPage.webFeatures.tasks.properties.status.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.priority.name'), type: t('featuresPage.webFeatures.tasks.properties.priority.type'), desc: t('featuresPage.webFeatures.tasks.properties.priority.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.person.name'), type: t('featuresPage.webFeatures.tasks.properties.person.type'), desc: t('featuresPage.webFeatures.tasks.properties.person.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.checkbox.name'), type: t('featuresPage.webFeatures.tasks.properties.checkbox.type'), desc: t('featuresPage.webFeatures.tasks.properties.checkbox.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.url.name'), type: t('featuresPage.webFeatures.tasks.properties.url.type'), desc: t('featuresPage.webFeatures.tasks.properties.url.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.files.name'), type: t('featuresPage.webFeatures.tasks.properties.files.type'), desc: t('featuresPage.webFeatures.tasks.properties.files.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.relation.name'), type: t('featuresPage.webFeatures.tasks.properties.relation.type'), desc: t('featuresPage.webFeatures.tasks.properties.relation.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.rollup.name'), type: t('featuresPage.webFeatures.tasks.properties.rollup.type'), desc: t('featuresPage.webFeatures.tasks.properties.rollup.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.formula.name'), type: t('featuresPage.webFeatures.tasks.properties.formula.type'), desc: t('featuresPage.webFeatures.tasks.properties.formula.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.createdTime.name'), type: t('featuresPage.webFeatures.tasks.properties.createdTime.type'), desc: t('featuresPage.webFeatures.tasks.properties.createdTime.desc') },
      { name: t('featuresPage.webFeatures.tasks.properties.createdBy.name'), type: t('featuresPage.webFeatures.tasks.properties.createdBy.type'), desc: t('featuresPage.webFeatures.tasks.properties.createdBy.desc') },
    ]
  },
  viewer: {
    title: t('featuresPage.webFeatures.viewer.title'),
    subtitle: t('featuresPage.webFeatures.viewer.subtitle'),
    icon: '🏗️',
    color: 'from-cyan-500 to-blue-600',
    image: '/images/features-detail/web-viewer.png',
    highlights: [
      { label: t('featuresPage.webFeatures.viewer.highlights.isolation.label'), desc: t('featuresPage.webFeatures.viewer.highlights.isolation.desc') },
      { label: t('featuresPage.webFeatures.viewer.highlights.properties.label'), desc: t('featuresPage.webFeatures.viewer.highlights.properties.desc') },
      { label: t('featuresPage.webFeatures.viewer.highlights.measurement.label'), desc: t('featuresPage.webFeatures.viewer.highlights.measurement.desc') },
      { label: t('featuresPage.webFeatures.viewer.highlights.section.label'), desc: t('featuresPage.webFeatures.viewer.highlights.section.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.viewer.properties.viewer.name'), type: t('featuresPage.webFeatures.viewer.properties.viewer.type'), desc: t('featuresPage.webFeatures.viewer.properties.viewer.desc') },
      { name: t('featuresPage.webFeatures.viewer.properties.selection.name'), type: t('featuresPage.webFeatures.viewer.properties.selection.type'), desc: t('featuresPage.webFeatures.viewer.properties.selection.desc') },
      { name: t('featuresPage.webFeatures.viewer.properties.linking.name'), type: t('featuresPage.webFeatures.viewer.properties.linking.type'), desc: t('featuresPage.webFeatures.viewer.properties.linking.desc') },
      { name: t('featuresPage.webFeatures.viewer.properties.viewStates.name'), type: t('featuresPage.webFeatures.viewer.properties.viewStates.type'), desc: t('featuresPage.webFeatures.viewer.properties.viewStates.desc') },
    ]
  },
  timeline: {
    title: t('featuresPage.webFeatures.timeline.title'),
    subtitle: t('featuresPage.webFeatures.timeline.subtitle'),
    icon: '📅',
    color: 'from-emerald-500 to-teal-600',
    image: '/images/features-detail/web-timeline.png',
    highlights: [
      { label: t('featuresPage.webFeatures.timeline.highlights.gantt.label'), desc: t('featuresPage.webFeatures.timeline.highlights.gantt.desc') },
      { label: t('featuresPage.webFeatures.timeline.highlights.dragDrop.label'), desc: t('featuresPage.webFeatures.timeline.highlights.dragDrop.desc') },
      { label: t('featuresPage.webFeatures.timeline.highlights.milestones.label'), desc: t('featuresPage.webFeatures.timeline.highlights.milestones.desc') },
      { label: t('featuresPage.webFeatures.timeline.highlights.criticalPath.label'), desc: t('featuresPage.webFeatures.timeline.highlights.criticalPath.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.timeline.properties.startDate.name'), type: t('featuresPage.webFeatures.timeline.properties.startDate.type'), desc: t('featuresPage.webFeatures.timeline.properties.startDate.desc') },
      { name: t('featuresPage.webFeatures.timeline.properties.endDate.name'), type: t('featuresPage.webFeatures.timeline.properties.endDate.type'), desc: t('featuresPage.webFeatures.timeline.properties.endDate.desc') },
      { name: t('featuresPage.webFeatures.timeline.properties.dependencies.name'), type: t('featuresPage.webFeatures.timeline.properties.dependencies.type'), desc: t('featuresPage.webFeatures.timeline.properties.dependencies.desc') },
      { name: t('featuresPage.webFeatures.timeline.properties.progress.name'), type: t('featuresPage.webFeatures.timeline.properties.progress.type'), desc: t('featuresPage.webFeatures.timeline.properties.progress.desc') },
    ]
  },
  coordination: {
    title: t('featuresPage.webFeatures.coordination.title'),
    subtitle: t('featuresPage.webFeatures.coordination.subtitle'),
    icon: '🔍',
    color: 'from-pink-500 to-rose-600',
    image: '/images/features-detail/web-coordination.png',
    highlights: [
      { label: t('featuresPage.webFeatures.coordination.highlights.clashDetection.label'), desc: t('featuresPage.webFeatures.coordination.highlights.clashDetection.desc') },
      { label: t('featuresPage.webFeatures.coordination.highlights.issueTracking.label'), desc: t('featuresPage.webFeatures.coordination.highlights.issueTracking.desc') },
      { label: t('featuresPage.webFeatures.coordination.highlights.comparison.label'), desc: t('featuresPage.webFeatures.coordination.highlights.comparison.desc') },
      { label: t('featuresPage.webFeatures.coordination.highlights.accSync.label'), desc: t('featuresPage.webFeatures.coordination.highlights.accSync.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.coordination.properties.viewer.name'), type: t('featuresPage.webFeatures.coordination.properties.viewer.type'), desc: t('featuresPage.webFeatures.coordination.properties.viewer.desc') },
      { name: t('featuresPage.webFeatures.coordination.properties.sets.name'), type: t('featuresPage.webFeatures.coordination.properties.sets.type'), desc: t('featuresPage.webFeatures.coordination.properties.sets.desc') },
      { name: t('featuresPage.webFeatures.coordination.properties.status.name'), type: t('featuresPage.webFeatures.coordination.properties.status.type'), desc: t('featuresPage.webFeatures.coordination.properties.status.desc') },
      { name: t('featuresPage.webFeatures.coordination.properties.discipline.name'), type: t('featuresPage.webFeatures.coordination.properties.discipline.type'), desc: t('featuresPage.webFeatures.coordination.properties.discipline.desc') },
    ]
  },
  sheets: {
    title: t('featuresPage.webFeatures.sheets.title'),
    subtitle: t('featuresPage.webFeatures.sheets.subtitle'),
    icon: '📐',
    color: 'from-orange-500 to-red-600',
    image: '/images/features-detail/web-sheets.png',
    highlights: [
      { label: t('featuresPage.webFeatures.sheets.highlights.viewer2d.label'), desc: t('featuresPage.webFeatures.sheets.highlights.viewer2d.desc') },
      { label: t('featuresPage.webFeatures.sheets.highlights.markup.label'), desc: t('featuresPage.webFeatures.sheets.highlights.markup.desc') },
      { label: t('featuresPage.webFeatures.sheets.highlights.accSync.label'), desc: t('featuresPage.webFeatures.sheets.highlights.accSync.desc') },
      { label: t('featuresPage.webFeatures.sheets.highlights.versionCompare.label'), desc: t('featuresPage.webFeatures.sheets.highlights.versionCompare.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.sheets.properties.viewer.name'), type: t('featuresPage.webFeatures.sheets.properties.viewer.type'), desc: t('featuresPage.webFeatures.sheets.properties.viewer.desc') },
      { name: t('featuresPage.webFeatures.sheets.properties.markup.name'), type: t('featuresPage.webFeatures.sheets.properties.markup.type'), desc: t('featuresPage.webFeatures.sheets.properties.markup.desc') },
      { name: t('featuresPage.webFeatures.sheets.properties.revision.name'), type: t('featuresPage.webFeatures.sheets.properties.revision.type'), desc: t('featuresPage.webFeatures.sheets.properties.revision.desc') },
      { name: t('featuresPage.webFeatures.sheets.properties.approval.name'), type: t('featuresPage.webFeatures.sheets.properties.approval.type'), desc: t('featuresPage.webFeatures.sheets.properties.approval.desc') },
    ]
  },
  reports: {
    title: t('featuresPage.webFeatures.reports.title'),
    subtitle: t('featuresPage.webFeatures.reports.subtitle'),
    icon: '📊',
    color: 'from-blue-600 to-indigo-700',
    image: '/images/features-detail/web-reports.png',
    highlights: [
      { label: t('featuresPage.webFeatures.reports.highlights.dashboard.label'), desc: t('featuresPage.webFeatures.reports.highlights.dashboard.desc') },
      { label: t('featuresPage.webFeatures.reports.highlights.teamPerformance.label'), desc: t('featuresPage.webFeatures.reports.highlights.teamPerformance.desc') },
      { label: t('featuresPage.webFeatures.reports.highlights.budget.label'), desc: t('featuresPage.webFeatures.reports.highlights.budget.desc') },
      { label: t('featuresPage.webFeatures.reports.highlights.export.label'), desc: t('featuresPage.webFeatures.reports.highlights.export.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.reports.properties.timeTracking.name'), type: t('featuresPage.webFeatures.reports.properties.timeTracking.type'), desc: t('featuresPage.webFeatures.reports.properties.timeTracking.desc') },
      { name: t('featuresPage.webFeatures.reports.properties.budget.name'), type: t('featuresPage.webFeatures.reports.properties.budget.type'), desc: t('featuresPage.webFeatures.reports.properties.budget.desc') },
      { name: t('featuresPage.webFeatures.reports.properties.utilization.name'), type: t('featuresPage.webFeatures.reports.properties.utilization.type'), desc: t('featuresPage.webFeatures.reports.properties.utilization.desc') },
      { name: t('featuresPage.webFeatures.reports.properties.rollup.name'), type: t('featuresPage.webFeatures.reports.properties.rollup.type'), desc: t('featuresPage.webFeatures.reports.properties.rollup.desc') },
    ]
  },
  timehub: {
    title: t('featuresPage.webFeatures.timehub.title'),
    subtitle: t('featuresPage.webFeatures.timehub.subtitle'),
    icon: '⏱️',
    color: 'from-amber-500 to-orange-600',
    image: '/images/features-detail/web-timehub.png',
    highlights: [
      { label: t('featuresPage.webFeatures.timehub.highlights.weeklyGrid.label'), desc: t('featuresPage.webFeatures.timehub.highlights.weeklyGrid.desc') },
      { label: t('featuresPage.webFeatures.timehub.highlights.approvals.label'), desc: t('featuresPage.webFeatures.timehub.highlights.approvals.desc') },
      { label: t('featuresPage.webFeatures.timehub.highlights.billable.label'), desc: t('featuresPage.webFeatures.timehub.highlights.billable.desc') },
      { label: t('featuresPage.webFeatures.timehub.highlights.costCodes.label'), desc: t('featuresPage.webFeatures.timehub.highlights.costCodes.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.timehub.properties.timeEntry.name'), type: t('featuresPage.webFeatures.timehub.properties.timeEntry.type'), desc: t('featuresPage.webFeatures.timehub.properties.timeEntry.desc') },
      { name: t('featuresPage.webFeatures.timehub.properties.approvalStatus.name'), type: t('featuresPage.webFeatures.timehub.properties.approvalStatus.type'), desc: t('featuresPage.webFeatures.timehub.properties.approvalStatus.desc') },
      { name: t('featuresPage.webFeatures.timehub.properties.billableType.name'), type: t('featuresPage.webFeatures.timehub.properties.billableType.type'), desc: t('featuresPage.webFeatures.timehub.properties.billableType.desc') },
      { name: t('featuresPage.webFeatures.timehub.properties.weekTotal.name'), type: t('featuresPage.webFeatures.timehub.properties.weekTotal.type'), desc: t('featuresPage.webFeatures.timehub.properties.weekTotal.desc') },
    ]
  },
  acchub: {
    title: t('featuresPage.webFeatures.acchub.title'),
    subtitle: t('featuresPage.webFeatures.acchub.subtitle'),
    icon: '☁️',
    color: 'from-cyan-500 to-teal-600',
    image: '/images/features-detail/web-acchub.png',
    highlights: [
      { label: t('featuresPage.webFeatures.acchub.highlights.issuesRfis.label'), desc: t('featuresPage.webFeatures.acchub.highlights.issuesRfis.desc') },
      { label: t('featuresPage.webFeatures.acchub.highlights.submittals.label'), desc: t('featuresPage.webFeatures.acchub.highlights.submittals.desc') },
      { label: t('featuresPage.webFeatures.acchub.highlights.sheets.label'), desc: t('featuresPage.webFeatures.acchub.highlights.sheets.desc') },
      { label: t('featuresPage.webFeatures.acchub.highlights.clashes.label'), desc: t('featuresPage.webFeatures.acchub.highlights.clashes.desc') },
    ],
    properties: [
      { name: t('featuresPage.webFeatures.acchub.properties.issues.name'), type: t('featuresPage.webFeatures.acchub.properties.issues.type'), desc: t('featuresPage.webFeatures.acchub.properties.issues.desc') },
      { name: t('featuresPage.webFeatures.acchub.properties.rfis.name'), type: t('featuresPage.webFeatures.acchub.properties.rfis.type'), desc: t('featuresPage.webFeatures.acchub.properties.rfis.desc') },
      { name: t('featuresPage.webFeatures.acchub.properties.submittals.name'), type: t('featuresPage.webFeatures.acchub.properties.submittals.type'), desc: t('featuresPage.webFeatures.acchub.properties.submittals.desc') },
      { name: t('featuresPage.webFeatures.acchub.properties.transmittals.name'), type: t('featuresPage.webFeatures.acchub.properties.transmittals.type'), desc: t('featuresPage.webFeatures.acchub.properties.transmittals.desc') },
    ]
  }
}))

// ==================== REVIT ADDIN FEATURES ====================
const bimFeatures = computed<Record<BimFeatureKey, FeatureItem>>(() => ({
  tasks: {
    title: t('featuresPage.bimFeatures.tasks.title'),
    subtitle: t('featuresPage.bimFeatures.tasks.subtitle'),
    icon: '📋',
    color: 'from-indigo-500 to-purple-600',
    image: '/images/features-detail/revit-tasks.png',
    highlights: [
      { label: t('featuresPage.bimFeatures.tasks.highlights.inRevit.label'), desc: t('featuresPage.bimFeatures.tasks.highlights.inRevit.desc') },
      { label: t('featuresPage.bimFeatures.tasks.highlights.elementTracking.label'), desc: t('featuresPage.bimFeatures.tasks.highlights.elementTracking.desc') },
      { label: t('featuresPage.bimFeatures.tasks.highlights.timeTracking.label'), desc: t('featuresPage.bimFeatures.tasks.highlights.timeTracking.desc') },
      { label: t('featuresPage.bimFeatures.tasks.highlights.cloudSync.label'), desc: t('featuresPage.bimFeatures.tasks.highlights.cloudSync.desc') },
    ],
    properties: [
      { name: t('featuresPage.bimFeatures.tasks.properties.elements.name'), type: t('featuresPage.bimFeatures.tasks.properties.elements.type'), desc: t('featuresPage.bimFeatures.tasks.properties.elements.desc') },
      { name: t('featuresPage.bimFeatures.tasks.properties.dateHours.name'), type: t('featuresPage.bimFeatures.tasks.properties.dateHours.type'), desc: t('featuresPage.bimFeatures.tasks.properties.dateHours.desc') },
      { name: t('featuresPage.bimFeatures.tasks.properties.trackedTime.name'), type: t('featuresPage.bimFeatures.tasks.properties.trackedTime.type'), desc: t('featuresPage.bimFeatures.tasks.properties.trackedTime.desc') },
      { name: t('featuresPage.bimFeatures.tasks.properties.manualTime.name'), type: t('featuresPage.bimFeatures.tasks.properties.manualTime.type'), desc: t('featuresPage.bimFeatures.tasks.properties.manualTime.desc') },
      { name: t('featuresPage.bimFeatures.tasks.properties.totalTime.name'), type: t('featuresPage.bimFeatures.tasks.properties.totalTime.type'), desc: t('featuresPage.bimFeatures.tasks.properties.totalTime.desc') },
    ]
  },
  assistant: {
    title: t('featuresPage.bimFeatures.assistant.title'),
    subtitle: t('featuresPage.bimFeatures.assistant.subtitle'),
    icon: '✨',
    color: 'from-purple-500 to-pink-600',
    image: '/images/features-detail/revit-assistant.png',
    highlights: [
      { label: t('featuresPage.bimFeatures.assistant.highlights.naturalLanguage.label'), desc: t('featuresPage.bimFeatures.assistant.highlights.naturalLanguage.desc') },
      { label: t('featuresPage.bimFeatures.assistant.highlights.voiceControl.label'), desc: t('featuresPage.bimFeatures.assistant.highlights.voiceControl.desc') },
      { label: t('featuresPage.bimFeatures.assistant.highlights.codeExecution.label'), desc: t('featuresPage.bimFeatures.assistant.highlights.codeExecution.desc') },
      { label: t('featuresPage.bimFeatures.assistant.highlights.toolMatching.label'), desc: t('featuresPage.bimFeatures.assistant.highlights.toolMatching.desc') },
    ],
    properties: [
      { name: t('featuresPage.bimFeatures.assistant.properties.chat.name'), type: t('featuresPage.bimFeatures.assistant.properties.chat.type'), desc: t('featuresPage.bimFeatures.assistant.properties.chat.desc') },
      { name: t('featuresPage.bimFeatures.assistant.properties.script.name'), type: t('featuresPage.bimFeatures.assistant.properties.script.type'), desc: t('featuresPage.bimFeatures.assistant.properties.script.desc') },
      { name: t('featuresPage.bimFeatures.assistant.properties.recommendations.name'), type: t('featuresPage.bimFeatures.assistant.properties.recommendations.type'), desc: t('featuresPage.bimFeatures.assistant.properties.recommendations.desc') },
      { name: t('featuresPage.bimFeatures.assistant.properties.history.name'), type: t('featuresPage.bimFeatures.assistant.properties.history.type'), desc: t('featuresPage.bimFeatures.assistant.properties.history.desc') },
    ]
  },
  dashboard: {
    title: t('featuresPage.bimFeatures.dashboard.title'),
    subtitle: t('featuresPage.bimFeatures.dashboard.subtitle'),
    icon: '📊',
    color: 'from-blue-500 to-indigo-600',
    image: '/images/features-detail/revit-dashboard.png',
    highlights: [
      { label: t('featuresPage.bimFeatures.dashboard.highlights.stats.label'), desc: t('featuresPage.bimFeatures.dashboard.highlights.stats.desc') },
      { label: t('featuresPage.bimFeatures.dashboard.highlights.budget.label'), desc: t('featuresPage.bimFeatures.dashboard.highlights.budget.desc') },
      { label: t('featuresPage.bimFeatures.dashboard.highlights.teamHours.label'), desc: t('featuresPage.bimFeatures.dashboard.highlights.teamHours.desc') },
      { label: t('featuresPage.bimFeatures.dashboard.highlights.milestones.label'), desc: t('featuresPage.bimFeatures.dashboard.highlights.milestones.desc') },
    ],
    properties: [
      { name: t('featuresPage.bimFeatures.dashboard.properties.totalBudget.name'), type: t('featuresPage.bimFeatures.dashboard.properties.totalBudget.type'), desc: t('featuresPage.bimFeatures.dashboard.properties.totalBudget.desc') },
      { name: t('featuresPage.bimFeatures.dashboard.properties.spentBudget.name'), type: t('featuresPage.bimFeatures.dashboard.properties.spentBudget.type'), desc: t('featuresPage.bimFeatures.dashboard.properties.spentBudget.desc') },
      { name: t('featuresPage.bimFeatures.dashboard.properties.teamMembers.name'), type: t('featuresPage.bimFeatures.dashboard.properties.teamMembers.type'), desc: t('featuresPage.bimFeatures.dashboard.properties.teamMembers.desc') },
      { name: t('featuresPage.bimFeatures.dashboard.properties.milestones.name'), type: t('featuresPage.bimFeatures.dashboard.properties.milestones.type'), desc: t('featuresPage.bimFeatures.dashboard.properties.milestones.desc') },
    ]
  },
  tools: {
    title: t('featuresPage.bimFeatures.tools.title'),
    subtitle: t('featuresPage.bimFeatures.tools.subtitle'),
    icon: '🔧',
    color: 'from-amber-500 to-orange-600',
    image: '/images/features-detail/revit-tools.png',
    highlights: [
      { label: t('featuresPage.bimFeatures.tools.highlights.dllPlugins.label'), desc: t('featuresPage.bimFeatures.tools.highlights.dllPlugins.desc') },
      { label: t('featuresPage.bimFeatures.tools.highlights.pythonScripts.label'), desc: t('featuresPage.bimFeatures.tools.highlights.pythonScripts.desc') },
      { label: t('featuresPage.bimFeatures.tools.highlights.csharpScripts.label'), desc: t('featuresPage.bimFeatures.tools.highlights.csharpScripts.desc') },
      { label: t('featuresPage.bimFeatures.tools.highlights.multiPlugin.label'), desc: t('featuresPage.bimFeatures.tools.highlights.multiPlugin.desc') },
    ],
    properties: [
      { name: t('featuresPage.bimFeatures.tools.properties.name.name'), type: t('featuresPage.bimFeatures.tools.properties.name.type'), desc: t('featuresPage.bimFeatures.tools.properties.name.desc') },
      { name: t('featuresPage.bimFeatures.tools.properties.description.name'), type: t('featuresPage.bimFeatures.tools.properties.description.type'), desc: t('featuresPage.bimFeatures.tools.properties.description.desc') },
      { name: t('featuresPage.bimFeatures.tools.properties.category.name'), type: t('featuresPage.bimFeatures.tools.properties.category.type'), desc: t('featuresPage.bimFeatures.tools.properties.category.desc') },
      { name: t('featuresPage.bimFeatures.tools.properties.keywords.name'), type: t('featuresPage.bimFeatures.tools.properties.keywords.type'), desc: t('featuresPage.bimFeatures.tools.properties.keywords.desc') },
      { name: t('featuresPage.bimFeatures.tools.properties.author.name'), type: t('featuresPage.bimFeatures.tools.properties.author.type'), desc: t('featuresPage.bimFeatures.tools.properties.author.desc') },
      { name: t('featuresPage.bimFeatures.tools.properties.version.name'), type: t('featuresPage.bimFeatures.tools.properties.version.type'), desc: t('featuresPage.bimFeatures.tools.properties.version.desc') },
    ]
  },
  projects: {
    title: t('featuresPage.bimFeatures.projects.title'),
    subtitle: t('featuresPage.bimFeatures.projects.subtitle'),
    icon: '🏢',
    color: 'from-emerald-500 to-teal-600',
    image: '/images/features-detail/revit-projects.png',
    highlights: [
      { label: t('featuresPage.bimFeatures.projects.highlights.projectCards.label'), desc: t('featuresPage.bimFeatures.projects.highlights.projectCards.desc') },
      { label: t('featuresPage.bimFeatures.projects.highlights.teamManagement.label'), desc: t('featuresPage.bimFeatures.projects.highlights.teamManagement.desc') },
      { label: t('featuresPage.bimFeatures.projects.highlights.accIntegration.label'), desc: t('featuresPage.bimFeatures.projects.highlights.accIntegration.desc') },
      { label: t('featuresPage.bimFeatures.projects.highlights.budgetTracking.label'), desc: t('featuresPage.bimFeatures.projects.highlights.budgetTracking.desc') },
    ],
    properties: [
      { name: t('featuresPage.bimFeatures.projects.properties.name.name'), type: t('featuresPage.bimFeatures.projects.properties.name.type'), desc: t('featuresPage.bimFeatures.projects.properties.name.desc') },
      { name: t('featuresPage.bimFeatures.projects.properties.client.name'), type: t('featuresPage.bimFeatures.projects.properties.client.type'), desc: t('featuresPage.bimFeatures.projects.properties.client.desc') },
      { name: t('featuresPage.bimFeatures.projects.properties.projectNumber.name'), type: t('featuresPage.bimFeatures.projects.properties.projectNumber.type'), desc: t('featuresPage.bimFeatures.projects.properties.projectNumber.desc') },
      { name: t('featuresPage.bimFeatures.projects.properties.accProjectId.name'), type: t('featuresPage.bimFeatures.projects.properties.accProjectId.type'), desc: t('featuresPage.bimFeatures.projects.properties.accProjectId.desc') },
      { name: t('featuresPage.bimFeatures.projects.properties.linkPath.name'), type: t('featuresPage.bimFeatures.projects.properties.linkPath.type'), desc: t('featuresPage.bimFeatures.projects.properties.linkPath.desc') },
      { name: t('featuresPage.bimFeatures.projects.properties.status.name'), type: t('featuresPage.bimFeatures.projects.properties.status.type'), desc: t('featuresPage.bimFeatures.projects.properties.status.desc') },
      { name: t('featuresPage.bimFeatures.projects.properties.completion.name'), type: t('featuresPage.bimFeatures.projects.properties.completion.type'), desc: t('featuresPage.bimFeatures.projects.properties.completion.desc') },
    ]
  },
  acc: {
    title: t('featuresPage.bimFeatures.acc.title'),
    subtitle: t('featuresPage.bimFeatures.acc.subtitle'),
    icon: '☁️',
    color: 'from-cyan-500 to-blue-600',
    image: '/images/features-detail/revit-acc.png',
    highlights: [
      { label: t('featuresPage.bimFeatures.acc.highlights.hubBrowser.label'), desc: t('featuresPage.bimFeatures.acc.highlights.hubBrowser.desc') },
      { label: t('featuresPage.bimFeatures.acc.highlights.modelLinking.label'), desc: t('featuresPage.bimFeatures.acc.highlights.modelLinking.desc') },
      { label: t('featuresPage.bimFeatures.acc.highlights.auth.label'), desc: t('featuresPage.bimFeatures.acc.highlights.auth.desc') },
      { label: t('featuresPage.bimFeatures.acc.highlights.fileSync.label'), desc: t('featuresPage.bimFeatures.acc.highlights.fileSync.desc') },
    ],
    properties: [
      { name: t('featuresPage.bimFeatures.acc.properties.hubId.name'), type: t('featuresPage.bimFeatures.acc.properties.hubId.type'), desc: t('featuresPage.bimFeatures.acc.properties.hubId.desc') },
      { name: t('featuresPage.bimFeatures.acc.properties.projectId.name'), type: t('featuresPage.bimFeatures.acc.properties.projectId.type'), desc: t('featuresPage.bimFeatures.acc.properties.projectId.desc') },
      { name: t('featuresPage.bimFeatures.acc.properties.accountId.name'), type: t('featuresPage.bimFeatures.acc.properties.accountId.type'), desc: t('featuresPage.bimFeatures.acc.properties.accountId.desc') },
      { name: t('featuresPage.bimFeatures.acc.properties.isAuth.name'), type: t('featuresPage.bimFeatures.acc.properties.isAuth.type'), desc: t('featuresPage.bimFeatures.acc.properties.isAuth.desc') },
    ]
  }
}))

// Team Member Properties
const teamMemberProps = computed(() => [
  { name: t('featuresPage.dataModels.teamMember.properties.name.name'), type: t('featuresPage.dataModels.teamMember.properties.name.type'), desc: t('featuresPage.dataModels.teamMember.properties.name.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.email.name'), type: t('featuresPage.dataModels.teamMember.properties.email.type'), desc: t('featuresPage.dataModels.teamMember.properties.email.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.role.name'), type: t('featuresPage.dataModels.teamMember.properties.role.type'), desc: t('featuresPage.dataModels.teamMember.properties.role.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.discipline.name'), type: t('featuresPage.dataModels.teamMember.properties.discipline.type'), desc: t('featuresPage.dataModels.teamMember.properties.discipline.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.hourlyRate.name'), type: t('featuresPage.dataModels.teamMember.properties.hourlyRate.type'), desc: t('featuresPage.dataModels.teamMember.properties.hourlyRate.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.hoursSpent.name'), type: t('featuresPage.dataModels.teamMember.properties.hoursSpent.type'), desc: t('featuresPage.dataModels.teamMember.properties.hoursSpent.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.budgetedHours.name'), type: t('featuresPage.dataModels.teamMember.properties.budgetedHours.type'), desc: t('featuresPage.dataModels.teamMember.properties.budgetedHours.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.totalCost.name'), type: t('featuresPage.dataModels.teamMember.properties.totalCost.type'), desc: t('featuresPage.dataModels.teamMember.properties.totalCost.desc') },
  { name: t('featuresPage.dataModels.teamMember.properties.utilization.name'), type: t('featuresPage.dataModels.teamMember.properties.utilization.type'), desc: t('featuresPage.dataModels.teamMember.properties.utilization.desc') },
])

// Milestone Properties
const milestoneProps = computed(() => [
  { name: t('featuresPage.dataModels.milestone.properties.name.name'), type: t('featuresPage.dataModels.milestone.properties.name.type'), desc: t('featuresPage.dataModels.milestone.properties.name.desc') },
  { name: t('featuresPage.dataModels.milestone.properties.description.name'), type: t('featuresPage.dataModels.milestone.properties.description.type'), desc: t('featuresPage.dataModels.milestone.properties.description.desc') },
  { name: t('featuresPage.dataModels.milestone.properties.dueDate.name'), type: t('featuresPage.dataModels.milestone.properties.dueDate.type'), desc: t('featuresPage.dataModels.milestone.properties.dueDate.desc') },
  { name: t('featuresPage.dataModels.milestone.properties.status.name'), type: t('featuresPage.dataModels.milestone.properties.status.type'), desc: t('featuresPage.dataModels.milestone.properties.status.desc') },
  { name: t('featuresPage.dataModels.milestone.properties.allocatedBudget.name'), type: t('featuresPage.dataModels.milestone.properties.allocatedBudget.type'), desc: t('featuresPage.dataModels.milestone.properties.allocatedBudget.desc') },
  { name: t('featuresPage.dataModels.milestone.properties.spentBudget.name'), type: t('featuresPage.dataModels.milestone.properties.spentBudget.type'), desc: t('featuresPage.dataModels.milestone.properties.spentBudget.desc') },
  { name: t('featuresPage.dataModels.milestone.properties.dependencies.name'), type: t('featuresPage.dataModels.milestone.properties.dependencies.type'), desc: t('featuresPage.dataModels.milestone.properties.dependencies.desc') },
  { name: t('featuresPage.dataModels.milestone.properties.deliverables.name'), type: t('featuresPage.dataModels.milestone.properties.deliverables.type'), desc: t('featuresPage.dataModels.milestone.properties.deliverables.desc') },
])

// All 45+ Property Types
const allPropertyTypes = computed(() => [
  { category: t('featuresPage.propertySystem.categories.basic'), types: ['Text', 'LongText', 'Number', 'Checkbox'] },
  { category: t('featuresPage.propertySystem.categories.dateTime'), types: ['Date', 'DateTime', 'StartDate', 'EndDate'] },
  { category: t('featuresPage.propertySystem.categories.selection'), types: ['Select', 'MultiSelect', 'Status', 'Priority'] },
  { category: t('featuresPage.propertySystem.categories.links'), types: ['URL', 'Email', 'Phone'] },
  { category: t('featuresPage.propertySystem.categories.people'), types: ['Person', 'CreatedBy', 'LastEditedBy'] },
  { category: t('featuresPage.propertySystem.categories.relations'), types: ['Relation', 'SubItems', 'Rollup'] },
  { category: t('featuresPage.propertySystem.categories.autoGenerated'), types: ['UniqueId', 'CreatedTime', 'LastEditedTime'] },
  { category: t('featuresPage.propertySystem.categories.bimAec'), types: ['RevitElements', 'DateHours', 'DefaultModelViewer', 'SheetViewer', 'SheetMarkup', 'CoordinationViewer', 'CoordinationSets'] },
  { category: t('featuresPage.propertySystem.categories.advanced'), types: ['Formula', 'Files', 'Button', 'Place'] },
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>

      <div class="container-custom relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span class="text-white/90 text-sm font-medium">{{ t('featuresPage.hero.badge') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{{ t('featuresPage.hero.title') }}</h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto mb-8">
          {{ t('featuresPage.hero.subtitle') }}
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <a href="#web-features" class="btn bg-white text-primary-600 hover:bg-gray-100">
            <span class="mr-2">🌐</span> {{ t('featuresPage.webPlatform.title') }}
          </a>
          <a href="#bim-features" class="btn border-2 border-white text-white hover:bg-white/10">
            <img src="/images/revit-logo.svg" alt="Revit" class="w-5 h-5 rounded mr-2" /> {{ t('featuresPage.revitAddin.title') }}
          </a>
          <a href="#all-properties" class="btn border-2 border-white/50 text-white/90 hover:bg-white/10">
            <span class="mr-2">📋</span> {{ t('featuresPage.propertySystem.badge') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Web Platform Features -->
    <section id="web-features" class="section bg-white">
      <div class="container-custom">
        <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-gray-900">{{ t('featuresPage.webPlatform.title') }}</h2>
              <p class="text-gray-500">
                {{ t('featuresPage.webPlatform.subtitle') }}
                <span class="mx-1">•</span>
                <a href="https://cloud.invoratec.com" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 font-medium">cloud.invoratec.com</a>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="free-trial-badge">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ t('featuresPage.webPlatform.freeTrial') }}
            </span>
            <a href="https://cloud.invoratec.com/signup" target="_blank" rel="noopener noreferrer" class="signup-btn">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
              </svg>
              {{ t('featuresPage.webPlatform.signupNow') }}
            </a>
          </div>
        </div>

        <!-- Feature Navigation Tabs -->
        <div class="feature-tabs-container">
          <button
            v-for="(feature, key) in webFeatures"
            :key="key"
            @click="activeWebSection = key"
            class="feature-tab"
            :class="activeWebSection === key
              ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          >
            <span class="mr-2">{{ feature.icon }}</span>
            {{ feature.title }}
          </button>
        </div>

        <!-- Active Feature Display -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Left: Info -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="text-4xl">{{ webFeatures[activeWebSection].icon }}</span>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ webFeatures[activeWebSection].title }}</h3>
                <p class="text-gray-500">{{ webFeatures[activeWebSection].subtitle }}</p>
              </div>
            </div>

            <!-- Highlights -->
            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              <div
                v-for="highlight in webFeatures[activeWebSection].highlights"
                :key="highlight.label"
                class="bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <h4 class="font-semibold text-gray-900 mb-1">{{ highlight.label }}</h4>
                <p class="text-sm text-gray-600">{{ highlight.desc }}</p>
              </div>
            </div>

            <!-- Properties Table -->
            <div class="bg-white border rounded-xl overflow-hidden">
              <div class="bg-gray-50 px-4 py-3 border-b">
                <h4 class="font-semibold text-gray-900">{{ t('featuresPage.availableProperties') }}</h4>
              </div>
              <div class="divide-y max-h-64 overflow-y-auto">
                <div
                  v-for="prop in webFeatures[activeWebSection].properties"
                  :key="prop.name"
                  class="px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <div>
                    <span class="font-medium text-gray-900">{{ prop.name }}</span>
                    <span class="text-xs text-gray-400 ml-2">{{ prop.type }}</span>
                  </div>
                  <span class="text-sm text-gray-500">{{ prop.desc }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Mock UI -->
          <div class="relative mock-ui-wrapper">
            <div class="mock-ui-frame bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-3 shadow-2xl">
              <div class="flex items-center gap-2 mb-2">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="flex-1 bg-gray-700 rounded-lg h-6 flex items-center px-3">
                  <span class="text-gray-400 text-xs">cloud.invoratec.com</span>
                </div>
              </div>
              <div class="mock-ui-content rounded-lg overflow-hidden bg-gray-100">
                <!-- Dynamic Mock UI Component -->
                <component
                  v-if="activeWebMockComponent"
                  :is="activeWebMockComponent"
                  class="w-full h-full"
                />
                <!-- Fallback image for features without mock UI -->
                <img
                  v-else
                  :src="webFeatures[activeWebSection].image"
                  :alt="webFeatures[activeWebSection].title"
                  class="w-full h-full object-cover object-top"
                  @error="($event.target as HTMLImageElement).src = '/images/placeholder-feature.png'"
                />
              </div>
            </div>
            <div :class="`absolute -bottom-3 -right-3 bg-gradient-to-r ${webFeatures[activeWebSection].color} text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium mock-ui-badge`">
              {{ webFeatures[activeWebSection].icon }} {{ webFeatures[activeWebSection].title }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Revit Add-in Features -->
    <section id="bim-features" class="section bg-gray-50">
      <div class="container-custom">
        <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div class="flex items-center gap-4">
            <img src="/images/revit-logo.svg" alt="Revit" class="w-14 h-14 rounded-2xl shadow-lg object-cover" />
            <div>
              <h2 class="text-3xl font-bold text-gray-900">{{ t('featuresPage.revitAddin.title') }}</h2>
              <p class="text-gray-500">{{ t('featuresPage.revitAddin.subtitle') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="free-trial-badge">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ t('featuresPage.revitAddin.freeTrial') }}
            </span>
            <router-link to="/download" class="download-btn">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              {{ t('featuresPage.revitAddin.downloadNow') }}
            </router-link>
          </div>
        </div>

        <!-- Feature Navigation Tabs -->
        <div class="feature-tabs-container">
          <button
            v-for="(feature, key) in bimFeatures"
            :key="key"
            @click="activeBimSection = key"
            class="feature-tab"
            :class="activeBimSection === key
              ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'"
          >
            <span class="mr-2">{{ feature.icon }}</span>
            {{ feature.title }}
          </button>
        </div>

        <!-- Active Feature Display -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Left: Interactive Mock UI -->
          <div class="relative order-2 lg:order-1 mock-ui-wrapper">
            <div class="mock-ui-frame bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-2 shadow-2xl">
              <div class="mock-ui-content rounded-lg overflow-hidden bg-gray-100">
                <!-- Dynamic Mock UI Component -->
                <component
                  v-if="activeBimMockComponent"
                  :is="activeBimMockComponent"
                  class="w-full h-full"
                />
                <!-- Fallback image for features without mock UI -->
                <img
                  v-else
                  :src="bimFeatures[activeBimSection].image"
                  :alt="bimFeatures[activeBimSection].title"
                  class="w-full h-full object-cover object-top"
                  @error="($event.target as HTMLImageElement).src = '/images/placeholder-feature.png'"
                />
              </div>
            </div>
            <div :class="`absolute -bottom-3 -left-3 bg-gradient-to-r ${bimFeatures[activeBimSection].color} text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium mock-ui-badge`">
              {{ bimFeatures[activeBimSection].icon }} {{ bimFeatures[activeBimSection].title }}
            </div>
          </div>

          <!-- Right: Info -->
          <div class="order-1 lg:order-2">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-4xl">{{ bimFeatures[activeBimSection].icon }}</span>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ bimFeatures[activeBimSection].title }}</h3>
                <p class="text-gray-500">{{ bimFeatures[activeBimSection].subtitle }}</p>
              </div>
            </div>

            <!-- Highlights -->
            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              <div
                v-for="highlight in bimFeatures[activeBimSection].highlights"
                :key="highlight.label"
                class="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
              >
                <h4 class="font-semibold text-gray-900 mb-1">{{ highlight.label }}</h4>
                <p class="text-sm text-gray-600">{{ highlight.desc }}</p>
              </div>
            </div>

            <!-- Properties Table -->
            <div class="bg-white border rounded-xl overflow-hidden shadow-sm">
              <div class="bg-gray-50 px-4 py-3 border-b">
                <h4 class="font-semibold text-gray-900">{{ t('featuresPage.availableProperties') }}</h4>
              </div>
              <div class="divide-y max-h-64 overflow-y-auto">
                <div
                  v-for="prop in bimFeatures[activeBimSection].properties"
                  :key="prop.name"
                  class="px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <div>
                    <span class="font-medium text-gray-900">{{ prop.name }}</span>
                    <span class="text-xs text-gray-400 ml-2">{{ prop.type }}</span>
                  </div>
                  <span class="text-sm text-gray-500">{{ prop.desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team & Milestones Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ t('featuresPage.dataModels.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ t('featuresPage.dataModels.subtitle') }}</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Team Member -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span class="text-2xl">👥</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ t('featuresPage.dataModels.teamMember.title') }}</h3>
                <p class="text-gray-500 text-sm">{{ t('featuresPage.dataModels.teamMember.subtitle') }}</p>
              </div>
            </div>
            <div class="bg-white rounded-xl overflow-hidden border border-blue-100">
              <div class="divide-y max-h-80 overflow-y-auto">
                <div
                  v-for="prop in teamMemberProps"
                  :key="prop.name"
                  class="px-4 py-3 flex items-center justify-between hover:bg-blue-50/50"
                >
                  <div>
                    <span class="font-medium text-gray-900">{{ prop.name }}</span>
                    <span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded ml-2">{{ prop.type }}</span>
                  </div>
                  <span class="text-sm text-gray-500">{{ prop.desc }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Milestone -->
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🎯</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ t('featuresPage.dataModels.milestone.title') }}</h3>
                <p class="text-gray-500 text-sm">{{ t('featuresPage.dataModels.milestone.subtitle') }}</p>
              </div>
            </div>
            <div class="bg-white rounded-xl overflow-hidden border border-emerald-100">
              <div class="divide-y max-h-80 overflow-y-auto">
                <div
                  v-for="prop in milestoneProps"
                  :key="prop.name"
                  class="px-4 py-3 flex items-center justify-between hover:bg-emerald-50/50"
                >
                  <div>
                    <span class="font-medium text-gray-900">{{ prop.name }}</span>
                    <span class="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded ml-2">{{ prop.type }}</span>
                  </div>
                  <span class="text-sm text-gray-500">{{ prop.desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Property Types Section -->
    <section id="all-properties" class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-6 md:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary-100 rounded-full mb-3 md:mb-4">
            <span class="text-primary-700 font-semibold text-sm md:text-base">{{ t('featuresPage.propertySystem.badge') }}</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{{ t('featuresPage.propertySystem.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">{{ t('featuresPage.propertySystem.subtitle') }}</p>
        </div>

        <div class="property-types-grid">
          <div
            v-for="category in allPropertyTypes"
            :key="category.category"
            class="property-card bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 class="font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
              <span class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
              {{ category.category }}
            </h3>
            <div class="flex flex-wrap gap-1.5 md:gap-2">
              <span
                v-for="type in category.types"
                :key="type"
                class="property-tag px-2 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
              >
                {{ type }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ t('featuresPage.comparison.title') }}</h2>
          <p class="text-gray-600">{{ t('featuresPage.comparison.subtitle') }}</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-4 px-6 font-semibold text-gray-900">{{ t('featuresPage.comparison.feature') }}</th>
                <th class="text-center py-4 px-6 font-semibold text-gray-900">
                  <div class="flex items-center justify-center gap-2">
                    <span class="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <span class="text-white text-sm">🌐</span>
                    </span>
                    {{ t('featuresPage.comparison.webPlatform') }}
                  </div>
                </th>
                <th class="text-center py-4 px-6 font-semibold text-gray-900">
                  <div class="flex items-center justify-center gap-2">
                    <span class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span class="text-white text-sm">🏗️</span>
                    </span>
                    {{ t('featuresPage.comparison.revitAddin') }}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.taskManagement') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.modelViewer') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-gray-300 text-xl">—</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.gantt') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.kanban') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.aiAssistant') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.revitTracking') }}</td>
                <td class="text-center py-4 px-6"><span class="text-gray-300 text-xl">—</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.toolLibrary') }}</td>
                <td class="text-center py-4 px-6"><span class="text-gray-300 text-xl">—</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.accIntegration') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.shopDrawing') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-gray-300 text-xl">—</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.coordination') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-gray-300 text-xl">—</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.dashboard') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.teamBudget') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-4 px-6">{{ t('featuresPage.comparison.features.languages') }}</td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
                <td class="text-center py-4 px-6"><span class="text-green-500 text-xl">✓</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-primary relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div class="container-custom text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{{ t('featuresPage.cta.title') }}</h2>
        <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          {{ t('featuresPage.cta.subtitle') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/demo" class="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
            {{ t('featuresPage.cta.requestDemo') }}
          </router-link>
          <router-link to="/download" class="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            {{ t('featuresPage.cta.downloadAddin') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section {
  @apply py-8 md:py-16 lg:py-24;
}

.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.btn {
  @apply inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300;
  font-size: clamp(0.75rem, 2.5vw, 1rem);
}

.bg-gradient-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Sign Up Button */
.signup-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.4);
}

.signup-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.5);
}

@media (max-width: 768px) {
  .signup-btn {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}

/* Free Trial Badge */
.free-trial-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  font-weight: 600;
  font-size: 0.75rem;
  border-radius: 9999px;
  white-space: nowrap;
}

/* Download Button */
.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.4);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px 0 rgba(59, 130, 246, 0.5);
}

@media (max-width: 768px) {
  .free-trial-badge {
    padding: 0.375rem 0.75rem;
    font-size: 0.65rem;
  }

  .download-btn {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}

/* ==================== MOCK UI SCALING ==================== */
/* Wrapper that maintains aspect ratio and scales content */
.mock-ui-wrapper {
  width: 100%;
}

.mock-ui-frame {
  width: 100%;
  transform-origin: top left;
}

.mock-ui-content {
  min-height: 450px;
  height: 450px;
}

.mock-ui-badge {
  font-size: clamp(0.65rem, 2vw, 0.875rem);
  padding: clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 1.5vw, 1rem);
}

/* ==================== PORTRAIT MODE - FIT TO WIDTH ==================== */
@media (orientation: portrait) and (max-width: 1023px) {
  .section {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  /* Scale mock UI to fit viewport width - TALLER */
  .mock-ui-wrapper {
    overflow: hidden;
  }

  .mock-ui-frame {
    /* Original width is ~600px on desktop, scale to fit mobile width */
    transform: scale(0.7);
    transform-origin: top left;
    width: 143%; /* 100% / 0.7 to fill container after scaling */
  }

  .mock-ui-content {
    min-height: 400px;
    height: 400px;
  }

  /* Adjust wrapper height to match scaled content */
  .mock-ui-wrapper {
    height: calc(400px * 0.7 + 50px); /* scaled height + chrome */
    margin-bottom: 1rem;
  }

  .mock-ui-badge {
    transform: scale(1.5);
    transform-origin: bottom right;
    bottom: 0.5rem !important;
    right: 0.5rem !important;
  }

  /* Hide properties table and show only highlights on very small screens */
  .grid.lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  /* Stack content vertically with mock UI first */
  .grid.lg\:grid-cols-2 > div:first-child {
    order: 2;
  }

  .grid.lg\:grid-cols-2 > div:last-child {
    order: 1;
  }

  /* Properties table - limit height */
  .max-h-64 {
    max-height: 150px;
  }

  /* Highlights - compact */
  .grid.sm\:grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .grid.sm\:grid-cols-2 > div {
    padding: 0.5rem 0.75rem;
  }
}

/* ==================== LANDSCAPE MODE - FIT TO HEIGHT ==================== */
@media (orientation: landscape) and (max-width: 1023px) {
  .section {
    padding-top: 1rem;
    padding-bottom: 1rem;
    min-height: calc(100dvh - 60px);
    overflow-y: auto;
  }

  /* Scale mock UI to fit viewport height - TALLER */
  .mock-ui-wrapper {
    overflow: hidden;
    height: calc(100dvh - 150px);
    max-height: 400px;
  }

  .mock-ui-frame {
    transform: scale(0.6);
    transform-origin: top left;
    width: 167%; /* 100% / 0.6 */
  }

  .mock-ui-content {
    min-height: 400px;
    height: 400px;
  }

  .mock-ui-badge {
    transform: scale(1.6);
    transform-origin: bottom right;
    bottom: 0.5rem !important;
    right: 0.5rem !important;
  }

  /* Two-column layout maintained but more compact */
  .grid.lg\:grid-cols-2 {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: start;
  }

  /* Hide some content to fit */
  .max-h-64 {
    max-height: 100px;
  }

  /* Highlights - 2 columns, compact */
  .grid.sm\:grid-cols-2 {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .grid.sm\:grid-cols-2 > div {
    padding: 0.5rem;
  }
}

/* ==================== VERY SMALL SCREENS (< 400px) ==================== */
@media (max-width: 400px) {
  .mock-ui-frame {
    transform: scale(0.55);
    width: 182%; /* 100% / 0.55 */
  }

  .mock-ui-wrapper {
    height: calc(400px * 0.55 + 40px);
  }
}

/* ==================== RESPONSIVE TEXT ==================== */
h1 {
  font-size: clamp(1.5rem, 5vw, 3.75rem) !important;
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.25rem, 4vw, 2.25rem) !important;
  line-height: 1.3;
}

h3 {
  font-size: clamp(1rem, 3vw, 1.5rem) !important;
  line-height: 1.3;
}

h4 {
  font-size: clamp(0.8rem, 2.5vw, 1.125rem) !important;
  line-height: 1.4;
}

p {
  font-size: clamp(0.75rem, 2vw, 1rem);
  line-height: 1.5;
}

/* ==================== FEATURE TABS ==================== */
.feature-tabs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.feature-tab {
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 0.875rem;
}

/* On mobile, make tabs scrollable horizontally */
@media (max-width: 768px) {
  .feature-tabs-container {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
    padding-bottom: 0.5rem;
  }

  .feature-tabs-container::-webkit-scrollbar {
    height: 4px;
  }

  .feature-tabs-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .feature-tabs-container::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }

  .feature-tab {
    padding: 0.4rem 0.75rem;
    font-size: 0.75rem;
    flex-shrink: 0;
  }
}

/* ==================== PROPERTIES TABLE ==================== */
.divide-y > div {
  padding: clamp(0.4rem, 1.5vw, 0.75rem) clamp(0.5rem, 2vw, 1rem);
}

.divide-y .font-medium {
  font-size: clamp(0.7rem, 2vw, 0.875rem);
}

.divide-y .text-sm {
  font-size: clamp(0.6rem, 1.8vw, 0.875rem);
}

/* ==================== COMPARISON TABLE ==================== */
.overflow-x-auto table {
  font-size: clamp(0.65rem, 2vw, 1rem);
}

.overflow-x-auto td,
.overflow-x-auto th {
  padding: clamp(0.4rem, 1.5vw, 1rem) clamp(0.5rem, 2vw, 1.5rem);
}

/* ==================== HERO SECTION MOBILE ==================== */
@media (max-width: 768px) {
  .pt-32 {
    padding-top: 5rem;
  }

  .pb-20 {
    padding-bottom: 3rem;
  }
}

/* ==================== PROPERTY TYPES GRID ==================== */
.property-types-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .property-types-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .property-types-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

.property-card {
  min-width: 0; /* Prevent overflow */
}

.property-tag {
  white-space: nowrap;
}

/* ==================== TEAM & MILESTONE SECTION MOBILE ==================== */
@media (max-width: 1023px) {
  /* Property rows - stack on mobile */
  .bg-gradient-to-br .divide-y > div {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .bg-gradient-to-br .divide-y > div span.text-sm {
    font-size: clamp(0.65rem, 2vw, 0.75rem);
    color: #6b7280;
  }

  .bg-gradient-to-br .divide-y > div .font-medium {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
  }

  /* Limit table height on mobile */
  .max-h-80 {
    max-height: 200px;
  }

  /* Section padding */
  .bg-gradient-to-br.from-blue-50,
  .bg-gradient-to-br.from-emerald-50 {
    padding: 1rem;
  }

  /* Header icons smaller */
  .bg-gradient-to-br .w-12.h-12 {
    width: 2.5rem;
    height: 2.5rem;
  }

  .bg-gradient-to-br .text-2xl {
    font-size: 1.25rem;
  }

  .bg-gradient-to-br .text-xl {
    font-size: 1rem;
  }
}
</style>