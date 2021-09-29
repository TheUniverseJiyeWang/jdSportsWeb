import { Provider } from 'react-redux';
import { store } from '../state';
import PkgList from './PkgList';
import React from 'react';

// class App extends React.Component {
//   render(){
//     return (
//       <Provider store={store}>
//         <div>
//           <h1>Hi there. You can search for npm packages.</h1>
//           <PkgList />
//         </div>
//       </Provider>
//     );
//   }
// };





const App = () => {

  return (
    <Provider store={store}>
      <div>
        <h1>Hi there. You can search for npm packages.</h1>
        <PkgList />
      </div>
    </Provider>
    
  );
};

export default App;
