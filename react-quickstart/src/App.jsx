import './App.css'

const user = {
  name: 'Joshua P.',
  age: 22,
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 150,
};

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1 className='header'>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

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
      <AboutPage />
    </>
  )
}

export default Profile


