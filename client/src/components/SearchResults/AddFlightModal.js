import React, { Component } from "react";
import API from "../../utils/API";

class AddFlightModal extends Component {

    state = {
        flightDate: "",
        remarks:"",
        dayhours: 0,
        nighthours: 0,
        actualhours: 0,
        simulatedhours: 0,
        totalhours: 0,
        landingsDay: 0,
        landingsNight: 0,
        from: "",
        to: "",
        route:""
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


//     createSelectItems() {
//         let items = [];         
//         for (let i = 0; i <= this.props.results; i++) {             
//              items.push(<option key={i} value={this.props.results[i].aircraft.ID}>{this.props.results[i].aircraft.ID}</option>);   
//              //here I will be creating my options dynamically based on
//              //what props are currently passed to the parent component
//         }
//         return items;
//     }  
   
//    onDropdownSelected(e) {
//        console.log("THE VAL", e.target.value);
//        //here you will see the current selected value of the select input
//    }


    handleSubmit = event => {
        event.preventDefault();
        console.log("Entered handleSubmit()");
        API.postflightsForUser({
            date: this.state.flightDate,
            remarks: this.state.remarks,
            flight_day: this.state.dayhours,
            flight_night: this.state.nighthours,
            flight_simulated: this.state.simulatedhours,
            flight_actual: this.state.actualhours,
            from: this.state.from,
            to: this.state.to,
            route: this.state.route,
            landingsDay: this.state.landingsDay,
            landingsNight: this.state.landingsNight,
            user: this.props.pilot
         })
        .then(
    
            res => {
                
                console.log(JSON.stringify(res.data));
               // this.loadBooks();
               this.setState({
                    flightDate: res.data.date,
                    remarks:res.data.remarks,
                    dayhours: res.data.flight_day,
                    nighthours: res.data.flight_night,
                    actualhours: res.data.flight_actual,
                    simulatedhours: res.data.flight_simulated,
                    landingsDay: res.data.landingsDay,
                    landingsNight: res.data.landingsNight,
                    from: res.data.from,
                    to: res.data.to,
                    route: res.data.route,
              });
              this.props.latest(this.props.pilot);
            }
        )
        .catch(err => console.log(err));
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
                                        name="flightDate"
                                        type="date" 
                                        className="form-control" 
                                        onChange={this.handleInputChange} 
                                        aria-label="Date"
                                        value = {this.state.flightDate}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Remarks</span>
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

                                <div>   

                                    {/* {console.log(this.props.results.from)} */}
                                    {
                                        this.props.tailNumbers.map(a => (
                                                 <li className = "list-group-item">
                                                     {a.tNum}
                                                 </li> )  
                                         )
                                    }   
                                    {/* {this.props.tailNumbers()} */}

                                    {/* <label>
                                            Pick your favorite flavor:
                                            <select value={this.state.remarks} >
                                                <option value="grapefruit">Grapefruit</option>
                                                <option value="lime">Lime</option>
                                                <option value="coconut">Coconut</option>
                                                <option value="mango">Mango</option>
                                            </select>
                                    </label>     */}

                                 {/* <input type="select" onChange={this.onDropdownSelected} label="Multiple Select" multiple>
                                        {this.createSelectItems()}
                                 </input>        */}
                                   

                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >Day</span>
                                    </div>
                                    <input 
                                        name="dayhours"
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
                                        name="nighthours"
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
                                        name="actualhours"
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
                                        name="simulatedhours"
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
                                        name="totalhours"
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
                                        name="landingsDay"
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
