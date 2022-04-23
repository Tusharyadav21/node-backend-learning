const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'OK',
    results: users.length,
    data: {
      users,
    },
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};
exports.createNewUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Server Error',
    message: 'This route is not yet defined',
  });
};
