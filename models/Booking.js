import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    referenceId: { type: String, required: true, unique: true },
    experience: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Experience',
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;