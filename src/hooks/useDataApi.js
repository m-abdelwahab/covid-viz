import { useState, useEffect } from "react";
import axios from 'axios';


export default function useDataApi({ initUrl, defaultData }) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get(initUrl);
        if (mounted) {
          setData(result.data);
        }
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);

      return () => (mounted = false);
    };
    fetchData();
  }, [initUrl]);

  return [{ data, isLoading, isError }];
}
