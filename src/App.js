// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Hello from './components/WithoutJsx';

function App() {
	return (
		<div className='App'>
      <Greet />
      <Welcome />
      <Header />
      <Hello />
		</div>
	);
}

export default App
