import * as topicsImport from '../topics/MicrosoftPowerPlatformTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.PL900ExamQuestions_Practice1
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are three Power Platform key actions on data that help users to drive their business?",
		options: [
			{
				id: 1,
				option: "Analyze"
			},
			{
				id: 2,
				option: "Integrate"
			},
			{
				id: 3,
				option: "Automate"
			},
			{
				id: 4,
				option: "Build"
			},
			{
				id: 5,
				option: "Act"
			},
			{
				id: 6,
				option: "Provide a value"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 1:31'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are two types of objects that Power Platform Connectors provides?",
		options: [
			{
				id: 1,
				option: "Function-Based"
			},
			{
				id: 2,
				option: "Tables"
			},
			{
				id: 3,
				option: "Notification"
			},
			{
				id: 4,
				option: "Power BI"
			},
			{
				id: 5,
				option: "Actions"
			},
			{
				id: 6,
				option: "Sending"
			}
		],
		answer: [
            2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 2:19'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Select all the Azure services that Power Platform consumes?",
		options: [
			{
				id: 1,
				option: "Azure Advisor"
			},
			{
				id: 2,
				option: "Azure Cognitive Services"
			},
			{
				id: 3,
				option: "Azure monitor"
			},
			{
				id: 4,
				option: "Azure API Managment"
			},
			{
				id: 5,
				option: "Azure Bot Service"
			},
			{
				id: 6,
				option: "Azure Security Center"
			}
		],
		answer: [
            2,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 3:47'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You need to create three Microsoft Dataverse databases. Can you create all of them in the Power Platform development environment?",
		options: [
			{
				id: 1,
				option: "Yes"
			},
			{
				id: 2,
				option: "No"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 4:38'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You are trying to explain the benefits of the Dataverse (Common Data Service) business rules to your manager. He asked you about an application of the business rules to the Power Apps Form. Can a canvas app show or hide form fields based on a business rule?",
		options: [
			{
				id: 1,
				option: "Yes"
			},
			{
				id: 2,
				option: "No"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 5:26'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are trying to explain the benefits of the Dataverse (Common Data Service) business rules to your manager. He asked you what type of triggers you can use for your Power Automate solution working with Dynamics 365. Please select all triggers that you can use in your organization's business process flow",
		options: [
			{
				id: 1,
				option: "When a record is updated"
			},
			{
				id: 2,
				option: "When a record is selected"
			},
			{
				id: 3,
				option: "When a record is created"
			},
			{
				id: 4,
				option: "When a record is displayed"
			},
			{
				id: 5,
				option: "When a record is deleted"
			},
			{
				id: 6,
				option: "When a record is edited"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 6:02'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Please select all the AI models that are NOT included in Power Platform?",
		options: [
			{
				id: 1,
				option: "Image classification"
			},
			{
				id: 2,
				option: "Object detector"
			},
			{
				id: 3,
				option: "Prediction"
			},
			{
				id: 4,
				option: "Anormaly detection"
			},
			{
				id: 5,
				option: "Form Processor"
			},
			{
				id: 6,
				option: "Text classification"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 6:41'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are editing a BI report with drill-down visualization. You want to remove all filters and some new ones. Please select all filters that you can delete from the report",
		options: [
			{
				id: 1,
				option: "Manual"
			},
			{
				id: 2,
				option: "Automatic"
			},
			{
				id: 3,
				option: "URL"
			},
			{
				id: 4,
				option: "Drill-down"
			},
			{
				id: 5,
				option: "Pass Through"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 8:30'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are creating a BI report and need to aggregate category (text) fields. Please select all the aggregation options that you can use for this procedure",
		options: [
			{
				id: 1,
				option: "Count"
			},
			{
				id: 2,
				option: "Average"
			},
			{
				id: 3,
				option: "Last"
			},
			{
				id: 4,
				option: "Sum"
			},
			{
				id: 5,
				option: "First"
			},
			{
				id: 6,
				option: "Maximum"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 9:35'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You are creating your first dashboard. You need to use a calculated column in one of your reports. Your manager suggested using the Power BI Service for this report. Will you follow his advice?",
		options: [
			{
				id: 1,
				option: "Yes"
			},
			{
				id: 2,
				option: "No"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 10:40'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You manager told you to help the sales departament. They want to have a responsive Power App that would work on phones and tablets for salespeople on the road. What type of app would you create",
		options: [
			{
				id: 1,
				option: "Canvas"
			},
			{
				id: 2,
				option: "Angular Ionic"
			},
			{
				id: 3,
				option: "Model-driven"
			},
			{
				id: 4,
				option: "React Native"
			},
			{
				id: 5,
				option: "Node.js"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 11:45'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are editing a canvas app that contains images and text. You need to add a layout control to the new page. What option on the Insert tab of Power Apps Studio will choose?",
		options: [
			{
				id: 1,
				option: "Forms"
			},
			{
				id: 2,
				option: "Media"
			},
			{
				id: 3,
				option: "Gallery"
			},
			{
				id: 4,
				option: "Charts"
			},
			{
				id: 5,
				option: "AI Builder"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 12:37'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are creating a model-driven app. Select all entity assets that you can use for the building of your app",
		options: [
			{
				id: 1,
				option: "Forms"
			},
			{
				id: 2,
				option: "Dashboard"
			},
			{
				id: 3,
				option: "Entities"
			},
			{
				id: 4,
				option: "Views"
			},
			{
				id: 5,
				option: "Business Process Flow"
			},
			{
				id: 6,
				option: "Charts"
			}
		],
		answer: [
            1,4,6
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 13:07'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are developing a Power App for the sales deparment. They asked you to add a button to email a proposal to a client. What type of flow will you create for this functionality?",
		options: [
			{
				id: 1,
				option: "Automated"
			},
			{
				id: 2,
				option: "Instant"
			},
			{
				id: 3,
				option: "Schedule"
			},
			{
				id: 4,
				option: "Desktop"
			},
			{
				id: 5,
				option: "Business Process Flow"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 14:09'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "The accountant deparment asked you to create a Power App for expense reports submission. This app should scan receipts and crate a report. Then the user submits this report to the manager. After the manager's approval, the report will be forwarded to the deparment. What Power Automate flow would you create for this app?",
		options: [
			{
				id: 1,
				option: "Instant flow"
			},
			{
				id: 2,
				option: "Schedule flow"
			},
			{
				id: 3,
				option: "Approval flow"
			},
			{
				id: 4,
				option: "Organization flow"
			},
			{
				id: 5,
				option: "Accountant flow"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 14:56'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How many stages can you create in a Business process flow?",
		options: [
			{
				id: 1,
				option: "5"
			},
			{
				id: 2,
				option: "25"
			},
			{
				id: 3,
				option: "20"
			},
			{
				id: 4,
				option: "30"
			},
			{
				id: 5,
				option: "35"
			},
			{
				id: 6,
				option: "50"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 15:24'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are the two main parts of any Power Automate flow?",
		options: [
			{
				id: 1,
				option: "Loop"
			},
			{
				id: 2,
				option: "Business process"
			},
			{
				id: 3,
				option: "One or more actions"
			},
			{
				id: 4,
				option: "Schedule"
			},
			{
				id: 5,
				option: "Trigger"
			},
			{
				id: 6,
				option: "Expressions"
			}
		],
		answer: [
            3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 16:13'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are trying to explain the benefits of the Power Virtual Agents to your manager. How can Power Virtual Agents help your organization? Please select all that apply",
		options: [
			{
				id: 1,
				option: "Improve customer satisfaction"
			},
			{
				id: 2,
				option: "Help to create Power Apps faster"
			},
			{
				id: 3,
				option: "Empower your team by creating bots with no coding"
			},
			{
				id: 4,
				option: "Deliver dashboars and reports to the end user"
			},
			{
				id: 5,
				option: "Reduce cost by automating Q&A"
			},
			{
				id: 6,
				option: "Create powerful visuals for model-driven apps"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 17:07'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are two topics groups automatically added when you create a chatbot Using Power Virtuals Agents?",
		options: [
			{
				id: 1,
				option: "Greeting"
			},
			{
				id: 2,
				option: "User"
			},
			{
				id: 3,
				option: "Escalate"
			},
			{
				id: 4,
				option: "System"
			},
			{
				id: 5,
				option: "Lessons"
			},
			{
				id: 6,
				option: "Thank you"
			}
		],
		answer: [
            2,4,
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 18:01'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You want to add actions to your Power Virtual Agents chatbot by calling Power Automate flow. Can you achieve your goal if the flow is in another Dataverse (common Data Service) enviroment, then your chatbot?",
		options: [
			{
				id: 1,
				option: "Yes"
			},
			{
				id: 2,
				option: "No"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=wm2VKO5VUfw 18:31'
	},
]