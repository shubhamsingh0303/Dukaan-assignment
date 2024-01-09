import Header from './component/header/header';
import Sidebar from './component/sidebar/sidebar';
import Maincontent from './component/maincontent/maincontent';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex',height: '100vh' }}>
      <Sidebar/>
      <div style={{ display: 'flex',flexDirection:'column', flex: 1 }}>
        <Header/>
        <Maincontent/>
      </div>
    </div>
    );
}

export default App;
