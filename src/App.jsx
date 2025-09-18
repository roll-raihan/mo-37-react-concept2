import Counter from './count';
import User from './user';
import './App.css'
import { Suspense } from 'react';

//cls-6
const fetchUser = fetch("https://jsonplaceholder.typicode.com/")
  .then(res => res.json())

function App() {
  // event handler cls-2
  // state cls-3,4

  function handleClick() {
    alert('I am clicked.')
  }

  const handleClick2 = () => {
    alert("HMM. Clicked 2.")
  }

  //if i have to pass parameter
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      {/* adding suspense + api + fetch (hint:follow react website(use)) --> cls-6 */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUser={fetchUser}></User>
      </Suspense>
      <h1>Vite + React</h1>
      <Counter></Counter>
      {/* <button onClick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      {/* for parameter */}
      <button onClick={() => handleAdd5(10)}>Add 5</button>
    </>
  )
}

export default App
