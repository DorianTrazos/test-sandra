import { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [todos, setTodos] = useState();

	useEffect(() => {
		getAllTodos(setTodos);
	}, []);
	return (
		<>
			<GlobalStyles />
			<h1>REACT OK</h1>
			{todos &&
				todos.map(todo => (
					<div key={todo._id}>
						<h2>{todo.task}</h2>
					</div>
				))}
		</>
	);
};

const getAllTodos = async setTodos => {
	const response = await fetch('https://test-sandra.onrender.com/api/todos');
	const allTodos = await response.json();
	setTodos(allTodos);
};

export default App;
