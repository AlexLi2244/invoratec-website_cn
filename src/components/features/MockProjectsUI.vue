<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock Projects UI - Simulates the Revit Add-in project management panel

const { t } = useI18n()
</script>

<template>
  <div class="mock-projects-container">
    <!-- Revit-style Window Frame -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">🏢</span>
        <span>InvoratecAI - {{ t('mockUI.projects.title') }}</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Panel Tabs -->
    <div class="panel-tabs">
      <div class="tab">
        <span class="tab-icon">📋</span>
        {{ t('mockUI.tasks.myTasks') }}
      </div>
      <div class="tab">
        <span class="tab-icon">📊</span>
        {{ t('mockUI.dashboard.title') }}
      </div>
      <div class="tab active">
        <span class="tab-icon">🏢</span>
        {{ t('mockUI.projects.title') }}
      </div>
      <div class="tab">
        <span class="tab-icon">☁️</span>
        ACC
      </div>
    </div>

    <!-- Header Actions -->
    <div class="projects-header">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" :placeholder="t('mockUI.projects.search')" readonly />
      </div>
      <button class="new-project-btn">+ {{ t('mockUI.projects.create') }}</button>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <!-- Project Card 1 - Active -->
      <div class="project-card active">
        <div class="project-header">
          <div class="project-icon" style="background: linear-gradient(135deg, #667eea, #764ba2);">
            <span>🏗️</span>
          </div>
          <div class="project-info">
            <div class="project-name">Downtown Office Tower</div>
            <div class="project-client">Meridian Development Corp</div>
          </div>
          <div class="project-status active">Active</div>
        </div>

        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-label">Project #:</span>
            <span class="meta-value">2024-MEP-001</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Phase:</span>
            <span class="meta-value">Design Development</span>
          </div>
        </div>

        <div class="project-progress">
          <div class="progress-header">
            <span>Overall Progress</span>
            <span class="progress-value">68%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 68%;"></div>
          </div>
        </div>

        <div class="project-stats">
          <div class="stat-item">
            <span class="stat-value">24</span>
            <span class="stat-label">Tasks</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">5</span>
            <span class="stat-label">Members</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">$45K</span>
            <span class="stat-label">Budget</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">156h</span>
            <span class="stat-label">Hours</span>
          </div>
        </div>

        <div class="project-team">
          <div class="team-avatars">
            <div class="avatar" style="background: #667eea;">JC</div>
            <div class="avatar" style="background: #f59e0b;">SW</div>
            <div class="avatar" style="background: #06b6d4;">AK</div>
            <div class="avatar" style="background: #10b981;">ML</div>
            <div class="avatar more">+1</div>
          </div>
          <div class="acc-badge">
            <span class="acc-icon">☁️</span>
            ACC Linked
          </div>
        </div>

        <div class="project-actions">
          <button class="action-btn primary">Open Project</button>
          <button class="action-btn">Settings</button>
        </div>
      </div>

      <!-- Project Card 2 -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">
            <span>🏥</span>
          </div>
          <div class="project-info">
            <div class="project-name">Medical Center Expansion</div>
            <div class="project-client">Central Healthcare Systems</div>
          </div>
          <div class="project-status active">Active</div>
        </div>

        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-label">Project #:</span>
            <span class="meta-value">2024-MEP-003</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Phase:</span>
            <span class="meta-value">Construction Docs</span>
          </div>
        </div>

        <div class="project-progress">
          <div class="progress-header">
            <span>Overall Progress</span>
            <span class="progress-value">42%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill cyan" style="width: 42%;"></div>
          </div>
        </div>

        <div class="project-stats">
          <div class="stat-item">
            <span class="stat-value">31</span>
            <span class="stat-label">Tasks</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">8</span>
            <span class="stat-label">Members</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">$72K</span>
            <span class="stat-label">Budget</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">89h</span>
            <span class="stat-label">Hours</span>
          </div>
        </div>

        <div class="project-actions compact">
          <button class="action-btn primary">Open</button>
        </div>
      </div>

      <!-- Project Card 3 -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
            <span>🏫</span>
          </div>
          <div class="project-info">
            <div class="project-name">University Science Building</div>
            <div class="project-client">State University</div>
          </div>
          <div class="project-status pending">Pending</div>
        </div>

        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-label">Project #:</span>
            <span class="meta-value">2024-MEP-005</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Phase:</span>
            <span class="meta-value">Schematic Design</span>
          </div>
        </div>

        <div class="project-progress">
          <div class="progress-header">
            <span>Overall Progress</span>
            <span class="progress-value">15%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill amber" style="width: 15%;"></div>
          </div>
        </div>

        <div class="project-actions compact">
          <button class="action-btn primary">Open</button>
        </div>
      </div>
    </div>

    <!-- Bottom Status -->
    <div class="projects-status">
      <div class="status-left">
        <span class="status-count">3 active projects</span>
      </div>
      <div class="status-right">
        <span class="sync-indicator">☁️ Synced with cloud.invoratec.com</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-projects-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 400px;
  background: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 11px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

