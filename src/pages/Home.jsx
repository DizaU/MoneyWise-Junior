import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Gamepad2, Trophy, Star, ArrowRight, Lock } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import './Home.css';

function Home() {
  const { userProgress, isModuleCompleted, isWorksheetCompleted } = useProgress();
  const modules = [
    {
      id: 1,
      title: "What is Money?",
      description: "Discover the history and evolution of money, from bartering to digital currencies.",
      path: "/module1",
      icon: BookOpen,
      color: "#667eea",
      completed: isModuleCompleted(1),
      locked: false // Module 1 is always unlocked
    },
    {
      id: 2,
      title: "Understanding Value",
      description: "Learn what makes things valuable and how to make smart shopping decisions.",
      path: "/module2",
      icon: BookOpen,
      color: "#f093fb",
      completed: isModuleCompleted(2),
      locked: !isWorksheetCompleted(1) // Locked until Module 1 worksheet is completed
    },
    {
      id: 3,
      title: "Money Management",
      description: "Master budgeting, saving, and family financial planning.",
      path: "/module3",
      icon: BookOpen,
      color: "#4facfe",
      completed: isModuleCompleted(3),
      locked: !isWorksheetCompleted(2) // Locked until Module 2 worksheet is completed
    },
    {
      id: 4,
      title: "Future of Money",
      description: "Explore digital payments, cryptocurrency, and the future of finance.",
      path: "/module4",
      icon: BookOpen,
      color: "#43e97b",
      completed: isModuleCompleted(4),
      locked: !isWorksheetCompleted(3) // Locked until Module 3 worksheet is completed
    },
    {
      id: 5,
      title: "UPI & Mobile Wallets",
      description: "Learn about UPI and mobile wallets",
      path: "/module5",
      icon: BookOpen,
      color: "#FFFF00",
      completed: isModuleCompleted(5),
      locked: !isWorksheetCompleted(4) // Locked until Module 4 worksheet is completed
    },
    {
      id: 6,
      title: "Investing Basics",
      description: "Learn about investing basics",
      path: "/module6",
      icon: BookOpen,
      color: "#A020F0",
      completed: isModuleCompleted(6),
      locked: !isWorksheetCompleted(5) // Locked until Module 5 worksheet is completed
    }
  ];

  const tools = [
    {
      title: "Interactive Tools",
      description: "Money tracker, savings calculator, and budget simulator",
      path: "/tools",
      icon: Calculator,
      color: "#fa709a"
    },
    {
      title: "Money Market Tycoon",
      description: "Run your own virtual business and learn about entrepreneurship",
      path: "/game",
      icon: Gamepad2,
      color: "#ffecd2"
    }
  ];

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to MoneyWise Junior</h1>
          <p>Your journey to financial literacy starts here! Learn about money, budgeting, and smart financial decisions through interactive modules and fun activities.</p>
          <div className="hero-stats">
            <div className="stat">
              <Trophy className="stat-icon" />
              <span>Level {userProgress.level}</span>
            </div>
            <div className="stat">
              <Star className="stat-icon" />
              <span>{userProgress.completedModules.length}/6 Modules</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <section className="modules-section">
          <h2>Learning Modules</h2>
          <div className="modules-grid">
            {modules.map(module => (
              <div key={module.id} className={`module-card ${module.locked ? 'locked' : ''}`}>
                {module.locked ? (
                  <div className="locked-module">
                    <div className="module-header" style={{ backgroundColor: module.color, opacity: 0.5 }}>
                      <module.icon className="module-icon" />
                      <Lock className="lock-icon" />
                    </div>
                    <div className="module-content">
                      <h3>{module.title}</h3>
                      <p>{module.description}</p>
                      <div className="module-footer">
                        <span className="locked-text">Complete previous module's worksheet to unlock</span>
                        <Lock className="lock-icon" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={module.path} className="unlocked-module">
                    <div className="module-header" style={{ backgroundColor: module.color }}>
                      <module.icon className="module-icon" />
                      {module.completed && <div className="completed-badge">✓</div>}
                    </div>
                    <div className="module-content">
                      <h3>{module.title}</h3>
                      <p>{module.description}</p>
                      <div className="module-footer">
                        <span className="start-text">Start Learning</span>
                        <ArrowRight className="arrow-icon" />
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="tools-section">
          <h2>Interactive Tools & Games</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <Link key={index} to={tool.path} className="tool-card">
                <div className="tool-header" style={{ backgroundColor: tool.color }}>
                  <tool.icon className="tool-icon" />
                </div>
                <div className="tool-content">
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="quick-poll">
          <h2>Quick Poll</h2>
          <div className="poll-card">
            <p><strong>Before we start:</strong> How many different ways did you use money this week?</p>
            <p>Write down your answer and think about all the different ways you interacted with money - from buying snacks to receiving allowance!</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
