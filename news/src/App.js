import React, { useState, useCallback } from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

const App = () => {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category=>setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onselect} />
      <NewsList category={category}/>
    </>
  );
};

export default App;