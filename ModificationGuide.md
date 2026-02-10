# Content Modification Guide for AIS Italy Website

## Introduction

Welcome to the AIS Italy Website Content Modification Guide! This document is designed to help non-technical users edit website content safely and effectively without affecting the underlying functionality.

The website has been restructured to separate content from code. All user-facing text, headings, links, and other content are now stored in easy-to-edit data files. This means you can update content without touching any code!

## Understanding the Structure

### The Data Directory
All content lives in the `/data` directory at the root of the project. Each major section of the website has its own file:

- `home.yaml` - Content for the homepage
- `about.yaml` - Content for the About Us page
- `events.yaml` - Content for Events & News page
- `activities.yaml` - Content for Activities page
- `community.yaml` - Content for Community page
- `faq.yaml` - Content for Frequently Asked Questions page
- `contact.yaml` - Content for Contact page
- `global.yaml` - Shared content used across multiple pages

### File Formats
We use YAML format for content files because it's human-readable and easy to edit. YAML stands for "YAML Ain't Markup Language" and uses indentation to show relationships between different pieces of content.

## File-by-File Reference Guide

### Home Page (`home.yaml`)
Contains all content for the homepage including:
- Hero section (main title and subtitle)
- Statistics displayed on the page
- Announcements section
- Recent events
- Mission statement
- Features section
- Call-to-action section

### About Page (`about.yaml`)
Contains content for the About Us page including:
- Hero section
- Mission and vision statements
- Our approach section
- Team information
- Core values
- Call-to-action

### Events & News Page (`events.yaml`)
Contains content for the events page including:
- Hero section
- Upcoming events
- Recent highlights
- Newsletter signup CTA

### Activities Page (`activities.yaml`)
Contains content for the activities page including:
- Hero section
- Main activities
- Educational tracks
- Impact metrics
- Call-to-action

### Community Page (`community.yaml`)
Contains content for the community page including:
- Hero section
- Community benefits
- Membership options
- Community sections
- Testimonials
- Call-to-action

### FAQ Page (`faq.yaml`)
Contains content for the FAQ page including:
- Hero section
- Question categories
- Individual questions and answers
- Additional resources
- Call-to-action

### Contact Page (`contact.yaml`)
Contains content for the contact page including:
- Hero section
- Contact methods
- Mailing list information
- Location details
- Social media links
- Office hours
- Call-to-action

### Global Content (`global.yaml`)
Contains content shared across multiple pages:
- Navigation menu
- Site metadata
- Social links
- Common CTAs
- Footer content
- Forms and external links
- Badges and labels
- Icons mapping

## Step-by-Step Editing Instructions

### 1. Finding the Right File
- Determine which page you want to edit
- Navigate to the `/data` directory
- Open the corresponding YAML file (e.g., `home.yaml` for homepage changes)

### 2. Making Text Changes
- Locate the section you want to edit
- Modify the text after the colon
- Example: Change `title: "Old Title"` to `title: "New Title"`

### 3. Editing Lists
- Look for hyphens (-) which indicate list items
- Each list item starts with a hyphen
- Example:
  ```yaml
  features:
    - id: 1
      emoji: "🎓"
      title: "Educational Programs"
      description: "Updated description here"
  ```

### 4. Adding New Items to Lists
- Find the list you want to add to
- Add a new item with the same structure as existing items
- Make sure to maintain proper indentation
- Example:
  ```yaml
  features:
    - id: 1
      emoji: "🎓"
      title: "Educational Programs"
      description: "Description for first item"
    - id: 2  # New item
      emoji: "🤝"
      title: "New Feature"
      description: "Description for new feature"
  ```

### 5. Saving Changes
- Save the file after making your changes
- Check that indentation remains consistent
- Verify that the file still loads correctly by running the site

## Common Tasks Walkthroughs

### Updating the Homepage Hero Section
1. Open `data/home.yaml`
2. Find the `hero:` section
3. Update the `title`, `subtitle`, or `description` fields as needed
4. Save the file

### Adding a New Event
1. Open `data/events.yaml`
2. Find the `upcoming_events:` section
3. Add a new event following the same structure as existing events
4. Make sure to increment the `id` number
5. Save the file

### Changing Navigation Links
1. Open `data/global.yaml`
2. Find the `navigation:` section
3. Update the `name` or `url` fields as needed
4. Save the file

### Modifying FAQ Questions
1. Open `data/faq.yaml`
2. Find the `categories:` section
3. Locate the category containing the question you want to edit
4. Update the `question` or `answer` fields
5. Save the file

## Warnings: Files Not to Edit

⚠️ **DO NOT EDIT THESE FILES** - They contain core functionality:

- `/src/layouts/base.njk` - Page layout template
- `/src/layouts/page.njk` - Page wrapper template
- `/src/components/` - Reusable page components
- `/src/services/dataService.js` - Data loading logic
- `/src/utils/contentValidation.js` - Data validation logic
- `.eleventy.js` - Site configuration
- `package.json` - Project dependencies
- `tailwind.config.js` - Styling configuration

Editing these files could break the website functionality.

## Formatting Guidelines

### YAML Formatting Rules
- Use spaces, not tabs, for indentation (typically 2 spaces)
- Maintain consistent indentation levels
- Text values should be enclosed in quotes if they contain special characters
- Colons must be followed by a space
- Comments start with `#`

### Content Best Practices
- Keep titles concise (under 60 characters when possible)
- Write clear, scannable descriptions
- Use emojis consistently (refer to existing patterns)
- Maintain the same tone and style as existing content
- URLs should include the protocol (https://)

### Safe Characters
Safe to use: letters, numbers, spaces, punctuation marks
Special characters that need attention: `:`, `-`, `#`, `{`, `}`, `[`, `]`, `|`, `>`, `%`, `@`, `*`, `&`, `!`, `<`, `>`, `=`, `'`, `"`

## Testing Procedures

### Before Publishing Changes
1. **Preview locally**: Run `npm start` and visit `http://localhost:8080`
2. **Check affected pages**: Navigate to pages you modified
3. **Verify layout**: Ensure content displays properly
4. **Test links**: Click all links to make sure they work
5. **Check mobile**: View pages on different screen sizes

### Troubleshooting Common Issues
- **Indentation errors**: Check that all indentation is consistent
- **Missing content**: Verify colons have spaces after them
- **Broken links**: Ensure URLs are complete and correct
- **Special characters**: Make sure special characters are properly escaped

## Troubleshooting Tips

### If the Site Doesn't Load After Changes
1. Check the console for error messages
2. Verify YAML syntax (indentation, colons, quotes)
3. Compare with a previous working version
4. Temporarily restore the original file to isolate the issue

### If Content Doesn't Appear
1. Verify the field name matches what's used in the template
2. Check that the data file is in the correct location
3. Ensure the site has rebuilt after your changes

### If Formatting Looks Wrong
1. Check that special characters are properly escaped
2. Verify that HTML tags (if any) are correctly formatted
3. Ensure proper spacing and line breaks

## Support

If you encounter issues not covered in this guide:
- Contact the technical team
- Refer to the original developers
- Check the project's issue tracker

Remember: The data files are designed to be safe to edit. The system includes fallbacks and validation to prevent content changes from breaking the site.