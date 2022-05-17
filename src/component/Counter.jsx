import React from 'react';
import styles from '../App.css';

let Green = {
  color :"green"
}
let Red = {
    color :"red"
  }

export const Counter = (props) => {

    const [count, setCount] = React.useState(props.val)

    return (
        <div className={styles.App}>

            <h1 style={count%2==0 ? Green : Red}>Counter : {count}   </h1>

            
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count * 2)}>Double</button>
            <button onClick={ () => { if(count >0) setCount(count - 1)}} > Decrement</button>


        </div>
    )
}
