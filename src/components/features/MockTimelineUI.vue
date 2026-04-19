<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Mock Timeline/Gantt UI - Simulates project timeline and Gantt chart view

const { t } = useI18n()
</script>

<template>
  <div class="mock-timeline-container">
    <!-- Header -->
    <div class="timeline-header">
      <div class="header-left">
        <h3 class="header-title">📅 {{ t('mockUI.timeline.title') }}</h3>
        <div class="project-badge">Tower-A MEP</div>
      </div>
      <div class="header-right">
        <div class="date-range">
          <button class="nav-btn">◀</button>
          <span>Dec 2025</span>
          <button class="nav-btn">▶</button>
        </div>
        <div class="view-options">
          <button class="view-opt active">{{ t('mockUI.timeline.week') }}</button>
          <button class="view-opt">{{ t('mockUI.timeline.month') }}</button>
          <button class="view-opt">Quarter</button>
        </div>
      </div>
    </div>

    <!-- Timeline Grid -->
    <div class="timeline-grid">
      <!-- Date Headers -->
      <div class="date-headers">
        <div class="task-column-header">Task</div>
        <div class="dates-scroll">
          <div class="date-col">
            <div class="date-day">Mon</div>
            <div class="date-num">15</div>
          </div>
          <div class="date-col">
            <div class="date-day">Tue</div>
            <div class="date-num">16</div>
          </div>
          <div class="date-col">
            <div class="date-day">Wed</div>
            <div class="date-num">17</div>
          </div>
          <div class="date-col today">
            <div class="date-day">Thu</div>
            <div class="date-num">18</div>
          </div>
          <div class="date-col">
            <div class="date-day">Fri</div>
            <div class="date-num">19</div>
          </div>
          <div class="date-col weekend">
            <div class="date-day">Sat</div>
            <div class="date-num">20</div>
          </div>
          <div class="date-col weekend">
            <div class="date-day">Sun</div>
            <div class="date-num">21</div>
          </div>
          <div class="date-col">
            <div class="date-day">Mon</div>
            <div class="date-num">22</div>
          </div>
          <div class="date-col">
            <div class="date-day">Tue</div>
            <div class="date-num">23</div>
          </div>
          <div class="date-col">
            <div class="date-day">Wed</div>
            <div class="date-num">24</div>
          </div>
        </div>
      </div>

      <!-- Task Rows -->
      <div class="task-rows">
        <!-- Milestone -->
        <div class="task-row milestone-row">
          <div class="task-info">
            <span class="task-icon">🎯</span>
            <span class="task-name">MEP Model Completion</span>
          </div>
          <div class="gantt-area">
            <div class="milestone-marker" style="left: 65%;">
              <div class="milestone-diamond">◆</div>
              <div class="milestone-label">Dec 22</div>
            </div>
          </div>
        </div>

        <!-- Task 1 - Completed -->
        <div class="task-row">
          <div class="task-info">
            <span class="task-icon">🔧</span>
            <span class="task-name">HVAC Equipment placement</span>
          </div>
          <div class="gantt-area">
            <div class="gantt-bar completed" style="left: 5%; width: 25%;">
              <div class="bar-progress" style="width: 100%"></div>
              <span class="bar-label">100%</span>
            </div>
          </div>
        </div>

        <!-- Task 2 - In Progress -->
        <div class="task-row highlighted">
          <div class="task-info">
            <span class="task-icon">🔧</span>
            <span class="task-name">Duct routing - Level 3</span>
            <span class="assignee-mini">JC</span>
          </div>
          <div class="gantt-area">
            <div class="gantt-bar in-progress" style="left: 15%; width: 45%;">
              <div class="bar-progress" style="width: 65%"></div>
              <span class="bar-label">65%</span>
            </div>
            <div class="dependency-line" style="left: 30%; top: -8px;"></div>
          </div>
        </div>

        <!-- Task 3 - Behind -->
        <div class="task-row">
          <div class="task-info">
            <span class="task-icon">⚡</span>
            <span class="task-name">Panel schedule update</span>
            <span class="assignee-mini" style="background: #f59e0b;">SW</span>
          </div>
          <div class="gantt-area">
            <div class="gantt-bar behind" style="left: 25%; width: 35%;">
              <div class="bar-progress" style="width: 30%"></div>
              <span class="bar-label warning">30% ⚠️</span>
            </div>
          </div>
        </div>

        <!-- Task 4 - Pending -->
        <div class="task-row">
          <div class="task-info">
            <span class="task-icon">💧</span>
            <span class="task-name">Plumbing riser routing</span>
            <span class="assignee-mini" style="background: #06b6d4;">AK</span>
          </div>
          <div class="gantt-area">
            <div class="gantt-bar pending" style="left: 55%; width: 30%;">
              <span class="bar-label">Not Started</span>
            </div>
          </div>
        </div>

        <!-- Task 5 -->
        <div class="task-row">
          <div class="task-info">
            <span class="task-icon">🔥</span>
            <span class="task-name">Fire sprinkler layout</span>
            <span class="assignee-mini" style="background: #8b5cf6;">TR</span>
          </div>
          <div class="gantt-area">
            <div class="gantt-bar in-progress" style="left: 35%; width: 40%;">
              <div class="bar-progress" style="width: 40%"></div>
              <span class="bar-label">40%</span>
            </div>
          </div>
        </div>

        <!-- Today Line -->
        <div class="today-line" style="left: calc(180px + 35%);"></div>
      </div>
    </div>

    <!-- Legend -->
    <div class="timeline-legend">
      <div class="legend-item">
        <div class="legend-color completed"></div>
        <span>Completed</span>
      </div>
      <div class="legend-item">
        <div class="legend-color in-progress"></div>
        <span>In Progress</span>
      </div>
      <div class="legend-item">
        <div class="legend-color behind"></div>
        <span>Behind Schedule</span>
      </div>
      <div class="legend-item">
        <div class="legend-color pending"></div>
        <span>Not Started</span>
      </div>
      <div class="legend-item">
        <div class="legend-milestone">◆</div>
        <span>Milestone</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-timeline-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 360px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 11px;
}

