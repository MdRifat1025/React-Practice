import { useState } from 'react';
import Parent from './state_lifting/Parent.jsx';
import Home from './state_lifting/Home.jsx';

function App() {
  // let getData = (a) => {
  //   console.log(a);

  // };

  // const data = "hello world";
  return (
    <>
      {/* <Child data={data} onChildData={getData} /> */}
      <Home />

    </>
  );
}

export default App;
