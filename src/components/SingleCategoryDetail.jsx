import React, { Fragment, useContext } from 'react';
import CategoriesContext from '../context/categories/CategoriesContext';



const SingleCategoryDetail = () => {
    const catContext = useContext(CategoriesContext);
    const { mycategory, getAllCategories, allCategories, singleCategory,deleteSingleCategory } = catContext;

    const deleteCat = (cat_id) =>{
        deleteSingleCategory(cat_id)
    }
    
    if (singleCategory == null) return (<h2>Please select a Category</h2>)
    return (
        <Fragment>
            <section class="bg-light">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-9 col-md-9 mb-9">
                            <div class="card h-50 ml-5">
                                <a>
                                    <img src={`http://localhost:3200/${singleCategory?.image}`} width="300" height="400" class="card-img-top" alt="..." />
                                </a>
                                <div class="card-body">
                                    <div className='col-md-4'>
                                    <img src={`http://localhost:3200/${singleCategory?.image}`} width="50" height="50" class="card-img-top" alt="..." />
                                    <img src={`http://localhost:3200/${singleCategory?.image}`} width="50" height="50" class="card-img-top" alt="..." />
                                    <img src={`http://localhost:3200/${singleCategory?.image}`} width="50" height="50" class="card-img-top" alt="..." />
                                    <img src={`http://localhost:3200/${singleCategory?.image}`} width="50" height="50" class="card-img-top" alt="..." />
                                    
                                    </div>
                                    <a href="shop-single.html" class="h2 text-decoration-none text-dark">{singleCategory?.title}</a>
                                    <p class="card-text">
                                        {singleCategory?.body}
                                    </p>
                                    <p class="text-muted">Reviews (24)</p>
                                    <div className="col-md-6">
                                        <button className='btn btn-inverse-primary  mr-1'>Edit</button>
                                        <button onClick={()=>deleteCat(singleCategory?._id)} className='btn btn-inverse-danger  mr-1'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default SingleCategoryDetail;