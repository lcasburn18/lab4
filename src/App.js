// Import necessary components
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Component to manage content based on the current URL
function DisplayConditionalComponents() {
  // useLocation provides the current route URL
  const location = useLocation();

  // Display components based on the current path
  return (
    <>
      {/* Render Footer only when the path is '/read' */}
      {location.pathname === '/read' && <Footer />}

      {/* Render Header only when the path is '/create' */}
      {location.pathname === '/create' && <Header />}
    </>
  );
}

//'App' component
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          {/* Home route which displays the Content component */}
          <Route path="/home" element={<Content />} />

          {/* Read route which displays the Read Component and Footer*/}
          <Route path="/read" element={<h1>Read Component</h1>} />

          {/* Create route which displays the Create Component and Header*/}
          <Route path="/create" element={<h1>Create Component</h1>} />

          {/* Redirect to /home if the user goes to the root URL */}
          <Route path="/" element={<Content />} />
        </Routes>

        {/* Conditionally display Header or Footer based on the route */}
        <DisplayConditionalComponents />
      </Router>
    </div>
  );
}

// Export the App component
export default App;
