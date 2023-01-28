import './App.css';
import BasicExample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadAndDisplayImage from './components/Input_OCR';
// import Footer from './components/Footer';
// var cors = require('cors')

function App() {
  return (
    <>
    <BasicExample/>
    <div className="App">
    {/* <Printme/> */}
    <UploadAndDisplayImage/>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default App;
