const { model } = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema"); // correct path

const OrderModel = model("Order", OrderSchema); // no destructuring, no 'new'
module.exports = { OrderModel };