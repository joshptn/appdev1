import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About Me
        </h1>

        <div className="space-y-3 mb-8">
          <p><span className="font-semibold">Name:</span> Joshua M. Pateña</p>
          <p>
            <span className="font-semibold">Course/Year:</span> Bachelors of Science in Information System 3rd Year
          </p>
          <p>
            <span className="font-semibold">Fun Fact:</span> I am afraid of the dark and of the heights
          </p>
        </div>

        <hr className="my-6 border-gray-300" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Why I Want to Learn React
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At first, I wanted to learn React because of my brother. He told me
          that it was the latest and most widely adopted tool in front-end
          development. He also mentioned that there are many high-demand jobs
          and freelance opportunities for React developers, and that knowing
          React greatly increases your chances of getting hired as a front-end
          developer. However, I didn’t try to learn it back then because I was
          too timid and a bit lazy at that time. Then, last school year, I
          became motivated to upskill, so I asked for a crash course on React
          from YouTube and spent an entire day learning how to create a React
          project.
        </p>
      </div>
    </div>
  );
}

export default App
