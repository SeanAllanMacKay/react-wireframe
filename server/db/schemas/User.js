import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    phoneNumber: String,
    password: String,
    accountType: String,
    privateAccount: Boolean,
    profile: {
      description: String,
      phone: String,
      email: String,
      profilePicture: String,
      coverPicture: String,
      displayName: String,
      website: String,
      address: String,
    },
    organizations: [String],
    projects: [String],
  },
  { collection: 'users' }
);

mongoose.model('User', userSchema);

export default mongoose.model('User');
