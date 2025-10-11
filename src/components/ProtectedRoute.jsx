import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, moduleId = null }) {
  const { currentUser } = useAuth();
  const { isModuleCompleted, isWorksheetCompleted } = useProgress();
  const location = useLocation();
  
  // If user is not logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If this is a module route, check prerequisites
  if (moduleId) {
    const modulePrerequisites = {
      1: null, // Module 1 is always accessible
      2: 1,    // Module 2 requires Module 1 worksheet
      3: 2,    // Module 3 requires Module 2 worksheet
      4: 3,    // Module 4 requires Module 3 worksheet
      5: 4,    // Module 5 requires Module 4 worksheet
      6: 5     // Module 6 requires Module 5 worksheet
    };

    const requiredWorksheet = modulePrerequisites[moduleId];
    
    if (requiredWorksheet && !isWorksheetCompleted(requiredWorksheet)) {
      // Redirect to the required module's worksheet
      return <Navigate to={`/module${requiredWorksheet}`} state={{ 
        message: `Please complete Module ${requiredWorksheet} worksheet first!` 
      }} />;
    }
  }
  
  return children;
}
