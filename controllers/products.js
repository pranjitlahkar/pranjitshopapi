const Product = require("../models/productModel")


const getAllProducts = async (req, res) => {


    const { company, name, featured, sort ,select} = req.query;

    const queryObject = {}

    if (company) {
        queryObject.company = { $regex: company, $options: "i" }
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }
    if (featured) {
        queryObject.featured = featured
    }


    let apiData = Product.find(queryObject)

    if (sort) {

        // let FixSort = sort.replace(",", " ")
        let FixSort = sort.split(",").join(" ")
        apiData = apiData.sort(FixSort)
    }
    if (select) {
        let FixSelect = select.split(",").join(" ")
        apiData = apiData.select(FixSelect)
    }

     let page= Number(req.query.page) || 1
     let limit= Number(req.query.limit) || 10
     let skip= (page - 1)*limit ;


    const myData = await apiData.skip(skip).limit(limit)
    res.status(200).json({ myData  , Nbhits:myData.length })

}

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).sort("name -price")
    res.status(200).json({ myData , Nbhits:myData.length })
}
module.exports = { getAllProducts, getAllProductsTesting }