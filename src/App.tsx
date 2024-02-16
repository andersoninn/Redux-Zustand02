import { Provider as ReduxProvider } from 'react-redux';

import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { store } from './store';

function App() {
   return (
      <ReduxProvider store={store}>
         <h1>Hello World!</h1>
         <div>
            <TodoList />
            <AddTodo />
         </div>
      </ReduxProvider>
   );
}

export default App;
