import React from 'react'
import AddPost from '../../components/AddPost'
import Base from '../../components/Base'
import { Container } from 'reactstrap'
import NewFeed from '../../components/NewFeed'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCurrentUserDetail } from '../../auth'
import { deletePostService, loadPostUserWise } from '../../services/post-service'
import { toast } from 'react-toastify'
import Post from '../../components/Post'
const Userdashboard = () => {

  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  useEffect(() => {
    console.log(getCurrentUserDetail());
    setUser(getCurrentUserDetail())
    loadPostData()

  }, [])

  function loadPostData() {
    loadPostUserWise(getCurrentUserDetail().id).then(data => {
      console.log(data)
      setPosts([...data])
    })
      .catch(error => {
        console.log(error)
        toast.error("error in loading user posts")
      })
  }

  //function to delete post

  function deletePost(post) {
    //going to delete post
    console.log(post)

    deletePostService(post.postId).then(res => {
      console.log(res)
      toast.success("post is deleled..")
      let newPosts = posts.filter(p => p.postId != post.postId)
      setPosts([...newPosts])

    })
      .catch(error => {
        console.log(error)
        toast.error("error in deleting post")
      })
  }


  return (

    <Base>
      <Container>
        <AddPost />

        <h1 className='my-3'>Posts Count : ({posts.length})</h1>

        {posts.map((post, index) => {
          return (
            <Post post={post} deletePost={deletePost} key={index} />
          )
        })}
      </Container>
    </Base>

  )
}

export default Userdashboard