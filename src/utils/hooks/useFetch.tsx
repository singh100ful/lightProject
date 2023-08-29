import * as React from 'react';

export const useFetch = <T,>(url: string) => {
  const [data, setData] = React.useState<T[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {data, loading, error, refresh: fetchData};
};
