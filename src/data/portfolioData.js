export const personalInfo = {
  name: "Radhakrishnan Sajeevan",
  preferredName: "Sajeevan",
  title: "Data Scientist & Mobile Solutions Engineer",
  location: "Colombo, Sri Lanka",
  phone: "+94 75 563 5689",
  email: "sajeevan2001625@gmail.com",
  github: "https://github.com/sajeevanh2r",
  githubUsername: "sajeevanh2r",
  linkedin: "https://linkedin.com/in/radhakrishnan-sajeevan",
  linkedinUsername: "radhakrishnan-sajeevan",
  bio: "Motivated undergraduate pursuing dual degrees in Data Science and Management Information Systems. Experienced in leveraging programming and analytical tools to optimize data workflows, build scalable machine learning systems, and develop high-performance cross-platform mobile applications. Demonstrated success in developing web-based systems, mobile applications, and managing title data with rigorous accuracy and cross-verification.",
  roles: [
    "Data Scientist",
    "Flutter & Mobile Developer",
    "Machine Learning Engineer",
    "MIS & Data Systems Specialist",
    "AI & RAG Developer"
  ],
  stats: [
    { label: "Dual Degrees", value: "2", subtext: "Data Science & MIS" },
    { label: "Key Projects", value: "10+", subtext: "ML, Mobile & Full Stack" },
    { label: "Core Tools", value: "20+", subtext: "PyTorch, Flutter, SQL, Tableau" },
    { label: "Client/Industry Focus", value: "100%", subtext: "Agile & Quality Driven" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "datascience",
      title: "Core Data Science & AI",
      skills: [
        { name: "Machine Learning", level: 90, icon: "Brain" },
        { name: "Data Analysis & EDA", level: 95, icon: "BarChart3" },
        { name: "Data Visualization", level: 90, icon: "PieChart" },
        { name: "RAG & Vector Search", level: 85, icon: "Cpu" },
        { name: "Predictive Modeling", level: 88, icon: "TrendingUp" },
        { name: "Prompt Engineering", level: 85, icon: "Sparkles" },
        { name: "Model Fine-Tuning", level: 80, icon: "Sliders" },
        { name: "SQL & NoSQL Databases", level: 88, icon: "Database" }
      ]
    },
    {
      id: "mobile",
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 92, icon: "Smartphone" },
        { name: "Dart", level: 90, icon: "Code" },
        { name: "Firebase Auth & Realtime DB", level: 88, icon: "Flame" },
        { name: "RESTful API Integration", level: 92, icon: "Network" },
        { name: "Cross-Platform UI/UX", level: 85, icon: "Layout" },
        { name: "State Management & Debugging", level: 86, icon: "Wrench" }
      ]
    },
    {
      id: "tools",
      title: "Software, Frameworks & BI",
      skills: [
        { name: "PyTorch & TensorFlow", level: 85, icon: "Cpu" },
        { name: "Scikit-learn & XGBoost", level: 90, icon: "Boxes" },
        { name: "Pandas & NumPy", level: 95, icon: "FileSpreadsheet" },
        { name: "Tableau & Power BI", level: 88, icon: "BarChart2" },
        { name: "MySQL & PostgreSQL", level: 88, icon: "Database" },
        { name: "MongoDB Atlas", level: 85, icon: "Server" },
        { name: "Figma UI/UX", level: 80, icon: "Figma" },
        { name: "Git & GitHub", level: 90, icon: "GitBranch" },
        { name: "Adobe Acrobat & Excel", level: 92, icon: "FileText" }
      ]
    },
    {
      id: "programming",
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "FileCode2" },
        { name: "Dart", level: 90, icon: "Code2" },
        { name: "Java", level: 82, icon: "Coffee" },
        { name: "JavaScript", level: 84, icon: "FileCode" },
        { name: "SQL", level: 90, icon: "Database" },
        { name: "C & R", level: 78, icon: "Terminal" },
        { name: "PHP", level: 75, icon: "Server" }
      ]
    },
    {
      id: "softskills",
      title: "Soft Skills & Methodologies",
      skills: [
        { name: "Problem Solving", level: 95, icon: "Lightbulb" },
        { name: "Agile / Scrum Processes", level: 90, icon: "Zap" },
        { name: "Teamwork & Collaboration", level: 92, icon: "Users" },
        { name: "Data Accuracy & Verification", level: 96, icon: "CheckCircle2" },
        { name: "Adaptability & Communication", level: 90, icon: "MessageSquare" },
        { name: "Time Management & Ownership", level: 92, icon: "Clock" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "rag-pdf-assistant",
    title: "RAG-Based PDF Assistant",
    category: "AI & Data Science",
    year: "2025",
    summary: "Intelligent PDF Q&A assistant utilizing Retrieval-Augmented Generation (RAG), FAISS vector embeddings, LangChain, and Groq ultra-fast LLM inference with a Streamlit interface.",
    description: "Built a high-performance interactive document intelligence application that ingests complex PDF files, generates chunked vector embeddings with FAISS, and runs semantic search combined with Groq LLM API to deliver instant, contextually accurate answers and summaries.",
    stack: ["Python", "Streamlit", "LangChain", "FAISS", "Groq LLM", "RAG"],
    highlights: [
      "Sub-second semantic vector similarity search using FAISS index",
      "Integrated Groq high-speed LLM inference for precise Q&A",
      "Clean interactive Streamlit UI with conversation memory"
    ],
    badge: "AI / LLM",
    featured: true
  },
  {
    id: "hunger-relief-app",
    title: "HungerRelief Mobile App",
    category: "Mobile Apps",
    year: "2025",
    summary: "Cross-platform mobile application built with Flutter & Firebase connecting food donors, NGOs, and recipients in real-time with geo-location services.",
    description: "Developed a community food redistribution platform that matches surplus food donors with charitable organizations and nearby recipients. Features real-time donor listings, geolocation-based notifications, Firebase authentication, and secure cloud storage.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Google Maps API"],
    highlights: [
      "Real-time food listing updates and reservation system",
      "Location-aware distance calculations and mapping",
      "Seamless cross-platform iOS/Android responsive interface"
    ],
    badge: "Mobile / Flutter",
    featured: true
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Pipeline",
    category: "AI & Data Science",
    year: "2024",
    summary: "End-to-end churn prediction pipeline with advanced feature engineering, SMOTE class balancing, XGBoost modeling, and Power BI interactive insight dashboard.",
    description: "Designed and trained production-grade predictive models to identify at-risk customers before churn occurs. Solved class imbalance using SMOTE and hyperparameter tuned XGBoost and Random Forest algorithms. Synthesized business actionable metrics into an interactive Power BI dashboard.",
    stack: ["Scikit-learn", "XGBoost", "SMOTE", "Pandas", "Power BI", "Python"],
    highlights: [
      "Optimized ROC-AUC and Recall metrics for high imbalanced class detection",
      "Engineered behavioral and transactional customer features",
      "Interactive Power BI visual report with customer segment drilldowns"
    ],
    badge: "Machine Learning",
    featured: true
  },
  {
    id: "house-price-ann",
    title: "House Price Prediction with ANN",
    category: "AI & Data Science",
    year: "2025",
    summary: "Deep Artificial Neural Network (ANN) regression model developed in PyTorch to forecast real estate valuations using multi-dimensional housing attributes.",
    description: "Implemented a multi-layer deep neural network regression architecture using PyTorch. Handled non-linear feature interactions, standard scaling, dropout regularization, and learning rate scheduling with visual training loss and validation convergence curves.",
    stack: ["PyTorch", "Python", "Pandas", "Matplotlib", "NumPy", "Seaborn"],
    highlights: [
      "Custom PyTorch neural network with batch normalization and dropout",
      "Comprehensive residual analysis and error metrics (RMSE, MAE, R²)",
      "Automated visualization plots for model evaluation"
    ],
    badge: "Deep Learning",
    featured: false
  },
  {
    id: "fashion-mnist-cnn",
    title: "Fashion MNIST Image Classifier",
    category: "AI & Data Science",
    year: "2025",
    summary: "High-accuracy Convolutional Neural Network (CNN) in PyTorch to classify apparel categories with data augmentation and batch normalization.",
    description: "Created a deep CNN image classification pipeline incorporating convolutional filters, max-pooling, batch normalization, and dropout to prevent overfitting on the Fashion-MNIST dataset. Evaluated with confusion matrices and per-class precision/recall metrics.",
    stack: ["PyTorch", "torchvision", "NumPy", "Matplotlib", "Python"],
    highlights: [
      "Multi-layer CNN architecture with data augmentation transforms",
      "High test accuracy with balanced confusion matrix analysis",
      "Visualization of feature maps and misclassified examples"
    ],
    badge: "Computer Vision",
    featured: false
  },
  {
    id: "nibm-furniture-analytics",
    title: "Furniture Data Management & Visualization",
    category: "Dashboards & BI",
    year: "2025",
    summary: "Complete data engineering pipeline featuring relational database creation, SQL analytical queries, and an interactive Dash web application.",
    description: "Built an end-to-end data pipeline starting from dirty raw records to clean relational MySQL schemas. Formulated complex SQL analytics for inventory turnover, sales trends, and customer purchase patterns, rendered via interactive Plotly/Dash web dashboards.",
    stack: ["Python", "MySQL", "Pandas", "Dash", "Plotly", "Jupyter Notebook"],
    highlights: [
      "Automated ETL pipelines cleaning and loading transactional datasets",
      "Optimized SQL indexing and analytical aggregations",
      "Interactive Dash dashboard for executive revenue reporting"
    ],
    badge: "Data & BI",
    featured: false
  },
  {
    id: "ev-population-dashboard",
    title: "Electric Vehicle Population Data Dashboard",
    category: "Dashboards & BI",
    year: "2025",
    summary: "Interactive Tableau intelligence dashboard exploring EV adoption trends, manufacturer market share, battery ranges, and geographical distribution.",
    description: "Transformed multi-year electric vehicle registration datasets into an intuitive executive Tableau dashboard with dynamic parameter filters, calculated fields, geographic maps, and KPI metric cards.",
    stack: ["Tableau", "Data Analysis", "KPI Modeling", "Excel"],
    highlights: [
      "Dynamic filters by make, model, clean alternative fuel eligibility, and county",
      "Geospatial visualization of EV density",
      "Trend forecasting of BEV vs. PHEV adoption rates"
    ],
    badge: "Tableau / BI",
    featured: false
  },
  {
    id: "mern-employee-system",
    title: "Employee Management System (MERN)",
    category: "Full Stack & Web",
    year: "2025 (Ongoing)",
    summary: "Full-stack web application built on the MERN stack (MongoDB Atlas, Express, React, Node.js) with JWT authentication and role-based access control.",
    description: "Developing an enterprise-ready employee management system with modular REST API endpoints, department allocation, attendance tracking, secure JWT-based authentication, and a responsive modern React dashboard.",
    stack: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    highlights: [
      "Role-Based Access Control (RBAC) for Admin, HR, and Employee tiers",
      "RESTful API design with comprehensive error handling & MongoDB schemas",
      "Interactive frontend dashboard with real-time staff statistics"
    ],
    badge: "MERN Stack",
    featured: false
  },
  {
    id: "multi-armed-bandit",
    title: "Multi-Armed Bandit Optimization",
    category: "AI & Data Science",
    year: "2024",
    summary: "Reinforcement learning simulation comparing Upper Confidence Bound (UCB) and Thompson Sampling algorithms for ad click-through rate optimization.",
    description: "Engineered algorithmic simulations to solve exploration vs. exploitation trade-offs in online ad recommendations. Evaluated and compared cumulative regret and conversion rates of UCB and Thompson Sampling against standard random allocation.",
    stack: ["NumPy", "Matplotlib", "Python", "Reinforcement Learning"],
    highlights: [
      "Implementation of UCB1 and Beta-Bernoulli Thompson Sampling",
      "Mathematical convergence and cumulative reward comparison plots",
      "Practical insight into programmatic ad recommendation systems"
    ],
    badge: "Algorithms",
    featured: false
  },
  {
    id: "ecommerce-vegetable",
    title: "E-commerce Platform for Fresh Produce",
    category: "Full Stack & Web",
    year: "2024",
    summary: "Full-cycle e-commerce platform using Java Servlets and MySQL with integrated Tableau sales analytics dashboards.",
    description: "Architected a web-based agricultural marketplace enabling local farmers to list fresh vegetables and consumers to order seamlessly. Included session-managed shopping carts, relational database management with MySQL, and Tableau reporting on sales velocity.",
    stack: ["Java Servlets", "MySQL", "Tableau", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "MVC architecture using Java Servlets and JSP/HTML",
      "Relational schema managing customers, inventory, and orders",
      "Linked Tableau business dashboard for farmer revenue analysis"
    ],
    badge: "Java / SQL",
    featured: false
  }
];

