import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, PiggyBank, Calculator, Users } from 'lucide-react';
import './Module.css';

function Module3({ userProgress, setUserProgress }) {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [worksheetAnswers, setWorksheetAnswers] = useState({});
  const [budgetData, setBudgetData] = useState({
    savings: 0,
    needs: 0,
    wants: 0,
    giving: 0
  });

  const sections = [
    {
      title: "Budgeting Basics",
      content: (
        <div className="section-content">
          <h3>What is budgeting?</h3>
          <p>Budgeting is planning how to spend money by deciding how much to use for different things before spending it.</p>
          
          <div className="real-life-example">
            <h4>Real-Life Example:</h4>
            <p>If you have a $10 allowance: $3 for savings, $4 for lunch money, and $3 for fun stuff.</p>
          </div>

          <div className="case-study">
            <h4>Case Study - Birthday Money Dilemma:</h4>
            <p>Alex receives $50 for their birthday and has several goals:</p>
            <ul>
              <li>Buy a $40 video game</li>
              <li>Save $20 for a bike (which needs $100 total)</li>
              <li>Spend $15 on snacks with friends</li>
              <li>Give $10 to charity</li>
            </ul>
            <p><strong>Challenge:</strong> What advice would you give Alex? Create a budget plan!</p>
            <div className="budget-solution">
              <p><strong>Solution:</strong> Alex needs to prioritize. They could save $20 for the bike, spend $15 on snacks, give $10 to charity, and have $5 left. The video game would need to wait or they could save more money first.</p>
            </div>
          </div>

          <h3>What are some simple tricks to help young people save money?</h3>
          <ul>
            <li><strong>"Pay yourself first" rule:</strong> Put money into savings before spending on anything else</li>
            <li><strong>"24-hour rule":</strong> Wait a day before buying something to avoid impulse purchases</li>
            <li><strong>"Wish list":</strong> Create a list of desired items instead of buying immediately</li>
            <li><strong>"Envelope method":</strong> Put cash for different purposes into separate envelopes</li>
            <li><strong>Visual savings goals:</strong> Make a chart to track progress toward a desired purchase</li>
            <li><strong>Free or cheap alternatives:</strong> Library books instead of buying, free activities</li>
          </ul>

          <div className="savings-challenge">
            <h4>Savings Challenge: "Coin Challenge"</h4>
            <p>Put all loose change in a jar each day for one week. Count the total at the end of the week. Guess the amount saved before counting!</p>
          </div>

          <h3>How can families work together to make smart money decisions?</h3>
          <ul>
            <li><strong>Weekly family meetings:</strong> Discuss financial goals and challenges as a team</li>
            <li><strong>Involve kids in decisions:</strong> Engage children in age-appropriate money decisions</li>
            <li><strong>Family savings goals:</strong> Create shared goals like a "vacation fund"</li>
            <li><strong>Kids' contributions:</strong> Encourage children to suggest ways to save money</li>
            <li><strong>Work together to make money:</strong> Find ways the whole family can contribute</li>
          </ul>
        </div>
      )
    },
    {
      title: "My First Budget",
      content: (
        <div className="section-content">
          <h3>Activity: My First Budget</h3>
          <p>You have $50 to spend for one month. Let's create your budget:</p>
          
          <div className="budget-creator">
            <h4>Create Your Budget:</h4>
            <div className="budget-categories">
              <div className="budget-category">
                <label>Savings (recommended: $10-15)</label>
                <input 
                  type="number" 
                  value={budgetData.savings}
                  onChange={(e) => setBudgetData(prev => ({ ...prev, savings: parseInt(e.target.value) || 0 }))}
                  min="0"
                  max="50"
                />
              </div>
              <div className="budget-category">
                <label>Needs (food, school supplies, etc.)</label>
                <input 
                  type="number" 
                  value={budgetData.needs}
                  onChange={(e) => setBudgetData(prev => ({ ...prev, needs: parseInt(e.target.value) || 0 }))}
                  min="0"
                  max="50"
                />
              </div>
              <div className="budget-category">
                <label>Wants (entertainment, treats, etc.)</label>
                <input 
                  type="number" 
                  value={budgetData.wants}
                  onChange={(e) => setBudgetData(prev => ({ ...prev, wants: parseInt(e.target.value) || 0 }))}
                  min="0"
                  max="50"
                />
              </div>
              <div className="budget-category">
                <label>Giving/Sharing (charity, gifts, etc.)</label>
                <input 
                  type="number" 
                  value={budgetData.giving}
                  onChange={(e) => setBudgetData(prev => ({ ...prev, giving: parseInt(e.target.value) || 0 }))}
                  min="0"
                  max="50"
                />
              </div>
            </div>
            
            <div className="budget-summary">
              <div className="total-spent">
                <strong>Total Spent: ${budgetData.savings + budgetData.needs + budgetData.wants + budgetData.giving}</strong>
              </div>
              <div className="remaining">
                <strong>Remaining: ${50 - (budgetData.savings + budgetData.needs + budgetData.wants + budgetData.giving)}</strong>
              </div>
              {budgetData.savings + budgetData.needs + budgetData.wants + budgetData.giving > 50 && (
                <div className="budget-warning">
                  ⚠️ You're over budget! Try adjusting your amounts.
                </div>
              )}
            </div>
          </div>

          <div className="budget-tips">
            <h4>Budget Tips:</h4>
            <ul>
              <li>Always save at least 20% of your money</li>
              <li>Needs should come before wants</li>
              <li>It's okay to give to others, but don't forget to save for yourself</li>
              <li>Compare your budget with classmates to see different approaches</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Family Finance",
      content: (
        <div className="section-content">
          <h3>Family Budget Simulator</h3>
          <p>Practice making budget decisions for a family of four.</p>
          
          <div className="family-budget-challenge">
            <h4>The Martinez Family Monthly Budget Challenge</h4>
            <div className="family-income">
              <p><strong>Monthly Income: $4,500</strong></p>
            </div>
            
            <div className="required-expenses">
              <h5>Required Expenses:</h5>
              <ul>
                <li>Rent: $1,200</li>
                <li>Groceries: $600</li>
                <li>Utilities: $300</li>
                <li>Car payment: $400</li>
                <li>Insurance: $200</li>
              </ul>
              <p><strong>Total Required: $2,700</strong></p>
              <p><strong>Remaining for other expenses: $1,800</strong></p>
            </div>

            <div className="family-decisions">
              <h5>How should the Martinez family spend the remaining $1,800?</h5>
              <p>Choose how to spend the rest:</p>
              <ul>
                <li>Emergency savings: $______</li>
                <li>Entertainment: $______</li>
                <li>Clothes: $______</li>
                <li>Vacation savings: $______</li>
                <li>Other: $______</li>
              </ul>
            </div>

            <div className="class-comparison">
              <h4>Class Comparison:</h4>
              <p>Compare your family budget with classmates. What did you prioritize differently?</p>
            </div>
          </div>

          <div className="budget-reality-check">
            <h4>Budget Reality Check</h4>
            <p>Survey 5 adults about what percentage of their income they spend on:</p>
            <ul>
              <li>Housing</li>
              <li>Food</li>
              <li>Transportation</li>
              <li>Entertainment</li>
            </ul>
            <p><strong>Reflection:</strong> Were you surprised by any of their answers?</p>
          </div>

          <h3>Family Money Values</h3>
          <p>Understanding your family's money values and goals helps in making good financial decisions together. This includes:</p>
          <ul>
            <li>Comparing prices when shopping</li>
            <li>Understanding the value of things</li>
            <li>Explaining purchasing decisions</li>
            <li>Working together toward shared goals</li>
          </ul>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      question: "What is budgeting?",
      options: ["Spending all your money at once", "Planning how to spend money before spending it", "Only buying expensive things", "Never spending money"],
      correct: 1,
      explanation: "Budgeting is planning how to spend money by deciding how much to use for different things before spending it."
    },
    {
      question: "What is the 'pay yourself first' rule?",
      options: ["Buy yourself something nice first", "Put money into savings before spending on anything else", "Pay your bills first", "Give money to charity first"],
      correct: 1,
      explanation: "The 'pay yourself first' rule means putting money into savings before spending on anything else, even small amounts."
    },
    {
      question: "What should you do before making an impulse purchase?",
      options: ["Buy it immediately", "Wait 24 hours to decide", "Ask a friend to buy it for you", "Put it on a credit card"],
      correct: 1,
      explanation: "The '24-hour rule' suggests waiting a day before buying something to avoid impulse purchases."
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const completeModule = () => {
    if (!userProgress.completedModules.includes(3)) {
      setUserProgress(prev => ({
        ...prev,
        completedModules: [...prev.completedModules, 3],
        coins: prev.coins + 100,
        badges: [...prev.badges, "Budget Master"]
      }));
    }
  };

  const completeWorksheet = () => {
    if (!userProgress.completedWorksheets.includes(3)) {
      setUserProgress(prev => ({
        ...prev,
        completedWorksheets: [...prev.completedWorksheets, 3],
        completedModules: [...prev.completedModules, 3],
        coins: prev.coins + 150,
        badges: [...prev.badges, "Budget Master", "Worksheet Master"]
      }));
    }
    // Redirect to progress page after worksheet completion
    navigate('/profile');
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  if (showWorksheet) {
    return (
      <div className="module">
        <div className="module-header">
          <h1>Module 3: Worksheet Assessment</h1>
          <p>Complete this comprehensive worksheet to test your understanding of money management and budgeting!</p>
        </div>
        <div className="worksheet-container">
          <div className="worksheet-section">
            <h3>Part 1: Multiple Choice Questions</h3>
            
            <div className="worksheet-question">
              <h4>1. What is budgeting?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  A) Spending all your money at once
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  B) Planning how to spend money before spending it
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  C) Only buying expensive things
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  D) Never spending money
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>2. What is the "pay yourself first" rule?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  A) Buy yourself something nice before paying bills
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  B) Save money before spending on other things
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  C) Pay yourself a salary from your allowance
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  D) Only spend money on yourself
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>3. What is the best way to avoid impulse purchases?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  A) Never go shopping
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  B) Wait 24 hours before buying something you want
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  C) Only shop when you're in a hurry
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  D) Buy everything you see immediately
                </label>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 2: Budget Creation</h3>
            
            <div className="worksheet-question">
              <h4>4. Create a Budget Using the 50/30/20 Rule</h4>
              <p>You receive $100 per month in allowance. Use the 50/30/20 rule to create your budget:</p>
              <ul>
                <li>50% for needs (school supplies, lunch money, etc.)</li>
                <li>30% for wants (entertainment, toys, etc.)</li>
                <li>20% for savings</li>
              </ul>
              <div className="comparison-grid">
                <div className="comparison-column">
                  <h5>Category</h5>
                  <div className="pros-cons">
                    <h6>Needs (50%):</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List your needs and calculate $50..."
                      value={worksheetAnswers.q4a || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4a: e.target.value }))}
                    />
                    <h6>Wants (30%):</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List your wants and calculate $30..."
                      value={worksheetAnswers.q4b || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4b: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="comparison-column">
                  <h5>Category</h5>
                  <div className="pros-cons">
                    <h6>Savings (20%):</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List your savings goals and calculate $20..."
                      value={worksheetAnswers.q4c || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4c: e.target.value }))}
                    />
                    <h6>Total Budget:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Verify your total equals $100..."
                      value={worksheetAnswers.q4d || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4d: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>5. Birthday Money Dilemma</h4>
              <p>You received $200 for your birthday. You want to buy a $150 video game, but you also want to save for a $300 bike. Your parents suggest you save half and spend half.</p>
              <p><strong>Questions:</strong></p>
              <ul>
                <li>What would you do with the $200? Explain your decision.</li>
                <li>How long would it take to save for the bike if you save $50 per month?</li>
                <li>What are the pros and cons of each choice?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your analysis and decision here..."
                value={worksheetAnswers.q5 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>6. Savings Strategy Planning</h4>
              <p>You want to save $500 for a school trip in 10 months. Create a savings plan:</p>
              <ul>
                <li>How much do you need to save per month?</li>
                <li>What are 3 ways you could earn extra money?</li>
                <li>What expenses could you reduce to save more?</li>
                <li>What will you do if you fall behind on your savings goal?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your savings plan here..."
                value={worksheetAnswers.q6 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6: e.target.value }))}
              />
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 3: Family Finance Scenarios</h3>
            
            <div className="worksheet-question">
              <h4>7. Family Budget Challenge</h4>
              <p>The Martinez family has a monthly income of $4,000. Their expenses are:</p>
              <ul>
                <li>Rent: $1,200</li>
                <li>Food: $600</li>
                <li>Transportation: $400</li>
                <li>Utilities: $300</li>
                <li>Entertainment: $200</li>
                <li>Savings: $300</li>
              </ul>
              <p><strong>Questions:</strong></p>
              <ul>
                <li>What percentage of their income goes to each category?</li>
                <li>If they wanted to save $500 per month instead, what could they adjust?</li>
                <li>What would you recommend if they had an unexpected $200 expense?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your analysis and recommendations here..."
                value={worksheetAnswers.q7 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q7: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>8. Family Money Meeting</h4>
              <p>Plan a family money meeting agenda. Include:</p>
              <ul>
                <li>What topics should be discussed?</li>
                <li>How often should the family meet?</li>
                <li>What role should kids play in family financial decisions?</li>
                <li>How can the family make money discussions positive and educational?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your family meeting plan here..."
                value={worksheetAnswers.q8 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q8: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>9. Personal Reflection</h4>
              <p>Reflect on your own money management:</p>
              <ul>
                <li>What is your biggest money challenge right now?</li>
                <li>What money habit would you like to improve?</li>
                <li>What financial goal do you want to achieve in the next year?</li>
                <li>How will you track your progress toward your goal?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your personal reflection here..."
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
            <button onClick={completeWorksheet} className="btn-primary">
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
          <h1>Module 3 Quiz</h1>
          <p>Test your knowledge about money management and budgeting!</p>
        </div>
        <div className="quiz-container">
          {quizQuestions.map((question, qIndex) => (
            <div key={qIndex} className="quiz-question">
              <h3>{question.question}</h3>
              <div className="quiz-options">
                {question.options.map((option, oIndex) => (
                  <button
                    key={oIndex}
                    className={`quiz-option ${answers[qIndex] === oIndex ? 'selected' : ''} ${
                      answers[qIndex] !== undefined && oIndex === question.correct ? 'correct' : ''
                    }`}
                    onClick={() => handleAnswer(qIndex, oIndex)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {answers[qIndex] !== undefined && (
                <div className="explanation">
                  <p><strong>Explanation:</strong> {question.explanation}</p>
                </div>
              )}
            </div>
          ))}
          <div className="quiz-actions">
            <button onClick={() => setShowQuiz(false)} className="btn-secondary">
              <ArrowLeft className="btn-icon" />
              Back to Module
            </button>
            <button onClick={() => setShowWorksheet(true)} className="btn-primary">
              Take Worksheet Assessment
              <Calculator className="btn-icon" />
            </button>
            <button onClick={completeModule} className="btn-primary">
              Complete Module
              <CheckCircle className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showWorksheet) {
    return (
      <div className="module">
        <div className="module-header">
          <h1>Module 3: Worksheet Assessment</h1>
          <p>Complete this comprehensive worksheet to test your understanding of money management and budgeting!</p>
        </div>
        <div className="worksheet-container">
          <div className="worksheet-section">
            <h3>Part 1: Multiple Choice Questions</h3>
            
            <div className="worksheet-question">
              <h4>1. What is budgeting?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  A) Spending all your money at once
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  B) Planning how to spend money before spending it
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  C) Only buying expensive things
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  D) Never spending money
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>2. What is the "pay yourself first" rule?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  A) Buy yourself something nice first
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  B) Put money into savings before spending on anything else
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  C) Pay your bills first
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  D) Give money to charity first
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>3. What should you do before making an impulse purchase?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  A) Buy it immediately
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  B) Wait 24 hours to decide
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  C) Ask a friend to buy it for you
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  D) Put it on a credit card
                </label>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 2: Budget Creation</h3>
            
            <div className="worksheet-question">
              <h4>4. Create Your Personal Budget</h4>
              <p>You have $100 to spend for one month. Create a budget using the 50/30/20 rule:</p>
              <ul>
                <li>50% for needs (food, school supplies, etc.)</li>
                <li>30% for wants (entertainment, treats, etc.)</li>
                <li>20% for savings</li>
              </ul>
              <div className="comparison-grid">
                <div className="comparison-column">
                  <h5>Budget Categories</h5>
                  <div className="pros-cons">
                    <h6>Needs (50% = $50):</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List your needs and amounts..."
                      value={worksheetAnswers.q4a || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4a: e.target.value }))}
                    />
                    <h6>Wants (30% = $30):</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List your wants and amounts..."
                      value={worksheetAnswers.q4b || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4b: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="comparison-column">
                  <h5>Budget Categories</h5>
                  <div className="pros-cons">
                    <h6>Savings (20% = $20):</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="What are you saving for?"
                      value={worksheetAnswers.q4c || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4c: e.target.value }))}
                    />
                    <h6>Total Check:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Does your budget add up to $100?"
                      value={worksheetAnswers.q4d || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4d: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>5. Birthday Money Dilemma</h4>
              <p>Alex receives $50 for their birthday and has several goals:</p>
              <ul>
                <li>Buy a $40 video game</li>
                <li>Save $20 for a bike (which needs $100 total)</li>
                <li>Spend $15 on snacks with friends</li>
                <li>Give $10 to charity</li>
              </ul>
              <p><strong>Create a budget plan for Alex and explain your reasoning:</strong></p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your budget plan and explanation here..."
                value={worksheetAnswers.q5 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>6. Savings Strategies</h4>
              <p>List and explain 5 different strategies young people can use to save money:</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your savings strategies here..."
                value={worksheetAnswers.q6 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6: e.target.value }))}
              />
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 3: Family Finance Scenarios</h3>
            
            <div className="worksheet-question">
              <h4>7. Family Budget Challenge</h4>
              <p>The Martinez family has a monthly income of $4,500 and these required expenses:</p>
              <ul>
                <li>Rent: $1,200</li>
                <li>Groceries: $600</li>
                <li>Utilities: $300</li>
                <li>Car payment: $400</li>
                <li>Insurance: $200</li>
              </ul>
              <p><strong>Calculate and plan:</strong></p>
              <ul>
                <li>How much money is left after required expenses?</li>
                <li>How should they allocate the remaining money?</li>
                <li>Create a budget for the remaining amount</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your calculations and budget plan here..."
                value={worksheetAnswers.q7 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q7: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>8. Family Money Meeting</h4>
              <p>Create an agenda for a family money meeting to discuss a $2000 vacation goal in one year:</p>
              <ul>
                <li>How much each person needs to save per month</li>
                <li>Ways each family member can contribute</li>
                <li>Strategies to reach the goal</li>
                <li>How to track progress</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your family meeting agenda here..."
                value={worksheetAnswers.q8 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q8: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>9. Money Management Reflection</h4>
              <p>Reflect on what you've learned about money management:</p>
              <ul>
                <li>What was the most surprising thing you learned?</li>
                <li>Which budgeting strategy do you think would work best for you?</li>
                <li>How can you apply these lessons to your own life?</li>
                <li>What questions do you still have about money management?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your reflection here..."
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
            <button onClick={completeWorksheet} className="btn-primary">
              Submit Worksheet
              <CheckCircle className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="module">
      <div className="module-header">
        <h1>Module 3: Money Management Basics</h1>
        <p>Master budgeting, saving, and family financial planning.</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="module-content">
        <div className="section-header">
          <h2>{sections[currentSection].title}</h2>
        </div>
        
        {sections[currentSection].content}

        <div className="section-navigation">
          <button 
            onClick={prevSection} 
            disabled={currentSection === 0}
            className="btn-secondary"
          >
            <ArrowLeft className="btn-icon" />
            Previous
          </button>
          
          <span className="section-counter">
            Section {currentSection + 1} of {sections.length}
          </span>
          
          <button onClick={nextSection} className="btn-primary">
            {currentSection === sections.length - 1 ? 'Take Quiz' : 'Next'}
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Module3;
