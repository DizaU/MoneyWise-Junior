import { useState, useEffect } from 'react';
import { Gamepad2, Trophy, Star, TrendingUp, TrendingDown, DollarSign, Brain, Skull, Crown } from 'lucide-react';
import './Game.css';

function Game({ userProgress, setUserProgress }) {
  const [gameState, setGameState] = useState({
    day: 1,
    coins: 1000,
    businessType: null,
    businessName: '',
    dailyDecisions: [],
    badges: [],
    reviews: 0,
    strategies: []
  });

  const [currentDecision, setCurrentDecision] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const businessTypes = [
    { id: 'food', name: 'Food Truck', emoji: '🚚', description: 'Serve delicious meals on wheels' },
    { id: 'clothing', name: 'Clothing Store', emoji: '👕', description: 'Sell trendy fashion items' },
    { id: 'arcade', name: 'Game Arcade', emoji: '🎮', description: 'Entertainment and gaming fun' },
    { id: 'bookshop', name: 'Bookshop', emoji: '📚', description: 'Books and reading materials' },
    { id: 'toys', name: 'Toy Store', emoji: '🧸', description: 'Toys and games for kids' }
  ];

  const dailyScenarios = [
    {
      day: 1,
      title: "Supply Management",
      scenario: "Prices for your products just went up 20%. Do you:",
      options: [
        { text: "Raise your prices", coins: 0, reviews: 0, description: "You raise prices to maintain profits" },
        { text: "Keep prices the same and accept lower profits", coins: -50, reviews: 2, description: "Customers appreciate stable prices" },
        { text: "Find cheaper suppliers", coins: -20, reviews: 1, description: "You negotiate better deals" }
      ]
    },
    {
      day: 2,
      title: "Competition",
      scenario: "A new competitor opens across the street with lower prices. Do you:",
      options: [
        { text: "Lower your prices to match", coins: -100, reviews: 1, description: "You compete on price" },
        { text: "Improve your product quality", coins: -80, reviews: 3, description: "Quality wins customers" },
        { text: "Focus on better customer service", coins: -30, reviews: 2, description: "Service sets you apart" }
      ]
    },
    {
      day: 3,
      title: "Customer Reviews",
      scenario: "You receive mixed reviews. Some love your products, others complain about slow service. Do you:",
      options: [
        { text: "Hire more employees (costs 100 coins)", coins: -100, reviews: 2, description: "More staff improves service" },
        { text: "Focus on fewer customers but better service", coins: -20, reviews: 3, description: "Quality over quantity" },
        { text: "Ignore the complaints", coins: 0, reviews: -1, description: "Complaints continue" }
      ]
    },
    {
      day: 4,
      title: "Marketing Opportunity",
      scenario: "A local newspaper offers advertising for 150 coins. Do you:",
      options: [
        { text: "Buy the ad to attract more customers", coins: -150, reviews: 2, description: "Advertising brings new customers" },
        { text: "Use social media instead (free but takes time)", coins: 0, reviews: 1, description: "Free marketing through social media" },
        { text: "Save the money", coins: 0, reviews: 0, description: "You keep your money" }
      ]
    },
    {
      day: 5,
      title: "Economic Challenge",
      scenario: "Economic downturn! People have less money to spend. Do you:",
      options: [
        { text: "Have a big sale to attract budget shoppers", coins: -50, reviews: 2, description: "Sales attract price-conscious customers" },
        { text: "Focus on your most loyal customers", coins: -20, reviews: 1, description: "Loyalty programs help retention" },
        { text: "Save money and wait for things to improve", coins: 0, reviews: 0, description: "You wait for better times" }
      ]
    }
  ];

  const badges = [
    { id: 'smart-spender', name: 'Smart Spender', icon: Brain, description: 'Make 5 profitable decisions', requirement: 5, type: 'decisions' },
    { id: 'savings-star', name: 'Savings Star', icon: DollarSign, description: 'Save 200+ Market Coins', requirement: 200, type: 'savings' },
    { id: 'customer-champion', name: 'Customer Champion', icon: Star, description: 'Receive 10+ positive reviews', requirement: 10, type: 'reviews' },
    { id: 'risk-taker', name: 'Risk Taker', icon: Skull, description: 'Try 3 different business strategies', requirement: 3, type: 'strategies' },
    { id: 'market-master', name: 'Market Master', icon: Crown, description: 'Finish with 1,500+ Market Coins', requirement: 1500, type: 'coins' }
  ];

  const startGame = (businessType) => {
    setGameState(prev => ({
      ...prev,
      businessType: businessType.id,
      businessName: businessType.name
    }));
  };

  const makeDecision = (option) => {
    const newCoins = gameState.coins + option.coins;
    const newReviews = gameState.reviews + option.reviews;
    const newDecisions = [...gameState.dailyDecisions, { day: gameState.day, decision: option }];
    const newStrategies = [...gameState.strategies];
    
    // Track unique strategies
    if (!newStrategies.includes(option.text)) {
      newStrategies.push(option.text);
    }

    setGameState(prev => ({
      ...prev,
      coins: newCoins,
      reviews: newReviews,
      dailyDecisions: newDecisions,
      strategies: newStrategies,
      day: prev.day + 1
    }));

    setCurrentDecision(option);
    setShowResults(true);

    // Check for game completion
    if (gameState.day >= 5) {
      setTimeout(() => {
        setGameComplete(true);
        awardBadges(newCoins, newReviews, newDecisions.length, newStrategies.length);
      }, 2000);
    }
  };

  const awardBadges = (finalCoins, finalReviews, totalDecisions, uniqueStrategies) => {
    const newBadges = [];
    
    badges.forEach(badge => {
      if (!gameState.badges.includes(badge.id)) {
        let earned = false;
        
        switch (badge.type) {
          case 'decisions':
            earned = totalDecisions >= badge.requirement;
            break;
          case 'savings':
            earned = finalCoins >= badge.requirement;
            break;
          case 'reviews':
            earned = finalReviews >= badge.requirement;
            break;
          case 'strategies':
            earned = uniqueStrategies >= badge.requirement;
            break;
          case 'coins':
            earned = finalCoins >= badge.requirement;
            break;
        }
        
        if (earned) {
          newBadges.push(badge.id);
        }
      }
    });

    if (newBadges.length > 0) {
      setGameState(prev => ({
        ...prev,
        badges: [...prev.badges, ...newBadges]
      }));

      // Update user progress
      setUserProgress(prev => ({
        ...prev,
        badges: [...prev.badges, ...newBadges],
        coins: prev.coins + (newBadges.length * 50)
      }));
    }
  };

  const resetGame = () => {
    setGameState({
      day: 1,
      coins: 1000,
      businessType: null,
      businessName: '',
      dailyDecisions: [],
      badges: [],
      reviews: 0,
      strategies: []
    });
    setCurrentDecision(null);
    setShowResults(false);
    setGameComplete(false);
  };

  const getCurrentScenario = () => {
    return dailyScenarios.find(scenario => scenario.day === gameState.day);
  };

  if (!gameState.businessType) {
    return (
      <div className="game">
        <div className="game-header">
          <h1>Money Market Tycoon</h1>
          <p>Students become virtual business owners running their own marketplace over 2 weeks.</p>
          <div className="game-rules">
            <h3>How It Works:</h3>
            <ul>
              <li>Each student gets 1,000 'Market Coins'</li>
              <li>Choose your business type</li>
              <li>Make daily decisions to grow your business</li>
              <li>Earn badges for smart decisions</li>
            </ul>
          </div>
        </div>

        <div className="business-selection">
          <h2>Choose Your Business:</h2>
          <div className="business-grid">
            {businessTypes.map(business => (
              <button
                key={business.id}
                className="business-card"
                onClick={() => startGame(business)}
              >
                <div className="business-emoji">{business.emoji}</div>
                <h3>{business.name}</h3>
                <p>{business.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameComplete) {
    return (
      <div className="game">
        <div className="game-complete">
          <h1>🎉 Game Complete! 🎉</h1>
          <div className="final-results">
            <div className="result-card">
              <h3>Final Results</h3>
              <p><strong>Business:</strong> {gameState.businessName}</p>
              <p><strong>Final Coins:</strong> {gameState.coins}</p>
              <p><strong>Total Reviews:</strong> {gameState.reviews}</p>
              <p><strong>Decisions Made:</strong> {gameState.dailyDecisions.length}</p>
            </div>
            
            <div className="badges-earned">
              <h3>Badges Earned:</h3>
              <div className="badge-grid">
                {badges.map(badge => (
                  <div 
                    key={badge.id} 
                    className={`badge ${gameState.badges.includes(badge.id) ? 'earned' : 'locked'}`}
                  >
                    <badge.icon className="badge-icon" />
                    <span>{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="presentation-template">
              <h3>Final Presentation Template:</h3>
              <div className="presentation-content">
                <p><strong>Business type chosen and why:</strong> {gameState.businessName}</p>
                <p><strong>Best decision made:</strong> {gameState.dailyDecisions.length > 0 ? gameState.dailyDecisions[0].decision.text : 'N/A'}</p>
                <p><strong>Worst decision made:</strong> {gameState.dailyDecisions.length > 1 ? gameState.dailyDecisions[1].decision.text : 'N/A'}</p>
                <p><strong>Total Market Coins earned/lost:</strong> {gameState.coins - 1000}</p>
                <p><strong>Three lessons learned about money:</strong></p>
                <ul>
                  <li>Running a business requires careful decision-making</li>
                  <li>Customer satisfaction affects long-term success</li>
                  <li>Balancing costs and profits is challenging</li>
                </ul>
              </div>
            </div>

            <button onClick={resetGame} className="btn-primary">
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentScenario = getCurrentScenario();

  return (
    <div className="game">
      <div className="game-header">
        <h1>Money Market Tycoon</h1>
        <div className="game-stats">
          <div className="stat">
            <DollarSign className="stat-icon" />
            <span>{gameState.coins} Coins</span>
          </div>
          <div className="stat">
            <Star className="stat-icon" />
            <span>{gameState.reviews} Reviews</span>
          </div>
          <div className="stat">
            <Trophy className="stat-icon" />
            <span>Day {gameState.day}/5</span>
          </div>
        </div>
      </div>

      <div className="business-info">
        <h2>{gameState.businessName}</h2>
        <p>Make smart decisions to grow your business!</p>
      </div>

      {showResults && currentDecision && (
        <div className="decision-results">
          <h3>Decision Results:</h3>
          <div className="result-card">
            <p><strong>You chose:</strong> {currentDecision.text}</p>
            <p><strong>Result:</strong> {currentDecision.description}</p>
            <div className="result-effects">
              {currentDecision.coins !== 0 && (
                <div className={`effect ${currentDecision.coins > 0 ? 'positive' : 'negative'}`}>
                  <DollarSign className="effect-icon" />
                  <span>{currentDecision.coins > 0 ? '+' : ''}{currentDecision.coins} Coins</span>
                </div>
              )}
              {currentDecision.reviews !== 0 && (
                <div className={`effect ${currentDecision.reviews > 0 ? 'positive' : 'negative'}`}>
                  <Star className="effect-icon" />
                  <span>{currentDecision.reviews > 0 ? '+' : ''}{currentDecision.reviews} Reviews</span>
                </div>
              )}
            </div>
          </div>
          <button onClick={() => setShowResults(false)} className="btn-primary">
            Continue
          </button>
        </div>
      )}

      {!showResults && currentScenario && (
        <div className="daily-scenario">
          <h3>Day {currentScenario.day} - {currentScenario.title}</h3>
          <p>{currentScenario.scenario}</p>
          <div className="decision-options">
            {currentScenario.options.map((option, index) => (
              <button
                key={index}
                className="decision-option"
                onClick={() => makeDecision(option)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)})</span>
                <span>{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="daily-reflection">
        <h3>Daily Reflection Questions:</h3>
        <ul>
          <li>What was your hardest decision today and why?</li>
          <li>How did your choices compare to your classmates'?</li>
          <li>What did you learn about running a business?</li>
          <li>If you could change one decision, what would it be?</li>
        </ul>
      </div>
    </div>
  );
}

export default Game;
