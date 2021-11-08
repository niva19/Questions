import * as topicsImport from '../topics/MicrosoftPowerPlatformTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.PL900ExamQuestions_Practice3
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.UniqueSelection,
		question: "Ensure fastest response times for each company location",
		options: [
			{
				id: 1,
				option: "Environment"
			},
			{
				id: 2,
				option: "Security group"
			},
			{
				id: 3,
				option: "SharePoint library"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/4/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create test and production copies of the data and apps",
		options: [
			{
				id: 1,
				option: "Environment"
			},
			{
				id: 2,
				option: "Security group"
			},
			{
				id: 3,
				option: "SharePoint library"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/4/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You have version 1.0.0.0 of a published Power Apps app. You create and publish version 2.0.0.0 of the app. A customer goes through the process of restoring the previous version of the app. How many versions of the app are displayed in the Version tab for the app?",
		options: [
			{
				id: 1,
				option: "0"
			},
			{
				id: 2,
				option: "1"
			},
			{
				id: 3,
				option: "2"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/5/'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can create a canvas app that scans and parses documents using Azure Cognitive Services and then adds the appropriate information to Dynamics 365 sales",
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
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/5/'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can create a canvas app that uses Azure Cognitive Services to read incident records and identify tickets that need to be escalated based on sentiment score",
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
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/5/'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company is evaluating ways that they can implement AI Builder. For which two scenarios can you use AI Builder? Each correct selection presents a complete solution",
		options: [
			{
				id: 1,
				option: "Send emails to all users who subscribe to a service"
			},
			{
				id: 2,
				option: "Synchronize data from an external database"
			},
			{
				id: 3,
				option: "Collect data from several data sources and display a dashboard that shows trending data"
			},
			{
				id: 4,
				option: "Interpret images and perform an action on the image"
			},
			{
				id: 5,
				option: "Detect patterns in data and predict outcomes"
			}
		],
		answer: [
            4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/6/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Identify products without labels or serial numbers",
		options: [
			{
				id: 1,
				option: "Prediction"
			},
			{
				id: 2,
				option: "Form processing"
			},
			{
				id: 3,
				option: "Object detection"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/9/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Identify customers who might not pay their invoices on time",
		options: [
			{
				id: 1,
				option: "Prediction"
			},
			{
				id: 2,
				option: "Form processing"
			},
			{
				id: 3,
				option: "Object detection"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/9/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Use drag and drop to add a video to the app",
		options: [
			{
				id: 1,
				option: "View"
			},
			{
				id: 2,
				option: "Connector"
			},
			{
				id: 3,
				option: "Control"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/10/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Apply consistent company colores to the app",
		options: [
			{
				id: 1,
				option: "Unified Interface"
			},
			{
				id: 2,
				option: "Control"
			},
			{
				id: 3,
				option: "Theme"
			},
			{
				id: 4,
				option: "Template"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/10/'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: 'You want to create a Power Apps app that allows you to define a custom Sitemap. What should you do?',
		question: "Navigate to the Power Apps portal and create",
		options: [
			{
				id: 1,
				option: "a canvas app"
			},
			{
				id: 2,
				option: "a model-driven app"
			},
			{
				id: 3,
				option: "a portal app"
			},
			{
				id: 4,
				option: "an app by using a template"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/10/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are a sales manager for a large retail organization. You are creating a Power Apps app that will display customer product purchase information from your old point-of-sale (POS) system and need to link those sales to the customer accounts and product sales in Dynamics 365 Commerce. You need to use the appropriate component. What should you use?",
		options: [
			{
				id: 1,
				option: "Common Data Service"
			},
			{
				id: 2,
				option: "Business process flow"
			},
			{
				id: 3,
				option: "Entity metadata"
			},
			{
				id: 4,
				option: "Business rule"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/11/'
	},
    {
        questionType: questionTypes.TrueFalse,
        question: "The Business Card Reader model can be used with both Power Automate and Power Apps",
        options: [
            {
                id: 1,
                option: "True"
            },
            {
                id: 2,
                option: "False"
            }
        ],
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/11/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "The Sentiment Analysis model can be used Power Automated only",
        options: [
            {
                id: 1,
                option: "True"
            },
            {
                id: 2,
                option: "False"
            }
        ],
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/11/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "The Power BI published app is stored within the Team site so that others can install it",
        options: [
            {
                id: 1,
                option: "True"
            },
            {
                id: 2,
                option: "False"
            }
        ],
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/14/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "One of the other project managers installs and modifiers a dashboard within the Power BI published app. The changes are automatically made into the original published app",
        options: [
            {
                id: 1,
                option: "True"
            },
            {
                id: 2,
                option: "False"
            }
        ],
        answer: 2,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/14/'
    },
    {
		questionType: questionTypes.UniqueSelection,
		question: "Make decisions by analyzing high-level KPIs",
		options: [
			{
				id: 1,
				option: "Power BI service"
			},
			{
				id: 2,
				option: "Power BI Desktop"
			},
			{
				id: 3,
				option: "Power BI dashboards"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/19/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Drill down into the details of a visual",
		options: [
			{
				id: 1,
				option: "Power BI reports"
			},
			{
				id: 2,
				option: "Power BI desktop"
			},
			{
				id: 3,
				option: "Power BI dashboards"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/19/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company is using Power BI. The company wants to see which data connectors are available for building dashboards. You need to evaluate the available connectors. What should you use to see all the available connectors?",
		options: [
			{
				id: 1,
				option: "Power BI Workspace"
			},
			{
				id: 2,
				option: "Common Data Service"
			},
			{
				id: 3,
				option: "Power BI Dataflows"
			},
			{
				id: 4,
				option: "Power Platform admin center"
			},
			{
				id: 5,
				option: "Power BI Desktop"
			}
		],
		answer: 5,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/20/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Improve performance by reducing table size",
		options: [
			{
				id: 1,
				option: "Aggregations"
			},
			{
				id: 2,
				option: "Formulas"
			},
			{
				id: 3,
				option: "Modeling view"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/20/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Cache data locally on a user's device",
		options: [
			{
				id: 1,
				option: "Import"
			},
			{
				id: 2,
				option: "Dual"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/20/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Ensure that book authors can securely access their data",
		options: [
			{
				id: 1,
				option: "Authenticate external users"
			},
			{
				id: 2,
				option: "Access data in common Data Service"
			},
			{
				id: 3,
				option: "Browse content anonymously"
			},
			{
				id: 4,
				option: "Customize layouts"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/22/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Ensure consistent page design across the website",
		options: [
			{
				id: 1,
				option: "Authenticate external users"
			},
			{
				id: 2,
				option: "Access data in common Data Service"
			},
			{
				id: 3,
				option: "Use page templates"
			},
			{
				id: 4,
				option: "Browse content anonymously"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/22/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Ensure that the public can access announcements about upcoming books",
		options: [
			{
				id: 1,
				option: "Authenticate external users"
			},
			{
				id: 2,
				option: "Use page templates"
			},
			{
				id: 3,
				option: "Browse content anonymously"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/22/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Display a single record from Common Data Service",
		options: [
			{
				id: 1,
				option: "list"
			},
			{
				id: 2,
				option: "form"
			},
			{
				id: 3,
				option: "IFrame"
			},
			{
				id: 4,
				option: "connector"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/23/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Display a list of records from a Microsoft SharePoint list",
		options: [
			{
				id: 1,
				option: "list"
			},
			{
				id: 2,
				option: "form"
			},
			{
				id: 3,
				option: "IFrame"
			},
			{
				id: 4,
				option: "connector"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/23/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Display a list of records from Common Data Service",
		options: [
			{
				id: 1,
				option: "list"
			},
			{
				id: 2,
				option: "form"
			},
			{
				id: 3,
				option: "IFrame"
			},
			{
				id: 4,
				option: "connector"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/23/'
	},
    {
        questionType: questionTypes.Sort,
		question: "You need to create a mobile application which will allow sales associates to enter custom sales leads. Which four actions should you perform in sequence?",
		sortOptions: [
			"Go to the Office 365 admin center",
			"Add components to the app",
			"Create a new Power Apps app",
			"Publish the app",
			"Save the app",
			"Add flows to the app"
		],
        answer: [
			"Create a new Power Apps app",
			"Add components to the app",
			"Save the app",
			"Publish the app"
		],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/25/',
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company uses Power Apps canvas apps. When a user opens Power Apps Studio in a browser and selects Apps I can edit, they do not see an app that they need to modify. You need to determine why the user cannot see the app. What are three possible reasons?",
		options: [
			{
				id: 1,
				option: "The user selected an incorrect Power Apps environment"
			},
			{
				id: 2,
				option: "The user has not been granted the System Customizer role"
			},
			{
				id: 3,
				option: "The user has not been set as the app co-owner"
			},
			{
				id: 4,
				option: "The app has not been shared with the user"
			},
			{
				id: 5,
				option: "The environment does not have a Common Data Service database"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/25/'
	},
    {
        questionType: questionTypes.Sort,
		question: "You create a model-driven app. The app is ready to be shared. You need to complete the process required to set the app up to be shared. How should you complete the process for setting up the app to be shared?",
		sortOptions: [
			"Select an app from the Power Apps list",
			"Select the app and select a security role",
			"Select a user and choose a security role",
			"Select share"
		],
        answer: [
			"Select an app from the Power Apps list",
			"Select share",
			"Select the app and select a security role",
			"Select a user and choose a security role"
		],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/',
	},
    {
        questionType: questionTypes.TrueFalse,
        question: "To add entities to an app, entities are dragged onto the app canvas from the components area",
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
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "View definition is created in the component area of the app designer",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "You must save, validate, and publish your app for others to see the changes",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/'
    },
    {
		questionType: questionTypes.UniqueSelection,
		question: "You create a canvas app that allows contractors to submit time they work against a project. Contractors must be able to use the canvas app to enter time. Contractors must not be able to perform any other actions in the app. You need to configure permissions for the contractors. Which type of permissions should you use?",
		options: [
			{
				id: 1,
				option: "application-level"
			},
			{
				id: 2,
				option: "task-level"
			},
			{
				id: 3,
				option: "record-level"
			},
			{
				id: 4,
				option: "field-level"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: 'You are creating a model-driven app to track requests for quotes. You need to create the app navigation. Which sitemap component types should you use?',
		question: "Administration",
		options: [
			{
				id: 1,
				option: "Area"
			},
			{
				id: 2,
				option: "Group"
			},
			{
				id: 3,
				option: "Subarea"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: 'You are creating a model-driven app to track requests for quotes. You need to create the app navigation. Which sitemap component types should you use?',
		question: "Sales log",
		options: [
			{
				id: 1,
				option: "Area"
			},
			{
				id: 2,
				option: "Group"
			},
			{
				id: 3,
				option: "Subarea"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: 'You are creating a model-driven app to track requests for quotes. You need to create the app navigation. Which sitemap component types should you use?',
		question: "Customers",
		options: [
			{
				id: 1,
				option: "Area"
			},
			{
				id: 2,
				option: "Group"
			},
			{
				id: 3,
				option: "Subarea"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/26/'
	},
    {
        questionType: questionTypes.Sort,
		question: "A company provides on-site architectural consulting services to residential and business customers. The company wants to implement a simple alert system where a consultant can press a button on their mobile device to send the user's location to the company as a text notification. You need to build a button flow that sends the notification. In which order should you perform the actions?",
		sortOptions: [
			"Add a new step to the flow",
			"Add a trigger",
			"Select a connector and action to send text notifications",
			"Set the action's properties",
			"Save the flow"
		],
		answer: [
			"Add a new step to the flow",
			"Select a connector and action to send text notifications",
			"Set the action's properties",
			"Add a trigger",
			"Save the flow"
		],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/29/',
	},
	{
		questionType: questionTypes.UniqueSelection,
		question: "Run a flow when the user presses a button in a canvas app",
		options: [
			{
				id: 1,
				option: "PowerApps"
			},
			{
				id: 2,
				option: "for a selected row"
			},
			{
				id: 3,
				option: "manually trigger a flow"
			},
			{
				id: 4,
				option: "for a selected file (OneDrive for a Business)"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/29/'
	},
	{
		questionType: questionTypes.UniqueSelection,
		question: "Run a flow when the user presses a button in the mobile Flow app",
		options: [
			{
				id: 1,
				option: "PowerApps"
			},
			{
				id: 2,
				option: "for a selected row"
			},
			{
				id: 3,
				option: "manually trigger a flow"
			},
			{
				id: 4,
				option: "for a selected file (OneDrive for a Business)"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/29/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company is using Power Automate to automate business processes. You need to run a flow when a user presses a button in an app. Which trigger type should you recommend?",
		options: [
			{
				id: 1,
				option: "Power Apps"
			},
			{
				id: 2,
				option: "For a selected row"
			},
			{
				id: 3,
				option: "Manually trigger a flow"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/34/'
	},
    {
        questionType: questionTypes.TrueFalse,
        question: "The addition of an expenses report to a Microsoft OneDrive folder can initiate an approval flow",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/34/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "Approvals must follow a sequential order of approval",
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
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/34/'
    },
    {
		questionType: questionTypes.UniqueSelection,
		question: "Retrieve the top five posts from your company's Facebook page",
		options: [
			{
				id: 1,
				option: "action"
			},
			{
				id: 2,
				option: "expresion"
			},
			{
				id: 3,
				option: "service"
			},
			{
				id: 4,
				option: "trigger"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/35/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Enter the resulting post into the product database",
		options: [
			{
				id: 1,
				option: "action"
			},
			{
				id: 2,
				option: "expresion"
			},
			{
				id: 3,
				option: "service"
			},
			{
				id: 4,
				option: "trigger"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/35/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Combine author and link fields into a single field",
		options: [
			{
				id: 1,
				option: "action"
			},
			{
				id: 2,
				option: "expresion"
			},
			{
				id: 3,
				option: "service"
			},
			{
				id: 4,
				option: "trigger"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/35/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Run flow every hour",
		options: [
			{
				id: 1,
				option: "action"
			},
			{
				id: 2,
				option: "expresion"
			},
			{
				id: 3,
				option: "service"
			},
			{
				id: 4,
				option: "trigger"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/35/'
	},
    {
        questionType: questionTypes.TrueFalse,
        question: "You can implement a process-based integration by using the Data Integration feature",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/36/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "You can use Microsoft Azure Data Migration to synchronize data between the apps",
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
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/36/'
    },
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company uses Microsoft 365, SharePoint Online, and Dynamics 365 Sales. You need to recommend tools to build a solution that meets the following requirements: Synchronize data daily - from an external Microsoft SQL Server instance. Send a report automatically to specific company executives. Ensure that opportunities over a specified amount are approved by a sales manager. Which two tools or components should you recommend?",
		options: [
			{
				id: 1,
				option: "Microsoft Excel"
			},
			{
				id: 2,
				option: "Microsoft Word"
			},
			{
				id: 3,
				option: "Power BI"
			},
			{
				id: 4,
				option: "Common Data Service"
			},
			{
				id: 5,
				option: "Power Automate"
			}
		],
		answer: [
            4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/36/'
	},
    {
        questionType: questionTypes.TrueFalse,
        question: "You can create a flow without writing a single line of code and deploy the flow to a production enviroment",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "You can add additional actions to the built-in Power Automate templates",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
    },
    {
        questionType: questionTypes.TrueFalse,
        question: "You can view the code that implements workflows actions and triggers without installing additional software",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
    },
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Dynamics 365 Sales. Every time an opportunity is created, a Power Automate flow runs to email the opportunity to the sales manager. The sales manager leaves the company. You disable all accounts for the sales manager. You need to ensure that the new sales manager automatically receives email about opportunities when they are created. What should you do?",
		options: [
			{
				id: 1,
				option: "Modify the flow and ensure that the correct manager's email is listed in the From field"
			},
			{
				id: 2,
				option: "Modify the flow and ensure that the correct manager's email is listed in the To field"
			},
			{
				id: 3,
				option: "Grant the new sales manager access to the departed sales manager's inbox"
			},
			{
				id: 4,
				option: "Modify the flow and ensure that the flow prompts the user to type the correct email for the To field"
			},
			{
				id: 5,
				option: "Create a flow that automatically forwards opportunity emails to the new sales manager"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Ensure that Power Automate can interact with the third-party application",
		options: [
			{
				id: 1,
				option: "Triggers"
			},
			{
				id: 2,
				option: "Logic Apps"
			},
			{
				id: 3,
				option: "Connectors"
			},
			{
				id: 4,
				option: "Gateways"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Periodically check for data changes in the third-party application",
		options: [
			{
				id: 1,
				option: "Actions"
			},
			{
				id: 2,
				option: "Triggers"
			},
			{
				id: 3,
				option: "Connectors"
			},
			{
				id: 4,
				option: "DirectQuery"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "The chatbot needs to capture of the user id for authentication",
		options: [
			{
				id: 1,
				option: "Topic"
			},
			{
				id: 2,
				option: "Entity"
			},
			{
				id: 3,
				option: "Action"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A customer asks a question that needs to be handed off to a live Customer Support representative",
		options: [
			{
				id: 1,
				option: "Topic"
			},
			{
				id: 2,
				option: "Entity"
			},
			{
				id: 3,
				option: "Action"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/37/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are planning to allow members of your team to test your chatbot. You must ensure this is done in a secure way. A team member named User1 must test the chatbot. You need to ensure that User1 can complete testing. What should you do?",
		options: [
			{
				id: 1,
				option: "Sign in to the authoring environment as the chatbot author"
			},
			{
				id: 2,
				option: "Sign in to Microsoft Azure DevOps as the chatbot author"
			},
			{
				id: 3,
				option: "Sign in to Microsoft Azure DevOps as User1"
			},
			{
				id: 4,
				option: "Sign in to the authoring environment as User1"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
	},
    {
        questionType: questionTypes.TrueFalse,
        clarification: "You are authoring a Power Virtual Agents chatbot for a company",
        question: "You must create a custom action to display a knowledge base article that answers a common support question",
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
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
    },
    {
        questionType: questionTypes.TrueFalse,
        clarification: "You are authoring a Power Virtual Agents chatbot for a company",
        question: "You can use Power Automate to retrieve a customer's contact number in order to verify they are an authorized user and their support plan SLA",
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
        answer: 1,
        topic: topic,
        isOriginalQuestion: false,
        page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
    },
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "You create a Power Virtual Agents chatbot for use with Microsoft Teams. You are testing the chatbot. Testers report the following issues: Changes that you make to the chatbot are not seen by testers. When users enter the word refund the chatbot must ask the user the product for which they would like a refund. The chatbot does not ask the user for product information. You need to determine what needs to be done to fix the issues.",
		question: "Missing changes",
		options: [
			{
				id: 1,
				option: "Create a new chatbot"
			},
			{
				id: 2,
				option: "Publish the chatbot"
			},
			{
				id: 3,
				option: "Save the topic"
			},
			{
				id: 4,
				option: "Share the chatbot"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "You create a Power Virtual Agents chatbot for use with Microsoft Teams. You are testing the chatbot. Testers report the following issues: Changes that you make to the chatbot are not seen by testers. When users enter the word refund the chatbot must ask the user the product for which they would like a refund. The chatbot does not ask the user for product information. You need to determine what needs to be done to fix the issues.",
		question: "Refund responses are not working as expected",
		options: [
			{
				id: 1,
				option: "Change security"
			},
			{
				id: 2,
				option: "Create a refund topic"
			},
			{
				id: 3,
				option: "Create a refund chatbot"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Allows users to initiate the chatbot by typing the phrase Help me Meeting Guru",
		options: [
			{
				id: 1,
				option: "Call a fallback topic"
			},
			{
				id: 2,
				option: "Call an action"
			},
			{
				id: 3,
				option: "Create a question mode"
			},
			{
				id: 4,
				option: "Create a trigger phrase"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Provide meeting room capacity options of 1-4 people and 5-10 people",
		options: [
			{
				id: 1,
				option: "Call an action"
			},
			{
				id: 2,
				option: "Call a fallback topic"
			},
			{
				id: 3,
				option: "Create a condition"
			},
			{
				id: 4,
				option: "Create a question mode"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "End the chatbot session when the user attempts to schedule meeting room for more than 10 people",
		options: [
			{
				id: 1,
				option: "Add a condition"
			},
			{
				id: 2,
				option: "Call an action"
			},
			{
				id: 3,
				option: "Configure a fallback topic"
			},
			{
				id: 4,
				option: "Create a trigger phrase"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/38/'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You create a Power Virtual Agents chatbot for a company. The chatbot will use common channels and services by which the company communicates with customers. You need to determine which services the chatbot can be used with or added to. Which two services can the chatbot be used with?",
		options: [
			{
				id: 1,
				option: "Facebook"
			},
			{
				id: 2,
				option: "Power BI"
			},
			{
				id: 3,
				option: "Microsoft Azure Event Grid"
			},
			{
				id: 4,
				option: "Microsoft Azure Service Bus"
			},
			{
				id: 5,
				option: "Microsoft Azure Bot Framework"
			}
		],
		answer: [
            1,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/39/'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You create a Power Virtual Agents chatbot for a company. The management wants to learn about the effectiveness of the chatbot. You need to identity the percentage of customers who stop responding to prompts from the chatbot. Which report should you view?",
		options: [
			{
				id: 1,
				option: "Customer satisfaction"
			},
			{
				id: 2,
				option: "Engagement over time"
			},
			{
				id: 3,
				option: "Escalation rate drivers"
			},
			{
				id: 4,
				option: "Session outcomes over time"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.examtopics.com/exams/microsoft/pl-900/view/39/'
	},
]