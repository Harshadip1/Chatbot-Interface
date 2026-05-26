# NeuralChat AI — Premium AI Chatbot Platform

A production-quality, futuristic AI chatbot web application built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Features JavaScript NLP processing, smart rule-based responses, voice input, analytics dashboards, and extensive demo data — all running **locally in the browser** with no backend or external AI APIs.

![Platform](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![NLP](https://img.shields.io/badge/NLP-compromise.js-7C3AED?style=flat)

---

## Project Information

**Project Name:** NeuralChat AI Platform

**Description:** A full-featured AI chatbot interface inspired by modern AI assistants (ChatGPT, Gemini, Claude, Copilot). Uses frontend NLP for intent recognition, keyword extraction, sentiment analysis, and intelligent response generation.

---

## Features

### Core Platform
- Real-time chatbot interface with typing animations
- JavaScript NLP (compromise.js + rule-based intents)
- Intent recognition with confidence scores
- Smart response generation
- Chat history (LocalStorage)
- Markdown rendering (Marked.js)
- Voice input UI (Web Speech API)
- Dark/Light and custom themes

### Pages & Screens (25+)
| Page | Description |
|------|-------------|
| Home Landing | Hero, features, testimonials, CTA |
| Chat Interface | Full chat UI with NLP debug panel |
| AI Dashboard | Overview stats and quick actions |
| Analytics | Chart.js charts and activity timeline |
| Prompt Library | 80+ prompts across 8 categories |
| AI Personas | 6 specialized assistants |
| Voice Assistant | Speech-to-text with visualizer |
| AI Training | Intent editor and phrase management |
| Knowledge Base | 40+ articles and FAQ |
| Coding Assistant | Code examples and terminal UI |
| Study / Productivity / Translation | Specialized assistants |
| Community Prompts | User-shared templates |
| Settings, Profile, Themes | Customization |
| Notifications, History, Saved Chats | Data management |
| Models Comparison, Shortcuts, About, Contact | Reference pages |

### Demo Data
- 12,000+ simulated chat statistics
- 80+ prompt templates
- 15 conversation histories
- 50 activity log entries
- 30 community prompts
- 15 notifications
- 40 knowledge base articles
- 6 AI personas with specialized behavior

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 / CSS3 | Structure and styling |
| Vanilla JavaScript | Application logic |
| [compromise.js](https://github.com/spencermountain/compromise) | NLP tokenization & entity extraction |
| [Chart.js](https://www.chartjs.org/) | Analytics charts |
| [Marked.js](https://marked.js.org/) | Markdown rendering |
| Web Speech API | Voice input |
| LocalStorage | Persistence |

**Not Used:** Python, backend frameworks, external AI APIs

---

## Project Structure

```
Chatbot Interface/
├── index.html              # Landing page
├── chat.html               # Main chat interface
├── analytics.html          # NLP analytics dashboard
├── dashboard.html          # AI assistant dashboard
├── prompts.html            # Prompt library
├── personas.html           # AI personas
├── training.html           # AI training UI
├── knowledge.html          # Knowledge base
├── voice.html              # Voice assistant
├── coding.html             # Coding assistant
├── study.html              # Study assistant
├── ... (20+ more pages)
├── css/
│   ├── style.css           # Base styles
│   ├── chat.css            # Chat UI
│   ├── dashboard.css       # Dashboard & cards
│   ├── themes.css          # Theme variations
│   └── responsive.css      # Mobile responsive
├── js/
│   ├── app.js              # Main app controller
│   ├── nlp.js              # NLP engine
│   ├── chatbot.js          # Chat logic
│   ├── demo-data.js        # Large demo datasets
│   ├── analytics.js        # Chart rendering
│   ├── prompts.js          # Prompt library
│   ├── voice.js            # Voice assistant
│   ├── training.js         # Training UI
│   └── themes.js           # Theme customization
├── assets/
│   ├── images/
│   ├── audio/
│   └── icons/
└── README.md
```

---

## How to Run in VS Code

### Step 1: Install Visual Studio Code
1. Download VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Run the installer and complete setup
3. Launch Visual Studio Code

### Step 2: Open the Project Folder
1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `Chatbot Interface` project folder
4. Click **Select Folder**

### Step 3: Install Live Server Extension
1. Click the **Extensions** icon in the left sidebar (or press `Ctrl+Shift+X`)
2. Search for **Live Server**
3. Install **Live Server** by Ritwick Dey
4. Reload VS Code if prompted

### Step 4: Launch the Application
1. In the Explorer panel, locate `index.html`
2. **Right-click** on `index.html`
3. Click **"Open with Live Server"**
4. Your default browser will open at `http://127.0.0.1:5500` (or similar port)

### Step 5: Navigate the Platform
- Start at the **landing page** (`index.html`)
- Click **"Launch Chat"** or open `chat.html` for the main chatbot
- Use the **sidebar** to explore all pages

### Alternative: Open Without Live Server
You can also open `index.html` directly in a browser, but some features (CDN scripts) work best with a local server.

---

## Usage Guide

### Chat Interface
1. Open `chat.html`
2. Type a message or click a suggested prompt chip
3. View NLP analysis in the right panel (intent, tokens, sentiment)
4. Use 🎤 for voice input (requires microphone permission)
5. Copy or regenerate AI responses with action buttons

### NLP System
The NLP engine (`js/nlp.js`) processes every message:
- **Intent matching** — greeting, coding, study, weather, motivation, etc.
- **Keyword extraction** — via compromise.js
- **Sentiment analysis** — positive, neutral, negative
- **Confidence scores** — displayed in the debug panel

### Voice Assistant
1. Open `voice.html` or use the mic button in chat
2. Click the microphone and speak
3. View transcript and AI response

### Analytics Dashboard
Open `analytics.html` for:
- Pie, bar, line, and polar charts
- Intent distribution metrics
- Activity timeline

### Theme Customization
1. Open `themes.html` or use the 🌙 button in the header
2. Select a preset theme or custom accent color
3. Settings persist in LocalStorage

### AI Training
1. Open `training.html`
2. Add training phrases and custom responses
3. Adjust confidence threshold slider

---

## NLP System Architecture

```
User Message
     ↓
compromise.js (tokenization, entities)
     ↓
Intent Matcher (pattern scoring)
     ↓
Sentiment Analyzer (keyword-based)
     ↓
Response Generator (rule-based + persona)
     ↓
Markdown Render (Marked.js)
```

**Supported Intents:** greeting, weather, coding, study, motivation, smalltalk, general, productivity, translation, farewell

---

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full (recommended) |
| Edge 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ⚠️ Voice may need webkit prefix |
| Opera 76+ | ✅ Full |

**Requirements:**
- JavaScript enabled
- LocalStorage enabled
- Microphone permission for voice features
- Internet connection for CDN libraries (compromise, Chart.js, Marked)

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Focus search |
| `Ctrl+Shift+T` | Toggle theme |
| `Ctrl+B` | Toggle sidebar |
| `Enter` | Send message |
| `Shift+Enter` | New line in chat |

See `shortcuts.html` for the full list.

---

## Troubleshooting

### Live Server not starting
- Ensure the Live Server extension is installed and enabled
- Try clicking "Go Live" in the bottom-right status bar
- Check if another app is using port 5500

### Charts not displaying
- Verify internet connection (Chart.js loads from CDN)
- Open browser console (F12) for errors
- Refresh the analytics page

### Voice input not working
- Allow microphone permissions in browser settings
- Use Chrome or Edge for best Web Speech API support
- HTTPS or localhost required for microphone access

### NLP panel empty
- Send a message first — analysis appears after each message
- Ensure compromise.js loaded (check Network tab)

### Theme not saving
- Enable cookies/LocalStorage in browser settings
- Clear site data and re-select theme

---

## Performance Optimization

- Efficient DOM updates (append messages, not full re-render)
- Debounced search inputs
- CSS animations use GPU-friendly transforms
- Lazy chart initialization on analytics page
- LocalStorage limits chat history to 50 messages
- Intersection Observer for scroll reveal animations

---

## License

This is a demo/educational project. Free to use, modify, and deploy.

---

## Credits

Built with vanilla web technologies. NLP powered by compromise.js. No external AI APIs — all intelligence is simulated locally through rule-based logic and pattern matching.
