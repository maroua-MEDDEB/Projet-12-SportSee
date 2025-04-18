const express = require("express");
const idx = require("idx");

const router = express.Router();

const {
  getUserById,
  getUserActivityById,
  getUserAverageSession,
  getUserPerformance,
  getAllUsers,
} = require("./models");

const { handleNoUserData } = require("./middleware");

// localhost:3000/user/01
router.get("/user/:id", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserById(Number(userId));

  return handleNoUserData(res, userData);
});

router.get("/user/:id/activity", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserActivityById(Number(userId));

  return handleNoUserData(res, userData);
});

router.get("/user/:id/average-sessions", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserAverageSession(Number(userId));

  return handleNoUserData(res, userData);
});

router.get("/user/:id/performance", (req, res) => {
  const userId = idx(req, (_) => _.params.id);
  const userData = getUserPerformance(Number(userId));

  return handleNoUserData(res, userData);
});
// lazemni route yjibou les deux utlisateurs
router.get("/get_all_users", (req, res) => {
  const result = getAllUsers();
  return handleNoUserData(res, result);
});

module.exports = router;
