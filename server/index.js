const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vertical_forge';

app.use(cors());
app.use(express.json());

// MongoDB Schema Definitions
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  service: String,
  budget: String,
  message: String,
  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now },
});

const ConsultationSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  preferredDate: String,
  preferredTime: String,
  topic: String,
  notes: String,
  createdAt: { type: Date, default: Date.now },
});

const SubscriberSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.model('Lead', LeadSchema);
const Consultation = mongoose.model('Consultation', ConsultationSchema);
const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('⚡ Connected to MongoDB Database'))
  .catch((err) => console.warn('MongoDB Connection Warning:', err.message));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Vertical Forge Express Backend API', version: '1.0.0' });
});

// Contact Lead Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    const lead = await Lead.create({ name, email, phone, company, service, budget, message });
    return res.status(201).json({ success: true, message: 'Lead captured successfully', leadId: lead._id });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Consultation Booking Endpoint
app.post('/api/consultation', async (req, res) => {
  try {
    const { name, email, company, preferredDate, preferredTime, topic, notes } = req.body;
    if (!name || !email || !preferredDate || !preferredTime || !topic) {
      return res.status(400).json({ success: false, message: 'All booking fields are required.' });
    }

    const consultation = await Consultation.create({ name, email, company, preferredDate, preferredTime, topic, notes });
    return res.status(201).json({ success: true, message: 'Consultation booked successfully', id: consultation._id });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Newsletter Endpoint
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email required.' });

    await Subscriber.create({ email });
    return res.status(200).json({ success: true, message: 'Subscribed successfully.' });
  } catch (err) {
    if (err.code === 11000) return res.status(200).json({ success: true, message: 'Already subscribed.' });
    return res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Vertical Forge Express API running on port ${PORT}`);
});
