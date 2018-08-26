import React from 'react'
import {SingleSlider} from 'react-slider-kit'

export default class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    handleChange = (val) => {
        this.setState({
            value:val
        })
    }
        render() {
            return (
                <SingleSlider
                     min={0}
                      max={100}
                     step={1}
                     start={80}
                     onChangeStart={() => console.log('start drag')}
                     onChange={(value)=>console.log('drag value: ', value)}
                     onChangeComplete={this.handleOnChange}
                 />
             )
        }
}