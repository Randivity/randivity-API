/**
 * @memberof module:router~mainRouter~adminRouter
 * @inner
 * @namespace check
 */

/**
 * Main check function
 * @name get /admin/code/check
 * @function
 * @memberof module:router~mainRouter~adminRouter~check
 * @inner
 * @async
 * @param {Object} req
 * @param {Object} res
 * @returns 200 if OK and return list of codes
 * @returns 500 if Internal Server Error
 */
module.exports = async (req, res) => {
  try {
    return res.status(200).json({ message: 'OK' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
