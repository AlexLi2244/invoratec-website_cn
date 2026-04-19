<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock Coordination/Clash UI - Simulates ACC coordination clash management

const { t } = useI18n()
</script>

<template>
  <div class="mock-coordination-container">
    <!-- Header -->
    <div class="coord-header">
      <div class="header-left">
        <h3 class="header-title">🔍 {{ t('mockUI.coordination.title') }}</h3>
        <div class="sync-badge">
          <span class="sync-icon">☁️</span>
          ACC Synced
        </div>
      </div>
      <div class="header-stats">
        <div class="stat-item critical">
          <span class="stat-num">12</span>
          <span class="stat-label">Critical</span>
        </div>
        <div class="stat-item major">
          <span class="stat-num">28</span>
          <span class="stat-label">Major</span>
        </div>
        <div class="stat-item minor">
          <span class="stat-num">45</span>
          <span class="stat-label">Minor</span>
        </div>
        <div class="stat-item resolved">
          <span class="stat-num">156</span>
          <span class="stat-label">{{ t('mockUI.coordination.resolved') }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="coord-main">
      <!-- Clash List -->
      <div class="clash-list">
        <div class="list-header">
          <span class="list-title">{{ t('mockUI.coordination.clashes') }}</span>
          <div class="filter-dropdown">
            <span>All Disciplines</span>
            <svg viewBox="0 0 24 24" class="w-3 h-3"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
          </div>
        </div>

        <div class="clash-items">
          <div class="clash-item critical selected">
            <div class="clash-severity"></div>
            <div class="clash-content">
              <div class="clash-title">Duct vs Beam Intersection</div>
              <div class="clash-meta">
                <span class="clash-disciplines">🔧 HVAC × 🏗️ Struct</span>
                <span class="clash-location">Level 3, Grid C-4</span>
              </div>
              <div class="clash-ids">
                <span class="element-id">ID: 2847563</span>
                <span class="element-id">ID: 1923847</span>
              </div>
            </div>
            <div class="clash-status">
              <span class="status-tag pending">Pending</span>
            </div>
          </div>

          <div class="clash-item major">
            <div class="clash-severity"></div>
            <div class="clash-content">
              <div class="clash-title">Pipe vs Cable Tray Conflict</div>
              <div class="clash-meta">
                <span class="clash-disciplines">💧 Plumb × ⚡ Elec</span>
                <span class="clash-location">Level 2, Grid B-3</span>
              </div>
              <div class="clash-ids">
                <span class="element-id">ID: 3847291</span>
                <span class="element-id">ID: 2938472</span>
              </div>
            </div>
            <div class="clash-status">
              <span class="status-tag in-review">In Review</span>
            </div>
          </div>

          <div class="clash-item critical">
            <div class="clash-severity"></div>
            <div class="clash-content">
              <div class="clash-title">Sprinkler vs Lighting Fixture</div>
              <div class="clash-meta">
                <span class="clash-disciplines">🔥 FP × ⚡ Elec</span>
                <span class="clash-location">Level 4, Grid A-2</span>
              </div>
              <div class="clash-ids">
                <span class="element-id">ID: 4928374</span>
                <span class="element-id">ID: 3847562</span>
              </div>
            </div>
            <div class="clash-status">
              <span class="status-tag pending">Pending</span>
            </div>
          </div>

          <div class="clash-item minor">
            <div class="clash-severity"></div>
            <div class="clash-content">
              <div class="clash-title">Minor Clearance Issue</div>
              <div class="clash-meta">
                <span class="clash-disciplines">🔧 HVAC × 💧 Plumb</span>
                <span class="clash-location">Level 1, Grid D-5</span>
              </div>
            </div>
            <div class="clash-status">
              <span class="status-tag assigned">Assigned</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Clash Viewer -->
      <div class="clash-viewer">
        <div class="viewer-toolbar">
          <div class="toolbar-left">
            <button class="tool-btn active">🔍 Clash View</button>
            <button class="tool-btn">📐 Section</button>
            <button class="tool-btn">📏 Measure</button>
          </div>
          <div class="toolbar-right">
            <span class="viewer-label">Clash #CLH-2847</span>
          </div>
        </div>

        <div class="viewer-canvas">
          <!-- Mock 3D Clash View -->
          <div class="clash-3d">
            <div class="element element-1">
              <div class="element-label">Rectangular Duct</div>
            </div>
            <div class="element element-2">
              <div class="element-label">W12×26 Beam</div>
            </div>
            <div class="clash-point">
              <div class="clash-marker">⚠️</div>
              <div class="clash-highlight"></div>
            </div>
          </div>

          <!-- Dimension Annotations -->
          <div class="dimension dim-1">
            <span>450mm</span>
          </div>
          <div class="dimension dim-2">
            <span>Overlap: 75mm</span>
          </div>
        </div>

        <div class="clash-details">
          <div class="detail-section">
            <div class="detail-title">Clash Information</div>
            <div class="detail-row">
              <span class="detail-label">Distance:</span>
              <span class="detail-value error">-75mm (Hard Clash)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Type:</span>
              <span class="detail-value">Intersection</span>
            </div>
          </div>

          <div class="action-buttons">
            <button class="action-btn primary">Create Task</button>
            <button class="action-btn">Add Comment</button>
            <button class="action-btn success">Mark Resolved</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-coordination-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 360px;
  background: #f3f4f6;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 11px;
}

