var w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("data_worker.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

/*function stopWorker() {
    w.terminate();
    w = undefined;
}*/


/*function calculateNumber()
{
    words = '[{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"},{"bar" : "Hello"},{"bar" : "Hello"},{"bar": "Hello"}]';
    var obj = JSON.parse(words);
    var count = 0;
    for (i in obj)
    {
        for(var j = 0; j < 10000000; j++)
            count++;

    }

    return count;
}*/