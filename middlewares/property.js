const { Router } = require('express');
const { property } = require('../db');


// const Character = require('../db/models/Character');
const router = Router();

router.get('/', async(req, res) => {
  const {limit } = (req.query);
 
  try {
    const data= await property.findAll({ limit });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



module.exports = router;