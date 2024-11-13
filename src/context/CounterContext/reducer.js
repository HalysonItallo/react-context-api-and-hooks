import { initialState } from ".";
import {
	ASYNC_INCREASE_END,
	ASYNC_INCREASE_ERROR,
	ASYNC_INCREASE_START,
	DECREASE,
	INCREASE,
	RESET,
	SET_COUNTER,
} from "./types";

export function reducer(state, action) {
	switch (action.type) {
		case INCREASE: {
			return { ...state, counter: state.counter++ };
		}
		case DECREASE: {
			return { ...state, counter: state.counter-- };
		}
		case RESET: {
			return { ...state, ...initialState };
		}
		case SET_COUNTER: {
			return { ...state, ...action.payload };
		}
		case ASYNC_INCREASE_START: {
			return { ...state, loading: true };
		}
		case ASYNC_INCREASE_END: {
			return { ...state, loading: false, counter: state.counter++ };
		}
		case ASYNC_INCREASE_ERROR: {
			return { ...state, loading: false };
		}
	}

	return { ...state };
}
