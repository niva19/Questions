import * as topicsImport from '../topics/MicrosoftPowerPlatformTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.PL900ExamQuestions_Practice2
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "You are a district manager for a large retail company. You want to provide sales managers with deeper sales insights to ensure that thay can make more informed decisions for their stores. Store managers must be able to view data in near real-time. You need to create and share a Power BI dashboard that can be used by the store managers. Which tools can you use?",
		question: "Create Power BI dashboards that contain a single store's sales information",
		options: [
			{
				id: 1,
				option: "Power BI Service only"
			},
			{
				id: 2,
				option: "Power BI Desktop only"
			},
			{
				id: 3,
				option: "Power BI Desktop or Power BI Service"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 0:37'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "You are a district manager for a large retail company. You want to provide sales managers with deeper sales insights to ensure that thay can make more informed decisions for their stores. Store managers must be able to view data in near real-time. You need to create and share a Power BI dashboard that can be used by the store managers. Which tools can you use?",
		question: "Share that dashboard with your retail managers",
		options: [
			{
				id: 1,
				option: "Power BI Service only"
			},
			{
				id: 2,
				option: "Power BI Desktop only"
			},
			{
				id: 3,
				option: "Power BI Desktop or Power BI Service"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 0:37'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company uses Microsoft Excel workbooks to store consolidated sales data. Workbooks are stored on OneDrive for Business",
        question: "Enable user-friendly reporting on phones",
		options: [
			{
				id: 1,
				option: "Q&A"
			},
			{
				id: 2,
				option: "Mobile apps"
			},
			{
				id: 3,
				option: "Export to Excel"
			},
			{
				id: 4,
				option: "Get data from files"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 0:59'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company uses Microsoft Excel workbooks to store consolidated sales data. Workbooks are stored on OneDrive for Business",
        question: "User natural language to query and aggregate data",
		options: [
			{
				id: 1,
				option: "Q&A"
			},
			{
				id: 2,
				option: "Mobile apps"
			},
			{
				id: 3,
				option: "Export to Excel"
			},
			{
				id: 4,
				option: "Get data from files"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 0:59'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company plans to display support call metrics on a screen that is visible to all call center staff. You need to recommend solutions to meet the company's requirements. What should you recommend?",
		question: "Display a chart with incoming call versus wait time and pin the chart to a dashboard",
		options: [
			{
				id: 1,
				option: "Tile"
			},
			{
				id: 2,
				option: "Template App"
			},
			{
				id: 3,
				option: "Treemap"
			},
			{
				id: 4,
				option: "Page"
			},
			{
				id: 5,
				option: "Theme"
			},
			{
				id: 6,
				option: "Alert"
			},
			{
				id: 7,
				option: "DirectQuery"
			},
			{
				id: 8,
				option: "Workspace"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 1:14'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company plans to display support call metrics on a screen that is visible to all call center staff. You need to recommend solutions to meet the company's requirements. What should you recommend?",
		question: "Send a specific user a notification when the number of customer support calls waiting is over 20",
		options: [
			{
				id: 1,
				option: "Tile"
			},
			{
				id: 2,
				option: "Template App"
			},
			{
				id: 3,
				option: "Treemap"
			},
			{
				id: 4,
				option: "Page"
			},
			{
				id: 5,
				option: "Theme"
			},
			{
				id: 6,
				option: "Alert"
			},
			{
				id: 7,
				option: "DirectQuery"
			},
			{
				id: 8,
				option: "Workspace"
			}
		],
		answer: 6,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 1:14'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company plans to display support call metrics on a screen that is visible to all call center staff. You need to recommend solutions to meet the company's requirements. What should you recommend?",
		question: "Display metrics from different datasets that have related data.",
		options: [
			{
				id: 1,
				option: "Tile"
			},
			{
				id: 2,
				option: "Template App"
			},
			{
				id: 3,
				option: "Treemap"
			},
			{
				id: 4,
				option: "Page"
			},
			{
				id: 5,
				option: "Theme"
			},
			{
				id: 6,
				option: "Alert"
			},
			{
				id: 7,
				option: "DirectQuery"
			},
			{
				id: 8,
				option: "Workspace"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 1:14'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You create a Power BI dashboard that displays Common Data Model data. You need to share the Power BI dashboard with coworkers to collaborate. What are two possible ways to achieve the goal?",
		options: [
			{
				id: 1,
				option: "Create a Power BI workspace and grant coworkes permissions"
			},
			{
				id: 2,
				option: "Publish the dashboard as an app to your coworkers"
			},
			{
				id: 3,
				option: "Export the data to Microsoft Excel. Make required changes and then re-import the data"
			},
			{
				id: 4,
				option: "Create a Power Automate flow to export the data into a SQL Server database"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 1:35'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are using Dynamics 365 Sales. You need to create a Power BI report that includes customer office locations. The City and State columns must be combined to form one column on the report. What should you do?",
		options: [
			{
				id: 1,
				option: "User Power Query Editor to merge columns"
			},
			{
				id: 2,
				option: "Import the data"
			},
			{
				id: 3,
				option: "Export data to Microsoft Excel"
			},
			{
				id: 4,
				option: "Create a view"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 1:46'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company needs to create a series of mobile application to empower their field engineers to accomplish serveral task with varying degrees of complexity. Match each app type to its definition",
		question: "Quickly create apps for very complex business processes from data in Common data Service with very little or no code",
		options: [
			{
				id: 1,
				option: "model-driven"
			},
			{
				id: 2,
				option: "dashboard"
			},
			{
				id: 3,
				option: "dataset"
			},
			{
				id: 4,
				option: "canvas"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 2:17'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company needs to create a series of mobile application to empower their field engineers to accomplish serveral task with varying degrees of complexity. Match each app type to its definition",
		question: "Create simple apps with a highly customizable user interface layouts",
		options: [
			{
				id: 1,
				option: "model-driven"
			},
			{
				id: 2,
				option: "dashboard"
			},
			{
				id: 3,
				option: "dataset"
			},
			{
				id: 4,
				option: "canvas"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 2:17'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A user is starting to learn about Power Apps. Which objects should you use?",
		question: "A power Apps app can call a",
		options: [
			{
				id: 1,
				option: "Connector"
			},
			{
				id: 2,
				option: "Flow"
			},
			{
				id: 3,
				option: "Gateway"
			},
			{
				id: 4,
				option: "Solution"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 2:52'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A user is starting to learn about Power Apps. Which objects should you use?",
		question: "Actions and triggers are properties of a",
		options: [
			{
				id: 1,
				option: "Connector"
			},
			{
				id: 2,
				option: "Flow"
			},
			{
				id: 3,
				option: "Gateway"
			},
			{
				id: 4,
				option: "Solution"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 2:52'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is a benefit of deploying Microsoft 365 and Dynamics 365 apps in the same tenant?",
		options: [
			{
				id: 1,
				option: "You do not need to manually back up data"
			},
			{
				id: 2,
				option: "Both will use the same time zone"
			},
			{
				id: 3,
				option: "You can use Power BI to display data that comes from both enviroments"
			},
			{
				id: 4,
				option: "You can implement Single Sign-On (SSO)"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 3:07'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company runs a call center to handle customer support inquires. The company tracks metrics including the number of incoming calls, call resolution rates, and escalations. The company wants to display the metrics on a shared screen that is visible to all call center staff. You need to recommend a visualization solution for the company. Which Power Platform feature should you recommend?",
		options: [
			{
				id: 1,
				option: "AI Builder"
			},
			{
				id: 2,
				option: "Power Automate"
			},
			{
				id: 3,
				option: "Power Apps"
			},
			{
				id: 4,
				option: "Power BI"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 3:22'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "You are a regional sales manager for a large internet retailer. You create a series of Power BI reports and dashboards to help sales associates be more productive and increase sales. Sales are not increasing as expected. You need to determine if the new reports are being used and send emails to sales associates to provide guidance on how to use the reports and dashboards. Which features should you use?",
		question: "Send an email to the sales associates on a predetermined schedule",
		options: [
			{
				id: 1,
				option: "Subscribe"
			},
			{
				id: 2,
				option: "Share"
			},
			{
				id: 3,
				option: "Favorites"
			},
			{
				id: 4,
				option: "Publisher"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 3:41'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "You are a regional sales manager for a large internet retailer. You create a series of Power BI reports and dashboards to help sales associates be more productive and increase sales. Sales are not increasing as expected. You need to determine if the new reports are being used and send emails to sales associates to provide guidance on how to use the reports and dashboards. Which features should you use?",
		question: "Quantify the adoption usage from the sales associates",
		options: [
			{
				id: 1,
				option: "Explore"
			},
			{
				id: 2,
				option: "Favorites"
			},
			{
				id: 3,
				option: "Usage metrics"
			},
			{
				id: 4,
				option: "Performance inspector"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 3:41'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are creating Power BI reports. You need to choose which filters you can use for reports. Which three types of filters can you use? Each correct answer presents a complete solution",
		options: [
			{
				id: 1,
				option: "Drill-down"
			},
			{
				id: 2,
				option: "Automatic"
			},
			{
				id: 3,
				option: "Database"
			},
			{
				id: 4,
				option: "Manual"
			},
			{
				id: 5,
				option: "External"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 3:58'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Power BI can only retrieve data from up to two different sources for each dashboard",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 4:28'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Power BI visualizations can be used in canvas apps and model driven apps",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 4:28'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Power BI can display charts and list boxes on dashboards",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 4:28'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You have a Microsoft Excel workbook that contains a list of tasks for a project. You store the file in OneDrive for Business. You need to create a canvas app that allows team members to update the status of their task. What should you use?",
		options: [
			{
				id: 1,
				option: "The Generate an app from data feature"
			},
			{
				id: 2,
				option: "A custom action in Common Data Service"
			},
			{
				id: 3,
				option: "Power Apps Checker"
			},
			{
				id: 4,
				option: "The Open entity data in Excel feature"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 4:43'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "A screen is generated that contains a browsable list of SharePoint list items",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 5:01'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "A screen is generated that allows users to update Sharepoints list items",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 5:01'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company has a Power Apps app that is used by most employees. The company is expading to other countries/regions. You need to recommend a solution to translate text generated within the Power Apps in near real-time. What should you recommend?",
		options: [
			{
				id: 1,
				option: "Microsoft Azure Synapse Analytics"
			},
			{
				id: 2,
				option: "Microsoft Azure Cognitive Services"
			},
			{
				id: 3,
				option: "Common Data Service connector"
			},
			{
				id: 4,
				option: "Power BI"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 5:18'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You have a Power Apps app. You create a new version of the app and then publish the new version. A customer goes through the process of restoring the previous version of the app. In the Version tab for the app, you will see two versions of the app, what will be the number of the new version?",
		options: [
			{
				id: 1,
				option: "None"
			},
			{
				id: 2,
				option: "One"
			},
			{
				id: 3,
				option: "Three"
			},
			{
				id: 4,
				option: "Four"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 5:45'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Dynamics 365 Sales. The company uses a browser-based app named Sales Hub. You need to ensure that users can access data from mobile devices? Which app should users install?",
		options: [
			{
				id: 1,
				option: "Dynamics 365 Remote Assits"
			},
			{
				id: 2,
				option: "Dynamics 365 Finance"
			},
			{
				id: 3,
				option: "Dynamics 365 Business Central"
			},
			{
				id: 4,
				option: "Dynamics 365 for Phones"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 6:06'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are customer service manager. You need to implement a Power Apps portal that allows customers to submit cases. Which type of data source is used?",
		options: [
			{
				id: 1,
				option: "Dynamics 365 Connector"
			},
			{
				id: 2,
				option: "Microsoft SharePoint"
			},
			{
				id: 3,
				option: "Microsoft Azure Storage"
			},
			{
				id: 4,
				option: "Common Data Service"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 6:18'
	},
    {
		questionType: questionTypes.TrueFalse,
        clarification: "You create a user-owned custom entity by using Common Data Service",
		question: "You can change the entity ownership from User to Organization-owned",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 6:35'
	},
    {
		questionType: questionTypes.TrueFalse,
        clarification: "You create a user-owned custom entity by using Common Data Service",
		question: "You can create a business rule for a custom entity that can be used in a Flow",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 6:35'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "Common Data Model (CDM) and their functions",
		question: "Helps jumpstart application development by leveraging business logic, security, and integrations",
		options: [
			{
				id: 1,
				option: "Entities"
			},
			{
				id: 2,
				option: "Data connectors"
			},
			{
				id: 3,
				option: "Common Data Service"
			},
			{
				id: 4,
				option: "Common Data Model"
			},
			{
				id: 5,
				option: "Microsoft Power Platform"
			},
			{
				id: 6,
				option: "Workflows"
			}
		],
		answer: 5,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 7:11'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "Common Data Model (CDM) and their functions",
		question: "A set of records used to store data",
		options: [
			{
				id: 1,
				option: "Entities"
			},
			{
				id: 2,
				option: "Data connectors"
			},
			{
				id: 3,
				option: "Common Data Service"
			},
			{
				id: 4,
				option: "Common Data Model"
			},
			{
				id: 5,
				option: "Microsoft Power Platform"
			},
			{
				id: 6,
				option: "Workflows"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 7:11'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A distribution company has multiple warehouses. Tax rates charged on sales orders need to be calculated based on locality and region. You need to recommend a cost-effective solution that can be implemented quickly. What should you recommend?",
		options: [
			{
				id: 1,
				option: "Check AppSource for a tax add-on"
			},
			{
				id: 2,
				option: "Create alerts in Dynamics 365 Finance for tax tables changes"
			},
			{
				id: 3,
				option: "Implement the Common Data Model"
			},
			{
				id: 4,
				option: "Run a Power BI report"
			},
			{
				id: 5,
				option: "Write scripts and code tax updates"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 7:39'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Customers must be able to submit support requests by using a website",
		options: [
			{
				id: 1,
				option: "Power Apps portal"
			},
			{
				id: 2,
				option: "Power Automate"
			},
			{
				id: 3,
				option: "Power BI"
			},
			{
				id: 4,
				option: "Common Data Service"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 7:57'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Support requests must be created and stored",
		options: [
			{
				id: 1,
				option: "Power Apps portal"
			},
			{
				id: 2,
				option: "Power Automate"
			},
			{
				id: 3,
				option: "Power BI"
			},
			{
				id: 4,
				option: "Common Data Service"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 7:57'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Support technicians must be notified when a new support request is entered",
		options: [
			{
				id: 1,
				option: "Power Apps portal"
			},
			{
				id: 2,
				option: "Power Automate"
			},
			{
				id: 3,
				option: "Power BI"
			},
			{
				id: 4,
				option: "Common Data Service"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 7:57'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Support technicians must be able to enter a status report for work completed during the previous week by using a mobile app",
		options: [
			{
				id: 1,
				option: "Power Apps portal"
			},
			{
				id: 2,
				option: "Power Automate"
			},
			{
				id: 3,
				option: "Power BI"
			},
			{
				id: 4,
				option: "Common Data Service"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 7:57'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Dynamics 365 Sales and Microsoft 365 must be in the same tenant to allow Single Sing-On (SSO)",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 8:32'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You must download a product from AppSource to ensure that SSO work with Dynamics 365 Sales and Microsoft 365",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 8:32'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You need to implement Microsoft Business Applications along with the Microsoft Power platform. Which three Microsoft products are part of the Power Platform?",
		options: [
			{
				id: 1,
				option: "Microsoft Power Apps"
			},
			{
				id: 2,
				option: "Azure Active Directory"
			},
			{
				id: 3,
				option: "Microsoft Flow"
			},
			{
				id: 4,
				option: "Azure Machine Learning"
			},
			{
				id: 5,
				option: "Microsoft Power BI"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 8:52'
	},
    {
		questionType: questionTypes.TrueFalse,
		clarification: "A company plans to implement Power Platform apps. The company does not plan to use any development tools or plug-ins. Which actions can you perform?",
        question: "You can synchronize account names with a third-party proprietary database",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 9:02'
	},
    {
		questionType: questionTypes.TrueFalse,
		clarification: "A company plans to implement Power Platform apps. The company does not plan to use any development tools or plug-ins. Which actions can you perform?",
        question: "You can create invoices from orders and then send the invoices to the customer",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 9:02'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create user accounts for Power Apps",
		options: [
			{
				id: 1,
				option: "Azure Active Directory"
			},
			{
				id: 2,
				option: "Dynamics 365 Admin Center"
			},
			{
				id: 3,
				option: "Power Apps Admin center"
			},
			{
				id: 4,
				option: "Power BI Admin portal"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 9:51'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Assign the Enviroment Maker role to a user",
		options: [
			{
				id: 1,
				option: "Azure Active Directory"
			},
			{
				id: 2,
				option: "Dynamics 365 Admin Center"
			},
			{
				id: 3,
				option: "Power Apps Admin center"
			},
			{
				id: 4,
				option: "Power BI Admin portal"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 9:51'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Build automatic workflows that access multiple data sources",
		options: [
			{
				id: 1,
				option: "AI Builder"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "Azure Functions"
			},
			{
				id: 5,
				option: "Power BI"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 10:41'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create custom apps that address specific business needs",
		options: [
			{
				id: 1,
				option: "AI Builder"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "Azure Functions"
			},
			{
				id: 5,
				option: "Power BI"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 10:41'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Design insightful data visualizations",
		options: [
			{
				id: 1,
				option: "AI Builder"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "Azure Functions"
			},
			{
				id: 5,
				option: "Power BI"
			}
		],
		answer: 5,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 10:41'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Field technicians need a mobile app to capture the locations and the image of defective products",
		options: [
			{
				id: 1,
				option: "Canvas app"
			},
			{
				id: 2,
				option: "Power Apps portal"
			},
			{
				id: 3,
				option: "Common Data Service"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 11:09'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Sales representatives need to see different views and dashboards in the sales app",
		options: [
			{
				id: 1,
				option: "Canvas app"
			},
			{
				id: 2,
				option: "Model-driven app"
			},
			{
				id: 3,
				option: "Power Apps portal"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 11:09'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "External customers need to view the progress of their service cases",
		options: [
			{
				id: 1,
				option: "Model-driven app"
			},
			{
				id: 2,
				option: "Power Apps portal"
			},
			{
				id: 3,
				option: "Common Data Service"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 11:09'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Power Apps apps can be build with hot key support and designed so they do not require a touch screen or mouse",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 11:43'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Only model-driven Power Apps have support for using a screen reader without the need for a connector",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 11:43'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "The accessibility checker can be run for your Power Apps app to provide notifications of accessibility violations as well as tips for making it even more user friendly",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 11:43'
	},
    {
		questionType: questionTypes.Sort,
		question: "A bank uses Power Platform apps and flows to support business processes. The company would like to use historical client data to predict wheter a client's loan application is likely to be approved or rejected. You need to use AI Builder to implement the solution. Which four actions should you perform in sequence?",
        sortOptions: [
			"Train the model",
			"Use the model in PowerApps or Power Automate",
			"Export data into AI Builder",
			"Publish the model",
			"Import data into Common Data Service"
		],
		answer: [
			"Import data into Common Data Service",
			"Train the model",
			"Publish the model",
			"Use the model in PowerApps or Power Automate"
		],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 12:34'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Validate data across multiple fields and entities regardless of the app used to create data",
		options: [
			{
				id: 1,
				option: "Business rules"
			},
			{
				id: 2,
				option: "Business process flows"
			},
			{
				id: 3,
				option: "Common Data Model"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 13:06'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create visual guides to ensure that users enter data and perform task in a consistent manner",
		options: [
			{
				id: 1,
				option: "Business rules"
			},
			{
				id: 2,
				option: "Business process flows"
			},
			{
				id: 3,
				option: "Common Data Model"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 13:06'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Accelerate development by using a standard set of entities for the most common scenarios",
		options: [
			{
				id: 1,
				option: "Business rules"
			},
			{
				id: 2,
				option: "Business process flows"
			},
			{
				id: 3,
				option: "Common Data Model"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 13:06'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can use text classification model in AI Builder to retrieve text and perform sentiment analysist for ServiceNow incidents",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 13:50'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can tag Instagram post that mention your new product",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 13:50'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can send results about the number of mentions of your new product in Instagram to Power BI for inclusion on a dashboard",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 13:50'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You create a business rule on contact entity to enforce the requirement that users must enter either a telephone number, fax number, or an email when creating a new record. The company decides to remove fax number from the condition. You need to update the business rule. What are two ways of achieving the goal?",
		options: [
			{
				id: 1,
				option: "Save a copy of the rule and change the condition. Deactivate and delete the original rule"
			},
			{
				id: 2,
				option: "Deactivate the business rule and change the condition"
			},
			{
				id: 3,
				option: "Take a snapshot of the business rule and change the condition"
			},
			{
				id: 4,
				option: "Change the condition and activate the change"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 14:06'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A coworker is creating an app in Power Apps and needs to automatically synchronize data from an external source. The coworker is unable to locate a suitable Microsoft approved connector template in AppSource. You need to recommend a solution for the coworker. What should you recommend?",
		options: [
			{
				id: 1,
				option: "Create a custom connector"
			},
			{
				id: 2,
				option: "Ask the outside source to send you the data once a week"
			},
			{
				id: 3,
				option: "Use Microsoft Flow to connect to the database"
			},
			{
				id: 4,
				option: "Open a ticket with Microsoft and request a new connector"
			},
			{
				id: 5,
				option: "Use Microsoft Azure Service Bus"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 14:30'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A toy company creates a text classification model in Al Builder to monitor customer feedback for specific key words. When negative feedback is received for a toy, the company wants to proactively perform engineering reviews for the toy and schedule additional training sessions for workers who produce the toy. What are two possible ways to achieve the goal?",
		options: [
			{
				id: 1,
				option: "Create a canvas app"
			},
			{
				id: 2,
				option: "Implement the Virtual Agent"
			},
			{
				id: 3,
				option: "Build a Power Automate flow"
			},
			{
				id: 4,
				option: "Use the Common Data Model"
			}
		],
		answer: [
            1,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 14:38'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can display data aggregates and raw data in a Power BI report",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 15:11'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can display related data from Dynamics 365 Customer Engagement and Excel in the same Power BI report",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 15:11'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You create a Power App to supply data for a Power BI report. You can modify the data directly in the report",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 15:11'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company is evaluating ways that they can implement Al Builder. For which two scenarios can you use Al Builder?",
		options: [
			{
				id: 1,
				option: "Send emails to all al users who subscribe to a service"
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
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 15:44'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Custom connector cannot be used if a standard connector for the service is available",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:04'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Custom connectors are supported in instant flows only",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:04'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Standard and custom connectors cannot be mixed within the same flow or app",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:04'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Model-driven apps require a Common Data Service database",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:16'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "A flow instance can only access one Common Data Service database",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:16'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Canvas apps require a Common Data Service database",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:16'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can create a Common Data Service environment in the Power Platform Admin center",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:35'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You must enable data encryption after you create a Common Data Service environment",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:35'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can control security roles and privileges in a Common Data Service Environment from the Power Apps Admin center",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:35'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company plans to use Al Builder to help improve business performance. You need to determine which Al Models are available for use. Which three types of models can you use?",
		options: [
			{
				id: 1,
				option: "Linear regression"
			},
			{
				id: 2,
				option: "Binary classification"
			},
			{
				id: 3,
				option: "Object detection"
			},
			{
				id: 4,
				option: "Anomaly detection"
			},
			{
				id: 5,
				option: "Text classification"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 16:53'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company uses Microsoft 365 and Dynamics 365 Sales. The company does not have any developers on its staff. You need to explain to the executives the benefits of using Power Platform apps. What are two benefits?",
		options: [
			{
				id: 1,
				option: "Users can send emails from Dynamics 365 Sales to their personal email addresses"
			},
			{
				id: 2,
				option: "Users can create Power Apps to create apps for different departments"
			},
			{
				id: 3,
				option: "Users can use Power Automate to share information between Microsoft 365 and Dynamics 365 Sales"
			},
			{
				id: 4,
				option: "The company must unify all the mobile devices to one vendor"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 17:07'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create no code workflows that use different systems",
		options: [
			{
				id: 1,
				option: "Azure Logic Apps"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "Dynamics 365 workflows"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 17:40'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Build a no-code mobile application",
		options: [
			{
				id: 1,
				option: "Azure Logic Apps"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "Dynamics 365 workflows"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 17:40'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Administer your workflow in Microsoft Azure",
		options: [
			{
				id: 1,
				option: "Azure Logic Apps"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "Dynamics 365 workflows"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 17:40'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Build a mobile application by using Common Data Service",
		options: [
			{
				id: 1,
				option: "Azure Logic Apps"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "Dynamics 365 workflows"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 17:40'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company manages a chain of retail stores. The company stores a list of retail store names and numbers in one Power BI table. The company stores sales transaction data including a transaction ID in another table. The transaction ID includes the store number. You need to show the store name for all retail transactions in all Power BI reports. Which tool should you use?",
		options: [
			{
				id: 1,
				option: "Query Editor"
			},
			{
				id: 2,
				option: "Power BI Service"
			},
			{
				id: 3,
				option: "Microsoft Excel"
			},
			{
				id: 4,
				option: "Data Connector"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 17:55'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create dashboards",
		options: [
			{
				id: 1,
				option: "Power BI Service only"
			},
			{
				id: 2,
				option: "Power BI Desktop only"
			},
			{
				id: 3,
				option: "Power BI Desktop or Power BI Service"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:24'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create reports",
		options: [
			{
				id: 1,
				option: "Power BI Service only"
			},
			{
				id: 2,
				option: "Power BI Desktop only"
			},
			{
				id: 3,
				option: "Power BI Desktop or Power BI Service"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:24'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create calculated columns",
		options: [
			{
				id: 1,
				option: "Power BI Service only"
			},
			{
				id: 2,
				option: "Power BI Desktop only"
			},
			{
				id: 3,
				option: "Power BI Desktop or Power BI Service"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:24'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Configure security",
		options: [
			{
				id: 1,
				option: "Power BI Service only"
			},
			{
				id: 2,
				option: "Power BI Desktop only"
			},
			{
				id: 3,
				option: "Power BI Desktop or Power BI Service"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:24'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Configure sharing",
		options: [
			{
				id: 1,
				option: "Power BI Service only"
			},
			{
				id: 2,
				option: "Power BI Desktop only"
			},
			{
				id: 3,
				option: "Power BI Desktop or Power BI Service"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:24'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Display data from a Microsoft Excel workbook that has multiple worksheets into one chart",
		options: [
			{
				id: 1,
				option: "Dashboard"
			},
			{
				id: 2,
				option: "Report"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:58'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Display the top departmental goal metrics and alert users when specific thresholds targets are met",
		options: [
			{
				id: 1,
				option: "Dashboard"
			},
			{
				id: 2,
				option: "Report"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:58'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Display Sales charts that can be filtered by region",
		options: [
			{
				id: 1,
				option: "Dashboard"
			},
			{
				id: 2,
				option: "Report"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 18:58'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can export data from a visualization in a Power BI report",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 19:14'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can show the data behind a visual report on your screen without exporting the data",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 19:14'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can export data to view supporting data for a KPI",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 19:14'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You create a Power BI dashboard that displays data from Dynamics 365 Customer Engagement. You need to share the Power BI dashboard with coworkers. What are three possible ways to achieve the goal?",
		options: [
			{
				id: 1,
				option: "Create a Power Bl workspace and grant coworkers permissions"
			},
			{
				id: 2,
				option: "Publish the dashboard as an app to your coworkers"
			},
			{
				id: 3,
				option: "Export the data into Common Data Service for others to manipulate in Power BI"
			},
			{
				id: 4,
				option: "Export the data to Microsoft Excel for coworkers to import and view in Power BI"
			},
			{
				id: 5,
				option: "Embed reports in your company's internal web portal"
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 20:04'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Your company has an on-premises Microsoft SQL Server database that contains legacy sales data. You must display information from the database in a new Power Apps app. You need to establish a secure connection between the database and the app. What should you use?",
		options: [
			{
				id: 1,
				option: "Data source"
			},
			{
				id: 2,
				option: "App"
			},
			{
				id: 3,
				option: "Data gateway"
			},
			{
				id: 4,
				option: "Power Automate"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 20:24'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A recent update has been made to a canvas app. The update causes a negative impact to users. You need to roll back the app to a previous version. What should you do?",
		options: [
			{
				id: 1,
				option: "Restore the previous version of the app"
			},
			{
				id: 2,
				option: "Uninstall the app for all users and reinstall by using the package from a previous version"
			},
			{
				id: 3,
				option: "Deactivate the live app, import the previous version of the app, and then activate the app"
			},
			{
				id: 4,
				option: "Delete the app and create a new app based on the previous version"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 20:37'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A manufacturing company uses Internet of Things (IoT) devices to monitor the temperature in different parts of their warehouse. The current lot monitoring software is extremely outdated and is not user friendly. You need to view near-real time information from the loT devices in Power BI Service dashboards. Which tool should you use?",
		options: [
			{
				id: 1,
				option: "Scheduled refresh dataset"
			},
			{
				id: 2,
				option: "Streaming dataset"
			},
			{
				id: 3,
				option: "Content Pack dataset"
			},
			{
				id: 4,
				option: "Power BI dataflows"
			},
			{
				id: 5,
				option: "Quick Insights"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 22:44'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You have a Power BI report with a page named RevReceived. The page shows revenue received by your company. You want to create an almost identical page that shows net revenue instead of gross revenue. To accomplish this task, you modify the RevReceived page",
		options: [
			{
				id: 1,
				option: "No change is needed"
			},
			{
				id: 2,
				option: "Duplicate the RevReceived page"
			},
			{
				id: 3,
				option: "Import the RevReceived page"
			},
			{
				id: 4,
				option: "Copy the visuals from RevReceived to a new page"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 22:58'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Allow users to set and receive alerts when data changes beyond specified limits",
		options: [
			{
				id: 1,
				option: "Reports"
			},
			{
				id: 2,
				option: "Workspaces"
			},
			{
				id: 3,
				option: "Dashboars"
			},
			{
				id: 4,
				option: "Dataset"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 23:15'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "View and filter data and export data to Microsoft Excel for futher manipulation and analysis",
		options: [
			{
				id: 1,
				option: "Reports"
			},
			{
				id: 2,
				option: "Workspaces"
			},
			{
				id: 3,
				option: "Dashboars"
			},
			{
				id: 4,
				option: "Dataset"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 23:15'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You create a set of dashboards and reports for a project team that combines data from different sources in Power BI. Some of the data is considered sensitive. You need to distribute the dashboards and reports securely to the team. What should you create?",
		options: [
			{
				id: 1,
				option: "A custom data connector"
			},
			{
				id: 2,
				option: "A published app"
			},
			{
				id: 3,
				option: "A Microsoft flow"
			},
			{
				id: 4,
				option: "A Power BI workspace"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 23:32'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Ensure that coworkers can see the dashboard",
		options: [
			{
				id: 1,
				option: "Share"
			},
			{
				id: 2,
				option: "Embed"
			},
			{
				id: 3,
				option: "Get data"
			},
			{
				id: 4,
				option: "Pin"
			},
			{
				id: 5,
				option: "Import"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 23:48'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Display data from Microsoft Excel in the dashboard",
		options: [
			{
				id: 1,
				option: "Share"
			},
			{
				id: 2,
				option: "Embed"
			},
			{
				id: 3,
				option: "Get data"
			},
			{
				id: 4,
				option: "Pin"
			},
			{
				id: 5,
				option: "Import"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 23:48'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Add a report tile to the dashboard",
		options: [
			{
				id: 1,
				option: "Share"
			},
			{
				id: 2,
				option: "Embed"
			},
			{
				id: 3,
				option: "Get data"
			},
			{
				id: 4,
				option: "Pin"
			},
			{
				id: 5,
				option: "Import"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 23:48'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are using Dynamics 365 Sales. You need to pull data into a Power Bl report for your team. The City and State columns must be combined to form one column on the report. Which function would you use?",
		options: [
			{
				id: 1,
				option: "Use Power Query to merge columns"
			},
			{
				id: 2,
				option: "Import the data"
			},
			{
				id: 3,
				option: "Export data to Microsoft Excel"
			},
			{
				id: 4,
				option: "Create a view"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 24:06'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A carpet cleaning company uses Dynamics 365 Sales. The process for entering customer information during onsite sales calls is very complicated. The company wants a simplified screen that allows salespeople to capture the customer name, phone number, and other information while speaking to the customer. You need to recommend a solution that works on various types of mobile devices. What should you recommend?",
		options: [
			{
				id: 1,
				option: "Common Data Service"
			},
			{
				id: 2,
				option: "Power Automate"
			},
			{
				id: 3,
				option: "Al Builder"
			},
			{
				id: 4,
				option: "Canvas app"
			},
			{
				id: 5,
				option: "Power BI"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 24:21'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Collaboratively on board suppliers and distributors",
		options: [
			{
				id: 1,
				option: "Partner portal"
			},
			{
				id: 2,
				option: "Comunity portal"
			},
			{
				id: 3,
				option: "Portal from blank"
			},
			{
				id: 4,
				option: "Customer self-service portal"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 24:37'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Publish a blog post announcing new suppliers",
		options: [
			{
				id: 1,
				option: "Partner portal"
			},
			{
				id: 2,
				option: "Comunity portal"
			},
			{
				id: 3,
				option: "Portal from blank"
			},
			{
				id: 4,
				option: "Customer self-service portal"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 24:37'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can embed canvas apps in model-driven apps",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 25:12'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "A power apps portal can use only one data source",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 25:12'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You must use Power BI to create reports in model-driven apps",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 25:12'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "Canvas app, types of controls",
		question: "View the date, time and location of upcoming internal meetings",
		options: [
			{
				id: 1,
				option: "Meeting-screen template"
			},
			{
				id: 2,
				option: "Gallery"
			},
			{
				id: 3,
				option: "List box"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 25:56'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "Canvas app, types of controls",
		question: "Create a meeting request from within the app",
		options: [
			{
				id: 1,
				option: "Meeting-screen template"
			},
			{
				id: 2,
				option: "Gallery"
			},
			{
				id: 3,
				option: "List box"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 25:56'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "Canvas app, types of controls",
		question: "Drill down into customer contact records in Dynamics 365 Sales to view a photo of a customer you are meeting",
		options: [
			{
				id: 1,
				option: "Image"
			},
			{
				id: 2,
				option: "People-screen template"
			},
			{
				id: 3,
				option: "Add picture"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 25:56'
	},
    {
		questionType: questionTypes.TrueFalse,
        clarification: "You are designing a Power Apps solution that allows users to upload a status report directly to the company Microsoft SharePoint project management site from their mobile device",
		question: "You should build a model-driven app in Power Apps",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 26:45'
	},
    {
		questionType: questionTypes.TrueFalse,
        clarification: "You are designing a Power Apps solution that allows users to upload a status report directly to the company Microsoft SharePoint project management site from their mobile device",
		question: "You should build a canvas app in Power Apps",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 26:45'
	},
    {
		questionType: questionTypes.TrueFalse,
        clarification: "You are designing a Power Apps solution that allows users to upload a status report directly to the company Microsoft SharePoint project management site from their mobile device",
		question: "Users must download and run the Power Apps mobile application to use the solution",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 26:45'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Dynamics 365 Supply Chain Management. The company wants to build customer user interfaces that add additional functionality. You need to recommend a solution for the company. What should you recommend?",
		options: [
			{
				id: 1,
				option: "Power BI"
			},
			{
				id: 2,
				option: "Power Apps canvas apps"
			},
			{
				id: 3,
				option: "AI Builder"
			},
			{
				id: 4,
				option: "Microsoft Flow"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 27:01'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Implement user authentication",
		options: [
			{
				id: 1,
				option: "Microsoft Azure"
			},
			{
				id: 2,
				option: "Custom connector"
			},
			{
				id: 3,
				option: "Microsoft Flow"
			},
			{
				id: 4,
				option: "Model-driven app"
			},
			{
				id: 5,
				option: "Canvas app"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 27:19'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Send data to a Microsoft OneNote notebook in the same tenant",
		options: [
			{
				id: 1,
				option: "Microsoft Azure"
			},
			{
				id: 2,
				option: "Custom connector"
			},
			{
				id: 3,
				option: "Microsoft Flow"
			},
			{
				id: 4,
				option: "Model-driven app"
			},
			{
				id: 5,
				option: "Canvas app"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 27:19'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company plans to create canvas app. What is the minimum number of connectors required?",
        question: "Synchronize data with three data sources that use different propietary database formats",
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
			},
			{
				id: 4,
				option: "3"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 27:51'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company plans to create canvas app. What is the minimum number of connectors required?",
        question: "Create three Power Apps that each display data from a Microsoft Shrepoint list",
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
			},
			{
				id: 4,
				option: "3"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 27:51'
	},
    {
		questionType: questionTypes.UniqueSelection,
		clarification: "A company plans to create canvas app. What is the minimum number of connectors required?",
        question: "Create three Flows that each copy data to Microsoft Azure Data Lake on different schedules",
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
			},
			{
				id: 4,
				option: "3"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 27:51'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You create a Power Apps canvas app. You need to ensure that your coworkers can run the app. What should you do?",
		options: [
			{
				id: 1,
				option: "Share the app"
			},
			{
				id: 2,
				option: "Send the URL for the app to coworkers"
			},
			{
				id: 3,
				option: "Add a license for the app"
			},
			{
				id: 4,
				option: "Create a Flow for the app"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:02'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Microsoft 365, Power Platform, and Dynamics 365. You do not assing permissions to any licensed users. Users are able to create and edit Power Apps canvas app. In which environment are users creating and editing the apps?",
		options: [
			{
				id: 1,
				option: "Production"
			},
			{
				id: 2,
				option: "Default"
			},
			{
				id: 3,
				option: "Sandbox"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:07'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company is creating a canvas app to display data from a legacy system that is located on the company's internal network. You need to connect to the data. What should you use?",
		options: [
			{
				id: 1,
				option: "Custom connector"
			},
			{
				id: 2,
				option: "Content pack"
			},
			{
				id: 3,
				option: "Data gateway"
			},
			{
				id: 4,
				option: "Power Automate"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:25'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are creating a canvas app. You need to configure the app. Which two objects are provided by the connector?",
		options: [
			{
				id: 1,
				option: "Customizations"
			},
			{
				id: 2,
				option: "Data sources"
			},
			{
				id: 3,
				option: "Actions"
			},
			{
				id: 4,
				option: "Tables"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:32'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Easy data integration",
		options: [
			{
				id: 1,
				option: "Connectors"
			},
			{
				id: 2,
				option: "Canvas apps"
			},
			{
				id: 3,
				option: "AI builder"
			},
			{
				id: 4,
				option: "Power Automate"
			},
			{
				id: 5,
				option: "Portals"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:55'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Low code / no code across applications",
		options: [
			{
				id: 1,
				option: "Connectors"
			},
			{
				id: 2,
				option: "Canvas apps"
			},
			{
				id: 3,
				option: "AI builder"
			},
			{
				id: 4,
				option: "Power Automate"
			},
			{
				id: 5,
				option: "Portals"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:55'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Easy to customize front end",
		options: [
			{
				id: 1,
				option: "Connectors"
			},
			{
				id: 2,
				option: "Canvas apps"
			},
			{
				id: 3,
				option: "AI builder"
			},
			{
				id: 4,
				option: "Power Automate"
			},
			{
				id: 5,
				option: "Portals"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:55'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Build mobile apps that use cameras and location data",
		options: [
			{
				id: 1,
				option: "Model-driven"
			},
			{
				id: 2,
				option: "Portals"
			},
			{
				id: 3,
				option: "Canvas"
			},
			{
				id: 4,
				option: "AI Builder"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 29:13'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Give external users secure access to your data",
		options: [
			{
				id: 1,
				option: "Model-driven"
			},
			{
				id: 2,
				option: "Portals"
			},
			{
				id: 3,
				option: "Canvas"
			},
			{
				id: 4,
				option: "AI Builder"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 29:13'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company is considering implementing Power Platform. For which three scenarios should you consider implementing Power Apps portals?",
		options: [
			{
				id: 1,
				option: "A customer support website that includes knowledge search and support for document uploads"
			},
			{
				id: 2,
				option: "A public website that supports multi-lingual communities with forums and blogs support"
			},
			{
				id: 3,
				option: "An online store with e-commerce requirements including payment processing"
			},
			{
				id: 4,
				option: "A secure website for vendors accesing data stored in Common Data Service"
			},
			{
				id: 5,
				option: "An internal website for employees to access selected data from Dynamics 365 Finance"
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 28:29'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "A company is building a model-driven app. You need to create and configure the objects needed for the app. What component categories should you use?",
		question: "Relationship category:",
		options: [
			{
				id: 1,
				option: "UI"
			},
			{
				id: 2,
				option: "Data"
			},
			{
				id: 3,
				option: "Logic"
			},
			{
				id: 4,
				option: "Visualization"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 29:56'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "A company is building a model-driven app. You need to create and configure the objects needed for the app. What component categories should you use?",
		question: "Form category:",
		options: [
			{
				id: 1,
				option: "UI"
			},
			{
				id: 2,
				option: "Data"
			},
			{
				id: 3,
				option: "Logic"
			},
			{
				id: 4,
				option: "Visualization"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 29:56'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "A company is building a model-driven app. You need to create and configure the objects needed for the app. What component categories should you use?",
		question: "Business rule category:",
		options: [
			{
				id: 1,
				option: "UI"
			},
			{
				id: 2,
				option: "Data"
			},
			{
				id: 3,
				option: "Logic"
			},
			{
				id: 4,
				option: "Visualization"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 29:56'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "A company is building a model-driven app. You need to create and configure the objects needed for the app. What component categories should you use?",
		question: "View category:",
		options: [
			{
				id: 1,
				option: "UI"
			},
			{
				id: 2,
				option: "Data"
			},
			{
				id: 3,
				option: "Logic"
			},
			{
				id: 4,
				option: "Visualization"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 29:56'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Canvas app authoring enviroment will adapt to the language setting of the author",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 30:14'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "When running a canvas app on a mobile device, the app adopts the app author's language",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 30:14'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Numbers and dates in Power Apps app automatically conform to the regional and language setting for a user's device",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 30:14'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You must use standard templates for building portals",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 30:31'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can test portals in non-production environmnets and then migrate the portals into production enviroments",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 30:31'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "When transitioning to the new version of a portal, you can display a customizable maintenance page until the new portal is ready to be used",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 30:31'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company performs on-site inspections and services for air industrial equipment. Field technicians must perform a series of maintenance checks every time they visit a customer site. Every technician perform maintenance task in a different order. Some technicians miss steps. You need to ensure that all technicians perform the same steps in the same order. What should you use?",
		options: [
			{
				id: 1,
				option: "Business process flow"
			},
			{
				id: 2,
				option: "AI Builder"
			},
			{
				id: 3,
				option: "Business rule"
			},
			{
				id: 4,
				option: "Virtual Agent"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 30:50'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Custom connectors for customer-specific services do not require review and certification by Microsoft",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 31:22'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can build a custom connector once and reuse the connector for Power Apps and Microsoft Flow",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 31:22'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "You can make custom connectors publicly available for all Power Platform users without having Microsoft certify the connector",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 31:22'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You need to use Microsoft Flow to perform data-management tasks when users interact with the sales opportunities in Dynamics 365. Which three types of triggers can you use?",
		options: [
			{
				id: 1,
				option: "Record requested"
			},
			{
				id: 2,
				option: "Record deletion"
			},
			{
				id: 3,
				option: "Record creation"
			},
			{
				id: 4,
				option: "Record updated"
			},
			{
				id: 5,
				option: "Record selected"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 32:06'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company uses Dynamics 365 Supply Chain Management. When a sales order is created for one of the customers that a specific user manages, a Microsoft Outlook task must be created to remind the user to perform any follow up activities that are required. You need to implement the functionality to create Outlook task. Which two features should you use?",
		options: [
			{
				id: 1,
				option: "AI Builder"
			},
			{
				id: 2,
				option: "Power Apps"
			},
			{
				id: 3,
				option: "Business Events"
			},
			{
				id: 4,
				option: "Microsoft Flow"
			},
			{
				id: 5,
				option: "Common Data Service"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 32:11'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Create an approval workflow",
		options: [
			{
				id: 1,
				option: "Dynamics 365 Workflow Notifications"
			},
			{
				id: 2,
				option: "Microsoft Outlook Integration"
			},
			{
				id: 3,
				option: "AI Builder"
			},
			{
				id: 4,
				option: "Microsoft Flow"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 32:42'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Connect to report data",
		options: [
			{
				id: 1,
				option: "Common Data Service and Power BI"
			},
			{
				id: 2,
				option: "Third-party from AppSource"
			},
			{
				id: 3,
				option: "Custom Code flat file integration"
			},
			{
				id: 4,
				option: "Dynamics 365 Field Service"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 32:42'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company requires that service representatives schedule customer visits every six months. Each service representative is required to enter a scheduled task for the next checkup as they are leaving a client site. A service representative wants to automate task entry by creating a business process flow that can be initiated from the service call screen on a phone",
		options: [
			{
				id: 1,
				option: "No change is needed"
			},
			{
				id: 2,
				option: "A scheduled"
			},
			{
				id: 3,
				option: "An instant"
			},
			{
				id: 4,
				option: "An action"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 33:30'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "You build a flow using a template. You want to add support for additional business scenarios. You need to ensure that the new workflow does not break existing functionality. Which flow editing utilities should you use?",
		question: "Check the new flow for any errors or warnings",
		options: [
			{
				id: 1,
				option: "Test"
			},
			{
				id: 2,
				option: "Flow Checker"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 34:03'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "You build a flow using a template. You want to add support for additional business scenarios. You need to ensure that the new workflow does not break existing functionality. Which flow editing utilities should you use?",
		question: "Run the flow using previously precessed data",
		options: [
			{
				id: 1,
				option: "Test"
			},
			{
				id: 2,
				option: "Flow Checker"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 34:03'
	},
    {
		questionType: questionTypes.UniqueSelection,
        clarification: "You build a flow using a template. You want to add support for additional business scenarios. You need to ensure that the new workflow does not break existing functionality. Which flow editing utilities should you use?",
		question: "Monitor the flow as it is running",
		options: [
			{
				id: 1,
				option: "Test"
			},
			{
				id: 2,
				option: "Flow Checker"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 34:03'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You use Power Automate for personal productivity. You often overwrite working flows by editing the definitions. You are unable to undo changes after saving a flow. You need to be able to revert a flow to the current state. Which two options can you use?",
		options: [
			{
				id: 1,
				option: "Export"
			},
			{
				id: 2,
				option: "Rename"
			},
			{
				id: 3,
				option: "Save as"
			},
			{
				id: 4,
				option: "Share"
			}
		],
		answer: [
            1,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 34:34'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You use Power Automate to create a flow that automatically sends email to a project manager when project team members mark a task as complete. Project team members are prematurely marking tasks as complete. You must add quality control into the process by sending an email to a project lead for confirmation that the task is in fact complete before sending the email to the project manager. You need to modify the flow. Which component should you use?",
		options: [
			{
				id: 1,
				option: "A process argument"
			},
			{
				id: 2,
				option: "A condition"
			},
			{
				id: 3,
				option: "An expression"
			},
			{
				id: 4,
				option: "A trigger"
			},
			{
				id: 5,
				option: "An action"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 34:52'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Microsoft Flow. Each time a work order is created, a service manager must review and approve the work order before a worker is dispatched. You need to create flow to enforce the process. What should you create?",
		options: [
			{
				id: 1,
				option: "Plug-in"
			},
			{
				id: 2,
				option: "Approval flow"
			},
			{
				id: 3,
				option: "Business rule"
			},
			{
				id: 4,
				option: "Team flow"
			},
			{
				id: 5,
				option: "Instant flow"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 35:05'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are new to working with Microsoft Flow. You create a flow that extracts birthday greeting email to users on their birthday. The flow does not properly extract birth dates. Where should you make changes?",
		options: [
			{
				id: 1,
				option: "Connectors"
			},
			{
				id: 2,
				option: "Expression"
			},
			{
				id: 3,
				option: "Templates"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 35:22'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A flow that runs after it is triggered be an event",
		options: [
			{
				id: 1,
				option: "Automated"
			},
			{
				id: 2,
				option: "Business process"
			},
			{
				id: 3,
				option: "Scheduled"
			},
			{
				id: 4,
				option: "Instant"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 36:12'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A flow that guides a user through a set of task",
		options: [
			{
				id: 1,
				option: "Automated"
			},
			{
				id: 2,
				option: "Business process"
			},
			{
				id: 3,
				option: "Scheduled"
			},
			{
				id: 4,
				option: "Instant"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 36:12'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A flow that runs after a specified number of days",
		options: [
			{
				id: 1,
				option: "Automated"
			},
			{
				id: 2,
				option: "Business process"
			},
			{
				id: 3,
				option: "Scheduled"
			},
			{
				id: 4,
				option: "Instant"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 36:12'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A flow that allows you to start task on-demand",
		options: [
			{
				id: 1,
				option: "Automated"
			},
			{
				id: 2,
				option: "Business process"
			},
			{
				id: 3,
				option: "Scheduled"
			},
			{
				id: 4,
				option: "Instant"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 36:12'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Dynamics 365 Supply Chain Management and Dynamics 365 Finance. User account data must be synchronized between the two systems. You need to ensure that the synchronized data is stored in one place. What should you use?",
		options: [
			{
				id: 1,
				option: "Azure lot Central"
			},
			{
				id: 2,
				option: "Azure Active Directory"
			},
			{
				id: 3,
				option: "SQL Server"
			},
			{
				id: 4,
				option: "Common Data Service"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 36:28'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is a benefit of deploying Microsoft 365 and Dynamics 365 apps in the same tenant?",
		options: [
			{
				id: 1,
				option: "Use Common Data Services to connect to application data"
			},
			{
				id: 2,
				option: "You only need to set up groups in Microsoft 365 for permissions to all data"
			},
			{
				id: 3,
				option: "Users can access both Microsoft 365 and Dynamics 365 by using Single Sign-on (SSO)"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 36:41'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You need to display sales orders greater than a specific threshold in a Power BI report. What should you use?",
		options: [
			{
				id: 1,
				option: "Filter"
			},
			{
				id: 2,
				option: "Power Query"
			},
			{
				id: 3,
				option: "Common Data Service"
			},
			{
				id: 4,
				option: "Connector"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 36:58'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are a sales representative. You create a Power BI report to visualize data from a Microsoft Excel workbook. Users need to be able to view and share the report. Which two actions should you perform?",
		options: [
			{
				id: 1,
				option: "Pin the report to a dashboard"
			},
			{
				id: 2,
				option: "Export the data"
			},
			{
				id: 3,
				option: "Publish the dashboard"
			},
			{
				id: 4,
				option: "Share the dashboard"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 37:10'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are a district manager for a large retail organization. You train each store manager to use Power Bl to track sales and daily sales targets. A store manager remembers learning about the Analyze in Excel option but cannot find the option in their Power BI dashboard. You need to help the user resolve the issue. How should you advise the user?",
		options: [
			{
				id: 1,
				option: "Install the Power BI Desktop app"
			},
			{
				id: 2,
				option: "Select the Spotlight button on the dashboard tile"
			},
			{
				id: 3,
				option: "Subscribe to the dashboard and follow the email link"
			},
			{
				id: 4,
				option: "Navigate to the report used by the dashboard"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 37:13'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Customer-facing applications must comply with Global Data Protection Regulations (GDPR). You need to recommend actions to help ensure GDPR compliance. Which two features should the company use?",
		options: [
			{
				id: 1,
				option: "Force a user to update security questions after a specific amount of time"
			},
			{
				id: 2,
				option: "Prompt a user for consent to use their personal data and record the date consented"
			},
			{
				id: 3,
				option: "Block users who are identified as minors"
			},
			{
				id: 4,
				option: "Automatically deactivate a user who has not used the portal in six months"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 37:31'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company plans to create a canvas app that connects to three databases with different proprietary database formats. What is the minimum number of connectors required?",
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
			},
			{
				id: 4,
				option: "3"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 37:48'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You create a Power App portal. When a user signs into the portal the following error displays: User not found You confirm that the user's sign in information is correct. You need to determine the cause of the error. What should you do?",
		options: [
			{
				id: 1,
				option: "Disable custom error messages"
			},
			{
				id: 2,
				option: "Create a custom error message"
			},
			{
				id: 3,
				option: "Enable diagnostic tools in Lifecycle Service"
			},
			{
				id: 4,
				option: "Enable Maintenance mode"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 38:00'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company uses Power Automate. Which three items can trigger flows?",
		options: [
			{
				id: 1,
				option: "Lifecycles Services"
			},
			{
				id: 2,
				option: "Microsoft 365 Admin center"
			},
			{
				id: 3,
				option: "Common Data Service"
			},
			{
				id: 4,
				option: "Microsoft Outlook 365"
			},
			{
				id: 5,
				option: "Microsoft Windows Desktop"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 38:06'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Dynamics 365 Customer Service. The company uses a manual process to manage call escalations. You must use Power Automate to automate the process for routing escalated calls. You need to create the flow. Which type of connector should you use?",
		options: [
			{
				id: 1,
				option: "Microsoft Excel"
			},
			{
				id: 2,
				option: "Common Data Service"
			},
			{
				id: 3,
				option: "Office 365 Users"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 38:15'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company builds and sells residential apartments. The company uses Dynamics 365 Sales to manage sales opportunities. Management must receive notifications on their mobile devices when sales opportunities are created. You need to select recommend Power Platform components to address the requirements. Which two components should you recommend?",
		options: [
			{
				id: 1,
				option: "Common Data Service connector"
			},
			{
				id: 2,
				option: "Power BI"
			},
			{
				id: 3,
				option: "Power Automate"
			},
			{
				id: 4,
				option: "AI Builder"
			}
		],
		answer: [
            1,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 38:26'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company uses Microsoft 365, SharePoint Online, and Dynamics 365 Sales. You need to recommend tools to build a solution that meets the following requirements: Synchronize data daily from an external Microsoft SQL Server instance Send an out-of-the box report automatically to specific company executives. Ensure that opportunities over a specified amount are approved by a sales manager. Which two tools or components should you recommend?",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 38:35'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A company uses Dynamics 365 Supply Chain Management. You need to use Power Automate to automate the process of receiving and tracking raw materials. Which type of connector should you use?",
		options: [
			{
				id: 1,
				option: "Common Data Service"
			},
			{
				id: 2,
				option: "Dynamics 365"
			},
			{
				id: 3,
				option: "Dynamics 365 for Fin & Ops"
			},
			{
				id: 4,
				option: "Dynamics Signal"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 38:54'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You have a Power Automate flow that saves attachments from emails into OneDrive for Business. You need to determine why the flow is not working. What are three possible ways to achieve the goal?",
		options: [
			{
				id: 1,
				option: "Navigate to the Power Automate admin center and view the projects"
			},
			{
				id: 2,
				option: "Navigate to the Action Items section of the Power Automate portal"
			},
			{
				id: 3,
				option: "Enable Repair Tips for the flow"
			},
			{
				id: 4,
				option: "Navigate to the flow and view the run history"
			},
			{
				id: 5,
				option: "Navigate to the Power Automate web portal and click view notifications"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 39:08'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are building a Power Automate flow to manage sales. The sales team saves quotes as PDF files to a Microsoft OneDrive folder. You create a Microsoft SharePoint list to help the sales team manage follow ups to quotes. You need to copy the customer name, phone number, and the amount of the potential sale from the sales quote and insert the data into the SharePoint list. Which Al Builder model should you use?",
		options: [
			{
				id: 1,
				option: "key phrase extraction"
			},
			{
				id: 2,
				option: "sentiment analysis"
			},
			{
				id: 3,
				option: "text recognition"
			},
			{
				id: 4,
				option: "language detection"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 39:17'
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A company wants users to start using Power Automate to improve personal productivity. You need to create a flow. Which two elements must you include?",
		options: [
			{
				id: 1,
				option: "Expression"
			},
			{
				id: 2,
				option: "Condition"
			},
			{
				id: 3,
				option: "Action"
			},
			{
				id: 4,
				option: "Trigger"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 39:23'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Power Virtual Agents chat data is saved unless it is deleted by the customer after a chat session",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 39:40'
	},
    {
		questionType: questionTypes.TrueFalse,
		question: "Power Automate flows operate with administrative privileges at all times",
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
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 39:40'
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A large retail company implements Power Apps, Microsoft Flow, and the Common Data Service. The board of directors is asking whether users are finding value in the technology. The company would like to measure and report usage of the software. You need to recommend a tool to determine software usage. What should you recommend?",
		options: [
			{
				id: 1,
				option: "Microsoft Intune"
			},
			{
				id: 2,
				option: "Azure Stream Analytics"
			},
			{
				id: 3,
				option: "Power Platform Analytics"
			},
			{
				id: 4,
				option: "Dynamics 365 products Insights"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 'https://www.youtube.com/watch?v=z1lZKV705CU 39:54'
	},
]