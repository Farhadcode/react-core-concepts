import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // const friends = [
  //   { name: 'Faviha', age: '21', job: 'student' },
  //   { name: 'Akib', age: '23', job: 'programmer' },
  //   { name: 'Anis', age: '23', job: 'Bakar' },
  //   { name: 'Baki', age: '22', job: 'Darez' },
  //   { name: 'Shole', age: '24', job: 'Electishien' },
  // ]

  return (
    <div className="App">
      {
        <ExternalUsers></ExternalUsers>
        // <Counter></Counter>

        // friends.map(friend => console.log(friend))
        // friends.map(frnd => <FriendFun name={frnd.name} age={frnd.age} job={frnd.job}></FriendFun>)
      }

    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('hello');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <UserCompunent name={user.name} email={user.email}></UserCompunent>)
      }
    </div>
  )

}

function UserCompunent(props) {
  //console.log(props);
  const { name, email } = props;
  const userStyle = {
    backgroundColor: 'rgb(187, 178, 161)',
    color: 'black',
    borderRadius: '10px',
    border: '1px solid rgb(221, 163, 163)',
    padding: '25px',
    margin: '10px',
  }
  return (
    <div style={userStyle}>
      <h2>Name :{name}</h2>
      <h4>Email :{email}</h4>
    </div>
  )

}
// function Counter() {
//   const [count, setCount] = useState(0);

//   const handelIncrease = () => setCount(count + 1);
//   const handelDecreas = () => setCount(count - 1);

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={handelIncrease}>Increase</button>
//       <button onClick={handelDecreas}>Decreas</button>
//     </div>
//   );

// }


// function FriendFun(props) {
//   /// console.log(props);

//   const { name, age, job } = props;

//   const friendStyle = {
//     backgroundColor: 'rgb(187, 178, 161)',
//     color: 'black',
//     borderRadius: '10px',
//     border: '1px solid rgb(221, 163, 163)',
//     padding: '25px',
//     margin: '10px',
//   }
//   return (
//     <div style={friendStyle}>
//       <h2>Name: {name} </h2>
//       <h3>age: {age}</h3>
//       <h3>Job: {job}</h3>
//     </div>
//   );
// }


{/*   <Student name="Eishtw" id="28"></Student>
      <Student name='Safowan' id='64'></Student>
      <Student name="Sifat" id='43'></Student> */}

export default App;
