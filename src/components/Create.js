// imports
import { useState } from "react";

function Create() {
  // State variables for the movie title, year, and poster URL
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    // Logging the entered movie details to the console
    console.log("Movie Title:", title);
    console.log("Movie Year:", year);
    console.log("Movie Poster:", poster);
  }

  return (
    <div>
      <h2>This is my Create Component.</h2> {/* Header for the Create component */}
      <form onSubmit={handleSubmit}> {/* Form that triggers handleSubmit on submission */}
        <div className="form-group"> {/* Group for the title input */}
          <label>Add Movie Title: </label> {/* Label for the title input */}
          <input type="text"
            className="form-control" // Bootstrap class for styling
            value={title} // Binding the input value to state
            onChange={(e) => { setTitle(e.target.value) }} // Updating state on input change
          />
        </div>
        <div className="form-group"> {/* Group for the year input */}
          <label>Add Movie Year: </label> {/* Label for the year input */}
          <input type="text"
            className="form-control" // Bootstrap class for styling
            value={year} // Binding the input value to state
            onChange={(e) => { setYear(e.target.value) }} // Updating state on input change
          />
        </div>
        <div className="form-group"> {/* Group for the poster input */}
          <label>Add Movie Poster: </label> {/* Label for the poster input */}
          <input type="text"
            className="form-control" // Bootstrap class for styling
            value={poster} // Binding the input value to state
            onChange={(e) => { setPoster(e.target.value) }} // Updating state on input change
          />
        </div>
        <input type="submit" value="Add Movie" /> {/* Submit button for the form */}
      </form>
    </div>
  );
}

export default Create;