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



            <div className="App-title">
              <img src={process.env.PUBLIC_URL + '/Images/logoh.png'} alt={'logo'} height="150vx"  />
              <SocialLinks></SocialLinks>
            </div>
            
            

            {/* <img className="MixArticle-photo" src={process.env.PUBLIC_URL + '/Images/tm_pic.jpg'} alt={"tm"} />  */}
            {/* <div className={isDayTime ? "App-subtitle" : "App-subtitle-dark"} >Dub Techno Deep Tech and Minimal selections</div> */}
            
            
             
          <div className="content">

          <MixArticle title="July" 
                        imageName="julyhayy" 
                        genre="dub" 
                        scLink={"https://soundcloud.com/jordyevanz/july"} 
                        isDayTime={isDayTime}>         
              </MixArticle> 

            <MixArticle title="TRAILMIX 009: jordyEvanz Dub Set" 
                        imageName="dubset" 
                        genre="dub" 
                        scLink={"https://soundcloud.com/jordyevanz/trailmix-009-jordyevanz-dub-set"} 
                        isDayTime={isDayTime}>         
              </MixArticle> 

              {/* <div className={isDayTime ? "App-archive-title" : "App-archive-title-dark"}>ARCHIVE</div>    */}
              
              <MixArticle title="TRAILMIX 008: jordyEvanz b2b Pierre DV" 
                        imageName="2hrstepperwide" 
                        genre="Minimal" 
                        scLink={" https://soundcloud.com/jordyevanz/trailmix-008-jordyevanz-b2b-pierre-dv?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} 
                        isDayTime={isDayTime}>         
              </MixArticle> 

              <MixArticle title="TRAILMIX 007: X_FR" 
                        imageName="x_FR_COVER" 
                        genre="Dub Techno / Deep House" 
                        scLink={"https://soundcloud.com/jordyevanz/trailmix-007-guest-mix-x_fr?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} 
                        isDayTime={isDayTime}>         
              </MixArticle> 
              <MixArticle title="TRAILMIX 006: JORDY EVANZ" 
                          imageName="fern" 
                          genre="Dub Techno / Deep House" 
                          scLink={"https://soundcloud.com/jordyevanz/trailmix-006-jordy-evanz?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} 
                          isDayTime={isDayTime}>
              </MixArticle>
              <MixArticle title="TRAILMIX 005 - GUEST MIX: ENERCUBE" 
                          imageName="enercube_cover_text_final" 
                          genre="Dub Techno / Deep House" 
                          scLink={"https://soundcloud.com/jordyevanz/trailmix-005-guest-mix-enercube?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} 
                          isDayTime={isDayTime}>
              </MixArticle>
              <MixArticle title="PIRANHA SIBERIA: DUBBISM #023 - Jordy Evanz" 
                          imageName="Piranha" 
                          genre="Dub Techno / Deep House"
                          scLink={"https://soundcloud.com/piranha-siberia/dubbism-023-jordyevanz?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} 
                          isDayTime={isDayTime}>
              </MixArticle>
              <MixArticle title="December" 
                          genre="Dub Techno / Deep House" 
                          imageName="December" 
                          scLink="https://soundcloud.com/jordyevanz/trailmix-series-004-december" 
                          isDayTime={isDayTime}>
              </MixArticle>
              <MixArticle title="LOCK DUB DOWN" 
                          genre="Dub Techno / Deep House" 
                          imageName="LOCK DUB DOWN" date="19-08-2021" 
                          scLink={"https://soundcloud.com/jordyevanz/lock-dub-down"} 
                          isDayTime={isDayTime}>
              </MixArticle>   
              <MixArticle title="Deep 21 Mix" 
                          genre="Dub Techno" 
                          date="30-07-2020" 
                          imageName="Deep 21 Mix" 
                          scLink={"https://soundcloud.com/jordyevanz/jeva-deep-21-mix"} 
                          isDayTime={isDayTime}>
              </MixArticle>   
              <MixArticle title="ayest" 
                          genre="Minimal" 
                          date="10-07-2020" 
                          imageName="ayest" 
                          scLink={"https://soundcloud.com/jordyevanz/ayest"} 
                          isDayTime={isDayTime}>
              </MixArticle>   




          </div>
            
         

          </div>

    </Router>
 
  );
}

export default App;
