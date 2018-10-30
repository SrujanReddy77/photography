import React from 'react';
import Com from '../../assests/office.jpg';


class Contact extends React.Component {
    constructor(props){
        super(props);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
       loaded: false
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            loaded: true
        });
    }

    render(){
        return (
            <div className="Contact">
                <img src={Com} alt="" />
                <div className="cline"></div>
                <h1>CONTACT US</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                  <input type="text" max="18" min="4" placeholder="Name" required/>
                    <label>Email:</label>
                  <input type="email" placeholder="Email" required/>
                  <textarea placeholder="...describe your opnion"></textarea>
                  <input type="submit" value="Submit"/>
                </form>
                {this.state.loaded ? <div className="res">Thank you. Your response has been recorded.</div> : null}
            </div>
        )
    }
}

export default Contact;