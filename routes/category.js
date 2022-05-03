const router = require("express").Router();
const Category = require("../models/category")
router.get("/", async(req,res)=>{
    const categoryList = await Category.find().populate("Product");
    if(!categoryList){
        res.status(500).json({success: false})
    }

    console.log(categoryList)
    res.status(200).send(categoryList)
})


router.get('/:id', async (req,res,next) =>{
    const categoryFind = await Category.findById(req.params.id);
    if(!categoryFind){
        return res.status(500).json({success: false})
    }
    res.send(categoryFind)
});



router.post("/new", async (req,res,next)=>{
    let newCategory = new Category({
        name: req.body.name
    });

    newCategory.save().then(createdCategory => {
        res.status(201).json(createdCategory)
    }).catch(err => {
        res.json({
            error: err,
            success: false
        })
    })
});


module.exports = router