## ImageApp

This template viewer is modeled after the filmstrip folder view in Windows Explorer.

## Live demo

Live app can be found via Netify https://imageapp.netlify.app/

## Development Description

- Components

  - App.js
    - ImgMain.jsx (main large image in the center of window)
    - Navbar.jsx (navbar on top)
    - ImgThumbnail.jsx (thumbnail image components)

- Library (See package.json for details)
  - bootstrap : 4.1.1
  - font-awesome : 4.7.0

## Features

- Display the thumbnail images in a filmstrip view below the main large image
- A sliding window with 4 thumbnails visible in the window at a time.
- Implement a "next" and "previous" link per the styles provided. The sliding window is not circular, when the first 4 thumbnails appear, the previous link should be disabled. When the end of the thumbnail set is reached, the next link should be disabled. Note: The sliding window may not have a total of 4 thumbnails if the total template count is not evenly divisible by 4. There are 15 templates in the reference data.(Example: If there are 15 templates total, then the initial view would show 4 thumbnail images with previous disabled, then clicking "Next" would advance to the next 4 images, next would advance to the next 4, and so on. Finally, there wouild only be 3 images in the sliding window with next disabled and previous enabled.)
- When clicking on a thumbnail, the large image corresponding to that thumbnail should appear in the main window, along with the meta data about that template (ID, Cost, Description, Thumbnail File Name, Image File Name)
- Per the reference styles and html, the thumbnail image should have a border when selected.

## Install
