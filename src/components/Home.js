import React, { Component } from 'react';
import $ from 'jquery';


class Home extends Component{
  componentDidMount = () => {
    // $('.carousel').carousel({
    //       interval: 3000
    //   });
    //
    //   $('.carousel').carousel('cycle');
  }
  render(){
    return(
      <div>
      <div class="album py-5 bg-light">
      
              <div class="container">
                <h1>Coming Soon</h1>
                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                      <img class="card-img-top" src="images/Collete.jpg" data-holder-rendered="true" />
                        <div class="card-body">
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                          <img class="card-img-top" src="images/Alita.jpg" data-holder-rendered="true" />
                            <div class="card-body">
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                          <img class="card-img-top" src="images/TheFavorite.jpg" data-holder-rendered="true" />
                            <div class="card-body">
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="card mb-4 box-shadow">
                            <img class="card-img-top" src="images/Frontrunner.jpg" data-holder-rendered="true" />
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                  <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                              <img class="card-img-top" src="images/Bohemian.jpg" data-holder-rendered="true" />
                                <div class="card-body">
                                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="images/Bumblebee.jpg" data-holder-rendered="true" />
                                  <div class="card-body">
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                      <div class="d-flex justify-content-between align-items-center">
                                      <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}
export default Home;
