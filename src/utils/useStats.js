import { useState, useEffect } from 'react';

export default function useStats(url) {
  const [stats, setStats] = useState();
  useEffect(() => {
    console.log('mounting or updating');
    async function fetchData(){
      console.log('FetchingData...');
      const data = await fetch(url).then(res => res.json()
    );
    setStats(data);
  }
  fetchData();
}, [url]);
return stats;
}
