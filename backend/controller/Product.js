const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.fetchAllProducts = async (req, res) => {
  // here we will need for querystring as we have made it on frontend while making api

  let query = Product.find({});
  let totalProductsQuery = Product.find({});

  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductsQuery = totalProductsQuery.find({
      category: req.query.category,
    });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
  }
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: [req.query._order] });
  }
  
  const totaldocs = await totalProductsQuery.count().exec();
  console.log({ totaldocs });

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totaldocs);
    res.status(200).json(docs);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

exports.fetchProductById = async (req,res) => {
    const {id} = req.params
    try {
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateProduct = async (req,res) => {
    const {id} = req.params
    try {
        const product = await Product.findByIdAndUpdate(id,req.body, {new:true})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    }
}
