import { CounterContexProvider } from "./context/CounterContext";
import { Home } from "./templates/Home";

function App() {
	return (
		<CounterContexProvider>
			<Home />
		</CounterContexProvider>
	);
}

export default App;
