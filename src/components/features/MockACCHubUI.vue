<script setup lang="ts">
// ACC Hub - Autodesk Construction Cloud Dashboard
</script>

<template>
  <div class="acchub-container">
    <!-- Header -->
    <div class="header">
      <div class="header-left">
        <span class="acc-icon">&#9729;</span>
        <span class="title">ACC Hub</span>
      </div>
      <div class="header-right">
        <div class="project-select">
          <span class="project-label">Hospital Tower - MEP</span>
          <span class="dropdown-icon">&#9662;</span>
        </div>
        <button class="sync-btn">
          <span>&#8635;</span> Sync
        </button>
      </div>
    </div>

    <!-- Stats Cards Grid -->
    <div class="stats-grid">
      <!-- Issues Card -->
      <div class="stat-card issues">
        <div class="card-header">
          <span class="card-icon">&#9888;</span>
          <span class="card-title">Issues</span>
        </div>
        <div class="card-stats">
          <div class="stat-item open">
            <span class="stat-value">24</span>
            <span class="stat-label">Open</span>
          </div>
          <div class="stat-item overdue">
            <span class="stat-value">5</span>
            <span class="stat-label">Overdue</span>
          </div>
          <div class="stat-item closed">
            <span class="stat-value">142</span>
            <span class="stat-label">Closed</span>
          </div>
        </div>
        <div class="card-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 85%"></div>
          </div>
          <span class="progress-text">85% Resolved</span>
        </div>
      </div>

      <!-- RFIs Card -->
      <div class="stat-card rfis">
        <div class="card-header">
          <span class="card-icon">&#128172;</span>
          <span class="card-title">RFIs</span>
        </div>
        <div class="card-stats">
          <div class="stat-item open">
            <span class="stat-value">8</span>
            <span class="stat-label">Open</span>
          </div>
          <div class="stat-item pending">
            <span class="stat-value">3</span>
            <span class="stat-label">Pending</span>
          </div>
          <div class="stat-item answered">
            <span class="stat-value">67</span>
            <span class="stat-label">Answered</span>
          </div>
        </div>
        <div class="card-progress">
          <div class="progress-bar blue">
            <div class="progress-fill" style="width: 89%"></div>
          </div>
          <span class="progress-text">89% Answered</span>
        </div>
      </div>

      <!-- Submittals Card -->
      <div class="stat-card submittals">
        <div class="card-header">
          <span class="card-icon">&#128196;</span>
          <span class="card-title">Submittals</span>
        </div>
        <div class="card-stats">
          <div class="stat-item review">
            <span class="stat-value">12</span>
            <span class="stat-label">In Review</span>
          </div>
          <div class="stat-item approved">
            <span class="stat-value">45</span>
            <span class="stat-label">Approved</span>
          </div>
          <div class="stat-item rejected">
            <span class="stat-value">3</span>
            <span class="stat-label">Rejected</span>
          </div>
        </div>
        <div class="card-progress">
          <div class="progress-bar green">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
          <span class="progress-text">75% Complete</span>
        </div>
      </div>

      <!-- Clashes Card -->
      <div class="stat-card clashes">
        <div class="card-header">
          <span class="card-icon">&#9889;</span>
          <span class="card-title">Clashes</span>
        </div>
        <div class="card-stats">
          <div class="stat-item active">
            <span class="stat-value">156</span>
            <span class="stat-label">Active</span>
          </div>
          <div class="stat-item new">
            <span class="stat-value">23</span>
            <span class="stat-label">New</span>
          </div>
          <div class="stat-item resolved">
            <span class="stat-value">892</span>
            <span class="stat-label">Resolved</span>
          </div>
        </div>
        <div class="card-progress">
          <div class="progress-bar purple">
            <div class="progress-fill" style="width: 85%"></div>
          </div>
          <span class="progress-text">85% Resolved</span>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="activity-section">
      <div class="section-header">
        <span class="section-title">Recent Activity</span>
        <span class="view-all">View All</span>
      </div>
      <div class="activity-list">
        <div class="activity-item">
          <span class="activity-icon issue">&#9888;</span>
          <div class="activity-content">
            <div class="activity-text"><strong>Issue #248</strong> assigned to John Smith</div>
            <div class="activity-time">2 minutes ago</div>
          </div>
        </div>
        <div class="activity-item">
          <span class="activity-icon rfi">&#128172;</span>
          <div class="activity-content">
            <div class="activity-text"><strong>RFI #89</strong> response received from Architect</div>
            <div class="activity-time">15 minutes ago</div>
          </div>
        </div>
        <div class="activity-item">
          <span class="activity-icon submittal">&#128196;</span>
          <div class="activity-content">
            <div class="activity-text"><strong>Submittal #156</strong> approved with comments</div>
            <div class="activity-time">1 hour ago</div>
          </div>
        </div>
        <div class="activity-item">
          <span class="activity-icon clash">&#9889;</span>
          <div class="activity-content">
            <div class="activity-text"><strong>23 new clashes</strong> detected in Model v4.2</div>
            <div class="activity-time">3 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.acchub-container {
  background: #f8fafc;
  min-height: 400px;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.acc-icon {
  font-size: 24px;
  color: #0891b2;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.project-select {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
}

.project-label {
  font-size: 13px;
  font-weight: 500;
  color: #334155;
}

.dropdown-icon {
  color: #64748b;
  font-size: 10px;
}

.sync-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #0891b2, #0e7490);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid #e2e8f0;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.card-icon {
  font-size: 18px;
}

