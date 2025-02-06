This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# URL Shortener

A simple URL shortener frontend built with Next.js and Tailwind CSS. It allows users to enter a long URL and get a shortened version using the TinyURL API.

## Features
- Enter a long URL and get a shortened version.
- Click on the shortened URL to open it in a new tab.
- Copy the shortened URL with a single click.
- Responsive and user-friendly UI.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Usage
1. Enter a long URL in the input field.
2. Click the **Shorten URL** button.
3. The app fetches a shortened link from the TinyURL API.
4. Click the shortened link to open it in a new tab or use the **Copy** button to copy it.

## Technologies Used
- **Next.js** – For the frontend.
- **Tailwind CSS** – For styling.
- **TinyURL API** – To generate shortened URLs.

## Future Enhancements
- Add support for custom short URLs.
- Integrate a backend service to store and manage shortened URLs.
- Display a history of shortened URLs for the user.

## License
This project is open-source and available under the MIT License.



