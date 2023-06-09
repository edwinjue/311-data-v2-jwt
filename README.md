# Learn how to do JWT authentication at the edge
* Framework: Next.js
* useCase:
  - Edge Functions
  - Edge Middleware
  - Documentation
* css: Tailwind
* Demo: https://311-data-v2-jwt.vercel.app/
* relatedTemplates:
  - nextjs-boilerplate
  - blog-starter-kit
  - platforms-starter-kit

# JWT Authentication

The example shows how to do JWT authentication at the edge using Edge Middleware and Edge Functions.

## Quick Demo
1. Initially, you should not be authorized to view request data.  
Visit: https://311-data-v2-jwt.vercel.app/api/requests?startDate=2023-04-01&endDate=2023-04-20
2. Get authorized.  
Click the button on this page: https://311-data-v2-jwt.vercel.app/
3. Now you should be authorized to view the request data.  
Visit and reload: https://311-data-v2-jwt.vercel.app/api/requests?startDate=2023-04-01&endDate=2023-04-20
4. To revoke authorization, remove the `user-token` cookie from the client browser.  
(Dev Tools > Application > Storage > Cookies)
5. Now, you should no longer be authorized to view the request data.  
Visit and reload: https://311-data-v2-jwt.vercel.app/api/requests?startDate=2023-04-01&endDate=2023-04-20

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

After [setting up your JWT secret](#set-up-environment-variables), deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fedge-middleware%2Fjwt-authentication&env=JWT_SECRET_KEY&envDescription=Random%20secret%20that'll%20be%20used%20to%20sign%20JWTs&project-name=jwt-authentication&repo-name=jwt-authentication)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/jwt-authentication
```

#### Set up environment variables

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `JWT_SECRET_KEY` with your a random secret that'll be used to sign JWTs.

Next, run Next.js in development mode:

```bash
pnpm dev
```

The app should be up and running at http://localhost:3000.

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
