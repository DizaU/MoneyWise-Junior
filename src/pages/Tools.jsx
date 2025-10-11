import { useState } from 'react';
import { Calculator, PiggyBank, TrendingUp, DollarSign, Plus, Minus } from 'lucide-react';
import './Tools.css';

function Tools() {
  const [activeTool, setActiveTool] = useState('tracker');

  return (
    <div className="tools">
      <div className="tools-header">
        <h1>Interactive Financial Tools</h1>
        <p>Practice managing money with these hands-on tools!</p>
      </div>

      <div className="tools-navigation">
        <button 
          className={`tool-nav-btn ${activeTool === 'tracker' ? 'active' : ''}`}
          onClick={() => setActiveTool('tracker')}
        >
          <TrendingUp className="nav-icon" />
          Money Tracker
        </button>
        <button 
          className={`tool-nav-btn ${activeTool === 'savings' ? 'active' : ''}`}
          onClick={() => setActiveTool('savings')}
        >
          <PiggyBank className="nav-icon" />
          Savings Calculator
        </button>
        <button 
          className={`tool-nav-btn ${activeTool === 'budget' ? 'active' : ''}`}
          onClick={() => setActiveTool('budget')}
        >
          <Calculator className="nav-icon" />
          Budget Simulator
        </button>
      </div>

      <div className="tools-content">
        {activeTool === 'tracker' && <MoneyTracker />}
        {activeTool === 'savings' && <SavingsCalculator />}
        {activeTool === 'budget' && <BudgetSimulator />}
      </div>
    </div>
  );
}

