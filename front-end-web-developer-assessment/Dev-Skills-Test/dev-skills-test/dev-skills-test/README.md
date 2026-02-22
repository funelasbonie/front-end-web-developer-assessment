# Front-End Developer Candidate Exercise

## Overview

This project is a simplified eCommerce environment that includes a product detail page and a responsive header. Some functionality has been intentionally removed or broken for this exercise.

Your goal is to complete the following tasks to demonstrate your ability to work with existing code, debug issues, and add new features.

---

## Environment Setup

**Requirements**
- Node.js 18 or higher  
- npm or yarn  
- A modern browser (Chrome, Firefox, or Edge)

**Setup**
1. Clone or download the provided repository.  
2. Open a terminal in the project root and run:

   npm install  
   npm run dev  

   or  

   yarn install  
   yarn dev  

3. Visit http://localhost:5173 to view the project.

The app should load the Product Page and Header components.

---

## Task List

| # | Task | Focus Area | Difficulty | Estimated Time |
|---|------|-------------|-------------|----------------|
| 1 | Delivery Date Calculator | Logic and JavaScript | Medium | 30 minutes |
| 2 | Build Cart Summary Section | Layout and Data Binding | Medium | 45 minutes |
| 3 | Fix Mobile Menu Toggle (Logic + CSS) | Debugging and React State | Medium | 30 minutes |
| 4 | Polish Mobile Layout for Cart Summary | Responsive Design | Medium-Hard | 30 minutes |
| 5 | Bonus / Build Challenge: Add a New UI Feature | Creativity and Implementation | Open | 45+ minutes |

---

## Task Details

### Task 1 – Estimated Delivery Calculator

**File:** ProductPage.jsx

The “Estimated Delivery” section currently shows static text for processing, production, and transit times.

**Goal**
- Replace the static calendar date with a calculated one.  
- When the page loads, automatically calculate the estimated delivery date based on today’s date plus the listed processing, production, and transit times.  
- Display the correct month and day (for example, “November 18”).

**Bonus**
Account for weekends and skip non-business days.

---

### Task 2 – Build the Cart Summary

**Files:** ProductPage.jsx and ProductPage.css

The cart summary section has been removed. You will find a placeholder comment in the file:

// TODO: Build a cart summary here

**Goal**
- When a user clicks “Add to Cart,” display a cart summary section at the bottom of the page.  
- Show each item’s name, color, size, quantity, and total price.  
- Display a grand total.  
- Create and apply your own CSS classes for layout and styling.

**Hints**
- The variables cartItems and cartTotal are already available.  
- Focus on clarity, readability, and consistent visual style.

---

### Task 3 – Fix the Mobile Menu Toggle

**Files:** Header.jsx and Header.css

There are two intentional issues in the header:

1. The mobile menu does not open or close correctly.  
   - Locate the toggle logic inside Header.jsx and fix the state handling.  
2. The hamburger icon does not appear on mobile.  
   - Review the .mobile-only rule in Header.css and correct its display setting.

**Goal**
- The hamburger icon should appear on screens narrower than 768px.  
- Clicking it should open and close the drawer menu.

---

### Task 4 – Polish Mobile Layout for Cart Summary

**File:** ProductPage.css

After completing Task 2, review how your cart summary looks on mobile.

**Goal**
- Make it readable and balanced below 600 px width.  
- Adjust spacing, font size, and alignment for mobile users.  
- Keep styling consistent with the rest of the app.

**Bonus**
Add subtle touches like rounded corners or soft shadows.

---

### Task 5 – Bonus / Build Challenge: Add a New UI Feature

**Goal**
Add a small, meaningful UI enhancement of your choice that improves the page. This could include:

- A hover state for color swatches  
- A small animation when adding to cart  
- A simple loading indicator for image changes  
- Any other enhancement that improves user experience  

Explain your addition in a short comment or a new file named NOTES.md.

---

## Evaluation Criteria

| Skill | What We’re Looking For |
|--------|------------------------|
| Code Quality | Clean, readable code with consistent formatting |
| Problem-Solving | Logical fixes and clear reasoning |
| CSS Skills | Layout, responsiveness, and attention to detail |
| React Understanding | State management and component structure |
| Communication | Clear explanation of thought process |
| Bonus Points | Polished UI, animations, or accessibility improvements |

---

## Submission

1. Zip your completed project folder (excluding node_modules).  
2. Name it: firstname_lastname_frontend_test.zip  
3. Include a short write-up or a NOTES.md file describing your approach, challenges, and any improvements you would make.  
4. Submit the zip file following the instructions provided by your hiring contact.

---

Good luck. Focus on clear, maintainable code and show your ability to think through design and interaction.
