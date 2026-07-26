import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
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