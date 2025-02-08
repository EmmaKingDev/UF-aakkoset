import { useState } from "react";
import { Letter } from "../types";
import { initialLetterGroups } from "../data/letters";

export const LetterGame = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const currentGroup = initialLetterGroups[currentGroupIndex];
  const currentLetter = currentGroup.letters[currentLetterIndex];

  const handleLetterClick = (selectedLetter: Letter) => {
    const correct = selectedLetter.character === currentLetter.character;
    setIsCorrect(correct);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      if (correct) {
        if (currentLetterIndex < currentGroup.letters.length - 1) {
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else if (currentGroupIndex < initialLetterGroups.length - 1) {
          setCurrentGroupIndex(currentGroupIndex + 1);
          setCurrentLetterIndex(0);
        } else {
          setGameEnded(true);
        }
      }
    }, 700);
  };

  const handleRestart = () => {
    setCurrentGroupIndex(0);
    setCurrentLetterIndex(0);
    setGameEnded(false);
  };

  return (
    <div className="game-container">
      <div className="game-content">
        {!gameEnded ? (
          <>
            <div className="current-item">
              <div
                className="letter-display"
                style={{ backgroundColor: currentLetter.color }}
              >
                {currentLetter.character}
              </div>
              <div
                className="animal-container"
                style={{ backgroundColor: currentLetter.color + "20" }}
              >
                <div
                  className="animal-emoji"
                  role="img"
                  aria-label={currentLetter.animal}
                >
                  {currentLetter.animal === "KARHU" && "🐻"}
                  {currentLetter.animal === "MARSU" && "🐭"}
                  {currentLetter.animal === "APINA" && "🐒"}
                  {currentLetter.animal === "PÖLLÖ" && "🦉"}
                  {currentLetter.animal === "TIIKERI" && "🐯"}
                  {currentLetter.animal === "ILVES" && "🐱"}
                  {currentLetter.animal === "LAMMAS" && "🐑"}
                  {currentLetter.animal === "NORSU" && "🐘"}
                  {currentLetter.animal === "UNDULAATTI" && "🦜"}
                </div>
              </div>
            </div>

            <div className="options-container">
              {currentGroup.letters.map((letter) => (
                <button
                  key={letter.character}
                  onClick={() => handleLetterClick(letter)}
                  disabled={showFeedback}
                  className="option-button"
                >
                  {letter.character}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div
                className={`feedback ${isCorrect ? "correct" : "incorrect"}`}
              >
                {/* Feedback content can be removed if not needed */}
              </div>
            )}
          </>
        ) : (
          <div className="restart-container">
            <button onClick={handleRestart} className="restart-button">
              🐯 UUDESTAAN? 🐯
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
