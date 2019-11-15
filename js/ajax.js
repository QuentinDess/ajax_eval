
document.querySelector(".fa-search").addEventListener("click", () => {

    // Contiendra la valeur nom de la planéte recherché
    
    let planet = document.querySelector("input").value;
    // Permet d'aller récupérer des informations provenant d'une ressource externe :
    fetch(`https://swapi.co/api/planets/${planet}`)
    
    // Quand la requête fetch() est terminée, on stocke son contenu dans la variable response
    .then((response) => {
        response.json()
        .then((data) => {
            debugger;
          
        // A chaque clic du bouton, on vide notre balise search result
        document.querySelector(".search_result").innerHTML = '';
        
        // Création de la <table> en HTML
        let tableElement = document.createElement("table");
        tableElement.style.border="black 1px solid";
        tableElement.style.marginBottom="5%";
        tableElement.style.marginTop="5%";
        tableElement.style.marginLeft="auto";
        tableElement.style.marginRight="auto";
        tableElement.style.width="90%";
        document.querySelector(".search_result").appendChild(tableElement);

        // Création de notre <thead> en HTML
        let theadElement = document.createElement("thead");
        theadElement.style.background="black";
        theadElement.style.color="yellow";
        tableElement.appendChild(theadElement);
        
        // Création de notre premier <tr> en HTML
        let trElement1 = document.createElement("tr");
        theadElement.appendChild(trElement1);

        // Création de nos <th> en HTML
       
        let thElement1 = document.createElement("th");
        let thElement2 = document.createElement("th");
        let thElement3 = document.createElement("th")
        let thElement4 = document.createElement("th");
        let thElement5 = document.createElement("th");
        let thElement6 = document.createElement("th");
        let thElement7 = document.createElement("th");
        let thElement8 = document.createElement("th");
       

        // Insertion de données dans nos <th>
        thElement1.innerHTML = "Name";
        thElement2.innerHTML = "Temps de rotation";
        thElement3.innerHTML = "Rotation Systeme";
        thElement4.innerHTML = "Diamètre";
        thElement5.innerHTML = "Climat";
        thElement6.innerHTML = "Type de Gravité";
        thElement7.innerHTML = "Surface en % de l'eau";
        thElement8.innerHTML = "Population";

        trElement1.appendChild(thElement1);
        trElement1.appendChild(thElement2);
        trElement1.appendChild(thElement3);
        trElement1.appendChild(thElement4);
        trElement1.appendChild(thElement5);
        trElement1.appendChild(thElement6);
        trElement1.appendChild(thElement7);
        trElement1.appendChild(thElement8);

        // Création de notre <tbody> et ajout à notre <table>
        let tbodyElement = document.createElement("tbody");
        tbodyElement.style.background="white";
        tableElement.appendChild(tbodyElement);

        // Création de notre second <tr> et ajout à notre <tbody>
        let trElement2 = document.createElement("tr");
        tbodyElement.appendChild(trElement2);

        // Création de nos <td> en HTML
        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement3 = document.createElement("td");
        let tdElement4 = document.createElement("td");
        let tdElement5 = document.createElement("td");
        let tdElement6 = document.createElement("td");
        let tdElement7 = document.createElement("td");
        let tdElement8 = document.createElement("td");

        // Insertion de données dans nos <td>
        tdElement1.innerHTML = data.name;
        tdElement2.innerHTML = data.rotation_period;
        tdElement3.innerHTML = data.orbital_period;
        tdElement4.innerHTML = data.diameter;
        tdElement5.innerHTML = data.climate;
        tdElement6.innerHTML = data.gravity;
        tdElement7.innerHTML = data.surface_water;    
        tdElement8.innerHTML = data.population;
        
        trElement2.appendChild(tdElement1);
        trElement2.appendChild(tdElement2);
        trElement2.appendChild(tdElement3);
        trElement2.appendChild(tdElement4);
        trElement2.appendChild(tdElement5);
        trElement2.appendChild(tdElement6);
        trElement2.appendChild(tdElement7);
        trElement2.appendChild(tdElement8);
        document.querySelectorAll("td").forEach(element => {
            element.style.textAlign="center";
            
        });
        })
    })
});
