// hooks/useDatoCMS.ts
import { useState, useEffect } from 'react';

const DATOCMS_API_TOKEN = '347b8ecfe302d4762eac10ab566bb6';
const DATOCMS_API_URL = 'https://graphql.datocms.com/';

interface DatoCMSResponse {
  data: {
    allTaskviews: Array<{
      id: string;
      issimpleview: string; // Note: it's returning as string, not boolean
    }>;
  };
}

export const useDatoCMS = () => {
  const [isSimpleView, setIsSimpleView] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchViewConfig();
  }, []);

  const fetchViewConfig = async () => {
    try {
      const response = await fetch(DATOCMS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
          query: `
            query GetTaskViews {
              allTaskviews {
                id
                issimpleview
              }
            }
          `
        }),
      });

      const json: DatoCMSResponse = await response.json();
      console.log('Fetched data:', json); // For debugging
      // Get the first record's issimpleview value
      // Convert string "true"/"false" to boolean
      const viewConfig = json.data.allTaskviews[0]?.issimpleview;
            console.log('Fetched data:', viewConfig,json.data.allTaskviews[0]); // For debugging

      setIsSimpleView(viewConfig?.toLowerCase() === 'true');
      
      console.log('View config:', viewConfig); // For debugging

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching from DatoCMS:', err);
    } finally {
      setLoading(false);
    }
  };

  return { isSimpleView, loading, error, refetch: fetchViewConfig };
};