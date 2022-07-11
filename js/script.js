const randomFolks = document.querySelector(".random-peeps");
const selectUserName = document.querySelector(".num-users");
// const selectUserNumber =

const getData = async function (numUsers) {
  let usersRequest = await fetch(
    `https://randomuser.me/api?results=${numUsers}`
  );
  let data = await usersRequest.json();
  let userResults = data.results;
  console.log(userResults);
  displayUsers(userResults);
};

getData();

const displayUsers = function (userResults) {
  randomFolks.innerHTML = "";
  for (let user of userResults) {
    let country = user.location.country;
    let name = user.name.first;
    let imageURL = user.picture.medium;
    let userDiv = document.createElement("div");
    userDiv.innerHTML = `<h3>${name}</h3>
                         <p>${country}</p>
                        <img src=${imageURL} alt="user avatar">`;
    randomFolks.append(userDiv);
  }
};

selectUserName.classList.remove("hide");
selectUserName.addEventListener("change", function (e) {
  let numUsers = e.target.value;
  getData(numUsers);
});
