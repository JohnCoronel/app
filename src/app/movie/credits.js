import React from 'react';
import {Header,Image,Table, TableBody} from 'semantic-ui-react';



const CreditsTable = (props) => (
    <Table basic = 'very' celled collapsing>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell> Cast </Table.HeaderCell>
                <Table.HeaderCell> Role </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <TableBody>
            {
               renderRows(props.credits)
                }
            </TableBody>
    </Table>
)

const renderRows = (credits) => {
   if(!credits.cast){
       return ''
   }
   const mainCast = credits.cast.slice(0,10);
   return  mainCast.map(item => {
       return (
        <Table.Row>
            <Table.Cell>
                <Header as = 'h4' image>
                <Image src = {"https://image.tmdb.org/t/p/w92" + item.profile_path} rounded size = 'tiny' />
                <Header.Content>
                   {item.name}
                </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>
                    {item.character}
                    </Table.Cell>
            </Table.Row>
       )
    })
}

export default CreditsTable;