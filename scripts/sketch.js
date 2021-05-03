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
  let tattoo = "";
  if (label == "pinecone") {
    tattoo = "Pinecone ➔";
  } else if (label == "ufo") {
    tattoo = "All seeing UFO ➔";
  }

  // Draw the label
  textSize(40);
  textFont(myFont);
  text(tattoo, 25, 475);
  fill('black');
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
