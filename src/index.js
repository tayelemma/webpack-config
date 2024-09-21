import fetchHandler from "./fetchHandler";
import "../styles/main.scss";
import laughSvg from './assets/laughing.svg';

const img = document.getElementById('laughImg');
img.src = laughSvg;

const nextBtn = document.getElementById('btn');
nextBtn.addEventListener('click', fetchHandler);
fetchHandler();
