﻿function Button(x, y, layer, stage, spring) {
    var button = {
        posX: x,
        posY: y,
        getImage: function () {
            var imageObj = new Image();
            imageObj.onload = function () {
                var innerImage = new Kinetic.Image({
                    x: button.posX,
                    y: button.posY,
                    image: imageObj,
                });
                checkForEvents(innerImage)
                layer.add(innerImage);
                stage.add(layer);
            }

            imageObj.src = '../resources/button.png';

            function checkForEvents(buttonImage) {
                buttonImage.on('mousedown', function (evt) {
                    imageObj.src = '../resources/button-mousedown.png';
                    setTimeout(function () { imageObj.src = '../resources/button-hover.png'; }, 200);
                    layer.removeChildren();
                    layer.add(buttonImage);
                    spring.getImage().animation('stretch');
                });
                buttonImage.on('mouseover', function (evt) {
                    imageObj.src = '../resources/button-hover.png';
                });
                buttonImage.on('mouseout', function (evt) {
                    imageObj.src = '../resources/button.png';
                });
            }
            //return innerImage;
        }
    }
    button.getImage();
    return button;
}