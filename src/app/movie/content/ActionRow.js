import React from 'react'
import LikeIcon from './Icons/LikeIcon'
import ShareIcon from './Icons/ShareIcon'
import ReviewIcon from './Icons/ReviewIcon'
import AddIcon from './Icons/AddIcon'

const ActionRow = (props) => {
    return (
        <div>
        <LikeIcon/>
        <ShareIcon/>
        <ReviewIcon/>
        <AddIcon/>
    </div>
    )
}

export default ActionRow;