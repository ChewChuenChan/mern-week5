import { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) =>{
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/product",{
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div>
            <header className='display-3 text-center'>
                Product Manager
            </header>
            <form className="m-3"onSubmit={submitHandler}>
                <div className ="mb-3">
                    <label className="form-label">
                        Title:
                    </label>
                    <input 
                    className="form-control"
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                    name="title"
                    type="text"
                    />
                </div>
                <div className ="mb-3">
                    <label className="form-label">
                        Price:
                    </label>
                    <input 
                    className="form-control"
                    onChange={(e)=> setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                    />
                </div>
                <div className ="mb-3">
                    <label className="form-label">
                        Description:
                    </label>
                    <input 
                    className="form-control"
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                    />
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            
        </div>
    )
}

export default ProductForm;