function MoneyTracker() {
  const [income, setIncome] = useState({
    allowance: 0,
    gifts: 0,
    chores: 0,
    other: 0
  });

  const [expenses, setExpenses] = useState({
    food: 0,
    entertainment: 0,
    clothes: 0,
    other: 0
  });

  const totalIncome = income.allowance + income.gifts + income.chores + income.other;
  const totalExpenses = expenses.food + expenses.entertainment + expenses.clothes + expenses.other;
  const remaining = totalIncome - totalExpenses;

  const updateIncome = (category, value) => {
    setIncome(prev => ({ ...prev, [category]: Math.max(0, value) }));
  };

  const updateExpenses = (category, value) => {
    setExpenses(prev => ({ ...prev, [category]: Math.max(0, value) }));
  };

  return (
    <div className="tool-container">
      <h2>My Monthly Money Tracker</h2>
      <p>Simple chart to track money coming in and going out.</p>

      <div className="tracker-grid">
        <div className="income-section">
          <h3>INCOME THIS MONTH</h3>
          <div className="input-group">
            <label>Allowance:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateIncome('allowance', income.allowance - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={income.allowance}
                onChange={(e) => updateIncome('allowance', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateIncome('allowance', income.allowance + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="input-group">
            <label>Gifts:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateIncome('gifts', income.gifts - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={income.gifts}
                onChange={(e) => updateIncome('gifts', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateIncome('gifts', income.gifts + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="input-group">
            <label>Chores:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateIncome('chores', income.chores - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={income.chores}
                onChange={(e) => updateIncome('chores', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateIncome('chores', income.chores + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="input-group">
            <label>Other:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateIncome('other', income.other - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={income.other}
                onChange={(e) => updateIncome('other', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateIncome('other', income.other + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="total">
            <strong>TOTAL INCOME: ${totalIncome}</strong>
          </div>
        </div>

        <div className="expenses-section">
          <h3>EXPENSES THIS MONTH</h3>
          <div className="input-group">
            <label>Food/Snacks:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateExpenses('food', expenses.food - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={expenses.food}
                onChange={(e) => updateExpenses('food', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateExpenses('food', expenses.food + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="input-group">
            <label>Entertainment:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateExpenses('entertainment', expenses.entertainment - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={expenses.entertainment}
                onChange={(e) => updateExpenses('entertainment', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateExpenses('entertainment', expenses.entertainment + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="input-group">
            <label>Clothes:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateExpenses('clothes', expenses.clothes - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={expenses.clothes}
                onChange={(e) => updateExpenses('clothes', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateExpenses('clothes', expenses.clothes + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="input-group">
            <label>Other:</label>
            <div className="input-with-buttons">
              <button onClick={() => updateExpenses('other', expenses.other - 1)}>
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                value={expenses.other}
                onChange={(e) => updateExpenses('other', parseInt(e.target.value) || 0)}
                min="0"
              />
              <button onClick={() => updateExpenses('other', expenses.other + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="total">
            <strong>TOTAL EXPENSES: ${totalExpenses}</strong>
          </div>
        </div>
      </div>

      <div className="summary">
        <div className={`summary-item ${remaining >= 0 ? 'positive' : 'negative'}`}>
          <h3>Money left over: ${remaining}</h3>
          {remaining >= 0 ? (
            <p>Great job! You have money left to save or spend on wants.</p>
          ) : (
            <p>You spent more than you earned. Try to reduce expenses or increase income next month.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function SavingsCalculator() {
  const [goal, setGoal] = useState({
    name: '',
    totalCost: 0,
    alreadySaved: 0,
    weeklyAmount: 0
  });

  const stillNeed = Math.max(0, goal.totalCost - goal.alreadySaved);
  const weeksToGoal = goal.weeklyAmount > 0 ? Math.ceil(stillNeed / goal.weeklyAmount) : 0;

  const updateGoal = (field, value) => {
    setGoal(prev => ({ ...prev, [field]: Math.max(0, value) }));
  };

  return (
    <div className="tool-container">
      <h2>Savings Goal Calculator</h2>
      <p>Visual tracker showing progress toward a savings goal.</p>

      <div className="savings-form">
        <div className="input-group">
          <label>My Savings Goal:</label>
          <input 
            type="text" 
            value={goal.name}
            onChange={(e) => setGoal(prev => ({ ...prev, name: e.target.value }))}
            placeholder="e.g., New Bike, Video Game, etc."
          />
        </div>
        
        <div className="input-group">
          <label>Total Cost: $</label>
          <input 
            type="number" 
            value={goal.totalCost}
            onChange={(e) => updateGoal('totalCost', parseInt(e.target.value) || 0)}
            min="0"
          />
        </div>
        
        <div className="input-group">
          <label>Already Saved: $</label>
          <input 
            type="number" 
            value={goal.alreadySaved}
            onChange={(e) => updateGoal('alreadySaved', parseInt(e.target.value) || 0)}
            min="0"
          />
        </div>
        
        <div className="input-group">
          <label>Weekly Savings Amount: $</label>
          <input 
            type="number" 
            value={goal.weeklyAmount}
            onChange={(e) => updateGoal('weeklyAmount', parseInt(e.target.value) || 0)}
            min="0"
          />
        </div>
      </div>

      <div className="savings-summary">
        <div className="summary-card">
          <h3>Still Need: ${stillNeed}</h3>
        </div>
        <div className="summary-card">
          <h3>Weeks to Goal: {weeksToGoal}</h3>
        </div>
      </div>

      {goal.totalCost > 0 && (
        <div className="progress-visualization">
          <h3>Progress Visualization</h3>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill"
              style={{ 
                width: `${Math.min(100, (goal.alreadySaved / goal.totalCost) * 100)}%` 
              }}
            ></div>
          </div>
          <p>{Math.round((goal.alreadySaved / goal.totalCost) * 100)}% Complete</p>
        </div>
      )}

      <div className="weekly-tracker">
        <h3>Weekly Progress Tracker</h3>
        <div className="weeks-grid">
          {[1, 2, 3, 4].map(week => (
            <div key={week} className="week-item">
              <label>Week {week}: $</label>
              <input 
                type="number" 
                min="0"
                placeholder="0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BudgetSimulator() {
  const [familyBudget, setFamilyBudget] = useState({
    income: 4500,
    rent: 1200,
    groceries: 600,
    utilities: 300,
    carPayment: 400,
    insurance: 200,
    emergencySavings: 0,
    entertainment: 0,
    clothes: 0,
    vacationSavings: 0,
    other: 0
  });

  const requiredExpenses = familyBudget.rent + familyBudget.groceries + familyBudget.utilities + familyBudget.carPayment + familyBudget.insurance;
  const remaining = familyBudget.income - requiredExpenses;
  const totalOptional = familyBudget.emergencySavings + familyBudget.entertainment + familyBudget.clothes + familyBudget.vacationSavings + familyBudget.other;
  const finalRemaining = remaining - totalOptional;

  const updateBudget = (field, value) => {
    setFamilyBudget(prev => ({ ...prev, [field]: Math.max(0, value) }));
  };

  return (
    <div className="tool-container">
      <h2>Family Budget Simulator</h2>
      <p>Practice making budget decisions for a family of four.</p>

      <div className="family-budget">
        <div className="budget-section">
          <h3>The Martinez Family Monthly Budget Challenge</h3>
          <div className="income-display">
            <h4>Monthly Income: ${familyBudget.income}</h4>
          </div>

          <div className="required-expenses">
            <h4>Required Expenses:</h4>
            <div className="expense-item">
              <label>Rent: $</label>
              <input 
                type="number" 
                value={familyBudget.rent}
                onChange={(e) => updateBudget('rent', parseInt(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div className="expense-item">
              <label>Groceries: $</label>
              <input 
                type="number" 
                value={familyBudget.groceries}
                onChange={(e) => updateBudget('groceries', parseInt(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div className="expense-item">
              <label>Utilities: $</label>
              <input 
                type="number" 
                value={familyBudget.utilities}
                onChange={(e) => updateBudget('utilities', parseInt(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div className="expense-item">
              <label>Car Payment: $</label>
              <input 
                type="number" 
                value={familyBudget.carPayment}
                onChange={(e) => updateBudget('carPayment', parseInt(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div className="expense-item">
              <label>Insurance: $</label>
              <input 
                type="number" 
                value={familyBudget.insurance}
                onChange={(e) => updateBudget('insurance', parseInt(e.target.value) || 0)}
                min="0"
              />
            </div>
            <div className="total-required">
              <strong>Total Required: ${requiredExpenses}</strong>
            </div>
            <div className="remaining-after-required">
              <strong>Remaining for other expenses: ${remaining}</strong>
            </div>
          </div>

          <div className="optional-expenses">
            <h4>How should the Martinez family spend the remaining ${remaining}?</h4>
            <div className="expense-item">
              <label>Emergency savings: $</label>
              <input 
                type="number" 
                value={familyBudget.emergencySavings}
                onChange={(e) => updateBudget('emergencySavings', parseInt(e.target.value) || 0)}
                min="0"
                max={remaining}
              />
            </div>
            <div className="expense-item">
              <label>Entertainment: $</label>
              <input 
                type="number" 
                value={familyBudget.entertainment}
                onChange={(e) => updateBudget('entertainment', parseInt(e.target.value) || 0)}
                min="0"
                max={remaining}
              />
            </div>
            <div className="expense-item">
              <label>Clothes: $</label>
              <input 
                type="number" 
                value={familyBudget.clothes}
                onChange={(e) => updateBudget('clothes', parseInt(e.target.value) || 0)}
                min="0"
                max={remaining}
              />
            </div>
            <div className="expense-item">
              <label>Vacation savings: $</label>
              <input 
                type="number" 
                value={familyBudget.vacationSavings}
                onChange={(e) => updateBudget('vacationSavings', parseInt(e.target.value) || 0)}
                min="0"
                max={remaining}
              />
            </div>
            <div className="expense-item">
              <label>Other: $</label>
              <input 
                type="number" 
                value={familyBudget.other}
                onChange={(e) => updateBudget('other', parseInt(e.target.value) || 0)}
                min="0"
                max={remaining}
              />
            </div>
          </div>

          <div className="budget-summary">
            <div className={`summary-item ${finalRemaining >= 0 ? 'positive' : 'negative'}`}>
              <h3>Final Remaining: ${finalRemaining}</h3>
              {finalRemaining >= 0 ? (
                <p>Great budgeting! You have money left over.</p>
              ) : (
                <p>You're over budget! Try reducing some expenses.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
