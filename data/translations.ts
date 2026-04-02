export type Lang = "en" | "he";

export const t = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      badge: "Automation · Integration · AI",
      cta: "See my work",
      cv: "Download CV",
    },
    about: {
      label: "> about.txt",
      title: "About Me",
      p1: "I'm Itai Markovetzky — an Automation & Integration Developer with a passion for building intelligent systems that eliminate repetitive work and unlock real business value.",
      p2: "I specialize in enterprise-grade RPA, API-driven integrations, and AI-powered automation — combining tools like UiPath, Workato, and LangChain with hands-on Python and C# development. I hold a B.Sc. in Computer Science and bring a sharp, engineering-first mindset to every problem I tackle.",
      p3: "When I'm not automating something, you'll probably find me gaming.",
    },
    projects: { label: "> ls ./projects", title: "Projects" },
    skills: { label: "> skills --list", title: "Skills" },
    contact: {
      label: "> contact --reach-out",
      title: "Get In Touch",
      subtitle: "Open to collaborations, interesting projects, or just a good conversation about AI and automation.",
    },
    chat: {
      placeholder: "Ask about Itai...",
      greeting: "Hi! I'm Itai's AI assistant. Ask me anything about his experience, skills, or projects.",
    },
    footer: { built: "Built with Next.js + ❤️", hint: "psst... try ↑ ↑ ↓ ↓ ← → ← → B A" },
  },
  he: {
    nav: { about: "אודות", projects: "פרויקטים", skills: "כישורים", contact: "צור קשר" },
    hero: {
      badge: "אוטומציה · אינטגרציה · בינה מלאכותית",
      cta: "הצג עבודות",
      cv: "הורד קורות חיים",
    },
    about: {
      label: "> about.txt",
      title: "אודות",
      p1: "אני איתי מרקובצקי — מפתח אוטומציה ואינטגרציה עם תשוקה לבניית מערכות חכמות שמבטלות עבודה חוזרת ויוצרות ערך עסקי אמיתי.",
      p2: "אני מתמחה ב-RPA ארגוני, אינטגרציות מבוססות API, ואוטומציה מונעת בינה מלאכותית — שילוב של כלים כמו UiPath, Workato ו-LangChain עם פיתוח Python ו-C#. בוגר תואר ראשון במדעי המחשב.",
      p3: "כשאני לא מאטמט משהו, כנראה תמצא אותי משחק.",
    },
    projects: { label: "> ls ./projects", title: "פרויקטים" },
    skills: { label: "> skills --list", title: "כישורים" },
    contact: {
      label: "> contact --reach-out",
      title: "צור קשר",
      subtitle: "פתוח לשיתופי פעולה, פרויקטים מעניינים, או שיחה טובה על AI ואוטומציה.",
    },
    chat: {
      placeholder: "שאל על איתי...",
      greeting: "היי! אני העוזר של איתי. שאל אותי כל שאלה על הניסיון, הכישורים או הפרויקטים שלו.",
    },
    footer: { built: "נבנה עם Next.js + ❤️", hint: "פסט... נסה ↑ ↑ ↓ ↓ ← → ← → B A" },
  },
};
