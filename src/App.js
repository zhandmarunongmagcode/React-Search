import React, { useEffect, useState } from "react";
import "./App.css"


function App() { 
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = () => {
    return fetch("https://randomuser.me/api/?results=100")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])


  console.log(user)
  return (
    <div>
      <div>
        <h1>Search Users</h1>
        <div>
          <input className="searchbar"
            type="text" 
            placeholder="Search Here"
            onChange={event =>  {setSearchTerm(event.target.value)}}>
          </input>
        </div>
      </div>
        <div>
          {user.results?.filter((userObj) => {
            if (searchTerm.toLowerCase() === ''){
              return userObj
            } else if (userObj.name.first.toLowerCase().includes(searchTerm.toLowerCase())) {
              return userObj
            } else if (userObj.name.last.toLowerCase().includes(searchTerm.toLowerCase())) {
              return userObj
            }
            }).map(userObj => (
              <div className="cards">
                <div>
                  <img src={userObj.picture.large}></img>
                    <div className="details">
                      <div>
                        <h3 key={userObj.id.name}>
                          {userObj.name.first} {userObj.name.last} 
                        </h3>
                        <p>{userObj.email}</p>
                        <p1>{userObj.location.city}, {userObj.location.country}</p1>
                      </div>
                    </div>
                </div>
              </div>
            ))}
      </div>          
      
    </div>
  );
}

export default App;