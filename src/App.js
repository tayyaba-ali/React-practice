// import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Header from './components/Header';
// import Hello from './components/WithoutJsx';

function App() {
	return (
		<div className='App'>
			{/* The componet can be a tag also including opening and closing and in that tag what we will write will be the
			default property of the props and then we can get that content in props.children */}
			{/* <Greet name='Tayyaba'>
				<p>My name is Tayyaba</p>
			</Greet>
			<Greet name='Umra '>
				<button>Submit Now</button>
			</Greet>
			<Welcome name='Class component' /> */}
			<Message />
		</div>
	);
}

export default App;
