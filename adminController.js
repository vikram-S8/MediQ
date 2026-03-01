const User = require("../models/User");
const Request = require("../models/Request");

exports.getAdminOverview = async (req, res) => {
  try {
    const doctors = await User.find({ role: "Doctor" });

    const result = await Promise.all(
      doctors.map(async (doc) => {
        const requests = await Request.find({
          currentStage: "Admin"
        });

        return {
          name: doc.name || "Doctor",
          requests
        };
      })
    );

    res.json(result);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};