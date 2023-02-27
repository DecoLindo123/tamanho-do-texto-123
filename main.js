
pulsoD = 0;
pulsoE = 0;
diferenca = 0;

function preload()
{

}

function draw()
{
    background("#02a154");
    textSize(diferenca);
    fill("#00060f");
    text("André", 50, 200);
    document.getElementById("quadrado").innerHTML = "O tamanho da fonte será:" + diferenca + "px";
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500)
    canvas = createCanvas(500, 500);
    canvas.position(500, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet inicializado");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        pulsoD = results[0].pose.rightWrist.x;
        pulsoE = results[0].pose.leftWrist.y; 
        diferenca = floor(pulsoE - pulsoD);
    }
}