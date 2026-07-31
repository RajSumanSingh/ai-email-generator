import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-email-generator-production-e23d.up.railway.app",
});

interface EmailRequest {
  purpose: string;
  recipientName: string;
  recipientEmail: string;
  tone: string;
  length: string;
  keyPoints: string;
}

export const generateEmail = async (
  formData: EmailRequest
) => {
  const response = await API.post(
    "/generate-email",
    formData
  );

  return response.data;
};