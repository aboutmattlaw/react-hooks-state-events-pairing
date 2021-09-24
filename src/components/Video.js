

function Video({embedUrl}){
    return (
        <div>
      <iframe
        width="500"
        height="300"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
        </div>
    )
}

export default Video;