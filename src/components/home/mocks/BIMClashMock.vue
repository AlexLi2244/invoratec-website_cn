<script setup lang="ts">
// BIM Clash Detection Mock - Revit Add-in clash/collision prediction
</script>

<template>
  <div class="mock-container">
    <!-- Revit-style Title Bar -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">⚠️</span>
        <span>InvoratecAI - Clash Prediction</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="tool-group">
        <button class="tool-btn active">🔍 Detect</button>
        <button class="tool-btn">📊 Report</button>
        <button class="tool-btn">⚙️ Settings</button>
      </div>
      <div class="status-badge">
        <span class="pulse"></span>
        <span>AI Analysis Active</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Clash List -->
      <div class="clash-list">
        <div class="list-header">
          <span class="header-title">Detected Clashes</span>
          <span class="clash-count">24 clashes</span>
        </div>

        <div class="clash-item critical active">
          <div class="clash-severity critical"></div>
          <div class="clash-info">
            <div class="clash-title">Duct vs Beam</div>
            <div class="clash-location">Level 3 • Zone A</div>
          </div>
          <div class="clash-badge critical">Critical</div>
        </div>

        <div class="clash-item major">
          <div class="clash-severity major"></div>
          <div class="clash-info">
            <div class="clash-title">Pipe vs Cable Tray</div>
            <div class="clash-location">Level 2 • Zone B</div>
          </div>
          <div class="clash-badge major">Major</div>
        </div>

        <div class="clash-item minor">
          <div class="clash-severity minor"></div>
          <div class="clash-info">
            <div class="clash-title">Conduit vs Sprinkler</div>
            <div class="clash-location">Level 4 • Zone C</div>
          </div>
          <div class="clash-badge minor">Minor</div>
        </div>

        <div class="more-clashes">+ 21 more clashes</div>
      </div>

      <!-- Clash Details -->
      <div class="clash-details">
        <div class="details-header">
          <span class="details-title">Clash Details</span>
          <div class="details-actions">
            <button class="action-btn">👁️</button>
            <button class="action-btn">📋</button>
          </div>
        </div>

        <div class="details-content">
          <div class="preview-3d">
            <div class="clash-preview">
              <div class="element element-a"></div>
              <div class="element element-b"></div>
              <div class="clash-point">⚡</div>
            </div>
          </div>

          <div class="element-info">
            <div class="element-card a">
              <div class="element-label">Element A</div>
              <div class="element-name">Rectangular Duct</div>
              <div class="element-detail">600×400mm • Supply Air</div>
              <div class="element-id">ID: 2847563</div>
            </div>
            <div class="vs-badge">VS</div>
            <div class="element-card b">
              <div class="element-label">Element B</div>
              <div class="element-name">Structural Beam</div>
              <div class="element-detail">W16×50 Steel</div>
              <div class="element-id">ID: 1234567</div>
            </div>
          </div>

          <div class="ai-suggestion">
            <div class="suggestion-header">
              <span class="suggestion-icon">🤖</span>
              <span class="suggestion-title">AI Suggestion</span>
            </div>
            <p class="suggestion-text">Route duct 200mm below beam. Estimated rework: 2 hours.</p>
            <button class="apply-btn">Apply Fix</button>
          </div>
        </div>
      </div>
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

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.tool-group {
  display: flex;
  gap: 4px;
}

.tool-btn {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
}

.tool-btn.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #fef3c7;
  border-radius: 12px;
  font-size: 9px;
  color: #92400e;
}

.pulse {
  width: 6px;
  height: 6px;
  background: #f59e0b;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.clash-list {
  width: 180px;
  background: white;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  border-bottom: 1px solid #e0e0e0;
}

.header-title {
  font-weight: 600;
  font-size: 10px;
}

.clash-count {
  font-size: 9px;
  color: #6b7280;
}

.clash-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
}

.clash-item.active {
  background: #f3f4f6;
}

.clash-severity {
  width: 4px;
  height: 28px;
  border-radius: 2px;
}

.clash-severity.critical { background: #ef4444; }
.clash-severity.major { background: #f59e0b; }
.clash-severity.minor { background: #22c55e; }

.clash-info {
  flex: 1;
}

.clash-title {
  font-size: 10px;
  font-weight: 500;
  color: #1f2937;
}

.clash-location {
  font-size: 9px;
  color: #6b7280;
}

.clash-badge {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 8px;
  font-weight: 600;
}

.clash-badge.critical { background: #fee2e2; color: #dc2626; }
.clash-badge.major { background: #fef3c7; color: #d97706; }
.clash-badge.minor { background: #d1fae5; color: #059669; }

.more-clashes {
  padding: 8px;
  text-align: center;
  font-size: 9px;
  color: #667eea;
}

.clash-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.details-title {
  font-weight: 600;
  font-size: 10px;
}

.details-actions {
  display: flex;
  gap: 4px;
}

.action-btn {
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.details-content {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.preview-3d {
  background: #1e1e1e;
  border-radius: 8px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clash-preview {
  position: relative;
  width: 100px;
  height: 60px;
}

.element {
  position: absolute;
  border-radius: 3px;
}

.element-a {
  width: 80px;
  height: 20px;
  background: rgba(102, 126, 234, 0.6);
  border: 1px solid #667eea;
  top: 10px;
  left: 10px;
}

.element-b {
  width: 20px;
  height: 50px;
  background: rgba(239, 68, 68, 0.6);
  border: 1px solid #ef4444;
  top: 5px;
  left: 40px;
}

.clash-point {
  position: absolute;
  top: 15px;
  left: 40px;
  font-size: 16px;
  animation: flash 1s infinite;
}

@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.element-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.element-card {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  font-size: 9px;
}

.element-card.a {
  background: #e0e7ff;
  border: 1px solid #667eea;
}

.element-card.b {
  background: #fee2e2;
  border: 1px solid #ef4444;
}

.element-label {
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 2px;
}

.element-name {
  font-weight: 600;
  color: #1f2937;
}

.element-detail {
  color: #6b7280;
}

.element-id {
  font-family: monospace;
  color: #9ca3af;
  margin-top: 2px;
}

.vs-badge {
  background: #f3f4f6;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 600;
  color: #6b7280;
}

.ai-suggestion {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 6px;
  padding: 8px;
}

.suggestion-header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
}

.suggestion-icon { font-size: 12px; }

.suggestion-title {
  font-weight: 600;
  font-size: 10px;
  color: #667eea;
}

.suggestion-text {
  font-size: 9px;
  color: #374151;
  margin: 0 0 6px 0;
}

.apply-btn {
  padding: 4px 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 9px;
  cursor: pointer;
}
</style>