.stat-card.issues .card-icon { color: #f59e0b; }
.stat-card.rfis .card-icon { color: #3b82f6; }
.stat-card.submittals .card-icon { color: #10b981; }
.stat-card.clashes .card-icon { color: #8b5cf6; }

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.card-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
}

.stat-item.open .stat-value { color: #f59e0b; }
.stat-item.overdue .stat-value { color: #ef4444; }
.stat-item.closed .stat-value,
.stat-item.answered .stat-value,
.stat-item.approved .stat-value,
.stat-item.resolved .stat-value { color: #10b981; }
.stat-item.pending .stat-value,
.stat-item.review .stat-value { color: #3b82f6; }
.stat-item.rejected .stat-value { color: #ef4444; }
.stat-item.active .stat-value { color: #f59e0b; }
.stat-item.new .stat-value { color: #8b5cf6; }

.stat-label {
  display: block;
  font-size: 10px;
  color: #64748b;
  margin-top: 2px;
}

.card-progress {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
  border-radius: 3px;
}

.progress-bar.blue .progress-fill {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
}

.progress-bar.green .progress-fill {
  background: linear-gradient(90deg, #10b981, #34d399);
}

.progress-bar.purple .progress-fill {
  background: linear-gradient(90deg, #8b5cf6, #a78bfa);
}

.progress-text {
  font-size: 10px;
  color: #64748b;
  white-space: nowrap;
}

.activity-section {
  background: white;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid #e2e8f0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.view-all {
  font-size: 12px;
  color: #3b82f6;
  cursor: pointer;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  background: #f8fafc;
  border-radius: 8px;
}

.activity-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 14px;
}

.activity-icon.issue {
  background: #fef3c7;
  color: #f59e0b;
}

.activity-icon.rfi {
  background: #dbeafe;
  color: #3b82f6;
}

.activity-icon.submittal {
  background: #d1fae5;
  color: #10b981;
}

.activity-icon.clash {
  background: #ede9fe;
  color: #8b5cf6;
}

.activity-content {
  flex: 1;
}

.activity-text {
  font-size: 12px;
  color: #334155;
}

.activity-time {
  font-size: 10px;
  color: #94a3b8;
  margin-top: 2px;
}

@media (max-width: 500px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
