import * as C_TW12ExamQuestions_Practice1 from '../SapABAPQuestions/C_TW12ExamQuestions_Practice1';
import * as C_TW12ExamQuestions_Practice2 from '../SapABAPQuestions/C_TW12ExamQuestions_Practice2';
import * as C_TW12ExamQuestions_Practice3 from '../SapABAPQuestions/C_TW12ExamQuestions_Practice3';
import * as C_TW12ExamQuestions_Practice4 from '../SapABAPQuestions/C_TW12ExamQuestions_Practice4';
import * as C_TW12ExamQuestions_Practice5 from '../SapABAPQuestions/C_TW12ExamQuestions_Practice5';
import * as C_TW12ExamQuestions_Practice6 from '../SapABAPQuestions/C_TW12ExamQuestions_Practice6';

export const builtQuestions = () => {
    return [
      ...C_TW12ExamQuestions_Practice1.questions,
      ...C_TW12ExamQuestions_Practice2.questions,
      ...C_TW12ExamQuestions_Practice3.questions,
      ...C_TW12ExamQuestions_Practice4.questions,
      ...C_TW12ExamQuestions_Practice5.questions,
      ...C_TW12ExamQuestions_Practice6.questions,
    ];
}