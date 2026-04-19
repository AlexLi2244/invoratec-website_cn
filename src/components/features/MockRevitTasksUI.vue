<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock Revit Tasks UI - Simulates the InvoratecAI Revit Add-in task panel

const { t } = useI18n()
</script>

<template>
  <div class="mock-revit-container">
    <!-- Revit-style Window Frame -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">📋</span>
        <span>InvoratecAI - {{ t('mockUI.tasks.myTasks') }}</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Panel Tabs -->
    <div class="panel-tabs">
      <div class="tab active">
        <span class="tab-icon">📋</span>
        {{ t('mockUI.tasks.myTasks') }}
      </div>
      <div class="tab">
        <span class="tab-icon">📊</span>
        {{ t('mockUI.dashboard.title') }}
      </div>
      <div class="tab">
        <span class="tab-icon">✨</span>
        {{ t('mockUI.ai.title') }}
      </div>
      <div class="tab">
        <span class="tab-icon">🔧</span>
        {{ t('mockUI.tools.title') }}
      </div>
    </div>

    <!-- Main Content -->
    <div class="panel-content">
      <!-- Page Selector -->
      <div class="page-selector">
        <div class="current-page">
          <span class="page-icon">📋</span>
          <span>MEP Tasks</span>
          <svg viewBox="0 0 24 24" class="dropdown-icon"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
        </div>
        <button class="new-task-btn">+ {{ t('mockUI.tasks.newTask') }}</button>
      </div>

      <!-- Filter Bar -->
      <div class="filter-bar">
        <div class="search-input">
          <span class="search-icon">🔍</span>
          <input type="text" :placeholder="t('mockUI.tasks.search')" readonly />
        </div>
        <div class="filter-buttons">
          <button class="filter-btn active">All</button>
          <button class="filter-btn">My Tasks</button>
          <button class="filter-btn">In Progress</button>
        </div>
      </div>

      <!-- Task Cards -->
      <div class="task-cards">
        <div class="task-card active">
          <div class="task-header">
            <div class="task-title-row">
              <input type="checkbox" class="task-checkbox" />
              <span class="task-title">HVAC Duct routing - Level 3</span>
            </div>
            <span class="task-status in-progress">In Progress</span>
          </div>

          <div class="task-properties">
            <div class="prop-row">
              <span class="prop-icon">👤</span>
              <span class="prop-label">Assignee:</span>
              <div class="assignee-chip">
                <span class="avatar" style="background: #667eea;">JC</span>
                John Chen
              </div>
            </div>
            <div class="prop-row">
              <span class="prop-icon">📅</span>
              <span class="prop-label">Due:</span>
              <span class="prop-value">Dec 20, 2025</span>
            </div>
            <div class="prop-row">
              <span class="prop-icon">🎯</span>
              <span class="prop-label">Priority:</span>
              <span class="priority-badge high">High</span>
            </div>
          </div>

          <!-- Revit Elements Section -->
          <div class="revit-elements">
            <div class="section-header">
              <span class="section-icon">🏗️</span>
              <span>Linked Revit Elements (3)</span>
              <button class="link-btn">+ Link</button>
            </div>
            <div class="elements-list">
              <div class="element-item">
                <span class="element-cat">Duct</span>
                <span class="element-id">ID: 2847563</span>
                <button class="element-action">👁️</button>
              </div>
              <div class="element-item">
                <span class="element-cat">Duct</span>
                <span class="element-id">ID: 2847564</span>
                <button class="element-action">👁️</button>
              </div>
              <div class="element-item">
                <span class="element-cat">Fitting</span>
                <span class="element-id">ID: 2847565</span>
                <button class="element-action">👁️</button>
              </div>
            </div>
          </div>

          <!-- Time Tracking -->
          <div class="time-tracking">
            <div class="section-header">
              <span class="section-icon">⏱️</span>
              <span>Time Tracking</span>
            </div>
            <div class="time-display">
              <div class="time-item">
                <span class="time-label">Tracked</span>
                <span class="time-value">4h 30m</span>
              </div>
              <div class="time-item">
                <span class="time-label">Manual</span>
                <span class="time-value">2h 00m</span>
              </div>
              <div class="time-item total">
                <span class="time-label">Total</span>
                <span class="time-value">6h 30m</span>
              </div>
            </div>
            <div class="timer-controls">
              <button class="timer-btn start">▶ Start Timer</button>
              <button class="timer-btn manual">+ Add Manual</button>
            </div>
          </div>

          <!-- Progress -->
          <div class="progress-section">
            <div class="progress-header">
              <span>Progress</span>
              <span class="progress-value">65%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 65%;"></div>
            </div>
          </div>
        </div>

        <!-- Second Task Card -->
        <div class="task-card">
          <div class="task-header">
            <div class="task-title-row">
              <input type="checkbox" class="task-checkbox" />
              <span class="task-title">Electrical panel schedule</span>
            </div>
            <span class="task-status pending">Pending</span>
          </div>
          <div class="task-properties compact">
            <div class="prop-row">
              <span class="prop-icon">👤</span>
              <div class="assignee-chip">
                <span class="avatar" style="background: #f59e0b;">SW</span>
                Sarah Wong
              </div>
              <span class="prop-icon ml">📅</span>
              <span class="prop-value">Dec 22</span>
            </div>
          </div>
        </div>

        <!-- Third Task Card -->
        <div class="task-card">
          <div class="task-header">
            <div class="task-title-row">
              <input type="checkbox" class="task-checkbox" />
              <span class="task-title">Plumbing riser coordination</span>
            </div>
            <span class="task-status review">Review</span>
          </div>
          <div class="task-properties compact">
            <div class="prop-row">
              <span class="prop-icon">👤</span>
              <div class="assignee-chip">
                <span class="avatar" style="background: #06b6d4;">AK</span>
                Alex Kim
              </div>
              <span class="prop-icon ml">📅</span>
              <span class="prop-value">Dec 18</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Sync Status -->
    <div class="sync-status">
      <div class="sync-indicator online">
        <span class="sync-dot"></span>
        <span>Synced with cloud.invoratec.com</span>
      </div>
      <span class="last-sync">Last sync: 2 min ago</span>
    </div>
  </div>
