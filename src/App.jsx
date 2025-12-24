import { useState } from 'react';
import Parent from './state_lifting/Parent.jsx';
import Home from './state_lifting/Home.jsx';
import Form from './form/Form.jsx';
import Toggle from './Toggle/Toggle.jsx';

function App() {

  // const data = "hello world";
  return (
    <>
      {/* <Child data={data} onChildData={getData} /> */}
      <Toggle />

    </>
  );
}

export default App;


