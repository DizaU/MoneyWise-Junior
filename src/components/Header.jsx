import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Calculator, Gamepad2, User, Home, Trophy, Coins, Bot, LogOut, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { userProgress, isWorksheetCompleted } = useProgress();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home, moduleId: null },
    { path: '/module1', label: 'What is Money?', icon: BookOpen, moduleId: 1 },
    { path: '/module2', label: 'Understanding Value', icon: BookOpen, moduleId: 2 },
    { path: '/module3', label: 'Money Management', icon: BookOpen, moduleId: 3 },
    { path: '/module4', label: 'Future of Money', icon: BookOpen, moduleId: 4 },
    { path: '/module5', label: 'UPI & Mobile Wallets', icon: BookOpen, moduleId: 5 },
    { path: '/module6', label: 'Investing Basics', icon: BookOpen, moduleId: 6 },
    { path: '/tools', label: 'Tools', icon: Calculator, moduleId: null },
    { path: '/game', label: 'Money Market Tycoon', icon: Gamepad2, moduleId: null },
    { path: '/ai-help', label: 'AI Help', icon: Bot, moduleId: null },
    { path: '/profile', label: 'Profile', icon: User, moduleId: null }
  ];

  const isModuleLocked = (moduleId) => {
    if (!moduleId) return false; // Non-module items are never locked
    
    const modulePrerequisites = {
      1: null, // Module 1 is always accessible
      2: 1,    // Module 2 requires Module 1 worksheet
      3: 2,    // Module 3 requires Module 2 worksheet
      4: 3,    // Module 4 requires Module 3 worksheet
      5: 4,    // Module 5 requires Module 4 worksheet
      6: 5     // Module 6 requires Module 5 worksheet
    };

    const requiredWorksheet = modulePrerequisites[moduleId];
    return requiredWorksheet && !isWorksheetCompleted(requiredWorksheet);
  };

  const handleNavClick = (item, e) => {
    if (isModuleLocked(item.moduleId)) {
      e.preventDefault();
      const requiredWorksheet = item.moduleId - 1;
      navigate(`/module${requiredWorksheet}`, { 
        state: { 
          message: `Please complete Module ${requiredWorksheet} worksheet first!` 
        } 
      });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Coins className="logo-icon" />
          <h1>MoneyWise Junior</h1>
        </div>
        
        <nav className="nav">
          {navItems.map(({ path, label, icon: Icon, moduleId }) => {
            const isLocked = isModuleLocked(moduleId);
            return (
              <Link
                key={path}
                to={path}
                onClick={(e) => handleNavClick({ path, moduleId }, e)}
                className={`nav-link ${location.pathname === path ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                title={isLocked ? `Complete Module ${moduleId - 1} worksheet first!` : ''}
              >
                <Icon className="nav-icon" />
                <span>{label}</span>
                {isLocked && <Lock className="lock-icon" />}
              </Link>
            );
          })}
        </nav>

        <div className="user-info">
          <div className="user-stats">
            <div className="stat">
              <Coins className="stat-icon" />
              <span>{userProgress.coins}</span>
            </div>
            <div className="stat">
              <Trophy className="stat-icon" />
              <span>Level {userProgress.level}</span>
            </div>
          </div>
          
          <div className="user-menu">
            <span className="user-name">
              {currentUser?.displayName || 'User'}
            </span>
            <button 
              onClick={handleLogout}
              className="logout-button"
              title="Logout"
            >
              <LogOut className="logout-icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
