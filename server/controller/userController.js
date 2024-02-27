const userModel=require('../Models/userSchema')
const AUTH_KEY='ayituhcyednap'
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const signIn = async function (req, res) {
    try {
      const data = req.body;
  
      const hashedPassword = await new Promise((resolve, reject) => {
        try {
          bcrypt.hash(data.password, 10, (err, hash) => {
            if (!err) {
              resolve(hash);
            } else {
              reject(err);
            }
          });
        } catch (err) {
          reject(err);
        }
      });
  
      // Update the data with the hashed password
      data.password = hashedPassword;
  
      const createdUser = await userModel.create(data);
  
      const token = jwt.sign({ _id: createdUser._id }, AUTH_KEY);

  
      // Send a response if needed
      res.json({ success: true, token:token });
    } catch (err) {
      // Handle errors here
      console.error(err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  

const logIn=async function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  
  try {
      const userValue = await userModel.findOne({ email: email });
  
      if (userValue) {
          const isPasswordMatch = await new Promise((resolve, reject) => {
        try {
        bcrypt.hash(password,userValue.password ,(result,err)=> {
            if (!err) {
              resolve(result);
            } else {
              reject(err);
            }
          });
        } catch (err) {
          reject(err);
        }
      });
  
          if (isPasswordMatch) {
              const token = await jwt.sign({ _id: userValue._id }, AUTH_KEY);
              res.json({ success: true, token: token });
          } else {
              res.json({ success: false, message: 'Invalid password' });
          }
      } else {
          res.json({ success: false, message: 'User not found' });
      }
  } catch (error) {
      // Handle any potential errors, e.g., database connection issues
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
module.exports={signIn,logIn}