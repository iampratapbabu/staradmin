import React, { Fragment,useContext } from 'react';
import CategoriesContext from '../context/categories/CategoriesContext';



const SingleCategory =  ({singleCat}) =>{
    const catContext = useContext(CategoriesContext);
    const { mycategory, getAllCategories,allCategories,getSingleCategory } = catContext;

    const detailCategory = (cat_id) =>{
        console.log(cat_id)
        getSingleCategory(cat_id);
    }


 
    return(
        <Fragment>

                {/* <div class="col-12 col-md-4 mb-4">
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
                                {singleCat?.body}
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div> */}
                <div className='row'>
                <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    {/* <h4 className="card-title">Add User</h4> */}
                      <div className="row">
                        <div className="col-md-2"> 
                            <img className="img-sm rounded-circle" src={`http://localhost:3200/${singleCat?.image}`} alt="img" />
                        </div>
                        <div className="col-md-4">
                          {/* <h2>{userProfile.fname}</h2> */}
                              <h5 className='text-muted'>{singleCat?.title}</h5>
                        </div>
                        <div className="col-md-4">
                        <h5 className='text-muted'>{singleCat?.body}</h5>
                        </div>
                        <div className="col-md-2">
                          <button onClick={()=>detailCategory(singleCat._id)} className='btn btn-inverse-info mr-1'>Details</button>
                      </div>

                      </div>
                    
                  </div>
                </div>
              
            </div>
            

            </div>
               
        </Fragment>
    )
};

export default SingleCategory;