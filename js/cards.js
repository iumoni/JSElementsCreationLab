body = document.getElementById("mainBody");
count =1;
function createCard() {
    // <div class="col....">
    divCol = document.createElement("div");
    divCol.classList.add("col-12", "col-md-4", "col-xl-3");

    // <div class="card">
    divCard = document.createElement("div");
    divCard.classList.add("card","mb-4");

    // <div class="card-body">
    divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    // <h5 class="card-title">
    h5CardTitle= document.createElement("h5");
    h5CardTitle.classList.add("card-title");
    h5CardTitle.innerText= count

    // <button class="btn btn-outline-success">
    buttonBtn = document.createElement("button");
    buttonBtn.classList.add("btn", "btn-outline-success");
    buttonBtn.innerText="Add new"

    

    // ponemos etiquetas dentro de etiquetas
    divCardBody.appendChild(h5CardTitle);
    divCardBody.appendChild(buttonBtn);
    divCard.appendChild(divCardBody);
    divCol.appendChild(divCard);
    body.appendChild(divCol);

    count ++;
    buttonBtn.addEventListener("click",createCard);
}
createCard();
