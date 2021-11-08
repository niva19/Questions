import * as topicsImport from '../topics/SapABAPTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.C_TW12ExamQuestions_Practice6
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the Web Dynpro programming model is based on?",
		options: [
			{
				id: 1,
				option: "Movel View Controller (MVC)"
			},
			{
				id: 2,
				option: "Business Server Pages (BSPs)"
			},
			{
				id: 3,
				option: "Internet Transaction Server (ITS)"
			},
			{
				id: 4,
				option: "Classic Dynpro programming"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to translate dynamic text in a web dynpro. From which abstract class should you inherit? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "CL_WD_CONFIGURATION_MODEL"
			},
			{
				id: 2,
				option: "CL_WD_COMPONENT_SERVICES"
			},
			{
				id: 3,
				option: "CL_WD_CONTEXT_SERVICES"
			},
			{
				id: 4,
				option: "CL_WD_COMPONENT_ASSISTANCE"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "In the CALL CUSTOMER-FUNCTION 'nnn' statement, nnn is a three-digit number used in SAP programs for which of the following types of enhancement? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Customer exits"
			},
			{
				id: 2,
				option: "User exits"
			},
			{
				id: 3,
				option: "New BAdIs"
			},
			{
				id: 4,
				option: "Business add-ins"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "How would you find out if an application program offers a program exit? Please select all the correct answers that apply. 4 are correct",
		options: [
			{
				id: 1,
				option: "ABAP workbench"
			},
			{
				id: 2,
				option: "Look for a customer exit in the SAP reference IMG within an application area"
			},
			{
				id: 3,
				option: "Use the Application Hierarchy"
			},
			{
				id: 4,
				option: "Search for the character string CUSTOMER-FUNCTION"
			},
			{
				id: 5,
				option: "Use the Repository Information System"
			}
		],
		answer: [
            2,3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following are features of the Context in Web Dynpro? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Every Web Dynpro controller has multiple Contexts"
			},
			{
				id: 2,
				option: "Every Web Dynpro controller has one Context"
			},
			{
				id: 3,
				option: "Data is transferred from one Context to another by firing plugs"
			},
			{
				id: 4,
				option: "Data is shared between controllers through Context mapping"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "How is data shared between Web Dynpro controller? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "By using context mapping from view controller to component controller"
			},
			{
				id: 2,
				option: "By using context mapping from view controller to another view controller"
			},
			{
				id: 3,
				option: "By using data binding from view controller to another view controller"
			},
			{
				id: 4,
				option: "By using context mapping from a view controller to custom controller"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are establishing the business logic layer for a Web Dynpro Component. Which service types are available in the Service Call wizard? There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Function group"
			},
			{
				id: 2,
				option: "Function module"
			},
			{
				id: 3,
				option: "Web service proxy"
			},
			{
				id: 4,
				option: "Transaction code"
			},
			{
				id: 5,
				option: "Class method"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which property of the InputField UI element must be bound to a context attribute? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "enable"
			},
			{
				id: 2,
				option: "value"
			},
			{
				id: 3,
				option: "visible"
			},
			{
				id: 4,
				option: "state"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which type of tranpost task is usted when you modify SAP standard objects? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Development/Correction"
			},
			{
				id: 2,
				option: "Workbench"
			},
			{
				id: 3,
				option: "Transport of copies"
			},
			{
				id: 4,
				option: "Repair"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following task does the BADI implementing class perform? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Deleting"
			},
			{
				id: 2,
				option: "Inserting"
			},
			{
				id: 3,
				option: "Filtering"
			},
			{
				id: 4,
				option: "Sequencing"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "The statements CALL BADI and GET BADI are used for which type of BAdIs? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Classical DDIc"
			},
			{
				id: 2,
				option: "None of the above"
			},
			{
				id: 3,
				option: "Classical BAdI"
			},
			{
				id: 4,
				option: "New BAdI"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following is a true statement? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "An access key is required to enhance an SAP application using a user exit"
			},
			{
				id: 2,
				option: "An access key is required to modify SAP repository objects"
			},
			{
				id: 3,
				option: "An access key is required to implement an implicit enhancement point"
			},
			{
				id: 4,
				option: "An access key is required to implement business add-ins"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What transactions can be used to carry out modification adjustments after a system upgrade? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Object Navigator (Transaction SPAU_ENH) to adjust ABAP Dictionary objects"
			},
			{
				id: 2,
				option: "Modification Adjustment Object Selection (Transaction SPAU) to adjust ABAP Repository objects"
			},
			{
				id: 3,
				option: "Spool Administration: Initial Screen (Transaction SPAD) to adjust ABAP Repository objects"
			},
			{
				id: 4,
				option: "Modification Adjustment: Dictionary Object Selection (Transaction SPDD) to adjust ABAP Dictionary objects"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following standard hook methods exits in all Web Dynpro controllers? There are 2 answers to this question",
		options: [
			{
				id: 1,
				option: "Wddoinit"
			},
			{
				id: 2,
				option: "Wddobeforenavigation"
			},
			{
				id: 3,
				option: "Wddoafteractions"
			},
			{
				id: 4,
				option: "Wddoexit"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A view can only be displayed in which circumnstances?",
		options: [
			{
				id: 1,
				option: "It can always be displayed"
			},
			{
				id: 2,
				option: "It contains an inbound and outbound plug"
			},
			{
				id: 3,
				option: "It has been embedded in a window"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "SAP enhancements for customer exits are managed by which transaction? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Transaction SMOD"
			},
			{
				id: 2,
				option: "Neither transaction listed here"
			},
			{
				id: 3,
				option: "Application CMOD"
			},
			{
				id: 4,
				option: "Transacion CMOD"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How do you add fields to an SAP-delivered transparent table without Modification? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Create an append structure containing the new fields"
			},
			{
				id: 2,
				option: "Define a structure containing the new fields and include it in the table definition"
			},
			{
				id: 3,
				option: "Add the new fields to the table definition"
			},
			{
				id: 4,
				option: "Use the database utility to enhance the definition on the database directly"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "When does the lifetime of a component controller begin and end? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "It begins the first time the Web Dynpro application is called at runtime and ends when the Web Dynpro application that called and instantiated the component ends"
			},
			{
				id: 2,
				option: "It ends the first time the Web Dynpro application is called at runtime and ends when the Web Dynpro application that called and instantiated the component ends"
			},
			{
				id: 3,
				option: "It begins with the Web Dynpro component and ends with the Web Dynpro application that called it"
			},
			{
				id: 4,
				option: "It lasts from creating data within the controller to cover the whole period during which the component is in use"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What can be exposed in the component interface of a Web dynpro component? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Standard hook methods of the component controller"
			},
			{
				id: 2,
				option: "Custom methods of the component controller"
			},
			{
				id: 3,
				option: "Context nodes of WINDOW controllers"
			},
			{
				id: 4,
				option: "Public attributes of WINDOW controlles"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What process is used to establish the automatic transport of data between the view controller's context attributes and the UI element in its layout? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "View assembly"
			},
			{
				id: 2,
				option: "Data binding"
			},
			{
				id: 3,
				option: "Context mapping"
			},
			{
				id: 4,
				option: "Data migration"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are required to add customer source code in the SAP delivered object using the new enhancement framework without modification. How can you find the available enhancement? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Select from the list of freely selected Badls or enhancement spots in the Repository Information System"
			},
			{
				id: 2,
				option: "Perform a program-related global search for a customer exit"
			},
			{
				id: 3,
				option: "Perform a program-related global search for GET BADI"
			},
			{
				id: 4,
				option: "Search for a Business Transaction Event in the Customizing tree (transaction SPRO)"
			},
			{
				id: 5,
				option: "Select from the list of application-related Badis or enhancement spots in the SAP Application Hierarchy"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What do enhancement spots manage? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Implicit enhancement points"
			},
			{
				id: 2,
				option: "New BAdIs"
			},
			{
				id: 3,
				option: "Classic BAdIs"
			},
			{
				id: 4,
				option: "Explicit enhancement points"
			},
			{
				id: 5,
				option: "Explicit enhancement sections"
			}
		],
		answer: [
            2,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following controller types can exist only once in a Web Dynpro component? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "View controller"
			},
			{
				id: 2,
				option: "Component controller"
			},
			{
				id: 3,
				option: "Configuration controller"
			},
			{
				id: 4,
				option: "Window controller"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which enhancements can provide a screen exit? Note there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Explicit enhancement points"
			},
			{
				id: 2,
				option: "Explicit enhancement section"
			},
			{
				id: 3,
				option: "Customer exits"
			},
			{
				id: 4,
				option: "NEW BADIs"
			},
			{
				id: 5,
				option: "Classic BADIs"
			}
		],
		answer: [
            3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Each component has an interface; of what does this interface consist? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Interface view"
			},
			{
				id: 2,
				option: "Data Container"
			},
			{
				id: 3,
				option: "Interface controller"
			},
			{
				id: 4,
				option: "Interface context"
			}
		],
		answer: [
            1,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Identify the ways to map context structures. There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Static context mapping"
			},
			{
				id: 2,
				option: "External context mapping"
			},
			{
				id: 3,
				option: "Direct context mapping"
			},
			{
				id: 4,
				option: "Dynamic context mapping"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "In which order do you implement a NEW BADI?",
		options: [
			{
				id: 1,
				option: `1.Create enhancement project
2.Create Badi implementation`
			},
			{
				id: 2,
				option: `1.Create enhancement spot implementation
2.Create Badi implementation`
			},
			{
				id: 3,
				option: `1.Create Badi implementation
2.Credit enhancement project`
			},
			{
				id: 4,
				option: `1.Create Badi implementation
2.Create enhancement spot implementation`
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You want to add a field ZZPRICE to the SAP standard transparent table EKKO. Which of the following actions result in an enhancement of the SAP standard? There are 2 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Add ZZPRICE to the customizing include for the table"
			},
			{
				id: 2,
				option: "Create an append structure and add ZZPRICE to it"
			},
			{
				id: 3,
				option: "Insert ZZPRICE into an SAP structure for the table"
			},
			{
				id: 4,
				option: "Insert ZZPRICE at the end of the table"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Is it possible to have multiple active implementations of business add-ins at a time? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "It can have multiple implementations if the Filter-Depend. checkbox is selected"
			},
			{
				id: 2,
				option: "It can have a multiple active implementation"
			},
			{
				id: 3,
				option: "It cannot have a multiple active implementation"
			},
			{
				id: 4,
				option: "It can have multiple active implementations if the Multiple use checkbox is selected"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What can you enhance using BADIs? There are 3 correct answers",
		options: [
			{
				id: 1,
				option: "menus"
			},
			{
				id: 2,
				option: "source code"
			},
			{
				id: 3,
				option: "database table"
			},
			{
				id: 4,
				option: "screens"
			},
			{
				id: 5,
				option: "data elements"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following characters is the first of a menu exit function code? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "-"
			},
			{
				id: 2,
				option: "&"
			},
			{
				id: 3,
				option: "+"
			},
			{
				id: 4,
				option: "*"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following items are used in a Web Dynpro Application to transport database data to the user interface? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Inbound plug"
			},
			{
				id: 2,
				option: "Context node"
			},
			{
				id: 3,
				option: "Supply function"
			},
			{
				id: 4,
				option: "Interface controller"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the purpose of implicit enhancement points? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "To create a secondary index for an SAP database table"
			},
			{
				id: 2,
				option: "To add fields to an SAP database table"
			},
			{
				id: 3,
				option: "To add code to a standard SAP program"
			},
			{
				id: 4,
				option: "To change code in a standard SAP program"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What does a Web Dynpro component contain? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Exactly one interface controller"
			},
			{
				id: 2,
				option: "Component controller"
			},
			{
				id: 3,
				option: "UI elements"
			},
			{
				id: 4,
				option: "Multiple views within a window"
			},
			{
				id: 5,
				option: "A context"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What transaction can be used to carry out modification adjustments after system upgrade? Note there are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "SPAU"
			},
			{
				id: 2,
				option: "SPAU_ENH"
			},
			{
				id: 3,
				option: "SPAD"
			},
			{
				id: 4,
				option: "SPOD"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which hook method exists for all controller types? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "wddoonopen()"
			},
			{
				id: 2,
				option: "wddoinit()"
			},
			{
				id: 3,
				option: "wddobeforenavigation()"
			},
			{
				id: 4,
				option: "wddoonclose()"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Can you search for suitable classic Business Add-Ins(BAdls)? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Search for suitable entries in the relevant component in the Implementation Guide (IMG)"
			},
			{
				id: 2,
				option: "Use the SAP menu Tools -> ABAP Workbench -> Development -> Business Object Builder"
			},
			{
				id: 3,
				option: "Search in the Repository Information System and choose Enhancements - > Customer Exits"
			},
			{
				id: 4,
				option: "Search in an application program for the method GET_INSTANCE of class CL_EXITHANDLER"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Identify the types of layaout managers. There are 4 correct answers to this question",
		options: [
			{
				id: 1,
				option: "RowLayout"
			},
			{
				id: 2,
				option: "ColumnLayout"
			},
			{
				id: 3,
				option: "MatrixLayout"
			},
			{
				id: 4,
				option: "GridLayout"
			},
			{
				id: 5,
				option: "FlowLayout"
			},
			{
				id: 6,
				option: "TreeLayout"
			}
		],
		answer: [
            1,3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What type of method is generated automatically by the Web Dynpro Explorer when you assign an action to a button UI element?",
		options: [
			{
				id: 1,
				option: "Event handler method"
			},
			{
				id: 2,
				option: "Ordinary method"
			},
			{
				id: 3,
				option: "Standard hook method"
			},
			{
				id: 4,
				option: "Supply function"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What can be implemented using an implicit enhancement option? There are 3 correct answer to this question",
		options: [
			{
				id: 1,
				option: "Additional attributes for global SAP classes"
			},
			{
				id: 2,
				option: "Additional parameters in SAP function modules"
			},
			{
				id: 3,
				option: "Overwrite methods for SAP function modules"
			},
			{
				id: 4,
				option: "Overwrite methods for global SAP classes"
			},
			{
				id: 5,
				option: "Additional exceptions in SAP function modules"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 21
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What does a view do? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Can be contained in a window"
			},
			{
				id: 2,
				option: "If entered by an inbound plug, caun cause an event handler method to be called"
			},
			{
				id: 3,
				option: "Contains other views"
			},
			{
				id: 4,
				option: "Contains a view controller"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 21
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Identify the types of controller. There are 5 correct answers to this question",
		options: [
			{
				id: 1,
				option: "View controller"
			},
			{
				id: 2,
				option: "Custom controller"
			},
			{
				id: 3,
				option: "Component controller"
			},
			{
				id: 4,
				option: "Configuration controller"
			},
			{
				id: 5,
				option: "Consumer controller"
			},
			{
				id: 6,
				option: "Window controller"
			}
		],
		answer: [
            1,2,3,4,6
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 22
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is data binding?",
		options: [
			{
				id: 1,
				option: "Connecting context node in one controller to context node in another controller"
			},
			{
				id: 2,
				option: "Connecting one web dynpro component to another web dynpro component"
			},
			{
				id: 3,
				option: "Connecting values of user interface elements to the context attribute of corresponding controller"
			},
			{
				id: 4,
				option: "Connecting and outbound plug of One view to the inbound plug of another view"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 22
	},
]