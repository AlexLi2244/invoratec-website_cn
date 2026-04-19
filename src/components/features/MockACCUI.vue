<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock ACC Integration UI - Simulates the Revit Add-in ACC Hub Browser panel

const { t } = useI18n()
</script>

<template>
  <div class="mock-acc-container">
    <!-- Revit-style Window Frame -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">☁️</span>
        <span>InvoratecAI - {{ t('mockUI.acc.title') }}</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Connection Status Banner -->
    <div class="connection-banner connected">
      <div class="connection-info">
        <span class="connection-icon">✓</span>
        <span class="connection-text">{{ t('mockUI.acc.connected') }}</span>
      </div>
      <div class="user-info">
        <span class="user-avatar">JC</span>
        <span class="user-name">john.chen@company.com</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="acc-content">
      <!-- Hub Selector -->
      <div class="hub-selector">
        <div class="selector-label">Hub:</div>
        <div class="selector-dropdown">
          <span class="hub-icon">🏢</span>
          <span class="hub-name">Meridian Development Corp</span>
          <svg viewBox="0 0 24 24" class="dropdown-icon"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
        </div>
      </div>

      <!-- Projects Tree -->
      <div class="projects-tree">
        <div class="tree-header">
          <span class="tree-title">ACC Projects</span>
          <button class="refresh-btn">🔄 {{ t('mockUI.dashboard.refresh') }}</button>
        </div>

        <div class="tree-content">
          <!-- Project 1 - Expanded -->
          <div class="tree-item project expanded">
            <div class="item-row">
              <span class="expand-icon">▼</span>
              <span class="item-icon">📁</span>
              <span class="item-name">Downtown Office Tower</span>
              <span class="item-badge linked">Linked</span>
            </div>

            <!-- Folders -->
            <div class="tree-children">
              <div class="tree-item folder expanded">
                <div class="item-row">
                  <span class="expand-icon">▼</span>
                  <span class="item-icon">📂</span>
                  <span class="item-name">Project Files</span>
                </div>

                <div class="tree-children">
                  <div class="tree-item folder">
                    <div class="item-row">
                      <span class="expand-icon">▶</span>
                      <span class="item-icon">📂</span>
                      <span class="item-name">01 - Architectural</span>
                      <span class="file-count">12 files</span>
                    </div>
                  </div>

                  <div class="tree-item folder expanded current">
                    <div class="item-row">
                      <span class="expand-icon">▼</span>
                      <span class="item-icon">📂</span>
                      <span class="item-name">02 - MEP</span>
                      <span class="file-count">8 files</span>
                    </div>

                    <div class="tree-children">
                      <div class="tree-item file linked">
                        <div class="item-row">
                          <span class="file-icon revit">🏗️</span>
                          <span class="item-name">DOT_MEP_Central.rvt</span>
                          <span class="item-badge current">Current</span>
                        </div>
                      </div>
                      <div class="tree-item file">
                        <div class="item-row">
                          <span class="file-icon revit">🏗️</span>
                          <span class="item-name">DOT_MEP_HVAC.rvt</span>
                        </div>
                      </div>
                      <div class="tree-item file">
                        <div class="item-row">
                          <span class="file-icon revit">🏗️</span>
                          <span class="item-name">DOT_MEP_Plumbing.rvt</span>
                        </div>
                      </div>
                      <div class="tree-item file">
                        <div class="item-row">
                          <span class="file-icon revit">🏗️</span>
                          <span class="item-name">DOT_MEP_Electrical.rvt</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tree-item folder">
                    <div class="item-row">
                      <span class="expand-icon">▶</span>
                      <span class="item-icon">📂</span>
                      <span class="item-name">03 - Structural</span>
                      <span class="file-count">6 files</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tree-item folder">
                <div class="item-row">
                  <span class="expand-icon">▶</span>
                  <span class="item-icon">📂</span>
                  <span class="item-name">Shared</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 2 - Collapsed -->
          <div class="tree-item project">
            <div class="item-row">
              <span class="expand-icon">▶</span>
              <span class="item-icon">📁</span>
              <span class="item-name">Medical Center Expansion</span>
            </div>
          </div>

          <!-- Project 3 - Collapsed -->
          <div class="tree-item project">
            <div class="item-row">
              <span class="expand-icon">▶</span>
              <span class="item-icon">📁</span>
              <span class="item-name">University Science Building</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Panel -->
      <div class="action-panel">
        <div class="selected-file">
          <div class="file-preview">
            <span class="preview-icon">🏗️</span>
          </div>
          <div class="file-details">
            <div class="file-name">DOT_MEP_Central.rvt</div>
            <div class="file-meta">
              <span>v42</span>
              <span>•</span>
              <span>Modified: Dec 19, 2025</span>
              <span>•</span>
              <span>125 MB</span>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <button class="acc-btn primary">
            <span class="btn-icon">🔗</span>
            Link to Project
          </button>
          <button class="acc-btn">
            <span class="btn-icon">📥</span>
            Download
          </button>
          <button class="acc-btn">
            <span class="btn-icon">📤</span>
            Sync to Cloud
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Status -->
    <div class="acc-status">
      <div class="status-left">
        <span class="status-icon online">●</span>
        <span>ACC Connected</span>
      </div>
      <div class="status-right">
        <span>Last sync: 5 min ago</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-acc-container {
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

/* Connection Banner */
.connection-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
}

