import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, Smartphone, Bitcoin, Zap, BookOpen } from 'lucide-react';
import './Module.css';

function Module4({ userProgress, setUserProgress }) {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [worksheetAnswers, setWorksheetAnswers] = useState({});
  const [debateChoice, setDebateChoice] = useState(null);
  const [futureDesign, setFutureDesign] = useState('');

  const sections = [
    {
      title: "Digital Money Revolution",
      content: (
        <div className="section-content">
          <h3>What new types of money are being invented?</h3>
          <p>Cryptocurrency (like Bitcoin) and digital wallets that work with smartphones. Some places are becoming "cashless" - no physical money allowed!</p>

          <div className="crypto-showcase">
            <h4>Cryptocurrency Examples:</h4>
            <div className="crypto-grid">
              <div className="crypto-item">
                <div className="crypto-icon">₿</div>
                <h5>Bitcoin</h5>
                <p>The first and most famous cryptocurrency</p>
              </div>
              <div className="crypto-item">
                <div className="crypto-icon">Ξ</div>
                <h5>Ethereum</h5>
                <p>Smart contracts and decentralized apps</p>
              </div>
              <div className="crypto-item">
                <div className="crypto-icon">XRP</div>
                <h5>Ripple</h5>
                <p>Fast international payments</p>
              </div>
            </div>
          </div>

          <h3>What is cryptocurrency and how is it different from regular money?</h3>
          <p>Cryptocurrency is digital money that exists only on computers and uses special technology called 'blockchain' to keep track of who owns what.</p>
          
          <div className="crypto-comparison">
            <div className="comparison-grid">
              <div className="comparison-item">
                <h4>Regular Money</h4>
                <ul>
                  <li>Controlled by governments and banks</li>
                  <li>Physical coins and bills exist</li>
                  <li>Centralized system</li>
                  <li>Stable value (usually)</li>
                  <li>Widely accepted</li>
                </ul>
              </div>
              <div className="comparison-item">
                <h4>Cryptocurrency</h4>
                <ul>
                  <li>Managed by computer networks</li>
                  <li>Only exists digitally</li>
                  <li>Decentralized system</li>
                  <li>Value changes dramatically</li>
                  <li>Not accepted everywhere</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blockchain-explanation">
            <h4>What makes cryptocurrency special?</h4>
            <ul>
              <li><strong>Decentralized:</strong> No single person or government controls it - it's like having a classroom vote on every transaction instead of just trusting the teacher</li>
              <li><strong>Transparent:</strong> All transactions are recorded on a public ledger that everyone can see</li>
              <li><strong>Anonymous:</strong> The identities of the people are hidden</li>
              <li><strong>Risky:</strong> Value changes dramatically - one day a Bitcoin might be worth $50,000, the next day $30,000</li>
            </ul>
          </div>

          <div className="case-study">
            <h4>Case Study - The Cashless Coffee Shop:</h4>
            <p>A new coffee shop in your town decides to go completely cashless - no cash accepted at all.</p>
            <p><strong>People to consider:</strong></p>
            <ul>
              <li>A 75-year-old who doesn't use smartphones</li>
              <li>A 12-year-old who gets cash allowance</li>
              <li>A person whose phone battery died</li>
              <li>Someone without a bank account</li>
            </ul>
            <p><strong>Discussion Questions:</strong> What problems might each person face? What solutions could the coffee shop offer?</p>
          </div>
        </div>
      )
    },
    {
      title: "The Future of Payments",
      content: (
        <div className="section-content">
          <h3>How might the way we use money change in the next 20 years?</h3>
          <p>The future of money will likely be much more digital and convenient than today. Here are some possibilities:</p>
          
          <div className="future-predictions">
            <div className="prediction-grid">
              <div className="prediction-item">
                <div className="prediction-icon">📱</div>
                <h4>Phone Payments</h4>
                <p>We might use our phones for almost everything - scanning our face or fingerprint to pay instead of using cards or cash.</p>
              </div>
              <div className="prediction-item">
                <div className="prediction-icon">🏪</div>
                <h4>Cashless Stores</h4>
                <p>Some stores might stop accepting cash completely, like many already do in countries like Sweden.</p>
              </div>
              <div className="prediction-item">
                <div className="prediction-icon">🏛️</div>
                <h4>Government Cryptocurrency</h4>
                <p>We might see more cryptocurrencies become popular, especially ones created by governments (called 'digital currencies').</p>
              </div>
              <div className="prediction-item">
                <div className="prediction-icon">🎮</div>
                <h4>Virtual Reality Money</h4>
                <p>Virtual reality and online games might have their own money systems that work in the real world too.</p>
              </div>
              <div className="prediction-item">
                <div className="prediction-icon">🤖</div>
                <h4>AI Money Management</h4>
                <p>Artificial intelligence might help people make better money decisions by automatically tracking spending and suggesting ways to save.</p>
              </div>
              <div className="prediction-item">
                <div className="prediction-icon">🧠</div>
                <h4>Thought Payments</h4>
                <p>The biggest change might be that money becomes completely invisible - you'll just think about buying something, and it will happen automatically.</p>
              </div>
            </div>
          </div>

          <div className="future-challenges">
            <h4>Challenges for the Future:</h4>
            <p>However, we'll probably still need some physical money for:</p>
            <ul>
              <li>Emergencies</li>
              <li>Small purchases</li>
              <li>People who don't have access to technology</li>
              <li>Privacy concerns</li>
            </ul>
          </div>

          <div className="future-prediction-activity">
            <h4>Future Prediction Activity:</h4>
            <p>How do you think you'll pay for things when you're 30 years old? Will cash still exist? Share your predictions!</p>
          </div>

          <div className="crypto-debate">
            <h4>Crypto Debate:</h4>
            <p>Form two teams to debate:</p>
            <div className="debate-teams">
              <button 
                className={`debate-team ${debateChoice === 'crypto' ? 'selected' : ''}`}
                onClick={() => setDebateChoice('crypto')}
              >
                <strong>Team A:</strong> "Cryptocurrency is the future of money"
              </button>
              <button 
                className={`debate-team ${debateChoice === 'traditional' ? 'selected' : ''}`}
                onClick={() => setDebateChoice('traditional')}
              >
                <strong>Team B:</strong> "Traditional money is safer and better"
              </button>
            </div>
            <p>Each team gets 5 minutes to present their best arguments.</p>
          </div>
        </div>
      )
    },
    {
      title: "Design Your Future Money",
      content: (
        <div className="section-content">
          <h3>Future Money Design Challenge</h3>
          <p>Design your own future payment method! Consider these questions:</p>
          
          <div className="design-questions">
            <ul>
              <li>How would people use it?</li>
              <li>What technology would it need?</li>
              <li>How would it stay secure?</li>
              <li>What would happen if the technology failed?</li>
            </ul>
          </div>

          <div className="design-workspace">
            <h4>Your Design:</h4>
            <textarea
              value={futureDesign}
              onChange={(e) => setFutureDesign(e.target.value)}
              placeholder="Describe your future payment method here... How would it work? What would it look like? How would people use it?"
              className="design-textarea"
              rows="8"
            />
          </div>

          <div className="design-presentation">
            <h4>Presentation Tips:</h4>
            <p>When presenting your design to the class, make sure to include:</p>
            <ul>
              <li>A clear name for your payment method</li>
              <li>How it would work in everyday life</li>
              <li>What technology it uses</li>
              <li>How it keeps money safe</li>
              <li>What happens if something goes wrong</li>
            </ul>
          </div>

          <div className="creative-projects">
            <h4>Creative Project Options:</h4>
            <p>Choose one additional project to complete:</p>
            <div className="project-options">
              <div className="project-option">
                <h5>1. Comic Strip Creator</h5>
                <p>Create a comic strip showing money's evolution (6-8 panels)</p>
              </div>
              <div className="project-option">
                <h5>2. Smart Spending Poster</h5>
                <p>Design a poster with tips for teens about smart spending habits</p>
              </div>
              <div className="project-option">
                <h5>3. No-Money Story</h5>
                <p>Write a short story (300 words) about a day in a world without money</p>
              </div>
              <div className="project-option">
                <h5>4. Teaching Video</h5>
                <p>Make a 2-minute video explaining one money concept to a younger student</p>
              </div>
              <div className="project-option">
                <h5>5. Future Money Model</h5>
                <p>Create a physical or digital model of how you think people will pay for things in 2050</p>
              </div>
            </div>
          </div>

          <div className="project-reflection">
            <h4>Project Reflection:</h4>
            <p>After completing your project, answer:</p>
            <ul>
              <li>What was the most challenging part?</li>
              <li>What money concept do you understand better now?</li>
              <li>How would you improve your project if you had more time?</li>
            </ul>
          </div>

          <div className="final-discussion">
            <h4>Class Discussion Finale:</h4>
            <p>BIG QUESTIONS FOR FINAL DISCUSSION:</p>
            <ul>
              <li>Is it better to save money or spend it to help the economy?</li>
              <li>Should kids learn about money in school or just at home?</li>
              <li>Will the way we use money change completely in your lifetime?</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      question: "What is cryptocurrency?",
      options: ["Physical coins made of crypto metal", "Digital money that exists only on computers", "Money controlled by banks", "Regular money with a different name"],
      correct: 1,
      explanation: "Cryptocurrency is digital money that exists only on computers and uses blockchain technology."
    },
    {
      question: "What makes cryptocurrency different from regular money?",
      options: ["It's more expensive", "It's controlled by computer networks instead of governments", "It's only used online", "It's not real money"],
      correct: 1,
      explanation: "Cryptocurrency is managed by computer networks around the world, while regular money is controlled by governments and banks."
    },
    {
      question: "What is one challenge with a completely cashless society?",
      options: ["It's too expensive", "Some people don't have access to technology", "It's not secure", "It's too fast"],
      correct: 1,
      explanation: "A cashless society can exclude people who don't have smartphones, bank accounts, or access to technology."
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const completeModule = () => {
    if (!userProgress.completedModules.includes(4)) {
      setUserProgress(prev => ({
        ...prev,
        completedModules: [...prev.completedModules, 4],
        coins: prev.coins + 100,
        badges: [...prev.badges, "Future Finance Expert"]
      }));
    }
  };

  const completeWorksheet = () => {
    if (!userProgress.completedWorksheets.includes(4)) {
      setUserProgress(prev => ({
        ...prev,
        completedWorksheets: [...prev.completedWorksheets, 4],
        completedModules: [...prev.completedModules, 4],
        coins: prev.coins + 150,
        badges: [...prev.badges, "Future Finance Expert", "Worksheet Master"]
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
          <h1>Module 4: Worksheet Assessment</h1>
          <p>Complete this comprehensive worksheet to test your understanding of the future of money and digital payments!</p>
        </div>
        <div className="worksheet-container">
          <div className="worksheet-section">
            <h3>Part 1: Multiple Choice Questions</h3>
            
            <div className="worksheet-question">
              <h4>1. What is cryptocurrency?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  A) Physical coins made of crypto metal
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  B) Digital money that exists only on computers
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  C) Money controlled by banks
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  D) Regular money with a different name
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>2. What makes cryptocurrency different from regular money?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  A) It's more expensive
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  B) It's controlled by computer networks instead of governments
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  C) It's only used online
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  D) It's not real money
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>3. What is one challenge with a completely cashless society?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  A) It's too expensive
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  B) Some people don't have access to technology
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  C) It's not secure
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  D) It's too fast
                </label>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 2: Digital Payment Analysis</h3>
            
            <div className="worksheet-question">
              <h4>4. Cryptocurrency vs Traditional Money Comparison</h4>
              <p>Compare cryptocurrency and traditional money by filling in the advantages and disadvantages:</p>
              <div className="comparison-grid">
                <div className="comparison-column">
                  <h5>Cryptocurrency</h5>
                  <div className="pros-cons">
                    <h6>Advantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List advantages..."
                      value={worksheetAnswers.q4a || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4a: e.target.value }))}
                    />
                    <h6>Disadvantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List disadvantages..."
                      value={worksheetAnswers.q4b || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4b: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="comparison-column">
                  <h5>Traditional Money</h5>
                  <div className="pros-cons">
                    <h6>Advantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List advantages..."
                      value={worksheetAnswers.q4c || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4c: e.target.value }))}
                    />
                    <h6>Disadvantages:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="List disadvantages..."
                      value={worksheetAnswers.q4d || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4d: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>5. Cashless Coffee Shop Scenario</h4>
              <p>A new coffee shop decides to go completely cashless. Consider these people:</p>
              <ul>
                <li>A 75-year-old who doesn't use smartphones</li>
                <li>A 12-year-old who gets cash allowance</li>
                <li>A person whose phone battery died</li>
                <li>Someone without a bank account</li>
              </ul>
              <p><strong>Questions:</strong></p>
              <ul>
                <li>What problems might each person face?</li>
                <li>What solutions could the coffee shop offer?</li>
                <li>Is it fair for businesses to go completely cashless?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your analysis here..."
                value={worksheetAnswers.q5 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>6. Future Payment Method Design</h4>
              <p>Design your own future payment method. Describe:</p>
              <ul>
                <li>How would people use it?</li>
                <li>What technology would it need?</li>
                <li>How would it stay secure?</li>
                <li>What would happen if the technology failed?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your future payment method design here..."
                value={worksheetAnswers.q6 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6: e.target.value }))}
              />
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 3: Future Predictions and Critical Thinking</h3>
            
            <div className="worksheet-question">
              <h4>7. Future of Money Predictions</h4>
              <p>Based on what you've learned, predict how people will pay for things in 20 years:</p>
              <ul>
                <li>Will cash still exist? Why or why not?</li>
                <li>What role will cryptocurrency play?</li>
                <li>How might AI change the way we handle money?</li>
                <li>What new payment methods might be invented?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your predictions here..."
                value={worksheetAnswers.q7 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q7: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>8. Cryptocurrency Debate Analysis</h4>
              <p>You participated in a debate about cryptocurrency. Reflect on the arguments:</p>
              <ul>
                <li>What were the strongest arguments for cryptocurrency?</li>
                <li>What were the strongest arguments against it?</li>
                <li>Which side do you agree with more? Why?</li>
                <li>What questions do you still have about cryptocurrency?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your debate analysis here..."
                value={worksheetAnswers.q8 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q8: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>9. Personal Reflection on Digital Money</h4>
              <p>Reflect on your own experience with digital payments:</p>
              <ul>
                <li>What digital payment methods do you or your family use?</li>
                <li>What do you like about digital payments?</li>
                <li>What concerns do you have about digital money?</li>
                <li>How do you think digital payments will affect your future?</li>
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
          <h1>Module 4 Quiz</h1>
          <p>Test your knowledge about the future of money and cryptocurrency!</p>
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
        <h1>Module 4: The Future of Money</h1>
        <p>Explore digital payments, cryptocurrency, and the future of finance.</p>
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

export default Module4;
