function preload(){
mustache=loadImage('https://i.postimg.cc/D0g3pyR2/image.png')
}
noseX=0;
noseY=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw(){
image(video, 0, 0,300 ,300);
image(mustache,noseX-25,noseY-10,60,60)
}

function Take_Snapshot(){
    save("Ahmad.png");
    
}

function modelLoaded(){
    console.log("Posenet is intialized xd cdsjhckjhcjkdxakcxgjcdagxghgxzhjcg meow ");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    console.log("nose_x ="  + results[0].pose.nose.x);
    console.log("nose_y ="  + results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    }

}

