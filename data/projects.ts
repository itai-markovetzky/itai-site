export interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
  category: "automation" | "ai" | "games" | "devops" | "data";
}

export const projects: Project[] = [
  {
    name: "RAG-Resume",
    description:
      "Interactive chatbot that lets you upload a PDF resume and ask questions about the candidate using RAG + Google Gemini LLM.",
    tags: ["AI", "Python", "RAG", "Gemini"],
    githubUrl: "https://github.com/itai-markovetzky/RAG-Resume",
    featured: true,
    category: "ai",
  },
  {
    name: "ToDoList",
    description:
      "Full-stack ToDo app built with FastAPI and Streamlit, orchestrated with Docker Compose.",
    tags: ["Python", "FastAPI", "Docker"],
    githubUrl: "https://github.com/itai-markovetzky/ToDoList",
    category: "automation",
  },
  {
    name: "password-manager",
    description: "A local password manager built with Python.",
    tags: ["Python", "Security"],
    githubUrl: "https://github.com/itai-markovetzky/password-manager",
    category: "automation",
  },
  {
    name: "pomodoro-timer",
    description: "Pomodoro timer app built with Python.",
    tags: ["Python"],
    githubUrl: "https://github.com/itai-markovetzky/pomodoro-timer",
    category: "automation",
  },
  {
    name: "QR-Code-Project",
    description:
      "Node.js tool that generates QR codes from URLs and saves them as PNG files.",
    tags: ["Node.js"],
    githubUrl: "https://github.com/itai-markovetzky/QR-Code-Project",
    category: "automation",
  },
  {
    name: "Basketball-Optimal-Weight",
    description:
      "Data science project analyzing optimal weight for basketball players.",
    tags: ["Data Science", "Python"],
    githubUrl: "https://github.com/itai-markovetzky/Basketball-Optimal-Weight",
    category: "data",
  },
  {
    name: "pong-game",
    description: "Classic Pong game built with Python.",
    tags: ["Python", "Game Dev"],
    githubUrl: "https://github.com/itai-markovetzky/pong-game",
    category: "games",
  },
  {
    name: "snake_game",
    description: "Classic Snake game built with Python.",
    tags: ["Python", "Game Dev"],
    githubUrl: "https://github.com/itai-markovetzky/snake_game",
    category: "games",
  },
  {
    name: "bulls-and-cows",
    description:
      "Bulls and Cows number guessing game built as a C# WinForms app.",
    tags: ["C#", "WinForms"],
    githubUrl: "https://github.com/itai-markovetzky/bulls-and-cows",
    category: "games",
  },
  {
    name: "hit-web-server",
    description: "Web server project from a DevOps course.",
    tags: ["DevOps", "Docker"],
    githubUrl: "https://github.com/itai-markovetzky/hit-web-server",
    category: "devops",
  },
];
