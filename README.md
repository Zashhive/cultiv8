# Cultiv8 Wellness - Couples Tantra Massage Course

A landing page for Cultiv8 Wellness's online couples tantra massage course, designed to help couples deepen their intimacy through professional tantra massage techniques.

## Quick Start

This project is designed to be a plug-and-play solution with no build steps required. To get started:

1. Upload all files to your web hosting provider
2. Access the `index.html` file in your browser
3. Done! 🎉

## Project Structure

This project consists of four essential files:

- **index.html** - The main HTML file that includes TailwindCSS via CDN and loads the React app
- **app.js** - The JavaScript version of the main React component
- **app.tsx** - The TypeScript version of the same React component (for developer flexibility)
- **README.md** - This documentation file

## Customization Guide

### Editing Content

#### Basic Text & Images

To edit text content, modify the appropriate sections in either `app.js` or `app.tsx` (depending on your preference). Both files contain the same content structure.

For images, replace the placeholder URLs:

```javascript
// From
<img src="/api/placeholder/800/450" alt="Couples tantra massage" className="rounded-lg object-cover w-full h-full"/>

// To 
<img src="path/to/your-image.jpg" alt="Couples tantra massage" className="rounded-lg object-cover w-full h-full"/>
```

#### Modifying Sections

Each section of the page is clearly labeled with comments in the code:

```javascript
{/* Hero Section */}
{/* Course Offerings */}
{/* FAQ Section */}
// etc.
```

Find the section you want to modify and update the content as needed.

### Styling

The project uses TailwindCSS for styling, configured with a custom color palette:

- **Deep Amethyst (#6B4E71)** - Headlines/Accents
- **Soft Sage (#A8B5A2)** - Backgrounds/Buttons
- **Warm Sand (#D9C2A7)** - Text/Highlights
- **Pale Lotus (#F2E8E6)** - Base Backgrounds
- **Golden Dawn (#E8B923)** - CTAs/Key Elements

To modify the color scheme, edit the TailwindCSS configuration in the `index.html` file:

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    amethyst: '#6B4E71',
                    sage: '#A8B5A2',
                    sand: '#D9C2A7',
                    lotus: '#F2E8E6',
                    golden: '#E8B923',
                }
            }
        }
    }
</script>
```

### Data Management

The site uses JavaScript objects to manage dynamic content. Edit these arrays to update content:

```javascript
// FAQ Data
const faqData = [
    {
        question: "What is tantra massage and how can it benefit our relationship?",
        answer: "Tantra massage is an ancient practice..."
    },
    // More FAQ items...
];

// Pricing Data
const pricingData = [
    {
        title: "Monthly Journey",
        price: "$49.99",
        // More pricing details...
    },
    // More pricing plans...
];

// Course Offerings
const courseOfferings = [
    {
        title: "Sacred Foundations",
        description: "Begin your journey with...",
        // More course details...
    },
    // More courses...
