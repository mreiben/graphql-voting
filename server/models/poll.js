const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  title: { type: String },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  options: { type: [String] },
  users: { type: [String] }
});

mongoose.model('poll', PollSchema);
