import React,{useEffect, useState} from 'react'
import service from '../appwrite/config'
import { PostForm,Container } from '../components'
import { useNavigate, useParams } from 'react-router'

function EditPost() {
    const [post,setPosts] = useState([])

    const {slug} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[navigate, slug])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost