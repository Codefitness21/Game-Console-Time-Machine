document.getElementById("atari").onclick = gameAtari;
document.getElementById("nintendo").onclick = gameNintendo;
document.getElementById("supernin").onclick = gameSupernin;
document.getElementById("nin64").onclick = gameSixtyFour;
document.getElementById("sega").onclick = gameSega;
document.getElementById("nintendowii").onclick = gameNintendowii;
document.getElementById("playstation").onclick = gamePlaystation;
document.getElementById("xbox").onclick = getXbox;

function gameAtari() {
  document.querySelector("body").style.backgroundImage =
    "url(https://i.redd.it/q4cya3ivthqc1.gif)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
}

function gameNintendo() {
  document.querySelector("body").style.backgroundImage =
    "url(https://i.gifer.com/wfr.gif)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundPosition = "center";
}
function gameSupernin() {
  document.querySelector("body").style.backgroundImage =
    "url(https://media.tenor.com/GJaS8Ik99xwAAAAd/a-link-to-the-past-the-legend-of-zelda.gif)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
}
function gameSixtyFour() {
  document.querySelector("body").style.backgroundImage =
    "url(https://mb.srb2.org/attachments/kart0059-gif.60510/)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
}
function sega() {
  document.querySelector("body").style.backgroundImage =
    "url(https://mb.srb2.org/attachments/kart0059-gif.60510/)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
}
function gameSega() {
  document.querySelector("body").style.backgroundImage =
    "url(https://i.makeagif.com/media/1-15-2016/T81vAt.gif)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
}
function gameNintendowii() {
  document.querySelector("body").style.backgroundImage =
    "url(https://i.makeagif.com/media/6-06-2021/TDGTzQ.gif)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
}
function gamePlaystation() {
  document.querySelector("body").style.backgroundImage =
    "url(https://i.makeagif.com/media/10-15-2015/YPlVoG.gif)";
  document.querySelector("body").style.backgroundSize = "cover";
}
function getXbox() {
  document.querySelector("body").style.backgroundImage =
    "url(https://www.alphabetagamer.com/wp-content/uploads/2017/09/Fortnite-Battle-Royale-Game-Download.gif)";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
}
