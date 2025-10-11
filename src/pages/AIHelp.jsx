import { useState } from 'react';
import { Bot, MessageCircle, Send, Sparkles } from 'lucide-react';
import './AIHelp.css';

function AIHelp() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI financial literacy assistant. I can help you understand money, budgeting, saving, investing, and more! What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const financialKnowledge = {
    // Basic Money Concepts
    'what is money': "Money is a medium of exchange that people use to buy goods and services. It can be coins, bills, or digital currency. Money makes trading easier because instead of bartering (trading one thing for another), we can use money as a common way to pay for things.",
    
    'budgeting': "Budgeting is planning how to spend your money. It's like making a plan for your money before you spend it. You list your income (money you earn) and expenses (money you spend), then decide how much to spend on different things like food, clothes, and savings.",
    
    'saving': "Saving means keeping some of your money instead of spending it all. It's like putting money in a piggy bank for later. You might save for something special you want to buy, or for emergencies, or for the future. Even saving a little bit regularly can add up to a lot over time!",
    
    'investing': "Investing is using your money to try to make more money over time. It's like planting a seed that grows into a tree. You put money into things like stocks (pieces of companies) or bonds, hoping they will increase in value. But remember, investing has risks - you might not always make money.",
    
    'interest': "Interest is extra money you earn on money you save or invest, or extra money you pay when you borrow money. If you put money in a savings account, the bank pays you interest. If you borrow money, you pay interest to the lender. It's like a fee for using money.",
    
    'debt': "Debt is money you owe to someone else. It's like borrowing money and promising to pay it back later, usually with extra money (interest). Good debt might be a loan for education or a house, but too much debt can be a problem.",
    
    'credit': "Credit is the ability to borrow money or buy things now and pay for them later. A credit score is a number that shows how good you are at paying back money you borrow. Good credit means you can borrow money more easily and at better rates.",
    
    'inflation': "Inflation is when prices of things go up over time. This means the same amount of money buys fewer things than it used to. For example, if a candy bar cost $1 last year and costs $1.10 this year, that's inflation. That's why saving and investing are important - to help your money keep up with rising prices.",
    
    'emergency fund': "An emergency fund is money you save for unexpected expenses, like if you lose your job or have a big medical bill. It's like having a safety net. Experts suggest saving 3-6 months of expenses in an emergency fund.",
    
    'compound interest': "Compound interest is when you earn interest on both your original money and the interest you've already earned. It's like a snowball rolling down a hill - it gets bigger and bigger! This is why starting to save early is so powerful.",
    
    // UPI and Digital Payments
    'upi': "UPI (Unified Payments Interface) is a way to send and receive money using your phone. You can pay for things, transfer money to friends, or pay bills without using cash. It's fast, secure, and works 24/7. Popular UPI apps include PhonePe, Google Pay, and Paytm.",
    
    'digital wallet': "A digital wallet is like a virtual wallet on your phone. You can store money, credit cards, and other payment methods. You can use it to pay for things in stores or online without carrying physical cash or cards.",
    
    // Investment Basics
    'stocks': "Stocks are pieces of ownership in a company. When you buy a stock, you own a small part of that company. If the company does well, your stock might increase in value. But if the company struggles, your stock might decrease in value.",
    
    'bonds': "Bonds are like loans you give to companies or governments. They promise to pay you back your money plus interest after a certain time. Bonds are generally safer than stocks but usually offer lower returns.",
    
    'mutual funds': "A mutual fund is a collection of stocks, bonds, or other investments managed by professionals. Instead of picking individual stocks, you buy shares of the mutual fund, which spreads your money across many different investments.",
    
    'diversification': "Diversification means spreading your money across different types of investments. It's like not putting all your eggs in one basket. This helps reduce risk because if one investment does poorly, others might do well.",
    
    // Money Management
    'needs vs wants': "Needs are things you must have to live, like food, shelter, and clothing. Wants are things you'd like to have but don't need to survive, like toys, games, or fancy clothes. It's important to spend money on needs first, then on wants if you have money left.",
    
    'financial goals': "Financial goals are things you want to achieve with your money, like saving for college, buying a car, or going on vacation. Setting clear goals helps you decide how to spend and save your money.",
    
    'expense tracking': "Expense tracking means keeping a record of everything you spend money on. It helps you see where your money goes and identify areas where you might be spending too much.",
    
    // Banking
    'bank account': "A bank account is a place to keep your money safely. You can deposit (put in) money and withdraw (take out) money. Banks also pay you interest on money you keep in savings accounts.",
    
    'atm': "An ATM (Automated Teller Machine) is a machine that lets you withdraw cash from your bank account or check your balance. You use a card and PIN to access your money.",
    
    'online banking': "Online banking lets you manage your bank account using the internet or a mobile app. You can check your balance, transfer money, pay bills, and more without visiting a bank branch.",
    
    // Additional Financial Concepts
    'taxes': "Taxes are money that people and businesses pay to the government. This money is used to pay for public services like schools, roads, hospitals, and police. Different types of taxes include income tax (on money you earn), sales tax (on things you buy), and property tax (on homes and land).",
    
    'gst': "GST (Goods and Services Tax) is a comprehensive tax on the supply of goods and services in India. It replaced multiple indirect taxes like VAT, service tax, and excise duty. GST is charged at different rates: 0% (essential items), 5% (basic necessities), 12% (processed food), 18% (most goods and services), and 28% (luxury items). It's designed to make taxation simpler and more transparent.",
    
    'goods and services tax': "GST (Goods and Services Tax) is a comprehensive tax on the supply of goods and services in India. It replaced multiple indirect taxes like VAT, service tax, and excise duty. GST is charged at different rates: 0% (essential items), 5% (basic necessities), 12% (processed food), 18% (most goods and services), and 28% (luxury items). It's designed to make taxation simpler and more transparent.",
    
    'input tax credit': "Input Tax Credit (ITC) is a mechanism in GST where businesses can claim credit for GST paid on purchases against GST liability on sales. For example, if you buy raw materials with 18% GST and sell finished goods with 18% GST, you can claim the input tax credit. This prevents double taxation and makes the tax system more efficient.",
    
    'gstin': "GSTIN (GST Identification Number) is a unique 15-digit number given to every business registered under GST. It's based on your PAN number and state code. Format: 2 digits (state code) + 10 digits (PAN) + 1 digit (entity number) + 1 digit (Z) + 1 digit (checksum). This number is used for all GST-related transactions and filings.",
    
    'gst return': "GST returns are forms that businesses must file regularly to report their sales, purchases, and tax payments. Different types include GSTR-1 (sales), GSTR-3B (summary), and GSTR-9 (annual). Returns must be filed monthly or quarterly depending on business size. Late filing attracts penalties.",
    
    'cgst sgst igst': "CGST (Central GST) is collected by the central government, SGST (State GST) by state governments, and IGST (Integrated GST) for inter-state transactions. For intra-state sales, both CGST and SGST are charged. For inter-state sales, only IGST is charged. This ensures proper tax distribution between center and states.",
    
    'insurance': "Insurance is protection against financial loss. You pay a small amount (premium) regularly, and if something bad happens (like an accident or illness), the insurance company helps pay for the costs. Types include health insurance, car insurance, and life insurance.",
    
    'retirement planning': "Retirement planning is saving money for when you stop working. Since you won't have a regular paycheck, you need to save money during your working years. This can include employer retirement plans, personal savings, and investments.",
    
    'financial planning': "Financial planning is creating a roadmap for your money. It involves setting goals, creating a budget, saving, investing, and protecting your assets. It helps you make smart decisions about your money throughout your life.",
    
    'asset allocation': "Asset allocation is how you divide your money between different types of investments (stocks, bonds, cash). It's based on your age, goals, and risk tolerance. Younger people might invest more in stocks, while older people might prefer safer investments.",
    
    'risk tolerance': "Risk tolerance is how comfortable you are with the possibility of losing money. Conservative investors prefer safer investments with lower returns, while aggressive investors are willing to take more risk for potentially higher returns.",
    
    'liquidity': "Liquidity means how quickly you can turn an investment into cash. Savings accounts are very liquid (you can get cash immediately), while real estate is less liquid (it takes time to sell a house).",
    
    'net worth': "Net worth is the total value of everything you own (assets) minus everything you owe (liabilities). If you own a $200,000 house but owe $150,000 on it, your net worth from the house is $50,000.",
    
    'cash flow': "Cash flow is the movement of money in and out of your accounts. Positive cash flow means more money coming in than going out. Negative cash flow means you're spending more than you're earning.",
    
    'financial literacy': "Financial literacy is understanding how money works and making informed decisions about personal finances. It includes knowing about budgeting, saving, investing, borrowing, and protecting your money.",
    
    // Cryptocurrency and Modern Finance
    'cryptocurrency': "Cryptocurrency is digital money that exists only online, like Bitcoin or Ethereum. It's not controlled by any government or bank. It can be very volatile (prices change a lot) and is considered a high-risk investment.",
    
    'blockchain': "Blockchain is the technology behind cryptocurrency. It's like a digital ledger that records transactions securely. Many people think it will change how we handle money and contracts in the future.",
    
    'fintech': "Fintech (Financial Technology) refers to technology that improves financial services. Examples include mobile banking apps, digital wallets, robo-advisors, and online lending platforms.",
    
    // Personal Finance Tips
    '50/30/20 rule': "The 50/30/20 rule is a budgeting guideline: 50% of income for needs (rent, food, bills), 30% for wants (entertainment, hobbies), and 20% for savings and debt repayment. It's a simple way to balance spending and saving.",
    
    'pay yourself first': "Pay yourself first means putting money into savings before spending on other things. It ensures you save money regularly, even if you're tempted to spend it all.",
    
    'debt snowball': "The debt snowball method means paying off your smallest debts first, then using that money to pay larger debts. It gives you quick wins and motivation to keep going.",
    
    'debt avalanche': "The debt avalanche method means paying off debts with the highest interest rates first. It saves you the most money in interest over time, even though it might take longer to see progress.",
    
    'side hustle': "A side hustle is work you do in addition to your main job to earn extra money. Examples include freelancing, tutoring, selling crafts online, or driving for ride-sharing apps.",
    
    'passive income': "Passive income is money you earn without actively working for it. Examples include rental income, dividends from stocks, or royalties from books or music. It requires initial work or investment to set up.",
    
    // Economic Concepts
    'recession': "A recession is when the economy shrinks for at least six months. During recessions, people might lose jobs, businesses close, and it's harder to make money. It's part of the normal economic cycle.",
    
    'bull market': "A bull market is when stock prices are generally rising over time. It's called 'bull' because bulls charge upward. During bull markets, investors are optimistic and confident.",
    
    'bear market': "A bear market is when stock prices are generally falling over time. It's called 'bear' because bears swipe downward. During bear markets, investors are pessimistic and fearful.",
    
    'supply and demand': "Supply and demand is a basic economic principle. When there's high demand for something but low supply, prices go up. When there's low demand but high supply, prices go down.",
    
    'opportunity cost': "Opportunity cost is what you give up when you choose one option over another. For example, if you spend money on a video game, the opportunity cost might be the book you could have bought instead.",
    
    // Banking and Credit Cards
    'credit card': "A credit card lets you borrow money to buy things and pay it back later. If you don't pay the full amount each month, you'll pay interest. It's important to use credit cards responsibly.",
    
    'debit card': "A debit card takes money directly from your bank account when you make a purchase. It's like using cash, but more convenient. You can only spend money you actually have.",
    
    'checking account': "A checking account is for everyday banking - depositing money, writing checks, using a debit card. It usually doesn't pay much interest, but it's convenient for daily transactions.",
    
    'savings account': "A savings account is for storing money you want to keep safe and earn interest on. It's not meant for frequent transactions like a checking account.",
    
    'cd certificate of deposit': "A CD (Certificate of Deposit) is a savings account where you agree to leave your money for a set time (like 6 months or 2 years) in exchange for a higher interest rate. You can't withdraw the money early without paying a penalty.",
    
    // Investment Vehicles
    'etf': "An ETF (Exchange-Traded Fund) is like a mutual fund that trades on the stock market like a stock. It's a collection of investments that tracks an index, like the S&P 500. ETFs usually have lower fees than mutual funds.",
    
    'index fund': "An index fund is a type of mutual fund that tries to match the performance of a market index (like the S&P 500). Instead of trying to beat the market, it just matches it, which usually results in lower fees.",
    
    'robo advisor': "A robo-advisor is an online service that automatically manages your investments using computer algorithms. It's usually cheaper than human financial advisors and good for beginners.",
    
    'dividend': "A dividend is money that companies pay to their shareholders (people who own stock) from their profits. It's like getting a share of the company's earnings. Not all companies pay dividends.",
    
    'capital gains': "Capital gains are profits you make when you sell an investment for more than you paid for it. For example, if you buy a stock for $100 and sell it for $150, you have a $50 capital gain.",
    
    // Real Estate
    'mortgage': "A mortgage is a loan to buy a house. The house serves as collateral, meaning if you can't pay the loan, the bank can take your house. Mortgages usually last 15-30 years.",
    
    'down payment': "A down payment is money you pay upfront when buying a house. It's usually 10-20% of the house's price. The larger your down payment, the smaller your monthly mortgage payments will be.",
    
    'rent vs buy': "Renting means paying monthly to live somewhere you don't own. Buying means taking out a mortgage to own a home. Renting gives you flexibility, while buying builds equity (ownership value) over time.",
    
    // Financial Scams and Protection
    'identity theft': "Identity theft is when someone steals your personal information (like Social Security number or credit card) to commit fraud. Protect yourself by being careful with personal information and monitoring your accounts.",
    
    'phishing': "Phishing is when scammers try to trick you into giving them personal information through fake emails or websites. Never click suspicious links or give personal info to unknown sources.",
    
    'pyramid scheme': "A pyramid scheme is a scam where people recruit others to invest money, promising high returns. The money from new investors pays old investors, but eventually the scheme collapses and most people lose money.",
    
    'ponzi scheme': "A Ponzi scheme is a scam where someone promises high returns but uses new investors' money to pay old investors instead of actually investing it. Named after Charles Ponzi, who ran such a scheme in the 1920s."
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(financialKnowledge)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Check for related topics
    if (lowerMessage.includes('how to save') || lowerMessage.includes('saving tips')) {
      return "Here are some great saving tips: 1) Set a savings goal, 2) Pay yourself first (save before spending), 3) Use the 50/30/20 rule (50% needs, 30% wants, 20% savings), 4) Track your expenses, 5) Look for ways to earn extra money, 6) Avoid impulse purchases, 7) Use automatic transfers to savings, 8) Start small - even $5 a week adds up, 9) Use apps to round up purchases and save the difference, 10) Review and cut unnecessary expenses regularly.";
    }
    
    if (lowerMessage.includes('how to budget') || lowerMessage.includes('budgeting tips')) {
      return "To create a budget: 1) List all your income, 2) List all your expenses, 3) Categorize expenses (needs vs wants), 4) Set spending limits for each category, 5) Track your spending, 6) Review and adjust regularly, 7) Use the 50/30/20 rule as a starting point, 8) Use budgeting apps to make it easier, 9) Plan for irregular expenses like holidays, 10) Build in some fun money so you don't feel deprived.";
    }
    
    if (lowerMessage.includes('investment') && lowerMessage.includes('beginner')) {
      return "For beginners, start with: 1) Build an emergency fund first, 2) Learn about different investment options, 3) Start with low-risk options like savings accounts or government bonds, 4) Consider mutual funds for diversification, 5) Start small and increase over time, 6) Never invest money you can't afford to lose, 7) Consider your time horizon and risk tolerance, 8) Use dollar-cost averaging (invest regularly), 9) Consider robo-advisors for automated investing, 10) Keep learning about investing as you go.";
    }
    
    if (lowerMessage.includes('credit score') || lowerMessage.includes('credit')) {
      return "Your credit score is important because it affects your ability to borrow money and the interest rates you'll pay. To build good credit: 1) Pay bills on time, 2) Keep credit card balances low, 3) Don't open too many accounts at once, 4) Check your credit report regularly, 5) Use credit responsibly and only when needed, 6) Keep old accounts open (they show credit history), 7) Don't max out credit cards, 8) Consider becoming an authorized user on a parent's card, 9) Pay more than the minimum payment when possible, 10) Be patient - building credit takes time.";
    }
    
    if (lowerMessage.includes('debt') && (lowerMessage.includes('manage') || lowerMessage.includes('pay off'))) {
      return "To manage debt: 1) List all your debts with amounts and interest rates, 2) Create a budget to see how much you can pay, 3) Consider the debt snowball method (pay smallest debts first) or debt avalanche (pay highest interest first), 4) Make minimum payments on all debts, 5) Put extra money toward one debt at a time, 6) Avoid taking on new debt, 7) Consider debt consolidation if it makes sense, 8) Look for ways to increase income, 9) Cut expenses to free up more money for debt payments, 10) Consider credit counseling if you're overwhelmed.";
    }
    
    if (lowerMessage.includes('how to earn') || lowerMessage.includes('make money') || lowerMessage.includes('income')) {
      return "Here are ways to earn money: 1) Get a part-time job, 2) Start a side hustle (tutoring, pet sitting, lawn care), 3) Sell things you don't need online, 4) Offer services like babysitting or house cleaning, 5) Create and sell crafts or art, 6) Do freelance work online, 7) Participate in paid surveys or focus groups, 8) Rent out items you own, 9) Start a small business, 10) Look for paid internships or apprenticeships. Remember to check local laws about working at your age!";
    }
    
    if (lowerMessage.includes('scam') || lowerMessage.includes('fraud') || lowerMessage.includes('protect')) {
      return "To protect yourself from financial scams: 1) Never give personal information to strangers, 2) Be suspicious of 'get rich quick' schemes, 3) Don't click on suspicious links in emails or texts, 4) Verify requests for money with trusted adults, 5) Use strong passwords and two-factor authentication, 6) Monitor your accounts regularly, 7) Be cautious of unsolicited offers, 8) Research companies before investing, 9) Never send money to people you haven't met, 10) Trust your instincts - if something seems too good to be true, it probably is.";
    }
    
    if (lowerMessage.includes('college') || lowerMessage.includes('education') || lowerMessage.includes('student loan')) {
      return "Planning for college costs: 1) Start saving early with a 529 plan or education savings account, 2) Research scholarships and grants, 3) Consider community college for the first two years, 4) Look into work-study programs, 5) Compare costs of different schools, 6) Consider in-state vs out-of-state tuition, 7) Apply for financial aid (FAFSA), 8) Look for schools that offer merit scholarships, 9) Consider the return on investment of your degree, 10) Minimize student loans by working part-time and living frugally.";
    }
    
    if (lowerMessage.includes('retirement') || lowerMessage.includes('401k') || lowerMessage.includes('pension')) {
      return "Planning for retirement: 1) Start saving as early as possible (time is your biggest advantage), 2) Take advantage of employer 401(k) matching, 3) Use the power of compound interest, 4) Consider Roth vs traditional retirement accounts, 5) Increase contributions when you get raises, 6) Don't withdraw money early (you'll pay penalties), 7) Diversify your investments, 8) Consider your risk tolerance and time horizon, 9) Plan for healthcare costs in retirement, 10) Consider working with a financial advisor as you get older.";
    }
    
    if (lowerMessage.includes('tax') || lowerMessage.includes('filing') || lowerMessage.includes('deduction')) {
      return "Understanding taxes: 1) Everyone pays different types of taxes (income, sales, property), 2) Income tax is based on how much you earn, 3) You can reduce taxes through deductions and credits, 4) Keep receipts for business expenses, 5) File your taxes on time to avoid penalties, 6) Consider using tax software or a professional, 7) Understand the difference between tax deductions and tax credits, 8) Plan for taxes if you're self-employed, 9) Keep good records throughout the year, 10) Learn about tax-advantaged accounts like IRAs and 401(k)s.";
    }
    
    if (lowerMessage.includes('gst') || lowerMessage.includes('goods and services tax')) {
      return "GST (Goods and Services Tax) basics: 1) GST is a comprehensive tax on goods and services in India, 2) It replaced multiple taxes like VAT, service tax, and excise duty, 3) GST rates: 0% (essential items), 5% (basic necessities), 12% (processed food), 18% (most goods/services), 28% (luxury items), 4) GST is charged at every stage of production and distribution, 5) Businesses can claim input tax credit for GST paid on purchases, 6) GST registration is required for businesses with turnover above ₹20 lakhs, 7) GST returns must be filed monthly/quarterly, 8) GST makes taxation more transparent and reduces tax evasion, 9) It helps create a unified national market, 10) GST is designed to be simpler than the previous tax system.";
    }
    
    if (lowerMessage.includes('gst rate') || lowerMessage.includes('gst percentage')) {
      return "GST rates in India: 1) 0% GST: Essential items like rice, wheat, milk, fresh vegetables, 2) 5% GST: Basic necessities like sugar, tea, coffee, edible oil, 3) 12% GST: Processed food items, medicines, books, 4) 18% GST: Most goods and services like electronics, restaurants, hotels, 5) 28% GST: Luxury items like cars, tobacco, aerated drinks, 6) Some items like alcohol, petroleum products are outside GST, 7) GST rates can change based on government decisions, 8) Always check current GST rates before making purchases, 9) GST is included in the price you see on most items, 10) You can see GST amount separately on your bill.";
    }
    
    if (lowerMessage.includes('gst registration') || lowerMessage.includes('gst number')) {
      return "GST Registration: 1) Required for businesses with annual turnover above ₹20 lakhs (₹10 lakhs for special states), 2) GST registration gives you a unique 15-digit GSTIN number, 3) You can register online through the GST portal, 4) Required documents include PAN, Aadhaar, bank details, business address proof, 5) Registration is free of cost, 6) Once registered, you must file GST returns regularly, 7) You can claim input tax credit only if you're registered, 8) Registration helps in building business credibility, 9) You can register voluntarily even if turnover is below threshold, 10) GST registration is mandatory for e-commerce sellers.";
    }
    
    // Default responses for common questions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you learn about financial literacy. You can ask me about money, budgeting, saving, investing, banking, or any other financial topics. What would you like to know?";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('tysm') || lowerMessage.includes('tnku')) {
      return "You're welcome! I'm always here to help with your financial questions. Feel free to ask me anything else about money and finance!";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return "I can help you understand: 💰 Basic money concepts (money, interest, inflation), 📊 Budgeting and saving strategies, 📈 Investing basics (stocks, bonds, mutual funds), 🏦 Banking and credit (accounts, credit cards, credit scores), 💳 Digital payments (UPI, wallets, cryptocurrency), 🎯 Financial goal setting and planning, 📱 Money management tools and apps, 🏠 Real estate and mortgages, 💼 Taxes and insurance (including GST), 🛡️ Financial security and scam protection, 💼 Career and income strategies, 🎓 Education financing, and much more! Just ask me any question about personal finance.";
    }
    
    // If no specific match, provide a helpful response
    return "That's a great question! I can help you with many financial topics including budgeting, saving, investing, banking, credit, digital payments, and money management. Could you be more specific about what you'd like to know? For example, you could ask about 'how to save money', 'what is budgeting', 'investment basics', or 'how UPI works'.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What is budgeting?",
    "How do I start saving money?",
    "What is compound interest?",
    "How does UPI work?",
    "What are stocks and bonds?",
    "How do I build good credit?",
    "What is the 50/30/20 rule?",
    "How do credit cards work?",
    "What is cryptocurrency?",
    "How do I create an emergency fund?",
    "What's the difference between needs and wants?",
    "How do I start investing?",
    "What is inflation?",
    "How do I protect myself from scams?",
    "What is a side hustle?",
    "How do mortgages work?",
    "What is GST?",
    "What are GST rates in India?",
    "How does GST registration work?",
    "What is input tax credit?"
  ];

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="ai-help">
      <div className="ai-help-header">
        <div className="header-content">
          <div className="title-section">
            <Bot className="ai-icon" />
            <h1>AI Financial Assistant</h1>
            <Sparkles className="sparkle-icon" />
          </div>
          <p>Get instant answers to all your financial literacy questions!</p>
        </div>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}>
              <div className="message-avatar">
                {message.isBot ? <Bot className="avatar-icon" /> : <MessageCircle className="avatar-icon" />}
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot-message typing">
              <div className="message-avatar">
                <Bot className="avatar-icon" />
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {messages.length === 1 && (
          <div className="suggested-questions">
            <h3>Try asking:</h3>
            <div className="question-chips">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="question-chip"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="chat-input">
          <div className="input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about financial literacy..."
              className="message-input"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="send-button"
            >
              <Send className="send-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIHelp;
