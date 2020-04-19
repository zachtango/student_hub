import React, {Component} from 'react';

import styles from './controller.module.css';


const url = 'https://tamsinfo-b33c7.firebaseio.com/';

class Controller extends Component{
    constructor(props){
        super(props);


        let key = null;
        if(this.props.room === 'Kitchenette'){
            key = 'kitchenette';
        } else if(this.props.room === 'TV Room'){
            key = 'tvRoom';
        } else if(this.props.room === 'buley'){
            key = 'buley';
        }

        this.state ={
            available: true,
            key: key
        };
    }

    componentDidMount(){
        fetch(url + 'roomAvailability/' + this.state.key + '.json')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                available: json
            });
        });
    }

    clickHandler(){
        //console.log('clicked');
        fetch(url + 'roomAvailability/' + this.state.key + '.json', {
            method: 'PUT',
            body: JSON.stringify(!this.state.available),
        }).then(response => {
            //console.log(response);
        });
        
        // switch availability
        this.setState({
            available: !this.state.available
        });
    }

    render(){

        let backgroundColor = null;
        let availability = null;
        if(this.state.available){
            backgroundColor = styles.backgroundGreen;
            availability = "This room is available";
        } else{
            backgroundColor = styles.backgroundRed;
            availability = "This room is not available";
        }

        return(
            <div 
                className={`${styles.Controller} ${backgroundColor}`}
                onClick={this.clickHandler.bind(this)}
            >    
                <p className={styles.room}>{this.props.room}</p>
                <p className={styles.availability}>{availability}</p>
            </div>
        );
    }
}

export default Controller;