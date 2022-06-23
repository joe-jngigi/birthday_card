import React from 'react';
/**This is the people props passed from the data() componet via the App(parent)
 * 
 */
const List = ({people}) => {
  return (
    /**Data will be made available to the list from the data API and then we will
     * iterate through the data. We will use the useState to pass data from the parent
     * App
     */
    /**
     * Using the map function, the array data wil be mapped into the UI components as shown below
     * 
     */
    <>
      {
        people.map((eachPerson) => {
          /**Here we create a group of variables by adding them into objects */
          const {id, name, age, image} = eachPerson
          return(
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
        })
      }
    </>
  );
};

export default List;
