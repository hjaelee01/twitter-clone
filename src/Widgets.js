import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, 
         TwitterShareButton, 
         TwitterFollowButton, 
         TwitterHashtagButton, 
         TwitterMentionButton, 
         TwitterTweetEmbed, 
         TwitterMomentShare, 
         TwitterDMButton, 
         TwitterVideoEmbed, 
         TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <SearchIcon className='widgets__searchIcon'/>
            <input placeholder='Search Twitter' className='widgets__searchBox' type="text"/>
        </div>        
        <div className='widgets__container'>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"1608938457937907712"}/>
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="HynJaeLee"
            options={{height:400}}/>
            <TwitterShareButton
                url='https://www.youtube.com/watch?v=RfWGJS7rckk'
                options={{text: "checkout the best #programminglanguage", via: "HynJaeLee"}}/>
        </div>
    </div>
  )
}

export default Widgets