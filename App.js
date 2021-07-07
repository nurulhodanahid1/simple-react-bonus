import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User'

function App() {
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => {
      // console.log(data.results);
      setUsers(data.results)
    })
  },[]);
  const handleAddMember = (name) => {
    setMembers([...members, name]);
  };
  return (
    <div className="App">
      <ul>
        <p>Added person:</p>
        {
          members.map((nam, idx) => <li key={idx}>{nam}</li>)   // not recomended key used in here
        }
      </ul>
      {users.map(user => <User user={user} handleAddMember={handleAddMember} key={user.email}></User>)}
    </div>
  );
}

export default App;
