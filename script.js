document.addEventListener("DOMContentLoaded", function() {
    var request = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/list/all";
    
    request.open('GET', url, true);
    request.send();

    request.onload = function() {
        if (request.status == 200 && request.readyState == 4) {
            var data = JSON.parse(this.response);
            populateBreedTable(data.message);
        } else {
            alert("Page Status: " + request.status);
            console.log("Page Status: " + request.status);
        }
    };

    request.onerror = function() {
        console.log("Connection failed");
        alert("Connection failed");
    };

    function populateBreedTable(breeds) {
        var breedTableBody = document.querySelector("#breedTable tbody");

        for (var breed in breeds) {
            var row = breedTableBody.insertRow();
            
            var cellBreed = row.insertCell(0);
            cellBreed.innerHTML = breed;

            var cellCount = row.insertCell(1);
            cellCount.innerHTML = breeds[breed].length;
        }
    }
});
