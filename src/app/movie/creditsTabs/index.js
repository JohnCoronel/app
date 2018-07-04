import React from 'react';
import {Tab} from 'semantic-ui-react';
import CastTable from './castPane'
import CrewTable from './crewPane'



const CreditsTabs = (props) => {
    console.log(props.credits.cast)
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
    <Tab menu = {{secondary:true, pointing:true}} panes = {Panes} /> 
    )
}

export default CreditsTabs;