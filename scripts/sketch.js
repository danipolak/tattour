// The video
let video;
// For displaying the label
let label = "One moment...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/muArFuS5c/';
let myFont;

  // Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  myFont = loadFont('_assets/NHaasGroteskTXPro-55Rg.ttf');
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  // Create the video
  video = createCapture({
    audio: false,
    video: {
      facingMode: "environment"
    }
  });
  video.hide();
  // Start classifying
  classifyVideo();
}

  // classify the video!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw video
  image(video, 0, 0);

  // Set label
  let camera = createDiv('');
  camera.class("camera-button");

  // Define TDP
  if (label == "pinecone") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/014.html"><p>pinecone <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "ufo") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/015.html"><p>all seeing ufo <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "bull") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/012.html"><p>bull and lobster <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "vacation") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/016.html"><p>far far away <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "aztec") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/017.html"><p>is it aztec? <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "balloons") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/013.html"><p>balloons with a smile <i class="fas fa-arrow-right"></i></p></a>');
  }
}

  // Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
  // console.log (results);
}
