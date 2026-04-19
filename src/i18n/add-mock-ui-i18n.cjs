// Script to add Mock UI i18n keys for all languages
const fs = require('fs');
const path = require('path');

function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Mock UI translations for key languages
const translations = {
  en: {
    mockUI: {
      dashboard: {
        title: "Project Dashboard",
        projectName: "Tower-A MEP Project",
        period: "Period",
        refresh: "Refresh",
        totalTasks: "Total Tasks",
        inProgress: "In Progress",
        completed: "Completed",
        budgetUsed: "Budget Used",
        teamActivity: "Team Activity",
        recentUpdates: "Recent Updates",
        upcomingDeadlines: "Upcoming Deadlines"
      },
      tasks: {
        title: "Tasks",
        myTasks: "My Tasks",
        allTasks: "All Tasks",
        newTask: "New Task",
        search: "Search tasks...",
        filter: "Filter",
        priority: "Priority",
        status: "Status",
        assignee: "Assignee",
        dueDate: "Due Date",
        high: "High",
        medium: "Medium",
        low: "Low",
        todo: "To Do",
        doing: "In Progress",
        done: "Done",
        review: "Review"
      },
      viewer: {
        title: "3D Viewer",
        loading: "Loading model...",
        zoom: "Zoom",
        pan: "Pan",
        rotate: "Rotate",
        reset: "Reset View",
        measure: "Measure",
        section: "Section",
        properties: "Properties",
        layers: "Layers",
        annotations: "Annotations"
      },
      timeline: {
        title: "Project Timeline",
        today: "Today",
        week: "Week",
        month: "Month",
        phase: "Phase",
        milestone: "Milestone",
        progress: "Progress"
      },
      coordination: {
        title: "Coordination",
        clashes: "Clashes",
        issues: "Issues",
        resolved: "Resolved",
        pending: "Pending",
        severity: "Severity",
        discipline: "Discipline"
      },
      ai: {
        title: "AI Assistant",
        askAnything: "Ask anything about your project...",
        suggestions: "Suggestions",
        thinking: "Thinking...",
        send: "Send"
      },
      tools: {
        title: "Tools",
        scripts: "Scripts",
        templates: "Templates",
        automation: "Automation",
        run: "Run",
        edit: "Edit"
      },
      reports: {
        title: "Reports",
        generate: "Generate Report",
        export: "Export",
        schedule: "Schedule"
      },
      projects: {
        title: "Projects",
        recent: "Recent",
        all: "All Projects",
        create: "Create Project",
        open: "Open"
      },
      acc: {
        title: "ACC Integration",
        sync: "Sync",
        lastSync: "Last Sync",
        connected: "Connected",
        documents: "Documents",
        models: "Models"
      },
      sheets: {
        title: "Sheets",
        allSheets: "All Sheets",
        search: "Search sheets..."
      },
      common: {
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",
        add: "Add",
        close: "Close",
        loading: "Loading...",
        noData: "No data available"
      }
    }
  },
  zh: {
    mockUI: {
      dashboard: {
        title: "项目仪表板",
        projectName: "A塔MEP项目",
        period: "时期",
        refresh: "刷新",
        totalTasks: "总任务",
        inProgress: "进行中",
        completed: "已完成",
        budgetUsed: "已用预算",
        teamActivity: "团队活动",
        recentUpdates: "最近更新",
        upcomingDeadlines: "即将到期"
      },
      tasks: {
        title: "任务",
        myTasks: "我的任务",
        allTasks: "所有任务",
        newTask: "新建任务",
        search: "搜索任务...",
        filter: "筛选",
        priority: "优先级",
        status: "状态",
        assignee: "负责人",
        dueDate: "截止日期",
        high: "高",
        medium: "中",
        low: "低",
        todo: "待办",
        doing: "进行中",
        done: "已完成",
        review: "审核"
      },
      viewer: {
        title: "3D查看器",
        loading: "加载模型中...",
        zoom: "缩放",
        pan: "平移",
        rotate: "旋转",
        reset: "重置视图",
        measure: "测量",
        section: "剖面",
        properties: "属性",
        layers: "图层",
        annotations: "注释"
      },
      timeline: {
        title: "项目时间线",
        today: "今天",
        week: "周",
        month: "月",
        phase: "阶段",
        milestone: "里程碑",
        progress: "进度"
      },
      coordination: {
        title: "协调",
        clashes: "碰撞",
        issues: "问题",
        resolved: "已解决",
        pending: "待处理",
        severity: "严重程度",
        discipline: "专业"
      },
      ai: {
        title: "AI助手",
        askAnything: "询问关于您项目的任何问题...",
        suggestions: "建议",
        thinking: "思考中...",
        send: "发送"
      },
      tools: {
        title: "工具",
        scripts: "脚本",
        templates: "模板",
        automation: "自动化",
        run: "运行",
        edit: "编辑"
      },
      reports: {
        title: "报告",
        generate: "生成报告",
        export: "导出",
        schedule: "计划"
      },
      projects: {
        title: "项目",
        recent: "最近",
        all: "所有项目",
        create: "创建项目",
        open: "打开"
      },
      acc: {
        title: "ACC集成",
        sync: "同步",
        lastSync: "上次同步",
        connected: "已连接",
        documents: "文档",
        models: "模型"
      },
      sheets: {
        title: "图纸",
        allSheets: "所有图纸",
        search: "搜索图纸..."
      },
      common: {
        save: "保存",
        cancel: "取消",
        delete: "删除",
        edit: "编辑",
        add: "添加",
        close: "关闭",
        loading: "加载中...",
        noData: "暂无数据"
      }
    }
  },
  ja: {
    mockUI: {
      dashboard: {
        title: "プロジェクトダッシュボード",
        projectName: "タワーA MEPプロジェクト",
        period: "期間",
        refresh: "更新",
        totalTasks: "総タスク",
        inProgress: "進行中",
        completed: "完了",
        budgetUsed: "使用予算",
        teamActivity: "チーム活動",
        recentUpdates: "最近の更新",
        upcomingDeadlines: "今後の期限"
      },
      tasks: {
        title: "タスク",
        myTasks: "マイタスク",
        allTasks: "すべてのタスク",
        newTask: "新規タスク",
        search: "タスクを検索...",
        filter: "フィルター",
        priority: "優先度",
        status: "ステータス",
        assignee: "担当者",
        dueDate: "期限",
        high: "高",
        medium: "中",
        low: "低",
        todo: "未着手",
        doing: "進行中",
        done: "完了",
        review: "レビュー"
      },
      viewer: {
        title: "3Dビューア",
        loading: "モデルを読み込み中...",
        zoom: "ズーム",
        pan: "パン",
        rotate: "回転",
        reset: "ビューをリセット",
        measure: "計測",
        section: "断面",
        properties: "プロパティ",
        layers: "レイヤー",
        annotations: "注釈"
      },
      timeline: {
        title: "プロジェクトタイムライン",
        today: "今日",
        week: "週",
        month: "月",
        phase: "フェーズ",
        milestone: "マイルストーン",
        progress: "進捗"
      },
      coordination: {
        title: "コーディネーション",
        clashes: "干渉",
        issues: "課題",
        resolved: "解決済み",
        pending: "保留中",
        severity: "深刻度",
        discipline: "専門分野"
      },
      ai: {
        title: "AIアシスタント",
        askAnything: "プロジェクトについて何でも質問してください...",
        suggestions: "提案",
        thinking: "考え中...",
        send: "送信"
      },
      tools: {
        title: "ツール",
        scripts: "スクリプト",
        templates: "テンプレート",
        automation: "自動化",
        run: "実行",
        edit: "編集"
      },
      reports: {
        title: "レポート",
        generate: "レポート生成",
        export: "エクスポート",
        schedule: "スケジュール"
      },
      projects: {
        title: "プロジェクト",
        recent: "最近",
        all: "すべてのプロジェクト",
        create: "プロジェクト作成",
        open: "開く"
      },
      acc: {
        title: "ACC連携",
        sync: "同期",
        lastSync: "最終同期",
        connected: "接続済み",
        documents: "ドキュメント",
        models: "モデル"
      },
      sheets: {
        title: "シート",
        allSheets: "すべてのシート",
        search: "シートを検索..."
      },
      common: {
        save: "保存",
        cancel: "キャンセル",
        delete: "削除",
        edit: "編集",
        add: "追加",
        close: "閉じる",
        loading: "読み込み中...",
        noData: "データがありません"
      }
    }
  }
};

// Languages to update
const languages = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar'];

languages.forEach(lang => {
  const filePath = path.join(__dirname, `${lang}.json`);

  try {
    let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    // Use language-specific translation or fallback to English
    const langTranslations = translations[lang] || translations.en;
    content = deepMerge(content, langTranslations);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    console.log(`Updated ${lang}.json`);
  } catch (err) {
    console.error(`Error updating ${lang}.json:`, err.message);
  }
});

console.log('Done adding Mock UI i18n keys!');
