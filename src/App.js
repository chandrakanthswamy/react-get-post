import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get request - string
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  const data = "Hello";
  //post request - string
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //post request - form
  const [formData, setFormData] = useState("");

  const postFormDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br />

      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>
      <br />

      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload
          postFormDataFromFrontend(); // Call your function to submit the form data
        }}
      >
        <input
          type="text"
          name="formData"
          value={formData} // Use the correct state variable (case-sensitive)
          onChange={(e) => setFormData(e.target.value)} // Properly update state on input change
        />
        <input type="submit" value="Test Form" />
      </form>
    </div>
  );
};

export default App;
