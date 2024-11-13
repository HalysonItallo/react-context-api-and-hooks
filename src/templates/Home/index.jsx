import { useEffect } from "react";
import { useCounterContext } from "../../context/CounterContext";
import "./styles.css";

export function Home() {
	const { state, actions } = useCounterContext();

	return (
		<>
			<h1>Meu contador: {state.counter}</h1>
			<button onClick={actions.increase} type="button">
				incrementar
			</button>
			<button onClick={actions.decrease} type="button">
				decrementar
			</button>
			<button onClick={actions.reset} type="button">
				resetar
			</button>
			<button onClick={() => actions.setCounter({ counter: 10 })} type="button">
				seta o valor de 10
			</button>
			<button
				onClick={actions.asyncIncrease}
				disabled={state.loading}
				type="button"
			>
				incrementar assincrono
			</button>
			<button
				onClick={actions.asyncError}
				disabled={state.loading}
				type="button"
			>
				incrementar assincrono com error
			</button>
		</>
	);
}
