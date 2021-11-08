import * as topicsImport from '../topics/SapABAPTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.C_TW12ExamQuestions_Practice4
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following function types in a GUI status are reserved for internal use? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "S- SYSTEM"
			},
			{
				id: 2,
				option: "H-HELP REQUEST"
			},
			{
				id: 3,
				option: "E-EXIT"
			},
			{
				id: 4,
				option: "T-TRANSACTION"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Your selection screen can be modified at which event? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "None of the above"
			},
			{
				id: 2,
				option: "AT SELECTION-SCREEN"
			},
			{
				id: 3,
				option: "AT SELECTION-SCREEN OUTPUT"
			},
			{
				id: 4,
				option: "AT SELECTION-SCREEN ON <field_name>"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "In which event blog can you override the default value of PARAMETERS field on the selection screen?",
		options: [
			{
				id: 1,
				option: "At selection-screen"
			},
			{
				id: 2,
				option: "Process before output"
			},
			{
				id: 3,
				option: "Initialization"
			},
			{
				id: 4,
				option: "Start-of-selection"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the event block that all of your code changes belongs to if you do not explicitly code any event block in an executable program? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "AT SELECTION-SCREEN OUTPUT"
			},
			{
				id: 2,
				option: "INITIALIZATION"
			},
			{
				id: 3,
				option: "START-OF-SELECTION"
			},
			{
				id: 4,
				option: "LOAD-OF-PROGRAM"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are the declarative statements used to define the selection? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "PARAMETERS"
			},
			{
				id: 2,
				option: "SELECT-SCREEN"
			},
			{
				id: 3,
				option: "SELECT-OPTIONS"
			},
			{
				id: 4,
				option: "SELECTION-SCREEN"
			},
			{
				id: 5,
				option: "PARAMETERS-OPTIONS"
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
		questionType: questionTypes.UniqueSelection,
		question: "A user runs an ABAP program and enter an incorrect value on selection screen and chooses execute. Which event block must send the error message in order messages to display the selection screen again?",
		options: [
			{
				id: 1,
				option: "At selection-screen output"
			},
			{
				id: 2,
				option: "At selection-screen"
			},
			{
				id: 3,
				option: "At selection-screen on help request"
			},
			{
				id: 4,
				option: "At selection-screen on value request"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to display a dialog box in your ABAP program. Which statement do you use? Please choose the corect answer",
		options: [
			{
				id: 1,
				option: "CALL SCREEN 200 STARTING AT 5 5"
			},
			{
				id: 2,
				option: "CALL SCREEN 200"
			},
			{
				id: 3,
				option: "WINDOW 200 STARTING AT 5 5"
			},
			{
				id: 4,
				option: "SET SCREEN 200"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What above statement can you use to create instance of class CL_GUI_CUSTOM_CONTAINER in ABAP program?",
		options: [
			{
				id: 1,
				option: "DATA:go_container TYPE REF TO CL_GUI_CUSTOM_CONTAINER. CREATE OBJECT go_container"
			},
			{
				id: 2,
				option: "DATA:go_container TYPE CL_GUI_CUSTOM_CONTAINER. CREATE OBJECT go_container."
			},
			{
				id: 3,
				option: "DATA:go_container TYPE CL_GUI_CUSTOM_CONTAINER. CREATE DATA go_container."
			},
			{
				id: 4,
				option: "DATA:go_container TYPE REF TO CL_GUI_CUSTOM_CONTAINER. CREATE DATA go_container."
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which additions to the PARAMETERS statement can you use to fill the input fields on the selection screen with a suggested value? Not there are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "VALUE-CHECK"
			},
			{
				id: 2,
				option: "MEMORY-ID"
			},
			{
				id: 3,
				option: "DEFAULT"
			},
			{
				id: 4,
				option: "MODIF ID"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which statement ends a screen sequence and starts from initial screen? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "LEAVE TO SCREEN"
			},
			{
				id: 2,
				option: "SET SCREEN 0"
			},
			{
				id: 3,
				option: "CALL SCREEN"
			},
			{
				id: 4,
				option: "LEAVE SCREEN"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "At most, how many menu items (including functions, separators and submenus) can a menu have on the screen?",
		options: [
			{
				id: 1,
				option: "8"
			},
			{
				id: 2,
				option: "10"
			},
			{
				id: 3,
				option: "15"
			},
			{
				id: 4,
				option: "20"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following program types can contain screens? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Module pools"
			},
			{
				id: 2,
				option: "Interface pools"
			},
			{
				id: 3,
				option: "Function groups"
			},
			{
				id: 4,
				option: "Executable programs"
			},
			{
				id: 5,
				option: "Class pools"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following actions can be performed in the Process After Input (PAI) processing block? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Set the title bar"
			},
			{
				id: 2,
				option: "Set the GUI status of the screen"
			},
			{
				id: 3,
				option: "Check the function code"
			},
			{
				id: 4,
				option: "Modify screen attribute dynamically"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "An executable ABAP program contains a standard selection screen and uses the event blocks AT SELECTION SCREEN, AT SELECTION-SCREEN OUTPUT, INITIALIZATION, START-OFSELECTION. In which sequence will ABAP runtime call these event blocks? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: `1. INITIALIZATION
2. AT SELECTION-SCREEN OUTPUT
3. START-OF-SELECTION
4. AT SELECTION-SCREEN`
			},
			{
				id: 2,
				option: `1. INITIALIZATION
2. AT SELECTION-SCREEN
3. AT SELECTION-SCREEN OUTPUT
4. START-OF-SELECTION`
			},
			{
				id: 3,
				option: `1. AT SELECTION-SCREEN OUTPUT
2. INITIALIZATION
3. AT SELECTION-SCREEN
4. START-OF-SELECTION`
			},
			{
				id: 4,
				option: `1. INITIALIZATION
2. AT SELECTION-SCREEN OUTPUT
3. AT SELECTION-SCREEN
4. START-OF-SELECTION`
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following rules must you follow when creating subscreens? There are 2 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Subscreens can call other subscreens"
			},
			{
				id: 2,
				option: "Subscreens CANNOT have an AT EXIT-COMMAND module."
			},
			{
				id: 3,
				option: "Subscreens can have a dialog module containing SET PF-STATUS."
			},
			{
				id: 4,
				option: "Subscreens CANNOT have a field of type OK."
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following statements regarding the event AT SELECTIONSCREEN ON HELP-REQUEST FOR <FIELD> is correct? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "This event will display self-defined (F1) help for the input field programmed in the event block and will override any help possibly defined in the ABAP Dictionary for the field."
			},
			{
				id: 2,
				option: "None of the above."
			},
			{
				id: 3,
				option: "This event will display self-defined (F1) help for the output field programmed in the event block and will override any help possibly defined in the ABAP Dictionary for the field."
			},
			{
				id: 4,
				option: "This event will display (F1) help for the input field on the selection screen."
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "At most, how many buttons can the application toolbar have on the screen? please choose the correct answer",
		options: [
			{
				id: 1,
				option: "35"
			},
			{
				id: 2,
				option: "20"
			},
			{
				id: 3,
				option: "10"
			},
			{
				id: 4,
				option: "30"
			},
			{
				id: 6,
				option: "none of the above"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is mandatory for automatic data transport between a variable and an input field on a classical screen (dynpro)? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "The variable must be declared using the DATA statement"
			},
			{
				id: 2,
				option: "The property OUTPUT of the input field must be set"
			},
			{
				id: 3,
				option: "The variable must be declared using the TABLES statement"
			},
			{
				id: 4,
				option: "The name of the variable and the name of the input field must be identical"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Each button on a Dynpro (screen) requires the assignment of a function code. This function code...",
		options: [
			{
				id: 1,
				option: "Can be used to identify when the button is clicked by looking for the function code in the screen's OK CODE field."
			},
			{
				id: 2,
				option: "Is used to define global variables that receive a value when the button is clicked"
			},
			{
				id: 3,
				option: "Prevents the function code from be assigned to a menu item"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How can you maintain documentation for input fields on your screen? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "Add documentation to the underlying data element"
			},
			{
				id: 2,
				option: "Add documentation to the SCREEN table at PROCESS AFTER INPUT (PAI)"
			},
			{
				id: 3,
				option: "Add documentation to the SCREEN table at PROCESS BEFORE OUTPUT (PBO)"
			},
			{
				id: 4,
				option: "Define text tables for the underlying structure"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following is correct? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "None of the above"
			},
			{
				id: 2,
				option: "The screen attributes can be modified in the PROCESS AFTER INPUT event block"
			},
			{
				id: 3,
				option: "The screen attributes can be modified in the PROCESS BEFORE OUTPUT and PROCESS AFTER INPUT event blocks"
			},
			{
				id: 4,
				option: "The screen attributes can be modified in the PROCESS BEFORE OUTPUT event block"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the default selection screen number for the ABAP program?",
		options: [
			{
				id: 1,
				option: "none of above"
			},
			{
				id: 2,
				option: "1000"
			},
			{
				id: 3,
				option: "100"
			},
			{
				id: 4,
				option: "1100"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You build a dialog screen with an input field in an ABAP program. How do you ensure that the contents of the screen field can be assessed in the program?",
		options: [
			{
				id: 1,
				option: "Enter the name of data object in the parameter ID attribute of screens field"
			},
			{
				id: 2,
				option: "Use the GET statement in the program to transfer the data from screen field"
			},
			{
				id: 3,
				option: "Define data object in program with same name as screen field"
			},
			{
				id: 4,
				option: "Use a MOVE treatment in PAl module to copy data object."
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Using the screen system table, what can you modify through a LOOP AT SCREEN ... ENDLOOP construct? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Screen status"
			},
			{
				id: 2,
				option: "Attributes of screen elements"
			},
			{
				id: 3,
				option: "Values of screen elements"
			},
			{
				id: 4,
				option: "Function code of buttons"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following make up a GUI status? There are 4 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Title bar"
			},
			{
				id: 2,
				option: "Manu bar"
			},
			{
				id: 3,
				option: "Application toolbar"
			},
			{
				id: 4,
				option: "Function key settings"
			},
			{
				id: 5,
				option: "Standard toolbar"
			}
		],
		answer: [
            2,3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are the differences between displaying in a full screen and in a container? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "The full screen requires Dynpro programming"
			},
			{
				id: 2,
				option: "Only a full-screen ALV allows the use of event handling"
			},
			{
				id: 3,
				option: "The container requires the use of an additional object (a container control)"
			},
			{
				id: 4,
				option: "The only difference is that the container name must be specified when creating the ALV object"
			},
			{
				id: 5,
				option: "Only an ALV in a container allows the use of event handling"
			},
			{
				id: 6,
				option: "Any type of ALV allows the use of event handling"
			}
		],
		answer: [
            3,6
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to check the user input in the field FIELD_NAME on a classical screen. If an incorrect value is entered, the user should be able to correct the field value. How do you call the module CHECK_MODULE in the PAl of the screen to accomplish this? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "FIELD field_name MODULE check_module MESSAGE Ennn"
			},
			{
				id: 2,
				option: "CHAIN. MODULE check_module FIELD field_name. ENDCHAIN"
			},
			{
				id: 3,
				option: "MODULE check_module ON ERROR"
			},
			{
				id: 4,
				option: "FIELD field_name MODULE check_module"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A screen has the following PAl flow logic, What happens if the application send a type E message during the check_CB module processing? Please choose the correct answer",
		code: `PROCESS AFTER INPUT

FIELD A
MODULE check_A.

FIELD B
MODULE check_B.

CHAIN.
FIELD:C,D
MODULE check_CD
ENDCHAIN.

CHAIN.
FIELD:C,B.
MODULE check_CB
ENDCHAIN.`,
        options: [
			{
				id: 1,
				option: "The screen is NOT displayed again. Processing terminates and the user must restart the ABAP program"
			},
			{
				id: 2,
				option: "The screen is displayed again without processing the PBO flow logic. All fields are ready for input"
			},
			{
				id: 3,
				option: "The screen is displayed again without processing the PBO logic flow. Only fields B and C are ready for input"
			},
			{
				id: 4,
				option: "The screen is displayed again and the PBO flow logic is processed. Only fields B and C are ready for input."
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following program types can contain screen? Note there are 3 answers to this question",
		options: [
			{
				id: 1,
				option: "Module pools"
			},
			{
				id: 2,
				option: "Class pools"
			},
			{
				id: 3,
				option: "Function group or function pool"
			},
			{
				id: 4,
				option: "Interface pools"
			},
			{
				id: 5,
				option: "Executable programs"
			}
		],
		answer: [
            1,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which ABAP statement can make an element visible that you statically defined as invisible? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "SCREEN-INVISIBLE = 1"
			},
			{
				id: 2,
				option: "SCREEN-INVISIBLE = 0"
			},
			{
				id: 3,
				option: "SCREEN-ACTIVE = 1"
			},
			{
				id: 4,
				option: "SCREEN-ACTIVE = 0"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How do you program an input validation on a selection screen that allows users to correct their input? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Implement a check at the event AT SELECTION-SCREEN. In case of an input error, a type E MESSAGE must be displayed"
			},
			{
				id: 2,
				option: "Implement the check at the event AT SELECTION-SCREEN. In case of an input error, a type A MESSAGE must be displayed"
			},
			{
				id: 3,
				option: "Implement the check at the event END-OF-SELECTION. In case of an input error, a type E MESSAGE must be displayed"
			},
			{
				id: 4,
				option: "Implement the check at the event AT SELECTION-SCREEN OUTPUT. In case of an input error, a type E MESSAGE must be displayed."
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "After which statement will the runtime system initialize the ABAP memory. Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "CALL TRANSACTION"
			},
			{
				id: 2,
				option: "SUBMIT"
			},
			{
				id: 3,
				option: "LEAVE TO TRANSACTION"
			},
			{
				id: 4,
				option: "SUBMIT... AND RETURN"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Where can you set the GUI status and the GUI title for a classical scren (dynpro)? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "In a module called from PBO of the screen"
			},
			{
				id: 2,
				option: "In the properties of the related header UI element"
			},
			{
				id: 3,
				option: "In a module called from PAI of the screen"
			},
			{
				id: 4,
				option: "In the attribute of the screen"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which events can exist in all types of program that actually contain executable statements? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "INITIALIZATION"
			},
			{
				id: 2,
				option: "AT LINE-SELECTION"
			},
			{
				id: 3,
				option: "START-OF-SELECTION"
			},
			{
				id: 4,
				option: "AT USER-COMMAND"
			},
			{
				id: 5,
				option: "LOAD-OF-PROGRAM"
			}
		],
		answer: 5,
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
]