
import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface ErrorHandlerOptions {
  silent?: boolean;
}

/**
 * A hook for handling and reporting errors in components
 */
export const useErrorHandler = (options: ErrorHandlerOptions = {}) => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Caught runtime error:', event.error);
      
      if (!options.silent) {
        toast({
          title: 'Something went wrong',
          description: 'An error occurred while loading the application.',
          variant: 'destructive',
        });
      }
      
      // Prevent the default browser error overlay
      event.preventDefault();
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, [options.silent]);

  return {
    reportError: (error: Error) => {
      console.error('Reported error:', error);
      
      if (!options.silent) {
        toast({
          title: 'Error',
          description: error.message || 'An unknown error occurred',
          variant: 'destructive',
        });
      }
    }
  };
};

export default useErrorHandler;
