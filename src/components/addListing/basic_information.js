import React from 'react';
import {connect} from 'react-redux';
import {buisnessDetailsAcation} from ''
 
import './dist/basic_information.css'

function mapStateToProps(state)
{
  return{
    buisnessDetails:state.buisnessDetails,
   };
}

export default connect(mapStateToProps) (function Basic_information(props){

const {buisnessDetails}=props;

    return(
        <>
        
        {/* Section  */}
       
        <div className="add-listing-section">
                      {/* Headline  */}
                      <div className="add-listing-headline">
                        <h3>
                          <i className="sl sl-icon-doc"></i> Basic Informations
                        </h3>
                      </div>
                      {/* Title  */}
                      <div className="row with-forms">
                        <div className="col-md-12 form-group">
                          <h5>
                            Listing Title{" "}
                            <i
                              className="tip"
                              data-tip-content="Name of your business"
                            ></i>
                          </h5>
                          <input className="search-field form-control" type="text" value={buisnessDetails.businessName} />
                        </div>
                      </div>

                      {/* Row  */}
                      <div className="row with-forms mb-5">
                        {/* Status  */}
                        <div className="col-md-6">
                          <h5>Category</h5>
                          <select className="chosen-select-no-single form-control">
                            <option label="blank">Select Category</option>
                            <option>Eat & Drink</option>
                            <option>Shops</option>
                            <option>Hotels</option>
                            <option>Restaurants</option>
                            <option>Fitness</option>
                            <option>Events</option>
                          </select>
                        </div>

                        {/* Type  */}
                        <div className="col-md-6">
                          <h5>
                            Keywords{" "}
                            <i
                              className="tip "
                              data-tip-content="Maximum of 15 keywords related with your business"
                            ></i>
                          </h5>
                          <input
                          className="form-control"
                            type="text"
                            placeholder="Keywords should be separated by commas"
                          />
                        </div>
                      </div>
                      {/* Row / End  */}
                      </div>
                    {/* Section / End  */}
        </>
    );
})
export default Basic_information;