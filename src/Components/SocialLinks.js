import '../App.css';


export default function SocialLinks(){
    
   

    return(
        <div className="Social-container">
            <div className="Social-row"> 
                <a href="https://www.instagram.com/jordyevanz/" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/Images/instagram.svg'} alt={'insta'} height="30vh" /> </a>
            </div>
            {/* <div className="Social-row"> 
                <img src={process.env.PUBLIC_URL + '/Images/youtube.svg'} alt={'youtube'} height="30vh" />
            </div> */}
            <div className="Social-row"> 
               <a href="https://soundcloud.com/jeva126/tracks" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/Images/soundcloud.svg'} alt={'soundcloud'} height="40vh" /></a> 
            </div>
            {/* <div className="Social-row">
                <img src={process.env.PUBLIC_URL + '/Images/gmail.svg'} alt={'gmail'} height="30vh" onClick={() => {navigator.clipboard.writeText("hello.trailmix@gmail.com"); }}></img> 
               
            </div> */}
        </div>
    )
}