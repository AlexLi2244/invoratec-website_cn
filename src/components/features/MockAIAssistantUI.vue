<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock AI Assistant UI - Simulates the InvoratecAI AI Assistant chat interface

const { t } = useI18n()
</script>

<template>
  <div class="mock-ai-container">
    <!-- Revit-style Window Frame -->
    <div class="revit-titlebar">
      <div class="titlebar-left">
        <span class="window-icon">✨</span>
        <span>InvoratecAI - {{ t('mockUI.ai.title') }}</span>
      </div>
      <div class="titlebar-buttons">
        <button class="titlebar-btn">−</button>
        <button class="titlebar-btn">□</button>
        <button class="titlebar-btn close">×</button>
      </div>
    </div>

    <!-- Mode Tabs -->
    <div class="mode-tabs">
      <div class="mode-tab active">
        <span class="mode-icon">💬</span>
        Chat
      </div>
      <div class="mode-tab">
        <span class="mode-icon">🎤</span>
        Voice
      </div>
      <div class="mode-tab">
        <span class="mode-icon">🔧</span>
        {{ t('mockUI.tools.title') }}
      </div>
    </div>

    <!-- Chat Area -->
    <div class="chat-area">
      <!-- AI Greeting -->
      <div class="message ai">
        <div class="message-avatar">
          <span class="ai-icon">✨</span>
        </div>
        <div class="message-content">
          <div class="message-header">
            <span class="sender-name">InvoratecAI</span>
            <span class="message-time">2:34 PM</span>
          </div>
          <div class="message-text">
            Hello! I'm your AI assistant. I can help you with:
            <ul class="capability-list">
              <li>🏗️ Revit automation tasks</li>
              <li>📊 Data queries and reports</li>
              <li>🔧 Running scripts and tools</li>
              <li>💡 BIM best practices advice</li>
            </ul>
            What would you like to do today?
          </div>
        </div>
      </div>

      <!-- User Message -->
      <div class="message user">
        <div class="message-content">
          <div class="message-header">
            <span class="sender-name">You</span>
            <span class="message-time">2:35 PM</span>
          </div>
          <div class="message-text">
            Create a schedule of all ducts on Level 3 with their sizes and system types
          </div>
        </div>
        <div class="message-avatar">
          <span class="user-initial">JC</span>
        </div>
      </div>

      <!-- AI Response with Code -->
      <div class="message ai">
        <div class="message-avatar">
          <span class="ai-icon">✨</span>
        </div>
        <div class="message-content">
          <div class="message-header">
            <span class="sender-name">InvoratecAI</span>
            <span class="message-time">2:35 PM</span>
          </div>
          <div class="message-text">
            I'll create that schedule for you. Let me query the Revit model...
          </div>

          <!-- Code Block -->
          <div class="code-block">
            <div class="code-header">
              <span class="code-lang">Python</span>
              <button class="code-action">▶ Run</button>
            </div>
            <pre class="code-content"><code># Get all ducts on Level 3
collector = FilteredElementCollector(doc)
ducts = collector.OfCategory(BuiltInCategory.OST_DuctCurves)
              .WhereElementIsNotElementType()
              .ToElements()

level3_ducts = [d for d in ducts
  if d.LookupParameter("Level").AsValueString() == "Level 3"]

# Create schedule data
schedule_data = []
for duct in level3_ducts:
    schedule_data.append({
        "ID": duct.Id.IntegerValue,
        "Size": duct.LookupParameter("Size").AsString(),
        "System": duct.LookupParameter("System Type").AsValueString()
    })</code></pre>
          </div>

          <!-- Execution Status -->
          <div class="execution-status success">
            <span class="status-icon">✓</span>
            <span>Script executed successfully</span>
          </div>

          <!-- Results Table -->
          <div class="results-section">
            <div class="results-header">
              <span class="results-title">📊 Results: 24 ducts found</span>
              <button class="export-btn">📥 Export</button>
            </div>
            <table class="results-table">
              <thead>
                <tr>
                  <th>Element ID</th>
                  <th>Size</th>
                  <th>System Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="mono">2847563</td>
                  <td>600×400mm</td>
                  <td>Supply Air</td>
                </tr>
                <tr>
                  <td class="mono">2847564</td>
                  <td>400×300mm</td>
                  <td>Return Air</td>
                </tr>
                <tr>
                  <td class="mono">2847565</td>
                  <td>300×200mm</td>
                  <td>Exhaust Air</td>
                </tr>
                <tr class="more-rows">
                  <td colspan="3">... and 21 more rows</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="message-text followup">
            Done! I found 24 ducts on Level 3. Would you like me to:
            <div class="quick-actions">
              <button class="quick-btn">Isolate in view</button>
              <button class="quick-btn">Create task</button>
              <button class="quick-btn">Export to Excel</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="input-area">
      <div class="input-row">
        <button class="input-action">📎</button>
        <input type="text" :placeholder="t('mockUI.ai.askAnything')" class="chat-input" readonly />
        <button class="input-action voice">🎤</button>
        <button class="send-btn">{{ t('mockUI.ai.send') }}</button>
      </div>
      <div class="input-hints">
        <span class="hint">Try: "Select all pipes larger than 100mm"</span>
        <span class="hint">Try: "Run the clash detection tool"</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-ai-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 420px;
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

