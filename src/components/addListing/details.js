import React from 'react';



function Details()
{
    return(
        <>
        {/* Section  */}
        <div className="add-listing-section mt-5">
                      {/* Headline  */}
                      <div className="add-listing-headline">
                        <h3>
                          <i className="sl sl-icon-docs"></i> Details
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="form">
                        <h5>Description</h5>
                        <textarea
                          className="form-control WYSIWYG"
                          name="summary"
                          cols="40"
                          rows="6"
                          id="summary"
                          spellcheck="true"
                        ></textarea>
                      </div>

                      {/* Row */}
                      <div className="row with-forms">
                        {/* Phone */}
                        <div className="col-md-4">
                          <h5>
                            Phone <span>(optional)</span>
                          </h5>
                          <input className="form-control" type="text" />
                        </div>

                        {/* Website */}
                        <div className="col-md-4">
                          <h5>
                            Website <span>(optional)</span>
                          </h5>
                          <input className="form-control" type="text" />
                        </div>

                        {/* Email Address */}
                        <div className="col-md-4">
                          <h5>
                            E-mail <span>(optional)</span>
                          </h5>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      {/* Row / End */}

                      {/* Row */}
                      <div className="row with-forms">
                        {/* Phone */}
                        <div className="col-md-4">
                          <h5 className="fb-input">
                            <i className="fa fa-facebook-square"></i> Facebook{" "}
                            <span>(optional)</span>
                          </h5>
                          <input
                          className="form-control"
                            type="text"
                            placeholder="https://www.facebook.com/"
                          />
                        </div>

                        {/* Website */}
                        <div className="col-md-4">
                          <h5 className="twitter-input">
                            <i className="fa fa-twitter"></i> Twitter{" "}
                            <span>(optional)</span>
                          </h5>
                          <input
                          className="form-control"
                            type="text"
                            placeholder="https://www.twitter.com/"
                          />
                        </div>

                        {/* Email Address */}
                        <div className="col-md-4">
                          <h5 className="gplus-input">
                            <i className="fa fa-google-plus"></i> Google Plus{" "}
                            <span>(optional)</span>
                          </h5>
                          <input
                          className="form-control"
                            type="text"
                            placeholder="https://plus.google.com"
                          />
                        </div>
                      </div>
                      {/* Row / End */}

                      {/* Checkboxes */}
                      <h5 className="margin-top-30 margin-bottom-10">
                        Amenities <span>(optional)</span>
                      </h5>
                      <div className="checkboxes in-row margin-bottom-20">
                        <input id="check-a" type="checkbox" name="check" />
                        <label for="check-a">Elevator in building</label>

                        <input id="check-b" type="checkbox" name="check" />
                        <label for="check-b">Friendly workspace</label>

                        <input id="check-c" type="checkbox" name="check" />
                        <label for="check-c">Instant Book</label>

                        <input id="check-d" type="checkbox" name="check" />
                        <label for="check-d">Wireless Internet</label>

                        <input id="check-e" type="checkbox" name="check" />
                        <label for="check-e">Free parking on premises</label>

                        <input id="check-f" type="checkbox" name="check" />
                        <label for="check-f">Free parking on street</label>

                        <input id="check-g" type="checkbox" name="check" />
                        <label for="check-g">Smoking allowed</label>

                        <input id="check-h" type="checkbox" name="check" />
                        <label for="check-h">Events</label>
                      </div>
                      {/* Checkboxes / End */}
                    </div>
                    {/* Section / End */}
        </>
    );
}

export default Details;