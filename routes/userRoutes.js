const fs = require('fs');
const express = require('express');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'OK',
    results: users.length,
    data: {
      users,
    },
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};
const createNewUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};

const router = express.Router();

router.route('/').get(getAllUsers).post(createNewUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
