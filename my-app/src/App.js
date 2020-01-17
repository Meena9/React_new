import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './component/hellomsg';
import Timer from "./component/statechange";
import Apptodo from './component/AppTODO';
import MarkdownEditor from './component/remarkable'
function App() {
  return (
 <div>
  <HelloMessage name="meena"/>
  <Timer></Timer>
  <Apptodo/>
  <MarkdownEditor/>
  </div>
  );
}

export default App;
