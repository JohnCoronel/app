import React from 'react';
import {Header,Table, TableBody} from 'semantic-ui-react';
import Image from '../../common/ImageWithFallback';
import fallback from './user.png'




const CreditsTable = (props) => (
    <Table basic = 'very' celled collapsing>
        <TableBody>{renderRows(props.credits)}</TableBody>
    </Table>
)

const renderRows = (credits) => {
   if(!credits.cast){
       return null
   }
   const mainCast = credits.cast.slice(0,10);
   return  mainCast.map(item => {
       return (
        <Table.Row key = {item.cast_id}>
            <Table.Cell>
                <Header as = 'h4'>
                <Image src = {"https://image.tmdb.org/t/p/w92" + item.profile_path} fallbackSrc = {fallback} />
                <Header.Content>{item.name}</Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>{item.character}</Table.Cell>
            </Table.Row>
       )
    })
}

export default CreditsTable;