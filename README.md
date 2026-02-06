# CS Student Portfolio Website

A responsive, modern portfolio website built with React and Tailwind CSS for a sophomore Computer Science student seeking internships.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Component-Based**: Modular React components for easy maintenance and customization
- **Performance**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML

## Sections

1. **Sticky Navbar** - Navigation with smooth scrolling to sections
2. **Hero** - Eye-catching introduction with call-to-action buttons
3. **About** - Personal introduction with stats cards
4. **Skills** - Categorized skill tags (Frontend, Programming, Tools, Learning)
5. **Projects** - Showcase of 5 featured projects with details
6. **Experience** - Timeline of education, coursework, and activities
7. **Contact** - Contact form and social media links
8. **Footer** - Copyright and social links

## Customization Guide

### Personal Information

Edit the following components to add your personal information:

#### Navbar.jsx
- Update the name in the logo

#### Hero.jsx
- Change the name, university, and description
- Update the badge text if needed

#### About.jsx
- Modify the introduction paragraph
- Update stat values in the stats array

#### Skills.jsx
- Add or remove skills in each category
- Adjust categories as needed

#### Projects.jsx
- Update the projects array with your own projects
- Change titles, descriptions, features, tech stacks
- Replace image URLs with your project screenshots
- Update GitHub and demo links

#### Experience.jsx
- Edit the timeline array with your education and experience
- Add or remove timeline items
- Update university name, GPA, coursework, clubs, hackathons

#### Contact.jsx
- Update email address, GitHub username, LinkedIn profile
- Modify the form submission handler to integrate with your backend

#### Footer.jsx
- Update name and social media links

### Images

Replace placeholder images with your own:
- Project screenshots: Update URLs in Projects.jsx
- Profile picture: Can be added in Hero.jsx (currently using emoji)

### Colors

The portfolio uses a blue accent color. To change it:
- Search for `blue-` classes throughout the components
- Replace with your preferred color (e.g., `green-`, `teal-`, `cyan-`)
- Maintain consistency across all components

### Resume

Place your resume PDF in the `public` folder and update the link in Navbar.jsx.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## Browser Support

This portfolio works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use and customize for your personal portfolio.

---

Built with React and Tailwind CSS
