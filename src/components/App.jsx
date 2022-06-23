import React, { useState } from 'react';
import data from '../data';
import List from './List';
function App() {
  /**Here we create a use state from which the initial state will be
   * data that is passed from the data.js
   */
  const [people, setPeople] = useState(data)
  return(
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        {/**This is how we pass variables in the JSX syntax. Props are used
         * to pass arguements(data) to the child or from component. So below the 
         * data will be from the created useState array variable passed into the
         * list component using the prop
         */}
        <List people ={people}/>
        <button onClick={() => setPeople([])}>
          Clear
        </button>
      </section>
    </main>
  )
}

export default App;
