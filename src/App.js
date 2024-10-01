// Importing the Components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Define the main 'App' component
function App() {
  return (
    <div className="App">
      {/* Render the components */}
      <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
    </Router>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

// Export the 'App' component
export default App;
