import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';
import { db } from '../firebase/config';

// Default user progress structure
const defaultProgress = {
  completedModules: [],
  completedWorksheets: [],
  badges: [],
  coins: 0,
  level: 1,
  totalTimeSpent: 0,
  lastLogin: null,
  createdAt: null,
  updatedAt: null
};

// Save user progress to Firestore
export async function saveUserProgress(userId, progress) {
  try {
    const userRef = doc(db, 'users', userId);
    const progressData = {
      ...progress,
      updatedAt: new Date().toISOString()
    };
    
    await setDoc(userRef, progressData, { merge: true });
    console.log('Progress saved successfully');
    return true;
  } catch (error) {
    console.error('Error saving progress:', error);
    throw error;
  }
}

// Load user progress from Firestore
export async function loadUserProgress(userId) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      console.log('Progress loaded successfully');
      return {
        ...defaultProgress,
        ...data,
        // Ensure arrays exist
        completedModules: data.completedModules || [],
        completedWorksheets: data.completedWorksheets || [],
        badges: data.badges || []
      };
    } else {
      console.log('No existing progress found, creating new user document');
      // Create new user document with default progress
      const newProgress = {
        ...defaultProgress,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      await setDoc(userRef, newProgress);
      return newProgress;
    }
  } catch (error) {
    console.error('Error loading progress:', error);
    throw error;
  }
}

// Update specific progress fields
export async function updateUserProgress(userId, updates) {
  try {
    const userRef = doc(db, 'users', userId);
    const updateData = {
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    await updateDoc(userRef, updateData);
    console.log('Progress updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating progress:', error);
    throw error;
  }
}

// Add completed module
export async function addCompletedModule(userId, moduleId) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      const completedModules = data.completedModules || [];
      
      if (!completedModules.includes(moduleId)) {
        const newCompletedModules = [...completedModules, moduleId];
        const coinsEarned = 10; // 10 coins per module
        const newCoins = (data.coins || 0) + coinsEarned;
        
        await updateDoc(userRef, {
          completedModules: newCompletedModules,
          coins: newCoins,
          updatedAt: new Date().toISOString()
        });
        
        console.log(`Module ${moduleId} completed! Earned ${coinsEarned} coins.`);
        return { coinsEarned, newCoins };
      } else {
        console.log(`Module ${moduleId} already completed.`);
        return { coinsEarned: 0, newCoins: data.coins || 0 };
      }
    }
    console.log('User document does not exist');
    return { coinsEarned: 0, newCoins: 0 };
  } catch (error) {
    console.error('Error adding completed module:', error);
    throw error;
  }
}

// Add completed worksheet
export async function addCompletedWorksheet(userId, worksheetId) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      const completedWorksheets = data.completedWorksheets || [];
      
      if (!completedWorksheets.includes(worksheetId)) {
        const newCompletedWorksheets = [...completedWorksheets, worksheetId];
        const coinsEarned = 5; // 5 coins per worksheet
        const newCoins = (data.coins || 0) + coinsEarned;
        
        await updateDoc(userRef, {
          completedWorksheets: newCompletedWorksheets,
          coins: newCoins,
          updatedAt: new Date().toISOString()
        });
        
        console.log(`Worksheet ${worksheetId} completed! Earned ${coinsEarned} coins.`);
        return { coinsEarned, newCoins };
      } else {
        console.log(`Worksheet ${worksheetId} already completed.`);
        return { coinsEarned: 0, newCoins: data.coins || 0 };
      }
    }
    console.log('User document does not exist');
    return { coinsEarned: 0, newCoins: 0 };
  } catch (error) {
    console.error('Error adding completed worksheet:', error);
    throw error;
  }
}

// Add badge
export async function addBadge(userId, badgeId) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      const badges = data.badges || [];
      
      if (!badges.includes(badgeId)) {
        const newBadges = [...badges, badgeId];
        const coinsEarned = 20; // 20 coins per badge
        const newCoins = (data.coins || 0) + coinsEarned;
        
        await updateDoc(userRef, {
          badges: newBadges,
          coins: newCoins,
          updatedAt: new Date().toISOString()
        });
        
        console.log(`Badge ${badgeId} earned! Earned ${coinsEarned} coins.`);
        return { coinsEarned, newCoins };
      }
    }
    return { coinsEarned: 0, newCoins: data?.coins || 0 };
  } catch (error) {
    console.error('Error adding badge:', error);
    throw error;
  }
}

// Update coins
export async function updateCoins(userId, coinChange) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      const newCoins = Math.max(0, (data.coins || 0) + coinChange);
      
      await updateDoc(userRef, {
        coins: newCoins,
        updatedAt: new Date().toISOString()
      });
      
      console.log(`Coins updated: ${coinChange > 0 ? '+' : ''}${coinChange}. New total: ${newCoins}`);
      return newCoins;
    }
    return 0;
  } catch (error) {
    console.error('Error updating coins:', error);
    throw error;
  }
}

// Update level
export async function updateLevel(userId, newLevel) {
  try {
    const userRef = doc(db, 'users', userId);
    
    await updateDoc(userRef, {
      level: newLevel,
      updatedAt: new Date().toISOString()
    });
    
    console.log(`Level updated to ${newLevel}`);
    return true;
  } catch (error) {
    console.error('Error updating level:', error);
    throw error;
  }
}

// Get user statistics
export async function getUserStats(userId) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      return {
        totalModules: data.completedModules?.length || 0,
        totalWorksheets: data.completedWorksheets?.length || 0,
        totalBadges: data.badges?.length || 0,
        totalCoins: data.coins || 0,
        level: data.level || 1,
        totalTimeSpent: data.totalTimeSpent || 0
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting user stats:', error);
    throw error;
  }
}
