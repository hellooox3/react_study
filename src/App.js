import React, {Component} from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import Scroll from './Scroll';
import ErrorBoundry from "./ErrorBoundry";


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
       
    }
    render(){
        const {robots, searchfield} = this.state;
        const filterdRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(robots.length === 0){
            return <h1>Loading...</h1>
        }
        // else{
            return(
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBar searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filterdRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        // }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => 
                {
                    // console.log('res: ',response);
                    return response.json();
                }
            )
            .then(users => this.setState({robots: users}));    
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         // .then(users => this.setState({robots: users}));
    //         .then(info => console.log(info))
    // }
}


export default App;