import { useReducer } from "react";

interface State {
  count: number;
}
// interface Action {
//     type: string;
//   }This is also good but below is the best approach as it demonstrates that there is only two possible types

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState: State = {
  count: 0,
};

function Reducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  function submit(actionType: 'INCREMENT' | 'DECREMENT') {
    dispatch({ type: actionType });
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-indigo-200 flex w-max gap-5  p-5 rounded-lg">
          <button className="font-bold text-center text-2xl bg-red-500 rounded-lg px-3 pb-1" onClick={() => { submit('DECREMENT') }}>-</button>
          <div className="font-bold text-center text-2xl text-blue-600">count is : {state.count}</div>
          <button className="font-bold text-center text-2xl bg-green-500 rounded-lg px-3 pb-1" onClick={() => { submit('INCREMENT') }}>+</button>
        </div>
      </div>
    </>
  );
}

export default Reducer;
