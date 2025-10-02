/**
 * @route GET /api/comments/
 * @description Get all comments
 * @returns {Object[]} 200 - An array of comment objects
 * @returns {Error} 500 - Failed to fetch comments
 */

/**
 * @route DELETE /api/comments/:id
 * @description Delete a comment by ID
 * @param {string} id - The ID of the comment to delete
 * @returns {Object} 200 - Success message
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Failed to delete comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please help me write the routes for comments

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});