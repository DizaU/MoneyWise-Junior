import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { 
  loadUserProgress, 
  saveUserProgress, 
  addCompletedModule,
  addCompletedWorksheet,
  addBadge,
  updateCoins,
  updateLevel
} from '../services/firebaseService';

const ProgressContext = createContext();

export function useProgress() {
  return useContext(ProgressContext);
}

export function ProgressProvider({ children }) {
  const { currentUser } = useAuth();
  const [userProgress, setUserProgress] = useState({
    completedModules: [],
    completedWorksheets: [],
    badges: [],
    coins: 0,
    level: 1,
    totalTimeSpent: 0,
    lastLogin: null,
    createdAt: null,
    updatedAt: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user progress when user logs in
  useEffect(() => {
    if (currentUser) {
      loadProgress();
    } else {
      // Reset progress when user logs out
      setUserProgress({
        completedModules: [],
        completedWorksheets: [],
        badges: [],
        coins: 0,
        level: 1,
        totalTimeSpent: 0,
        lastLogin: null,
        createdAt: null,
        updatedAt: null
      });
      setLoading(false);
    }
  }, [currentUser]);

  const loadProgress = async () => {
    if (!currentUser) return;
    
    try {
      setLoading(true);
      setError(null);
      const progress = await loadUserProgress(currentUser.uid);
      setUserProgress(progress);
    } catch (err) {
      console.error('Error loading progress:', err);
      setError('Failed to load progress');
    } finally {
      setLoading(false);
    }
  };

  const saveProgress = async (progressUpdates) => {
    if (!currentUser) return false;
    
    try {
      const updatedProgress = { ...userProgress, ...progressUpdates };
      await saveUserProgress(currentUser.uid, updatedProgress);
      setUserProgress(updatedProgress);
      return true;
    } catch (err) {
      console.error('Error saving progress:', err);
      setError('Failed to save progress');
      return false;
    }
  };

  const completeModule = async (moduleId) => {
    if (!currentUser) return { success: false, coinsEarned: 0 };
    
    try {
      const result = await addCompletedModule(currentUser.uid, moduleId);
      if (result.coinsEarned > 0) {
        // Update local state
        setUserProgress(prev => ({
          ...prev,
          completedModules: [...prev.completedModules, moduleId],
          coins: result.newCoins
        }));
      }
      return { success: true, coinsEarned: result.coinsEarned };
    } catch (err) {
      console.error('Error completing module:', err);
      setError('Failed to save module completion');
      return { success: false, coinsEarned: 0 };
    }
  };

  const completeWorksheet = async (worksheetId) => {
    if (!currentUser) return { success: false, coinsEarned: 0 };
    
    try {
      const result = await addCompletedWorksheet(currentUser.uid, worksheetId);
      if (result.coinsEarned > 0) {
        // Update local state
        setUserProgress(prev => ({
          ...prev,
          completedWorksheets: [...prev.completedWorksheets, worksheetId],
          coins: result.newCoins
        }));
      }
      return { success: true, coinsEarned: result.coinsEarned };
    } catch (err) {
      console.error('Error completing worksheet:', err);
      setError('Failed to save worksheet completion');
      return { success: false, coinsEarned: 0 };
    }
  };

  const earnBadge = async (badgeId) => {
    if (!currentUser) return { success: false, coinsEarned: 0 };
    
    try {
      const result = await addBadge(currentUser.uid, badgeId);
      if (result.coinsEarned > 0) {
        // Update local state
        setUserProgress(prev => ({
          ...prev,
          badges: [...prev.badges, badgeId],
          coins: result.newCoins
        }));
      }
      return { success: true, coinsEarned: result.coinsEarned };
    } catch (err) {
      console.error('Error earning badge:', err);
      setError('Failed to save badge');
      return { success: false, coinsEarned: 0 };
    }
  };

  const changeCoins = async (coinChange) => {
    if (!currentUser) return { success: false, newTotal: userProgress.coins };
    
    try {
      const newTotal = await updateCoins(currentUser.uid, coinChange);
      setUserProgress(prev => ({
        ...prev,
        coins: newTotal
      }));
      return { success: true, newTotal };
    } catch (err) {
      console.error('Error updating coins:', err);
      setError('Failed to update coins');
      return { success: false, newTotal: userProgress.coins };
    }
  };

  const changeLevel = async (newLevel) => {
    if (!currentUser) return { success: false };
    
    try {
      await updateLevel(currentUser.uid, newLevel);
      setUserProgress(prev => ({
        ...prev,
        level: newLevel
      }));
      return { success: true };
    } catch (err) {
      console.error('Error updating level:', err);
      setError('Failed to update level');
      return { success: false };
    }
  };

  const isModuleCompleted = (moduleId) => {
    return userProgress.completedModules.includes(moduleId);
  };

  const isWorksheetCompleted = (worksheetId) => {
    return userProgress.completedWorksheets.includes(worksheetId);
  };

  const hasBadge = (badgeId) => {
    return userProgress.badges.includes(badgeId);
  };

  const getProgressPercentage = () => {
    const totalModules = 6; // Total number of modules
    const completedCount = userProgress.completedModules.length;
    return Math.round((completedCount / totalModules) * 100);
  };

  const value = {
    userProgress,
    loading,
    error,
    saveProgress,
    completeModule,
    completeWorksheet,
    earnBadge,
    changeCoins,
    changeLevel,
    isModuleCompleted,
    isWorksheetCompleted,
    hasBadge,
    getProgressPercentage,
    loadProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
