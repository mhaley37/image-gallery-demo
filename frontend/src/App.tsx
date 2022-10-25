import React, { useState } from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');

  const handleSearchSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
      );
      const json = await res.json();
      console.log(json);
    } catch (e) {
      console.log(`Error: ${e}`);
    } finally {
      setWord('');
    }
  };

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
