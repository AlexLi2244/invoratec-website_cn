<script setup lang="ts">
// Time Hub - Weekly Timesheet UI
</script>

<template>
  <div class="timehub-container">
    <!-- Header -->
    <div class="header">
      <div class="header-left">
        <span class="icon">&#128337;</span>
        <span class="title">Time Hub</span>
      </div>
      <div class="header-right">
        <div class="week-nav">
          <button class="nav-btn">&lt;</button>
          <span class="week-label">Dec 25 - Dec 31, 2024</span>
          <button class="nav-btn">&gt;</button>
        </div>
        <button class="submit-btn">Submit Week</button>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <div class="card">
        <div class="card-value">32.5h</div>
        <div class="card-label">This Week</div>
      </div>
      <div class="card billable">
        <div class="card-value">28.0h</div>
        <div class="card-label">Billable</div>
      </div>
      <div class="card non-billable">
        <div class="card-value">4.5h</div>
        <div class="card-label">Non-Billable</div>
      </div>
      <div class="card pending">
        <div class="card-value">Pending</div>
        <div class="card-label">Approval Status</div>
      </div>
    </div>

    <!-- Timesheet Grid -->
    <div class="timesheet">
      <table>
        <thead>
          <tr>
            <th class="project-col">Project / Task</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
            <th class="total-col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="project-cell">
              <div class="project-name">Hospital Tower - MEP</div>
              <div class="task-name">Electrical Modeling</div>
            </td>
            <td><input type="text" value="8.0" class="time-input" /></td>
            <td><input type="text" value="7.5" class="time-input" /></td>
            <td><input type="text" value="8.0" class="time-input" /></td>
            <td><input type="text" value="6.0" class="time-input" /></td>
            <td><input type="text" value="4.0" class="time-input" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td class="total-cell">33.5h</td>
          </tr>
          <tr>
            <td class="project-cell">
              <div class="project-name">Data Center Phase 2</div>
              <div class="task-name">Coordination Review</div>
            </td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td><input type="text" value="0.5" class="time-input" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td><input type="text" value="2.0" class="time-input" /></td>
            <td><input type="text" value="4.0" class="time-input" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td class="total-cell">6.5h</td>
          </tr>
          <tr class="non-billable-row">
            <td class="project-cell">
              <div class="project-name">Internal</div>
              <div class="task-name">Team Meeting</div>
              <span class="badge non-billable">Non-Billable</span>
            </td>
            <td><input type="text" value="1.0" class="time-input" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td><input type="text" value="1.0" class="time-input" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td><input type="text" value="0.5" class="time-input" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td><input type="text" value="" class="time-input empty" /></td>
            <td class="total-cell">2.5h</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="project-cell"><strong>Daily Totals</strong></td>
            <td><strong>9.0h</strong></td>
            <td><strong>8.0h</strong></td>
            <td><strong>9.0h</strong></td>
            <td><strong>8.0h</strong></td>
            <td><strong>8.5h</strong></td>
            <td><strong>0h</strong></td>
            <td><strong>0h</strong></td>
            <td class="total-cell grand"><strong>42.5h</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Add Row Button -->
    <button class="add-row-btn">+ Add Project / Task</button>
  </div>
</template>

<style scoped>
.timehub-container {
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

.icon {
  font-size: 24px;
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

.week-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.nav-btn {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
}

.nav-btn:hover {
  color: #3b82f6;
}

.week-label {
  font-size: 13px;
  font-weight: 500;
  color: #334155;
}

.submit-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.card {
  background: white;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.card-value {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
}

.card-label {
  font-size: 11px;
  color: #64748b;
  margin-top: 4px;
}

.card.billable {
  border-left: 3px solid #10b981;
}

.card.non-billable {
  border-left: 3px solid #f59e0b;
}

.card.pending .card-value {
  color: #f59e0b;
  font-size: 14px;
}

.timesheet {
  background: white;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

th {
  background: #f1f5f9;
  padding: 10px 8px;
  text-align: center;
  font-weight: 600;
  color: #475569;
  border-bottom: 1px solid #e2e8f0;
}

th.project-col {
  text-align: left;
  min-width: 180px;
}

th.total-col {
  background: #e0f2fe;
  color: #0369a1;
}

td {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #f1f5f9;
}

.project-cell {
  text-align: left;
  padding: 8px 12px;
}

.project-name {
  font-weight: 600;
  color: #1e293b;
  font-size: 12px;
}

.task-name {
  color: #64748b;
  font-size: 11px;
  margin-top: 2px;
}

.badge {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 600;
  margin-top: 4px;
}

.badge.non-billable {
  background: #fef3c7;
  color: #b45309;
}

.time-input {
  width: 45px;
  padding: 6px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #1e293b;
  background: #f8fafc;
}

.time-input:focus {
  outline: none;
  border-color: #3b82f6;
  background: white;
}

.time-input.empty {
  background: white;
  border-style: dashed;
}

.total-cell {
  font-weight: 600;
  color: #0369a1;
  background: #f0f9ff;
}

.total-cell.grand {
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 14px;
}

.non-billable-row {
  background: #fffbeb;
}

tfoot td {
  background: #f8fafc;
  border-top: 2px solid #e2e8f0;
}

tfoot strong {
  color: #334155;
}

.add-row-btn {
  margin-top: 12px;
  background: none;
  border: 2px dashed #cbd5e1;
  color: #64748b;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
}

.add-row-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

@media (max-width: 768px) {
  .summary-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
