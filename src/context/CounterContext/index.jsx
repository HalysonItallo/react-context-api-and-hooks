import { useReducer, useRef } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { buildActions } from "./actions";
import { reducer } from "./reducer";

const Context = createContext();

export const initialState = {
	counter: 0,
	loading: false,
};

export function CounterContexProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const actions = useRef(buildActions(dispatch));

	return (
		<Context.Provider value={{ state, actions: actions.current }}>
			{children}
		</Context.Provider>
	);
}

export function useCounterContext() {
	const context = useContext(Context);

	if (typeof context === "undefined") {
		throw new Error(
			"You have to use useCounterContext inside <CounterContextProvider /> ",
		);
	}

	return { ...context };
}
