import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Coins,
  TrendingUp,
  PiggyBank,
  Dice5,
  AlertCircle,
} from "lucide-react";
import { useProgress } from '../contexts/ProgressContext';
import "./Module.css";

function Module6() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userProgress, completeModule, completeWorksheet, isModuleCompleted, isWorksheetCompleted } = useProgress();
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [worksheetAnswers, setWorksheetAnswers] = useState({});
  const [redirectMessage, setRedirectMessage] = useState('');

  // Check for redirect message from navigation
  useEffect(() => {
    if (location.state?.message) {
      setRedirectMessage(location.state.message);
      // Clear the message after 5 seconds
      setTimeout(() => setRedirectMessage(''), 5000);
    }
  }, [location.state]);

  const sections = [
    {
      title: "What is Investing and Why Does it Matter?",
      content: (
        <div className="section-content">
          <h3>Growing Your Money Tree 🌳</h3>
          <p>
            Investing is like planting seeds that can grow into a big tree over
            time. While saving keeps your money safe with small growth,
            investing can grow your money faster — but it comes with some risk.
          </p>
          <ul>
            <li>Saving = steady turtle 🐢 (2–4% yearly)</li>
            <li>Investing = growing tree 🌱 (8–12% yearly)</li>
          </ul>
          <h4>Quick Check: Money Growth Detective</h4>
          <p>
            Look around your home – can you find 3 things that became more
            valuable over time? (Hint: toys, stamps, property, art)
          </p>
        </div>
      ),
    },
    {
      title: "Saving vs Investing",
      content: (
        <div className="section-content">
          <h3>Saving vs Investing 💰</h3>
          <table className="comparison">
            <thead>
              <tr>
                <th>Saving</th>
                <th>Investing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Low risk, steady growth</td>
                <td>Higher growth, some risk</td>
              </tr>
              <tr>
                <td>2–4% yearly</td>
                <td>8–12% yearly</td>
              </tr>
              <tr>
                <td>Money anytime</td>
                <td>Best for 5+ year goals</td>
              </tr>
            </tbody>
          </table>
          <p>
            Inflation makes prices rise 🌡️ – investing helps money keep up or
            outgrow inflation!
          </p>
        </div>
      ),
    },
    {
      title: "Types of Investments",
      content: (
        <div className="section-content">
          <h3>Investment Garden Types 🌱</h3>
          <ul>
            <li>Piggy Bank – No growth 🐖</li>
            <li>Savings Account – 3–4% growth 💵</li>
            <li>Fixed Deposit – 5–7% steady growth 🌿</li>
            <li>Mutual Funds – 8–12% potential 🌳</li>
            <li>Stocks – High potential but risky 🚀</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Compounding: The Magic Snowball",
      content: (
        <div className="section-content">
          <h3>The Investment Snowball ⛄</h3>
          <p>
            Compounding means earning returns on your returns. Start small and
            let it roll — your money grows bigger each year!
          </p>
          <ul>
            <li>Year 1: ₹1000 → ₹1100 (+₹100)</li>
            <li>Year 2: ₹1100 → ₹1210 (+₹110)</li>
            <li>Year 3: ₹1210 → ₹1331 (+₹121)</li>
          </ul>
          <p>The earlier you start, the stronger the snowball becomes.</p>
        </div>
      ),
    },
    {
      title: "Activity: Investment vs Saving Race Game",
      content: (
        <div className="section-content">
          <h3>🎲 Investment vs Saving Race Game</h3>
          <p>
            Use play money and growth boxes (Savings, FD, Mutual Funds). Roll a
            dice each round (year) to see how money grows:
          </p>
          <ul>
            <li>Savings (1–2): +3%</li>
            <li>Fixed Deposit (3): +6%</li>
            <li>Mutual Fund (4): +10%</li>
            <li>Mutual Fund (5–6): +2%</li>
          </ul>
          <p>
            Track balances for 10 rounds and compare. Who grows fastest – the
            Saver, Balanced Investor, or Bold Investor?
          </p>
        </div>
      ),
    },
  ];

  const quizQuestions = [
    {
      question: "What is the main difference between saving and investing?",
      options: [
        "Saving is illegal, investing is legal",
        "Saving has low risk, investing has higher returns and some risk",
        "There’s no difference between them",
        "Investing is for rich people only",
      ],
      correct: 1,
      explanation:
        "Saving keeps money safe with small growth, while investing can earn more but has risk.",
    },
    {
      question: "What makes your money grow faster in investing?",
      options: [
        "Simple interest",
        "Government tax",
        "Compounding (earning on earnings)",
        "Spending less",
      ],
      correct: 2,
      explanation:
        "Compounding helps you earn interest on your interest, making your money snowball!",
    },
    {
      question: "Which has the highest long-term growth potential?",
      options: ["Piggy bank", "Savings account", "Fixed deposit", "Stocks"],
      correct: 3,
      explanation: "Stocks offer the highest potential over the long term.",
    },
  ];

  const handleAnswer = (q, a) =>
    setAnswers((prev) => ({ ...prev, [q]: a }));

  const handleCompleteModule = async () => {
    const result = await completeModule(6);
    if (result.success) {
      console.log(`Module completed! Earned ${result.coinsEarned} coins.`);
    }
  };

  const handleCompleteWorksheet = async () => {
    try {
      console.log('Starting worksheet completion...');
      const result = await completeWorksheet(6);
      console.log('Worksheet completion result:', result);
      
      if (result.success) {
        console.log(`Worksheet completed! Earned ${result.coinsEarned} coins.`);
        // Also complete the module if not already completed
        if (!isModuleCompleted(6)) {
          console.log('Completing module as well...');
          await completeModule(6);
        }
        // Redirect to profile page after worksheet completion
        console.log('Redirecting to profile page...');
        navigate('/profile', { 
          state: { 
            message: 'Congratulations! You completed Module 6 worksheet! 🎉' 
          } 
        });
      } else {
        console.log('Worksheet completion failed:', result);
      }
    } catch (error) {
      console.error('Error completing worksheet:', error);
    }
  };

  const nextSection = () =>
    currentSection < sections.length - 1
      ? setCurrentSection(currentSection + 1)
      : setShowQuiz(true);

  const prevSection = () =>
    currentSection > 0 && setCurrentSection(currentSection - 1);

  if (showWorksheet) {
    return (
      <div className="module">
        <div className="module-header">
          <h1>Module 6: Worksheet Assessment</h1>
          <p>Complete this comprehensive worksheet to test your understanding of investment basics and money growth!</p>
        </div>
        <div className="worksheet-container">
          <div className="worksheet-section">
            <h3>Part 1: Multiple Choice Questions</h3>
            
            <div className="worksheet-question">
              <h4>1. What is the main difference between saving and investing?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  A) Saving is illegal, investing is legal
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  B) Saving has low risk, investing has higher returns and some risk
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  C) There's no difference between them
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  D) Investing is for rich people only
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>2. What makes your money grow faster in investing?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  A) Simple interest
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  B) Government tax
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  C) Compounding (earning on earnings)
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  D) Spending less
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>3. Which has the highest long-term growth potential?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  A) Piggy bank
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  B) Savings account
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  C) Fixed deposit
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  D) Stocks
                </label>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 2: Investment Types and Analysis</h3>
            
            <div className="worksheet-question">
              <h4>4. Investment Garden Types Analysis</h4>
              <p>From the module, we learned about different investment types. Complete this comparison:</p>
              <div className="comparison-grid">
                <div className="comparison-column">
                  <h5>Investment Type</h5>
                  <div className="pros-cons">
                    <h6>Piggy Bank:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Growth rate and characteristics..."
                      value={worksheetAnswers.q4a || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4a: e.target.value }))}
                    />
                    <h6>Savings Account:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Growth rate and characteristics..."
                      value={worksheetAnswers.q4b || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4b: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="comparison-column">
                  <h5>Investment Type</h5>
                  <div className="pros-cons">
                    <h6>Mutual Funds:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Growth rate and characteristics..."
                      value={worksheetAnswers.q4c || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4c: e.target.value }))}
                    />
                    <h6>Stocks:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Growth rate and characteristics..."
                      value={worksheetAnswers.q4d || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4d: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>5. Compounding Magic Calculation</h4>
              <p>Calculate the compound growth for these scenarios:</p>
              <ul>
                <li>Scenario A: ₹1000 invested at 10% for 3 years</li>
                <li>Scenario B: ₹1000 invested at 5% for 3 years</li>
                <li>Scenario C: ₹2000 invested at 10% for 3 years</li>
              </ul>
              <p>Show your calculations and explain which scenario gives the best result:</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your calculations and analysis here..."
                value={worksheetAnswers.q5 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>6. Investment vs Saving Race Game Analysis</h4>
              <p>You played the Investment vs Saving Race Game with these rules:</p>
              <ul>
                <li>Savings (1–2): +3%</li>
                <li>Fixed Deposit (3): +6%</li>
                <li>Mutual Fund (4): +10%</li>
                <li>Mutual Fund (5–6): +2%</li>
              </ul>
              <p><strong>Questions:</strong></p>
              <ul>
                <li>Which strategy would you choose and why?</li>
                <li>What did you learn about risk vs reward?</li>
                <li>How does this game relate to real investing?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your game analysis here..."
                value={worksheetAnswers.q6 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6: e.target.value }))}
              />
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 3: Personal Investment Planning</h3>
            
            <div className="worksheet-question">
              <h4>7. My First Investment Plan</h4>
              <p>You have ₹5000 to invest. Create your investment plan:</p>
              <ul>
                <li>How much would you put in each type of investment?</li>
                <li>What are your reasons for this allocation?</li>
                <li>What are your investment goals?</li>
                <li>How long do you plan to invest?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your investment plan here..."
                value={worksheetAnswers.q7 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q7: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>8. Risk vs Reward Analysis</h4>
              <p>Analyze the relationship between risk and reward in investing:</p>
              <ul>
                <li>What does "high risk, high reward" mean?</li>
                <li>Why might someone choose low-risk investments?</li>
                <li>Why might someone choose high-risk investments?</li>
                <li>What factors should influence your risk tolerance?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your risk vs reward analysis here..."
                value={worksheetAnswers.q8 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q8: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>9. Future Investment Goals</h4>
              <p>Think about your future financial goals:</p>
              <ul>
                <li>What do you want to save for in the next 5 years?</li>
                <li>What do you want to save for in the next 10 years?</li>
                <li>How can investing help you reach these goals?</li>
                <li>What steps will you take to start investing?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your future investment goals here..."
                value={worksheetAnswers.q9 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q9: e.target.value }))}
              />
            </div>
          </div>

          <div className="worksheet-actions">
            <button onClick={() => setShowWorksheet(false)} className="btn-secondary">
              <ArrowLeft className="btn-icon" />
              Back to Quiz
            </button>
            <button onClick={handleCompleteWorksheet} className="btn-primary">
              Submit Worksheet
              <CheckCircle className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div className="module">
        <div className="module-header">
          <h1>Module 6 Quiz</h1>
          <p>Test what you learned about saving, investing & compounding!</p>
        </div>
        <div className="quiz-container">
          {quizQuestions.map((q, qi) => (
            <div key={qi} className="quiz-question">
              <h3>{q.question}</h3>
              <div className="quiz-options">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    className={`quiz-option ${
                      answers[qi] === oi ? "selected" : ""
                    } ${
                      answers[qi] !== undefined && oi === q.correct
                        ? "correct"
                        : ""
                    }`}
                    onClick={() => handleAnswer(qi, oi)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {answers[qi] !== undefined && (
                <div className="explanation">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          ))}
          <div className="quiz-actions">
            <button onClick={() => setShowQuiz(false)} className="btn-secondary">
              <ArrowLeft className="btn-icon" /> Back to Module
            </button>
            <button onClick={() => setShowWorksheet(true)} className="btn-primary">
              Take Worksheet Assessment
              <BookOpen className="btn-icon" />
            </button>
            <button onClick={handleCompleteModule} className="btn-primary">
              Complete Module <CheckCircle className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="module">
      {redirectMessage && (
        <div className="redirect-message">
          <AlertCircle className="alert-icon" />
          <span>{redirectMessage}</span>
        </div>
      )}
      <div className="module-header">
        <h1>Module 6: Investment Basics – Growing Your Money Tree</h1>
        <p>
          Learn how saving & investing grow your money, understand compound
          interest, and play a fun growth game!
        </p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentSection + 1) / sections.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="module-content">
        <h2>{sections[currentSection].title}</h2>
        {sections[currentSection].content}

        <div className="section-navigation">
          <button
            onClick={prevSection}
            disabled={currentSection === 0}
            className="btn-secondary"
          >
            <ArrowLeft className="btn-icon" /> Previous
          </button>
          <span className="section-counter">
            Section {currentSection + 1} of {sections.length}
          </span>
          <button onClick={nextSection} className="btn-primary">
            {currentSection === sections.length - 1 ? "Take Quiz" : "Next"}
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Module6;
