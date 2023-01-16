import React, { Fragment, useContext, useState, useEffect } from "react";
import CategoriesContext from "../context/categories/CategoriesContext";
import SingleCategory from "../components/SingleCategory";
import Modal from 'react-bootstrap/Modal';

import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const MyCategoryModal = (props) => {
    const formData = new FormData();
    const catContext = useContext(CategoriesContext);
    const { createCategory,uploadImage} = catContext;

    useEffect(() => {
        console.log("use effect from modal");

    }, []);

    const [category,setCategory] = useState({
        title:"",
        body:"",
        file:{}
    });

    const onChange = (e) => {
        console.log("on change fired");
        setCategory({...category,[e.target.name]:e.target.value});
    }

    const handleImage = (e) => {
        console.log(e.target.files[0]);
        setCategory({...category,file:e.target.files[0]});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("on submit fired");
        formData.append("file", category.file);
        formData.append("title", category.title);
        formData.append("body", category.body);
        //console.log(formData)
        createCategory(formData);
        props.onHide();

    }




    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="modal-90w"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <form className="form-sample" onSubmit={onSubmit}>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="title" placeholder="Title" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="body" placeholder="Body" onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <input type="file" accept=".png .jpeg .jpg" className="form-control" name="file" onChange={handleImage} />
                                </div>
                            </div>
                        </div>
                        <input type="submit" className='btn btn-success'></input>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Categories = () => {
    const catContext = useContext(CategoriesContext);
    const { mycategory, getAllCategories,allCategories } = catContext;

    useEffect(()=>{
        getAllCategories();
    },[])

    const [modalShow, setModalShow] = useState(false);
    const openModal = () => {
        setModalShow(true)
    }
    return (
        <Fragment>
            <p>{mycategory}</p>
            <MyCategoryModal show={modalShow} onHide={() => setModalShow(false)} userval={{ "name": "Tej" }} />
            {/* <Button onClick={demofun}>DemoFunction</Button> */}
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Product Categories <Fab color="primary" size="small" onClick={openModal}><AddIcon /></Fab></h1>
                    <p>
                        All Product Categories will be displayed here You can click on <AddIcon /> icon to
                        Add more categories
                    </p>
                </div>
            </div>
            {/* <SingleCategory /> */}
            <section class="bg-light">
            <div class="container py-5">
            <div class="row">
            {allCategories && allCategories.map(singleCat =>(<SingleCategory key={singleCat._id} singleCat={singleCat}/>))}
            </div>
            
            </div>
        </section>
        </Fragment>

    )
};

export default Categories;