/* Header */
.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f9fafb;
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

.project-badge {
  padding: 4px 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 500;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.date-range {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #374151;
}

.nav-btn {
  width: 24px;
  height: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 10px;
}

.view-options {
  display: flex;
  gap: 2px;
  background: #f3f4f6;
  padding: 2px;
  border-radius: 6px;
}

.view-opt {
  padding: 4px 10px;
  font-size: 10px;
  border: none;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  color: #6b7280;
}

.view-opt.active {
  background: white;
  color: #1f2937;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* Timeline Grid */
.timeline-grid {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.date-headers {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  background: #fafafa;
}

.task-column-header {
  width: 180px;
  flex-shrink: 0;
  padding: 8px 12px;
  font-weight: 600;
  color: #374151;
  border-right: 1px solid #e5e7eb;
}

.dates-scroll {
  flex: 1;
  display: flex;
}

.date-col {
  flex: 1;
  text-align: center;
  padding: 4px 0;
  border-right: 1px solid #f3f4f6;
}

.date-col.today {
  background: rgba(100, 126, 234, 0.1);
}

.date-col.weekend {
  background: #f9fafb;
  color: #9ca3af;
}

.date-day {
  font-size: 9px;
  color: #9ca3af;
}

.date-num {
  font-size: 11px;
  font-weight: 500;
  color: #374151;
}

.date-col.today .date-num {
  color: #667eea;
  font-weight: 600;
}

/* Task Rows */
.task-rows {
  flex: 1;
  overflow-y: auto;
  position: relative;
}

.task-row {
  display: flex;
  border-bottom: 1px solid #f3f4f6;
  min-height: 44px;
}

.task-row.highlighted {
  background: rgba(100, 126, 234, 0.05);
}

.task-row.milestone-row {
  background: #fef3c7;
}

.task-info {
  width: 180px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-right: 1px solid #e5e7eb;
}

.task-icon {
  font-size: 14px;
}

.task-name {
  flex: 1;
  font-size: 11px;
  color: #374151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.assignee-mini {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  font-size: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gantt-area {
  flex: 1;
  position: relative;
  padding: 8px 0;
}

/* Gantt Bars */
.gantt-bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 9px;
  font-weight: 500;
  overflow: hidden;
}

.gantt-bar.completed {
  background: #d1fae5;
  border: 1px solid #10b981;
}

.gantt-bar.in-progress {
  background: #e0e7ff;
  border: 1px solid #667eea;
}

.gantt-bar.behind {
  background: #fee2e2;
  border: 1px solid #ef4444;
}

.gantt-bar.pending {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #9ca3af;
}

.bar-progress {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 3px;
}

.gantt-bar.completed .bar-progress {
  background: #10b981;
}

.gantt-bar.in-progress .bar-progress {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.gantt-bar.behind .bar-progress {
  background: #ef4444;
}

.bar-label {
  position: relative;
  z-index: 1;
  color: #374151;
}

.bar-label.warning {
  color: #ef4444;
}

.gantt-bar.completed .bar-label {
  color: white;
}

/* Milestone */
.milestone-marker {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.milestone-diamond {
  color: #f59e0b;
  font-size: 16px;
}

.milestone-label {
  font-size: 9px;
  color: #92400e;
  font-weight: 500;
  white-space: nowrap;
}

/* Today Line */
.today-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ef4444;
  z-index: 10;
}

.today-line::before {
  content: 'Today';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  color: #ef4444;
  font-weight: 500;
  white-space: nowrap;
}

/* Legend */
.timeline-legend {
  display: flex;
  gap: 16px;
  padding: 10px 16px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: #6b7280;
}

.legend-color {
  width: 16px;
  height: 10px;
  border-radius: 2px;
}

.legend-color.completed {
  background: #10b981;
}

.legend-color.in-progress {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.legend-color.behind {
  background: #ef4444;
}

.legend-color.pending {
  background: #d1d5db;
}

.legend-milestone {
  color: #f59e0b;
  font-size: 12px;
}
</style>
