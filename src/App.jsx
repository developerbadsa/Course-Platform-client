import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './Redux/State/counterState';

const App = () => {

      const count = useSelector((state)=>state.counter)
      const dispace = useDispatch()

      console.log(count)



      return (
            <div className='w-1/5 mx-auto border p-6 text-center'>
                  <h1>Count: {count.value}</h1>
                  <br />
                  <button className="btn" onClick={()=>{dispace(increment())}}>Increase </button>
                  <button className="btn">Descreate</button>
      
            </div>
      );
};

export default App;