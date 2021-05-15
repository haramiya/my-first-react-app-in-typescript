import React from 'react';

interface AppProps
{
  // ?をつけてOptionalなPropsにする。?がなかったらpropsが必須になってしまう
  message?: string;
}

// AppPropsを型引数に渡す
const App: React.FunctionComponent<AppProps> = ({ message }) =>
{
  return <div>{ message }</div>;
};

App.defaultProps = {
  message: "Hello, defaultProps!"
}

export default App;
