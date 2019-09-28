import React from 'react';
import { useState } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import './App.css'

export default function App() {

  const [showComponent3, setShowComponent3] = useState(false);

  return (
    <div className="App">
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  )
}
