import $ from 'jquery';
import _ from 'lodash';
import img from '../assets/holberton-logo.jpg';
import "../css/main.css";

$('body').append("<div id=logo></div>");
$('body').append("<p>Hamzie Dashboard</p>");
$('body').append("<p>Dashboard data for ALX SHORT COURSE</p>");
$('body').append("<button>Click here to get started</button");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - James Hamzie Kamara</p>");

let count = 0;
let infoClick = "";
let display = document.getElementById('count');
function updateCounter() {
    count++;
    infoClick = `${count} clicks on the button`;
    display.innerHTML = infoClick;
};

$('button').on('click', _.debounce(function()  {
    updateCounter();
}, 300));
