import Booking from '../models/Booking.js';
import Experience from '../models/Experience.js';
import { nanoid } from 'nanoid';

export const createBooking = async (req, res) => {
  const { fullName, email, bookingDate, quantity, totalAmount, experienceId } = req.body;

  if (!fullName || !email || !bookingDate || !quantity || !totalAmount || !experienceId) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const experienceExists = await Experience.findById(experienceId);
    if (!experienceExists) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    const booking = new Booking({
      fullName,
      email,
      bookingDate: new Date(bookingDate),
      quantity,
      totalAmount,
      experience: experienceId,
      referenceId: `BK-${nanoid(8).toUpperCase()}`,
    });

    const createdBooking = await booking.save();
    res.status(201).json({ message: 'Booking confirmed!', booking: createdBooking });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};