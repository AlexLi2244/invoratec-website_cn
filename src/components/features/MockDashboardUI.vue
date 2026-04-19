<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock Dashboard UI - Simulates the project dashboard view

const { t } = useI18n()
</script>

<template>
  <div class="mock-dashboard-container">
    <!-- Header -->
    <div class="dashboard-header">
      <div class="header-left">
        <h3 class="header-title">📊 {{ t('mockUI.dashboard.title') }}</h3>
        <div class="project-name">{{ t('mockUI.dashboard.projectName') }}</div>
      </div>
      <div class="header-right">
        <div class="date-range">
          <span class="date-label">{{ t('mockUI.dashboard.period') }}:</span>
          <span class="date-value">Dec 2025</span>
        </div>
        <button class="refresh-btn">🔄 {{ t('mockUI.dashboard.refresh') }}</button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon tasks">📋</div>
        <div class="stat-content">
          <div class="stat-value">156</div>
          <div class="stat-label">{{ t('mockUI.dashboard.totalTasks') }}</div>
        </div>
        <div class="stat-trend up">↑ 12%</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon progress">⏳</div>
        <div class="stat-content">
          <div class="stat-value">42</div>
          <div class="stat-label">{{ t('mockUI.dashboard.inProgress') }}</div>
        </div>
        <div class="stat-trend">—</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon completed">✓</div>
        <div class="stat-content">
          <div class="stat-value">89</div>
          <div class="stat-label">{{ t('mockUI.dashboard.completed') }}</div>
        </div>
        <div class="stat-trend up">↑ 8%</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon budget">💰</div>
        <div class="stat-content">
          <div class="stat-value">$124K</div>
          <div class="stat-label">{{ t('mockUI.dashboard.budgetUsed') }}</div>
        </div>
        <div class="stat-subtext">of $180K (69%)</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="dashboard-main">
      <!-- Left Column -->
      <div class="dashboard-col">
        <!-- Team Performance -->
        <div class="dashboard-card">
          <div class="card-header">
            <span class="card-title">👥 {{ t('mockUI.dashboard.teamActivity') }}</span>
            <button class="card-action">{{ t('mockUI.common.viewAll') }}</button>
          </div>
          <div class="team-list">
            <div class="team-member">
              <div class="member-avatar" style="background: #667eea;">JC</div>
              <div class="member-info">
                <div class="member-name">John Chen</div>
                <div class="member-role">Lead Engineer</div>
              </div>
              <div class="member-stats">
                <div class="stat-mini">
                  <span class="mini-label">Tasks</span>
                  <span class="mini-value">24</span>
                </div>
                <div class="stat-mini">
                  <span class="mini-label">Hours</span>
                  <span class="mini-value">86h</span>
                </div>
              </div>
              <div class="member-progress">
                <div class="progress-bar-mini">
                  <div class="progress-fill-mini" style="width: 78%;"></div>
                </div>
                <span class="progress-text">78%</span>
              </div>
            </div>

            <div class="team-member">
              <div class="member-avatar" style="background: #f59e0b;">SW</div>
              <div class="member-info">
                <div class="member-name">Sarah Wong</div>
                <div class="member-role">Electrical</div>
              </div>
              <div class="member-stats">
                <div class="stat-mini">
                  <span class="mini-label">Tasks</span>
                  <span class="mini-value">18</span>
                </div>
                <div class="stat-mini">
                  <span class="mini-label">Hours</span>
                  <span class="mini-value">62h</span>
                </div>
              </div>
              <div class="member-progress">
                <div class="progress-bar-mini">
                  <div class="progress-fill-mini" style="width: 65%;"></div>
                </div>
                <span class="progress-text">65%</span>
              </div>
            </div>

            <div class="team-member">
              <div class="member-avatar" style="background: #06b6d4;">AK</div>
              <div class="member-info">
                <div class="member-name">Alex Kim</div>
                <div class="member-role">Plumbing</div>
              </div>
              <div class="member-stats">
                <div class="stat-mini">
                  <span class="mini-label">Tasks</span>
                  <span class="mini-value">15</span>
                </div>
                <div class="stat-mini">
                  <span class="mini-label">Hours</span>
                  <span class="mini-value">54h</span>
                </div>
              </div>
              <div class="member-progress">
                <div class="progress-bar-mini">
                  <div class="progress-fill-mini" style="width: 82%;"></div>
                </div>
                <span class="progress-text">82%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="dashboard-col">
        <!-- Milestones -->
        <div class="dashboard-card">
          <div class="card-header">
            <span class="card-title">🎯 {{ t('mockUI.dashboard.upcomingDeadlines') }}</span>
          </div>
          <div class="milestones-list">
            <div class="milestone-item at-risk">
              <div class="milestone-status"></div>
              <div class="milestone-info">
                <div class="milestone-name">MEP Model Completion</div>
                <div class="milestone-date">Dec 22, 2025</div>
              </div>
              <div class="milestone-badge at-risk">At Risk</div>
            </div>

            <div class="milestone-item on-track">
              <div class="milestone-status"></div>
              <div class="milestone-info">
                <div class="milestone-name">Coordination Review</div>
                <div class="milestone-date">Dec 28, 2025</div>
              </div>
              <div class="milestone-badge on-track">On Track</div>
            </div>

            <div class="milestone-item pending">
              <div class="milestone-status"></div>
              <div class="milestone-info">
                <div class="milestone-name">Shop Drawing Submission</div>
                <div class="milestone-date">Jan 5, 2026</div>
              </div>
              <div class="milestone-badge pending">Pending</div>
            </div>
          </div>
        </div>

        <!-- Budget Breakdown -->
        <div class="dashboard-card">
          <div class="card-header">
            <span class="card-title">💵 Budget by Discipline</span>
          </div>
          <div class="budget-bars">
            <div class="budget-item">
              <div class="budget-label">
                <span class="budget-name">🔧 Mechanical</span>
                <span class="budget-amount">$52,400</span>
              </div>
              <div class="budget-bar">
                <div class="budget-fill mech" style="width: 72%;"></div>
              </div>
            </div>

            <div class="budget-item">
              <div class="budget-label">
                <span class="budget-name">⚡ Electrical</span>
                <span class="budget-amount">$38,200</span>
              </div>
              <div class="budget-bar">
                <div class="budget-fill elec" style="width: 58%;"></div>
              </div>
            </div>

            <div class="budget-item">
              <div class="budget-label">
                <span class="budget-name">💧 Plumbing</span>
                <span class="budget-amount">$28,600</span>
              </div>
              <div class="budget-bar">
                <div class="budget-fill plumb" style="width: 45%;"></div>
              </div>
            </div>

            <div class="budget-item">
              <div class="budget-label">
                <span class="budget-name">🔥 Fire Protection</span>
                <span class="budget-amount">$4,800</span>
              </div>
              <div class="budget-bar">
                <div class="budget-fill fp" style="width: 20%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-dashboard-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 380px;
  background: #f3f4f6;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 11px;
}

/* Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.header-title {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.project-name {
  font-size: 11px;
  color: #6b7280;
  margin-top: 2px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.date-range {
  font-size: 11px;
}

.date-label {
  color: #6b7280;
}

.date-value {
  color: #1f2937;
  font-weight: 500;
}

.refresh-btn {
  padding: 6px 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 10px;
  cursor: pointer;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 12px 16px;
}

.stat-card {
  background: white;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.stat-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.stat-icon.tasks { background: #e0e7ff; }
.stat-icon.progress { background: #fef3c7; }
.stat-icon.completed { background: #d1fae5; }
.stat-icon.budget { background: #fce7f3; }

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
}

.stat-label {
  font-size: 10px;
  color: #6b7280;
}

.stat-trend {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
}

.stat-trend.up {
  background: #d1fae5;
  color: #059669;
}

.stat-subtext {
  font-size: 9px;
  color: #9ca3af;
}

/* Main Content */
.dashboard-main {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0 16px 16px;
  overflow: hidden;
}

.dashboard-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
}

.dashboard-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid #f3f4f6;
}

.card-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 11px;
}

.card-action {
  font-size: 9px;
  color: #667eea;
  background: none;
  border: none;
  cursor: pointer;
}

/* Team List */
.team-list {
  padding: 8px;
}

.team-member {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 4px;
}

.team-member:hover {
  background: #f9fafb;
}

.member-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  font-weight: 600;
}

.member-info {
  flex: 1;
}

.member-name {
  font-weight: 600;
  color: #1f2937;
  font-size: 11px;
}

.member-role {
  font-size: 9px;
  color: #6b7280;
}

.member-stats {
  display: flex;
  gap: 12px;
}

.stat-mini {
  text-align: center;
}

.mini-label {
  display: block;
  font-size: 8px;
  color: #9ca3af;
}

.mini-value {
  font-size: 11px;
  font-weight: 600;
  color: #1f2937;
}

.member-progress {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 70px;
}

.progress-bar-mini {
  flex: 1;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
}

.progress-fill-mini {
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
}

.progress-text {
  font-size: 9px;
  font-weight: 600;
  color: #667eea;
}

/* Milestones */
.milestones-list {
  padding: 8px;
}

.milestone-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 6px;
  border: 1px solid #e5e7eb;
}

.milestone-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.milestone-item.at-risk .milestone-status { background: #ef4444; }
.milestone-item.on-track .milestone-status { background: #22c55e; }
.milestone-item.pending .milestone-status { background: #9ca3af; }

.milestone-info {
  flex: 1;
}

.milestone-name {
  font-weight: 500;
  color: #1f2937;
  font-size: 11px;
}

.milestone-date {
  font-size: 9px;
  color: #6b7280;
}

.milestone-badge {
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 9px;
  font-weight: 600;
}

.milestone-badge.at-risk { background: #fee2e2; color: #dc2626; }
.milestone-badge.on-track { background: #d1fae5; color: #059669; }
.milestone-badge.pending { background: #f3f4f6; color: #6b7280; }

/* Budget */
.budget-bars {
  padding: 8px 12px;
}

.budget-item {
  margin-bottom: 10px;
}

.budget-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.budget-name {
  font-size: 10px;
  color: #374151;
}

.budget-amount {
  font-size: 10px;
  font-weight: 600;
  color: #1f2937;
}

.budget-bar {
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.budget-fill {
  height: 100%;
  border-radius: 3px;
}

.budget-fill.mech { background: #f59e0b; }
.budget-fill.elec { background: #ec4899; }
.budget-fill.plumb { background: #3b82f6; }
.budget-fill.fp { background: #ef4444; }
</style>
