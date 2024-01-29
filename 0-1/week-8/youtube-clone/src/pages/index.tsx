import Image from "next/image";
import { Inter } from "next/font/google";

import {videoData} from '@/components/data'
import VideoGrid from "@/components/VideoGrid";
import AppBar from "@/components/AppBar";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
   <div className="">
      <AppBar />
      <VideoGrid videos={videoData} />
   </div>
  );
}
