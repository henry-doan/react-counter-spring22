import { useState } from "react";

const Counter  = ({ title, color }) => {
  const [counterValue, setCounterValue] = useState(0)

  return (
    <>
      <h1>{title}</h1>
      <p style={{
        backgroundColor: color
      }}>
        {counterValue}
      </p>
      <button
        onClick={ () => setCounterValue(counterValue + 1)}
      >
        +
      </button>
      <button
        onClick={ () => setCounterValue(counterValue - 1)}
      >
        -
      </button>
    </>
  )
}

export default Counter;