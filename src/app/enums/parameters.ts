import * as modesImport from '../enums/modes';

import * as topicsImport from '../topics/SapABAPTopics';
import * as builderQuestionsImport from '../BuilderQuestions/SapABAPBuilderQuestions';

// import * as topicsImport from '../topics/MicrosoftPowerPlatformTopics';
// import * as builderQuestionsImport from '../BuilderQuestions/MicrosoftPowerPlatformBuilderQuestions';

export const parameters = {
	mode: modesImport.modes.include,
	questions: builderQuestionsImport.builtQuestions(),
	topics: topicsImport.topics,
	onlyShowOriginalQuestions: false,
	shuffleOnlyOptions: false,
	rangeFrom: 0,
	rangeIncrementIn: 0,
	filterTopicFrom: 	topicsImport.topics.C_TW12ExamQuestions_Practice2,
    filterTopicTo: 		topicsImport.topics.C_TW12ExamQuestions_Practice2,
}