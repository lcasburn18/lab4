// Importing the Components
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Define the main 'App' component
function App() {
  return (
    <div className="App">
      {/* Render the components */}
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

// Export the 'App' component
export default App;
