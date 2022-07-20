import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css';

const  VideoPlayer = () => {
  const embedId : string ='rokGy0huYEA';
  const Styles ={
    width: 1000,
    margin: 10
  }
   return(
    <div style={Styles}>
     { /* <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{
          borderRadius:'8px',
          margin:'10px'
        }}
      /> */}

      <Player>
        <Youtube videoId="rokGy0huYEA"/>
        <DefaultUi/>
      </Player>
    </div>
   )
}

export default VideoPlayer;
