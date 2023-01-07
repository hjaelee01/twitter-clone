import React, { useState } from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { addDoc, collection } from 'firebase/firestore';

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault(e);
    addDoc(collection(db, 'posts'), {
      avatar: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      displayName: 'Jae Lee',
      image: tweetImage,
      text: tweetMessage,
      username: 'HynJaeLee',
      verified: true
    })
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening?" 
                type="text"/>
            </div>
            <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className='tweetBox__imageInput'
            placeholder='Optional: Enter image URL'
            type='text'
            />
            <Button onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox