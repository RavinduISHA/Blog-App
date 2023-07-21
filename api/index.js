const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const DBUrl = 'mongodb+srv://ravindu:cYl8P7voot4ziI64@clusterblogapp.evnu3l8.mongodb.net/?retryWrites=true&w=majority';

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected!');
  })
  .catch((error) => {
    console.error('Error: ',error);
  })

// endpoints
// register
app.post('/register', async (req,res) => {
  const { username, password } = req.body;
  try {
    const userData = await User.create({
      username,
      password:bcrypt.hashSync(password, salt),
    });
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Internal server error'});
  }
});

// login
app.post('/login', async (res, req) => {
  const { username, password } = req.body;
  try {
    const userData = await User.findOne({username});
    // const Password = bcrypt.compareSync(password, userData.password);
    res.json(userData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
