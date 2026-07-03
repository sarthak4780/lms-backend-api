const User = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { success, error } = require("../../utils/apiResponse");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return error(res, "Name, email and password are required", 400);
    }

    const exists = await User.findOne({ email });

    if (exists) {
      return error(res, "Email already in use", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return success(
      res,
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      201,
      "User registered successfully"
    );
  } catch (err) {
    return error(res, err.message, 400);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return error(res, "Email and password are required", 400);
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return error(res, "Invalid credentials", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return error(res, "Invalid credentials", 401);
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    return success(
      res,
      {
        token,
        role: user.role,
      },
      200,
      "Login successful"
    );
  } catch (err) {
    return error(res, err.message, 400);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return error(res, "User not found", 404);
    }

    return success(
      res,
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      200,
      "Profile fetched successfully"
    );
  } catch (err) {
    return error(res, err.message, 400);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return error(res, "User not found", 404);
    }

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    return success(
      res,
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      200,
      "Profile updated successfully"
    );
  } catch (err) {
    return error(res, err.message, 400);
  }
};