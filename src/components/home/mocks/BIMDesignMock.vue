<script setup lang="ts">
// BIM Design Tools Mock - Revit Add-in design automation
</script>

<template>
  <div class="mock-container">
    <!-- Revit-style Title Bar -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">🎨</span>
        <span>InvoratecAI - Design Tools</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Tool Categories -->
    <div class="category-tabs">
      <div class="cat-tab active">Modeling</div>
      <div class="cat-tab">MEP</div>
      <div class="cat-tab">Annotation</div>
      <div class="cat-tab">Export</div>
    </div>

    <!-- Tools Grid -->
    <div class="tools-content">
      <div class="tools-grid">
        <!-- Tool 1 -->
        <div class="tool-card active">
          <div class="tool-icon-wrapper">
            <span class="tool-icon">🔧</span>
          </div>
          <div class="tool-info">
            <div class="tool-name">Auto-Route Ducts</div>
            <div class="tool-desc">AI-powered duct routing</div>
          </div>
          <button class="run-btn">▶</button>
        </div>

        <!-- Tool 2 -->
        <div class="tool-card">
          <div class="tool-icon-wrapper python">
            <span class="tool-icon">📐</span>
          </div>
          <div class="tool-info">
            <div class="tool-name">Pipe Sizer</div>
            <div class="tool-desc">Calculate optimal sizes</div>
          </div>
          <button class="run-btn">▶</button>
        </div>

        <!-- Tool 3 -->
        <div class="tool-card">
          <div class="tool-icon-wrapper csharp">
            <span class="tool-icon">📊</span>
          </div>
          <div class="tool-info">
            <div class="tool-name">Schedule Gen</div>
            <div class="tool-desc">Auto-generate schedules</div>
          </div>
          <button class="run-btn">▶</button>
        </div>

        <!-- Tool 4 -->
        <div class="tool-card">
          <div class="tool-icon-wrapper">
            <span class="tool-icon">🏷️</span>
          </div>
          <div class="tool-info">
            <div class="tool-name">Smart Tag</div>
            <div class="tool-desc">AI element tagging</div>
          </div>
          <button class="run-btn">▶</button>
        </div>
      </div>

      <!-- Active Tool Panel -->
      <div class="active-tool-panel">
        <div class="panel-header">
          <span class="panel-title">🔧 Auto-Route Ducts</span>
          <div class="panel-badge">AI Powered</div>
        </div>

        <div class="panel-content">
          <div class="param-group">
            <label class="param-label">Source Equipment</label>
            <div class="param-input">
              <span class="input-icon">📍</span>
              <input type="text" value="AHU-01 (Selected)" readonly />
            </div>
          </div>

          <div class="param-group">
            <label class="param-label">Routing Strategy</label>
            <div class="param-options">
              <button class="option-btn active">Shortest Path</button>
              <button class="option-btn">Avoid Beams</button>
              <button class="option-btn">Minimize Bends</button>
            </div>
          </div>

          <div class="param-group">
            <label class="param-label">Clearance (mm)</label>
            <div class="slider-row">
              <input type="range" value="150" min="50" max="300" />
              <span class="slider-value">150</span>
            </div>
          </div>

          <div class="ai-preview">
            <div class="preview-header">
              <span class="preview-icon">🤖</span>
              <span>AI Preview</span>
            </div>
            <div class="preview-stats">
              <div class="stat-item">
                <span class="stat-value">12</span>
                <span class="stat-label">Ducts</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">45m</span>
                <span class="stat-label">Length</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">0</span>
                <span class="stat-label">Clashes</span>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-footer">
          <button class="cancel-btn">Cancel</button>
          <button class="execute-btn">🚀 Execute</button>
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

.category-tabs {
  display: flex;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.cat-tab {
  padding: 8px 16px;
  font-size: 10px;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.cat-tab.active {
  color: #667eea;
  border-bottom-color: #667eea;
  font-weight: 500;
}

.tools-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.tools-grid {
  width: 160px;
  background: white;
  border-right: 1px solid #e0e0e0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tool-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
  background: white;
}

.tool-card.active {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.tool-icon-wrapper {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #e0e7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tool-icon-wrapper.python { background: #fef3c7; }
.tool-icon-wrapper.csharp { background: #d1fae5; }

.tool-icon { font-size: 14px; }

.tool-info {
  flex: 1;
  min-width: 0;
}

.tool-name {
  font-size: 10px;
  font-weight: 500;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tool-desc {
  font-size: 8px;
  color: #6b7280;
}

.run-btn {
  width: 22px;
  height: 22px;
  border: none;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
}

.active-tool-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.panel-title {
  font-weight: 600;
  font-size: 11px;
}

.panel-badge {
  padding: 2px 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 10px;
  font-size: 8px;
}

.panel-content {
  flex: 1;
  padding: 10px;
  overflow: auto;
}

.param-group {
  margin-bottom: 12px;
}

.param-label {
  display: block;
  font-size: 10px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.param-input {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: white;
}

.input-icon { font-size: 12px; }

.param-input input {
  flex: 1;
  border: none;
  font-size: 10px;
  outline: none;
}

.param-options {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.option-btn {
  padding: 4px 10px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 12px;
  font-size: 9px;
  cursor: pointer;
}

.option-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.slider-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.slider-row input[type="range"] {
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  background: #e5e7eb;
  border-radius: 2px;
}

.slider-row input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background: #667eea;
  border-radius: 50%;
  cursor: pointer;
}

.slider-value {
  font-size: 11px;
  font-weight: 600;
  color: #667eea;
  min-width: 30px;
}

.ai-preview {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 6px;
  padding: 10px;
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 10px;
  color: #667eea;
}

.preview-icon { font-size: 14px; }

.preview-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
}

.stat-label {
  font-size: 8px;
  color: #6b7280;
}

.panel-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 10px 12px;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.cancel-btn {
  padding: 6px 14px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
}

.execute-btn {
  padding: 6px 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
}
</style>
