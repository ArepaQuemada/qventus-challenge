# Qventus Assessment

My approach for this assessment.
Requirements: https://docs.google.com/document/d/1IKiW6vvaysuuOaWWpId9E9PDSOIJcAD6S22YVUffg7U/edit?usp=sharing

## Tech Stack 

I've configured a Vite project with React and Typescript. I used styled components for styling, allowing for easy extension through inheritance. I used vitest + testing library and userEvent API for unit testing porpuses

## Patterns

I decided to break down the UI into self-contained components, I made a component for password textfield and status circles, with props to set up styles and wording. Then I integrate both components into a PasswordValidator component. For state I used a popular pattern which is lifting up state into a container component to handle updates for its children

## Scripts

To start dev server 

```
npm run dev
```

To run tests 

```
npm run test
```