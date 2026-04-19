<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock Web Tasks UI - Simulates the InvoratecAI Web App task table interface

const { t } = useI18n()
</script>

<template>
  <div class="mock-app-container">
    <!-- Sidebar -->
    <div class="mock-sidebar">
      <div class="sidebar-header">
        <div class="app-logo">
          <img src="/logo.png" alt="InvoratecAI" class="w-8 h-8" />
        </div>
        <div class="app-info">
          <div class="app-name">InvoratecAI</div>
          <div class="app-subtitle">BIM Collaboration</div>
        </div>
      </div>

      <div class="user-profile">
        <div class="user-avatar">JC</div>
        <div class="user-info">
          <div class="user-name">John Chen</div>
          <div class="user-role">Project Manager</div>
        </div>
      </div>

      <div class="nav-section">
        <div class="nav-header">MAIN</div>
        <div class="nav-item">
          <span class="nav-icon">📊</span>
          <span>{{ t('mockUI.dashboard.title') }}</span>
        </div>
        <div class="nav-item active">
          <span class="nav-icon">✓</span>
          <span>{{ t('mockUI.tasks.myTasks') }}</span>
          <span class="nav-badge">12</span>
        </div>
        <div class="nav-item">
          <span class="nav-icon">💼</span>
          <span>{{ t('mockUI.projects.title') }}</span>
        </div>
        <div class="nav-item">
          <span class="nav-icon">✨</span>
          <span>{{ t('mockUI.ai.title') }}</span>
        </div>
      </div>

      <div class="nav-section">
        <div class="nav-header">WORKFLOWS</div>
        <div class="nav-item">
          <span class="nav-icon">🏗️</span>
          <span>Modeling</span>
          <span class="nav-badge">5</span>
        </div>
        <div class="nav-item">
          <span class="nav-icon">📐</span>
          <span>Shop Drawing</span>
          <span class="nav-badge">3</span>
        </div>
        <div class="nav-item">
          <span class="nav-icon">🔄</span>
          <span>Coordination</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="mock-main">
      <!-- Top Bar -->
      <div class="mock-topbar">
        <div class="page-tabs">
          <div class="page-tab active">
            <span class="tab-icon">📋</span>
            MEP Tasks
          </div>
          <div class="page-tab">
            <span class="tab-icon">🔧</span>
            Mechanical
          </div>
          <div class="page-tab">
            <span class="tab-icon">⚡</span>
            Electrical
          </div>
          <div class="page-tab add">+</div>
        </div>
        <div class="topbar-actions">
          <button class="action-btn">
            <span>📥</span> Import
          </button>
          <button class="action-btn">
            <span>📤</span> Export
          </button>
          <button class="action-btn primary">
            <span>+</span> {{ t('mockUI.tasks.newTask') }}
          </button>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="mock-filterbar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" :placeholder="t('mockUI.tasks.search')" value="" readonly />
        </div>
        <div class="filter-chips">
          <div class="filter-chip active">{{ t('mockUI.tasks.allTasks') }}</div>
          <div class="filter-chip">{{ t('mockUI.tasks.doing') }}</div>
          <div class="filter-chip">{{ t('mockUI.tasks.done') }}</div>
        </div>
        <div class="view-toggle">
          <button class="view-btn active">📋 Table</button>
          <button class="view-btn">📊 Kanban</button>
          <button class="view-btn">📅 Gantt</button>
        </div>
      </div>

      <!-- Task Table -->
      <div class="mock-table-container">
        <table class="mock-table">
          <thead>
            <tr>
              <th class="col-checkbox"><input type="checkbox" /></th>
              <th class="col-title">{{ t('mockUI.tasks.title') }}</th>
              <th class="col-status">{{ t('mockUI.tasks.status') }}</th>
              <th class="col-priority">{{ t('mockUI.tasks.priority') }}</th>
              <th class="col-assignee">{{ t('mockUI.tasks.assignee') }}</th>
              <th class="col-date">{{ t('mockUI.tasks.dueDate') }}</th>
              <th class="col-discipline">{{ t('mockUI.coordination.discipline') }}</th>
              <th class="col-progress">{{ t('mockUI.timeline.progress') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="task-title">
                <span class="expand-icon">▶</span>
                HVAC Duct routing - Level 3
              </td>
              <td><span class="status-badge in-progress">{{ t('mockUI.tasks.doing') }}</span></td>
              <td><span class="priority-badge high">🔴 {{ t('mockUI.tasks.high') }}</span></td>
              <td>
                <div class="assignee-chips">
                  <span class="assignee-chip" style="background: #667eea;">JC</span>
                  <span class="assignee-chip" style="background: #10b981;">ML</span>
                </div>
              </td>
              <td class="date-cell">Dec 20, 2025</td>
              <td><span class="discipline-chip mech">🔧 Mechanical</span></td>
              <td>
                <div class="progress-cell">
                  <div class="progress-bar"><div class="progress-fill" style="width: 65%"></div></div>
                  <span>65%</span>
                </div>
              </td>
            </tr>
            <tr class="child-row">
              <td><input type="checkbox" /></td>
              <td class="task-title indent-1">└ Supply duct sizing calculation</td>
              <td><span class="status-badge completed">{{ t('mockUI.tasks.done') }}</span></td>
              <td><span class="priority-badge medium">🟡 {{ t('mockUI.tasks.medium') }}</span></td>
              <td>
                <div class="assignee-chips">
                  <span class="assignee-chip" style="background: #667eea;">JC</span>
                </div>
              </td>
              <td class="date-cell">Dec 15, 2025</td>
              <td><span class="discipline-chip mech">🔧 Mechanical</span></td>
              <td>
                <div class="progress-cell">
                  <div class="progress-bar"><div class="progress-fill" style="width: 100%"></div></div>
                  <span>100%</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="task-title">Electrical panel schedule update</td>
              <td><span class="status-badge pending">{{ t('mockUI.coordination.pending') }}</span></td>
              <td><span class="priority-badge high">🔴 {{ t('mockUI.tasks.high') }}</span></td>
              <td>
                <div class="assignee-chips">
                  <span class="assignee-chip" style="background: #f59e0b;">SW</span>
                </div>
              </td>
              <td class="date-cell">Dec 22, 2025</td>
              <td><span class="discipline-chip elec">⚡ Electrical</span></td>
              <td>
                <div class="progress-cell">
                  <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
                  <span>0%</span>
                </div>
              </td>
            </tr>
            <tr class="selected">
              <td><input type="checkbox" checked /></td>
              <td class="task-title">Plumbing riser clash resolution</td>
              <td><span class="status-badge review">{{ t('mockUI.tasks.review') }}</span></td>
              <td><span class="priority-badge medium">🟡 {{ t('mockUI.tasks.medium') }}</span></td>
              <td>
                <div class="assignee-chips">
                  <span class="assignee-chip" style="background: #06b6d4;">AK</span>
                </div>
              </td>
              <td class="date-cell">Dec 18, 2025</td>
              <td><span class="discipline-chip plumb">💧 Plumbing</span></td>
              <td>
                <div class="progress-cell">
                  <div class="progress-bar"><div class="progress-fill" style="width: 90%"></div></div>
                  <span>90%</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="task-title">Fire sprinkler head placement</td>
              <td><span class="status-badge in-progress">{{ t('mockUI.tasks.doing') }}</span></td>
              <td><span class="priority-badge low">🟢 {{ t('mockUI.tasks.low') }}</span></td>
              <td>
                <div class="assignee-chips">
                  <span class="assignee-chip" style="background: #8b5cf6;">TR</span>
                </div>
              </td>
              <td class="date-cell">Dec 25, 2025</td>
              <td><span class="discipline-chip fp">🔥 Fire Protection</span></td>
              <td>
                <div class="progress-cell">
                  <div class="progress-bar"><div class="progress-fill" style="width: 40%"></div></div>
                  <span>40%</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-app-container {
  display: flex;
  height: 100%;
  min-height: 360px;
  background: #f3f4f6;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 12px;
}

/* Sidebar */
.mock-sidebar {
  width: 200px;
  background: #1f2937;
  color: #9ca3af;
  flex-shrink: 0;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 14px;
  border-bottom: 1px solid #374151;
}

.app-logo {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-logo img {
  width: 24px;
  height: 24px;
}

.app-name {
  font-size: 13px;
  font-weight: 600;
  color: white;
}

.app-subtitle {
  font-size: 10px;
  color: #9ca3af;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  background: #374151;
  margin: 10px;
  border-radius: 6px;
}

.user-avatar {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: 600;
}

.user-name {
  font-size: 11px;
  font-weight: 600;
  color: white;
}

.user-role {
  font-size: 9px;
  color: #9ca3af;
}

.nav-section {
  padding: 8px 0;
}

.nav-header {
  padding: 8px 14px 4px;
  font-size: 9px;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 0.5px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 11px;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.15s;
}

.nav-item:hover {
  background: #374151;
  color: white;
}

.nav-item.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.nav-icon {
  width: 16px;
  text-align: center;
  font-size: 12px;
}

.nav-badge {
  margin-left: auto;
  background: #667eea;
  color: white;
  font-size: 9px;
  padding: 1px 6px;
  border-radius: 8px;
}

.nav-item.active .nav-badge {
  background: rgba(255,255,255,0.3);
}

/* Main Content */
.mock-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

.mock-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  background: #fafafa;
}

.page-tabs {
  display: flex;
  gap: 4px;
}

.page-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 11px;
  color: #6b7280;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
}

.page-tab.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.page-tab.add {
  padding: 6px 10px;
  color: #9ca3af;
}

.tab-icon {
  font-size: 12px;
}

.topbar-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: 11px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: white;
  cursor: pointer;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
}

