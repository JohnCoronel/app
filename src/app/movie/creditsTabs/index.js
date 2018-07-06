import React from 'react';
import {Tab} from 'semantic-ui-react';
import CastTable from './castPane'
import CrewTable from './crewPane'


const style = {
    width: '90%',
    margin: '0 auto'
}
const CreditsTabs = (props) => {
    const Panes = [
        {
         menuItem: 'Cast',
        render: () => <Tab.Pane attached ={false}>{<CastTable credits = {props.credits}/>}</Tab.Pane>
        },
        {
            menuItem: 'Credits & Crew',
            render: () => <Tab.Pane attached = {false}><CrewTable credits = {props.credits} /></Tab.Pane>
        }
    ]
    return (
    <Tab style = {style} menu = {{secondary:true, pointing:true}} panes = {Panes} /> 
    )
}

export default CreditsTabs;