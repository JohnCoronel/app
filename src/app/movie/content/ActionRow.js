import React from 'react'
import LikeIcon from '../../common/buttons/LikeIcon'
import ShareIcon from '../../common/buttons/ShareIcon'
import ReviewIcon from '../../common/buttons/ReviewIcon'
import AddIcon from '../../common/buttons/AddIcon'
import styled from 'styled-components'


const Row = styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:1rem;
    align-self:center;
    width:140px;
    padding-bottom:.25rem;

`

const ActionRow = () => {
    return (
        <Row>
            <LikeIcon/>
            <ShareIcon/>
            <ReviewIcon/>
            <AddIcon/>
        </Row>
    )
}

export default ActionRow;