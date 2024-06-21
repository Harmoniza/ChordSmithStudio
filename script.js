import * as Tone from 'tone';

// Play a single note
document.getElementById('playNoteButton').addEventListener('click', () => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease('C4', '8n');
});

// Play a chord based on selection
document.getElementById('playChordButton').addEventListener('click', () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const chord = document.getElementById('selectChord').value;
  const notes = getChordNotes(chord);
  synth.triggerAttackRelease(notes, '2n');
});

// Play a chord progression
document.getElementById('playChordProgressionButton').addEventListener('click', () => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const progression = [
    ['C4', 'E4', 'G4', 'B4'],
    ['D4', 'F4', 'A4', 'C5'],
    ['G4', 'B4', 'D5', 'F5'],
    ['A4', 'C5', 'E5', 'G5']
  ];
  let time = 0;
  progression.forEach(chord => {
    synth.triggerAttackRelease(chord, '2n', time);
    time += Tone.Time('2n').toSeconds();
  });
});

// Play a scale based on selection
document.getElementById('playScaleButton').addEventListener('click', () => {
  const synth = new Tone.Synth().toDestination();
  const scale = document.getElementById('selectScale').value;
  const notes = getScaleNotes(scale);
  let time = 0;
  notes.forEach(note => {
    synth.triggerAttackRelease(note, '8n', time);
    time += Tone.Time('8n').toSeconds();
  });
});

// Utility function to get chord notes
function getChordNotes(chord) {
  switch (chord) {
    case 'Cmaj7':
      return ['C4', 'E4', 'G4', 'B4'];
    case 'Dmin7':
      return ['D4', 'F4', 'A4', 'C5'];
    case 'G7':
      return ['G4', 'B4', 'D5', 'F5'];
    case 'Fmaj7':
      return ['F4', 'A4', 'C5', 'E5'];
    case 'Amin7':
      return ['A4', 'C5', 'E5', 'G5'];
    default:
      return ['C4', 'E4', 'G4', 'B4'];
  }
}

// Utility function to get scale notes
function getScaleNotes(scale) {
  switch (scale) {
    case 'C major':
      return ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    case 'D minor':
      return ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5'];
    case 'G major':
      return ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'];
    case 'A minor':
      return ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'];
    default:
      return ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
  }
}
