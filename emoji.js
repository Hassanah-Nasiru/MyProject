const emojis = document.querySelectorAll("emoji")
const big = document.getElementById("big-emoji")

emojis.forEach(emoji => {
    emoji.addEventListener("click", () =>{
        big.textContent = emoji.textContent;
    })    
});
