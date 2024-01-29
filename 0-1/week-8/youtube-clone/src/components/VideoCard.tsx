const VideoCard = ({video}: any) => {
  console.log(video)
  return (
    <div className=" m-2   rounded-md  cursor-pointer">
      <div className="flex justify-center ">
        <img src={video.thumbnail} alt="" className=" w-full  rounded-lg" />
      </div>
      <div className="grid grid-cols-12 m-2  ">
        <div className="grid col-span-1 lg:col-span-2">
          <img src={video.icon} className="rounded-full " alt="" />
        </div>
        <div className="grid col-span-10 ml-2 lg:col-start-3  gap-1">
          <p className="text-sm leading-4 font-medium">{video.title}</p>
          <p className="text-xs text-gray-500">{video.author}</p>
         <div className="-mt-2">
         <span className="text-xs text-gray-500 lea">{video.views}</span>
          <span className="text-xs text-gray-500">{video.timestamp}</span>

         </div>
        </div>

      </div>

    </div>
  )
}
export default VideoCard