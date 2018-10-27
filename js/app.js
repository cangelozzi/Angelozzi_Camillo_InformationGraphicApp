(() => {
  console.log("Welcome to my Blockchain Infographic");

  //! VARIABLES

  // repeat animation button with event on click
  const repeat = document.querySelector('#repeat').addEventListener('click', () => {window.location.reload(true);});

  // bodymovin script
  let animation = bodymovin.loadAnimation({
    container: document.getElementById("bm"),
    render: "svg",
    loop: false,
    autoplay: true,
    path: "data.json"
  });

  //! FUNCTIONS

  // popoulate concepts details
  function concepts(data) {
    
    // title
    let titles = document.querySelectorAll('.title');
    titles.forEach((title, index) => {
      title.textContent = data[index].concept_title;
    });

    // description
    let descriptions = document.querySelectorAll('.desc');
    descriptions.forEach((desc, index) => {
      desc.textContent = data[index].concept_details;
    });

    // images
    let concepts_imgs = document.querySelectorAll('.concepts_grid-icon');
    concepts_imgs.forEach((img, index) => {
      img.src += data[index].concept_img;
    });

  }

  //! EVENTS
  concepts(conceptData);
})();