export const experienceData = [
  {
    role: "Flutter Developer Intern",
    company: "Appitura",
    location: "Colombo / Hybrid",
    period: "Dec 2025 – July 2026",
    type: "Internship",
    description: "Spearheaded mobile development initiatives, engineering cross-platform Android & iOS applications with Flutter and Dart within an Agile/Scrum environment.",
    points: [
      "Successfully developed cross-platform mobile applications using Flutter and Dart.",
      "Collaborated with the development team to implement responsive UI/UX designs and develop application features.",
      "Integrated RESTful APIs and Firebase services for authentication, data storage, and real-time functionality.",
      "Participated in code reviews, debugging, testing, and Agile/Scrum development processes.",
      "Contributed to improving application performance, code quality, and overall user experience."
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST APIs", "Git", "Agile / Scrum", "State Management"]
  },
  {
    role: "Part-Time Associate",
    company: "Title Data Design",
    location: "Colombo",
    period: "Jan 2025 – Dec 2025",
    type: "Part-Time",
    description: "Led rigorous data validation, digital archiving, and records reconciliation workflows for high-volume land document archives.",
    points: [
      "Performed data analysis and online data entry related to land document records and title data.",
      "Handled large volumes of structured and unstructured data using Microsoft Excel and Google Sheets.",
      "Ensured accuracy and consistency of digital records by cross-verifying scanned documents and PDFs.",
      "Utilized Adobe Acrobat for reviewing, annotating, and organizing PDF files for digital archiving."
    ],
    stack: ["Data Analysis", "MS Excel", "Google Sheets", "Adobe Acrobat", "Data Verification", "Quality Assurance"]
  }
];

export const educationData = [
  {
    degree: "BSc. (Hons) in Management Information Systems (UGC)",
    institution: "National School of Business Management (NSBM Green University)",
    location: "Homagama, Sri Lanka",
    period: "2022 – 2026",
    status: "Final Year / Graduating",
    highlights: [
      "Comprehensive curriculum bridging Enterprise Software Architecture, Business Analytics, and Database Systems.",
      "Focused on IT Project Management, Systems Analysis, and Enterprise Information Security."
    ],
    tag: "NSBM Green University"
  },
  {
    degree: "BSc. (Hons) in Data Science",
    institution: "National Institute of Business Management (NIBM)",
    location: "Colombo-06, Sri Lanka",
    period: "2024 – 2027",
    status: "Undergraduate",
    highlights: [
      "In-depth focus on Machine Learning, Deep Neural Networks, Advanced Statistical Modeling, and Big Data Technologies.",
      "Hands-on research and practical implementation in Computer Vision, RAG LLMs, and Predictive Analytics."
    ],
    tag: "NIBM Colombo"
  }
];

export const referencesData = [
  {
    name: "Mr. Aadhil Rushdy",
    title: "Senior Tech Lead (Data Team Lead)",
    organization: "Gapstars",
    email: "aadhil.rushdy@gapstars.co",
    phone: "+94 76 695 3126",
    relation: "Industry Mentor & Technical Lead",
    quote: "A dedicated professional with deep analytical rigor, strong engineering foundations, and a proactive attitude toward solving complex data and software challenges."
  },
  {
    name: "Dr. Mohamed Shafraz",
    title: "Senior Lecturer",
    organization: "NSBM Green University",
    email: "shafraz@nsbm.ac.lk",
    phone: "+94 11 544 500",
    relation: "Academic Supervisor & Lecturer",
    quote: "Demonstrates exceptional academic acumen and technical competence across both Management Information Systems and modern computational data disciplines."
  }
];
