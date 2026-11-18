/**
 * Contact Service — Direct Background Email Dispatch (Option 1)
 * 
 * Sends contact enquiries directly over HTTPS in the background
 * to the configured recipient email address without opening any local email client.
 * In Phase 2, this function can easily be pointed to an internal Node.js backend.
 */

export const CONTACT_RECIPIENT_EMAIL =
  import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL || 'hr@gtsinfo.in';

/**
 * Validates contact form data
 * @param {Object} data - { name, email, phone, subject, message }
 * @returns {Object} errors - Validation error messages per field
 */
export function validateContactForm(data) {
  const errors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = 'Full Name is required.';
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Email Address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.subject || !data.subject.trim()) {
    errors.subject = 'Enquiry Subject is required.';
  }

  if (!data.message || !data.message.trim()) {
    errors.message = 'Message content is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  if (data.phone && data.phone.trim() && !/^[+0-9\s\-()]{7,20}$/.test(data.phone.trim())) {
    errors.phone = 'Please provide a valid phone number or leave blank.';
  }

  return errors;
}

/**
 * Sends enquiry directly to recipient email in the background via direct HTTP API
 * @param {Object} enquiry - { name, email, phone, subject, message }
 * @returns {Promise<{ success: boolean, message?: string, activationNotice?: string }>}
 */
export async function sendContactEmail({ name, email, phone, subject, message }) {
  const recipient = CONTACT_RECIPIENT_EMAIL.trim();

  const payload = {
    name: name.trim(),
    email: email.trim(),
    phone: phone && phone.trim() ? phone.trim() : 'Not provided',
    subject: subject.trim(),
    message: message.trim(),
    _subject: `New Enquiry from ${name.trim()} - GTSInfo`,
    _replyto: email.trim(),
    _template: 'table',
    _captcha: 'false',
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    // Check if FormSubmit requires initial one-time mailbox activation
    if (result && typeof result.message === 'string' && result.message.toLowerCase().includes('activation')) {
      return {
        success: true,
        activationNotice:
          `An activation link was dispatched to ${recipient}. Please click it once to activate direct mailbox forwarding.`,
      };
    }

    if (result && (result.success === 'true' || result.success === true)) {
      return { success: true };
    }

    // Even if result format varies, consider successful if HTTP 200
    if (response.ok) {
      return { success: true };
    }

    throw new Error(result.message || 'Failed to dispatch message.');
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}
