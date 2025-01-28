const mongoose = require('mongoose')

const stuSchema = new mongoose.Schema({
 rollno : 'String',
  name : 'String',
  city : 'String',
  fees : 'Number'
});

module.exports= mongoose.model('Model', stuSchema);
 