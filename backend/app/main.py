import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI


# Load environment variables
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

print("API KEY FOUND:", bool(api_key))
print("API KEY LENGTH:", len(api_key) if api_key else 0)

if not api_key:
    raise ValueError("GROQ_API_KEY environment variable is not set.")


# Groq client
client = OpenAI(
    api_key=api_key,
    base_url="https://api.groq.com/openai/v1"
)


# FastAPI app
app = FastAPI(
    title="AI Email Generator API",
    version="1.0.0",
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-email-generator-wine.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes
@app.get("/")
def root():
    return {
        "message": "AI Email Generator Backend is Running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# Request model
class EmailRequest(BaseModel):
    purpose: str
    recipientName: str
    tone: str
    length: str
    keyPoints: str


# Generate email
@app.post("/generate-email")
def generate_email(data: EmailRequest):

    print("=" * 50)
    print(data)
    print("=" * 50)

    prompt = f"""
You are a professional email writer.

Write a clear, natural, and professional email based on the following information.

Purpose:
{data.purpose}

Recipient Name:
{data.recipientName}

Tone:
{data.tone}

Length:
{data.length}

Key Points:
{data.keyPoints}

Generate:
1. A suitable email subject.
2. A professional email body.

Important:
- Return the subject first using exactly this format:
Subject: [subject]

- Then leave one blank line.
- Then write the email body.
- Do not add explanations.
- Do not use Markdown.
- Do not include the recipient's email address.
- Do not include placeholders such as [Your Name] unless the information is genuinely unavailable.

Return only the email.
"""

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    email_response = response.choices[0].message.content or ""

    return {
        "success": True,
        "email": email_response,
    }