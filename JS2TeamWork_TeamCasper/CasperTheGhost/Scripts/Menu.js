﻿var paper, set;
var levelNumber = 1;
paper = Raphael(8, 8, 800, 600);

paper.setStart();

var pageFill = paper.rect(8, 8, 800, 600).attr({ fill: "rgb(225, 226, 227)" }).attr({ stroke: 'none' });
<<<<<<< origin/master
var pageBg = paper.image("../Resources/backgroundLevelW.png", 8,8,800,600).attr({opacity:0.2});

var titleImage = paper.image("Resources/CasperTitle.png", 250, 215, 300, 90);

var titleAnimaton = function () {
    titleImage.animate({ "transform": "..r-360, 400,300" }, 20000, "elastic");
=======
var pageBg = paper.image("../Resources/backgroundLevelW.png", 8, 8, 800, 600).attr({ opacity: 0.4 });
var titleImage = paper.image("Resources/CasperTitle.png", 250, 125, 300, 90);

var titleAnimaton = function () {
    titleImage.attr({ y: '145' });
    titleImage.animate({ "transform": "..r-360, 400,300" }, 20000, "elastic");
    titleImage.attr({ y: '125' });
>>>>>>> local
};
setTimeout(titleAnimaton, 500);

var titlePage = paper.setFinish();


/* a rectangle with a linear gradient from light-green via green (at 50%) to light-green */
var playShape = paper.rect(325, 55, 120, 70, 35, 45).attr({ fill: "90-#efe-#0d0:50-#6d8", "stroke-width": 5, stroke: "lightgreen" });
var playText = paper.text(386, 88, "PLAY");
playText.attr({ "font-family": "Comic Sans MS", "font-size": 32, "font-weight": "800", fill: "yellow", stroke: "brown", "stroke-width": "3px" });

/* group both the button and the text in a single Set shape we call playButton */
var playButton = paper.set();
playButton.push(playShape);
playButton.push(playText);
playButton.attr({ cursor: "pointer" });

<<<<<<< origin/master
/*  F U N C T I O N S   */
/* add a hover handler */
playButton.mouseover(function(evt){
=======
/* Go level button */
var levelShape = paper.rect(600, 350, 176, 40, 15, 20).attr({ fill: "90-#eee-#888:50-#444", "stroke-width": 3, stroke: "lightgrey" });
var levelText = paper.text(688, 370, "");
if (levelNumber === 1) {
    levelText.attr({ text: 'GO LEVEL2' });
} else {
    levelText.attr({ text: 'GO LEVEL1' });
}
levelText.attr({ "font-family": "Comic Sans MS", "font-size": 28, "font-weight": "800", fill: "darkblue", stroke: "cyan", "stroke-width": "2px" });
var levelButton = paper.set();
levelButton.push(levelShape);
levelButton.push(levelText);
levelButton.attr({ cursor: "pointer" });
levelButton.hide();

/* Game End button */
var endShape = paper.rect(670, 520, 96, 44, 27, 40).attr({ fill: "90-#fee-#d00:50-#d68", "stroke-width": 5, stroke: "brown" });
var endText = paper.text(718, 540, "END");
endText.attr({ "font-family": "Comic Sans MS", "font-size": 28, "font-weight": "800", fill: "yellow", stroke: "brown", "stroke-width": "3px" });
var endButton = paper.set();
endButton.push(endShape);
endButton.push(endText);
endButton.attr({ cursor: "pointer" });

/*  F U N C T I O N S   */
/* playButton - add hover/click handlers */
playButton.mouseover(function (evt) {
>>>>>>> local
    this.oGlow = playShape.glow({
        opacity: 0.85,
        color: 'lime',
        width: 100
    }); playShape.attr({ fill: "darkgreen" });
}).mouseout(function (evt) {
    this.oGlow.remove(); playShape.attr({ fill: "90-#efe-#0d0:50-#6d8" });
});

/* add a click handler */
playButton.click(function (evt) {
    titlePage.remove();
    playButton.hide();
    loadLevel(levelNumber);
});

<<<<<<< origin/master


=======
/* levelButton - add hover/click handlers */
levelButton.mouseover(function (event) {
    this.oGlow = levelShape.glow({
        opacity: 0.85,
        color: 'cyan',
        width: 25
    }); levelShape.attr({ fill: "gray" });
}).mouseout(function (evt) {
    this.oGlow.remove(); levelShape.attr({ fill: "90-#eee-#888:50-#444" });
});

var newLevelNumber = levelNumber;
levelButton.click(function (event) {
    if (levelNumber === 1) {
        newLevelNumber = 2;
        levelText.attr({ text: 'GO LEVEL1' });
    } else {
        newLevelNumber = 1;
        levelText.attr({ text: 'GO LEVEL2' });
    }

    playButton.hide();

    stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 800,
        height: 600
    });

    loadLevel(newLevelNumber);
    levelNumber = newLevelNumber;
});
>>>>>>> local
