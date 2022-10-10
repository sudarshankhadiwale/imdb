
const divselect = document.getElementById("rowpass");

console.log(results);

function templates(items) {
    let temp = "";
    items.forEach(element => {
        temp += `<div class="col-sm-3">
        <figure class="fig">
            <img src=" ${IMG_path}${element.poster_path}" class="img-fluid">
            <figcaption>
                <div class="row align-items-center">
                    <div class="col-sm-9">
                        <h5>${element.title}</h5>

                    </div>
                    <div class="col-sm-3">
                        <p>${element.vote_average}</p>
                    </div>
                </div>
            </figcaption>
            <div class="overview">
                <h6>overview</h6>
                <p>${element.overview}</p>
            </div>
        </figure>


    </div>`
    });
    // console.log(temp);
    divselect.innerHTML = temp;
    return temp;
}


console.log(templates(results));