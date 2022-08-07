const Product = require('../models/product.model');

module.exports ={
    //function to create a product list
    createProduct:(req,res) =>{
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch(()=>res.status(400).json({message:'something went wrong with createNewProduct',error:err}));
    },

};

