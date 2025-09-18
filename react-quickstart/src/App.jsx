import './App.css'

const user = {
  name: 'Joshua P.',
  age: 22,
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 150,
};

const hobbies = [
  { title: 'Cycling', id: 1 },
  { title: 'Hiking', id: 2 },
  { title: 'Swimming', id: 3 },
];

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}



function App() {
   return (
    <>
      <div>
        <Profile />
      </div>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.title}>{"I love " + hobby.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App


