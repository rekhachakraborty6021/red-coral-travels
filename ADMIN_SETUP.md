# Admin Dashboard Setup

The admin dashboard allows you to manage bookings, enquiries, and view payment history. It is secured using NextAuth.js.

## Authentication Setup

1. Add the following variables to your `.env.local` file:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_string_here

# Admin Credentials
ADMIN_EMAIL=admin@wanderways.com
ADMIN_PASSWORD=secure_password_123
```

> **Note**: In a production environment, generate a strong random string for `NEXTAUTH_SECRET`. You can use `openssl rand -base64 32`.

## Features

- **Dashboard Overview**: View key metrics (Revenue, Bookings, Enquiries) and recent activity.
- **Bookings Management**: View all bookings, filter by status, and update status (Confirm/Cancel).
- **Enquiries**: View all contact form submissions.
- **Payments**: View history of successful Stripe payments.
- **Responsive Design**: Works on desktop and mobile devices.

## Accessing the Dashboard

1. Navigate to `/admin`
2. You will be redirected to the login page.
3. Enter the credentials defined in your `.env.local` file.
4. Upon successful login, you will be redirected to the dashboard.

## Security Notes

- The `/admin` routes are protected by middleware.
- Only users with the `admin` role can access these routes.
- The session is managed via secure HTTP-only cookies.
