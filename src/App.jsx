import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import WindowTracker from './components/WindowTracker';
import './App.css';
function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );

  // Window Tracker
  // const [show, setShow] = React.useState(true);

  // function toggle() {
  //   setShow((prevShow) => !prevShow);
  // }

  // return (
  //   <main className="container">
  //     <button onClick={toggle}>Toggle WindowTracker</button>
  //     {show ? <WindowTracker /> : null}
  //   </main>
  // );

  // API test
  //   const [data, setData] = React.useState(null);
  //   const [count, setCount] = React.useState(1);

  // React.useEffect(() => {
  //   try {
  //     fetch('http://api.apis.guru/v2/list.json')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  //   return (
  //     <div>
  //       <div>
  //         <h2>The count is {count}</h2>
  //         <button onClick={() => setCount((prevCount) => prevCount + 1)}>
  //           Get Next Character
  //         </button>
  //         <pre>{JSON.stringify(data, null, 2)}</pre>
  //       </div>
  //     </div>
  //   );
}

export default App;

