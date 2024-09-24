let el = document.querySelectorAll("button");
let winner = document.querySelector(".playing"); // Use querySelector to get the single element
let player = "1";
let player01 = document.querySelector(".left");
let player02 = document.querySelector(".right");
function hover1(t) {
    if (t == "1") {
        player01.style.border = "2px solid white";
    }
    else if (t == "2") {
        player02.style.border = "2px solid white";
    }
}
console.log(el[0].textContent);

function removehover(p) {
    if (p == "1") {
        player01.style.border = "none";
    }
    else if (p == "2") {
        player02.style.border = "none";
    }

}
let n = 0;
// function chk_withdraw(n) {
//     if (n == 9) {
//         console.log("withdraw");
//         winner.innerText = "Withdraw";


//         setTimeout(() => {
//             window.location.reload();
//         }, 5000); // 5000 milliseconds = 5 seconds
//     }

// }

function decelare_winner(l) {
    let winnerName = "";

    if (l === "x") {
        console.log("x is the winner");
        winnerName = "Atavus";
        winner.innerText = `Winner: ${winnerName}`;
        setTimeout(() => {
            alert(`The winner of the game is: ${winnerName}`);
        }, 1000)
    } else if (l === "o") {
        console.log("o is the winner");
        winnerName = "Kimera";
        winner.innerText = `Winner: ${winnerName}`;
        setTimeout(() => {
            alert(`The winner of the game is: ${winnerName}`);
        }, 1000)
    }
    else if (l == "n") {
        console.log("no winner");
        winner.innerText = "Withdraw";
        setTimeout(() => {
            alert("The game is withdraw");
        }, 1000)

    }
   

    // Reload the page after 5 seconds
    setTimeout(() => {
        window.location.reload();
    }, 5000); // 5000 milliseconds = 5 seconds
}

let b = 0;
let w = 0;
function win_fun(p) {
    b++;
    if (el[0].textContent == p && el[4].textContent == p && el[8].textContent == p) {
        decelare_winner(p);

    }
    else if (el[0].textContent == p && el[1].textContent == p && el[2].textContent == p) {
        decelare_winner(p);
        w = 1;
    }
    else if (el[0].textContent == p && el[3].textContent == p && el[6].textContent == p) {
        decelare_winner(p);
        w = 1;
    }
    else if (el[3].textContent == p && el[4].textContent == p && el[5].textContent == p) {
        decelare_winner(p);
        w = 1;
    }
    else if (el[6].textContent == p && el[7].textContent == p && el[8].textContent == p) {
        decelare_winner(p);
        w = 1;
    }
    else if (el[1].textContent == p && el[4].textContent == p && el[7].textContent == p) {
        decelare_winner(p);
        w = 1;
    }
    else if (el[2].textContent == p && el[5].textContent == p && el[8].textContent == p) {
        decelare_winner(p);
        w = 1;
    }
    else if (el[2].textContent == p && el[4].textContent == p && el[6].textContent == p) {
        decelare_winner(p);
        w = 1;
    }
    else if (b == 9 && w == 0) {
        decelare_winner("n");
    }
}


el[0].addEventListener("click", () => {
    // console.log("0");
    if (player == "1") {
        el[0].innerText = "x";
        removehover(player);
        console.log(el[0].textContent);
        player = "2";
        hover1(player);
        win_fun("x");
        el[0].style.color = "rgb(255, 99, 8)";
        el[0].style.fontSize = "3.5vw";
    }
    else if (player == "2") {
        removehover(player);
        el[0].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[0].style.color = "rgb(68, 243, 193)";
        el[0].style.fontSize = "3.5vw";

    }
})

el[1].addEventListener("click", () => {
    if (player == "1") {
        el[1].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[1].style.color = "rgb(255, 99, 8)";
        el[1].style.fontSize = "3.5vw";
    }
    else if (player == "2") {
        removehover(player);
        el[1].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[1].style.color = "rgb(68, 243, 193)";
        el[1].style.fontSize = "3.5vw";

    }
})
// hover1(player);
el[2].addEventListener("click", () => {
    if (player == "1") {
        el[2].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[2].style.color = "rgb(255, 99, 8)";
        el[2].style.fontSize = "3.5vw";
    }
    else if (player == "2") {
        removehover(player);
        el[2].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[2].style.color = "rgb(68, 243, 193)";
        el[2].style.fontSize = "3.5vw";

    }
})
el[3].addEventListener("click", () => {
    if (player == "1") {
        el[3].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[3].style.color = "rgb(255, 99, 8)";
        el[3].style.fontSize = "3.5vw";
    }
    else if (player == "2") {
        removehover(player);
        el[3].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[3].style.color = "rgb(68, 243, 193)";
        el[3].style.fontSize = "3.5vw";

    }
})
el[4].addEventListener("click", () => {
    if (player == "1") {
        el[4].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[4].style.color = "rgb(255, 99, 8)";
        el[4].style.fontSize = "3.5vw";
    }
    else if (player == "2") {
        removehover(player);
        el[4].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[4].style.color = "rgb(68, 243, 193)";
        el[4].style.fontSize = "3.5vw";

    }
})
el[5].addEventListener("click", () => {
    if (player == "1") {
        el[5].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[5].style.color = "rgb(255, 99, 8)";
        el[5].style.fontSize = "3.5vw";

    }
    else if (player == "2") {
        removehover(player);
        el[5].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[5].style.color = "rgb(68, 243, 193)";
        el[5].style.fontSize = "3.5vw";

    }
})
el[6].addEventListener("click", () => {
    if (player == "1") {
        el[6].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[6].style.color = "rgb(255, 99, 8)";
        el[6].style.fontSize = "3.5vw";
    }
    else if (player == "2") {
        removehover(player);
        el[6].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[6].style.color = "rgb(68, 243, 193)";
        el[6].style.fontSize = "3.5vw";

    }
})
el[7].addEventListener("click", () => {
    if (player == "1") {
        el[7].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[7].style.color = "rgb(255, 99, 8)";
        el[7].style.fontSize = "3.5vw";
    }
    else if (player == "2") {
        removehover(player);
        el[7].innerText = "o";
        player = "1";
        hover1(player);
        win_fun("o");
        el[7].style.color = "rgb(68, 243, 193)";
        el[7].style.fontSize = "3.5vw";

    }
})
el[8].addEventListener("click", () => {
    if (player == "1") {
        el[8].innerText = "x";
        removehover(player);
        player = "2";
        hover1(player);
        win_fun("x");
        el[8].style.color = "rgb(255, 99, 8)";
        el[8].style.fontSize = "3.5vw";
    }
    else if (player == "2") {

        removehover(player);
        win_fun("o");
        el[8].innerText = "o";
        el[8].style.color = "rgb(68, 243, 193)";
        el[8].style.fontSize = "3.5vw";
        player = "1";
        hover1(player);


    }
})

// location.reload(true);

