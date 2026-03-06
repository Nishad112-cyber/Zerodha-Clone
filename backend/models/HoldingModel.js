const { model } = require("mongoose");
const { HoldingSchema } = require("../schemas/holdingSchema");

const HoldingModel = model("Holding", HoldingSchema);

module.exports = { HoldingModel };