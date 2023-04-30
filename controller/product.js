const model = require("../model/product");

const Product = model.Product;

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.json(newProduct);
  } catch (error) {
    res.json(error);
  }
};

exports.gelAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json(error);
  }
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.json(error);
  }
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    res.json(error);
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    res.json(error);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.json(product);
  } catch (error) {
    res.json(error);
  }
};
