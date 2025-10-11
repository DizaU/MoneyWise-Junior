import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';
import Module5 from './pages/Module5';
import Module6 from './pages/Module6';
import Tools from './pages/Tools';
import Game from './pages/Game';
import Profile from './pages/Profile';
import AIHelp from './pages/AIHelp';

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Router>
          <div className="app">
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Protected routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  <Header />
                  <main className="main-content">
                    <Home />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/module1" element={
                <ProtectedRoute moduleId={1}>
                  <Header />
                  <main className="main-content">
                    <Module1 />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/module2" element={
                <ProtectedRoute moduleId={2}>
                  <Header />
                  <main className="main-content">
                    <Module2 />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/module3" element={
                <ProtectedRoute moduleId={3}>
                  <Header />
                  <main className="main-content">
                    <Module3 />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/module4" element={
                <ProtectedRoute moduleId={4}>
                  <Header />
                  <main className="main-content">
                    <Module4 />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/module5" element={
                <ProtectedRoute moduleId={5}>
                  <Header />
                  <main className="main-content">
                    <Module5 />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/module6" element={
                <ProtectedRoute moduleId={6}>
                  <Header />
                  <main className="main-content">
                    <Module6 />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/tools" element={
                <ProtectedRoute>
                  <Header />
                  <main className="main-content">
                    <Tools />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/game" element={
                <ProtectedRoute>
                  <Header />
                  <main className="main-content">
                    <Game />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Header />
                  <main className="main-content">
                    <Profile />
                  </main>
                </ProtectedRoute>
              } />
              <Route path="/ai-help" element={
                <ProtectedRoute>
                  <Header />
                  <main className="main-content">
                    <AIHelp />
                  </main>
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;