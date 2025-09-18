import Counter from './count';
import './App.css'

function App() {
  // event handler cls-2
  // stat cls-3,4

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
