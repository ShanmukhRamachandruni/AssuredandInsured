import clientModel from '../models/clientModel.js';




export const getCustomerController = async (req, res) => {
  try {
    const customers = await clientModel.find({});
    if (customers.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No customers found",
      })

    }
    res.status(200).send({
      success: true,
      counTotal: customers.length,
      message: "All Customers ",
      customers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting customers",
      error: error.message,
    });
  }
};
export const getSingleCustomerController = async (req, res) => {
  try {
    const customer = await clientModel.findById(req.params.pid).select("-photo");
    if (customer.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No customers found",
      })

    }
    res.status(200).send({
      success: true,
      
      message: "Single Customer ",
      customer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting customers",
      error: error.message,
    });
  }
};
export const productPhotoController = async (req, res) => {
  try {
    const product = await clientModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};
