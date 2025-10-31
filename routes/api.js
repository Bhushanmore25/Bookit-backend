import express from 'express';
import { getAllExperiences, getExperienceById } from '../controllers/experienceController.js';
import { createBooking } from '../controllers/bookingController.js';
import { validatePromoCode } from '../controllers/promoController.js';

const router = express.Router();

router.get('/experiences', getAllExperiences);
router.get('/experiences/:id', getExperienceById);
router.post('/bookings', createBooking);
router.post('/promo/validate', validatePromoCode);

export default router;