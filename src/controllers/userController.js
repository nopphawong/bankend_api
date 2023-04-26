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
  } catch (err) {
    res.status(400).json({ success: false, message: err })
  }
}

module.exports = { createNewUser }
