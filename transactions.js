const express = require("express");
const router = express.Router();
const pool = require("../db/index");

// --- All API Routes will go here ---

// Add a transaction
router.post("/add", async (req, res) => {
  try {
    const { type, amount, category } = req.body;

    const result = await pool.query(
      "INSERT INTO transactions (type, amount, category) VALUES ($1, $2, $3) RETURNING *",
      [type, amount, category]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM transactions ORDER BY created_at DESC"
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Delete a transaction
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM transactions WHERE id = $1", [id]);

    res.json({ success: true, message: "Transaction deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
module.exports = router;

