import './App.css';
import SocialLinks from './Components/SocialLinks';
import MixArticle from './Components/MixArticle';
import LatestMix from './Components/LatestMix';

import { BrowserRouter as Router} from 'react-router-dom'

import ReactGA from 'react-ga';

function App() {

  const hours = new Date().getHours();
  const isDayTime = hours > 7 && hours < 17;

  ReactGA.pageview(window.location.pathname);

  return (
    <Router>
         <div className={isDayTime ? "App" : "App-dark"}>

           
            <div className={isDayTime ? "App-title" : "App-title-dark"} >TRAILMIX SERIES</div>
            <div className={isDayTime ? "App-subtitle" : "App-subtitle-dark"} >DUB TECHNO DEEP HOUSE</div>
            <SocialLinks></SocialLinks> 
          
            <LatestMix title="December" genre="Dub Techno / Deep House" scLink="https://soundcloud.com/jordyevanz/trailmix-series-004-december" isDayTime={isDayTime}></LatestMix>
            
            <div className={isDayTime ? "App-archive-title" : "App-archive-title-dark"}>ARCHIVE</div>   
            
            <MixArticle title="LOCK DUB DOWN" genre="Dub Techno / Deep House" date="19-08-2021" scLink={"https://soundcloud.com/jordyevanz/lock-dub-down"} isDayTime={isDayTime}></MixArticle>   
            <MixArticle title="Deep 21 Mix" genre="Dub Techno" date="30-07-2020" scLink={"https://soundcloud.com/jordyevanz/jeva-deep-21-mix"} isDayTime={isDayTime}></MixArticle>   
            <MixArticle title="ayest" genre="Minimal" date="10-07-2020" scLink={"https://soundcloud.com/jordyevanz/ayest"} isDayTime={isDayTime}></MixArticle>   

          </div>

    </Router>
 
  );
}

export default App;
