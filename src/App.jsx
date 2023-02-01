// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

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
			{/* <Welcome />
			<Greet name='Tayyaba'>
				<p>Dimaag ghumao dimaag jo hahe nh tum me ajeebbbb😶</p>
			</Greet>
			<Message /> */}

			<Counter />
		</div>
	);
}

export default App;
