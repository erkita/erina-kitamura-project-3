import jwt from "jsonwebtoken";

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (token) {
      let decryptedData = jwt.verify(token, "secret");
      req.userId = decryptedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authentication;
