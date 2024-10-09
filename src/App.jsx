import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchIPInfo, checkAbuseIPDB, searchEmailHunter } from './services/apiService';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  const [results, setResults] = useState({});

  const handleSearch = async (type, query) => {
    let data = {};
    if (type === 'IP') {
      const ipInfo = await searchIPInfo(query);
      const abuseInfo = await checkAbuseIPDB(query);
      data = { ipInfo, abuseInfo };
    } else if (type === 'Email') {
      data = await searchEmailHunter(query);
    }
    setResults(data);
  };

  return (
    <div className="container mt-5">
      <h1>OSINT Search Tool</h1>
      <SearchBar onSearch={handleSearch} />
      <Results results={results} />
    </div>
  );
}

export default App;
