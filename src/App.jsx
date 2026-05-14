import './App.css'
import Demo from './assets/component/demo';
import Props from './assets/component/props';
import exp7 from './assets/component/exp7';
import hooks from './assets/component/hooks';

function App() {
  const name = "React JS";
  return (
    <>
    <h1>Hello {name}</h1>
    <Demo/>
    <Props name = "Vikas" rollno = "2503201001072" course="B.Tech"/>
    <exp7/>
    <hooks/>
    </>
  )
}

export default App;
