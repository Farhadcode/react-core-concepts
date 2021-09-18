import './App.css';

function App() {

  const friends = [
    { name: 'Faviha', age: '21', job: 'student' },
    { name: 'Akib', age: '23', job: 'programmer' },
    { name: 'Anis', age: '23', job: 'Bakar' },
    { name: 'Baki', age: '22', job: 'Darez' },
    { name: 'Shole', age: '24', job: 'Electishien' },
  ]

  return (
    <div className="App">
      {
        // friends.map(friend => console.log(friend))
        friends.map(frnd => <FriendFun name={frnd.name} age={frnd.age} job={frnd.job}></FriendFun>)
      }

    </div>
  );
}

function FriendFun(props) {

  /// console.log(props);

  const { name, age, job } = props;

  const friendStyle = {
    backgroundColor: 'rgb(187, 178, 161)',
    color: 'black',
    borderRadius: '10px',
    border: '1px solid rgb(221, 163, 163)',
    padding: '25px',
    margin: '10px',
  }
  return (
    <div style={friendStyle}>
      <h2>Name: {name} </h2>
      <h3>age: {age}</h3>
      <h3>Job: {job}</h3>
    </div>
  );
}


{/*   <Student name="Eishtw" id="28"></Student>
      <Student name='Safowan' id='64'></Student>
      <Student name="Sifat" id='43'></Student> */}

export default App;
