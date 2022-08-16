// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();
    const userListEl = document.querySelector(".user-list");
    console.log(usersData);
    userListEl.innerHTML = usersData.map((user) => userHTML(user))
    .join("");
}

main();

// Use window.location to find url origin
function showUserPosts(id){
    // console.log(window.location);
    localStorage.setItem("id", id);
    window.location.href= `${window.location.origin}/user.html`;
    // console.log(id);
}

// Function is mapping through each index of UserData, and placing it into a new array
// The new array is the .join and listed under .user-list innerHTML
function userHTML(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
                <div class="user-card__container">
                    <h3>${user.name}</h4>
                        <p><b>Email:</b> ${user.email}</p>
                        <p><b>Phone:</b> ${user.phone}</p>
                        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}
                        </a></p>
                </div>
            </div>`;
}