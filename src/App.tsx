import './App.css';
import { AppHeader } from './components/AppHeader/AppHeader';
import { CodeCalendar } from './components/CodeCalendar/CodeCalendar';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <CodeCalendar />
      </main>
    </div>
  );
}

export default App;
