// Set default value
localStorage.setItem('team1', 0);
localStorage.setItem('team2', 0);
var i = 0;

const bc = new BroadcastChannel("scoreboard");

function team1Add() {
    var add1 = ++i;
    document.getElementById("team1score").innerHTML = add1;
    localStorage.setItem('team1', add1);
        
    // Send messages refresh data in output source "browser source"
    refreshData();
}

function team1Subtract() {
    var subtract1 = --i;
    document.getElementById("team1score").innerHTML = subtract1;
    localStorage.setItem('team1', subtract1);
    refreshData();
}

function team1Reset() {
    i = 0;
    document.getElementById("team1score").innerHTML = i;
    localStorage.setItem('team1', i);
    refreshData();
}

var j = 0;

function team2Add() {
    var add2 = ++j;
    document.getElementById("team2score").innerHTML = add2;
    localStorage.setItem('team2', add2);
    refreshData();
}

function team2Subtract() {
    var subtract2 = --j;
    document.getElementById("team2score").innerHTML = subtract2;
    localStorage.setItem('team2', subtract2);
    refreshData();
}

function team2Reset() {
    j = 0;
    document.getElementById("team2score").innerHTML = j;
    localStorage.setItem('team2', j);
    refreshData();
}

function refreshData() {
    bc.postMessage("refresh");
}
