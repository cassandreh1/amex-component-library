import './App.css';
import { Button, InputField } from './components';

function App() {
  return (
    <div className="App">
        <InputField
           label={'First Name'}
           type ={'text'}
           value={'Cass'}
           onChange={()=> {console.log('first name changed')}}
        />
        <Button 
          size={'small'}
          color={'blue'}
          text={'Click Me'}
          handleClick={()=> {alert('clicked')}}
        />
    </div>
  );
}

export default App;
