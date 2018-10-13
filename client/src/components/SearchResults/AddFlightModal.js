import React, { Component } from "react";

class AddFlightModal extends Component {

    state = {
        remarks: "",

    };

    handleSubmit = event => {
        console.log("submit");
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log("handleInputChange: " + name + " / " + value);
        this.setState({
          [name]: value
        });
    }

    render() {

        //added 10/9
        //const { component: Component, ...props } = this.props
    
        return (

            <span>
                <button
                className="btn btn-primary btn-sm float-right "
                data-toggle="modal" 
                data-target="#addFlightModal"
                >
                Add Flight
                </button>

                <div className="modal fade" id="addFlightModal" tabIndex="-1" role="dialog" aria-labelledby="addFlightModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="addFlightModal">Add Flight</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            
                            <div className="modal-body">

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Date</span>
                                    </div>
                                    <input 
                                        name="flight_date"
                                        type="date" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Date"
                                        value = {this.state.flightDate}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Aircraft</span>
                                    </div>
                                    <input 
                                        name="remarks"
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="remarks"
                                        value = {this.state.remarks}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Day</span>
                                    </div>
                                    <input 
                                        name="day"
                                        type="number" step="0.1" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Day"
                                        value = {this.state.dayhours}
                                    />
                                </div>
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Night</span>
                                    </div>
                                    <input 
                                        name="night"
                                        type="number" step="0.1"
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Night"
                                        value = {this.state.nighthours}
                                    />
                                </div>

                                 <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Actual</span>
                                    </div>
                                    <input 
                                        name="actual"
                                        type="number" step="0.1"
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Actual"
                                        value = {this.state.actualhours}
                                    />
                                </div>

                                 <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Simulated</span>
                                    </div>
                                    <input 
                                        name="simulated"
                                        type="number" step="0.1"
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Simulated"
                                        value = {this.state.simulatedhours}
                                    />
                                </div>
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Total</span>
                                    </div>
                                    <input 
                                        name="total"
                                        type="number" step="0.1"
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Total"
                                        value = {this.state.totalhours}
                                    />
                                </div>
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Landings Day</span>
                                    </div>
                                    <input 
                                        name="landingsday"
                                        type="number" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="LandingsDay"
                                        value = {this.state.landingsDay}
                                    />
                                </div>
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Landings Night</span>
                                    </div>
                                    <input 
                                        name="landingsNight"
                                        type="number" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="LandingsNight"
                                        value = {this.state.landingsNight}
                                    />
                                </div>
                                    
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >From</span>
                                    </div>
                                    <input 
                                        name="from"
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="From"
                                        value = {this.state.from}
                                    />
                                </div>

                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >To</span>
                                    </div>
                                    <input 
                                        name="to"
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="To"
                                        value = {this.state.to}
                                    />
                                </div>

                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Route</span>
                                    </div>
                                    <input 
                                        name="route"
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Route"
                                        value = {this.state.route}
                                    />
                                </div>
                                                                
                                {/* {
                                    "remarks": "test landings",
                                    "flight_day": 0.6,
                                    "flight_night": 0.4,
                                    "flight_actual": 0.3,
                                    "flight_simulated": 0.7,
                                    "id": 5,
                                    "date": "2017-12-02T00:00:00.000Z",
                                    "from": "47N",
                                    "to": "47N",
                                    "route": "",
                                    "landingsDay": 1,
                                    "landingsNight": 0,
                                    "flightTime": 2,
                                    "aircraft": {
                                    "_id": "5bb410fc79d91261541888ac"
                                    },
                                    "user": {
                                    "_id": "5bb13f3f768c0666183b605e"
                                    }
                                } */}

                            </div>

                            <div className="modal-footer">
                                {/* Close Button */}
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* Submit Button */}
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>

            </span>
        )
    }
}

export default AddFlightModal;
