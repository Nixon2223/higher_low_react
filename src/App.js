import HighLowBox from './containers/HighLowBox'
import './App.css';

  
function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
  <>
  <h1>High Low</h1>
  <HighLowBox/>
  <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/f6d8f448585faae.png" id="play" onClick={refreshPage}/>
  </>
  );
}

export default App;
