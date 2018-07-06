import React from 'react';
import {Header,Table, TableBody} from 'semantic-ui-react';



const CrewTable = (props) => (
    <Table basic = 'very' celled collapsing>
        {/* <Table.Header>
            <Table.Row>
                <Table.HeaderCell> Cast </Table.HeaderCell>
                <Table.HeaderCell> Role </Table.HeaderCell>
            </Table.Row>
        </Table.Header> */}
        <TableBody>{renderRows(props.credits)}</TableBody>
    </Table>
)

const renderRows = (credits) => {
   if(!credits.crew){
       return ''
   }
   const mainCrew = credits.crew.slice(0,10);
   return  mainCrew.map(item => {
       return (
        <Table.Row key = {item.credit_id}>
            <Table.Cell>
                <Header as = 'h4'>
                <Header.Content>
                   {item.job}
                </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>
                    {item.name}
                    </Table.Cell>
            </Table.Row>
       )
    })
}

export default CrewTable;