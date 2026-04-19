<script setup lang="ts">
// BIM QA/QC Mock - Revit Add-in quality assurance panel
</script>

<template>
  <div class="mock-container">
    <!-- Revit-style Title Bar -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">✅</span>
        <span>InvoratecAI - QA/QC Check</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Summary Header -->
    <div class="summary-header">
      <div class="score-ring">
        <svg viewBox="0 0 36 36" class="circular-chart">
          <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <path class="circle" stroke-dasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
        </svg>
        <div class="score-text">78%</div>
      </div>
      <div class="summary-info">
        <div class="summary-title">Model Quality Score</div>
        <div class="summary-status">12 issues found • 3 critical</div>
      </div>
      <button class="run-check-btn">🔄 Re-run Check</button>
    </div>

    <!-- Check Categories -->
    <div class="check-list">
      <!-- Category: Naming -->
      <div class="check-category">
        <div class="category-header">
          <div class="category-status pass"></div>
          <span class="category-name">Naming Standards</span>
          <span class="category-score pass">✓ Pass</span>
        </div>
        <div class="category-details">
          <div class="detail-row">156 elements checked</div>
        </div>
      </div>

      <!-- Category: Parameters -->
      <div class="check-category expanded">
        <div class="category-header">
          <div class="category-status fail"></div>
          <span class="category-name">Required Parameters</span>
          <span class="category-score fail">8 issues</span>
        </div>
        <div class="category-details">
          <div class="issue-item">
            <span class="issue-icon">⚠️</span>
            <span class="issue-text">Missing "System Type" - 5 ducts</span>
            <button class="fix-btn">Fix</button>
          </div>
          <div class="issue-item">
            <span class="issue-icon">⚠️</span>
            <span class="issue-text">Empty "Mark" value - 3 pipes</span>
            <button class="fix-btn">Fix</button>
          </div>
        </div>
      </div>

      <!-- Category: Connections -->
      <div class="check-category">
        <div class="category-header">
          <div class="category-status warn"></div>
          <span class="category-name">MEP Connections</span>
          <span class="category-score warn">3 warnings</span>
        </div>
        <div class="category-details">
          <div class="issue-item minor">
            <span class="issue-icon">ℹ️</span>
            <span class="issue-text">Unconnected duct ends - 3</span>
            <button class="view-btn">View</button>
          </div>
        </div>
      </div>

      <!-- Category: Levels -->
      <div class="check-category">
        <div class="category-header">
          <div class="category-status pass"></div>
          <span class="category-name">Level Assignments</span>
          <span class="category-score pass">✓ Pass</span>
        </div>
      </div>

      <!-- Category: Clashes -->
      <div class="check-category">
        <div class="category-header">
          <div class="category-status fail"></div>
          <span class="category-name">Clash Detection</span>
          <span class="category-score fail">1 critical</span>
        </div>
        <div class="category-details">
          <div class="issue-item critical">
            <span class="issue-icon">🔴</span>
            <span class="issue-text">Duct vs Beam collision</span>
            <button class="view-btn">View</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="action-bar">
      <button class="action-btn secondary">📊 Export Report</button>
      <button class="action-btn primary">🔧 Auto-Fix All (6 issues)</button>
    </div>
  </div>
</template>

<style scoped>
.mock-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 320px;
  background: #f5f5f5;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 11px;
}

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

.window-icon { font-size: 14px; }

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

.titlebar-btn:hover { background: #555; }
.titlebar-btn.close:hover { background: #e81123; color: white; }

.summary-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.score-ring {
  position: relative;
  width: 50px;
  height: 50px;
}

.circular-chart {
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 3;
}

.circle {
  fill: none;
  stroke: #667eea;
  stroke-width: 3;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.score-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 700;
  color: #667eea;
}

.summary-info {
  flex: 1;
}

.summary-title {
  font-weight: 600;
  font-size: 12px;
  color: #1f2937;
}

.summary-status {
  font-size: 10px;
  color: #6b7280;
}

.run-check-btn {
  padding: 6px 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 10px;
  cursor: pointer;
}

.check-list {
  flex: 1;
  overflow: auto;
  padding: 8px;
}

.check-category {
  background: white;
  border-radius: 6px;
  margin-bottom: 6px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  cursor: pointer;
}

.category-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.category-status.pass { background: #22c55e; }
.category-status.fail { background: #ef4444; }
.category-status.warn { background: #f59e0b; }

.category-name {
  flex: 1;
  font-weight: 500;
  color: #1f2937;
}

.category-score {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 9px;
  font-weight: 600;
}

.category-score.pass { background: #d1fae5; color: #059669; }
.category-score.fail { background: #fee2e2; color: #dc2626; }
.category-score.warn { background: #fef3c7; color: #d97706; }

.category-details {
  padding: 0 10px 10px;
  border-top: 1px solid #f3f4f6;
}

.detail-row {
  font-size: 10px;
  color: #6b7280;
  padding-top: 6px;
}

.issue-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  background: #fef2f2;
  border-radius: 4px;
  margin-top: 6px;
}

.issue-item.minor {
  background: #fffbeb;
}

.issue-item.critical {
  background: #fef2f2;
  border: 1px solid #fecaca;
}

.issue-icon { font-size: 12px; }

.issue-text {
  flex: 1;
  font-size: 10px;
  color: #374151;
}

.fix-btn, .view-btn {
  padding: 3px 8px;
  border: none;
  border-radius: 3px;
  font-size: 9px;
  cursor: pointer;
}

.fix-btn {
  background: #667eea;
  color: white;
}

.view-btn {
  background: #e5e7eb;
  color: #374151;
}

.action-bar {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.action-btn {
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
}

.action-btn.secondary {
  background: white;
  border: 1px solid #e5e7eb;
  color: #374151;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  color: white;
}
</style>
