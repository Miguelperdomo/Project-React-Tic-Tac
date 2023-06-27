const emptyFields = () => {
  let inputOne = document.getElementById("playerOne").value;
  let inputTwo = document.getElementById("letterOne").value;
  let inputThree = document.getElementById("playerTwo").value;
  let inputFour = document.getElementById("letterTwo").value;

  if (
    inputOne === "" ||
    inputTwo === "" ||
    inputThree === "" ||
    inputFour === ""
  ) {
    alert("Empty fields please enter information to the fields");
    ("#");
  } else if (inputTwo === inputFour) {
    alert("juju. You cant play with the same letter");
  } else {
    var valor;
    var valor1;
    var value2;
    var value3;
    function obtainValue() {
      var playerOne = document.getElementById("playerOne");
      var playerTwo = document.getElementById("playerTwo");
      var letterOne = document.getElementById("letterOne");
      var letterTwo = document.getElementById("letterTwo");
      valor = playerOne.value;
      valor1 = playerTwo.value;
      value2 = letterOne.value;
      value3 = letterTwo.value;

      document.getElementById("result").innerHTML = valor;
      document.getElementById("result1").innerHTML = valor1;
      document.getElementById("result2").innerHTML = value2;
      document.getElementById("result3").innerHTML = value3;
    }

    obtainValue();
    console.log(valor);

    const chart = document.querySelectorAll(".chart");
    const information = document.getElementById("game-information");
    const game_btn = document.getElementById("game-button");
    let i = 1;
    const jBtn_e = "pointer-events:initial;opacity:initial;",
      jBtn_d = "pointer-events:none;opacity:40%;";
    let state = false;

    var pWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    function findOut() {
      game_btn.style.cssText = jBtn_d;
      for (let v = 0; v < pWin.length; v++) {
        if (
          chart[pWin[v][0]].innerHTML === value2 &&
          chart[pWin[v][1]].innerHTML === value2 &&
          chart[pWin[v][2]].innerHTML === value2
        ) {
          information.innerHTML = `${valor} WON`;
          state = true;
          disableCheckBoxes();
        } else if (
          chart[pWin[v][0]].innerHTML === value3 &&
          chart[pWin[v][1]].innerHTML === value3 &&
          chart[pWin[v][2]].innerHTML === value3
        ) {
          information.innerHTML = `${valor1} WON`;
          state = true;
          disableCheckBoxes();
        }
      }
      if (
        chart[0].innerHTML != "" &&
        chart[1].innerHTML != "" &&
        chart[2].innerHTML != "" &&
        chart[3].innerHTML !== "" &&
        chart[4].innerHTML != "" &&
        chart[5].innerHTML != "" &&
        chart[6].innerHTML != "" &&
        chart[7].innerHTML != "" &&
        chart[8].innerHTML != "" &&
        state == false
      ) {
        information.innerHTML = "DRAW";
        disableCheckBoxes(false);
      }
    }

    function disableCheckBoxes(e) {
      e == false ? (i = Math.floor(Math.random() * (3 - 1)) + 1) : 0;
      for (let n_button = 0; n_button < chart.length; n_button++) {
        chart[n_button].style.setProperty("pointer-events", "none");
      }
      game_btn.style.cssText = jBtn_e;
    }

    function startName() {
      game_btn.style.cssText = jBtn_d;
      let c1;
      i % 2 == 0 ? (c1 = valor) : (c1 = valor1);
      information.innerHTML = `Press any square to start: <b>"${c1}"</b> starts.`;
    }

    chart.forEach((button) => {
      button.onclick = function () {
        information.innerHTML = "";
        i % 2 == 0 ? (button.innerHTML = value2) : (button.innerHTML = value3);
        findOut();
        button.style.setProperty("pointer-events", "none");
        i++;
        i == 3 ? (i = 1) : 0;
      };
    });

    game_btn.onclick = function () {
      for (let nButton = 0; nButton < chart.length; nButton++) {
        chart[nButton].style.cssText = "pointer-events:initial;";
        chart[nButton].innerHTML = "";
        state = false;
      }
      startName();
    };

    startName();
  }
};
