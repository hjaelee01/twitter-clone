import React, { useState, useEffect } from 'react';
import './Feed.css';
import db from './firebase';
import { doc, onSnapshot, collection, query, getDocs } from "firebase/firestore";
import Post from './Post';
import Tweetbox from './Tweetbox';

function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const q = query(collection(db, "posts"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let feedsArr = [];
      querySnapshot.forEach((doc) => {
        feedsArr.push({...doc.data(), id: doc.id})
      })
      setPosts(feedsArr)
    });
    return () => unsubscribe();
  },[]);

  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
          <h2>Home</h2>
        </div>

        {/* Tweetbox */}
        <Tweetbox />

        {/* Post */}
        {posts.map(post => (
        <Post 
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        image={post.image}
        avatar={post.avatar}
        />
        ))}
        

        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}


    </div>
  );
}

export default Feed