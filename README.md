# Frontend Mentor - Order Summary Card Solution

This is a solution to the [Order Summary Card Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements
- View the component in different screen sizes (mobile & desktop)

### Screenshot

![Order Summary Screenshot](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://your-solution-url.com)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

---

## My process

### Built with

- Semantic **HTML5** markup
- **CSS custom properties** (tokens.css)
- **Flexbox** & **Grid**
- **Mobile-first workflow**
- **React + Vite** (TypeScript)
- Component-based architecture

### What I learned

This project helped me practice:

- Breaking UI into reusable **React components**.
- Using **TypeScript interfaces** for props validation.
- Organizing **styles with tokens** for consistency.
- Structuring a project for **scalability**.

Here’s a small TypeScript snippet I’m proud of:

```tsx
interface AnnualInterface {
  icon: string;
  subHeading: string;
  price: number;
  change: string;
}

interface CardInterface {
  image: string;
  heading: string;
  description: string;
  annualData: AnnualInterface;
}
