import React from 'react';

import './App.scss';
import Header from './components/Header';
import ImageHome from './components/ImageHome';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ImageHome />
    </div>
  );
}

export default App;
