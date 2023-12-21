import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';



let name='Rupesh Thakur';
function App() {
  return (
    <>
    <Navbar title="TextUtils" about="AboutUtils"/>
    <TextBox heading="Enter the text to analyze below"/>

  
    </>
  
   

  
  );
}

export default App;