/* Header */
.coord-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-title {
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.sync-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #d1fae5;
  color: #065f46;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 500;
}

.header-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  text-align: center;
  padding: 4px 12px;
  border-radius: 8px;
}

.stat-item.critical {
  background: #fee2e2;
}

.stat-item.major {
  background: #fef3c7;
}

.stat-item.minor {
  background: #e0e7ff;
}

.stat-item.resolved {
  background: #d1fae5;
}

.stat-num {
  display: block;
  font-size: 16px;
  font-weight: 700;
}

.stat-item.critical .stat-num { color: #dc2626; }
.stat-item.major .stat-num { color: #d97706; }
.stat-item.minor .stat-num { color: #4f46e5; }
.stat-item.resolved .stat-num { color: #059669; }

.stat-label {
  font-size: 9px;
  color: #6b7280;
}

/* Main Content */
.coord-main {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* Clash List */
.clash-list {
  width: 280px;
  background: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid #e5e7eb;
}

.list-title {
  font-weight: 600;
  color: #374151;
}

.filter-dropdown {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #6b7280;
  cursor: pointer;
}

.clash-items {
  flex: 1;
  overflow-y: auto;
}

.clash-item {
  display: flex;
  gap: 10px;
  padding: 12px;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  transition: background 0.15s;
}

.clash-item:hover {
  background: #f9fafb;
}

.clash-item.selected {
  background: #eff6ff;
  border-left: 3px solid #667eea;
}

.clash-severity {
  width: 4px;
  border-radius: 2px;
  flex-shrink: 0;
}

.clash-item.critical .clash-severity { background: #dc2626; }
.clash-item.major .clash-severity { background: #d97706; }
.clash-item.minor .clash-severity { background: #4f46e5; }

.clash-content {
  flex: 1;
  min-width: 0;
}

.clash-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 11px;
  margin-bottom: 4px;
}

.clash-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 9px;
  color: #6b7280;
  margin-bottom: 4px;
}

.clash-ids {
  display: flex;
  gap: 8px;
}

.element-id {
  font-size: 9px;
  color: #9ca3af;
  font-family: monospace;
}

.clash-status {
  flex-shrink: 0;
}

.status-tag {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 600;
}

.status-tag.pending { background: #f3f4f6; color: #6b7280; }
.status-tag.in-review { background: #fef3c7; color: #92400e; }
.status-tag.assigned { background: #dbeafe; color: #1e40af; }

/* Clash Viewer */
.clash-viewer {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #1a1a2e;
}

.viewer-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #252540;
  border-bottom: 1px solid #3d3d5c;
}

.toolbar-left {
  display: flex;
  gap: 4px;
}

.tool-btn {
  padding: 6px 10px;
  font-size: 10px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #9ca3af;
  cursor: pointer;
}

.tool-btn:hover {
  background: #3d3d5c;
  color: white;
}

.tool-btn.active {
  background: #667eea;
  color: white;
}

.viewer-label {
  color: #9ca3af;
  font-size: 10px;
}

.viewer-canvas {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
}

.clash-3d {
  position: relative;
  width: 200px;
  height: 120px;
}

.element {
  position: absolute;
  border-radius: 4px;
}

.element-1 {
  width: 160px;
  height: 30px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  top: 30px;
  left: 20px;
  transform: skewX(-10deg);
}

.element-2 {
  width: 30px;
  height: 80px;
  background: linear-gradient(180deg, #6b7280, #4b5563);
  top: 20px;
  left: 85px;
  transform: skewY(-5deg);
}

.element-label {
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 8px;
  color: white;
  white-space: nowrap;
  background: rgba(0,0,0,0.5);
  padding: 2px 6px;
  border-radius: 3px;
}

.clash-point {
  position: absolute;
  top: 35px;
  left: 80px;
}

.clash-marker {
  font-size: 20px;
  animation: pulse 1s ease-in-out infinite;
}

.clash-highlight {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  border: 2px solid #ef4444;
  border-radius: 50%;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}

.dimension {
  position: absolute;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 9px;
}

.dim-1 {
  bottom: 80px;
  left: 50px;
}

.dim-2 {
  top: 80px;
  right: 40px;
  color: #ef4444;
}

.clash-details {
  padding: 12px;
  background: #252540;
  border-top: 1px solid #3d3d5c;
}

.detail-section {
  margin-bottom: 12px;
}

.detail-title {
  font-size: 10px;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.detail-label {
  color: #9ca3af;
  font-size: 10px;
}

.detail-value {
  color: white;
  font-size: 10px;
}

.detail-value.error {
  color: #ef4444;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  flex: 1;
  padding: 8px;
  font-size: 10px;
  border: 1px solid #3d3d5c;
  border-radius: 6px;
  background: transparent;
  color: white;
  cursor: pointer;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
}

.action-btn.success {
  background: #059669;
  border: none;
}
</style>
