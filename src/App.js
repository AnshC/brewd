import './App.css';
import Home from './components/home'
import { OrderProvider } from './OrderContext';

function App() {
  return (
    <OrderProvider>
      <div className="App">
        <Home />
      </div>
    </OrderProvider>
  );
}

export default App;
