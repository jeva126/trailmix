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
            <div className={isDayTime ? "App-subtitle" : "App-subtitle-dark"} >Dub Techno and Deep House selections from Jordy Evanz</div>
            <div className={isDayTime ? "App-subtitle" : "App-subtitle-dark"} >Analog imagery from New Zealand</div>
            <SocialLinks></SocialLinks> 
          
            
            <LatestMix title="TRAILMIX 005 - GUEST MIX: ENERCUBE" imageName="enercube_cover_text_final" genre="Dub Techno / Deep House" date="19-08-2021" scLink={"https://soundcloud.com/jordyevanz/trailmix-005-guest-mix-enercube?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} isDayTime={isDayTime}></LatestMix>    
            <div className={isDayTime ? "App-archive-title" : "App-archive-title-dark"}>ARCHIVE</div>   
            
            <MixArticle title="PIRANHA SIBERIA: DUBBISM #023 - Jordy Evanz" imageName="Piranha" genre="Dub Techno / Deep House" scLink={"https://soundcloud.com/piranha-siberia/dubbism-023-jordyevanz?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} isDayTime={isDayTime}></MixArticle>
            <MixArticle title="December" genre="Dub Techno / Deep House" imageName="December" scLink="https://soundcloud.com/jordyevanz/trailmix-series-004-december" isDayTime={isDayTime}></MixArticle>
            <MixArticle title="LOCK DUB DOWN" genre="Dub Techno / Deep House" imageName="LOCK DUB DOWN" date="19-08-2021" scLink={"https://soundcloud.com/jordyevanz/lock-dub-down"} isDayTime={isDayTime}></MixArticle>   
            <MixArticle title="Deep 21 Mix" genre="Dub Techno" date="30-07-2020" imageName="Deep 21 Mix" scLink={"https://soundcloud.com/jordyevanz/jeva-deep-21-mix"} isDayTime={isDayTime}></MixArticle>   
            <MixArticle title="ayest" genre="Minimal" date="10-07-2020" imageName="ayest" scLink={"https://soundcloud.com/jordyevanz/ayest"} isDayTime={isDayTime}></MixArticle>   

          </div>

    </Router>
 
  );
}

export default App;
