import Header from './components/Header';
import Profiles from './components/Profiles';
import './App.css';

function App(){
  return(
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Profiles />
      </main>
    </div>
  )
}
export default App;
