let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "New York",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://github.com/sung8",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "1",
      background_url: "",
      categories: [
        {
          name: "ai-tools",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#F2F6DF",
            },
            {
              name: "claude",
              url: "https://claude.ai",
              icon: "asterisk",
              icon_color: "#EDEBE1",
            },
            {
              name: "perplexity",
              url: "https://www.perplexity.ai/bin",
              icon: "bulb",
              icon_color: "#1F6974",
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/app",
              icon: "sparkles",
              icon_color: "#3892DA",
            },
          ],
        },
        {
          name: "coding-interview-prep",
          links: [
            {
              name: "neetcode",
              url: "https://neetcode.io/practice",
              icon: "rocket",
              icon_color: "#B3132D",
            },
            {
              name: "alphabet150",
              url: "https://alphabet150.com/",
              icon: "variable",
              icon_color: "#99A3B0",
            },
            {
              name: "big-o",
              url: "https://www.bigocheatsheet.com/",
              icon: "",
              icon_color: "",
            },
            {
              name: "graph",
              url: "https://workshape.github.io/visual-graph-algorithms/",
              icon: "",
              icon_color: "",
            },
            {
              name: "visualgo",
              url: "https://visualgo.net/en",
              icon: "",
              icon_color: "",
            },
            {
              name: "usfca",
              url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
              icon: "",
              icon_color: "",
            },
            {
              name: "lc/main",
              url: "https://leetcode.com/problemset/",
              icon: "code-plus",
              icon_color: "#fab387",
            },
            {
              name: "lc/150",
              url: "https://leetcode.com/studyplan/top-interview-150/",
              icon: "target-arrow",
              icon_color: "#fab387",
            },
            {
              name: "lc/75",
              url: "https://leetcode.com/studyplan/leetcode-75/",
              icon: "stairs-up",
              icon_color: "#fab387",
            },
            {
              name: "hr/kit",
              url: "https://www.hackerrank.com/interview/interview-preparation-kit",
              icon: "hexagon-letter-h",
              icon_color: "#068932",
            },
            {
              name: "hr/algos",
              url: "https://www.hackerrank.com/domains/algorithms",
              icon: "hexagons",
              icon_color: "#068932",
            },
            {
              name: "sql",
              url: "https://platform.stratascratch.com/coding?code_type=1",
              icon: "scribble",
              icon_color: "#00A699",
            },
          ],
        },
        {
          name: "job-boards",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/jobs/search?keywords=Software%20Engineer&location=United%20States",
              icon: "brand-linkedin",
              icon_color: "#0A66C2",
            },
            {
              name: "indeed",
              url: "https://www.indeed.com/jobs?q=software+engineer&l=United+States",
              icon: "info-square",
              icon_color: "#1046A1",
            },
            {
              name: "f500",
              url: "https://www.50pros.com/fortune500",
              icon: "currency-forint",
              icon_color: "#EE4B2B",
            },
            {
              name: "nerdwerk",
              url: "https://nerdwerk.io/",
              icon: "mood-nerd",
              icon_color: "#89b4fa",
            },
            {
              name: "simplify/jobs",
              url: "https://github.com/SimplifyJobs/New-Grad-Positions",
              icon: "braces",
              icon_color: "#89b4fa",
            },
            {
              name: "simplify/internships",
              url: "https://github.com/SimplifyJobs/Summer2025-Internships",
              icon: "braces",
              icon_color: "#89b4fa",
            },
            {
              name: "newgrad24",
              url: "https://github.com/ReaVNaiL/New-Grad-2024",
              icon: "braces",
              icon_color: "#89b4fa",
            },
            {
              name: "in1",
              url: "https://github.com/AlanChen4/Summer-2024-SWE-Internships",
              icon: "braces",
              icon_color: "#89b4fa",
            },
            {
              name: "in2",
              url: "https://github.com/etkhdaniel/Summer2024-Internships",
              icon: "braces",
              icon_color: "#89b4fa",
            },
            {
              name: "res",
              url: "https://github.com/sung8/resume-latex",
              icon: "script",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
    {
      name: "2",
      background_url: "",
      categories: [
        {
          name: "data",
          links: [
            {
              name: "flowingdata",
              url: "https://web.telegram.org",
              icon: "chart-dots-2",
              icon_color: "#a6e3a1",
            },
            {
              name: "datatau",
              url: "http://www.datatau.com/ ",
              icon: "article",
              icon_color: "#00B4B4",
            },
            {
              name: "/r/dataengineering",
              url: "https://www.reddit.com/r/dataengineering/",
              icon: "",
              icon_color: "#f38ba8",
            },
            {
              name: "/r/datascience",
              url: "https://www.reddit.com/r/datascience/",
              icon: "",
              icon_color: "#f38ba8",
            },
            {
              name: "/t/dataengineering",
              url: "https://www.reddit.com/t/data_engineering/",
              icon: "",
              icon_color: "#f38ba8",
            },
            {
              name: "dev.to",
              url: "https://dev.to/t/dataengineering",
            },
            {
              name: "de/wiki",
              url: "https://dataengineering.wiki/Index",
              icon: "database-cog",
              icon_color: "#9E9E9E",
            },
            {
              name: "practicepython",
              url: "https://www.practicepython.org/",
              icon: "",
              icon_color: "",
            },
            {
              name: "datacamp",
              url: "https://www.datacamp.com/",
              icon: "",
              icon_color: "",
            },
          ],
        },
        {
          name: "vim",
          links: [
            {
              name: "genius",
              url: "http://www.vimgenius.com/",
              icon: "pencil-question",
              icon_color: "#5BD0B6",
            },
            {
              name: "cheatsheet",
              url: "https://vim.rtorr.com/",
              icon: "square",
              icon_color: "#BD5353",
            },
            {
              name: "hero",
              url: "https://www.vim-hero.com/",
              icon: "switch-vertical",
              icon_color: "#FD8B8B",
            },
            {
              name: "open",
              url: "https://www.openvim.com/",
              icon: "brand-open-source",
              icon_color: "#800080",
            },
          ],
        },
        {
          name: "other",
          links: [
            {
              name: "pixiv",
              url: "https://www.pixiv.net/en/users/9127068",
              icon: "photo",
              icon_color: "#0096FA",
            },
            {
              name: "hacker news",
              url: "https://news.ycombinator.com/",
              icon: "",
              icon_color: "",
            },
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "",
              icon_color: "#a6e3a1",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#FF0000",
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net/sixty",
              icon: "binary-tree",
              icon_color: "#fab387",
            },
            {
              name: "/r/unixporn",
              url: "https://www.reddit.com/r/unixporn/",
              icon: "",
              icon_color: "#6EE8F6",
            },
            {
              name: "/r/UsabilityPorn",
              url: "https://www.reddit.com/r/UsabilityPorn/",
              icon: "",
              icon_color: "#89b4fa",
            },
            {
              name: "substack",
              url: "https://substack.com/home",
              icon: "stack-2",
              icon_color: "#E65C16",
            },
            {
              name: "bestvaluegpu",
              url: "https://bestvaluegpu.com/",
              icon: "shopping-cart-dollar",
              icon_color: "#068932",
            },
            {
              name: "pcprice",
              url: "https://pcpricetracker.in/",
              icon: "",
              icon_color: "",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