/* Title Bar */
.revit-titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background: linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 100%);
  color: white;
}

.titlebar-left {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
}

.window-icon {
  font-size: 14px;
}

.titlebar-buttons {
  display: flex;
  gap: 2px;
}

.titlebar-btn {
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: #ccc;
  cursor: pointer;
  font-size: 12px;
}

.titlebar-btn:hover {
  background: #555;
}

.titlebar-btn.close:hover {
  background: #e81123;
  color: white;
}

/* Panel Tabs */
.panel-tabs {
  display: flex;
  background: #e0e0e0;
  border-bottom: 1px solid #c0c0c0;
}

.tab {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  font-size: 11px;
  color: #555;
  cursor: pointer;
  border-right: 1px solid #c0c0c0;
}

.tab.active {
  background: white;
  color: #333;
  font-weight: 500;
  border-bottom: 2px solid #667eea;
  margin-bottom: -1px;
}

.tab-icon {
  font-size: 12px;
}

/* Header */
.projects-header {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.search-box input {
  border: none;
  background: transparent;
  font-size: 11px;
  width: 100%;
  outline: none;
}

.search-icon {
  font-size: 14px;
  color: #888;
}

.new-project-btn {
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
}

/* Projects Grid */
.projects-grid {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
}

.project-card.active {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

.project-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.project-info {
  flex: 1;
}

.project-name {
  font-weight: 600;
  color: #1f2937;
  font-size: 13px;
  margin-bottom: 2px;
}

.project-client {
  font-size: 10px;
  color: #6b7280;
}

.project-status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 600;
}

.project-status.active {
  background: #d1fae5;
  color: #065f46;
}

.project-status.pending {
  background: #fef3c7;
  color: #92400e;
}

.project-status.completed {
  background: #e0e7ff;
  color: #4f46e5;
}

/* Meta */
.project-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.meta-item {
  display: flex;
  gap: 4px;
  font-size: 10px;
}

.meta-label {
  color: #6b7280;
}

.meta-value {
  color: #1f2937;
  font-weight: 500;
}

/* Progress */
.project-progress {
  margin-bottom: 10px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 10px;
  color: #6b7280;
}

.progress-value {
  font-weight: 600;
  color: #667eea;
}

.progress-bar {
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 3px;
}

.progress-fill.cyan {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
}

.progress-fill.amber {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

/* Stats */
.project-stats {
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  padding: 10px;
  background: #f9fafb;
  border-radius: 6px;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-value {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.stat-label {
  font-size: 9px;
  color: #6b7280;
}

/* Team */
.project-team {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.team-avatars {
  display: flex;
  margin-left: 4px;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 9px;
  font-weight: 600;
  margin-left: -8px;
  border: 2px solid white;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar.more {
  background: #e5e7eb;
  color: #6b7280;
}

.acc-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 500;
}

.acc-icon {
  font-size: 11px;
}

/* Actions */
.project-actions {
  display: flex;
  gap: 8px;
}

.project-actions.compact {
  margin-top: 10px;
}

.action-btn {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: white;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.action-btn:hover {
  border-color: #667eea;
}

.action-btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(102,126,234,0.3);
}

/* Status Bar */
.projects-status {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  font-size: 10px;
  color: #6b7280;
}

.sync-indicator {
  color: #059669;
}
</style>
