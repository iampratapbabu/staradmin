import react, { Fragment } from 'react';

const LastSection = () =>{
    return (
        <Fragment>
                        <div class="row">
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-0">Recent Events</h4>
                    <div class="d-flex py-2 border-bottom">
                      <div class="wrapper">
                        <small class="text-muted">Mar 14, 2019</small>
                        <p class="font-weight-semibold text-gray mb-0">Change in Directors</p>
                      </div>
                      <small class="text-muted ml-auto">Edit event</small>
                    </div>
                    <div class="d-flex py-2 border-bottom">
                      <div class="wrapper">
                        <small class="text-muted">Mar 14, 2019</small>
                        <p class="font-weight-semibold text-gray mb-0">Other Events</p>
                      </div>
                      <small class="text-muted ml-auto">Edit event</small>
                    </div>
                    <div class="d-flex py-2 border-bottom">
                      <div class="wrapper">
                        <small class="text-muted">Mar 14, 2019</small>
                        <p class="font-weight-semibold text-gray mb-0">Quarterly Report</p>
                      </div>
                      <small class="text-muted ml-auto">Edit event</small>
                    </div>
                    <div class="d-flex pt-2">
                      <div class="wrapper">
                        <small class="text-muted">Mar 14, 2019</small>
                        <p class="font-weight-semibold text-gray mb-0">Change in Directors</p>
                      </div>
                      <small class="text-muted ml-auto">Edit event</small>
                    </div>
                    <a class="d-block mt-5" href="#">Show all</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between pb-3">
                      <h4 class="card-title mb-0">Activities</h4>
                      <p class="mb-0 text-muted">20 finished, 5 remaining</p>
                    </div>
                    <ul class="timeline">
                      <li class="timeline-item">
                        <p class="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                        <p class="event-time">Just now</p>
                      </li>
                      <li class="timeline-item">
                        <p class="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                        <p class="event-time">Just now</p>
                      </li>
                      <li class="timeline-item">
                        <p class="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                        <p class="event-time">Just now</p>
                      </li>
                      <li class="timeline-item">
                        <p class="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                        <p class="event-time">Just now</p>
                      </li>
                      <li class="timeline-item">
                        <p class="timeline-content"><a href="#">Ben Tossell</a> assign you a task</p>
                        <p class="event-time">Just now</p>
                      </li>
                    </ul>
                    <a class="d-block mt-3" href="#">Show all</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-0">People Also Watch</h4>
                    <div class="table-responsive">
                      <table class="table table-stretched">
                        <thead>
                          <tr>
                            <th>Symbol</th>
                            <th>Last Price</th>
                            <th>Change</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p class="mb-1 text-dark font-weight-medium">NFLX</p><small class="font-weight-medium">Netflix, Inc.</small>
                            </td>
                            <td class="font-weight-medium">$250.00</td>
                            <td class="text-success font-weight-medium">+12.64</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-1 text-dark font-weight-medium">TSLA</p><small class="font-weight-medium">Tesla, Inc.</small>
                            </td>
                            <td class="font-weight-medium">$458.00</td>
                            <td class="text-danger font-weight-medium">-14.53</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-1 text-dark font-weight-medium">GOOG</p><small class="font-weight-medium">Alphabet, Inc.</small>
                            </td>
                            <td class="font-weight-medium">$250.00</td>
                            <td class="text-danger font-weight-medium">+12.64</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-1 text-dark font-weight-medium">AMZN</p><small class="font-weight-medium">Amazon.com, Inc.</small>
                            </td>
                            <td class="font-weight-medium">$546.00</td>
                            <td class="text-success font-weight-medium">+24.34</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a class="d-block mt-3" href="#">Show all</a>
                  </div>
                </div>
              </div>
            </div> 
        </Fragment>
    )
};

export default LastSection;