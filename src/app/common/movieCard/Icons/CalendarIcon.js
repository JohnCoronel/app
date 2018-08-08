import React from 'react';
import styled from 'styled-components';

const Calendar = styled.svg`
	margin-bottom:3px;
	width:17px;
	height:17px;
	fill: none;
	stroke : currentColor;
	stroke-width:2px;
	stroke-linecap: round;
	stroke-linejoin: round;

`



const CalendarIcon = () => {
    return (
		<Calendar  viewBox="0 0 24 24">
		<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
		<line x1="16" y1="2" x2="16" y2="6"></line>
		<line x1="8" y1="2" x2="8" y2="6"></line>
		<line x1="3" y1="10" x2="21" y2="10"></line>
		</Calendar>
    )
}

export default CalendarIcon;