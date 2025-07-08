import { useEffect, useState } from 'react';
import axios from '../api/axios';

const CACHE_KEY = 'hostelsCache';

export default function useCachedHostels() {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHostels() {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY));

        console.log("Cached: ", cached);

        const { updatedAt } = await axios.get('/api/hostels/meta').then(res => {
          console.log("Last Updated: ", res.data);
          return res.data;
        }).catch(err => {
          console.error('Error loading hostels:', err);
          setError(err);
          setLoading(false);
        });

        console.log("Last Updated: ", updatedAt);

        if (!cached) {
          return fetchAndCache();
        }

        console.log("Cached: ", cached.data);

        const cachedTime = new Date(cached.updatedAt);
        const serverTime = new Date(updatedAt);

        console.log("Cached Time: ", cachedTime);
        console.log("Server Time: ", serverTime);

        if (serverTime > cachedTime) {
          return fetchAndCache();
        }

        // Use cached data
        setHostels(cached.data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading hostels:', err);
        setError(err);
        setLoading(false);
      }
    }

    async function fetchAndCache() {
      console.log("Fetching and caching hostels");
      const {data} = await axios.get('/api/hostels').catch(err => {
        console.error('Error loading hostels:', err);
        setError(err);
        setLoading(false);
        return;
      });
      console.log("Data: ", data);
      const latestTime = new Date();

      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        updatedAt: latestTime
      }));

      setHostels(data);
      setLoading(false);
    }

    loadHostels();
  }, []);

  return { hostels, loading, error };
}
