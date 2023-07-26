import { PostProps } from "@/types/types"

function PostCard(props: PostProps) {
  return (
    <div className="m-3 border rounded-md px-3 py-3 break-inside-avoid">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default PostCard