import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Card from "~/components/styled/card"
import Image from "~/components/image"

const PostList = ({ posts, gridCols }) => {

  // posts.map(post => {console.log("post", post)})

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {posts.map(post => {
        return (
          <Card key={post._id}>
            <Link to={`/posts/${post.slug}`} key={post._id}>
              <Image
                alt="Post Image"
                className="rounded-t-md border-gray-200	 border-b"
                image={post.metadata.image}
              />
              <div className="px-4 py-6">
                <p>{post.title}</p>
                <p className="text-xs self-end">
                  {post.metadata.subtitle}
                </p>
              </div>
            </Link>
          </Card>
        )
      })}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array,
  gridCols: PropTypes.string,
}

PostList.defaultProps = {
  gridCols: "grid-cols-1 md:grid-cols-3",
}

export default PostList