/* Filter Bar */
.mock-filterbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: #f3f4f6;
  border-radius: 6px;
  width: 180px;
}

.search-box input {
  border: none;
  background: transparent;
  font-size: 11px;
  width: 100%;
  outline: none;
}

.search-icon {
  font-size: 12px;
  color: #9ca3af;
}

.filter-chips {
  display: flex;
  gap: 6px;
}

.filter-chip {
  padding: 4px 10px;
  font-size: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  cursor: pointer;
}

.filter-chip.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.view-toggle {
  margin-left: auto;
  display: flex;
  gap: 4px;
}

.view-btn {
  padding: 4px 8px;
  font-size: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.view-btn.active {
  background: #f3f4f6;
  border-color: #d1d5db;
}

/* Table */
.mock-table-container {
  flex: 1;
  overflow: auto;
}

.mock-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}

.mock-table th {
  text-align: left;
  padding: 10px 12px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
}

.mock-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
}

.mock-table tr:hover {
  background: #f9fafb;
}

.mock-table tr.selected {
  background: #eff6ff;
}

.mock-table tr.child-row {
  background: #fafafa;
}

.col-checkbox {
  width: 40px;
}

.col-title {
  min-width: 200px;
}

.col-status, .col-priority {
  width: 100px;
}

.col-assignee {
  width: 100px;
}

.col-date {
  width: 100px;
}

.col-discipline {
  width: 120px;
}

.col-progress {
  width: 120px;
}

.task-title {
  font-weight: 500;
  color: #1f2937;
}

.task-title.indent-1 {
  padding-left: 20px;
  color: #6b7280;
}

.expand-icon {
  font-size: 8px;
  margin-right: 6px;
  color: #9ca3af;
}

.status-badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 600;
}

.status-badge.in-progress { background: #fef3c7; color: #92400e; }
.status-badge.completed { background: #d1fae5; color: #065f46; }
.status-badge.pending { background: #f3f4f6; color: #6b7280; }
.status-badge.review { background: #dbeafe; color: #1e40af; }

.priority-badge {
  font-size: 10px;
}

.assignee-chips {
  display: flex;
  gap: 4px;
}

.assignee-chip {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 9px;
  font-weight: 600;
}

.date-cell {
  color: #6b7280;
}

.discipline-chip {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 10px;
}

.discipline-chip.mech { background: #fef3c7; color: #92400e; }
.discipline-chip.elec { background: #fce7f3; color: #9d174d; }
.discipline-chip.plumb { background: #dbeafe; color: #1e40af; }
.discipline-chip.fp { background: #fee2e2; color: #991b1b; }

.progress-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-bar {
  flex: 1;
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
</style>
