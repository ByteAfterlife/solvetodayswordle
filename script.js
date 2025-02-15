window.onload = async () => {
const currentDate = new Date();
const y = currentDate.getFullYear();
const m = String(currentDate.getMonth() + 1).padStart(2, '0');
const d = String(currentDate.getDate()).padStart(2, '0');

const url = `https://corsproxy.io/?url=https://www.nytimes.com/svc/wordle/v2/${y}-${m}-${d}.json`; // NYT put a CORS restriction so we gotta use a CORS proxy.

try {
const response = await fetch(url);
const data = await response.json();
const solution = data.solution;

document.getElementById("ans").textContent = solution
} catch (error) {
console.error('Error:', error);
}
};
