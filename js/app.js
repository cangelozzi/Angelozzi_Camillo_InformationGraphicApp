(() => {
  console.log("Welcome to my Blockchain Infographic");

  //! VARIABLES
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

  //! EVENTS
})();
