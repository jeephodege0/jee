
# IIT-JEE 2025 Planner with Firebase Authentication

This project includes Firebase Authentication and Firestore integration for saving user-specific data.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add environment variables to `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   FIREBASE_ADMIN_PRIVATE_KEY=your_private_key_content
   FIREBASE_ADMIN_CLIENT_EMAIL=your_client_email
   FIREBASE_ADMIN_PROJECT_ID=jee0-d438e
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Features Added
- Firebase Admin SDK for server-side authentication.
- Editable "years" array saved to Firestore for each user.
- Fully functional authentication with token verification.
