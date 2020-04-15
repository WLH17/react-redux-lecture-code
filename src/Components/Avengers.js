//When subscribing a component to redux with react-redux, you need
//to import connect and any actions that you need in the component.
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addAvenger} from '../redux/reducer';

class Avengers extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleAdd = () => {
        const newAvenger = {
            id: this.props.avengers[this.props.avengers.length - 1].id + 1,
            name: this.state.nameInput
        }

        this.props.addAvenger(newAvenger);
    }

    render(){
        console.log(this.props)
        const mappedAvengers = this.props.avengers.map((avenger, i) => (
            <p key={i}>{avenger.name}</p>
        ))
        return (
            <div>
                <h1>Avengers</h1>
                <input 
                    value={this.state.nameInput}
                    placeholder='Avenger Name'
                    onChange={(e) => this.handleInput(e.target.value)}/>
                <button onClick={this.handleAdd}>Add Avenger</button>
                {mappedAvengers}
            </div>
        )
    }
}

//mapStateToProps is a function that lets you define what redux state
//items you are wanting to subscribe to. If using multiple reducers,
//You can access each reducer with dot notation.

// const mapStateToProps = reduxState => reduxState;

const mapStateToProps = reduxState => {
    const {avengers, randomData} = reduxState.reducer;
    return {
        avengers: avengers,
        randomData: randomData
    }
}

// const mapDispatchToProps = {
//     addAvenger: addAvenger
// }

//connect needs to be passed mapStateToProps(always first), then 
//actions second. If you don't need to subscribe to state items, but
//do need to subscribe to actions, pass null as the first argument.
export default connect(mapStateToProps, {addAvenger})(Avengers);