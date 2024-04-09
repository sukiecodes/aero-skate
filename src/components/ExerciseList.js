import React from 'react';
import './ExerciseList.css';

const techniques = [
  {
    name: "Classic Butekyo Breathing Technique",
    steps: [
      "Breathe normally for 2 minutes.",
      "After a relaxed exhale, hold your breath by pinching your nose closed with your index finger and thumb.",
      "Once you feel the urge to breathe, inhale largely.",
      "Breathe normally for 10-15 seconds.",
      "Repeat steps 1-4 a total of three times."
    ]
  },

  {
    name: "Twist on Buteyko Breathing",
    steps: [
      "Take small breaths in and out for a total of five times.",
      "On your fifth exhale, hold your breath until you feel the strong urge to breathe in.",
      "Take normal breaths to sustain your breath as needed."
    ]
  },

  {
    name: "Papworth Method",
    steps: [
      "Lie down comfortably on your back.",
      "Relax your body and mind, focusing on letting go of any tension.",
      "Slowly take a deep breath in through your nose, filling your lungs with air and feeling your abdomen expand.",
      "Exhale slowly through your mouth, feeling your abdomen gently contract while keeping your chest and shoulders relaxed.",
      "Repeat steps 3-4 as many times as needed until you feel calmer."
    ]
  },

  {
    name: "Pursed Lip Breathing",
    steps: [
      "Breathe in slowly through your nose with your mouth closed.",
      "Purse your lips as if you're about to whistle.",
      "Breathe out slowly through your pursed lips for a count of four."
    ]
  },

  {
    name: "Yoga Breathing",
    steps: [
      "Get into a comfortable yoga cobra pose (lying on your stomach with your upper body propped up).",
      "Inhale slowly through your nose for a count of four, feeling your chest and abdomen expand.",
      "Exhale slowly through your mouth for a count of four, feeling your chest and abdomen contract.",
      "Repeat steps 2-3 several times, maintaining the cobra pose and focusing on your breath."
    ]
  }
];


function ExerciseList() {
  return (
    <div className="exercises">
      <h1>Exercises</h1>
      <ul>
        {techniques.map((technique, index) => (
          <li key={index}>
            <h2>{technique.name}</h2>
            <ol>
              {technique.steps.map((step, stepIndex) => (
                <li key={stepIndex}>
                  <div className="step-container">
                    {step}
                  </div>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ExerciseList;