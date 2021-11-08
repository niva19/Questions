import * as topicsImport from '../topics/SapABAPTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.C_TW12ExamQuestions_Practice1
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.UniqueSelection,
		question: "You have been asked by customer to develop open SQL code to convert the value of argument 'arg' into the ABAP dictionary type specified. Which SQL Syntax do you use to meet this requirement?",
		options: [
			{
				id: 1,
				option: "CAST(arg FOR type)"
			},
			{
				id: 2,
				option: "CASTING(arg FOR type)"
			},
			{
				id: 3,
				option: "CASTING(arg AS type)"
			},
			{
				id: 4,
				option: "CAST(arg AS Type)"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following are key capabilities of SAP NetWeaver? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Application Platform"
			},
			{
				id: 2,
				option: "People Integration"
			},
			{
				id: 3,
				option: "Information Integration"
			},
			{
				id: 4,
				option: "Supply Chain Management"
			},
			{
				id: 5,
				option: "Enterprise Resource Planning"
			}
		],
		answer: [
            1,2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How is an ABAP program with several dialog steps executed? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "The ABAP dispatcher takes over the entire execution without assigning any work process"
			},
			{
				id: 2,
				option: "The program is always executed in just one dialog work process with roll out"
			},
			{
				id: 3,
				option: "The program is always executed in just one dialog work process without roll out"
			},
			{
				id: 4,
				option: "Usually, dialog steps are assigned to different dialog work processes"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Your program performs a database update by calling function module in an update task. Which above statement can be used in the program to discard all update request for the current SAP logical unit of work (LUW) ? Note there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Message type W"
			},
			{
				id: 2,
				option: "Message type A"
			},
			{
				id: 3,
				option: "Rollback work"
			},
			{
				id: 4,
				option: "Message type E"
			},
			{
				id: 5,
				option: "Message type X"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "The Internet Communication Manager (ICM)... Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "Allows SAP NetWeaver Application Server to process HTTP requests"
			},
			{
				id: 2,
				option: "Can not replaced SAP ITS"
			},
			{
				id: 3,
				option: "Replaced SAP ITS"
			},
			{
				id: 4,
				option: "Allows the ABAP stack and the Java stack to exchange data"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What features are provided by the database interface? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Database independence of application programs"
			},
			{
				id: 2,
				option: "Data consistency check using foreign key relationships"
			},
			{
				id: 3,
				option: "Access to SAP table buffers"
			},
			{
				id: 4,
				option: "Conversion of Open SQL statements from ABAP statements into the corresponding database statements"
			},
			{
				id: 5,
				option: "Syntax check of Native SQL commands"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You write a program that updates a data record in the database using the following statement UPDATE scarr FROM Is_scarr. Which of the following task does the database interface perform? Note there are two correct answers to this question",
		options: [
			{
				id: 1,
				option: "It restrict the access to the Logon client"
			},
			{
				id: 2,
				option: "Check authorisation of current user"
			},
			{
				id: 3,
				option: "It applies a logical log to the updated data record"
			},
			{
				id: 4,
				option: "It translate this statement to native SQL"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the difference between SAP Basis and SAP NetWeaver?",
		options: [
			{
				id: 1,
				option: "All versions of SAP NetWeaver require the use of Unicode"
			},
			{
				id: 2,
				option: "There is no difference; the name change was driven by marketing alone"
			},
			{
				id: 3,
				option: "All versions of SAP NetWeaver include the ability to handle HTTP requests"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What must you specify in a Unicode system when opening a file in TEXT MODE? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "The code page"
			},
			{
				id: 2,
				option: "The byte order"
			},
			{
				id: 3,
				option: "The ENCODING addition"
			},
			{
				id: 4,
				option: "The Layer page"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following personalization options are available in the SAP GUI. There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "You can change the font size in the SAP GUI within a certain range"
			},
			{
				id: 2,
				option: "You can deactivate the display of pictures in the SAP GUI"
			},
			{
				id: 3,
				option: "You can vary the size of input fields"
			},
			{
				id: 4,
				option: "You can integrate your picture into the SAP Easy Access screen"
			},
			{
				id: 5,
				option: "You can display system messages in a dialog box"
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "How can Unicode checks be made? Select all that apply. 2 are correct",
		options: [
			{
				id: 1,
				option: "Only in a Unicode system or as part of a conversion to a Unicode system"
			},
			{
				id: 2,
				option: "In any system (after release 6.10) by specifying the program has Unicode checks active"
			},
			{
				id: 3,
				option: "By running Transaction UCCHECK"
			},
			{
				id: 4,
				option: "Cannot be enforced"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which statement is true? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "A database LUW cannot be placed within an SAP LUW"
			},
			{
				id: 2,
				option: "An SAP LUW must be placed within a database LUW"
			},
			{
				id: 3,
				option: "A database LUW must be placed without an SAP LUW"
			},
			{
				id: 4,
				option: "A database LUW must be placed within an SAP LUW"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which are the functions ABAP dispatcher? there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "It requests the data from database or the buffers"
			},
			{
				id: 2,
				option: "It saves the processing request in request queue"
			},
			{
				id: 3,
				option: "It distributes the requests among the work processes"
			},
			{
				id: 4,
				option: "It performs a roll-in and roll-out of user context"
			},
			{
				id: 5,
				option: "It integrates the presentation layer"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following components are part of SAP netweavers AS ABAP version 7.1x and higher? There are two correct answers to this question",
		options: [
			{
				id: 1,
				option: "Software deployment manager (SDM)"
			},
			{
				id: 2,
				option: "Internet communication manager(ICM)"
			},
			{
				id: 3,
				option: "Message server"
			},
			{
				id: 4,
				option: "SAP GUI for Java"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are some advantages of using open SQL? Note there are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "The application server buffer is not used"
			},
			{
				id: 2,
				option: "It can be used with any supported DBMS"
			},
			{
				id: 3,
				option: "All standard SQL commands can be used"
			},
			{
				id: 4,
				option: "Syntax is checked at design time"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Each work process is assigned a type of task that can be performed. Which statements related to this are true? There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "All work processes communicate with the database"
			},
			{
				id: 2,
				option: "To switch a work process type requires a restart of the SAP NetWeaver Application Server ABAP"
			},
			{
				id: 3,
				option: "A work process can communicate directly with an external system through a Remote Function Call"
			},
			{
				id: 4,
				option: "All work processes have the same structure"
			},
			{
				id: 5,
				option: "It is possible to have multiple spool work processes on an ABAP application server."
			},
			{
				id: 6,
				option: "It is possible to have multiple enqueue work processes on an SAP NetWeaver Application Server."
			},
			{
				id: 7,
				option: "All work processes communicate with the dispatcher."
			}
		],
		answer: [
            4,6,7
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following standards are implemented in SAP NetWeaver AS to support Web services? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "WDSL"
			},
			{
				id: 2,
				option: "XML"
			},
			{
				id: 3,
				option: "SOAP"
			},
			{
				id: 4,
				option: "USSI"
			},
			{
				id: 5,
				option: "Web server"
			}
		],
		answer: [
            1,2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following is the tool to implement and store BAPIS?",
		options: [
			{
				id: 1,
				option: "Class Builder"
			},
			{
				id: 2,
				option: "Function Builder"
			},
			{
				id: 3,
				option: "ABAP Editor"
			},
			{
				id: 4,
				option: "ABAP Dictionary"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "For which of the following functions can Business Application Programming Interfaces (BAPis) be used? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Pass data to an SAP system"
			},
			{
				id: 2,
				option: "Access business processes in SAP systems"
			},
			{
				id: 3,
				option: "Transfer SAP screen images to third-party applications (such as Microsoft Word)"
			},
			{
				id: 4,
				option: "Request data from an SAP system"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Identify the different installation options for SAP NetWeaver Application Server (AS). There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "SAP NetWeaver AS C++"
			},
			{
				id: 2,
				option: "SAP NetWeaver AS ABAP + Java"
			},
			{
				id: 3,
				option: "SAP NetWeaver AS ABAP"
			},
			{
				id: 4,
				option: "SAP NetWeaver All-In-One"
			},
			{
				id: 5,
				option: "SAP NetWeaver AS Java"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are making changes to a program that already has transaction code zzzz linked to it. Your colleagues testing transaction code zzzz in the same system. When does the change version of the program becomes visible to your colleague by transaction code zzzz?",
		options: [
			{
				id: 1,
				option: "When you activate the program"
			},
			{
				id: 2,
				option: "When you execute the program from the ABAP editor"
			},
			{
				id: 3,
				option: "When the syntax of the program is correct"
			},
			{
				id: 4,
				option: "When you save the program"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the purpose of enqueue work process?",
		options: [
			{
				id: 1,
				option: "It processes request triggered by an active user"
			},
			{
				id: 2,
				option: "It processes request for print output"
			},
			{
				id: 3,
				option: "It processes logical locks requests"
			},
			{
				id: 4,
				option: "It processes update request"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following components belong to the SAP application layer? There are 2 correct answers.",
		options: [
			{
				id: 1,
				option: "ABAP dispatcher"
			},
			{
				id: 2,
				option: "Database server"
			},
			{
				id: 3,
				option: "Database interface"
			},
			{
				id: 4,
				option: "SAP GUI"
			}
		],
		answer: [
            1,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A work process... Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Becomes inactive while waiting for a user"
			},
			{
				id: 2,
				option: "Uses a common memory area called shared memory"
			},
			{
				id: 3,
				option: "Becomes active while waiting for a user"
			},
			{
				id: 4,
				option: "Stays linked toa screen through the dispatcher"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
]