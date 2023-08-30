
import './App.css';
import { Dbdata } from './Dbdata';
import { Newone } from './Newone';
import { NewoneTow } from './NewoneTow';
import { RegistrationForm } from './RegistrationForm';

function App() {
  return (
    <div className="App">
     <Newone/>

     <RegistrationForm/>
<h1>new data</h1>
     <Dbdata/>

     <h1>its working</h1>
     <NewoneTow/>
    </div>
  );
}

export default App;
