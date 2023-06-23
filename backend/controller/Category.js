
const { Category } = require("../model/Category");

exports.fetchAllCategories = async (req, res) => {
   try {
    const categories = await Category.find({}).exec()
    res.status(200).json(categories)
   } catch (error) {
    res.status(400).json(error)
   }
  };

  
  exports.createCategory = async (req,res) => {
    const category = new Category(req.body)
    try {
        const doc = await category.save()
        res.status(200).json(doc)
    } catch (error) {
        res.status(400).json(error)
    }
  }