.connection-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.connection-icon {
  width: 18px;
  height: 18px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.connection-text {
  font-size: 11px;
  font-weight: 500;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.user-avatar {
  width: 22px;
  height: 22px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
}

.user-name {
  font-size: 10px;
  opacity: 0.9;
}

/* Main Content */
.acc-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

/* Hub Selector */
.hub-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-bottom: 1px solid #e5e7eb;
}

.selector-label {
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
}

.selector-dropdown {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
}

.hub-icon {
  font-size: 14px;
}

.hub-name {
  flex: 1;
  font-weight: 500;
  color: #1f2937;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  color: #9ca3af;
}

/* Projects Tree */
.projects-tree {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.tree-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.tree-title {
  font-weight: 600;
  color: #374151;
}

.refresh-btn {
  padding: 4px 8px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
}

.tree-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.tree-item {
  margin-bottom: 2px;
}

.item-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}

.item-row:hover {
  background: #f3f4f6;
}

.tree-item.current > .item-row {
  background: #e0e7ff;
}

.expand-icon {
  width: 12px;
  font-size: 8px;
  color: #9ca3af;
}

.item-icon {
  font-size: 14px;
}

.item-name {
  flex: 1;
  font-size: 11px;
  color: #374151;
}

.item-badge {
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 600;
}

.item-badge.linked {
  background: #d1fae5;
  color: #065f46;
}

.item-badge.current {
  background: #dbeafe;
  color: #1e40af;
}

.file-count {
  font-size: 9px;
  color: #9ca3af;
}

.tree-children {
  padding-left: 20px;
}

.file-icon {
  font-size: 14px;
}

.file-icon.revit {
  color: #4f46e5;
}

/* Action Panel */
.action-panel {
  padding: 12px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}

.selected-file {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  padding: 10px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.file-preview {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.file-details {
  flex: 1;
}

.file-name {
  font-weight: 600;
  color: #1f2937;
  font-size: 12px;
  margin-bottom: 4px;
}

.file-meta {
  display: flex;
  gap: 6px;
  font-size: 10px;
  color: #6b7280;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.acc-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: white;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s;
}

.acc-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.acc-btn:hover {
  border-color: #667eea;
}

.acc-btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(102,126,234,0.3);
}

.btn-icon {
  font-size: 12px;
}

/* Status Bar */
.acc-status {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  font-size: 10px;
  color: #6b7280;
}

.status-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-icon {
  font-size: 8px;
}

.status-icon.online {
  color: #22c55e;
}
</style>
