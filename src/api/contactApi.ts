// src/api/contactApi.ts

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL;


export async function sendContactForm(data: ContactFormData): Promise<ContactApiResponse> {
    console.log(API_URL,"asfydgsagdisakgk");
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}
