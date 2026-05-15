document.addEventListener('DOMContentLoaded', () => {
  const storageKey = 'softlife-tasks-v2';

  const defaultTaskViews = {
    dashboard: [
      {
        title: 'Daily',
        progress: 0,
        tasks: [
          { text: 'Wake up on time', type: 'Compulsory' },
          { text: 'Sleep on time', type: 'Compulsory' },
          { text: 'Workout for at least an hour', type: 'Compulsory' },
          { text: 'Journal for a few minutes', type: 'Compulsory' },
          { text: 'Entertainment time', type: 'Optional' },
        ],
      },
    ],
    schedule: [
      {
        title: 'Schedule',
        progress: 0,
        tasks: [
          { text: 'Plan morning routine', type: 'Compulsory' },
          { text: 'Review calendar blocks', type: 'Compulsory' },
          { text: 'Reserve focus time', type: 'Optional' },
        ],
      },
    ],
    tasks: [
      {
        title: 'Tasks',
        progress: 0,
        tasks: [
          { text: 'Finish priority task', type: 'Compulsory' },
          { text: 'Clear inbox', type: 'Optional' },
        ],
      },
    ],
    analytics: [
      {
        title: 'Analytics',
        progress: 0,
        tasks: [
          { text: 'Check weekly progress', type: 'Compulsory' },
          { text: 'Review sleep trends', type: 'Optional' },
        ],
      },
    ],
    focus: [
      {
        title: 'Focus Mode',
        progress: 0,
        tasks: [
          { text: 'Start a 25 minute focus sprint', type: 'Compulsory' },
          { text: 'Put phone away', type: 'Compulsory' },
          { text: 'Take a short reset break', type: 'Optional' },
        ],
      },
    ],
    journal: [
      {
        title: 'Journal',
        progress: 0,
        tasks: [
          { text: 'Write a gratitude note', type: 'Compulsory' },
          { text: 'Reflect on the day', type: 'Compulsory' },
          { text: 'Add a mood check-in', type: 'Optional' },
        ],
      },
    ],
    settings: [
      {
        title: 'Settings',
        progress: 0,
        tasks: [
          { text: 'Update profile details', type: 'Compulsory' },
          { text: 'Adjust notification preferences', type: 'Optional' },
        ],
      },
    ],
  };

  const viewCopy = {
    dashboard: {
      title: 'Good Evening, Nandita ✨',
      subtitle: 'Organize your day softly.',
      date: 'Friday, May 15',
      sectionHeader: 'Daily Sections',
      addButton: '+ Add Task',
      rightTitle: 'Weekly Overview',
      reflectionTitle: 'Reflection',
      reflectionText:
        'Start from zero and let the numbers grow as you keep updating the app.',
      rightStats: [
        ['Tasks Completed', '0'],
        ['Sleep Consistency', '0%'],
        ['Workout Days', '0/7'],
        ['Mood Stability', '0'],
      ],
      overview: [
        ['Daily Progress', '0%'],
        ['Sleep Hours', '0 hrs'],
        ['Focus Score', '0'],
      ],
    },
    schedule: {
      title: 'Schedule Planner',
      subtitle: 'Map the day into clear blocks.',
      date: 'Today',
      sectionHeader: 'Schedule Blocks',
      addButton: '+ Add Block',
      rightTitle: 'Time Balance',
      reflectionTitle: 'Planning Note',
      reflectionText:
        'Plan from a zero baseline and let the schedule fill in as you add more detail.',
      rightStats: [
        ['Planned Blocks', '0'],
        ['Open Gaps', '0'],
        ['Priority Hours', '0'],
        ['Buffer Time', '0'],
      ],
      overview: [
        ['Planned Hours', '0'],
        ['Meeting Load', '0'],
        ['Focus Windows', '0'],
      ],
    },
    tasks: {
      title: 'Task List',
      subtitle: 'Track what still needs attention.',
      date: 'Today',
      sectionHeader: 'Open Tasks',
      addButton: '+ Add Task',
      rightTitle: 'Task Health',
      reflectionTitle: 'Task Note',
      reflectionText:
        'Keep the list empty at first, then build it up as you update the site regularly.',
      rightStats: [
        ['Open Tasks', '0'],
        ['Done Today', '0'],
        ['Priority Items', '0'],
        ['Streak', '0 days'],
      ],
      overview: [
        ['Task Load', '0'],
        ['Completed', '0%'],
        ['Due Soon', '0'],
      ],
    },
    analytics: {
      title: 'Analytics',
      subtitle: 'See how the week is trending.',
      date: 'This Week',
      sectionHeader: 'Insights',
      addButton: '+ Add Note',
      rightTitle: 'Weekly Metrics',
      reflectionTitle: 'Insight',
      reflectionText:
        'Analytics will stay at zero until there is enough updated activity to measure.',
      rightStats: [
        ['Consistency', '0%'],
        ['Energy Trend', '0'],
        ['Focus Trend', '0'],
        ['Best Day', '0'],
      ],
      overview: [
        ['Average Focus', '0'],
        ['Average Sleep', '0 hrs'],
        ['Productive Days', '0'],
      ],
    },
    focus: {
      title: 'Focus Mode',
      subtitle: 'Cut distractions and work in bursts.',
      date: 'Now',
      sectionHeader: 'Focus Rituals',
      addButton: '+ Add Focus Block',
      rightTitle: 'Focus Session',
      reflectionTitle: 'Focus Tip',
      reflectionText:
        'Focus mode begins at zero and grows when you start recording real sessions.',
      rightStats: [
        ['Current Sprint', '0 min'],
        ['Break Timer', '0 min'],
        ['Focus Score', '0'],
        ['Sessions', '0'],
      ],
      overview: [
        ['Deep Work', '0'],
        ['Distractions', '0'],
        ['Active Session', '0'],
      ],
    },
    journal: {
      title: 'Journal',
      subtitle: 'Capture what mattered today.',
      date: 'Tonight',
      sectionHeader: 'Journal Prompts',
      addButton: '+ Add Entry',
      rightTitle: 'Mood Check',
      reflectionTitle: 'Journal Prompt',
      reflectionText:
        'Journal values stay at zero until you start adding entries regularly.',
      rightStats: [
        ['Entries', '0'],
        ['Mood', '0'],
        ['Days in a Row', '0'],
        ['Longest Entry', '0 min'],
      ],
      overview: [
        ['Journal Time', '0 min'],
        ['Mood', '0'],
        ['Reflection', '0'],
      ],
    },
    settings: {
      title: 'Settings',
      subtitle: 'Adjust your workspace preferences.',
      date: 'Profile',
      sectionHeader: 'Preferences',
      addButton: '+ Add Preference',
      rightTitle: 'Account',
      reflectionTitle: 'Settings Note',
      reflectionText:
        'Settings can stay at zero until you choose the preferences you want to keep.',
      rightStats: [
        ['Theme', '0'],
        ['Notifications', '0'],
        ['Backups', '0'],
        ['Sync', '0'],
      ],
      overview: [
        ['Profile', '0'],
        ['Alerts', '0'],
        ['Mode', '0'],
      ],
    },
  };

  const navItems = Array.from(document.querySelectorAll('.sidebar nav li'));
  const sectionsGrid = document.getElementById('sectionsGrid');
  const viewTitle = document.getElementById('viewTitle');
  const viewSubtitle = document.getElementById('viewSubtitle');
  const viewDate = document.getElementById('viewDate');
  const sectionHeaderTitle = document.getElementById('sectionHeaderTitle');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const rightCardTitle = document.getElementById('rightCardTitle');
  const reflectionTitle = document.getElementById('reflectionTitle');
  const reflectionText = document.getElementById('reflectionText');
  const overviewLabel1 = document.getElementById('overviewLabel1');
  const overviewLabel2 = document.getElementById('overviewLabel2');
  const overviewLabel3 = document.getElementById('overviewLabel3');
  const overviewValue1 = document.getElementById('overviewValue1');
  const overviewValue2 = document.getElementById('overviewValue2');
  const overviewValue3 = document.getElementById('overviewValue3');
  const rightStatNodes = [
    document.getElementById('rightStat1'),
    document.getElementById('rightStat2'),
    document.getElementById('rightStat3'),
    document.getElementById('rightStat4'),
  ];
  const newTaskInput = document.getElementById('newTaskInput');
  const newTaskType = document.getElementById('newTaskType');
  const reminderText = document.getElementById('reminderText');
  const navViewMap = {
    Dashboard: 'dashboard',
    Schedule: 'schedule',
    Tasks: 'tasks',
    Analytics: 'analytics',
    'Focus Mode': 'focus',
    Journal: 'journal',
    Settings: 'settings',
  };

  function loadTasks() {
    try {
      const savedTasks = localStorage.getItem(storageKey);
      if (!savedTasks) {
        return JSON.parse(JSON.stringify(defaultTaskViews));
      }

      const parsedTasks = JSON.parse(savedTasks);
      return {
        ...JSON.parse(JSON.stringify(defaultTaskViews)),
        ...parsedTasks,
      };
    } catch {
      return JSON.parse(JSON.stringify(defaultTaskViews));
    }
  }

  let taskViews = loadTasks();
  let activeView = 'dashboard';

  function saveTasks() {
    localStorage.setItem(storageKey, JSON.stringify(taskViews));
  }

  function buildTaskList(tasks) {
    return tasks
      .map(
        (task) => `
      <div class="task-item">
        <div class="task-left">
          <input type="checkbox">
          <div>
            <p>${task.text}</p>
            <span class="task-label ${task.type.toLowerCase()}">${task.type}</span>
          </div>
        </div>
        <button type="button" class="edit-task-btn">Edit</button>
      </div>
    `
      )
      .join('');
  }

  function renderSections(viewKey) {
    const sections = taskViews[viewKey] || [];
    sectionsGrid.innerHTML = '';

    const totalTasks = sections.reduce((sum, sec) => sum + sec.tasks.length, 0);
    const compulsoryCount = sections.reduce(
      (sum, sec) =>
        sum + sec.tasks.filter((t) => t.type === 'Compulsory').length,
      0
    );
    const avgProgress =
      sections.length > 0
        ? Math.round(
            sections.reduce((sum, sec) => sum + sec.progress, 0) /
              sections.length
          )
        : 0;

    sections.forEach((section) => {
      const card = document.createElement('div');
      card.classList.add('section-card');

      const compulsoryTasks = section.tasks.filter(
        (task) => task.type === 'Compulsory'
      );
      const optionalTasks = section.tasks.filter(
        (task) => task.type === 'Optional'
      );

      card.innerHTML = `
        <div class="section-top">
          <div>
            <h3>${section.title}</h3>
            <p>${section.progress}% completed</p>
          </div>

          <div class="section-progress">
            ${section.progress}%
          </div>
        </div>

        <div class="task-group">
          <div class="task-group-header">
            <h4>Compulsory</h4>
          </div>
          ${buildTaskList(compulsoryTasks)}
        </div>

        <div class="task-group optional-group">
          <div class="task-group-header">
            <h4>Optional</h4>
          </div>
          ${buildTaskList(optionalTasks)}
        </div>

        <button type="button" class="add-task-section">${viewCopy[viewKey].addButton}</button>
      `;

      sectionsGrid.appendChild(card);
    });

    const addButton = sectionsGrid.querySelector('.add-task-section');
    if (addButton) {
      addButton.addEventListener('click', () => addTask(viewKey));
    }
  }

  function generateDynamicReflection(viewKey) {
    const sections = taskViews[viewKey] || [];
    const totalTasks = sections.reduce((sum, sec) => sum + sec.tasks.length, 0);
    const compulsoryCount = sections.reduce(
      (sum, sec) =>
        sum + sec.tasks.filter((t) => t.type === 'Compulsory').length,
      0
    );
    const optionalCount = totalTasks - compulsoryCount;
    const avgProgress =
      sections.length > 0
        ? Math.round(
            sections.reduce((sum, sec) => sum + sec.progress, 0) /
              sections.length
          )
        : 0;

    const insights = {
      dashboard: () => {
        if (totalTasks === 0) {
          return 'Start small. Add your first daily task to begin building momentum.';
        }
        if (avgProgress === 0) {
          return `You have ${compulsoryCount} essential task${compulsoryCount !== 1 ? 's' : ''} waiting. Begin with what matters most.`;
        }
        if (avgProgress < 50) {
          return `You're making progress—${avgProgress}% done. Keep going, every step counts.`;
        }
        if (avgProgress < 100) {
          return `Almost there—${avgProgress}% complete. Finish strong today.`;
        }
        return 'You crushed it today. Rest well and prepare for tomorrow.';
      },
      schedule: () => {
        if (totalTasks === 0) {
          return 'Map your day. Add time blocks to protect what matters most.';
        }
        return `You have ${totalTasks} block${totalTasks !== 1 ? 's' : ''} planned. Structure brings calm.`;
      },
      tasks: () => {
        if (totalTasks === 0) {
          return 'Your list is clear. Add tasks only when they truly need your attention.';
        }
        if (compulsoryCount > 0) {
          return `${compulsoryCount} essential task${compulsoryCount !== 1 ? 's' : ''} in focus. Let nothing distract you.`;
        }
        return `You have ${totalTasks} task${totalTasks !== 1 ? 's' : ''} to explore. Pick the most important first.`;
      },
      analytics: () => {
        if (totalTasks === 0) {
          return 'No data yet. Start tracking to see your patterns emerge.';
        }
        return `You're averaging ${avgProgress}% completion across sections. Consistency builds results.`;
      },
      focus: () => {
        if (totalTasks === 0) {
          return 'Set a focus ritual. One clear intention beats scattered effort.';
        }
        return `${compulsoryCount} deep work task${compulsoryCount !== 1 ? 's' : ''} waiting. Silence everything else.`;
      },
      journal: () => {
        if (totalTasks === 0) {
          return 'Begin with one line. Reflection compounds over time.';
        }
        return `You have ${totalTasks} prompt${totalTasks !== 1 ? 's' : ''}. Your voice matters, even in silence.`;
      },
      settings: () => {
        return 'Your preferences shape how you work. Keep them simple and true to you.';
      },
    };

    return insights[viewKey]
      ? insights[viewKey]()
      : 'Keep building. Your system grows with every small choice.';
  }

  function generateDynamicDate(viewKey) {
    const now = new Date();
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const hour = now.getHours();

    const dateFormats = {
      dashboard: `${dayName}, ${monthName} ${date}`,
      schedule: `${dayName}, ${date}`,
      tasks: `${dayName} — ${monthName} ${date}`,
      analytics: (() => {
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        return `${monthName} ${weekStart.getDate()}–${weekEnd.getDate()}`;
      })(),
      focus: (() => {
        if (hour < 12) return 'Morning Focus';
        if (hour < 17) return 'Afternoon Focus';
        return 'Evening Focus';
      })(),
      journal: `${dayName} Night`,
      settings: `Updated ${monthName} ${date}`,
    };

    return dateFormats[viewKey] || `${dayName}, ${date}`;
  }

  function generateDynamicReminder() {
    let totalTasks = 0;
    let totalCompulsory = 0;
    let totalProgress = 0;
    let viewCount = 0;

    Object.values(taskViews).forEach((sections) => {
      sections.forEach((section) => {
        totalTasks += section.tasks.length;
        totalCompulsory += section.tasks.filter(
          (t) => t.type === 'Compulsory'
        ).length;
        totalProgress += section.progress;
        viewCount += 1;
      });
    });

    const avgProgress =
      viewCount > 0 ? Math.round(totalProgress / viewCount) : 0;

    if (totalTasks === 0) {
      return 'Begin with one task. Everything starts with a single choice.';
    }
    if (avgProgress === 0) {
      return `You have ${totalCompulsory} essential tasks. Show up for them.`;
    }
    if (avgProgress < 30) {
      return `${avgProgress}% complete. Keep the momentum gentle and steady.`;
    }
    if (avgProgress < 70) {
      return `${avgProgress}% done. You're building real momentum now.`;
    }
    if (avgProgress < 100) {
      return `${avgProgress}% complete. Finish what you started today.`;
    }
    return 'You completed everything. Rest is also part of the work.';
  }

  function renderView(viewKey) {
    activeView = viewKey;
    const copy = viewCopy[viewKey];

    viewTitle.textContent = copy.title;
    viewSubtitle.textContent = copy.subtitle;
    viewDate.textContent = generateDynamicDate(viewKey);
    sectionHeaderTitle.textContent = copy.sectionHeader;
    addTaskBtn.textContent = copy.addButton;
    rightCardTitle.textContent = copy.rightTitle;
    reflectionTitle.textContent = copy.reflectionTitle;
    reflectionText.textContent = generateDynamicReflection(viewKey);

    [
      overviewLabel1.textContent,
      overviewLabel2.textContent,
      overviewLabel3.textContent,
    ] = copy.overview.map((item) => item[0]);
    [
      overviewValue1.textContent,
      overviewValue2.textContent,
      overviewValue3.textContent,
    ] = copy.overview.map((item) => item[1]);

    rightStatNodes.forEach((node, index) => {
      const stat = copy.rightStats[index];
      if (!stat || !node) {
        return;
      }

      const labelNode = node.querySelector('span');
      const valueNode = node.querySelector('strong');
      if (labelNode) {
        labelNode.textContent = stat[0];
      }
      if (valueNode) {
        valueNode.textContent = stat[1];
      }
    });

    renderSections(viewKey);
    reminderText.textContent = generateDynamicReminder();
    saveTasks();
  }

  function addTask(viewKey = activeView) {
    const taskText = newTaskInput.value.trim();
    if (!taskText) {
      return;
    }

    const normalizedType =
      newTaskType.value === 'Optional' ? 'Optional' : 'Compulsory';

    const targetSection = taskViews[viewKey][0];
    targetSection.tasks.push({ text: taskText.trim(), type: normalizedType });
    newTaskInput.value = '';
    newTaskType.value = 'Compulsory';
    renderView(viewKey);
  }

  navItems.forEach((item) => {
    item.dataset.view = navViewMap[item.textContent.trim()] || 'dashboard';

    item.addEventListener('click', () => {
      navItems.forEach((navItem) => navItem.classList.remove('active'));
      item.classList.add('active');
      renderView(item.dataset.view);
    });
  });

  addTaskBtn.addEventListener('click', () => addTask(activeView));

  newTaskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask(activeView);
    }
  });

  renderView('dashboard');
});
