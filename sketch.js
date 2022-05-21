let mic;

function setup() {
  // mimics the autoplay policy
  getAudioContext().suspend();

  createCanvas(screen.availWidth - 100, screen.availHeight - 300);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  //   vol = vol[(vol.length - 5, vol.length)];
  //   let test = vol[(5, (vol.length - 5, vol.length))];
  console.log("test", test);

  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
}

function mousePressed() {
  userStartAudio();
}
