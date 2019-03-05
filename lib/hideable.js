export const inputMenu = () => {
    let openButton = document.getElementById("open-inputs")
    openButton.onclick = () =>{
        document.getElementById("hideable-inputs").classList.toggle("show");
        openButton.classList.toggle("show");
    }
   let closeButton = document.getElementById("close-inputs");
   closeButton.onclick = () => {
    document.getElementById("hideable-inputs").classList.toggle("show");
    openButton.classList.toggle("show");
   }

}