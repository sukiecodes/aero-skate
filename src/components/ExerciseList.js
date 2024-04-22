import React from 'react';
import './ExerciseList.css';

const techniques = [
  {
    name: "Classic Butekyo Breathing Technique", 
    steps: [
      "1. Breathe normally for 2 minutes.",
      "2. After a relaxed exhale, hold your breath by pinching your nose closed with your index finger and thumb.",
      "3. Once you feel the urge to breathe, inhale largely.",
      "4. Breathe normally for 10-15 seconds.",
      "5. Repeat steps 1-4 a total of three times."
    ],
    id: 1
  },

  {
    name: "Twist on Buteyko Breathing",
    steps: [
      "1. Take small breaths in and out for a total of five times.",
      "2. On your fifth exhale, hold your breath until you feel the strong urge to breathe in.",
      "3. Take normal breaths to sustain your breath as needed."
    ],
    id: 2
  },

  {
    name: "Papworth Method",
    steps: [
      "1. Lie down comfortably on your back.",
      "2. Relax your body and mind, focusing on letting go of any tension.",
      "3. Slowly take a deep breath in through your nose, filling your lungs with air and feeling your abdomen expand.",
      "4. Exhale slowly through your mouth, feeling your abdomen gently contract while keeping your chest and shoulders relaxed.",
      "5. Repeat steps 3-4 as many times as needed until you feel calmer."
    ],
    id: 3
  },

  {
    name: "Pursed Lip Breathing",
    steps: [
      "1. Breathe in slowly through your nose with your mouth closed.",
      "2. Purse your lips as if you're about to whistle.",
      "3. Breathe out slowly through your pursed lips for a count of four."
    ],
    id: 4
  },

  {
    name: "Yoga Breathing",
    steps: [
      "1. Get into a comfortable yoga cobra pose (lying on your stomach with your upper body propped up).",
      "2. Inhale slowly through your nose for a count of four, feeling your chest and abdomen expand.",
      "3. Exhale slowly through your mouth for a count of four, feeling your chest and abdomen contract.",
      "4. Repeat steps 2-3 several times, maintaining the cobra pose and focusing on your breath."
    ],
    id: 5
  }
];

function ExerciseList() {
  const listTechniques = techniques.map(technique => 
    <div class="grid">
      <div id={technique.id} className = "technique-id">
        <h2>{technique.name}</h2>
          <div class="stepsGrid">
            {technique.steps.map(step => <li>{step}</li>)}
          </div>
      </div>
    </div>
    );
  return (
    <div className="exercises">
      <h1>Exercises</h1>
      <ul style={{color:'white'}}>{listTechniques}</ul>  
    </div>
  );
}

export default ExerciseList;