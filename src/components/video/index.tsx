
const  VideoPlayer = () => {
  const embedId : string ='rokGy0huYEA';
   return(
    <div>
      <iframe
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
    />
    </div>
   )
}

export default VideoPlayer;