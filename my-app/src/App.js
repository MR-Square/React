import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="Project-1" aboutText="About Me" />
      <div className="container">
        <TextForm heading="Enter your text below:"/>
      </div>
    </>
  );
}

export default App;
