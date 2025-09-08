const Usermodel = require("../Model/Usermodel");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const saveUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Usermodel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
}
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usermodel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
      const token = await jwt.sign({id:user._id,email:user.email}, "Our_secret_key",{expiresIn:"1d"})
    res.status(200).json({ message: "User login successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

module.exports = { saveUser, loginUser };
