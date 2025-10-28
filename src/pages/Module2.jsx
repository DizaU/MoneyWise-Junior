import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, Star, ShoppingCart, Target, AlertCircle } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import './Module.css';

function Module2() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userProgress, completeModule, completeWorksheet, isModuleCompleted, isWorksheetCompleted } = useProgress();
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [worksheetAnswers, setWorksheetAnswers] = useState({});
  const [valueVote, setValueVote] = useState(null);
  const [wantsNeedsAnswers, setWantsNeedsAnswers] = useState({});
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
      title: "Understanding Value",
      content: (
        <div className="section-content">
          <h3>What makes something valuable?</h3>
          <p>Four main factors determine value:</p>
          <ul>
            <li><strong>Usefulness</strong> - Does it help you do something?</li>
            <li><strong>Rarity</strong> - Is it hard to find?</li>
            <li><strong>Demand</strong> - Do people want it?</li>
            <li><strong>Quality</strong> - Is it well-made?</li>
          </ul>

          <div className="value-voting">
            <h4>Value Voting:</h4>
            <p>Which is more valuable and why?</p>
            <div className="voting-options">
              <button 
                className={`vote-option ${valueVote === 'diamond' ? 'selected' : ''}`}
                onClick={() => setValueVote('diamond')}
              >
                A) A diamond ring
              </button>
              <button 
                className={`vote-option ${valueVote === 'water' ? 'selected' : ''}`}
                onClick={() => setValueVote('water')}
              >
                B) A bottle of water (if you're lost in the desert)
              </button>
            </div>
            {valueVote && (
              <div className="voting-explanation">
                <p><strong>Think about it:</strong> Context matters! In normal circumstances, a diamond ring is more valuable. But if you're lost in the desert, water becomes priceless because it's essential for survival.</p>
              </div>
            )}
          </div>

          <h3>Why is gold valuable?</h3>
          <p>Gold is rare, beautiful, doesn't rust, and has been considered valuable for thousands of years. It's also useful in electronics and jewelry.</p>

          <div className="real-life-example">
            <h4>Real-Life Example:</h4>
            <p>Trading cards - a rare card of a popular player is worth more than a common card of an unknown player.</p>
          </div>

          <div className="case-study">
            <h4>Case Study - The Trading Card Market:</h4>
            <p>Two basketball cards are printed in the same year:</p>
            <ul>
              <li>Card A: Regular player, 1 million copies printed</li>
              <li>Card B: Superstar player, 50,000 copies printed</li>
              <li>Card C: Superstar player, 1 million copies printed</li>
              <li>Card D: Regular player, 50,000 copies printed</li>
            </ul>
            <p><strong>Challenge:</strong> Rank these cards from most to least valuable and explain your reasoning.</p>
            <div className="ranking-exercise">
              <p><strong>Answer:</strong> B (Superstar + Rare) > C (Superstar + Common) > D (Regular + Rare) > A (Regular + Common)</p>
            </div>
          </div>

          <h3>Why do some things become more valuable over time while others become less valuable?</h3>
          <p>Things change in value based on several factors:</p>
          <ul>
            <li><strong>Rarity:</strong> Items become more valuable when they become rare (like old baseball cards or vintage toys)</li>
            <li><strong>Demand:</strong> More people wanting something increases its value</li>
            <li><strong>Technology:</strong> New technology can make old items less valuable (DVDs vs streaming)</li>
            <li><strong>Quality:</strong> Well-made things that last often become more valuable</li>
            <li><strong>Emotional value:</strong> Items can become valuable for personal reasons (family heirlooms)</li>
          </ul>

          <div className="prediction-activity">
            <h4>Prediction Activity:</h4>
            <p>What items popular today do you think will be worth more or less in 20 years? Make predictions and explain your reasoning:</p>
            <ul>
              <li>Current smartphones</li>
              <li>Popular toys from this year</li>
              <li>Physical books</li>
              <li>Video game consoles</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Smart Shopping",
      content: (
        <div className="section-content">
          <h3>How do people decide if something is a good deal or not?</h3>
          <p>Smart shoppers use several strategies:</p>
          <ul>
            <li><strong>Price Comparison:</strong> Compare prices at different stores or websites</li>
            <li><strong>Cost Per Use:</strong> Calculate the cost each time an item is used</li>
            <li><strong>Quality Consideration:</strong> Paying more upfront for quality can save money later</li>
            <li><strong>Reviews:</strong> Check reviews from other buyers</li>
            <li><strong>Timing:</strong> Prices often drop after holidays or when new models are released</li>
            <li><strong>Needs vs. Wants:</strong> Ask if the item is truly needed or just wanted</li>
          </ul>

          <div className="cost-calculator">
            <h4>Cost-Per-Use Calculator:</h4>
            <p>Help calculate the real cost:</p>
            <div className="calculator-examples">
              <div className="calc-example">
                <p><strong>Item A:</strong> $60 shoes worn 100 times = $0.60 per wear</p>
              </div>
              <div className="calc-example">
                <p><strong>Item B:</strong> $30 shoes worn 15 times = $2.00 per wear</p>
              </div>
            </div>
            <p><strong>Which is the better deal?</strong> Item A! Even though it costs more upfront, it's much cheaper per use.</p>
          </div>

          <h3>How do marketing and advertising influence what people think things are worth?</h3>
          <p>Marketing uses psychology to change perceived value. Companies use several techniques:</p>
          <ul>
            <li><strong>Artificial scarcity:</strong> "Only 3 left in stock!" or "Limited time!"</li>
            <li><strong>Social proof:</strong> "9 out of 10 people prefer this brand" or "Most popular!"</li>
            <li><strong>Emotional associations:</strong> Showing happy families using products</li>
            <li><strong>Celebrity endorsements:</strong> Making products seem more valuable through famous people</li>
            <li><strong>Lifestyle marketing:</strong> Buying a product means buying into an identity</li>
          </ul>

          <div className="smart-consumer-challenge">
            <h4>Smart Consumer Challenge:</h4>
            <p>Look at an advertisement (magazine, TV, online). Can you spot these techniques?</p>
            <ul>
              <li>Artificial scarcity ("Limited time!")</li>
              <li>Celebrity endorsement</li>
              <li>Social proof ("Most popular!")</li>
              <li>Emotional appeal (happy families, success)</li>
            </ul>
          </div>

          <h3>Why do stores sometimes have big sales and discounts?</h3>
          <p>Stores have sales for several business reasons:</p>
          <ul>
            <li><strong>Clearing inventory:</strong> To sell excess stock quickly</li>
            <li><strong>Loss leader strategy:</strong> Using sales to attract customers who will buy other items</li>
            <li><strong>Competition:</strong> To compete with other stores</li>
            <li><strong>Holiday sales:</strong> To attract buyers during peak shopping seasons</li>
            <li><strong>"Fake sales":</strong> Raising prices first, then "discounting" them back to normal</li>
          </ul>

          <div className="case-study">
            <h4>Case Study - Black Friday Strategy:</h4>
            <p>GameStop normally sells a popular video game for $60. On Black Friday, they advertise it for $40, but only have 20 copies. They hope customers will also buy a $90 gaming headset while in the store.</p>
            <p><strong>Challenge:</strong> Analyze this strategy - what are they really trying to accomplish?</p>
            <div className="strategy-analysis">
              <p><strong>Answer:</strong> This is a "loss leader" strategy. They're willing to lose money on the game to get customers in the door, hoping they'll buy the more expensive headset at full price.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Wants vs. Needs",
      content: (
        <div className="section-content">
          <h3>What's the difference between wants and needs?</h3>
          <ul>
            <li><strong>Needs:</strong> Things you must have to survive (food, shelter, clothes)</li>
            <li><strong>Wants:</strong> Things you'd like to have but can live without (video games, candy, new shoes when your old ones still work)</li>
          </ul>

          <div className="sort-it-out">
            <h4>Sort It Out:</h4>
            <p>Classify these items as WANTS or NEEDS:</p>
            <div className="sorting-exercise">
              {[
                { item: "Winter coat in December", correct: "need" },
                { item: "Brand new iPhone", correct: "want" },
                { item: "Food for lunch", correct: "need" },
                { item: "Video game", correct: "want" },
                { item: "School supplies", correct: "need" },
                { item: "Designer sneakers", correct: "want" }
              ].map((item, index) => (
                <div key={index} className="sort-item">
                  <span className="item-text">{item.item}</span>
                  <div className="sort-buttons">
                    <button 
                      className={`sort-btn ${wantsNeedsAnswers[index] === 'need' ? 'selected' : ''} ${wantsNeedsAnswers[index] === 'need' && item.correct === 'need' ? 'correct' : ''}`}
                      onClick={() => setWantsNeedsAnswers(prev => ({ ...prev, [index]: 'need' }))}
                    >
                      NEED
                    </button>
                    <button 
                      className={`sort-btn ${wantsNeedsAnswers[index] === 'want' ? 'selected' : ''} ${wantsNeedsAnswers[index] === 'want' && item.correct === 'want' ? 'correct' : ''}`}
                      onClick={() => setWantsNeedsAnswers(prev => ({ ...prev, [index]: 'want' }))}
                    >
                      WANT
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p><strong>Discuss:</strong> Any items your class disagrees about!</p>
          </div>

          <h3>How can families work together to make smart money decisions?</h3>
          <ul>
            <li><strong>Weekly family meetings:</strong> Discuss financial goals and challenges as a team</li>
            <li><strong>Involve kids in decisions:</strong> Engage children in age-appropriate money decisions</li>
            <li><strong>Family savings goals:</strong> Create shared goals like a "vacation fund"</li>
            <li><strong>Kids' contributions:</strong> Encourage children to suggest ways to save money</li>
            <li><strong>Work together to make money:</strong> Find ways the whole family can contribute</li>
          </ul>

          <div className="family-case-study">
            <h4>Family Case Study:</h4>
            <p>The Johnson family wants to plan a $2000 vacation in one year. There are 4 family members.</p>
            <div className="case-questions">
              <p><strong>Questions:</strong></p>
              <ul>
                <li>How much does each person need to save per month? ($2000 ÷ 12 months ÷ 4 people = $41.67 per person per month)</li>
                <li>What are some ways each family member could contribute?</li>
                <li>Plan a family money meeting agenda to discuss this goal.</li>
              </ul>
            </div>
          </div>

          <div className="activity">
            <h4>Activity: My First Budget</h4>
            <p>You have $50 to spend for one month:</p>
            <ul>
              <li>List your needs and wants</li>
              <li>Create a simple budget</li>
              <li>Categories: Savings, Needs, Wants, Giving/Sharing</li>
              <li>Compare budgets with classmates</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const quizQuestions = [
    {
      question: "What are the four main factors that determine value?",
      options: ["Price, brand, color, size", "Usefulness, rarity, demand, quality", "Age, condition, popularity, cost", "Location, time, season, weather"],
      correct: 1,
      explanation: "The four main factors are usefulness, rarity, demand, and quality."
    },
    {
      question: "What is the 'cost per use' calculation?",
      options: ["Total cost divided by number of uses", "Number of uses times the price", "Price minus the discount", "Total cost plus shipping"],
      correct: 0,
      explanation: "Cost per use = Total cost ÷ Number of uses. This helps determine the real value of an item."
    },
    {
      question: "Which is an example of a NEED?",
      options: ["New video game", "Winter coat in December", "Designer sneakers", "Latest smartphone"],
      correct: 1,
      explanation: "A winter coat in December is a need because it's essential for survival in cold weather."
    }
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleCompleteModule = async () => {
    const result = await completeModule(2);
    if (result.success) {
      console.log(`Module completed! Earned ${result.coinsEarned} coins.`);
    }
  };

  const handleCompleteWorksheet = async () => {
    try {
      console.log('Starting worksheet completion...');
      const result = await completeWorksheet(2);
      console.log('Worksheet completion result:', result);
      
      if (result.success) {
        console.log(`Worksheet completed! Earned ${result.coinsEarned} coins.`);
        // Also complete the module if not already completed
        if (!isModuleCompleted(2)) {
          console.log('Completing module as well...');
          await completeModule(2);
        }
        // Redirect to profile page after worksheet completion
        console.log('Redirecting to profile page...');
        navigate('/profile', { 
          state: { 
            message: 'Congratulations! You completed Module 2 worksheet! 🎉' 
          } 
        });
      } else {
        console.log('Worksheet completion failed:', result);
      }
    } catch (error) {
      console.error('Error completing worksheet:', error);
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
          <h1>Module 2: Worksheet Assessment</h1>
          <p>Complete this comprehensive worksheet to test your understanding of value and smart shopping!</p>
        </div>
        <div className="worksheet-container">
          <div className="worksheet-section">
            <h3>Part 1: Multiple Choice Questions</h3>
            
            <div className="worksheet-question">
              <h4>1. What are the four main factors that determine value?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  A) Price, brand, color, size
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  B) Usefulness, rarity, demand, quality
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  C) Age, condition, popularity, cost
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q1: e.target.value }))}
                  />
                  D) Location, time, season, weather
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>2. What is the "cost per use" calculation?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  A) Total cost divided by number of uses
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  B) Number of uses times the price
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  C) Price minus the discount
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q2: e.target.value }))}
                  />
                  D) Total cost plus shipping
                </label>
              </div>
            </div>

            <div className="worksheet-question">
              <h4>3. Which is an example of a NEED?</h4>
              <div className="worksheet-options">
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="a"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  A) New video game
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="b"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  B) Winter coat in December
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="c"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  C) Designer sneakers
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="d"
                    onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q3: e.target.value }))}
                  />
                  D) Latest smartphone
                </label>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 2: Value Analysis</h3>
            
            <div className="worksheet-question">
              <h4>4. Trading Card Value Analysis</h4>
              <p>Rank these basketball cards from most to least valuable and explain your reasoning:</p>
              <ul>
                <li>Card A: Regular player, 1 million copies printed</li>
                <li>Card B: Superstar player, 50,000 copies printed</li>
                <li>Card C: Superstar player, 1 million copies printed</li>
                <li>Card D: Regular player, 50,000 copies printed</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your ranking and explanation here..."
                value={worksheetAnswers.q4 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q4: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>5. Cost-Per-Use Analysis</h4>
              <p>Calculate and compare the cost per use for these items:</p>
              <ul>
                <li>Item A: $60 shoes worn 100 times</li>
                <li>Item B: $30 shoes worn 15 times</li>
                <li>Item C: $120 jacket worn 200 times</li>
                <li>Item D: $40 jacket worn 10 times</li>
              </ul>
              <p>Show your calculations and determine which items offer the best value:</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your calculations and analysis here..."
                value={worksheetAnswers.q5 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q5: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>6. Marketing Techniques Identification</h4>
              <p>Look at any advertisement (TV, magazine, online, or store) and identify these marketing techniques:</p>
              <div className="comparison-grid">
                <div className="comparison-column">
                  <h5>Marketing Technique</h5>
                  <div className="pros-cons">
                    <h6>Artificial Scarcity:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Example: 'Only 3 left!' or 'Limited time!'"
                      value={worksheetAnswers.q6a || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6a: e.target.value }))}
                    />
                    <h6>Social Proof:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Example: 'Most popular!' or '9 out of 10 people prefer'"
                      value={worksheetAnswers.q6b || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6b: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="comparison-column">
                  <h5>Marketing Technique</h5>
                  <div className="pros-cons">
                    <h6>Celebrity Endorsement:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Example: Famous person using the product"
                      value={worksheetAnswers.q6c || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6c: e.target.value }))}
                    />
                    <h6>Emotional Appeal:</h6>
                    <textarea 
                      className="worksheet-textarea small"
                      placeholder="Example: Happy families, success stories"
                      value={worksheetAnswers.q6d || ''}
                      onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q6d: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="worksheet-section">
            <h3>Part 3: Smart Shopping Scenarios</h3>
            
            <div className="worksheet-question">
              <h4>7. Black Friday Strategy Analysis</h4>
              <p>GameStop normally sells a popular video game for $60. On Black Friday, they advertise it for $40, but only have 20 copies. They hope customers will also buy a $90 gaming headset while in the store.</p>
              <p><strong>Questions:</strong></p>
              <ul>
                <li>What strategy is GameStop using?</li>
                <li>Why might this strategy work?</li>
                <li>What should smart shoppers consider before participating?</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your analysis here..."
                value={worksheetAnswers.q7 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q7: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>8. Family Budget Planning</h4>
              <p>The Johnson family wants to plan a $2000 vacation in one year. There are 4 family members.</p>
              <p><strong>Calculate and plan:</strong></p>
              <ul>
                <li>How much does each person need to save per month?</li>
                <li>What are 3 ways each family member could contribute to the vacation fund?</li>
                <li>Create a simple family meeting agenda to discuss this goal</li>
              </ul>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your calculations and plan here..."
                value={worksheetAnswers.q8 || ''}
                onChange={(e) => setWorksheetAnswers(prev => ({ ...prev, q8: e.target.value }))}
              />
            </div>

            <div className="worksheet-question">
              <h4>9. Future Value Prediction</h4>
              <p>Based on what you've learned about value, predict what will happen to the value of these items in 20 years:</p>
              <ul>
                <li>Current smartphones</li>
                <li>Popular toys from this year</li>
                <li>Physical books</li>
                <li>Video game consoles</li>
              </ul>
              <p>Explain your reasoning for each prediction:</p>
              <textarea 
                className="worksheet-textarea"
                placeholder="Your predictions and reasoning here..."
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
          <h1>Module 2 Quiz</h1>
          <p>Test your knowledge about value and smart shopping!</p>
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
              <Star className="btn-icon" />
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
        <h1>Module 2: Understanding Value</h1>
        <p>Learn what makes things valuable and how to make smart shopping decisions.</p>
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

export default Module2;
