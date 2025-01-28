import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Display() {
  let [data, setData] = useState([]);

  const loadData = () => {
    let api = "http://localhost:8000/students/display";
    axios.get(api).then((res) => {
      console.log(res.data);
      setData(res.data);
    })
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Display page</h1>
      <hr />
      <table border="1">
        <thead>
          <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.rollno}</td>
                  <td>{e.name}</td>
                  <td>{e.city}</td>
                  <td>{e.fees}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default Display;