</template>

<style scoped>
.mock-revit-container {
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

/* Panel Content */
.panel-content {
  flex: 1;
  background: white;
  overflow-y: auto;
  padding: 10px;
}

.page-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.current-page {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.page-icon {
  font-size: 14px;
}

.dropdown-icon {
  width: 12px;
  height: 12px;
  color: #888;
}

.new-task-btn {
  padding: 6px 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 11px;
  cursor: pointer;
}

/* Filter Bar */
.filter-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.search-input {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-input input {
  border: none;
  background: transparent;
  font-size: 11px;
  width: 100%;
  outline: none;
}

.search-icon {
  font-size: 12px;
  color: #888;
}

.filter-buttons {
  display: flex;
  gap: 4px;
}

.filter-btn {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  font-size: 10px;
  cursor: pointer;
}

.filter-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

/* Task Cards */
.task-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.task-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 10px;
}

.task-card.active {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.task-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-checkbox {
  width: 14px;
  height: 14px;
}

.task-title {
  font-weight: 600;
  color: #333;
  font-size: 12px;
}

.task-status {
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 600;
}

.task-status.in-progress { background: #fff3cd; color: #856404; }
.task-status.pending { background: #f0f0f0; color: #666; }
.task-status.review { background: #cce5ff; color: #004085; }
.task-status.completed { background: #d4edda; color: #155724; }

/* Properties */
.task-properties {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
}

.task-properties.compact {
  margin-bottom: 0;
}

.prop-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
}

.prop-icon {
  font-size: 12px;
}

.prop-icon.ml {
  margin-left: 12px;
}

.prop-label {
  color: #666;
}

.prop-value {
  color: #333;
}

.assignee-chip {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px 2px 2px;
  background: #f5f5f5;
  border-radius: 12px;
}

.avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 8px;
  font-weight: 600;
}

.priority-badge {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 600;
}

.priority-badge.high { background: #fee2e2; color: #991b1b; }
.priority-badge.medium { background: #fef3c7; color: #92400e; }
.priority-badge.low { background: #d1fae5; color: #065f46; }

/* Revit Elements */
.revit-elements {
  background: #f8f9fa;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  font-size: 10px;
  font-weight: 600;
  color: #333;
}

.section-icon {
  font-size: 12px;
}

.link-btn {
  margin-left: auto;
  padding: 2px 8px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 9px;
  cursor: pointer;
}

.elements-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.element-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 6px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  font-size: 9px;
}

.element-cat {
  padding: 2px 6px;
  background: #e0e7ff;
  color: #4f46e5;
  border-radius: 2px;
  font-weight: 500;
}

.element-id {
  flex: 1;
  color: #666;
  font-family: monospace;
}

.element-action {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
}

/* Time Tracking */
.time-tracking {
  background: #f0fdf4;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
}

.time-display {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}

.time-item {
  text-align: center;
}

.time-item.total {
  margin-left: auto;
  padding-left: 12px;
  border-left: 1px solid #bbf7d0;
}

.time-label {
  display: block;
  font-size: 9px;
  color: #666;
}

.time-value {
  font-size: 12px;
  font-weight: 600;
  color: #059669;
}

.timer-controls {
  display: flex;
  gap: 8px;
}

.timer-btn {
  flex: 1;
  padding: 6px;
  border: 1px solid #bbf7d0;
  border-radius: 4px;
  background: white;
  font-size: 10px;
  cursor: pointer;
}

.timer-btn.start {
  background: #059669;
  color: white;
  border: none;
}

/* Progress */
.progress-section {
  padding-top: 8px;
  border-top: 1px solid #e0e0e0;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 10px;
}

.progress-value {
  font-weight: 600;
  color: #667eea;
}

.progress-bar {
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 3px;
}

/* Sync Status */
.sync-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  font-size: 10px;
  color: #666;
}

.sync-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
}

.sync-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
}

.sync-indicator.online .sync-dot {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.last-sync {
  color: #999;
}
</style>
