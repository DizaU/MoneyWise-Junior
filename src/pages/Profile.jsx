import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Trophy, Star, Coins, BookOpen, Award, Target, CheckCircle } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import './Profile.css';

function Profile() {
  const { userProgress, getProgressPercentage } = useProgress();
  const location = useLocation();
  const [congratulationsMessage, setCongratulationsMessage] = useState('');

  // Check for congratulations message from navigation
  useEffect(() => {
    if (location.state?.message) {
      setCongratulationsMessage(location.state.message);
      // Clear the message after 5 seconds
      setTimeout(() => setCongratulationsMessage(''), 5000);
    }
  }, [location.state]);
  const badges = [
    { id: 'Money Explorer', name: 'Money Explorer', description: 'Completed Module 1: What is Money?', icon: BookOpen, color: '#667eea' },
    { id: 'Value Expert', name: 'Value Expert', description: 'Completed Module 2: Understanding Value', icon: Star, color: '#f093fb' },
    { id: 'Budget Master', name: 'Budget Master', description: 'Completed Module 3: Money Management', icon: Target, color: '#4facfe' },
    { id: 'Future Finance Expert', name: 'Future Finance Expert', description: 'Completed Module 4: Future of Money', icon: Award, color: '#43e97b' },
    { id: 'Smart Spender', name: 'Smart Spender', description: 'Made 5 profitable decisions in Money Market Tycoon', icon: Star, color: '#fa709a' },
    { id: 'Savings Star', name: 'Savings Star', description: 'Saved 200+ Market Coins in the game', icon: Coins, color: '#ffecd2' },
    { id: 'Customer Champion', name: 'Customer Champion', description: 'Received 10+ positive reviews in the game', icon: Trophy, color: '#667eea' },
    { id: 'Risk Taker', name: 'Risk Taker', description: 'Tried 3 different business strategies', icon: Award, color: '#f093fb' },
    { id: 'Market Master', name: 'Market Master', description: 'Finished with 1,500+ Market Coins', icon: Trophy, color: '#4facfe' }
  ];

  const earnedBadges = badges.filter(badge => userProgress.badges.includes(badge.id));
  const lockedBadges = badges.filter(badge => !userProgress.badges.includes(badge.id));

  const getLevelProgress = () => {
    const completedModules = userProgress.completedModules.length;
    const totalModules = 6;
    const progress = getProgressPercentage();
    return { progress, completedModules, totalModules };
  };

  const levelProgress = getLevelProgress();

  return (
    <div className="profile">
      {congratulationsMessage && (
        <div className="congratulations-message">
          <CheckCircle className="success-icon" />
          <span>{congratulationsMessage}</span>
        </div>
      )}
      <div className="profile-header">
        <h1>Your Financial Journey</h1>
        <p>Track your progress and celebrate your achievements!</p>
      </div>

      <div className="profile-content">
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon">
              <Coins />
            </div>
            <div className="stat-info">
              <h3>{userProgress.coins}</h3>
              <p>Total Coins</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <BookOpen />
            </div>
            <div className="stat-info">
              <h3>{userProgress.completedModules.length}/6</h3>
              <p>Modules Completed</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Trophy />
            </div>
            <div className="stat-info">
              <h3>{userProgress.badges.length}</h3>
              <p>Badges Earned</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Star />
            </div>
            <div className="stat-info">
              <h3>Level {userProgress.level}</h3>
              <p>Current Level</p>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <h2>Learning Progress</h2>
          <div className="level-progress">
            <div className="progress-header">
              <h3>Overall Progress</h3>
              <span>{levelProgress.completedModules}/{levelProgress.totalModules} Modules</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${levelProgress.progress}%` }}
              ></div>
            </div>
            <p className="progress-text">
              {levelProgress.progress === 100 
                ? "🎉 Congratulations! You've completed all modules!" 
                : `Keep going! You're ${Math.round(levelProgress.progress)}% complete.`
              }
            </p>
          </div>

          <div className="modules-progress">
            <h3>Module Completion</h3>
            <div className="modules-list">
              <div className={`module-item ${userProgress.completedModules.includes(1) ? 'completed' : 'pending'}`}>
                <div className="module-icon">
                  <BookOpen />
                </div>
                <div className="module-info">
                  <h4>Module 1: What is Money?</h4>
                  <p>Discover the history and evolution of money</p>
                </div>
                <div className="module-status">
                  {userProgress.completedModules.includes(1) ? '✓' : '○'}
                </div>
              </div>
              
              <div className={`module-item ${userProgress.completedModules.includes(2) ? 'completed' : 'pending'}`}>
                <div className="module-icon">
                  <Star />
                </div>
                <div className="module-info">
                  <h4>Module 2: Understanding Value</h4>
                  <p>Learn what makes things valuable and smart shopping</p>
                </div>
                <div className="module-status">
                  {userProgress.completedModules.includes(2) ? '✓' : '○'}
                </div>
              </div>
              
              <div className={`module-item ${userProgress.completedModules.includes(3) ? 'completed' : 'pending'}`}>
                <div className="module-icon">
                  <Target />
                </div>
                <div className="module-info">
                  <h4>Module 3: Money Management</h4>
                  <p>Master budgeting, saving, and family finance</p>
                </div>
                <div className="module-status">
                  {userProgress.completedModules.includes(3) ? '✓' : '○'}
                </div>
              </div>
              
              <div className={`module-item ${userProgress.completedModules.includes(4) ? 'completed' : 'pending'}`}>
                <div className="module-icon">
                  <Award />
                </div>
                <div className="module-info">
                  <h4>Module 4: Future of Money</h4>
                  <p>Explore digital payments and cryptocurrency</p>
                </div>
                <div className="module-status">
                  {userProgress.completedModules.includes(4) ? '✓' : '○'}
                </div>
              </div>
              <div className={`module-item ${userProgress.completedModules.includes(5) ? 'completed' : 'pending'}`}>
                <div className="module-icon">
                  <Award />
                </div>
                <div className="module-info">
                  <h4>Module 5: UPI & Mobile Wallets</h4>
                  <p>Learn about UPI and mobile wallets</p>
                </div>
                <div className="module-status">
                  {userProgress.completedModules.includes(5) ? '✓' : '○'}
                </div>
              </div>
              <div className={`module-item ${userProgress.completedModules.includes(6) ? 'completed' : 'pending'}`}>
                <div className="module-icon">
                  <Coins />
                </div>
                <div className="module-info">
                  <h4>Module 6: Investing Basics</h4>
                  <p>Learn about investing basics</p>
                </div>
                <div className="module-status">
                  {userProgress.completedModules.includes(6) ? '✓' : '○'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="badges-section">
          <h2>Achievement Badges</h2>
          <p>Earn badges by completing modules and playing the Money Market Tycoon game!</p>
          
          <div className="badges-grid">
            {earnedBadges.map(badge => (
              <div key={badge.id} className="badge-card earned">
                <div className="badge-icon" style={{ color: badge.color }}>
                  <badge.icon />
                </div>
                <h4>{badge.name}</h4>
                <p>{badge.description}</p>
                <div className="badge-status">✓ Earned</div>
              </div>
            ))}
            
            {lockedBadges.map(badge => (
              <div key={badge.id} className="badge-card locked">
                <div className="badge-icon">
                  <badge.icon />
                </div>
                <h4>{badge.name}</h4>
                <p>{badge.description}</p>
                <div className="badge-status">🔒 Locked</div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2>Recent Achievements</h2>
          <div className="achievements-list">
            {userProgress.completedModules.length > 0 && (
              <div className="achievement-item">
                <div className="achievement-icon">📚</div>
                <div className="achievement-info">
                  <h4>Module Master</h4>
                  <p>Completed {userProgress.completedModules.length} learning module{userProgress.completedModules.length > 1 ? 's' : ''}</p>
                </div>
              </div>
            )}
            
            {userProgress.badges.length > 0 && (
              <div className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-info">
                  <h4>Badge Collector</h4>
                  <p>Earned {userProgress.badges.length} achievement badge{userProgress.badges.length > 1 ? 's' : ''}</p>
                </div>
              </div>
            )}
            
            {userProgress.coins > 0 && (
              <div className="achievement-item">
                <div className="achievement-icon">💰</div>
                <div className="achievement-info">
                  <h4>Coin Collector</h4>
                  <p>Accumulated {userProgress.coins} coins through learning and gaming</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="next-steps">
          <h2>Next Steps</h2>
          <div className="next-steps-content">
            {userProgress.completedModules.length < 6 ? (
              <div className="step-item">
                <h4>Continue Learning</h4>
                <p>Complete the remaining modules to unlock all badges and become a financial literacy expert!</p>
                <div className="step-progress">
                  <span>Progress: {userProgress.completedModules.length}/6 modules</span>
                </div>
              </div>
            ) : (
              <div className="step-item">
                <h4>🎉 All Modules Complete!</h4>
                <p>Congratulations! You've mastered all the financial literacy concepts. Keep practicing with the tools and games!</p>
              </div>
            )}
            
            <div className="step-item">
              <h4>Practice with Tools</h4>
              <p>Use the interactive tools to practice budgeting, saving, and money management in real scenarios.</p>
            </div>
            
            <div className="step-item">
              <h4>Play Money Market Tycoon</h4>
              <p>Test your business skills and earn more badges by running your own virtual business!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
