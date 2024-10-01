// Import the React library
import React from 'react';

// Define a functional component called 'Content'
const Content = () => {
  return (
    //Below code prints heading and displays the current time
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
// Export the 'Content' component so it can be imported and used in other files
export default Content;