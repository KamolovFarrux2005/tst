const router = require("express").Router();
const Product  = require("../models/product")
router.get("/", async(req,res)=>{
    const product =  await Product.find()
    if(!product){
       return res.status(500).json({success: false})
    }
    console.log(product)
    res.status(200).json(product);
});


router.get("/:id", async(req,res)=> {
    const product = await Product.findById({_id: req.params.id})
    if(!product){
       return res.status(500).json({success: false});
    }
  return res.status(200).send(product);
})



router.post("/new", (req,res)=>{
    const product = new Product({
        title: req.body.title,
        quantity: req.body.quantity,
        barcode: req.body.barcode,
        image: req.body.image,
        sku: req.body.sku,
        category: req.body.category
     })
  
     product.save().then(result => {
        res.send(result)
     }).catch(err => {
        res.json({error: err})
     })
})



module.exports = router