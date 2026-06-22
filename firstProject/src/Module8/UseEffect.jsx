import { useState, useEffect } from 'react';

export function NoDepArray() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Runs after EVERY render');
  });

  return (
    <div>
      <h3>Type 1: No Dependency Array</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Check console - logs on every render</p>
    </div>
  );
}


export function EmptyDepArray() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Component Mounted - runs only once');
    
    // Simulate API call
    setTimeout(() => {
      setData('Data fetched from API');
      setLoading(false);
    }, 1000);

    // Cleanup function - runs on unmount
    return () => {
      console.log('Component Unmounted - cleanup executed');
    };
  }, []); // Empty dependency array

  return (
    <div>
      <h3>Type 2: Empty Dependency Array</h3>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
}


export function WithDependencies() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    // Side effect runs when count changes
    document.title = `Count: ${count}`;

    return () => {
      console.log('Cleanup: resetting title');
    };
  }, [count]); // Dependency array with count

  return (
    <div>
      <h3>Type 3: With Dependencies</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <p>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Type name (effect won't run)"
        />
      </p>
      <p>Name: {name}</p>
    </div>
  );
}


export function WithCleanup() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);

      console.log('Timer started');
    }

    // Cleanup function - clears interval when component unmounts or effect re-runs
    return () => {
      if (interval) {
        clearInterval(interval);
        console.log('Timer cleaned up');
      }
    };
  }, [isActive]); // Re-run when isActive changes

  return (
    <div>
      <h3>Type 4: With Cleanup (Timer)</h3>
      <p>Seconds: {seconds}</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

// ==================== PRACTICAL EXAMPLE: DATA FETCHING ====================
export function DataFetchingExample() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      if (userId > 0) {
        setUser({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
      }
      setLoading(false);
    }, 500);
  }, [userId]); // Re-fetch when userId changes

  return (
    <div>
      <h3>Data Fetching Example</h3>
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

