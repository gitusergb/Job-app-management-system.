
const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`,(err,decoded)=>{
      if(decoded){
          console.log(decoded);
          req.body.userID=decoded.userID
          req.body.username=decoded.username
          next();
      }else{
          res.send({ msg:"You are not Authorised"})
      }
  });
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
