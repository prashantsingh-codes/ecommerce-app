import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {

    const token = req.headers.token;

    if (!token) {
      return res.json({ success: false, message: "Unauthorized access" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Unauthorized access" });
    }

    next();

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;