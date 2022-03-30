let canvasHeight = window.innerHeight;
let canvasWidth = window.innerWidth;

// desktop, the width of the canvas is 0.66 * window height and on mobile it's fullscreen
if (window.innerWidth > window.innerHeight) {
    canvasWidth = Math.floor(window.innerHeight * 0.66);
}

let deepAR = DeepAR({
    canvasWidth: canvasWidth,
    canvasHeight: canvasHeight,
    licenseKey: 'your',
    canvas: document.getElementById('deepar-canvas'),
    numberOfFaces: 1,
    libPath: './lib',
    segmentationInfoZip: 'segmentation.zip',
    onInitialize: function () {
        // start video immediately after the initalization, mirror = true
        deepAR.startVideo(true);

        // or we can setup the video element externally and call deepAR.setVideoElement (see startExternalVideo function below)

        deepAR.switchEffect(
            0,
            'slot',
            '../../public/effects/beard',
            function () {
                // effect loaded
            }
        );
    },
});

// download the face tracking model
deepAR.downloadFaceTrackingModel('lib/models-68-extreme.bin', () =>
    console.log('DONE')
);

let thumbnails = [
    {
        thumb: './thumbs/galaxy.png',
        effect: './effects/background_segmentation',
    },
    {
        thumb: './thumbs/aviators.png',
        effect: './effects/aviators',
    },
    {
        thumb: './thumbs/beard.png',
        effect: './effects/beard',
    },
    {
        thumb: './thumbs/dalmatian.png',
        effect: './effects/dalmatian',
    },
    {
        thumb: './thumbs/flowers.png',
        effect: './effects/flowers',
    },
    {
        thumb: './thumbs/koala.png',
        effect: './effects/koala',
    },
    {
        thumb: './thumbs/lion.png',
        effect: './effects/lion',
    },
    {
        thumb: './thumbs/teddy_cigar.png',
        effect: './effects/teddycigar',
    },
];

function setEffect(effect) {
    return deepAR.switchEffect(0, 'slot', effect);
}
