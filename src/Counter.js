import React, { Component } from 'react';

function increment() {
  this.setState((state, props) => {
    const { max, step } = props;
    if (state.count >= max) return;
    return { count: state.count + step }
  },
  () => {
    localStorage.setItem('counterState', JSON.stringify(this.state))
    console.log(this.state);
  }
  );
}

const Counter = ({ max, step }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(c => {
      if (c >= max) return c;
      return c + step;
    });
  }
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
}

export default Counter;
