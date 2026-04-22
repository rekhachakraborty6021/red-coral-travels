# Stripe Payment Integration Setup

This guide will help you set up Stripe payment integration for the Travel Agency application.

## Prerequisites

1. Create a Stripe account at [https://stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Stripe Configuration
# Get your keys from https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Stripe Webhook Secret
# Get this from https://dashboard.stripe.com/webhooks after creating a webhook endpoint
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Application URL (for Stripe redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Getting Your Stripe Keys

### 1. API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Toggle "Test mode" ON (top right)
3. Copy the **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
4. Click "Reveal test key" for **Secret key** → `STRIPE_SECRET_KEY`

### 2. Webhook Secret

1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "+ Add endpoint"
3. Enter endpoint URL: `http://localhost:3000/api/webhooks/stripe` (for local testing)
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click "Add endpoint"
6. Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

## Testing Payments Locally

### Using Stripe CLI (Recommended)

1. Install Stripe CLI: [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)

2. Login to Stripe:
   ```bash
   stripe login
   ```

3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. Use the webhook signing secret from the CLI output in your `.env.local`

### Test Card Numbers

Use these test card numbers in Stripe Checkout:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

Use any future expiry date, any 3-digit CVC, and any postal code.

## Payment Flow

1. User fills booking form
2. Clicks "Pay Now" button
3. Redirects to Stripe Checkout
4. Completes payment
5. Redirects back to success/cancel page
6. Webhook confirms payment and saves record

## Production Deployment

### Vercel/Netlify

1. Add environment variables in your hosting platform
2. Update `NEXT_PUBLIC_APP_URL` to your production domain
3. Create a new webhook endpoint with your production URL
4. Switch to **Live mode** in Stripe Dashboard
5. Use live API keys instead of test keys

### Webhook Endpoint

Production webhook URL format:
```
https://your-domain.com/api/webhooks/stripe
```

## Security Notes

- Never commit `.env.local` to version control
- Use test keys for development
- Switch to live keys only in production
- Validate webhook signatures
- Use HTTPS in production

## Troubleshooting

### Webhook not receiving events

- Check Stripe CLI is running (`stripe listen`)
- Verify webhook secret matches
- Check webhook endpoint URL is correct

### Payment not processing

- Verify API keys are correct
- Check browser console for errors
- Ensure Stripe is in test mode
- Try a different test card

### Build errors

- Ensure all environment variables are set
- Check Stripe package version compatibility
- Clear `.next` folder and rebuild

## Support

- Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Stripe Support: [https://support.stripe.com](https://support.stripe.com)
