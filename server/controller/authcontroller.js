const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usermodel = require("../model/user");

const singup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await usermodel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User is already exist", success: false });
    }
    const Usermodel = new usermodel({ name, email, password });
    Usermodel.password = await bcrypt.hash(password, 10);
    await Usermodel.save();
    res.status(201).json({ message: "singup successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "auth faild email or password is wrong",
        success: false,
      });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(403).json({
        message: "auth faild email or password is wrong",
        success: false,
      });
    }
    const token = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECERT,
      { expiresIn: "24h" }
    );

    res.status(200).json({ message: "login success", success: true, token,user });

  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};

module.exports = { singup, login };
