# Revolutions

## Background
This drawing application allows for simple construction of the symbols symmetrical patterns based on user inputs.
By taking advantage of radial symmetry and mathematical principles, the application will be able to create beautiful designs with minimal effort. The generator works by dividing a circle into a set number of regions, with a drawing in any one of these regions being replicated in the rest, creating a patterned symmetrical circle.

## Functionality & MVP
 In this Revolutions Project users will be able to
* Choose the number of division on the circle
* Choose the pen width
* Choose the pen color
* Choose the background color
* Be able to clear the board
* Be able to download the creation
In addition, the project will include
* A production README


## Wireframes
The app will contain the canvas area where the user draws directly in the middle of the page. Above the canvas area there will be a title with personal links below. To the left will be the majority of user controls, while the clear and download controls are located below th canvas. The right will contain the history of mandalas and the mathematical concepts behind the app.

![wireframe](wire_frame.jpg)


## Architecture and Technologies
The project will be built with the following technologies:
* Javascript for logic
* CanvasJS for an interactive user drawing experience
* Webpack to bundle js files

The scripts involved in this project will include:
* app.js - the entry file
* canvas.js - the main canvas file is defined and 
* listeners.js- event listeners and their handler functions are defined 
* settings.js - user inputted fields are created and handled
* symmetry.js - calculations are figured out (canvas is passed as an argument)

## Implementation Timeline
### Day 1:
Set up files, webpack and necessary node modules, get a basic canvas drawing tool created this includes parts of canvas.js and listeners.js

### Day 2: 
Using hard coded settings, make sure symmetry.js is functioning perfectly and you are able to draw a mandala

### Day 3: 
Build out settings.js so that users can change the settings. Adapt the previous files so that these settings inputs alter their behavior

### Day 4: 
Style the css and create the “About” sections make sure everything looks perfect and the game is functioning without bugs

## Bonuses
* Create a Polygon Mode  where the pattern renders as a square not a circle
* Create a mirror mode which reflects the image in a section down the middle of each section

 
