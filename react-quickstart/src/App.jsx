import './App.css'
import { useState } from 'react';

const user = {
  name: 'Joshua P.',
  age: 22,
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 150,
};

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

const hobbies = [
  { title: 'Cycling', id: 1 },
  { title: 'Hiking', id: 2 },
  { title: 'Swimming', id: 3 },
];

function MyButton({ count, onClick }) {
  return (
	<button onClick={onClick}>
  	Clicked {count} times
	</button>
  );
}


function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
    setCount(count + 1);
    }


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
      <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      </div>
    </>
  )
}

export default App


