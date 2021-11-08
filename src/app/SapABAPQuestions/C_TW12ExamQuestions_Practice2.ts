import * as topicsImport from '../topics/SapABAPTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.C_TW12ExamQuestions_Practice2
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.MultipleSelection,
		question: "You want to read single line of an internal table using table expression itab[..]. How can you identify the line? Note there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Specify a free table key"
			},
			{
				id: 2,
				option: "Specify a regular expression"
			},
			{
				id: 3,
				option: "Specify the Line index"
			},
			{
				id: 4,
				option: "Specify of WHERE condition"
			},
			{
				id: 5,
				option: "Specify secondary table key"
			}
		],
		answer: [
            3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which message types behave the same regardless of the context in which they are called? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "I"
			},
			{
				id: 2,
				option: "E"
			},
			{
				id: 3,
				option: "W"
			},
			{
				id: 4,
				option: "X"
			},
			{
				id: 5,
				option: "A"
			}
		],
		answer: [
            4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "When should you use a hashed internal table? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "When accessing always by primary key"
			},
			{
				id: 2,
				option: "When accessing by secondary key"
			},
			{
				id: 3,
				option: "When accessing by index"
			},
			{
				id: 4,
				option: "When accessing using the left-justified part of the key"
			},
			{
				id: 5,
				option: "When accessing mainly single records"
			}
		],
		answer: [
            1,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How can you declare an internal table using the transparent table A as its line type? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "DATA gt_itab TYPE REF TO a"
			},
			{
				id: 2,
				option: "DATA gt_itab TYPE LINE OF a"
			},
			{
				id: 3,
				option: "DATA gt_itab TYPE a"
			},
			{
				id: 4,
				option: "DATA gt_itab TYPE TABLE OF a"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following statements create a data object? Note there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Class"
			},
			{
				id: 2,
				option: "Types"
			},
			{
				id: 3,
				option: "Class - data"
			},
			{
				id: 4,
				option: "Parameters"
			},
			{
				id: 5,
				option: "Constants"
			}
		],
		answer: [
            3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You run an executable program that contains the following code, At what point does the system reserve memory for data object ov_var2?",
        code: `DATA: gv_var1 TYPE n LENGTH 3,
gv_var2 TYPE n LENGTH 3 VALUE '456'
START-OF-SELECTION.
CLEAR gv_var2
gv_var2=gv_var1
gv_var1='123'`,
		options: [
			{
				id: 1,
				option: "As soon as the program is loaded into the internal session"
			},
			{
				id: 2,
				option: "When value '123' is assigned to the date object"
			},
			{
				id: 3,
				option: "At the beginning of start-of-selection event block"
			},
			{
				id: 4,
				option: "When the assignment TO gv_var2 is executed"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You want to define a field symbol that will be assigned to character string. Which generic type can you use? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Clike"
			},
			{
				id: 2,
				option: "Any table"
			},
			{
				id: 3,
				option: "Csequence"
			},
			{
				id: 4,
				option: "Any"
			},
			{
				id: 5,
				option: "Xsequence"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the ALV Object Model? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "A group of classes that describe the ALV Grid as a whole and inherit from a single class"
			},
			{
				id: 2,
				option: "A group of classes that apply Grid as a whole and inherit from a multiple class"
			},
			{
				id: 3,
				option: "A group of hierarchal classes that describe the ALV Grid as a whole but do not inherit from a single class"
			},
			{
				id: 4,
				option: "A group of classes that describe the BDC Grid as a whole and inherit from a single class"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are the advantages of modularization? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Transparency"
			},
			{
				id: 2,
				option: "Maintainability"
			},
			{
				id: 3,
				option: "Reusability"
			},
			{
				id: 4,
				option: "Performance"
			},
			{
				id: 5,
				option: "Profitability across DBMS"
			}
		],
		answer: [
            1,2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following can you do with the SAP code inspector? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Monitor background tasks"
			},
			{
				id: 2,
				option: "Monitor runtime behavior"
			},
			{
				id: 3,
				option: "Analyze runtime data."
			},
			{
				id: 4,
				option: "Perform static code checks"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You define a formal parameter to a subroutine that accepts only internal table of type standard and type sorted as actual parameters. Which of the following generic ABAP data types must you use? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "Sorted table"
			},
			{
				id: 2,
				option: "Hashed table"
			},
			{
				id: 3,
				option: "Standard table"
			},
			{
				id: 4,
				option: "Index table"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "In which modularization units can you use parameters? Note there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Function modules"
			},
			{
				id: 2,
				option: "Dialog modules such as PBO modules"
			},
			{
				id: 3,
				option: "Methods"
			},
			{
				id: 4,
				option: "Subroutines"
			},
			{
				id: 5,
				option: "Event blocks such as start-of-selection"
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
		questionType: questionTypes.MultipleSelection,
		question: "What do you need to consider when creating a secondary index on a table? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "The table will be updated more quickly if you create more indexes"
			},
			{
				id: 2,
				option: "The index can be created for specific database systems only"
			},
			{
				id: 3,
				option: "The index must always be unique"
			},
			{
				id: 4,
				option: "The most frequently selected fields should be at the first positions in the index"
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
		questionType: questionTypes.UniqueSelection,
		question: "You define a generic variable that can hold the ABAP types C, D, N, STRING, and T. You want to restrict the use of other ABAP types. Which generic data type must you use in the definition? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "CLIKE"
			},
			{
				id: 2,
				option: "CSEQUENCE"
			},
			{
				id: 3,
				option: "DATA"
			},
			{
				id: 4,
				option: "SIMPLE"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: " dbtab is a transparent table. What is declared by the following statement? DATA myvar TYPE dbtab. Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "A structure variable"
			},
			{
				id: 2,
				option: "An elementary field"
			},
			{
				id: 3,
				option: "An internal table"
			},
			{
				id: 4,
				option: "A reference to an internal table"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following are incorrect statements? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "TYPES: carrid_ty LIKE spfli-s-carr_id."
			},
			{
				id: 2,
				option: "TYPES: Werks TYPE C LENGTH 4."
			},
			{
				id: 3,
				option: "TYPES: date_ty TYPE D LENGTH 10."
			},
			{
				id: 4,
				option: "TYPES: Str TYPE STRING LENGTH 20."
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What can you do with the code inspector? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Choose from only the performance, security and user interface check categories"
			},
			{
				id: 2,
				option: "Create only local inspections, objects sets and check variants"
			},
			{
				id: 3,
				option: "Create your own inspections, object sets and check variants"
			},
			{
				id: 4,
				option: "Create an object set to represent the programs and objects to be inspected"
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
		question: "What is the default length of the type C data type? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "16"
			},
			{
				id: 2,
				option: "1"
			},
			{
				id: 3,
				option: "8"
			},
			{
				id: 4,
				option: "256"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How many work areas are available in the Debugger? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "8"
			},
			{
				id: 2,
				option: "9"
			},
			{
				id: 3,
				option: "10"
			},
			{
				id: 4,
				option: "12"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which types of programs or parts of programs can be tested directly from the ABAP Workbench or ABAP Editor? There are 4 correct answers to this question",
		options: [
			{
				id: 1,
				option: "FUNCTION-POOL"
			},
			{
				id: 2,
				option: "INCLUDE"
			},
			{
				id: 3,
				option: "CLASS-POOL"
			},
			{
				id: 4,
				option: "INTERFACE-POOL"
			},
            {
				id: 5,
				option: "PROGRAM"
			},
			{
				id: 6,
				option: "METHOD"
			},
			{
				id: 7,
				option: "REPORT"
			},
			{
				id: 8,
				option: "FUNCTION MODULE"
			}
		],
		answer: [
            3,6,7,8
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to select all the records from a database table where field CITY contains substring 'BU' in any position. Which WHERE clause can you use in an Open SQL select statement? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "WHERE city LIKE '%BU*'"
			},
			{
				id: 2,
				option: "WHERE city LIKE '%BU%'"
			},
			{
				id: 3,
				option: "WHERE city LIK '_BU'"
			},
			{
				id: 4,
				option: "WHERE city LIKE '*BU*'"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the result of the following arithmetic operation?",
        code: `DATA: int TYPE I.
int=5*(3/10).
        `,
		options: [
			{
				id: 1,
				option: "0"
			},
			{
				id: 2,
				option: "1.5"
			},
			{
				id: 3,
				option: "1"
			},
			{
				id: 4,
				option: "2"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You write a report that displays mass data in a table. You decide to use the ALV Grid control (class CL_GUI_ALV_GRID) instead of a classical list display with WRITE statements. Which of the following functions can you offer to the user without doing any specific programming There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Display details by double-clicking on a row"
			},
			{
				id: 2,
				option: "Sort and filter the data by any column"
			},
			{
				id: 3,
				option: "Change column width and sequence"
			},
			{
				id: 4,
				option: "Convert currency amount columns"
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
		question: "What does Software Layer Aware Debugging allow you to do? Select all that apply. 3 are correct",
		options: [
			{
				id: 1,
				option: "Bypass authorization objects"
			},
			{
				id: 2,
				option: "Specify as much or as little code to debug"
			},
			{
				id: 3,
				option: "Trace executing code"
			},
			{
				id: 4,
				option: "Debug a large portion of code"
			},
			{
				id: 5,
				option: "Debug a small portion of code"
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
		questionType: questionTypes.UniqueSelection,
		question: "Your colleague has asked you to analyze and ABAP program that does not behave correctly when a button is pressed on the initial screen. You want to start Debugger when the button is pressed so that you can perform your analysis. What do you type in the command field? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "/ex"
			},
			{
				id: 2,
				option: "/o"
			},
			{
				id: 3,
				option: "/h"
			},
			{
				id: 4,
				option: "/n"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which prerequisites must be fulfilled before a repository object can be transported? There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "A transport layer must be assigned to the package"
			},
			{
				id: 2,
				option: "The repository object must be assigned to a change request."
			},
			{
				id: 3,
				option: "An inactive version of the repository object must exist."
			},
			{
				id: 4,
				option: "An application component must be assigned to the repository object."
			},
			{
				id: 5,
				option: "The repository object must be assigned to a package."
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You have declared a sorted internal table with the column A, B, C AND D. The key consists of columns A, B, C in this order. Which combination of columns in the WHERE clause of LOOP statement allows the system to optimise the process to the table? There are two correct answers to this question",
		options: [
			{
				id: 1,
				option: "A and B"
			},
			{
				id: 2,
				option: "B and C"
			},
			{
				id: 3,
				option: "C and D"
			},
			{
				id: 4,
				option: "A, B, C and D"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Under which circumstances will the classic Debugger start as the Debugger? Select all that apply. 2 are correct",
		options: [
			{
				id: 1,
				option: "When five modes already exist for this logon session."
			},
			{
				id: 2,
				option: "When the number of debugging sessions exceeds half the number of dialog sessions"
			},
			{
				id: 3,
				option: "If you manually switched to the classic Debugger during your last session"
			},
			{
				id: 4,
				option: "When you specify the default as the classic Debugger in the settings of the Object Navigator"
			},
			{
				id: 5,
				option: "None; the new Debugger will always start as the Debugger"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You display the content of an internal table using an ALV grid control. The content of the internal table changes during the program. Which CL_GUI_ALV_GRID class method can you use to display the changed content? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "SET_TABLE_FOR_FIRST_DISPLAY in module PAI"
			},
			{
				id: 2,
				option: "REFRESH_TABLE_DISPLAY in module PBO"
			},
			{
				id: 3,
				option: "REFRESH_TABLE_DISPLAY in module PAI"
			},
			{
				id: 4,
				option: "SET_TABLE_FOR_FIRST_DISPLAY in module PBO"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "When is the transport of development objects for a development request triggered?",
		options: [
			{
				id: 1,
				option: "When an object is activated"
			},
			{
				id: 2,
				option: "When an object is saved"
			},
			{
				id: 3,
				option: "When a request is released"
			},
			{
				id: 4,
				option: "When a task is released"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What does a non-exclusive debugging mode mean? There are 4 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Owing to the commit, inconsistent datasets can occur in the database"
			},
			{
				id: 2,
				option: "It may be used anywhere in the landscape"
			},
			{
				id: 3,
				option: "Someone else is debugging the same source code"
			},
			{
				id: 4,
				option: "Debugging is not possible for conversion or field exits"
			},
			{
				id: 5,
				option: "A roll-out is forced in the application after each Debugger view"
			},
			{
				id: 6,
				option: "Debugging is not possible between the statements SELECT and ENDSELECT because the database cursor needs to be closed using a COMMIT"
			}
		],
		answer: [
            1,4,5,6
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which class is used to define a reference for an instance of the ALV Object Model? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Class CL_SALV_TABLE"
			},
			{
				id: 2,
				option: "Class CL_GUI_ALV_GRID"
			},
			{
				id: 3,
				option: "Class CL_GUI_BDC_GRID"
			},
			{
				id: 4,
				option: "Class CL_GUI_CUSTOM_CONTAINER"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What must before you can create a new transportable function modules? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Transport request"
			},
			{
				id: 2,
				option: "Package"
			},
			{
				id: 3,
				option: "Module pool"
			},
			{
				id: 4,
				option: "Exception class"
			},
			{
				id: 5,
				option: "Function group"
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How many kinds of internal tables are supoported in the ABAP language? Plase choose the correct answer",
		options: [
			{
				id: 1,
				option: "5"
			},
			{
				id: 2,
				option: "3"
			},
			{
				id: 3,
				option: "2"
			},
			{
				id: 4,
				option: "1"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the best order to provide an event handler for an ALV? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "Register for the event, write the handler, create the ALV, display the ALV"
			},
			{
				id: 2,
				option: "Write the handler, create the ALV, register for the event, display the ALV"
			},
			{
				id: 3,
				option: "Write the handler, create the ALV, display the ALV, register for the event"
			},
			{
				id: 4,
				option: "Create the ALV, write the handler, register for the event, display the ALV"
			},
			{
				id: 5,
				option: "Write the handler, register for the event, create the ALV, display the ALV"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "When is an ENDSELECT not required for a SELECT? There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "When you specify into a table"
			},
			{
				id: 2,
				option: "When you specify appending a table"
			},
			{
				id: 3,
				option: "When you do a SELECT SINGLE"
			},
			{
				id: 4,
				option: "When you specify a join of tables"
			},
			{
				id: 5,
				option: "When the FROM is a view"
			}
		],
		answer: [
            1,2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Each ABAP program starts with an introductory statement. Which statements are correct? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "The introductory statement must be the first line in the program"
			},
			{
				id: 2,
				option: "The introductory statement must never be modified."
			},
			{
				id: 3,
				option: "The introductory statement must be the first statement in the program"
			},
			{
				id: 4,
				option: "The introductory statement can be modified."
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "If you are using external debugging (debugging of HTTP and RFC requests, which arrive in your ABAP system), what will the Debugger do?",
		options: [
			{
				id: 1,
				option: "May or may not stop, depending on external factors"
			},
			{
				id: 2,
				option: "Never stop: external breakpoints operate on users other than your own"
			},
			{
				id: 3,
				option: "Always stop when the external breakpoint is reached"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following statements can you use to setup checkpoints in an ABAP program? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "BREAK"
			},
			{
				id: 2,
				option: "CHECK"
			},
			{
				id: 3,
				option: "LOG-POINT"
			},
			{
				id: 4,
				option: "BREAK_POINT"
			},
			{
				id: 5,
				option: "ASSERT"
			}
		],
		answer: [
            3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following transactions are integrated in the ABAP workbench tools? There are 2 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Process overview (SM 50)"
			},
			{
				id: 2,
				option: "Class builder (SE24)"
			},
			{
				id: 3,
				option: "ABAP editor (SE38)"
			},
			{
				id: 4,
				option: "Overview of job selection (SM37)"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following standard types is numeric? Select all that apply. 3 are correct",
		options: [
			{
				id: 1,
				option: "P"
			},
			{
				id: 2,
				option: "DECFLOAT32"
			},
			{
				id: 3,
				option: "I"
			},
			{
				id: 4,
				option: "F"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 21
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are some of new features of open SQL in SAP netweaver 7.5? Note there are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Case expression"
			},
			{
				id: 2,
				option: "Intersection"
			},
			{
				id: 3,
				option: "String expressions"
			},
			{
				id: 4,
				option: "Full join"
			}
		],
		answer: [
            1,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 21
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which does the field catalog allow you to do? Select all that apply. 3 are correct.",
		options: [
			{
				id: 1,
				option: "Change the display order of a column"
			},
			{
				id: 2,
				option: "Produce a striped pattern for the display lines"
			},
			{
				id: 3,
				option: "Specify the sort order of the display table"
			},
			{
				id: 4,
				option: "Change the title of a column"
			},
			{
				id: 5,
				option: "Add a field to the display"
			}
		],
		answer: [
            1,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 22
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "The software component for a customer package can be..",
		options: [
			{
				id: 1,
				option: "SAP_BASIS"
			},
			{
				id: 2,
				option: "SAP APPL"
			},
			{
				id: 3,
				option: "SAP_HR"
			},
			{
				id: 4,
				option: "HOME"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 22
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following repository objects can you maintain in the ABAP Workbench? There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Internal tables"
			},
			{
				id: 2,
				option: "Function modules"
			},
			{
				id: 3,
				option: "Transparent tables"
			},
			{
				id: 4,
				option: "Business functions"
			},
            {
				id: 5,
				option: "Module pools"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 23
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "The table USER has the following fields: ID, FIRST_NAME, LAST_NAME. FIRST NAME, LAST NAME have the same basic type and length. You want to compare fields FIRST_NAME, LAST_NAME to each other. Which of the following SELECT statements can you use? There are 2 correct answers",
		options: [
			{
				id: 1,
				option: "SELECT * FROM users INTO TABLE it_users WHERE first_name = users last_name"
			},
			{
				id: 2,
				option: "SELECT * FROM users AS a INTO TABLE it_users WHERE a~first_name = a~last_name"
			},
			{
				id: 3,
				option: "SELECT * FROM users AS a INTO TABLE it_users WHERE a.first_name = last_name"
			},
			{
				id: 4,
				option: "SELECT * FROM users INTO TABLE it_users WHERE first_name = users~last name."
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 23
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which actions release a lock object (with a default value for _SCOPE)? Select all that apply. 5 are correct",
		options: [
			{
				id: 1,
				option: "A call to a function module"
			},
			{
				id: 2,
				option: "DEQUEUE_<lock_object>"
			},
			{
				id: 3,
				option: "ENQUEUE_<lock_object>"
			},
			{
				id: 4,
				option: "A SUBMIT"
			},
            {
				id: 5,
				option: "The display of a dialog message type A"
			},
			{
				id: 6,
				option: "ROLLBACK WORK"
			},
			{
				id: 7,
				option: "An /n in the command field"
			},
			{
				id: 8,
				option: "A CALL TRANSACTION"
			},
            {
				id: 9,
				option: "COMMIT WORK"
			},
			{
				id: 10,
				option: "The display of a dialog message type E"
			},
			{
				id: 11,
				option: "The display of an SAP screen"
			}
		],
		answer: [
            2,5,6,7,9
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 24
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the maximum number of watchpoints that can exist at one time?",
		options: [
			{
				id: 1,
				option: "No limit"
			},
			{
				id: 2,
				option: "8"
			},
			{
				id: 3,
				option: "6"
			},
			{
				id: 4,
				option: "10"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 25
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What parameters can you set when you run the code inspector? There are 3 correct anwers to this question",
		options: [
			{
				id: 1,
				option: "Check variant name"
			},
			{
				id: 2,
				option: "Work process name"
			},
			{
				id: 3,
				option: "Object set name"
			},
			{
				id: 4,
				option: "Inspection name"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 25
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following are valid control level changes within a loop over an internal table? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "COLLECT"
			},
			{
				id: 2,
				option: "LAST"
			},
			{
				id: 3,
				option: "END of <f>"
			},
			{
				id: 4,
				option: "SUM"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 26
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following tools belong to the ABAP Workbench? There are 3 correct answers to this question",
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
				option: "Screen Painter"
			},
			{
				id: 4,
				option: "Form Builder"
			},
			{
				id: 5,
				option: "Easy Acces Menu"
			}
		],
		answer: [
            1,2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 26
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to loop over an internal table without copying each table row to the work area. How can you achieve this using field symbol?",
		options: [
			{
				id: 1,
				option: "Loop..Reference into<field symbol>..endloop"
			},
			{
				id: 2,
				option: "Loop..Into<field symbol>..endloop"
			},
			{
				id: 3,
				option: "Loop..Into<field symbol> transport..endloop"
			},
			{
				id: 4,
				option: "Loop..Assigning<field symbol>..endloop"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 27
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You are creating and inspection using the code inspector. Which entity can you select for inspections? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Contents of package"
			},
			{
				id: 2,
				option: "Contents of transport request"
			},
			{
				id: 3,
				option: "Contents of an object set"
			},
			{
				id: 4,
				option: "Content of named user object"
			},
			{
				id: 5,
				option: "Content of single object"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 27
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You program use class CL_GUI_ALV_GRID to generate a classic ALV grid control. What do you need in your program to react to user double click a row in ALV grid. Note: there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "A method call to refresh the display"
			},
			{
				id: 2,
				option: "A SET HANDLER statement to the event"
			},
			{
				id: 3,
				option: "A handler method for double_click event"
			},
			{
				id: 4,
				option: "A handler class"
			},
			{
				id: 5,
				option: "A method call to raise double_click event"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 28
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A function module that has to classical exceptions is called with actual parameter value in a such a way that both exception conditions are fulfilled. How will the runtime system behave",
		options: [
			{
				id: 1,
				option: "No exceptions will be raised in the calling program and SY-subrc has the value specified for the OTHER option"
			},
			{
				id: 2,
				option: "Both exceptions will be raised in the calling program and SY-SUBRC has the value specified for the second exception."
			},
			{
				id: 3,
				option: "First exception that occurs will be raised in the calling program and sy-subrc has the value specified for the first exception"
			},
			{
				id: 4,
				option: "Both exceptions will be raised in the calling program and SY-subrc has the value specified for the OTHER option"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 28
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following Data Types are allowed in ABAP? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "DECFLOAT64"
			},
			{
				id: 2,
				option: "DECFLOAT32"
			},
			{
				id: 3,
				option: "DECFLOAT34"
			},
			{
				id: 4,
				option: "DECFLOAT16"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 29
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the result of the following arithmetic operation?",
		code: `DATA: int TYPE I
int =5/10`,
        options: [
			{
				id: 1,
				option: "1"
			},
			{
				id: 2,
				option: "0"
			},
			{
				id: 3,
				option: "5"
			},
			{
				id: 4,
				option: "2"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 29
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following values are replaceable in debugger mode? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Field names"
			},
			{
				id: 2,
				option: "Table names"
			},
			{
				id: 3,
				option: "Variables"
			},
			{
				id: 4,
				option: "Constants"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 30
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What a predefined ABAP data type in deep?",
		options: [
			{
				id: 1,
				option: "DECFLOAT34"
			},
			{
				id: 2,
				option: "X"
			},
			{
				id: 3,
				option: "String or xstring"
			},
			{
				id: 4,
				option: "N"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 30
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are the advantages of defining texts symbols in executable programs? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "The same text symbol can be used by other programs"
			},
			{
				id: 2,
				option: "They facilitate multilingual functionality"
			},
			{
				id: 3,
				option: "Then can store up to 256 characters"
			},
			{
				id: 4,
				option: "They are easier to maintain than literals"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 31
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "When would you call the RFC function module synchonously? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "During unidirectional communication"
			},
			{
				id: 2,
				option: "During two-way communication"
			},
			{
				id: 3,
				option: "During queue precessing"
			},
			{
				id: 4,
				option: "During interactive communication"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 31
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following data types are predefined ABAP data types? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "XSTRING"
			},
			{
				id: 2,
				option: "DECFLOAT34"
			},
			{
				id: 3,
				option: "DECIMALS"
			},
			{
				id: 4,
				option: "FLOAT"
			},
			{
				id: 5,
				option: "STRING"
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 32
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What does SAP recommend that you use a hashed table? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "When a table must be accessible by both index and key"
			},
			{
				id: 2,
				option: "When a table must be sorted automatically by key in ascending order"
			},
			{
				id: 3,
				option: "When a table is very large and you want to access the table by index only"
			},
			{
				id: 4,
				option: "When a table is very large and you want to access the table by key only"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 32
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "FORM routines (subroutines) can be used in which program types? There are 4 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Subroutine pools"
			},
			{
				id: 2,
				option: "Interface pools"
			},
			{
				id: 3,
				option: "Module pools"
			},
			{
				id: 4,
				option: "Function groups"
			},
			{
				id: 5,
				option: "Type groups"
			},
			{
				id: 6,
				option: "Class pools"
			},
			{
				id: 7,
				option: "Executables"
			}
		],
		answer: [
            1,3,4,7
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 33
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which desktops are part of the new ABAP debugger?",
		options: [
			{
				id: 1,
				option: "Objects"
			},
			{
				id: 2,
				option: "Desktop 1"
			},
			{
				id: 3,
				option: "List"
			},
			{
				id: 4,
				option: "Session"
			},
			{
				id: 5,
				option: "Break./Watchpoints"
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 33
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You want to deploy a program that processes character type data. When you implement the program you can either used classical string statements or the newer string expressions and functions. what are the main benefit of using the newer string expressions and string functions? Note there are 2 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "You can write compact Syntax instead a long sequence of statements"
			},
			{
				id: 2,
				option: "You can reduce the number of intermediate variables"
			},
			{
				id: 3,
				option: "You can write the code that is very easy to read and understand"
			},
			{
				id: 4,
				option: "You can improve the performance significantly"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 34
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Global data types defined in SAP system are",
		options: [
			{
				id: 1,
				option: "ABAP Dictionary types"
			},
			{
				id: 2,
				option: "Date types defined in the program using ABAP Dictionary types"
			},
			{
				id: 3,
				option: "Data defined in the program that is visible to all the routines/statements within the ABAP program"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 34
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Code can be used in multiple programs. There are 2 correct answer",
		options: [
			{
				id: 1,
				option: "Function Module in function group"
			},
			{
				id: 2,
				option: "Methods of local class"
			},
			{
				id: 3,
				option: "Include"
			},
			{
				id: 4,
				option: "Methods of global class"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 35
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How fields in the table list of the SELECT statement copied to the target gs_spfli",
		code: `SELECT SINGLE col1, col2, col3, col4 FROM SPFLI INTO gs_spfli
WHERE col1 = val1 AND
      col2 = val2`,
        options: [
			{
				id: 1,
				option: "They are copied from left to right"
			},
			{
				id: 2,
				option: "They are copied to field with same type"
			},
			{
				id: 3,
				option: "They are copied from right to left"
			},
			{
				id: 4,
				option: "They are copied to field with same name"
			},
			{
				id: 5,
				option: "They are copied to field same data type and name"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 35
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following statement correctly define a date object with the type of data element s_conn_id? Not there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "PARAMETER gv_id TYPE s_conn_id."
			},
			{
				id: 2,
				option: "DATA gv_id TYPE REF TO s_conn_id."
			},
			{
				id: 3,
				option: "DATA gv_id LIKES s_conn_id."
			},
			{
				id: 4,
				option: "DATA gv_id TYPE s_conn_id."
			},
			{
				id: 5,
				option: "CONSTANTS gv_id TYPE s_conn_id VALUE '0400'."
			}
		],
		answer: [
            1,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 36
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which statements are allowed for processing internal tables? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "DELETE"
			},
			{
				id: 2,
				option: "UPDATE"
			},
			{
				id: 3,
				option: "SELECT"
			},
			{
				id: 4,
				option: "INSERT"
			},
			{
				id: 5,
				option: "MODIFY"
			}
		],
		answer: [
            1,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 36
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following is a true statement? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Packages use interfaces and visibility to make their elements visible to other packages"
			},
			{
				id: 2,
				option: "The transport layer is a mandatory input field for the package"
			},
			{
				id: 3,
				option: "A package can be nested."
			},
			{
				id: 4,
				option: "All customer repository objects have to be assigned to a package"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 37
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "An ABAP program processes the following expressions r=a/b+c. Which of the following data declarations would cause the runtime environment to use fixed point Arithmeic for the above expression to calculare the value of 'r'",
		options: [
			{
				id: 1,
				option: `DATA r TYPE f,
a TYPE i VALUE 201,
b TYPE i VALUE 200,
C type f.`
			},
			{
				id: 2,
				option: `DATA r TYPE p,
a TYPE i VALUE 201,
b TYPE i VALUE 200,
C type f.`
			},
			{
				id: 3,
				option: `DATA r TYPE p DECIMAL 2,
a TYPE i VALUE 201,
b TYPE i VALUE 200,
C type P.`
			},
			{
				id: 4,
				option: `DATA r TYPE p DECIMAL 2,
a TYPE i VALUE 201,
b TYPE i VALUE 200,
C type f.`
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 37
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You want to move a transport request from the development system to the subsequent system. Which of the following are prerequisites for this? There are 2 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "The extended program check must show no warnings"
			},
			{
				id: 2,
				option: "The transport request must be released"
			},
			{
				id: 3,
				option: "All tasks of the transport request must be assigned to the same user"
			},
			{
				id: 4,
				option: "All objects included in the transport request must be activated"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 38
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following statements about the Object Navigator are true? There are 4 correct answers to this question",
		options: [
			{
				id: 1,
				option: "You can create Badl implementations in the Object Navigator"
			},
			{
				id: 2,
				option: "You can create customer projects (Transaction CMOD) in the Object Navigator"
			},
			{
				id: 3,
				option: "Menus can be displayed and edited in the Object Navigator."
			},
			{
				id: 4,
				option: "ABAP programs can be displayed and edited in the Object Navigator"
			},
			{
				id: 5,
				option: "Screens can be displayed and edited in the object Navigator"
			},
			{
				id: 6,
				option: "The ABAP Dictionary can be maintained in the Object Navigator"
			}
		],
		answer: [
            3,4,5,6
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 38
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Where you can define the local data type. There are 3 correct answers",
		options: [
			{
				id: 1,
				option: "Subroutine"
			},
			{
				id: 2,
				option: "PBO"
			},
			{
				id: 3,
				option: "load of program"
			},
			{
				id: 4,
				option: "Static method"
			},
			{
				id: 5,
				option: "Function module"
			}
		],
		answer: [
            1,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 39
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You have written a method implementation containing the following access to an internal table defined as a changing parameter of the method. READ TABLE ct_struc INDEX 1. What are the possible type definitions for parameter ct_itab? Note there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Sorted table"
			},
			{
				id: 2,
				option: "Index table"
			},
			{
				id: 3,
				option: "Standard table"
			},
			{
				id: 4,
				option: "Any table"
			},
			{
				id: 5,
				option: "Hashed table"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 39
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following actions Can you perform in both the ABAP editor and the ABAP debugger?",
		options: [
			{
				id: 1,
				option: "Create a breakpoint for a specific message"
			},
			{
				id: 2,
				option: "Create a watchpoint for a specific variable"
			},
			{
				id: 3,
				option: "Create a breakpoint for a specific line"
			},
			{
				id: 4,
				option: "Create a breakpoint for a specific statement"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 40
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "In the technical settings for a transparent table, buffering is switched on and single record buffering is selected. Which statement uses the buffered data assuming that the WHERE clause contains restrictions for all key fields? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "SELECT ... INTO TABLE..."
			},
			{
				id: 2,
				option: "SELECT SINGLE ... FOR UPDATE."
			},
			{
				id: 3,
				option: "SELECT SINGLE"
			},
			{
				id: 4,
				option: "SELECT .... ENDSELECT"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 40
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Function modules provide which types of parameters? There are 4 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Output"
			},
			{
				id: 2,
				option: "Return values"
			},
			{
				id: 3,
				option: "Exceptions"
			},
			{
				id: 4,
				option: "Input"
			},
			{
				id: 5,
				option: "Input/output (changing)"
			}
		],
		answer: [
            1,3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 41
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "How do you define an internal table in a private method of a class? There are 3 correct answers",
		options: [
			{
				id: 1,
				option: "Data it_tab TYPE <Table Type>"
			},
			{
				id: 2,
				option: "Data it_tab TYPE TABLE OF <Dictionary Table>"
			},
			{
				id: 3,
				option: "Data it_tab TYPE TABLE OF <Dictionary Table> WITH HEADER LINE"
			},
			{
				id: 4,
				option: "Data it_tab TYPE TABLE OF <Structure Type>"
			},
			{
				id: 5,
				option: "Data it_tab TYPE <Dictionary Table>"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 41
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following elements can a string template contain? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "String processing statements"
			},
			{
				id: 2,
				option: "Literals"
			},
			{
				id: 3,
				option: "Functional method calls"
			},
			{
				id: 4,
				option: "Functional module calls"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 42
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What scheduling technique is used by the ABAP debugger dispatcher for processing user requests? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Shortest First"
			},
			{
				id: 2,
				option: "Round Robin"
			},
			{
				id: 3,
				option: "First in, First out"
			},
			{
				id: 4,
				option: "Multiple Queue"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 42
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which statement cannot use a subquery",
		options: [
			{
				id: 1,
				option: "INSERT"
			},
			{
				id: 2,
				option: "DELETE"
			},
			{
				id: 3,
				option: "SELECT"
			},
			{
				id: 4,
				option: "UPDATE"
			},
			{
				id: 5,
				option: "None of the above"
			}
		],
		answer: 5,
		topic: topic,
		isOriginalQuestion: false,
		page: 43
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "To reserve an area on the screen for an ALV Grid Control, you must do the following? Plase choose the correct answer",
		options: [
			{
				id: 1,
				option: "Create an object (instantiate the object) of the class CL_GUI_ALV_GRID"
			},
			{
				id: 2,
				option: "Use the Screen Painter"
			},
			{
				id: 3,
				option: "Create an object (instantiate the object) of the class CL_SALV_TABLE"
			},
			{
				id: 4,
				option: "Create an object (instantiate the object) of the class CL_GUI_CUSTOM_CONTAINER"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 43
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Each ABAP program that actually contains executable statements... There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Is divided into processing blocks"
			},
			{
				id: 2,
				option: "Assigns every executable statement to a processing block regardless of it being in a processing block"
			},
			{
				id: 3,
				option: "Uses event blocks to trigger events in ABAP"
			},
			{
				id: 4,
				option: "Only assigns executable statements in a processing block to a processing block"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 44
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "A structure has enhancement category 3, can be enhanced (character-type). Which set of elementary types is allowed for the new fields? Plase choose the correct answer",
		options: [
			{
				id: 1,
				option: "D,I,string,T"
			},
			{
				id: 2,
				option: "C,D,N,X"
			},
			{
				id: 3,
				option: "C,D,N,T"
			},
			{
				id: 4,
				option: "F,I,P,X"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 44
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which comparisonj operators can you use in a logical expression related to the WHERE clause of the SELECT statement? There are 3 correct asnwers to this question",
		options: [
			{
				id: 1,
				option: "GT (greater than)"
			},
			{
				id: 2,
				option: "CO (contains only)"
			},
			{
				id: 3,
				option: "CP (cover pattern)"
			},
			{
				id: 4,
				option: "EQ (equals)"
			},
			{
				id: 5,
				option: "LIKE (fits pattern)"
			}
		],
		answer: [
            1,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 45
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following conditions must be fulfilled when using a GROUP BY clause in a SELECT statement? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "All fields in the SELECT clause that are not part of an aggregate function must be listed after GROUP BY"
			},
			{
				id: 2,
				option: "The fields after GROUP BY must have a character type"
			},
			{
				id: 3,
				option: "The SELECT statement must also have a WHERE clause"
			},
			{
				id: 4,
				option: "The table in the FROM clause must be a transparent table"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 45
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What must exist before you can create a new transportable funcion module? Not there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Type group"
			},
			{
				id: 2,
				option: "Module pool"
			},
			{
				id: 3,
				option: "Package"
			},
			{
				id: 4,
				option: "Function group"
			},
			{
				id: 5,
				option: "Change request"
			}
		],
		answer: [
            3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 46
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are making changes to a program that already has a transaction code linked to it. Your colleague is testing the transaction in your development system. At what point can the changed version of the program be tested? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "When you save the program"
			},
			{
				id: 2,
				option: "When you perform a syntax check on the program"
			},
			{
				id: 3,
				option: "When you release the transport requests for the program"
			},
			{
				id: 4,
				option: "When you activate the program"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 46
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "When do you need to use the GROUP BY clause in the SELECT statement? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "If you want to redefine the sequence of the columns in the result set"
			},
			{
				id: 2,
				option: "If you want to use aggregate functions and at least one component in the field list is a column identifier"
			},
			{
				id: 3,
				option: "If you want to use ORDER BY to specify a sub-order"
			},
			{
				id: 4,
				option: "If you want to use aggregate functions and all components in the field list are aggregate functions"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 47
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You have been asked to review the following expresion AND which process character string result = find(val='abapABAP' sub='A' occ=2 case='x')",
		options: [
			{
				id: 1,
				option: "2"
			},
			{
				id: 2,
				option: "4"
			},
			{
				id: 3,
				option: "1"
			},
			{
				id: 4,
				option: "6"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 47
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What options do you have when setting a watchpoint? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Stop at predefined conditions for all variables"
			},
			{
				id: 2,
				option: "Stop at predefined conditions for a specific variable"
			},
			{
				id: 3,
				option: "Stop at any change of all variables"
			},
			{
				id: 4,
				option: "Stop at any change of a specific variable"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 48
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following types of SQL statements always bypass the SAP table buffers? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "SELECT ... UP TO 1 ROW"
			},
			{
				id: 2,
				option: "SELECT SINGLE"
			},
			{
				id: 3,
				option: "SELECT ... INNER JOIN..."
			},
			{
				id: 4,
				option: "SELECT SUM (sales)"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 48
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Where can you define global data types that are visible system-wide? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "In a method of a global class"
			},
			{
				id: 2,
				option: "In a global class"
			},
			{
				id: 3,
				option: "In the ABAP Dictionary"
			},
			{
				id: 4,
				option: "In a global interface"
			},
			{
				id: 5,
				option: "In a function module"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 49
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "There are ___ versions of the ABAP Editor. Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "4"
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
		page: 50
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following incomplete ABAP predefined data types? Not there are three answers to this question",
		options: [
			{
				id: 1,
				option: "N"
			},
			{
				id: 2,
				option: "X"
			},
			{
				id: 3,
				option: "D"
			},
			{
				id: 4,
				option: "P"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 50
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the elementary data types is deep?",
		options: [
			{
				id: 1,
				option: "X"
			},
			{
				id: 2,
				option: "XSTRING"
			},
			{
				id: 3,
				option: "N"
			},
			{
				id: 4,
				option: "DECFLOAT34"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 51
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Database access can occupy most of the runtime in an ABAP program. Which tools are available to assist you to diagnose performance issues in your program? Select all that apply.",
		options: [
			{
				id: 1,
				option: "ABAP Objects Runtime Analysis (Transaction SE30)"
			},
			{
				id: 2,
				option: "ABAP Objects Runtime Analysis (Transaction ATRA)"
			},
			{
				id: 3,
				option: "ABAP Trace (Transaction SAT)"
			},
			{
				id: 4,
				option: "Performance Trace (Transaction ST05)"
			}
		],
		answer: [
            1,2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 51
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "When starting the Debugger, what circumstance causes the runtime error DEBUGGING_NOT_POSSIBLE? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "When more than five sessions are already associated with this login user"
			},
			{
				id: 2,
				option: "Starting a non-exclusive mode in a productive system"
			},
			{
				id: 3,
				option: "When the number of debugging sessions on the server exceeds the value defined by the profile parameter disp/wpdbug_max_no"
			},
			{
				id: 4,
				option: "When more than six sessions are already associated with this login user"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 52
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "How do you use a sorted internal table? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "You need to specify a key in the table declaration"
			},
			{
				id: 2,
				option: "You can read the records by index or key"
			},
			{
				id: 3,
				option: "You use APPEND to insert records at the correct position"
			},
			{
				id: 4,
				option: "You can resort the table with SORT"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 52
	},
]