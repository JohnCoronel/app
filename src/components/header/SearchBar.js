import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
       
    }
    handleChange(e) {
        this.setState({value:e.target.value});
    }


    render() {
        return (
        <div>
            <form>
            <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
            </form>
        </div>
        )
    }
}

export default SearchBar;