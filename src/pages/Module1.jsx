import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, BookOpen, Coins, Smartphone, CreditCard, AlertCircle } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import './Module.css';

function Module1() {
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
      title: "The Story of Money",
      content: (
        <div className="section-content">
          <h3>What is money, really?</h3>
          <p>Money is anything people agree has value and can be used to buy things. It's like a universal "thank you note" that everyone accepts for goods and services.</p>
          
          <div className="quick-question">
            <h4>Quick Question:</h4>
            <p>Imagine money disappeared tomorrow. How would you get lunch at school?</p>
          </div>

          <h3>How did people buy things before money existed?</h3>
          <p>They used the <strong>barter system</strong> - trading one thing directly for another. For example, a farmer might trade 10 apples for a pair of shoes from a shoemaker.</p>
          
          <div className="case-study">
            <h4>Case Study - The Lunchroom Barter:</h4>
            <p>Sarah has chips, wants Jessica's apple. Jessica wants Mark's cookies. Mark wants Sarah's chips.</p>
            <p><strong>Challenge:</strong> How many trades are needed? Try to solve this as a class!</p>
          </div>

          <h3>What were the biggest problems with the barter system?</h3>
          <ul>
            <li><strong>Double Coincidence of Wants:</strong> You needed to find someone who had what you wanted AND wanted what you had</li>
            <li><strong>Lack of Storability:</strong> You couldn't save things for later, especially perishable goods</li>
            <li><strong>Difficulty in Valuation:</strong> Hard to determine equivalent values (How many apples equal one book?)</li>
          </ul>

          <h3>Why do people trust that money has value?</h3>
          <ul>
            <li><strong>Universal Agreement:</strong> Everyone agrees it has value (like how a touchdown is worth 6 points in football)</li>
            <li><strong>Government Promise:</strong> The government promises it's worth something</li>
            <li><strong>It Works:</strong> Money actually works for daily transactions, proving its value</li>
          </ul>
        </div>
      )
    },
    {
      title: "The Evolution of Money",
      content: (
        <div className="section-content">
          <div className="evolution-timeline">
            <h3>History and Evolution of Money</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">🐄</div>
                <h4>Barter</h4>
                <p>Trading goods directly</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">🥇</div>
                <h4>Gold</h4>
                <p>Precious metals as currency</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">🪙</div>
                <h4>Metal Coins</h4>
                <p>Standardized metal currency</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">💵</div>
                <h4>Paper Money</h4>
                <p>Banknotes and bills</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">💳</div>
                <h4>Plastic Cards</h4>
                <p>Credit and debit cards</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">📱</div>
                <h4>Electronic Money</h4>
                <p>Digital payments and apps</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">₿</div>
                <h4>Cryptocurrency</h4>
                <p>Digital currencies like Bitcoin</p>
              </div>
            </div>
          </div>

          <h3>What was the first type of money?</h3>
          <p><strong>Commodity money</strong> - valuable items like shells, salt, cattle, or gold. These had value because they were useful or rare.</p>

          <div className="quick-think">
            <h4>Quick Think:</h4>
            <ul>
              <li>Why do you think ancient people chose shells as money instead of rocks?</li>
              <li>What makes a good form of money?</li>
            </ul>
          </div>

          <h3>Why did we switch to coins and paper money?</h3>
          <p>Coins and paper money are easier to carry, divide, and count. Imagine paying for a candy bar with a cow!</p>

          <div className="real-life-example">
            <h4>Real-Life Example:</h4>
            <p>In ancient Rome, soldiers were sometimes paid in salt (that's where the word "salary" comes from - "sal" means salt in Latin).</p>
          </div>

          <h3>How did different countries create their own special types of money?</h3>
          <p>Unique money was based on available resources and needs:</p>
          <ul>
            <li><strong>Pacific islands:</strong> Used huge stone wheels called "Rai stones"</li>
            <li><strong>African countries:</strong> Used cowrie shells</li>
            <li><strong>Native Americans:</strong> Used polished shell beads</li>
            <li><strong>Tibet:</strong> Used blocks of tea</li>
          </ul>

          <h3>What makes a good form of money?</h3>
          <ul>
            <li>Strong (won't break)</li>
            <li>Easy to carry</li>
            <li>Breakable into smaller pieces</li>
            <li>All the same</li>
            <li>Limited in amount</li>
            <li>Accepted by everyone</li>
          </ul>
        </div>
      )
    },
    {
      title: "Money in Daily Life",
      content: (
        <div className="section-content">
          <h3>How do people decide what something costs?</h3>
          <p><strong>Supply and demand</strong> - if many people want something rare, the price goes up. If something is common and few people want it, the price goes down.</p>

          <div className="quick-scenario">
            <h4>Quick Scenario:</h4>
            <p>It's the day of the school dance and everyone forgot to bring water bottles. The school store has only 10 bottles left and 50 thirsty students. What do you think happens to the price? Why?</p>
          </div>

          <h3>Why do the same items cost different amounts at different stores?</h3>
          <p>Stores have different costs (rent, employees, quality) and different strategies. Some stores charge more for convenience, others charge less to attract customers.</p>

          <div className="real-life-example">
            <h4>Real-Life Example:</h4>
            <p>A bottle of water costs $1 at a grocery store, $3 at a movie theater, and $5 at an amusement park. Same product, different places, different prices!</p>
          </div>

          <h3>What is digital money?</h3>
          <p>Money that exists only on computers, used via debit cards, mobile apps, or online. It moves electronically.</p>

          <div className="case-study">
            <h4>Case Study - The Digital Purchase:</h4>
            <p>Maria wants to buy a $15 video game online. She has $10 cash, $8 in a digital wallet. Her mom adds money via credit card.</p>
            <p><strong>Challenge:</strong> Trace the flow of money and identify different types involved.</p>
          </div>

          <h3>What are the good and bad things about digital money versus cash?</h3>
          <div className="comparison">
            <div className="pros-cons">
              <h4>Digital Money</h4>
              <div className="pros">
                <h5>Pros:</h5>
                <ul>
                  <li>Super convenient (tap-to-pay)</li>
                  <li>Safer than carrying cash</li>
                  <li>Works globally</li>
                  <li>Automatic record-keeping</li>
                </ul>
              </div>
              <div className="cons">
                <h5>Cons:</h5>
                <ul>
                  <li>Requires smartphone/computer</li>
                  <li>Purchases are tracked</li>
                  <li>Doesn't work without power/systems</li>
                </ul>
              </div>
            </div>
            <div className="pros-cons">
              <h4>Physical Cash</h4>
              <div className="pros">
                <h5>Pros:</h5>
                <ul>
                  <li>Completely private</li>
                  <li>Works without technology</li>
                  <li>Immediately available</li>
                </ul>
              </div>
              <div className="cons">
                <h5>Cons:</h5>
                <ul>
                  <li>Can be lost/stolen</li>
                  <li>Doesn't work for online shopping</li>
                  <li>Hard for big purchases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      question: "What was the first real coin made in?",
      options: ["China", "Turkey", "Rome", "Greece"],
      correct: 1,
      explanation: "Turkey, around 650 BCE."
    },
    {
      question: "Why did merchants like coins better than gold bars?",
      options: ["They were prettier", "Easier to count and divide", "They were lighter", "They were cheaper"],
      correct: 1,
      explanation: "Coins were easier to count and divide than weighing gold bars."
    },
    {
      question: "Name three types of money used throughout history.",
      options: ["Shells, coins, paper", "Gold, silver, bronze", "Cards, apps, cash", "All of the above"],
      correct: 3,
      explanation: "All of these have been used as forms of money throughout history."
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleCompleteModule = async () => {
    const result = await completeModule(1);
    if (result.success) {
      console.log(`Module completed! Earned ${result.coinsEarned} coins.`);
    }
  };

  const handleCompleteWorksheet = async () => {
    const result = await completeWorksheet(1);
    if (result.success) {
      console.log(`Worksheet completed! Earned ${result.coinsEarned} coins.`);
      // Also complete the module if not already completed
      if (!isModuleCompleted(1)) {
        await completeModule(1);
      }
      // Redirect to profile page after worksheet completion
      navigate('/profile', { 
        state: { 
          message: 'Congratulations! You completed Module 1 worksheet! 🎉' 
        } 
      });
    }
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
          <h1>Module 1: Worksheet Assessment</h1>
          <p>Complete this comprehensive worksheet to test your understanding of money concepts!</p>
        </div>
        <div className="worksheet-container">
          <div className="worksheet-section">
            <h3>Part 1: Multiple Choice Questions</h3>
            
            <div className="worksheet-question">
              <h4>1. What was the main problem with the barter system?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  A) People didn't trust each other
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  B) Double coincidence of wants
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  C) Items were too heavy to carry
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  D) No one wanted to trade
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>2. Which of these is NOT a characteristic of good money?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  A) Easy to carry
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  B) Breaks easily
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  C) Limited in amount
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  D) Accepted by everyone
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>3. What type of money was used in ancient Rome to pay soldiers?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  A) Gold coins
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  B) Salt
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  C) Paper money
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  D) Shells
                </label>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 2: Short Answer Questions</h3>
            
            <div className="worksheet-question">
              <h4>4. Explain why people trust that money has value. Give at least 2 reasons.</h4>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your answer here..."
                value={worksheetAnswers.q4 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>5. Describe the evolution of money from barter to digital currency. List at least 4 stages.</h4>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your answer here..."
                value={worksheetAnswers.q5 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>6. What are the advantages and disadvantages of digital money compared to cash?</h4>
              <div className="comparison-grid">
                <div className="comparison-column">
                  <h5>Digital Money</h5>
                  <div className="pros-cons">
                    <h6>Advantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List advantages..."
                      value={worksheetAnswers.q6a || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6a: e.target.value }))}
                    />
                    <h6>Disadvantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List disadvantages..."
                      value={worksheetAnswers.q6b || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6b: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="comparison-column">
                  <h5>Physical Cash</h5>
                  <div className="pros-cons">
                    <h6>Advantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List advantages..."
                      value={worksheetAnswers.q6c || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6c: e.target.value }))}
                    />
                    <h6>Disadvantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List disadvantages..."
                      value={worksheetAnswers.q6d || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6d: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 3: Critical Thinking</h3>
            
            <div className="worksheet-question">
              <h4>7. Scenario Analysis: The Lunchroom Barter Problem</h4>
              <p>Sarah has chips and wants Jessica's apple. Jessica wants Mark's cookies. Mark wants Sarah's chips.</p>
              <p><strong>Question:</strong> How many trades are needed to solve this problem? Explain your reasoning and suggest how money would make this easier.</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your analysis here..."
                value={worksheetAnswers.q7 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q7: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>8. Future of Money Prediction</h4>
              <p>Based on what you've learned about the evolution of money, what do you think money might look like in 50 years? Explain your prediction and reasoning.</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your prediction here..."
                value={worksheetAnswers.q8 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q8: e.target.value }))}
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
          <h1>Module 1 Quiz</h1>
          <p>Test your knowledge about money!</p>
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
            <button 
              onClick={() => setShowWorksheet(true)} 
              className="btn-primary"
            >
              Take Worksheet Assessment
              <BookOpen className="btn-icon" />
            </button>
            <button onClick={handleCompleteModule} className="btn-primary">
              Complete Module
              <CheckCircle className="btn-icon" />
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
        <h1>Module 1: What is Money?</h1>
        <p>Discover the history and evolution of money, from bartering to digital currencies.</p>
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

export default Module1;
