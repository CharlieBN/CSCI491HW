function readData()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            //var count = calculateNumber();
            var count = 0;
            var obj = JSON.parse(this.responseText);
            var finalInfo = "";
            for (i in obj)
            {
                finalInfo += "Label: " + obj[i].label + " Count:" + obj[i].count + "Peak24: " + obj[i].peak24 + "\n";
            }
            postMessage(finalInfo);
        }
        /*else
        {
            alert(this.status);
        }*/
    };
    xmlhttp.open("GET", "json/bf4onlinePlayers.json", true);
    xmlhttp.send();

}

readData();