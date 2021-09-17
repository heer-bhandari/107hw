function kyra (){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bMgWbRaPv/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}