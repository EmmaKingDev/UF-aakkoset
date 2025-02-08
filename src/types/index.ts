export interface Letter {
  character: string;
  animal: string;
  sound: string;
  color: string;
}

export interface LetterGroup {
  letters: Letter[];
  isUnlocked: boolean;
  isCompleted: boolean;
}

export interface GameProgress {
  currentGroup: number;
  completedLetters: string[];
  stars: number;
}
