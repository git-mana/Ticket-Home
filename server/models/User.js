import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'client'], default: 'client' },
  password: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await hash(this.password, 10);
  next();
});

// Password comparison method
userSchema.methods.matchPassword = async function(password) {
  return await compare(password, this.password);
};

export default model('User', userSchema);
