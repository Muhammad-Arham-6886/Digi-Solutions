import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

export async function sendLeadNotification(leadData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  const recipient = process.env.NOTIFICATION_EMAIL || 'info@voxdigitalagency.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #8069BF; margin-top: 0;">⚡ New Lead Captured - VOX Digital Agency</h2>
      <p><strong>Name:</strong> ${leadData.name}</p>
      <p><strong>Email:</strong> ${leadData.email}</p>
      <p><strong>Company:</strong> ${leadData.company || 'N/A'}</p>
      <p><strong>Interested Capability:</strong> ${leadData.service || 'General Inquiry'}</p>
      <p><strong>Estimated Budget:</strong> ${leadData.budget || 'N/A'}</p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p><strong>Message / Project Overview:</strong></p>
      <blockquote style="background: #f8fafc; padding: 15px; border-left: 4px solid #8069BF; margin: 0;">
        ${leadData.message}
      </blockquote>
      <p style="color: #64748b; font-size: 12px; margin-top: 20px;">Sent via VOX Digital Agency Web Platform</p>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Vertical Forge Platform" <${process.env.SMTP_USER || 'no-reply@verticalforge.io'}>`,
      to: recipient,
      subject: `New Lead: ${leadData.name} - ${leadData.service || 'Inquiry'}`,
      html: htmlContent,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Failed to send lead email:', error);
    return { success: false, error };
  }
}
