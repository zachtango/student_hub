import React, { Component } from 'react';

import styles from './clubForm.module.css';

const url = 'https://tamsinfo-b33c7.firebaseio.com/clubEvents/';

class ClubForm extends Component {
    constructor(props){
        super(props);

        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            club: 'CSO',
        };
    }

    changeHandler(valueType, event){
        let state = {};
        state[valueType] = event.target.value;

        this.setState(state);
    }

    submitHandler(event){
        fetch(url + `${this.state.club}/${this.state.event}.json`, {
            method: 'PUT',
            body: JSON.stringify({
               date: this.state.date,
               time: this.state.time
            })
        });

        console.log(this.state);
        event.preventDefault();
    }

    render(){

        let months = [];
        for(let i = 1; i <= 12; ++i){
            months.push(
                <option key={i} value={i}>{i}</option>
            );
        }

        return(
            <div className={styles.ClubForm}>
                <h3>Add a club event to Alexa</h3>
                <form className={styles.Form} onSubmit={this.submitHandler}>
                    <label>
                        <span className={styles.label}>Club:</span>
                        <select value={this.state.value} onChange={this.changeHandler.bind(this, 'club')} > 
                            <option value="CSO">CSO</option>
                            <option value="JETS">JETS</option>
                            <option value="RO">RO</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </label>

                    <br />

                    <label>
                        <span className={styles.label}>Event:</span>
                        <input type='text' onChange={this.changeHandler.bind(this, 'event')} required/>
                    </label>

                    <br />

                    <span className={styles.label}>Date:</span>
                    <input type='date' onChange={this.changeHandler.bind(this, 'date')} required/>

                    <br />

                    <span className={styles.label}>Time:</span>
                    <input type='time' onChange={this.changeHandler.bind(this, 'time')} required/>

                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

export default ClubForm;