/* Mode Tabs */
.mode-tabs {
  display: flex;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4px;
}

.mode-tab {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  font-size: 11px;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  border-radius: 4px;
}

.mode-tab.active {
  background: rgba(255,255,255,0.2);
  color: white;
  font-weight: 500;
}

.mode-icon {
  font-size: 14px;
}

/* Chat Area */
.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  background: #fafafa;
}

.message {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.message.user {
  justify-content: flex-end;
}

.message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ai-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.user-initial {
  width: 32px;
  height: 32px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  font-weight: 600;
}

.message-content {
  max-width: 80%;
  background: white;
  border-radius: 12px;
  padding: 10px 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.message.user .message-content {
  background: #667eea;
  color: white;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.sender-name {
  font-weight: 600;
  font-size: 11px;
  color: #333;
}

.message.user .sender-name {
  color: rgba(255,255,255,0.9);
}

.message-time {
  font-size: 9px;
  color: #999;
}

.message.user .message-time {
  color: rgba(255,255,255,0.7);
}

.message-text {
  font-size: 11px;
  line-height: 1.5;
  color: #333;
}

.message.user .message-text {
  color: white;
}

.message-text.followup {
  margin-top: 10px;
}

.capability-list {
  margin: 8px 0 0 16px;
  padding: 0;
  font-size: 10px;
}

.capability-list li {
  margin-bottom: 4px;
}

/* Code Block */
.code-block {
  margin: 10px 0;
  border-radius: 6px;
  overflow: hidden;
  background: #1e1e1e;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #2d2d2d;
}

.code-lang {
  font-size: 10px;
  color: #9ca3af;
}

.code-action {
  padding: 3px 10px;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 9px;
  cursor: pointer;
}

.code-content {
  margin: 0;
  padding: 10px;
  font-size: 10px;
  line-height: 1.4;
  color: #d4d4d4;
  font-family: 'Consolas', monospace;
  overflow-x: auto;
}

/* Execution Status */
.execution-status {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 10px;
  margin: 8px 0;
}

.execution-status.success {
  background: #d1fae5;
  color: #065f46;
}

.status-icon {
  font-weight: bold;
}

/* Results Table */
.results-section {
  margin: 10px 0;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
}

.results-title {
  font-weight: 600;
  font-size: 10px;
}

.export-btn {
  padding: 3px 8px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 9px;
  cursor: pointer;
}

.results-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 10px;
}

.results-table th {
  text-align: left;
  padding: 6px 10px;
  background: #fafafa;
  font-weight: 600;
  color: #555;
  border-bottom: 1px solid #e0e0e0;
}

.results-table td {
  padding: 6px 10px;
  border-bottom: 1px solid #f0f0f0;
}

.results-table .mono {
  font-family: monospace;
  color: #667eea;
}

.results-table .more-rows {
  text-align: center;
  color: #999;
  font-style: italic;
}

/* Quick Actions */
.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.quick-btn {
  padding: 6px 12px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 16px;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.15s;
}

.quick-btn:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

/* Input Area */
.input-area {
  padding: 10px;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.input-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.input-action {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
}

.input-action:hover {
  background: #f0f0f0;
}

.input-action.voice {
  color: #667eea;
}

.chat-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 11px;
  outline: none;
}

.chat-input:focus {
  border-color: #667eea;
}

.send-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 11px;
  cursor: pointer;
}

.input-hints {
  display: flex;
  gap: 12px;
  margin-top: 8px;
  padding-left: 40px;
}

.hint {
  font-size: 9px;
  color: #999;
  padding: 3px 8px;
  background: #f5f5f5;
  border-radius: 10px;
}
</style>
