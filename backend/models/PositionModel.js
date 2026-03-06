const { model } = require("mongoose");
const { PositionSchema } = require("../schemas/PositionSchema"); // correct path

const PositionModel = model("Position", PositionSchema); // no 'new'

module.exports = { PositionModel };