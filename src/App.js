// import capeBrett from './brett.JPG';
import './App.css';
import SocialLinks from './Components/SocialLinks';
import MixArticle from './Components/MixArticle';
import LatestMix from './Components/LatestMix';

import { BrowserRouter as Router} from 'react-router-dom'

function App() {

  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20
  //const isDayTime = 0;
  

  return (
    <Router>
         <div className={isDayTime ? "App" : "App-dark"}>

            <SocialLinks></SocialLinks>
            <div className={isDayTime ? "App-title" : "App-title-dark"} >TRAILMIX PODCAST</div>
            <div className={isDayTime ? "App-subtitle" : "App-subtitle-dark"} >DUB TECHNO DEEP HOUSE</div>
          
            <LatestMix title="brett" genre="Dub Techno" scLink="https://soundcloud.com/jeva126/tracks" isDayTime={isDayTime}></LatestMix>

            <div className={isDayTime ? "App-archive-title" : "App-archive-title-dark"}>ARCHIVE</div>   

            <MixArticle title="Deep 21 Mix" genre="Dub Techno" date="30_07_2020" scLink={"https://soundcloud.com/jeva126/jeva-deep-21-mix"} isDayTime={isDayTime}></MixArticle>   
            <MixArticle title="ayest" genre="Minimal" date="10_07_2020" scLink={"https://soundcloud.com/jeva126/jeva-grey-lynn-sound-volume-1"} isDayTime={isDayTime}></MixArticle>   

          </div>

    </Router>
 
  );
}

export default App;
