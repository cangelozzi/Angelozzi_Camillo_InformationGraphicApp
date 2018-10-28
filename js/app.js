(() => {
  console.log("Welcome to my Blockchain Infographic");

  //! VARIABLES

  // canvas chart
  let ctx = document.getElementById("myChart");
  let labels = [];
  let dataChart = [];

  // repeat animation button with event on click
  const repeat = document
    .querySelector("#repeat")
    .addEventListener("click", () => {
      window.location.reload(true);
    });

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
    let titles = document.querySelectorAll(".title");
    titles.forEach((title, index) => {
      title.textContent = data[index].concept_title;
    });

    // description
    let descriptions = document.querySelectorAll(".desc");
    descriptions.forEach((desc, index) => {
      desc.textContent = data[index].concept_details;
    });

    // images
    let concepts_imgs = document.querySelectorAll(".concepts_grid-icon");
    concepts_imgs.forEach((img, index) => {
      img.src += data[index].concept_img;
    });
  }

  // create chart in canvas
  function getChart() {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "1 BTC Value in USD",
            fill: true,
            backgroundColor: "rgba(249,165,14, 0.6)",
            pointBackgroundColor: "#f9a50e",
            pointHoverBackgroundColor: "#f9a50e",
            pointHoverBorderColor: "#e6e6e6",
            borderColor: "#e6e6e6",
            pointRadius: 4,
            data: dataChart
          }
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: "#e6e6e6"
          }
        },
        plugins: {
          deferred: {
            xOffset: 80, // defer until 80px of the canvas width are inside the viewport
            yOffset: "20%", // defer until 20% of the canvas height are inside the viewport
            delay: 190 // delay of 190 ms after the canvas is considered inside the viewport
          }
        }
      }
    });
  }

  // Get current BPI value from CoinDesk API
  function getBitcoinValue() {
    fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then(res => res.json())
      .then(data => {
        console.log(data.bpi);
        for (let prop in data.bpi) {
          labels.push(prop);
          dataChart.push(Number(data.bpi[prop].toFixed(2)));
        }

        // populate chart from async results from CoinDesk API
        const myLineChart = getChart();
      })
      .catch(error => {
        console.log(error);
      });
  }

  //! EVENTS

  // events on load
  window.addEventListener("load", () => {
    getBitcoinValue();
    concepts(conceptData);

    // initialize Sal.js - https://github.com/mciastek/sal
    sal({
      threshold: 0.5
      // once: false,
    });
  });
})();
