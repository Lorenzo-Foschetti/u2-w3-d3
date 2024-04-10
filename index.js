const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Generic Fetch Error");
      }
    })
    .then((booksData) => {
      console.log(booksData);

      const row = document.getElementById("books-row");

      booksData.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
                <img src=${book.img} class="card-img-top" alt="...">
                <div class="card-body position-relative border border-primary">
                    <p class="card-text">${book.title}</p>
                    <p class="card-text">${book.price}</p>
                    <button type="button" class="btn btn-primary position-absolute bottom-0">Scarta</button>
                </div>`;

        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((error) => console.log(error));
};

window.onload = () => {
  fetchBooks();
};

const button = document.querySelectorAll("button");
bu;
