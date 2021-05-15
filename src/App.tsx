import React from 'react';
import Counter from './Counter'
import CounterWithReducer from './CounterWithReducer'

interface AppProps
{
  // OptionalなPropsにする。?がなかったらpropsが必須になってしまう
  message?: string;
}

// AppPropsを型引数に渡す
const App: React.FunctionComponent<AppProps> = ({ message }) =>
{
  return (
    <div>
      {message}
      {/* <Counter/> */}
      <CounterWithReducer/>
    </div>
  );
};

App.defaultProps = {
  message : "Hello, defaultProps!"
}

export default App;
