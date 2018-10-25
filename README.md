# _Travel Peru_

#### _A Scrolling Wonderland Page, 9/26/18_

#### By _**Luke Vandekieft**_

## Description

_One of the most visually appealing sites I've run across is, over all things, http://www.beargrylls.com . In particular I love that the top elements' positions are based on the user's scroll and move in both directions on scroll *without moving the overall page's bar*. The full page only scrolls once the top box is complete, and if you scroll to the top again you can reverse the full "animation." It's very satisfying as a user and poses interesting logistical questions as a developer._

_For my website this effect was acheived by creating an absolutely positioned top box, moving fixed position elements based on the top box's scroll position, and then fading out the fixed elements once the full page starts scrolling. There are some glitchy behaviors you can fall into but I was surprised to find that Bear Grylls experienced many of the same issues so overall I feel good about what was accomplished. The popping colors and clean on-scroll user interactivity are highlights for the project._

## Setup/Installation Requirements

* _Download file from Github._
      $ git clone https://github.com/lukevandekieft/travel-peru.git
* _Install NPM (node package manager) as needed - instructions can be found at https://www.npmjs.com/get-npm ._
* _Install necessary webpack dependencies for project._
      $ npm install
* _Compile and open webpage in developer mode._
      $ npm run start

## Technologies Used

* _HTML_
* _CSS_
* _Sass_
* _Webpack_

## Support and contact details

_If you have any concerns or suggestions please contact Luke Vandekieft at vandekie@gmail.com_

### License

*This software is licensed under the MIT License.*

Copyright (c) 2018 **_Luke Vandekieft_**
