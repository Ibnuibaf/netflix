import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Row from './components/Row';
import { actions, comedy, horror, orginals } from './url';

function App() {
  return (
    <div className='bg-neutral-950 min-h-screen text-white'>
      <NavBar/>
      <Banner/>
      <Row key={1} url={orginals} title='Netflix Originals' />
      <Row key={2} url={actions} title='Action' rowId='2'/>
      <Row key={3} url={comedy} title='Comedy' rowId='3'/>
      <Row key={4} url={horror} title='Horror' rowId='4'/>
    </div>
  );
}

export default App;
