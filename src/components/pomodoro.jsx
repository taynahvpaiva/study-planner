import { useState, useEffect } from "react";

export default function Pomodoro() {
const [minutesInput, setMinutesInput] = useState(25);
const [time, setTime] = useState(25 * 60);
const [running, setRunning] = useState(false);

useEffect(() => {
if (!running) return;

const timer = setInterval(() => {
setTime((prev) => {
if (prev === 0) {
clearInterval(timer);
setRunning(false);
alert("Tempo finalizado!");
return minutesInput * 60;
}
return prev - 1;
});
}, 1000);

return () => clearInterval(timer);
}, [running, minutesInput]);

const iniciar = () => {
setTime(minutesInput * 60);
setRunning(true);
};

const reiniciar = () => {
setRunning(false);
setTime(minutesInput * 60);
};

const minutes = String(Math.floor(time / 60)).padStart(2, "0");
const seconds = String(time % 60).padStart(2, "0");

return (
<div className="pomodoro">
<h2>Relógio Pomodoro</h2>

<label>Escolha o tempo (minutos):</label>
<br />

<input
type="number"
min="1"
max="120"
value={minutesInput}
onChange={(e) => setMinutesInput(Number(e.target.value))}
/>

<h1>{minutes}:{seconds}</h1>

<button onClick={iniciar}>Iniciar</button>
<button onClick={() => setRunning(false)}>Pausar</button>
<button onClick={reiniciar}>Reiniciar</button>
</div>
);
}