<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TermsLayout from './TermsLayout.vue'

const { t } = useI18n()

const integrations = computed(() => [
  {
    name: 'Autodesk Construction Cloud (ACC)',
    category: t('terms.integrations.content.categories.bimConstruction'),
    dataAccess: t('terms.integrations.content.accFeatures.0'),
    status: t('terms.integrations.content.statuses.available')
  },
  {
    name: 'Autodesk BIM 360',
    category: t('terms.integrations.content.categories.bimConstruction'),
    dataAccess: t('terms.integrations.content.accFeatures.1'),
    status: t('terms.integrations.content.statuses.available')
  },
  {
    name: 'Autodesk Revit',
    category: t('terms.integrations.content.categories.bimAuthoring'),
    dataAccess: t('terms.integrations.content.revitFeatures.0'),
    status: t('terms.integrations.content.statuses.available')
  }
])
</script>

<template>
  <TermsLayout>
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t('terms.integrations.title') }}</h1>
    <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t('terms.security.lastUpdated') }}: December 24, 2024</p>

    <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
      <!-- Introduction -->
      <section class="mb-6 sm:mb-10">
        <p class="lead text-base sm:text-lg">
          {{ t('terms.integrations.content.intro') }}
        </p>
      </section>

      <!-- How Integrations Work -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.howIntegrationsWork') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.authentication') }}</h3>
        <p>{{ t('terms.integrations.content.authDescription') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.authItems.0') }}</li>
          <li>{{ t('terms.integrations.content.authItems.1') }}</li>
          <li>{{ t('terms.integrations.content.authItems.2') }}</li>
          <li>{{ t('terms.integrations.content.authItems.3') }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.dataFlow') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.dataFlowItems.0') }}</li>
          <li>{{ t('terms.integrations.content.dataFlowItems.1') }}</li>
          <li>{{ t('terms.integrations.content.dataFlowItems.2') }}</li>
          <li>{{ t('terms.integrations.content.dataFlowItems.3') }}</li>
        </ul>
      </section>

      <!-- Available Integrations -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.availableIntegrations') }}</h2>

        <!-- Mobile: Card layout -->
        <div class="sm:hidden space-y-4 mt-4">
          <div v-for="int in integrations" :key="int.name" class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-start justify-between">
              <span class="font-medium text-base text-gray-900">{{ int.name }}</span>
              <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 ml-2 flex-shrink-0">{{ int.status }}</span>
            </div>
            <div class="mt-2 space-y-1 text-sm">
              <p><span class="font-medium text-gray-700">{{ t('terms.integrations.content.tableHeaders.category') }}:</span> {{ int.category }}</p>
              <p><span class="font-medium text-gray-700">{{ t('terms.integrations.content.tableHeaders.dataAccess') }}:</span> {{ int.dataAccess }}</p>
            </div>
          </div>
        </div>

        <!-- Desktop: Table layout -->
        <div class="hidden sm:block overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 mt-6">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.integrations.content.tableHeaders.integration') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.integrations.content.tableHeaders.category') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.integrations.content.tableHeaders.dataAccess') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.integrations.content.tableHeaders.status') }}</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="int in integrations" :key="int.name">
                <td class="px-4 py-4 whitespace-nowrap font-medium">{{ int.name }}</td>
                <td class="px-4 py-4 text-sm">{{ int.category }}</td>
                <td class="px-4 py-4 text-sm">{{ int.dataAccess }}</td>
                <td class="px-4 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">{{ int.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Autodesk Integration Details -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.autodeskIntegration') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.accTitle') }}</h3>
        <p>{{ t('terms.integrations.content.accDescription') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.accFeatures.0') }}</li>
          <li>{{ t('terms.integrations.content.accFeatures.1') }}</li>
          <li>{{ t('terms.integrations.content.accFeatures.2') }}</li>
          <li>{{ t('terms.integrations.content.accFeatures.3') }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.revitAddin') }}</h3>
        <p>{{ t('terms.integrations.content.revitDescription') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.revitFeatures.0') }}</li>
          <li>{{ t('terms.integrations.content.revitFeatures.1') }}</li>
          <li>{{ t('terms.integrations.content.revitFeatures.2') }}</li>
          <li>{{ t('terms.integrations.content.revitFeatures.3') }}</li>
        </ul>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p class="font-semibold text-blue-800 mb-2">{{ t('terms.integrations.content.supportedVersions') }}</p>
          <p class="text-blue-800">Revit 2022, 2023, 2024, 2025</p>
        </div>
      </section>

      <!-- Managing Integrations -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.managingIntegrations') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.connecting') }}</h3>
        <ol class="list-decimal pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.connectSteps.0') }}</li>
          <li>{{ t('terms.integrations.content.connectSteps.1') }}</li>
          <li>{{ t('terms.integrations.content.connectSteps.2') }}</li>
          <li>{{ t('terms.integrations.content.connectSteps.3') }}</li>
          <li>{{ t('terms.integrations.content.connectSteps.4') }}</li>
        </ol>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.disconnecting') }}</h3>
        <ol class="list-decimal pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.disconnectSteps.0') }}</li>
          <li>{{ t('terms.integrations.content.disconnectSteps.1') }}</li>
          <li>{{ t('terms.integrations.content.disconnectSteps.2') }}</li>
          <li>{{ t('terms.integrations.content.disconnectSteps.3') }}</li>
        </ol>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.dataAfterDisconnection') }}</h3>
        <p>{{ t('terms.integrations.content.dataAfterDisconnection') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.dataAfterItems.0') }}</li>
          <li>{{ t('terms.integrations.content.dataAfterItems.1') }}</li>
          <li>{{ t('terms.integrations.content.dataAfterItems.2') }}</li>
          <li>{{ t('terms.integrations.content.dataAfterItems.3') }}</li>
        </ul>
      </section>

      <!-- Permissions Explained -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.permissions') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.minimumPermissions') }}</h3>
        <p>{{ t('terms.integrations.content.permissionsDescription') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.permissionsItems.0') }}</li>
          <li>{{ t('terms.integrations.content.permissionsItems.1') }}</li>
          <li>{{ t('terms.integrations.content.permissionsItems.2') }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.autodeskPermissions') }}</h3>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <p class="font-medium mb-2">{{ t('terms.integrations.content.requestedScopes') }}</p>
          <ul class="list-disc pl-6 space-y-1 text-sm">
            <li><code>data:read</code> - View your data in Autodesk services</li>
            <li><code>data:write</code> - Create and modify data (when enabled)</li>
            <li><code>data:create</code> - Upload files and create new items</li>
            <li><code>account:read</code> - Access your account information</li>
          </ul>
        </div>
      </section>

      <!-- Security -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.security') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.tokenSecurity') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.tokenSecurityItems.0') }}</li>
          <li>{{ t('terms.integrations.content.tokenSecurityItems.1') }}</li>
          <li>{{ t('terms.integrations.content.tokenSecurityItems.2') }}</li>
          <li>{{ t('terms.integrations.content.tokenSecurityItems.3') }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.auditLogging') }}</h3>
        <p>{{ t('terms.integrations.content.auditLoggingDescription') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.auditLoggingItems.0') }}</li>
          <li>{{ t('terms.integrations.content.auditLoggingItems.1') }}</li>
          <li>{{ t('terms.integrations.content.auditLoggingItems.2') }}</li>
          <li>{{ t('terms.integrations.content.auditLoggingItems.3') }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.integrations.content.enterpriseAudit') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.thirdPartySecurity') }}</h3>
        <p>{{ t('terms.integrations.content.thirdPartyDescription') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.thirdPartyItems.0') }}</li>
          <li>{{ t('terms.integrations.content.thirdPartyItems.1') }}</li>
          <li>{{ t('terms.integrations.content.thirdPartyItems.2') }}</li>
          <li>{{ t('terms.integrations.content.thirdPartyItems.3') }}</li>
        </ul>
      </section>

      <!-- Troubleshooting -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.troubleshooting') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.integrations.content.commonIssues') }}</h3>

        <div class="space-y-4 mt-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-medium mb-2">{{ t('terms.integrations.content.issue1Title') }}</p>
            <p class="text-sm">{{ t('terms.integrations.content.issue1Description') }}</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-medium mb-2">{{ t('terms.integrations.content.issue2Title') }}</p>
            <p class="text-sm">{{ t('terms.integrations.content.issue2Description') }}</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-medium mb-2">{{ t('terms.integrations.content.issue3Title') }}</p>
            <p class="text-sm">{{ t('terms.integrations.content.issue3Description') }}</p>
          </div>
        </div>
      </section>

      <!-- Future Integrations -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.upcomingIntegrations') }}</h2>
        <p>{{ t('terms.integrations.content.upcomingDescription') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>{{ t('terms.integrations.content.upcomingItems.0') }}</li>
          <li>{{ t('terms.integrations.content.upcomingItems.1') }}</li>
          <li>{{ t('terms.integrations.content.upcomingItems.2') }}</li>
          <li>{{ t('terms.integrations.content.upcomingItems.3') }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.integrations.content.requestIntegration') }} <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
      </section>

      <!-- Contact -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.integrations.content.support') }}</h2>
        <p>{{ t('terms.integrations.content.supportDescription') }}</p>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <p><strong>{{ t('terms.integrations.content.integrationSupport') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.integrations.content.generalSupport') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.integrations.content.documentation') }}:</strong> <a href="/docs" class="text-primary-600 hover:underline">docs.invoratec.com</a></p>
        </div>
      </section>
    </div>
  </TermsLayout>
</template>