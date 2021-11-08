import * as topicsImport from '../topics/SapABAPTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.C_TW12ExamQuestions_Practice3
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.UniqueSelection,
		question: "You created a transparent table and during activation got a warning message 'Enhancement category for table missing'. What do you have to do to eliminate the warning message? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Provide the correct reference field for the Currency or Quantity field"
			},
			{
				id: 2,
				option: "Change the Data Class and Size category in the technical settings"
			},
			{
				id: 3,
				option: "Select the option Not Classified from the enhancement category"
			},
			{
				id: 4,
				option: "Select any option other than Not Classified from the enhancement category"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which options are available for a JOIN in ABAP Open SQL? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "CROSS JOIN"
			},
			{
				id: 2,
				option: "LEFT OUTER JOIN"
			},
			{
				id: 3,
				option: "RIGHT OUTER JOIN"
			},
			{
				id: 4,
				option: "INNER JOIN"
			},
			{
				id: 5,
				option: "FULL JOIN"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What do global types and local types have in common? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Field labels"
			},
			{
				id: 2,
				option: "Search help"
			},
			{
				id: 3,
				option: "Technical information"
			},
			{
				id: 4,
				option: "Documentation"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How do you create lock objects and lock modules for use in ABAP program that access the database?",
		options: [
			{
				id: 1,
				option: "Use the ABAP dictionary to create the lock objects. The lock module are created automatically."
			},
			{
				id: 2,
				option: "Use the function builder to create the lock modules. The lock objects are created automatically"
			},
			{
				id: 3,
				option: "Use the function builder to create the lock modules and lock objects"
			},
			{
				id: 4,
				option: "Use the ABAP dictionary to create the lock objects. Use the function builder to create the lack modules"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which must a search help do? There are 4 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Allow the user to select a response"
			},
			{
				id: 2,
				option: "Use a table or view for data selection"
			},
			{
				id: 3,
				option: "Have a dialog with the user"
			},
			{
				id: 4,
				option: "Be used from a screen"
			},
			{
				id: 5,
				option: "Determine the values for selection by the user"
			}
		],
		answer: [
            1,3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You have created table ZTAB you want to create a foreign key relationship to the table SAPTAB under which condition is this possible?",
		options: [
			{
				id: 1,
				option: "The check field in ZTAB must have a data element that does not refer to a domain"
			},
			{
				id: 2,
				option: "The check field in ZTAB must have the same domain as the corresponding field of check table SAPTAB"
			},
			{
				id: 3,
				option: "The check field in ZTAB must have the same ABAP dictionary type as the corresponding fields of check table SAPTAB"
			},
			{
				id: 4,
				option: "The text field in ZTAB must have the same name as the corresponding fieds of check table SAPTAB"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What type of ABAP Dictionary view is implemented as an INNER JOIN? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Projection view"
			},
			{
				id: 2,
				option: "Help view"
			},
			{
				id: 3,
				option: "Database view"
			},
			{
				id: 4,
				option: "Maintenance view"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "To which ABAP Dictionary definition can you assign fixed values? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Data element"
			},
			{
				id: 2,
				option: "Component of a structure"
			},
			{
				id: 3,
				option: "Domain"
			},
			{
				id: 4,
				option: "Field of a transparent table"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to add a field type CURR to a transparent table. What else must you do? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Add a key field of type CUKY"
			},
			{
				id: 2,
				option: "Add a check table that contains a field of type CUKY"
			},
			{
				id: 3,
				option: "Create a reference to a field of type CUKY"
			},
			{
				id: 4,
				option: "Create a new field CUKY as a pre-defined type"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What does the enhancement category for a database table or structure do? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Can produce warnings at incompatible points for the structure"
			},
			{
				id: 2,
				option: "Makes a table Unicode-compliant"
			},
			{
				id: 3,
				option: "Can identify where program behavior may change"
			},
			{
				id: 4,
				option: "Specifies the types of changes that can be made to the structure"
			}
		],
		answer: [
            1,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the allowed length of the ABAP Dictionary data type DF34_RAW? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "The allowed length is 34 digits"
			},
			{
				id: 2,
				option: "The allowed length is between 0 and 33 digits"
			},
			{
				id: 3,
				option: "The allowed length is between 1 and 31 digits"
			},
			{
				id: 4,
				option: "The allowed length is between 1 and 34 digits"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which database objects can you create in the ABAP Dictionary? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Indexes"
			},
			{
				id: 2,
				option: "Foreign key relationships"
			},
			{
				id: 3,
				option: "Projection views"
			},
			{
				id: 4,
				option: "Logical databases"
			}
		],
		answer: [
            1,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What data type you can create in the ABAP Dictionary? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Structure"
			},
			{
				id: 2,
				option: "Secondary index"
			},
			{
				id: 3,
				option: "Type group"
			},
			{
				id: 4,
				option: "Lock object"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the difference between a value table and a check table? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "No difference; they are the same thing"
			},
			{
				id: 2,
				option: "A value table is a check table after a foreign key is defined"
			},
			{
				id: 3,
				option: "A check table is defined in the domain, whereas a value table is defined in the data element."
			},
			{
				id: 4,
				option: "A value table does not exist"
			},
			{
				id: 5,
				option: "A value table is defined in the domain, whereas a check table is defined in the data element"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What can you create using the ABAP Dictionary? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Field symbols"
			},
			{
				id: 2,
				option: "Type pools"
			},
			{
				id: 3,
				option: "Domains"
			},
			{
				id: 4,
				option: "Transparent tables"
			},
			{
				id: 5,
				option: "Internal tables"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which component belong to an elementary search help? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Attachment to a field"
			},
			{
				id: 2,
				option: "Fixed values"
			},
			{
				id: 3,
				option: "Import / export parameters"
			},
			{
				id: 4,
				option: "Selection method"
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
		questionType: questionTypes.UniqueSelection,
		question: "The data buffered on each application server... Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Is does not the same"
			},
			{
				id: 2,
				option: "Is never the same"
			},
			{
				id: 3,
				option: "Depends on the users"
			},
			{
				id: 4,
				option: "Is always the same"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What will happen at runtime when accessing a buffered table? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "If data is read from the table buffer, the existing indexes are not used"
			},
			{
				id: 2,
				option: "Following an update to a buffered record, all table buffers in the system will be updated"
			},
			{
				id: 3,
				option: "All SELECT statements will read data from the buffer"
			},
			{
				id: 4,
				option: "If table data is read using indexes, the table buffer will not be filled"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "In an ABAP program, you to assign an initial value to an elementary data object when you define it. Which addition must you use? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "READ-ONLY"
			},
			{
				id: 2,
				option: "VALUE"
			},
			{
				id: 3,
				option: "DEFAULT"
			},
			{
				id: 4,
				option: "OBLIGATORY"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You define database view A and maintenance view B in ABAP dictionary. What restrictions apply to this views ? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "The tables joined in B must have foreign key relationships"
			},
			{
				id: 2,
				option: "The tables join in A must have foreign key relationships"
			},
			{
				id: 3,
				option: "The join of both A and B is an inner join"
			},
			{
				id: 4,
				option: "Only A can be used in the FROM clause of SELECT statement"
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
		questionType: questionTypes.UniqueSelection,
		question: "You create a domain in the ABAP dictionary. How can you use this domain? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "As the data type of a data element in the ABAP Dictionary"
			},
			{
				id: 2,
				option: "As the data type of a selection screen field"
			},
			{
				id: 3,
				option: "As the data type of a variable in an ABAP program"
			},
			{
				id: 4,
				option: "As the data type of an input field on a dialog screen"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "The order of fields for a transparent table in the database.. Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Needs to match the ABAP Dictionary"
			},
			{
				id: 2,
				option: "Is created in the order of the Data Dictionary"
			},
			{
				id: 3,
				option: "Is allowed to be different than the ABAP Dictionary"
			},
			{
				id: 4,
				option: "Is created in the order of the ABAP Dictionary"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Where are fixed values for fields stored? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Domain"
			},
			{
				id: 2,
				option: "Structure"
			},
			{
				id: 3,
				option: "Table"
			},
			{
				id: 4,
				option: "Field"
			},
			{
				id: 5,
				option: "Data element"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following customer modifications options are available in the table maintenance generator? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Maintenance screens"
			},
			{
				id: 2,
				option: "Events"
			},
			{
				id: 3,
				option: "Append searches"
			},
			{
				id: 4,
				option: "Search helps"
			}
		],
		answer: [
            1,2
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "For which of the following purposes can you use the ABAP dictionary? There are 2 corect anwers to this question",
		options: [
			{
				id: 1,
				option: "To create development classes"
			},
			{
				id: 2,
				option: "To maintain program translations"
			},
			{
				id: 3,
				option: "To crate lock objects"
			},
			{
				id: 4,
				option: "To activate logging for transparent tables"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following regarding search helps is a true statement? Please select all the correct answers that apply. 4 are correct",
		options: [
			{
				id: 1,
				option: "The text table for the selection method is automatically populated if the text table is attached to the database table being used as the selection method"
			},
			{
				id: 2,
				option: "The interface for the search help is defined by the IMP (import) and EXP (export) flag of the search help parameter"
			},
			{
				id: 3,
				option: "You can use a maintenance view for the search help selection method."
			},
			{
				id: 4,
				option: "The SPos parameter defines the position of the input field on the dialog screen"
			},
			{
				id: 5,
				option: "The LPos parameter defines the position of the search help"
			}
		],
		answer: [
            1,2,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which screen in the ABAP Dictionary allows you to log data changes to the table?",
		options: [
			{
				id: 1,
				option: "Utilities -> Seetings"
			},
			{
				id: 2,
				option: "Attributes tab"
			},
			{
				id: 3,
				option: "Delivery and Maintenance tab"
			},
			{
				id: 4,
				option: "Technical Settings"
			},
			{
				id: 5,
				option: "Utilities -> Database Object -> Database Utility"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "To which of the following can you assign search help? Note there are 3 correct answer to this question",
		options: [
			{
				id: 1,
				option: "Structure component"
			},
			{
				id: 2,
				option: "Data element"
			},
			{
				id: 3,
				option: "Domain"
			},
			{
				id: 4,
				option: "Table type"
			},
			{
				id: 5,
				option: "Check table"
			}
		],
		answer: [
            1,2,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What are the advantages of creating a database view to implement a join, instead of formulating the join directly in an Open SQL SELECT statement? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "A secondary index can be created for a database view"
			},
			{
				id: 2,
				option: "A database view can be buffered"
			},
			{
				id: 3,
				option: "A database view can be reused in other programs"
			},
			{
				id: 4,
				option: "An outer join can only be implemented in a database view"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Compared to a predifined ABAP type, what additional properties can be assigned to a domain? There are 3 corect anwers to this question",
		options: [
			{
				id: 1,
				option: "Parameter IDs"
			},
			{
				id: 2,
				option: "Value tables"
			},
			{
				id: 3,
				option: "Conversion exits"
			},
			{
				id: 4,
				option: "Fixed values"
			},
			{
				id: 5,
				option: "Search helps"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "In which database table type is there a one-to-one relationship between the Dictionary table definition and the relevant physical table in the database? Plase choose the correct answer",
		options: [
			{
				id: 1,
				option: "Pooled table"
			},
			{
				id: 2,
				option: "Cluster table"
			},
			{
				id: 3,
				option: "Transparent table"
			},
			{
				id: 4,
				option: "Internal table"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 15
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How do you create lock objects and lock modules for use in ABAP programs that access the database? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Use the Function Builder to create the lock modules. The lock objects are created in the program logic"
			},
			{
				id: 2,
				option: "Use the Function Builder to create the lock modules and the lock objects"
			},
			{
				id: 3,
				option: "Use the ABAP dictionary to create the lock objects. Use the function builder to create the lock modules"
			},
			{
				id: 4,
				option: "Use the ABAP Dictionary to create the lock objects. The lock modules are created automatically"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Where should the labels for fields be stored? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Data element"
			},
			{
				id: 2,
				option: "Domain"
			},
			{
				id: 3,
				option: "Field"
			},
			{
				id: 4,
				option: "Structure"
			},
			{
				id: 5,
				option: "Table"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following statements are true? There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Projection views can have more than one table included for the view definition"
			},
			{
				id: 2,
				option: "The tables included in the help view should have a foreign key relationship"
			},
			{
				id: 3,
				option: "The tables included in the maintenance view should have foreign key relationships"
			},
			{
				id: 4,
				option: "You cannot use a pooled or cluster table for a database view."
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following structures is created when you use a table type to define one of its components? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Append structure"
			},
			{
				id: 2,
				option: "Flat structure"
			},
			{
				id: 3,
				option: "Deep structure"
			},
			{
				id: 4,
				option: "Nested structure"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What is required to fully specify a Table Type in the ABAP Dictionary? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Header line"
			},
			{
				id: 2,
				option: "Table key"
			},
			{
				id: 3,
				option: "Table size"
			},
			{
				id: 4,
				option: "Line type"
			},
			{
				id: 5,
				option: "Access type"
			}
		],
		answer: [
            2,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "When an object that is already active is modifed, it can affect other objects that use it directly or indirectly. How are called the affected objects?",
		options: [
			{
				id: 1,
				option: "Database objects"
			},
			{
				id: 2,
				option: "Dependent objects"
			},
			{
				id: 3,
				option: "WebDynpro object"
			},
			{
				id: 4,
				option: "Repository objects"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the correct order for using a lock object?",
		options: [
			{
				id: 1,
				option: "Release the lock Read the data, set the lock, change the data"
			},
			{
				id: 2,
				option: "Read the data, set the lock, change the data release the lock"
			},
			{
				id: 3,
				option: "Set the lock, read the data, change the data, release the lock"
			},
			{
				id: 4,
				option: "Set the lock, read the data, release the lock change the data"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Where do you create online documentarion ((FI)help) for fields on the screen? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Domain"
			},
			{
				id: 2,
				option: "Data element"
			},
			{
				id: 3,
				option: "Field"
			},
			{
				id: 4,
				option: "Structure"
			},
			{
				id: 5,
				option: "Table"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following can you define in the technical setting of a transparent table? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Delivery class"
			},
			{
				id: 2,
				option: "Size category"
			},
			{
				id: 3,
				option: "Buffering type"
			},
			{
				id: 4,
				option: "Table name"
			},
			{
				id: 5,
				option: "Data class"
			}
		],
		answer: [
            2,3,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 20
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following are table buffering types? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Generic"
			},
			{
				id: 2,
				option: "Single-record"
			},
			{
				id: 3,
				option: "Column-store"
			},
			{
				id: 4,
				option: "Full"
			},
			{
				id: 5,
				option: "Primary-key"
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
		questionType: questionTypes.UniqueSelection,
		question: "What is the SAP recommended naming convention for append structures of standard SAPtables? please choose the correct answer",
		options: [
			{
				id: 1,
				option: "The components of an append structure should start with ZZ or YY"
			},
			{
				id: 2,
				option: "The name of the append structure must start with ZZ or YY"
			},
			{
				id: 3,
				option: "The name of the append structure must start with ZA"
			},
			{
				id: 4,
				option: "The components of an append structure should start with Z or Y"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 21
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following are true statements? There are 3 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Reference data types can be used to define the data type of the data element"
			},
			{
				id: 2,
				option: "The technical attributes of the data element can be defined by a domain, that is, the data type, the field length, and the number of decimal places"
			},
			{
				id: 3,
				option: "You can also select predefined data types to define the data type of the data element"
			},
			{
				id: 4,
				option: "Field labels are defined for the domain"
			}
		],
		answer: [
            1,2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 22
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "When is a foreign key check performed on an input/output field? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "If the field refers to the dictionary field for which a value help is defined"
			},
			{
				id: 2,
				option: "If the field refers to the dictionary field for which a check table is defined"
			},
			{
				id: 3,
				option: "If the field refers to the dictionary field for which a search is defined"
			},
			{
				id: 4,
				option: "If the field refers to the dictionary field for which a append search is defined"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 22
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Where can you define data types that can be used throughout the system? Note there are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "In a method"
			},
			{
				id: 2,
				option: "In the ABAP dictionary"
			},
			{
				id: 3,
				option: "In the Global interface"
			},
			{
				id: 4,
				option: "In a function module"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 23
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following transactions can you use to define transparent table? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "SE38"
			},
			{
				id: 2,
				option: "SE16N"
			},
			{
				id: 3,
				option: "SM37"
			},
			{
				id: 4,
				option: "SE11"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 23
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to create a transparent table in the ABAP dictionary. When the table is physically created in the database? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "When you insert the table name and select create"
			},
			{
				id: 2,
				option: "When you run the database utility transaction (SE14)"
			},
			{
				id: 3,
				option: "When you save the table"
			},
			{
				id: 4,
				option: "When you activate the table"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 24
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which data element property do you set so that the system logs changes to the content of fields with this data element? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "Change document"
			},
			{
				id: 2,
				option: "Documentation"
			},
			{
				id: 3,
				option: "PARAMETER ID"
			},
			{
				id: 4,
				option: "Input history"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 24
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the name of the field of the foreign key table that will be checked during input validation?",
		options: [
			{
				id: 1,
				option: "Foreign key"
			},
			{
				id: 2,
				option: "Check field"
			},
			{
				id: 3,
				option: "Primary key"
			},
			{
				id: 4,
				option: "Referenced field"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 25
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What properties will be set when you define a table type in ABAP dictionary? Note there are three correct answers to this question",
		options: [
			{
				id: 1,
				option: "Change document"
			},
			{
				id: 2,
				option: "Primary key"
			},
			{
				id: 3,
				option: "GET/SET parameter"
			},
			{
				id: 4,
				option: "Access mode"
			},
			{
				id: 5,
				option: "Line type"
			}
		],
		answer: [
            2,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 25
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which type of view uses an inner join in a search help?",
		options: [
			{
				id: 1,
				option: "Candidate key view"
			},
			{
				id: 2,
				option: "Help view"
			},
			{
				id: 3,
				option: "Database view"
			},
			{
				id: 4,
				option: "Maintenance view"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 26
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What is the condition that can restrict the number of records that can be displayed with the view?",
		options: [
			{
				id: 1,
				option: "Projection"
			},
			{
				id: 2,
				option: "Selection"
			},
			{
				id: 3,
				option: "Check"
			},
			{
				id: 4,
				option: "Table"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 26
	},
]