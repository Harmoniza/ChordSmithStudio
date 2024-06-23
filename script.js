import * as Tone from 'https://cdn.jsdelivr.net/npm/tone@latest/build/Tone.js';

document.getElementById('playNote').addEventListener('click', async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
});

document.getElementById('playChord').addEventListener('click', async () => {
    await Tone.start();
    const chord = ["C4", "E4", "G4"]; // C Major chord
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(chord, "4n");
});

document.getElementById('playScale').addEventListener('click', async () => {
    await Tone.start();
    const scale = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]; // C Major scale
    const synth = new Tone.Synth().toDestination();
    let now = Tone.now();
    scale.forEach(note => {
        synth.triggerAttackRelease(note, "8n", now);
        now += 0.5; // play each note half a second apart
    });
});
