import PromoCode from '../models/PromoCode.js';

export const validatePromoCode = async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ message: 'Promo code is required' });
  }
  try {
    const promoCode = await PromoCode.findOne({ code, isActive: true });
    if (!promoCode) {
      return res.status(404).json({ message: 'Invalid or expired promo code' });
    }
    res.status(200).json({ message: 'Promo code applied', promoCode });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};