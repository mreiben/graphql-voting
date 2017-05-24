const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  title: { type: String },
  _author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  options: { type: [String] },
  users: { type: [String] }
});

// SongSchema.statics.addLyric = function(id, content) {
//   const Lyric = mongoose.model('lyric');
//
//   return this.findById(id)
//     .then(song => {
//       const lyric = new Lyric({ content, song })
//       song.lyrics.push(lyric)
//       return Promise.all([lyric.save(), song.save()])
//         .then(([lyric, song]) => song);
//     });
// }

PollSchema.statics.addUserToPoll = function(pollId, userId){
  const Poll = mongoose.model('poll');
  const User = mongoose.model('user');

  return this.findById(pollId)
    .then(poll => {
      const user = User.findById(userId)
      poll.users.push(user)
      return poll.save();
    });
}

PollSchema.statics.findUsers = function(id) {
  return this.findById(id)
    .populate('users')
    .then(poll => poll.users);
}

mongoose.model('poll', PollSchema);
