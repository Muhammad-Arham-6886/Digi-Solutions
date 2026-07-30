import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface ISubscriber extends Document {
  email: string;
  source?: string;
  createdAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    source: { type: String, default: 'footer_newsletter' },
  },
  { timestamps: true }
);

export default models.Subscriber || model<ISubscriber>('Subscriber', SubscriberSchema);
