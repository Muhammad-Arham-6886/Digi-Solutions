import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IConsultation extends Document {
  name: string;
  email: string;
  company?: string;
  preferredDate: string;
  preferredTime: string;
  topic: string;
  notes?: string;
  createdAt: Date;
}

const ConsultationSchema = new Schema<IConsultation>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, trim: true },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    topic: { type: String, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

export default models.Consultation || model<IConsultation>('Consultation', ConsultationSchema);
