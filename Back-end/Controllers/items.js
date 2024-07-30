

// controllers/userController.js

const get = (req, res) => {
    console.log('from get');
    res.send('Response from get');
  };
  
  module.exports = { get };
  