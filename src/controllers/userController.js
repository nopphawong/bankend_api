const User = require('../models/User')

/**
 * Create new User
 * @route POST /users
 * @access public
 */
const createNewUser = async (req, res) => {
  try {
    const { username, password, name } = req.body

    if (!username || !password || !name) {
      return res
        .status(400)
        .json({ success: false, message: 'All fields are required' })
    }

    // NOTE: Check duplicate.
    const duplicate = await User.findOne({ username }).lean().exec()

    if (duplicate) {
      return res
        .status(409)
        .json({ success: false, message: 'Duplicate Username' })
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err })
  }
}

module.exports = { createNewUser }
