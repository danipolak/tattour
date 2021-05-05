// The video
let video;
// For displaying the label
let label = "One moment...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/muArFuS5c/';

  // Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
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
    camera.html('<a href="https://tattour.danipolak.com/TDP/013.html"><p>balloons <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "forever") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/019.html"><p>forever <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "wine") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/020.html"><p>red red wine <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "dunes") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/021.html"><p>the dunes <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "catwoman") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/018.html"><p>catwoman <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "boaz") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/001.html"><p>pisces for boaz <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "cacti") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/002.html"><p>south-american gardens <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "ml") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/003.html"><p>m and l <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "hare") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/004.html"><p>running hare <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "fuji") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/005.html"><p>mount fuji <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "crown") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/007.html"><p>wild things <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "illuminati") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/006.html"><p>illuminati <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "fish") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/008.html"><p>diving fish <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "planets") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/010.html"><p>big balls <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "dog") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/009.html"><p>is it a dog? <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "bavo") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/011.html"><p>bavo church <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "yogacat") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/022.html"><p>big yoga cat <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "running") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/024.html"><p>running romance <i class="fas fa-arrow-right"></i></p></a>');
  } else if (label == "fox") {
    camera.html('<a href="https://tattour.danipolak.com/TDP/023.html"><p>traveling fox <i class="fas fa-arrow-right"></i></p></a>');
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
