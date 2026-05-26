/* ===== NLP Processing Engine (compromise.js + rule-based) ===== */
const NLPEngine = {
  intents: {
    greeting: {
      patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings', 'howdy', 'sup', 'what\'s up'],
      responses: [
        'Hello! I am your AI assistant. How can I help you today?',
        'Hi there! Ready to assist with coding, studying, or anything else you need.',
        'Hey! Great to see you. What would you like to explore today?'
      ]
    },
    weather: {
      patterns: ['weather', 'temperature', 'forecast', 'rain', 'sunny', 'climate', 'hot', 'cold outside'],
      responses: [
        'Based on typical patterns, today looks partly cloudy with mild temperatures. For live weather, check a dedicated weather service.',
        'I can discuss weather concepts, but for real-time forecasts, a weather API would be needed. Generally, spring brings variable conditions!'
      ]
    },
    coding: {
      patterns: ['code', 'program', 'debug', 'javascript', 'python', 'function', 'error', 'bug', 'api', 'react', 'sql', 'algorithm', 'compile', 'syntax'],
      responses: [
        'I would be happy to help with coding! Share your code or describe the problem, and I will provide guidance with examples.',
        'For programming help, I can explain concepts, debug logic, and suggest best practices. What language are you working with?'
      ]
    },
    study: {
      patterns: ['study', 'learn', 'exam', 'homework', 'explain', 'teach', 'quiz', 'math', 'science', 'history', 'calculus', 'biology'],
      responses: [
        'Let us break this down step by step. What subject or topic are you studying?',
        'I can help explain concepts, create study plans, and generate practice questions. What do you need help with?'
      ]
    },
    motivation: {
      patterns: ['motivate', 'motivation', 'inspire', 'encourage', 'stuck', 'give up', 'tired', 'lazy', 'goals', 'productive'],
      responses: [
        'Remember: progress beats perfection. Every small step forward counts. You have got this!',
        'Challenges are opportunities in disguise. Take a deep breath, focus on one task, and build momentum from there.',
        'Your future self will thank you for the effort you put in today. Stay focused on your goals!'
      ]
    },
    smalltalk: {
      patterns: ['how are you', 'who are you', 'what can you do', 'tell me about yourself', 'are you real', 'joke', 'funny'],
      responses: [
        'I am an AI assistant powered by JavaScript NLP. I process language locally and help with various tasks!',
        'I run entirely in your browser using intent matching and natural language parsing. No external APIs needed!',
        'I can help with coding, studying, productivity, weather discussions, and friendly conversation.'
      ]
    },
    general: {
      patterns: ['what', 'why', 'how', 'when', 'where', 'explain', 'define', 'meaning', 'difference'],
      responses: [
        'That is a great question. Let me break it down for you with a clear explanation.',
        'Here is what I understand about your question. I will provide a structured response.',
        'Based on my knowledge base, here is a comprehensive answer to your query.'
      ]
    },
    productivity: {
      patterns: ['schedule', 'plan', 'organize', 'task', 'todo', 'deadline', 'meeting', 'time management', 'priority'],
      responses: [
        'Let us organize your tasks. I recommend using the Eisenhower matrix: urgent/important first.',
        'For productivity, try time-blocking: assign specific hours to focused work sessions.',
        'Break large projects into smaller milestones. Would you like me to create a daily schedule?'
      ]
    },
    translation: {
      patterns: ['translate', 'spanish', 'french', 'german', 'language', 'meaning in'],
      responses: [
        'I can help with basic translations and language learning. Share the text and target language.',
        'For translation practice, I can explain grammar rules and provide equivalent phrases.'
      ]
    },
    farewell: {
      patterns: ['bye', 'goodbye', 'see you', 'later', 'exit', 'quit'],
      responses: [
        'Goodbye! Feel free to return anytime you need assistance.',
        'Take care! Your chat history is saved locally for next time.',
        'See you later! Have a productive day.'
      ]
    }
  },

  doc: null,

  init() {
    if (typeof nlp !== 'undefined') {
      this.doc = nlp;
    }
  },

  process(text) {
    const normalized = text.toLowerCase().trim();
    const results = {
      original: text,
      tokens: [],
      keywords: [],
      entities: [],
      sentiment: { label: 'neutral', score: 0 },
      intent: { name: 'general', confidence: 0 },
      allIntents: []
    };

    if (typeof nlp !== 'undefined') {
      const doc = nlp(normalized);
      results.tokens = doc.terms().out('array');
      results.keywords = doc.match('#Noun+').out('array').slice(0, 8);
      if (doc.people().length) results.entities.push(...doc.people().out('array').map(e => ({ type: 'person', value: e })));
      if (doc.places().length) results.entities.push(...doc.places().out('array').map(e => ({ type: 'place', value: e })));
    } else {
      results.tokens = normalized.split(/\s+/).filter(Boolean);
      results.keywords = results.tokens.filter(w => w.length > 4);
    }

    results.sentiment = this.analyzeSentiment(normalized);
    const intentMatch = this.matchIntent(normalized);
    results.intent = intentMatch.best;
    results.allIntents = intentMatch.all;

    return results;
  },

  matchIntent(text) {
    const scores = [];
    Object.entries(this.intents).forEach(([name, data]) => {
      let score = 0;
      let matches = 0;
      data.patterns.forEach(pattern => {
        if (text.includes(pattern)) {
          score += pattern.split(' ').length * 2;
          matches++;
        }
      });
      const words = text.split(/\s+/);
      data.patterns.forEach(pattern => {
        pattern.split(' ').forEach(word => {
          if (words.includes(word)) score += 1;
        });
      });
      if (matches > 0) score = Math.min(score / (data.patterns.length * 0.5), 1);
      scores.push({ name, confidence: Math.min(score, 0.99), matches });
    });

    scores.sort((a, b) => b.confidence - a.confidence);
    const best = scores[0];
    if (best.confidence < 0.15) {
      return {
        best: { name: 'general', confidence: 0.45 },
        all: scores.slice(0, 5)
      };
    }
    return { best: { name: best.name, confidence: best.confidence }, all: scores.slice(0, 5) };
  },

  analyzeSentiment(text) {
    const positive = ['good', 'great', 'awesome', 'love', 'happy', 'excellent', 'amazing', 'wonderful', 'thanks', 'thank'];
    const negative = ['bad', 'terrible', 'hate', 'sad', 'angry', 'awful', 'horrible', 'worst', 'frustrated', 'annoyed'];
    let score = 0;
    const words = text.split(/\s+/);
    words.forEach(w => {
      if (positive.some(p => w.includes(p))) score += 1;
      if (negative.some(n => w.includes(n))) score -= 1;
    });
    if (score > 0) return { label: 'positive', score };
    if (score < 0) return { label: 'negative', score };
    return { label: 'neutral', score: 0 };
  },

  generateResponse(nlpResult, persona = 'default') {
    const intentName = nlpResult.intent.name;
    const intent = this.intents[intentName] || this.intents.general;
    let responses = [...intent.responses];

    const personaResponses = {
      coding: {
        coding: ['As your coding assistant, I can help debug, explain patterns, and write examples. Paste your code!'],
        general: ['From a developer perspective, let me provide a technical explanation.']
      },
      study: {
        study: ['Let us learn together! I will explain step by step with examples.'],
        general: ['Here is an educational breakdown of your question.']
      },
      fitness: {
        general: ['Stay active! Here is advice related to your question from a fitness perspective.'],
        motivation: ['You have got the discipline! Every workout builds your stronger self.']
      }
    };

    if (personaResponses[persona]?.[intentName]) {
      responses = personaResponses[persona][intentName];
    }

    const base = responses[Math.floor(Math.random() * responses.length)];

    if (nlpResult.keywords.length > 0 && intentName === 'general') {
      return `${base}\n\nI noticed you mentioned: **${nlpResult.keywords.slice(0, 3).join(', ')}**. Would you like me to elaborate on any of these topics?`;
    }

    if (intentName === 'coding') {
      return `${base}\n\n\`\`\`javascript\n// Example\nconst result = await fetchData();\nconsole.log(result);\n\`\`\``;
    }

    return base;
  },

  getTrainingData() {
    return JSON.parse(localStorage.getItem('nlp_training') || '{}');
  },

  saveTraining(intent, phrase, response) {
    const data = this.getTrainingData();
    if (!data[intent]) data[intent] = { phrases: [], responses: [] };
    if (phrase) data[intent].phrases.push(phrase);
    if (response) data[intent].responses.push(response);
    localStorage.setItem('nlp_training', JSON.stringify(data));
    return data;
  }
};

NLPEngine.init();
