import { render } from '@testing-library/react';
import React, {Component} from 'react'
import CardList from './CardList';
import { robots } from './robots';
import Searchbox from './Searchbox'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())       })

        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList  robots={filteredRobots}/>
            </div>
        );
    }
   
}
export default App