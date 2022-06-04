import { useEffect, useReducer } from "react"
import { BaseAction, ChangeResourceByAmountAction, TICK_ACTION } from "./ReducerActions";
import { State } from "./State";
import React from "react";

import './css/base.css'

function reducer(oldstate: State, action: BaseAction): State {
  let state = oldstate.with({ timer: oldstate.timer.nextTick() });
  state = action.transform(state);
  return state;
}
const ADD_GOLD = new ChangeResourceByAmountAction("gold", 1);

export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, State.initialState());
  useEffect(() => {
    const interval = setInterval(() => dispatch(TICK_ACTION), 100);
    return () => clearInterval(interval);
  })
  return (<div>
    <p>Time: {state.timer.currentTime}</p>
    <dl>
      {state.resources.map((e, i) => <React.Fragment key={e.name}>
        <dt>{e.name}</dt>
        <dd>{e.amount}</dd>
      </React.Fragment>)}
    </dl>
    <button onClick={() => dispatch(ADD_GOLD)}>Click Me</button>
  </div>);
}