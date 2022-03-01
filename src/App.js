import { useState }  from 'react';
import Counter from './components/counters/Counter';

// import { Component } from 'react';

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { value: 0 }
//   // } 
//   // state = { value: 0 }
// inc() {
//   this.setState({ value: this.state.value + 1})
// }
//   render () {
//     return (
//       <>
//         <h1>My Counter</h1>
//       </>
// //     )
// //   }
// // }

// const App = () => {
//   const [counterValue, setCounterValue] = useState(0)

//   return (
//     <>
//       <h1>My Counter</h1>
//       <p>{counterValue}</p>
//       <button
//         onClick={ () => setCounterValue(counterValue + 1)}
//       >
//         +
//       </button>
//       <button
//         onClick={ () => setCounterValue(counterValue - 1)}
//       >
//         -
//       </button>
//     </>
//   )
// }
const App = () => {

  return (
    <>
      <Counter title="Counter" color="pink" />
      <Counter title="Counter 2 " color="blue" />
      <Counter title="Counter 3" color="red" />
      <Counter title="Counter 4" color="green" />
    </>
  )
}

export default App;
