import {
	ASYNC_INCREASE_END,
	ASYNC_INCREASE_ERROR,
	ASYNC_INCREASE_START,
	DECREASE,
	INCREASE,
	RESET,
	SET_COUNTER,
} from "./types";

export function buildActions(dispatch) {
	return {
		increase: () => dispatch({ type: INCREASE }),
		decrease: () => dispatch({ type: DECREASE }),
		setCounter: (payload) => dispatch({ type: SET_COUNTER, payload }),
		reset: () => dispatch({ type: RESET }),
		asyncIncrease: () => asyncIncreaseFN(dispatch),
		asyncError: () => asyncIncreaseErrorFN(dispatch),
	};
}

async function asyncIncreaseFN(dispatch) {
	dispatch({ type: ASYNC_INCREASE_START });

	return await new Promise((resolve) => {
		setTimeout(() => {
			dispatch({ type: ASYNC_INCREASE_END });
			resolve();
		}, 2000);
	});
}

async function asyncIncreaseErrorFN(dispatch) {
	dispatch({ type: ASYNC_INCREASE_START });

	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			dispatch({ type: ASYNC_INCREASE_ERROR });
			reject(new Error("Deu ruim!!!"));
		}, 2000);
	});
}
