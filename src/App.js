import Question from './components/Question';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget monitoring app</h1>
        <div className="contenido-principal contenido">
          <Question />
        </div>
      </header>
    </div>
  );
}

export default App;