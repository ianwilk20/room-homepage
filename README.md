# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
  - [Developer notes](#developer-notes)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

Mobile:

![Mobile site](/design/completed/mobile-init.png)

Tablet:
![Tablet site](/design/completed/tablet-init.png)

Desktop:

![Desktop site](/design/completed/desktop-init.png)

### Links

- [Solution URL](https://github.com/ianwilk20/room-homepage)
- [Live Site URL](https://room-homepage-ianwilk20.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/docs) - For styles
- [React](https://reactjs.org/) - JS library

### What I learned

- I had the following functions: 

```
const nextImage = (): void => {
    setHeroImage((currentImage) => {
        console.log('Current image: ', currentImage)
        if (currentImage.id === images.length) {
            return images[0]
        }
        return (
            images.find((image) => image.id === currentImage.id + 1) ||
            images[0]
        )
    })
}

const prevImage = (): void => {
    setHeroImage((currentImage) => {
        console.log('Current image: ', currentImage)
        if (currentImage.id === 1) {
            return images[images.length - 1]
        }
        return (
            images.find((image) => image.id === currentImage.id - 1) ||
            images[0]
        )
    })
}
```
When I would click on the arrow buttons to go between the hero images, the screen would flicker for maybe half of a second to a page where the hero image wasn't there, then show the hero properly. At first, I thought it may be a problem with different hero image sizes but I confirmed that I was given 3 hero images of the same size. The other thought that crossed my mind was that the images weren't initially cached so it would go away after requested once, but after inspecting the network logs I saw that the three hero images were being cached on page load. Another idea was that potentially I had a bug where I wasn't supplying a unique key to the picture element which would prevent React from efficiently managing updates and re-renders. After some debugging, it looks like the reason the page would gitch was a combination the `console.log()` statements and Strict Mode (rendering everything twice). After I removed the console.log statements from those functions and disabled strict mode I seem to less frequently experience the page flickering between renders like it may happen.

**Edit**: After making some more tweaks to prevent the flickering it seems like changing the rendering of the hero image from this:
```
{heroImage && (
    <picture key={heroImage.id}>
        <source
            srcSet={heroImage.mobileImg}
            media="(max-width: 375px)"
        ></source>
        <source
            srcSet={heroImage.desktopImg}
            media="(min-width: 375px)"
        ></source>
        <img
            src={heroImage.desktopImg}
            className="md:h-full md:w-full object-cover"
            alt={heroImage.alt}
        />
    </picture>
)}
```

to this: 

```
{images &&
    heroImage &&
    images.map((image) => (
        <picture key={image.id}>
            <source
                srcSet={image.mobileImg}
                media="(max-width: 375px)"
            ></source>
            <source
                srcSet={image.desktopImg}
                media="(min-width: 375px)"
            ></source>
            <img
                src={image.desktopImg}
                className={`${
                    heroImage.id === image.id
                        ? 'block'
                        : 'hidden'
                } md:h-full md:w-full object-cover`}
                alt={image.alt}
            />
        </picture>
    ))}
```

reduced the noticeable screen flickering. My guess it that the second snippet's use of key within the map function helps optimize the re-rendering process, resulting in reduced screen flickering. Whereas the first snippet lacks this optimization, meaning it may suffer from more noticeable flickering as images are switched.

### Continued development

- I'd like to continue to practice TypeScript. This was my second frontend mentor challenge that I used it and very minimally (since it wasn't a big challenge with lots of things to type).

- The tablet and desktop layouts are not picture perfect and could have been improved with some more tweaking. This would have likely required some pixel perfect tweaks or perhaps it doesn't and I just don't know a better way.

### Useful resources

- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - These docs on the grid layout helped me with the desktop layout

### Developer notes
Project bootstrapped by:
- [Bootstrap from Vite React-TS project](https://tailwindcss.com/docs/installation/using-postcss)
  - npm create vite@latest room-homepage -- --template react-ts
  - cd room-homepage
  - npm install
- [Install Tailwind w/ Vite](https://tailwindcss.com/docs/installation/using-vite) 
  - npm install -D tailwindcss @tailwindcss/vite