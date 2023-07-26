import { PostProps } from "@/types/types"
import PostCard from "../postCard/PostCard"

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!res.ok) {
    throw new Error("error fetching posts")
  }

  return res.json()
}

async function PostList() {

  const data = await getData()

  return (
    <div className="columns-2 gap-3 md:columns-3 md:gap-8">
      {data.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostList