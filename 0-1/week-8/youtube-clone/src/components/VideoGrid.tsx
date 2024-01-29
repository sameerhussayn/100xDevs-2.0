import VideoCard from "./VideoCard"


const VideoGrid = ({videos}:any) => {

  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 mt-8">
        {
        videos.map((video:any) =>(
            <VideoCard video={video} key={video.author}/>
        ))
    }
    </div>
  )
}
export default VideoGrid