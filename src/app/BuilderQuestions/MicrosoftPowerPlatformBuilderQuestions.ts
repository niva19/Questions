import * as PL900ExamQuestions_Practice1 from '../MicrosoftPowerPlatformQuestions/PL900ExamQuestions_Practice1';
import * as PL900ExamQuestions_Practice2 from '../MicrosoftPowerPlatformQuestions/PL900ExamQuestions_Practice2';
import * as PL900ExamQuestions_Practice3 from '../MicrosoftPowerPlatformQuestions/PL900ExamQuestions_Practice3';

export const builtQuestions = () => {
    return [
        ...PL900ExamQuestions_Practice1.questions,
        ...PL900ExamQuestions_Practice2.questions,
        ...PL900ExamQuestions_Practice3.questions,
      ];
}