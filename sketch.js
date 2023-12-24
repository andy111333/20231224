let mouthOpen = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // 绘制小叮噹，第二个参数表示缩放因子，可以调整大小
  drawDoraemon(200, 200, 1, color(255, 0, 0)); // 1 表示原始大小，红色
  drawDoraemon(100, 100, 0.5, color(0, 255, 0)); // 0.5 表示缩小一半，绿色
  drawDoraemon(300, 300, 1.5, color(0, 0, 255)); // 1.5 表示放大一半，蓝色
}

function drawDoraemon(x, y, scale, faceColor) {
  // 画脸
  fill(faceColor);
  ellipse(x, y, 150 * scale, 150 * scale);

  // 画蓝色耳朵
  fill(0, 0, 255); // 蓝色
  triangle(x - 50 * scale, y - 50 * scale, x - 40 * scale, y - 90 * scale, x - 10 * scale, y - 60 * scale);
  triangle(x + 50 * scale, y - 50 * scale, x + 40 * scale, y - 90 * scale, x + 10 * scale, y - 60 * scale);

  // 画眼睛
  fill(0);
  var eyeSize = 20 * scale;
  var eyeOffsetX = 30 * scale;
  var eyeOffsetY = -20 * scale;
  
  // 计算眼睛的位置，随着鼠标移动
  var eye1X = x - eyeOffsetX + map(mouseX, 0, width, -5, 5);
  var eye1Y = y + eyeOffsetY + map(mouseY, 0, height, -5, 5);

  var eye2X = x + eyeOffsetX + map(mouseX, 0, width, -5, 5);
  var eye2Y = y + eyeOffsetY + map(mouseY, 0, height, -5, 5);

  ellipse(eye1X, eye1Y, eyeSize, eyeSize);
  ellipse(eye2X, eye2Y, eyeSize, eyeSize);

  // 画嘴巴
  if (mouthOpen) {
    noFill();
    stroke(0);
    arc(x, y + 20 * scale, 50 * scale, 30 * scale, 0, PI);
  }

  // 画胡须
  stroke(0);
  line(x - 40 * scale, y + 10 * scale, x - 70 * scale, y + 30 * scale);
  line(x - 40 * scale, y + 20 * scale, x - 70 * scale, y + 20 * scale);
  line(x - 40 * scale, y + 30 * scale, x - 70 * scale, y + 10 * scale);

  line(x + 40 * scale, y + 10 * scale, x + 70 * scale, y + 30 * scale);
  line(x + 40 * scale, y + 20 * scale, x + 70 * scale, y + 20 * scale);
  line(x + 40 * scale, y + 30 * scale, x + 70 * scale, y + 10 * scale);

  // 画鼻子
  fill(255, 0, 0);
  ellipse(x, y + 10 * scale, 10 * scale, 10 * scale);

  // 画脖子
  fill(255, 224, 189);
  rect(x - 25 * scale, y + 50 * scale, 50 * scale, 30 * scale);

  // 画铃铛
  fill(255, 255, 0); // 黄色
  ellipse(x, y + 60 * scale, 20 * scale, 20 * scale);
  line(x, y + 60 * scale + 10 * scale, x, y + 60 * scale + 30 * scale);

}

function mousePressed() {
  mouthOpen = !mouthOpen;
}