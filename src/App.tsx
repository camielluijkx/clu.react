import React from 'react';
import './App.css';
import SomeComponent from './components/SomeComponent'
import ButtonComponent from './components/ButtonComponent'
import ColorComponent from './components/ColorComponent'

const App: React.FC = () => {
  return (
    <div className="greeting">
      <h1>Hello from application!</h1>
      <SomeComponent/>
      <ButtonComponent/>
      <ColorComponent/>
    </div>
  );
}

export default App;
