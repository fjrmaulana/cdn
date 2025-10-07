// let progres = document.getElementById("progres");
// let originalWidth = progres.offsetWidth;

// function handleScroll() {
//   let scrollTop = window.scrollY;
//   let viewportHeight = window.innerHeight;
//   let contentHeight = progres.getBoundingClientRect().height;

//   if (window.innerWidth > 767.98) {
//     if (scrollTop >= contentHeight - viewportHeight) {
//       progres.style.transform = `translateY(-${contentHeight - viewportHeight}px)`;
//       progres.style.position = "fixed";
//       progres.style.width = `${originalWidth}px`;
//     } else {
//       progres.style.transform = "";
//       progres.style.position = "";
//       progres.style.width = "";
//     }
//   } else {
//     // Reset styles when the screen width is less than or equal to 767.98px
//     progres.style.transform = "";
//     progres.style.position = "";
//     progres.style.width = "";
//   }
// }

// window.onscroll = handleScroll;
// window.onresize = () => {
//   // Call handleScroll on resize to ensure the styles are updated correctly
//   handleScroll();
// };

// Initial call to handleScroll to ensure the styles are set correctly on page load
// handleScroll();

///

let progres = document.getElementById("progres");
let originalWidth = progres.offsetWidth;

function handleScroll() {
  let scrollTop = window.scrollY;
  let viewportHeight = window.innerHeight;
  let contentHeight = progres.getBoundingClientRect().height;

  if (window.innerWidth > 767.98) {
    if (scrollTop === 0) {
      progres.style.transform = "";
      progres.style.position = "";
      progres.style.width = "";
    } else if (scrollTop >= contentHeight - viewportHeight) {
      progres.style.transform = `translateY(-60px)`;
      progres.style.position = "fixed";
      progres.style.width = `${originalWidth}px`;
    } else {
      progres.style.transform = "";
      progres.style.position = "";
      progres.style.width = "";
    }
  } else {
    // Reset styles when the screen width is less than or equal to 767.98px
    progres.style.transform = "";
    progres.style.position = "";
    progres.style.width = "";
  }
}

window.onscroll = handleScroll;
window.onresize = () => {
  // Call handleScroll on resize to ensure the styles are updated correctly
  handleScroll();
};
