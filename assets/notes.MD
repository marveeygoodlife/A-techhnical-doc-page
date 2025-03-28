# STYLES

- Primary Color: Used for important elements like headings, buttons
- Secondary Colors complement the primary color
- Backgroud Color will be neutral light or dark
- Text Color, High contrast for readability

- #007bff bright blue -primary
- #0056b3 dark blue -secondary
- background  #f8f9fa light grey
- text color  #333 dark grey

## Dark Mode Theme

- Primary #ff9800 orange
- Secondary #f57c00 darker orange
- background  dark grey
- text #e0e0e0 light grey

## Minimalist White Theme

- primary #2ecc71 green
- secondary #27ae60 dark green
- background #ffffff white
- text #333333 dark grey

Use color contrast to check readability

## fonts

- heading: poppins, montserat or roboto
- body text open sans lato inter
- code block
fira code, courier new, source code pro

## Layout

- css grid (2-3 columns on large screen), 1 column mobile
- consistent spacing !
- Add hover effect !
-navbar sticky while scrolling !
- use box shadow for grid card columns
- centered content, spaced and smooth scrolling !
- use consistent global fonts !
- use padding and margin for spacing !
- logo let, menu right, header stick to top !
- use flexbox to position element in header !
- add sublt animation like fading
- blog post 2-3 rows grid in desktop, 1 column in mobile (thumbnail image, title, read more link)
- use box shadow to make blog card stand out
- add hover effect for interactivity
- mobile responsiveness !
- dark background footer, centered text !
- small font size !
- media queries to adjust layout
- text readable on mobile screen !
- button/link easy to tap on mobile
- style section by section
- resonsive text on eac screen !

## Animations

- use hiver to change navbar color, ::after to create underline animation that slides from left to right

### blogpost animation

- scale up blog post slightly to (1.02x)
- change title color on hover
- increase shadow on hover
- add transition
- change title color on hover

### buton hover

- use bg color transition
- change bg on hover
- transform : scale(1.05) for bounce effect

### steps

- apply one step at a time and test it
- keep animation smooth and minimal
- test responsiveness

### Dark mode toggle

- add button with id to toggle
- get toggle btn on js
- get html body goc : document.body
// check local storage if dark mode is enable
- if localstorage.getItem("darkMode") === "enabled" {
    body.classalaist.add("darkmode")
}
- togglebtn.addEventListener("click", () =>{
    body.classList.toggle("darkmode");
- // save mode in local storage
if (body classlist contain "dsarkMode") {localStorage.setItem("darkMode", "enabled")} else {localStorage.setItem("darkMode", "disabled");}
})
