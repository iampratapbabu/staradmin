import React, { Fragment } from 'react';
import cat1 from '../assets/images/category/cat1.jpg'
import cat2 from '../assets/images/category/cat2.jpg'
import cat3 from '../assets/images/category/cat3.jpg'



const SingleCategory =  ({singleCat}) =>{
    return(
        <Fragment>

                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a>
                            <img src={`http://localhost:3200/${singleCat?.image}`} class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">$240.00</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">{singleCat?.title}</a>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>

               
        </Fragment>
    )
};

export default SingleCategory;