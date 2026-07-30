import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface ILead extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'archived';
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    service: { type: String, trim: true },
    budget: { type: String, trim: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'converted', 'archived'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default models.Lead || model<ILead>('Lead', LeadSchema);
