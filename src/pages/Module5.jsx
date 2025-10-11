import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, Smartphone, CreditCard, Activity, BookOpen } from 'lucide-react';
import './Module.css';

function Module5({ userProgress, setUserProgress }) {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [worksheetAnswers, setWorksheetAnswers] = useState({});
  const [showGame, setShowGame] = useState(false);

  const sections = [
    {
      title: "UPI Basics",
      content: (
        <div className="section-content">
          <h3>What is UPI?</h3>
          <p>
            UPI (Unified Payments Interface) lets you send or receive money instantly 
            using just a mobile number or QR code. It connects directly to your bank.
          </p>

          <h3>UPI Setup Checklist ✅</h3>
          <ul>
            <li>Download from official app store only</li>
            <li>Verify your registered mobile number</li>
            <li>Link your bank account securely</li>
            <li>Create a strong UPI PIN (4-6 digits)</li>
          </ul>
        </div>
      )
    },
    {
      title: "Handling Transaction Problems",
      content: (
        <div className="section-content">
          <h3>What if a transaction fails?</h3>
          <ul>
            <li>Check bank balance first</li>
            <li>Wait 24 hours for auto-refund</li>
            <li>Contact bank if money not returned</li>
            <li>Keep a screenshot of failed transaction</li>
          </ul>

          <h3>What if money is sent to the wrong person?</h3>
          <ul>
            <li>Contact recipient politely</li>
            <li>Explain the mistake</li>
            <li>Request refund</li>
            <li>If they refuse, contact bank for advice</li>
          </ul>
        </div>
      )
    },
    {
      title: "Smart Spending with UPI",
      content: (
        <div className="section-content">
          <h3>Digital Spending Dashboard 📊</h3>
          <p>
            UPI apps show spending reports and allow setting budgets. Categories include:
          </p>
          <ul>
            <li>Food & Dining: 30%</li>
            <li>Entertainment: 20%</li>
            <li>Shopping: 25%</li>
            <li>Transportation: 15%</li>
            <li>Others: 10%</li>
          </ul>
        </div>
      )
    },
    {
      title: "UPI Simulation Challenge",
      content: (
        <div className="section-content">
          <h3>Practice UPI Scenarios 🎮</h3>
          <p>Students act out real-life payment situations using mock phones and QR codes.</p>
          <ul>
            <li>Friend's Birthday: Send ₹200 for group gift</li>
            <li>Street Food: Pay ₹50 using QR code</li>
            <li>Online Shopping: Pay ₹800 for school supplies</li>
            <li>Oops Moment: Accidentally send ₹100 to wrong contact</li>
            <li>Bill Split: Request ₹150 from 3 friends</li>
          </ul>
          <button className="btn-primary" onClick={() => setShowGame(true)}>
            Start Gamified Challenge <Activity className="btn-icon" />
          </button>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      question: "What is the first step to set up UPI?",
      options: ["Link your bank", "Download from official store", "Create PIN", "Send money"],
      correct: 1,
      explanation: "Always download the official UPI app from Google Play or Apple App Store first."
    },
    {
      question: "If your money is sent to the wrong person, what should you do first?",
      options: ["Call the police", "Politely ask recipient to refund", "Forget about it", "Delete the app"],
      correct: 1,
      explanation: "Always politely request the recipient to refund. If not, contact the bank."
    },
    {
      question: "Which spending category takes up the highest share in the example?",
      options: ["Food & Dining", "Entertainment", "Shopping", "Transportation"],
      correct: 0,
      explanation: "Food & Dining is the highest, with 30% of the monthly budget."
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const completeModule = () => {
    if (!userProgress.completedModules.includes(5)) {
      setUserProgress(prev => ({
        ...prev,
        completedModules: [...prev.completedModules, 5],
        coins: prev.coins + 150,
        badges: [...prev.badges, "UPI Pro"]
      }));
    }
  };

  const completeWorksheet = () => {
    if (!userProgress.completedWorksheets.includes(5)) {
      setUserProgress(prev => ({
        ...prev,
        completedWorksheets: [...prev.completedWorksheets, 5],
        completedModules: [...prev.completedModules, 5],
        coins: prev.coins + 200,
        badges: [...prev.badges, "UPI Pro", "Worksheet Master"]
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
          <h1>Module 5: Worksheet Assessment</h1>
          <p>Complete this comprehensive worksheet to test your understanding of UPI and mobile wallets!</p>
        </div>
        <div className="worksheet-container">
          <div className="worksheet-section">
            <h3>Part 1: Multiple Choice Questions</h3>
            
            <div className="worksheet-question">
              <h4>1. What is the first step to set up UPI?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  A) Link your bank account
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  B) Download from official store
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  C) Create PIN
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  D) Send money
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>2. If your money is sent to the wrong person, what should you do first?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  A) Call the police
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  B) Politely ask recipient to refund
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  C) Forget about it
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  D) Delete the app
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>3. Which spending category takes up the highest share in the example?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  A) Food & Dining
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  B) Entertainment
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  C) Shopping
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  D) Transportation
                </label>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 2: UPI Setup and Safety</h3>
            
            <div className="worksheet-question">
              <h4>4. UPI Setup Checklist</h4>
              <p>Create a step-by-step checklist for safely setting up UPI on a new phone:</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your UPI setup checklist here..."
                value={worksheetAnswers.q4 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>5. Transaction Problem Scenarios</h4>
              <p>You're using UPI and encounter these problems. What would you do?</p>
              <div className="comparison-grid">
                <div className="comparison-column">
                  <h5>Scenario A: Transaction Failed</h5>
                  <div className="pros-cons">
                    <h6>What to do:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Steps to take when transaction fails..."
                      value={worksheetAnswers.q5a || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5a: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="comparison-column">
                  <h5>Scenario B: Wrong Amount Sent</h5>
                  <div className="pros-cons">
                    <h6>What to do:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Steps to take when wrong amount is sent..."
                      value={worksheetAnswers.q5b || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5b: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>6. UPI Safety Rules</h4>
              <p>List 5 important safety rules when using UPI:</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your UPI safety rules here..."
                value={worksheetAnswers.q6 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6: e.target.value }))}
              />
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 3: Smart Spending and Budgeting</h3>
            
            <div className="worksheet-question">
              <h4>7. Digital Spending Analysis</h4>
              <p>Analyze the spending categories from the module:</p>
              <ul>
                <li>Food & Dining: 30%</li>
                <li>Entertainment: 20%</li>
                <li>Shopping: 25%</li>
                <li>Transportation: 15%</li>
                <li>Others: 10%</li>
              </ul>
              <p><strong>Questions:</strong></p>
              <ul>
                <li>Which category would you reduce if you wanted to save more money?</li>
                <li>What percentage would you allocate to savings?</li>
                <li>How can UPI apps help track spending?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your spending analysis here..."
                value={worksheetAnswers.q7 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q7: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>8. UPI Challenge Scenarios</h4>
              <p>You participated in UPI simulation challenges. Reflect on these scenarios:</p>
              <ul>
                <li>Friend's Birthday: Send ₹200 for group gift</li>
                <li>Street Food: Pay ₹50 using QR code</li>
                <li>Online Shopping: Pay ₹800 for school supplies</li>
                <li>Oops Moment: Accidentally send ₹100 to wrong contact</li>
                <li>Bill Split: Request ₹150 from 3 friends</li>
              </ul>
              <p><strong>Questions:</strong></p>
              <ul>
                <li>Which scenario was most challenging? Why?</li>
                <li>What did you learn about UPI from these scenarios?</li>
                <li>How would you handle the "Oops Moment" in real life?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your reflection on UPI scenarios here..."
                value={worksheetAnswers.q8 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q8: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>9. Future of Mobile Payments</h4>
              <p>Based on what you've learned about UPI and mobile wallets:</p>
              <ul>
                <li>How do you think mobile payments will change in the next 5 years?</li>
                <li>What new features would you like to see in UPI apps?</li>
                <li>What are the benefits and risks of a cashless society?</li>
                <li>How can young people use UPI responsibly?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your thoughts on the future of mobile payments here..."
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

  if (showGame) {
    return (
      <div className="module">
        <div className="module-header">
          <h1>Gamified Activity: UPI Challenge 🎮</h1>
          <p>Make the right choices in real-life UPI payment scenarios!</p>
        </div>
        <div className="game-container">
          <div className="game-scenario">
            <h3>Scenario: You accidentally sent ₹100 to the wrong person.</h3>
            <p>What should you do?</p>
            <div className="quiz-options">
              <button className="quiz-option">A) Panic and delete the app</button>
              <button className="quiz-option">B) Politely contact recipient and request refund</button>
              <button className="quiz-option">C) Do nothing, money is gone</button>
            </div>
            <p className="explanation">✅ Correct Action: Always contact the recipient politely first. If not resolved, contact your bank.</p>
          </div>
          <button onClick={() => setShowGame(false)} className="btn-secondary">
            <ArrowLeft className="btn-icon" /> Back to Module
          </button>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div className="module">
        <div className="module-header">
          <h1>Module 5 Quiz</h1>
          <p>Test your knowledge about UPI and mobile wallets!</p>
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
              <BookOpen className="btn-icon" />
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

  return (
    <div className="module">
      <div className="module-header">
        <h1>Module 5: UPI & Mobile Wallets</h1>
        <p>Learn how to use UPI safely, manage spending, and handle transaction mistakes.</p>
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

export default Module5;
