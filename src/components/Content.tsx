import { FC } from "react"
import VideoGrid from "./VideoGrid"

type ContentProps = {}

const Content: FC<ContentProps> = () => {
  return (
    <>
      <VideoGrid />
      <VideoGrid />
      <VideoGrid />
      <VideoGrid />
    </>
  )
}

export default Content