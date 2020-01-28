// TOP LEFT TOAST STARTS
document.querySelector(".top-left").addEventListener("click", () => {
  document.querySelector(".top-left-toast").classList.add("show");
  document.querySelector(".top-right-toast").classList.remove("show");
  document.querySelector(".bottom-right-toast").classList.remove("show");
  document.querySelector(".bottom-left-toast").classList.remove("show");
  setTimeout(() => {
    document.querySelector(".top-left-toast").classList.remove("show");
  }, 4000);
});
document.querySelector(".close-top-left").addEventListener("click", () => {
  document.querySelector(".top-left-toast").classList.remove("show");
});

// TOP LEFT TOAST ENDS

// TOP RIGHT TOAST STARTS
document.querySelector(".top-right").addEventListener("click", () => {
  document.querySelector(".top-right-toast").classList.add("show");
  document.querySelector(".top-left-toast").classList.remove("show");
  document.querySelector(".bottom-right-toast").classList.remove("show");
  document.querySelector(".bottom-left-toast").classList.remove("show");
  setTimeout(() => {
    document.querySelector(".top-right-toast").classList.remove("show");
  }, 4000);
});

document.querySelector(".close-top-right").addEventListener("click", () => {
  document.querySelector(".top-right-toast").classList.remove("show");
});
// TOP RIGHT TOAST ENDS

// BOTTOM LEFT TOAST STARTS
document.querySelector(".bottom-left").addEventListener("click", () => {
  document.querySelector(".bottom-left-toast").classList.add("show");
  document.querySelector(".top-left-toast").classList.remove("show");
  document.querySelector(".bottom-right-toast").classList.remove("show");
  document.querySelector(".top-right-toast").classList.remove("show");
  setTimeout(() => {
    document.querySelector(".bottom-left-toast").classList.remove("show");
  }, 4000);
});

document.querySelector(".close-bottom-left").addEventListener("click", () => {
  document.querySelector(".bottom-left-toast").classList.remove("show");
});

// BOTTOM LEFT TOAST ENDS

// BOTTOM RIGHT TOAST STARTS
document.querySelector(".bottom-right").addEventListener("click", () => {
  document.querySelector(".bottom-right-toast").classList.add("show");
  document.querySelector(".top-left-toast").classList.remove("show");
  document.querySelector(".bottom-left-toast").classList.remove("show");
  document.querySelector(".top-right-toast").classList.remove("show");
  setTimeout(() => {
    document.querySelector(".bottom-right-toast").classList.remove("show");
  }, 4000);
});

document.querySelector(".close-bottom-right").addEventListener("click", () => {
  document.querySelector(".bottom-right-toast").classList.remove("show");
});
// BOTTOM RIGHT TOAST ENDS
