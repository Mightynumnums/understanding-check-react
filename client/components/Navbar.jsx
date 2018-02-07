import React from 'react';

const Navbar = props => {
  const {selectCritters} = props; //***
  return (
    <div id="nav">
      <button id="dogs" onClick={() => selectCritters('dogs')}>Dogs</button>
      <button id="cats" onClick={() => selectCritters('cats')}>Cats</button>
      <button id="dragons" onClick={() => selectCritters('dragons')}>Dragons</button>
    </div>
  )
}


//to connect buttons to the data, we can use onClick, and onClick, respond with data, that will collect whatever critters we are requesting from the database
//** Need help understanding what is actually happening here(line4)
//is it that we are creating a const object that is our finction from the main.js that collects the data associated with each type of critter, and we store it as props. So now props has all the data that we might want and we could 'props.someproperty' off of it to collect specific values we want from it?

export default Navbar;



