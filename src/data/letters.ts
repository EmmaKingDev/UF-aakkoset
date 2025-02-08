import { LetterGroup } from "../types";

export const initialLetterGroups: LetterGroup[] = [
  {
    letters: [
      {
        character: "K",
        animal: "KARHU",
        sound: "/sounds/K.mp3",
        color: "#98D8AA",
      },
      {
        character: "M",
        animal: "MARSU",
        sound: "/sounds/M.mp3",
        color: "#A7C5EB",
      },
      {
        character: "A",
        animal: "APINA",
        sound: "/sounds/A.mp3",
        color: "#FFB4B4",
      },
    ],
    isUnlocked: true,
    isCompleted: false,
  },
  {
    letters: [
      {
        character: "P",
        animal: "PÖLLÖ",
        sound: "/sounds/P.mp3",
        color: "#D7BBF5",
      },
      {
        character: "T",
        animal: "TIIKERI",
        sound: "/sounds/T.mp3",
        color: "#FFD4B2",
      },
      {
        character: "I",
        animal: "ILVES",
        sound: "/sounds/I.mp3",
        color: "#A7C5EB",
      },
    ],
    isUnlocked: false,
    isCompleted: false,
  },
  {
    letters: [
      {
        character: "L",
        animal: "LAMMAS",
        sound: "/sounds/L.mp3",
        color: "#FFB4B4",
      },
      {
        character: "N",
        animal: "NORSU",
        sound: "/sounds/N.mp3",
        color: "#D7BBF5",
      },
      {
        character: "U",
        animal: "UNDULAATTI",
        sound: "/sounds/U.mp3",
        color: "#98D8AA",
      },
    ],
    isUnlocked: false,
    isCompleted: false,
  },
];
