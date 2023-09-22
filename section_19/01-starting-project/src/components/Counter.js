// import { Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
