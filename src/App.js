import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Roberta White"
        avatar="https://randomuser.me/api/portraits/women/39.jpg"
        online
      />
      <Contact
        name="Salvador Bowman"
        avatar="https://randomuser.me/api/portraits/men/83.jpg"
      />
      <Contact
        name="Connor Wallace"
        avatar="https://randomuser.me/api/portraits/men/66.jpg"
        online
      />
    </div>
  );
}

export default App;
