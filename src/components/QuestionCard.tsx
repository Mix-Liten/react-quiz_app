import React from "react";
// types
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionId: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionId,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionId} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
