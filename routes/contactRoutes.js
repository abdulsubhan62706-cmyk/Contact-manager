const express = require("express");

const {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

// GET all contacts
router.get("/", getContacts);

// CREATE a contact
router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;