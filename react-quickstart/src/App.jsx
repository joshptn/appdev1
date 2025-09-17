import './App.css'

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


function App() {
  return (
    <>
      <AboutPage />
    </>
  )
}

export default App


