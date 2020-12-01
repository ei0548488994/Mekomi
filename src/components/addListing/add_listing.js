import React, { Component } from "react";
import Basic_information from "./basic_information";
import Location from "./location";
import Gallery from "./gallery";
import Details from "./details";
// import '../style/style.css';
import "./dist/add_listing.css";
import Dasboard_navigation from "../dashboardNavigation/dashboard_navigation";
import Availability from "./avalability";
// import Header from "../header/header";



function Add_listing() {
  return (
    <>
      <div className="Add_listing">
        {/* Wrapper */}
        <div className="wrapper">
          {/* <Header/> */}

          {/* Dashboard  */}
          <div className="dashboard d-flex justify-content-between">
            <Dasboard_navigation />
            {/* Content
   ==================================================  */}
            <div className="dashboard-content">
              {/* Titlebar  */}
              <div id="titlebar">
                <div class="d-flex flex-row justify-content-between">
                  <h2>הוסף עסק</h2>
                  {/* Breadcrumbs  */}
                  <nav className="breadcrumbs ">
                    <ul className=" d-flex justify-content-between">
                     {/*  <li>
                        <a href="#">דף הבית</a>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                      <li>
                        <a href="#">Add Listing</a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <div id="add-listing">
                    <Basic_information />
                    <Location />
                    <Gallery />
                    <Details />
               {/* <Availability/> */}

                    {/* Section  */}
                    <div class="add-listing-section margin-top-45">
                      {/* Headline  */}
                      <div class="add-listing-headline">
                        <h3>
                          <i class="sl sl-icon-book-open"></i> Pricing
                        </h3>
                        {/* Switcher */}
                        <label class="switch">
                          <input type="checkbox" checked />
                          <span class="slider round"></span>
                        </label>
                      </div>

                      {/* Switcher ON-OFF Content  */}
                      <div class="switcher-content">
                        <div class="row">
                          <div class="col-md-12">
                            <table id="pricing-list-container">
                              <tr class="pricing-list-item pattern">
                                <td>
                                  <div class="fm-move">
                                    <i class="sl sl-icon-cursor-move"></i>
                                  </div>
                                  <div class="fm-input pricing-name">
                                    <input type="text" placeholder="Title" />
                                  </div>
                                  <div class="fm-input pricing-ingredients">
                                    <input
                                      type="text"
                                      placeholder="Description"
                                    />
                                  </div>
                                  <div class="fm-input pricing-price">
                                    <input
                                      type="text"
                                      placeholder="Price"
                                      data-unit="USD"
                                    />
                                  </div>
                                  <div class="fm-close">
                                    <a class="delete" href="#">
                                      <i class="fa fa-remove"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <a href="#" class="button add-pricing-list-item">
                              Add Item
                            </a>
                            <a href="#" class="button add-pricing-submenu">
                              Add Category
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Switcher ON-OFF Content / End  */}
                    </div>
                    {/* Section / End  */}

                    <a href="#" class="button preview">
                      Preview <i class="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                {/* Copyrights */}
                <div class="col-md-12">
                  <div class="copyrights">
                    © 2019 Listeo. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
            {/* Content / End  */}
          </div>
          {/* Dashboard / End  */}
        </div>
        {/* Wrapper / End */}
      </div>
    </>
  );
}



export default Add_listing;
