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
];
```

## Deployment Options

### Option 1: Traditional Web Hosting

1. Upload all files to your web hosting provider (via FTP or their file manager)
2. Make sure the files maintain their structure and names
3. Navigate to your domain to view the site

### Option 2: GitHub Pages

1. Create a new GitHub repository
2. Upload all the files to the repository
3. Go to Settings > Pages
4. Select the branch that contains your files as the source
5. Save and wait for the site to be published

### Option 3: Netlify/Vercel Deployment

1. Create an account on Netlify or Vercel if you don't have one
2. Connect your GitHub repository (where you've stored these files)
3. Configure the deployment settings (no build commands needed)
4. Deploy the site

## Advanced Customization

### Adding New Sections

To add a new section to the page:

1. Create a new section component following the existing pattern:

```javascript
{/* Your New Section */}
<section className="py-16 bg-lotus">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-amethyst text-center mb-12">Your Section Title</h2>
    {/* Your section content */}
  </div>
</section>
```

2. Add the new section to both `app.js` and `app.tsx` files to maintain consistency

### Modifying Navigation

To update the navigation menu:

1. Find the Navigation section in both files:

```javascript
{/* Desktop Navigation */}
<div className="hidden md:flex space-x-6">
  <a href="#course" className="hover:text-golden transition duration-200">Course Details</a>
  <a href="#pricing" className="hover:text-golden transition duration-200">Pricing</a>
  <a href="#instructor" className="hover:text-golden transition duration-200">Instructor</a>
  <a href="#contact" className="hover:text-golden transition duration-200">Contact Us</a>
  <a href="#" className="bg-golden text-amethyst px-4 py-1 rounded hover:bg-opacity-90 transition duration-200">Log In</a>
</div>
```

2. Update the links and ensure you also update the corresponding mobile navigation menu

### Form Functionality

The contact form is currently set up for styling only. To make it functional:

1. Add a form submission handler:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic here
  // Example: fetch('/api/contact', { method: 'POST', body: formData })
};
```

2. Add the handler to the form element:

```html
<form className="space-y-4" onSubmit={handleSubmit}>
```

3. Add state management for form fields:

```javascript
const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};
```

4. Connect the form inputs to state:

```html
<input 
  type="text" 
  id="name" 
  value={formData.name}
  onChange={handleChange}
  className="w-full p-2 rounded..." 
/>
```

## Browser Compatibility

This site is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, consider adding appropriate polyfills or fallbacks.

## Support & Maintenance
