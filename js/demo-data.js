/* ===== Demo Data - Large AI Platform Datasets ===== */
const DemoData = {
  stats: {
    totalChats: 12847,
    totalMessages: 89432,
    activeUsers: 3421,
    avgResponseTime: '1.2s',
    nlpAccuracy: 94.7,
    satisfactionRate: 96.2,
    promptsUsed: 45230,
    voiceSessions: 2847
  },

  heroStats: [
    { value: '12.8K+', label: 'Active Conversations' },
    { value: '94.7%', label: 'NLP Accuracy' },
    { value: '50ms', label: 'Avg Response' },
    { value: '24/7', label: 'AI Availability' }
  ],

  features: [
    { icon: '🧠', title: 'Advanced NLP Engine', desc: 'Intent recognition, sentiment analysis, and entity extraction powered by JavaScript NLP libraries.' },
    { icon: '💬', title: 'Smart Conversations', desc: 'Context-aware responses with markdown support, code highlighting, and intelligent reply suggestions.' },
    { icon: '🎤', title: 'Voice Assistant', desc: 'Speech-to-text input with real-time waveform visualization and voice command support.' },
    { icon: '📊', title: 'Analytics Dashboard', desc: 'Comprehensive insights into chat patterns, intent distribution, and engagement metrics.' },
    { icon: '🎭', title: 'AI Personas', desc: 'Switch between specialized assistants for coding, study, fitness, business, and creative writing.' },
    { icon: '🔒', title: 'Privacy First', desc: 'All processing happens locally in your browser. No external API calls required.' }
  ],

  testimonials: [
    { quote: 'The NLP intent matching is remarkably accurate. It understands context better than most demo platforms I have tested.', author: 'Alex M.', role: 'Software Developer', initial: 'A' },
    { quote: 'Switching between personas for coding help and study sessions has transformed my workflow completely.', author: 'Jordan K.', role: 'Computer Science Student', initial: 'J' },
    { quote: 'The analytics dashboard gives incredible visibility into conversation patterns. Perfect for understanding AI behavior.', author: 'Sam R.', role: 'Product Manager', initial: 'S' },
    { quote: 'Voice input works flawlessly. The waveform animation and real-time transcription feel incredibly polished.', author: 'Taylor L.', role: 'Content Creator', initial: 'T' },
    { quote: 'Having hundreds of pre-built prompts saved me hours. The productivity category alone is worth exploring.', author: 'Morgan P.', role: 'Business Analyst', initial: 'M' },
    { quote: 'The training UI lets me customize intents and responses. Great for prototyping conversational flows.', author: 'Casey W.', role: 'UX Designer', initial: 'C' }
  ],

  conversations: [
    { id: 'c1', title: 'JavaScript Async Patterns', preview: 'Can you explain promises vs async/await?', time: '2 min ago', messages: 24 },
    { id: 'c2', title: 'Machine Learning Basics', preview: 'What is the difference between supervised and unsupervised learning?', time: '15 min ago', messages: 18 },
    { id: 'c3', title: 'React State Management', preview: 'When should I use Redux vs Context API?', time: '1 hour ago', messages: 32 },
    { id: 'c4', title: 'Python Data Analysis', preview: 'Help me write a pandas script for CSV aggregation', time: '2 hours ago', messages: 15 },
    { id: 'c5', title: 'Study Schedule Planning', preview: 'Create a 2-week study plan for calculus finals', time: '3 hours ago', messages: 12 },
    { id: 'c6', title: 'Fitness Routine Design', preview: 'Design a 4-day split workout for beginners', time: '5 hours ago', messages: 20 },
    { id: 'c7', title: 'Business Pitch Review', preview: 'Review my startup elevator pitch for clarity', time: 'Yesterday', messages: 28 },
    { id: 'c8', title: 'Creative Writing Help', preview: 'Help me develop a sci-fi story opening', time: 'Yesterday', messages: 45 },
    { id: 'c9', title: 'SQL Query Optimization', preview: 'How do I optimize this JOIN query?', time: '2 days ago', messages: 16 },
    { id: 'c10', title: 'Translation Practice', preview: 'Translate this paragraph to Spanish', time: '2 days ago', messages: 8 },
    { id: 'c11', title: 'CSS Grid Layout', preview: 'Build a responsive dashboard with CSS Grid', time: '3 days ago', messages: 22 },
    { id: 'c12', title: 'Motivation & Goals', preview: 'Help me set SMART goals for Q2', time: '3 days ago', messages: 14 },
    { id: 'c13', title: 'API Design Discussion', preview: 'REST vs GraphQL for mobile apps', time: '4 days ago', messages: 36 },
    { id: 'c14', title: 'Docker Container Setup', preview: 'Write a Dockerfile for Node.js app', time: '4 days ago', messages: 19 },
    { id: 'c15', title: 'Marketing Copy', preview: 'Write email subject lines for product launch', time: '5 days ago', messages: 11 }
  ],

  chatMessages: {
    default: [
      { role: 'ai', content: 'Hello! I am your AI assistant powered by JavaScript NLP. I can help with coding, studying, productivity, and much more. How can I assist you today?', time: '10:00 AM' },
      { role: 'user', content: 'Can you explain how async/await works in JavaScript?', time: '10:01 AM' },
      { role: 'ai', content: `Great question! **Async/await** is syntactic sugar built on top of Promises.\n\n\`\`\`javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\`\`\`\n\nKey points:\n- \`async\` makes a function return a Promise\n- \`await\` pauses execution until the Promise resolves\n- Use try/catch for error handling`, time: '10:01 AM' },
      { role: 'user', content: 'What about Promise.all vs Promise.race?', time: '10:03 AM' },
      { role: 'ai', content: '**Promise.all** waits for ALL promises to resolve. If any reject, the whole thing rejects.\n\n**Promise.race** returns as soon as the FIRST promise settles (resolve or reject).\n\nUse Promise.all for parallel independent requests. Use Promise.race for timeouts or fastest-response scenarios.', time: '10:03 AM' }
    ],
    coding: [
      { role: 'user', content: 'Debug this Python function that returns None unexpectedly', time: '2:30 PM' },
      { role: 'ai', content: 'I see the issue! You are missing a `return` statement in your conditional branch.\n\n```python\ndef calculate(x, y):\n    if y != 0:\n        result = x / y  # Missing return!\n    return None  # Always hits this\n```\n\nFix: Add `return result` inside the if block.', time: '2:30 PM' }
    ]
  },

  suggestedPrompts: [
    'Explain quantum computing simply',
    'Write a Python sorting algorithm',
    'Help me plan my week',
    'Debug my JavaScript code',
    'Create a study schedule',
    'Summarize this concept',
    'Generate API documentation',
    'Motivate me for today',
    'Translate to French',
    'Design a workout plan'
  ],

  promptCategories: ['Productivity', 'Coding', 'Study', 'Fitness', 'Business', 'Writing', 'Design', 'Marketing'],

  prompts: (() => {
    const categories = {
      Productivity: [
        'Create a detailed daily schedule optimized for deep work sessions with 90-minute focus blocks',
        'Generate a weekly review template for tracking goals, wins, and areas for improvement',
        'Help me prioritize my task list using the Eisenhower matrix framework',
        'Design a morning routine that boosts energy and mental clarity for remote work',
        'Create a meeting agenda template for productive 30-minute standups',
        'Build a decision-making framework for evaluating new project opportunities',
        'Generate time-blocking strategies for managing multiple concurrent projects',
        'Create a habit tracker system with weekly milestones and accountability checkpoints',
        'Design an email management workflow to achieve inbox zero daily',
        'Help me create SMART goals for my quarterly OKRs with measurable outcomes'
      ],
      Coding: [
        'Explain the difference between var, let, and const in JavaScript with examples',
        'Write a REST API endpoint in Express.js with input validation and error handling',
        'Debug this React component that re-renders infinitely on state update',
        'Create a binary search tree implementation in Python with insert and search',
        'Explain Docker multi-stage builds for optimizing Node.js container images',
        'Write SQL queries to find duplicate records and aggregate sales by region',
        'Implement debounce and throttle functions from scratch in JavaScript',
        'Create a Git workflow guide for feature branches and pull request reviews',
        'Explain WebSocket vs Server-Sent Events for real-time chat applications',
        'Write unit tests for an async function using Jest with mock fetch calls'
      ],
      Study: [
        'Create a 14-day study plan for calculus final exam covering limits through integrals',
        'Explain photosynthesis step by step suitable for high school biology level',
        'Generate flashcard content for World War II key events and dates',
        'Help me understand matrix multiplication with visual examples',
        'Create mnemonics for remembering the periodic table groups',
        'Explain the water cycle with a diagram description for a science project',
        'Generate practice problems for organic chemistry functional groups',
        'Create an essay outline for analyzing themes in classic literature',
        'Explain supply and demand curves with real-world market examples',
        'Design a spaced repetition schedule for learning a new language vocabulary'
      ],
      Fitness: [
        'Design a 4-day upper/lower split workout for intermediate lifters',
        'Create a 1500-calorie meal plan with high protein for muscle building',
        'Explain proper deadlift form with common mistakes to avoid',
        'Generate a 5K training plan for beginners over 8 weeks',
        'Create a home workout routine requiring only bodyweight exercises',
        'Design a stretching routine for desk workers with lower back pain',
        'Explain macronutrient ratios for cutting vs bulking phases',
        'Create a HIIT cardio session lasting 20 minutes with modifications',
        'Generate a recovery protocol for post-marathon training',
        'Design a yoga flow sequence for morning flexibility and mindfulness'
      ],
      Business: [
        'Write an executive summary for a SaaS startup pitch deck',
        'Create a SWOT analysis template for entering a new market segment',
        'Generate cold email templates for B2B sales outreach campaigns',
        'Design a customer onboarding flow for a subscription product',
        'Create KPI dashboards metrics for a digital marketing agency',
        'Write a competitive analysis framework for AI chatbot platforms',
        'Generate interview questions for hiring a senior product manager',
        'Create a pricing strategy comparison for freemium vs tiered models',
        'Design a quarterly business review presentation outline',
        'Write professional responses to common customer complaint scenarios'
      ],
      Writing: [
        'Write an engaging blog post introduction about sustainable technology trends',
        'Create a compelling product description for a smart home device',
        'Generate social media captions for a product launch campaign',
        'Write a professional cover letter for a software engineering role',
        'Create dialogue between two characters discovering a hidden world',
        'Generate newsletter content ideas for a tech community audience',
        'Write persuasive copy for a landing page call-to-action section',
        'Create a story outline using the hero journey narrative structure',
        'Generate headline variations for A/B testing email campaigns',
        'Write a press release announcing a new AI platform feature launch'
      ],
      Design: [
        'Create a color palette for a futuristic AI dashboard interface',
        'Generate UI component specifications for a chat message bubble',
        'Design a mobile-first navigation pattern for a multi-page web app',
        'Create accessibility guidelines checklist for form components',
        'Generate icon concepts for voice, analytics, and settings features',
        'Design a loading state animation concept for AI thinking indicator',
        'Create typography scale recommendations for a SaaS landing page',
        'Generate wireframe descriptions for an analytics dashboard layout',
        'Design dark mode color token mappings from a light theme base',
        'Create micro-interaction ideas for button hover and click states'
      ],
      Marketing: [
        'Create a content calendar for 30 days of AI technology posts',
        'Generate SEO meta descriptions for a chatbot platform landing page',
        'Write ad copy variations for Google Ads targeting developers',
        'Create an influencer outreach template for product review requests',
        'Design a referral program structure with incentive tiers',
        'Generate hashtag strategies for launching an AI product on social media',
        'Create customer persona profiles for enterprise vs individual users',
        'Write case study outlines showcasing productivity improvements',
        'Generate webinar topic ideas for demonstrating NLP capabilities',
        'Create email nurture sequence for free trial to paid conversion'
      ]
    };
    const all = [];
    let id = 1;
    Object.entries(categories).forEach(([cat, items]) => {
      items.forEach((text, i) => {
        all.push({
          id: `p${id++}`,
          category: cat,
          text,
          uses: Math.floor(Math.random() * 5000) + 100,
          favorites: Math.floor(Math.random() * 500) + 10,
          trending: i < 3
        });
      });
    });
    return all;
  })(),

  personas: [
    { id: 'coding', name: 'Coding Assistant', icon: '💻', desc: 'Expert in programming languages, debugging, and software architecture', tags: ['JavaScript', 'Python', 'Debug'], color: '#7C3AED' },
    { id: 'study', name: 'Study Tutor', icon: '📚', desc: 'Patient educator for academic subjects and exam preparation', tags: ['Math', 'Science', 'History'], color: '#06B6D4' },
    { id: 'fitness', name: 'Fitness Coach', icon: '💪', desc: 'Workout plans, nutrition advice, and motivation for health goals', tags: ['Workout', 'Nutrition', 'Cardio'], color: '#22C55E' },
    { id: 'business', name: 'Business Advisor', icon: '📈', desc: 'Strategy, marketing, and professional communication guidance', tags: ['Strategy', 'Sales', 'Growth'], color: '#F59E0B' },
    { id: 'writer', name: 'Creative Writer', icon: '✍️', desc: 'Storytelling, copywriting, and content creation assistance', tags: ['Fiction', 'Blog', 'Copy'], color: '#EC4899' },
    { id: 'motivation', name: 'Motivational Coach', icon: '🌟', desc: 'Inspiration, goal setting, and personal development support', tags: ['Goals', 'Mindset', 'Habits'], color: '#F97316' }
  ],

  analytics: {
    intents: [
      { name: 'Greeting', count: 4521, percent: 18 },
      { name: 'Coding Help', count: 3892, percent: 15.5 },
      { name: 'Study Help', count: 3245, percent: 13 },
      { name: 'General Question', count: 2987, percent: 12 },
      { name: 'Weather', count: 1876, percent: 7.5 },
      { name: 'Motivation', count: 1654, percent: 6.6 },
      { name: 'Small Talk', count: 1432, percent: 5.7 },
      { name: 'Productivity', count: 1289, percent: 5.1 },
      { name: 'Translation', count: 987, percent: 3.9 },
      { name: 'Other', count: 3187, percent: 12.7 }
    ],
    dailyChats: [120, 145, 132, 178, 165, 198, 210, 189, 234, 256, 278, 245, 289, 312, 298, 334, 356, 378, 345, 389, 412, 398, 425, 445, 467, 489, 512, 534, 556, 578],
    responseCategories: [
      { label: 'Informative', value: 42 },
      { label: 'Code Examples', value: 28 },
      { label: 'Suggestions', value: 15 },
      { label: 'Clarification', value: 10 },
      { label: 'Greeting', value: 5 }
    ],
    engagement: { daily: 78, weekly: 85, monthly: 92 }
  },

  notifications: (() => {
    const types = ['update', 'prompt', 'chat', 'persona', 'training'];
    const titles = [
      'NLP engine updated with improved intent matching',
      'New trending prompt added to Coding category',
      'Chat reminder: Continue your React discussion',
      'Fitness Coach persona responses enhanced',
      'Training completed: 15 new phrases learned',
      'Analytics report ready for this week',
      'Saved conversation exported successfully',
      'Voice recognition accuracy improved',
      'New knowledge base articles available',
      'Theme customization options expanded',
      'Smart reply suggestions updated',
      'Community prompt reached 1000 uses',
      'Study Tutor persona new study plans added',
      'Keyboard shortcuts guide updated',
      'Offline mode now supports cached responses'
    ];
    return titles.map((title, i) => ({
      id: `n${i + 1}`,
      title,
      message: `System notification #${i + 1}. Check the platform for more details about this update.`,
      time: `${i + 1}h ago`,
      type: types[i % types.length],
      read: i > 5
    }));
  })(),

  activityLog: (() => {
    const actions = ['Chat started', 'Intent matched', 'Prompt copied', 'Persona switched', 'Voice input used', 'Response regenerated', 'Conversation saved', 'Theme changed', 'Training phrase added', 'Analytics viewed'];
    return Array.from({ length: 50 }, (_, i) => ({
      id: `a${i + 1}`,
      action: actions[i % actions.length],
      detail: `Session ${1000 + i} - ${['coding', 'study', 'general', 'fitness'][i % 4]} context`,
      time: `${i * 3 + 1} min ago`,
      icon: ['💬', '🧠', '📋', '🎭', '🎤', '🔄', '💾', '🎨', '📚', '📊'][i % 10]
    }));
  })(),

  knowledgeBase: (() => {
    const topics = [
      { icon: '🚀', title: 'Getting Started', count: 24 },
      { icon: '🧠', title: 'NLP System', count: 18 },
      { icon: '💬', title: 'Chat Features', count: 32 },
      { icon: '🎤', title: 'Voice Assistant', count: 15 },
      { icon: '📊', title: 'Analytics', count: 21 },
      { icon: '🎭', title: 'AI Personas', count: 12 },
      { icon: '⚙️', title: 'Settings', count: 28 },
      { icon: '🔧', title: 'Troubleshooting', count: 19 }
    ];
    const articles = [
      { title: 'How does intent recognition work?', category: 'NLP System', excerpt: 'Learn how the platform matches user messages to predefined intents using keyword extraction and confidence scoring.' },
      { title: 'Setting up voice input', category: 'Voice Assistant', excerpt: 'Enable microphone permissions and use the Web Speech API for hands-free conversation with your AI assistant.' },
      { title: 'Customizing AI personas', category: 'AI Personas', excerpt: 'Switch between specialized assistants and customize their behavior through the training interface.' },
      { title: 'Understanding analytics metrics', category: 'Analytics', excerpt: 'Explore chat statistics, intent distribution charts, and engagement metrics on the dashboard.' },
      { title: 'Managing chat history', category: 'Chat Features', excerpt: 'Save, export, and organize conversations using folders and the history page.' },
      { title: 'Training custom intents', category: 'NLP System', excerpt: 'Add training phrases, edit responses, and tune confidence thresholds in the training UI.' },
      { title: 'Using the prompt library', category: 'Getting Started', excerpt: 'Browse hundreds of categorized prompts, favorite templates, and copy them to your chat.' },
      { title: 'Theme customization guide', category: 'Settings', excerpt: 'Switch between dark, light, and custom themes with persistent local storage.' },
      { title: 'Keyboard shortcuts reference', category: 'Getting Started', excerpt: 'Speed up your workflow with global shortcuts for navigation and chat actions.' },
      { title: 'Offline mode explained', category: 'Troubleshooting', excerpt: 'Use cached responses and demo data when working without an internet connection.' }
    ];
    for (let i = 11; i <= 40; i++) {
      articles.push({
        title: `Guide ${i}: Advanced platform feature walkthrough`,
        category: topics[i % topics.length].title,
        excerpt: `Comprehensive tutorial covering feature set ${i} with step-by-step instructions and best practices.`
      });
    }
    return { topics, articles };
  })(),

  communityPrompts: (() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: `cp${i + 1}`,
      author: `User${1000 + i}`,
      prompt: [
        'Act as a senior code reviewer and analyze this pull request for security vulnerabilities and performance issues',
        'You are a patient math tutor. Explain calculus concepts using everyday analogies',
        'Generate a complete meal prep plan for a vegetarian athlete training for a marathon',
        'Write a technical blog post comparing microservices vs monolithic architecture',
        'Create a 30-day social media content calendar for a B2B SaaS product launch',
        'Design a user onboarding flow with progressive disclosure for a complex dashboard',
        'Explain machine learning model evaluation metrics in simple terms with examples',
        'Generate interview preparation questions for a frontend developer position',
        'Create a project management template for agile sprint planning',
        'Write documentation for a REST API with authentication examples'
      ][i % 10],
      rating: (4 + Math.random()).toFixed(1),
      likes: Math.floor(Math.random() * 500) + 50,
      comments: Math.floor(Math.random() * 80) + 5,
      time: `${i + 1} days ago`
    }));
  })(),

  codeExamples: [
    { lang: 'JavaScript', title: 'Async Data Fetching', code: `async function fetchUsers() {\n  const res = await fetch('/api/users');\n  return res.json();\n}` },
    { lang: 'Python', title: 'List Comprehension', code: `squares = [x**2 for x in range(10)\n          if x % 2 == 0]` },
    { lang: 'CSS', title: 'Glassmorphism Card', code: `.card {\n  background: rgba(255,255,255,0.1);\n  backdrop-filter: blur(10px);\n}` },
    { lang: 'SQL', title: 'Aggregate Query', code: `SELECT category, COUNT(*)\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 5;` },
    { lang: 'TypeScript', title: 'Generic Interface', code: `interface ApiResponse<T> {\n  data: T;\n  status: number;\n}` }
  ],

  models: [
    { name: 'Neural Lite', speed: 'Fast', accuracy: 'Good', context: '4K', coding: true, voice: true, free: true },
    { name: 'Neural Pro', speed: 'Medium', accuracy: 'Excellent', context: '8K', coding: true, voice: true, free: false },
    { name: 'Neural Ultra', speed: 'Slow', accuracy: 'Best', context: '32K', coding: true, voice: true, free: false },
    { name: 'Code Specialist', speed: 'Fast', accuracy: 'Excellent', context: '16K', coding: true, voice: false, free: false },
    { name: 'Creative Plus', speed: 'Medium', accuracy: 'Good', context: '8K', coding: false, voice: true, free: true }
  ],

  shortcuts: [
    { action: 'New chat', keys: ['Ctrl', 'N'] },
    { action: 'Send message', keys: ['Enter'] },
    { action: 'New line in message', keys: ['Shift', 'Enter'] },
    { action: 'Toggle sidebar', keys: ['Ctrl', 'B'] },
    { action: 'Search', keys: ['Ctrl', 'K'] },
    { action: 'Voice input', keys: ['Ctrl', 'Shift', 'V'] },
    { action: 'Clear chat', keys: ['Ctrl', 'Shift', 'C'] },
    { action: 'Toggle theme', keys: ['Ctrl', 'Shift', 'T'] },
    { action: 'Open settings', keys: ['Ctrl', ','] },
    { action: 'Export chat', keys: ['Ctrl', 'E'] },
    { action: 'Regenerate response', keys: ['Ctrl', 'R'] },
    { action: 'Copy last response', keys: ['Ctrl', 'Shift', 'C'] }
  ],

  smartReplies: [
    'Tell me more', 'That makes sense', 'Can you elaborate?', 'Show me an example',
    'What are the alternatives?', 'Thanks!', 'How do I implement this?', 'Summarize that',
    'Explain like I am 5', 'What are the best practices?', 'Any edge cases?', 'Got it, next step?'
  ],

  memories: Array.from({ length: 15 }, (_, i) => ({
    id: `m${i + 1}`,
    content: ['Prefers Python over JavaScript', 'Studying for calculus exam', 'Works on React projects', 'Interested in machine learning', 'Morning person - best before noon'][i % 5],
    date: `${i + 1} days ago`
  })),

  folders: [
    { name: 'Work Projects', count: 12, icon: '📁' },
    { name: 'Study Notes', count: 8, icon: '📚' },
    { name: 'Code Help', count: 24, icon: '💻' },
    { name: 'Personal', count: 5, icon: '🏠' },
    { name: 'Archived', count: 47, icon: '📦' }
  ]
};

if (typeof module !== 'undefined') module.exports = DemoData;
