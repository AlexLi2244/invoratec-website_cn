<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock Tools Library UI - Simulates the Revit Add-in tool library panel

const { t } = useI18n()
</script>

<template>
  <div class="mock-tools-container">
    <!-- Revit-style Window Frame -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">🔧</span>
        <span>InvoratecAI - {{ t('mockUI.tools.title') }}</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Search & Filter -->
    <div class="tools-header">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" :placeholder="t('mockUI.tools.searchTools')" readonly />
      </div>
      <div class="category-filter">
        <button class="cat-btn active">All</button>
        <button class="cat-btn">Modeling</button>
        <button class="cat-btn">MEP</button>
        <button class="cat-btn">Utils</button>
      </div>
    </div>

    <!-- Tools Grid -->
    <div class="tools-grid">
      <!-- Tool Card 1 - DLL -->
      <div class="tool-card">
        <div class="tool-icon-wrapper dll">
          <span class="tool-icon">📦</span>
        </div>
        <div class="tool-info">
          <div class="tool-name">Quick Parameter Editor</div>
          <div class="tool-desc">Bulk edit parameters across multiple elements</div>
          <div class="tool-meta">
            <span class="tool-type dll">DLL Plugin</span>
            <span class="tool-version">v2.1.0</span>
          </div>
        </div>
        <button class="run-btn">▶ {{ t('mockUI.tools.run') }}</button>
      </div>

      <!-- Tool Card 2 - Python -->
      <div class="tool-card featured">
        <div class="featured-badge">⭐ Featured</div>
        <div class="tool-icon-wrapper python">
          <span class="tool-icon">🐍</span>
        </div>
        <div class="tool-info">
          <div class="tool-name">Auto Duct Sizer</div>
          <div class="tool-desc">Automatically size ducts based on CFM requirements</div>
          <div class="tool-meta">
            <span class="tool-type python">Python</span>
            <span class="tool-version">v1.3.2</span>
          </div>
        </div>
        <button class="run-btn">▶ {{ t('mockUI.tools.run') }}</button>
      </div>

      <!-- Tool Card 3 - C# -->
      <div class="tool-card">
        <div class="tool-icon-wrapper csharp">
          <span class="tool-icon">⚡</span>
        </div>
        <div class="tool-info">
          <div class="tool-name">Sheet Generator</div>
          <div class="tool-desc">Generate sheets from view templates automatically</div>
          <div class="tool-meta">
            <span class="tool-type csharp">C# Script</span>
            <span class="tool-version">v1.0.5</span>
          </div>
        </div>
        <button class="run-btn">▶ {{ t('mockUI.tools.run') }}</button>
      </div>

      <!-- Tool Card 4 - Python -->
      <div class="tool-card">
        <div class="tool-icon-wrapper python">
          <span class="tool-icon">📏</span>
        </div>
        <div class="tool-info">
          <div class="tool-name">Pipe Slope Checker</div>
          <div class="tool-desc">Verify pipe slopes meet code requirements</div>
          <div class="tool-meta">
            <span class="tool-type python">Python</span>
            <span class="tool-version">v2.0.1</span>
          </div>
        </div>
        <button class="run-btn">▶ {{ t('mockUI.tools.run') }}</button>
      </div>

      <!-- Tool Card 5 - DLL Multi -->
      <div class="tool-card">
        <div class="tool-icon-wrapper dll">
          <span class="tool-icon">🔌</span>
        </div>
        <div class="tool-info">
          <div class="tool-name">MEP Toolkit</div>
          <div class="tool-desc">Collection of 12 MEP productivity tools</div>
          <div class="tool-meta">
            <span class="tool-type dll">DLL (12 tools)</span>
            <span class="tool-version">v3.2.0</span>
          </div>
        </div>
        <button class="run-btn expand">▼ Expand</button>
      </div>

      <!-- Tool Card 6 - Python -->
      <div class="tool-card">
        <div class="tool-icon-wrapper python">
          <span class="tool-icon">🏷️</span>
        </div>
        <div class="tool-info">
          <div class="tool-name">Smart Tagger</div>
          <div class="tool-desc">AI-assisted element tagging and annotation</div>
          <div class="tool-meta">
            <span class="tool-type python">Python</span>
            <span class="tool-version">v1.1.0</span>
          </div>
        </div>
        <button class="run-btn">▶ {{ t('mockUI.tools.run') }}</button>
      </div>
    </div>

    <!-- Upload Section -->
    <div class="upload-section">
      <div class="upload-area">
        <span class="upload-icon">📤</span>
        <span class="upload-text">Drop tools here or click to upload</span>
        <span class="upload-hint">.dll, .py, .cs files supported</span>
      </div>
    </div>

    <!-- Status Bar -->
    <div class="tools-status">
      <div class="status-left">
        <span class="status-count">24 tools available</span>
      </div>
      <div class="status-right">
        <span class="status-sync">☁️ Synced with cloud library</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-tools-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 400px;
  background: #f5f5f5;
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

/* Header */
.tools-header {
  padding: 10px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 10px;
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

.category-filter {
  display: flex;
  gap: 6px;
}

.cat-btn {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  font-size: 10px;
  cursor: pointer;
}

.cat-btn.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
}

/* Tools Grid */
.tools-grid {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.tool-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  transition: all 0.15s;
}

.tool-card:hover {
  border-color: #667eea;
  box-shadow: 0 2px 8px rgba(102,126,234,0.15);
}

.tool-card.featured {
  border-color: #f59e0b;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
}

.featured-badge {
  position: absolute;
  top: -1px;
  right: 10px;
  background: #f59e0b;
  color: white;
  font-size: 9px;
  padding: 3px 8px;
  border-radius: 0 0 6px 6px;
  font-weight: 600;
}

.tool-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-icon-wrapper.dll { background: #e0e7ff; }
.tool-icon-wrapper.python { background: #fef3c7; }
.tool-icon-wrapper.csharp { background: #d1fae5; }

.tool-icon {
  font-size: 20px;
}

.tool-info {
  flex: 1;
}

.tool-name {
  font-weight: 600;
  color: #1f2937;
  font-size: 12px;
  margin-bottom: 2px;
}

.tool-desc {
  font-size: 10px;
  color: #6b7280;
  line-height: 1.3;
  margin-bottom: 6px;
}

.tool-meta {
  display: flex;
  gap: 8px;
  align-items: center;
}

.tool-type {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 600;
}

.tool-type.dll { background: #e0e7ff; color: #4f46e5; }
.tool-type.python { background: #fef3c7; color: #92400e; }
.tool-type.csharp { background: #d1fae5; color: #065f46; }

.tool-version {
  font-size: 9px;
  color: #9ca3af;
}

.run-btn {
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.run-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(102,126,234,0.3);
}

.run-btn.expand {
  background: #f3f4f6;
  color: #374151;
}

/* Upload Section */
.upload-section {
  padding: 10px;
}

.upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.15s;
}

.upload-area:hover {
  border-color: #667eea;
  background: #f0f4ff;
}

.upload-icon {
  font-size: 20px;
  display: block;
  margin-bottom: 4px;
}

.upload-text {
  display: block;
  font-size: 11px;
  color: #374151;
  margin-bottom: 2px;
}

.upload-hint {
  font-size: 9px;
  color: #9ca3af;
}

/* Status Bar */
.tools-status {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: white;
  border-top: 1px solid #e0e0e0;
  font-size: 10px;
  color: #6b7280;
}

.status-sync {
  color: #059669;
}
</style>
