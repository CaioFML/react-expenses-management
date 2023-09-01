import { useState, useCallback } from 'react';

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method || 'GET',
          body: JSON.stringify(requestConfig.body) || null,
          headers: requestConfig.headers || {},
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }

    setIsLoading(false);
  }, [isLoading, error, applyData]);

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp