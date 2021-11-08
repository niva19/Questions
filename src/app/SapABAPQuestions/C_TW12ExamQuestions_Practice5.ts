import * as topicsImport from '../topics/SapABAPTopics';
import * as questionTypesImport from '../enums/questionsTypes';

var topic = topicsImport.topics.C_TW12ExamQuestions_Practice5
var questionTypes = questionTypesImport.questionTypes

export const questions = [
    {
		questionType: questionTypes.UniqueSelection,
		question: "When you define local classes in ABAP, which syntactical sequence must you follow? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "The order is handled automatically"
			},
			{
				id: 2,
				option: "PRIVATE SECTION, PROTECTED SECTION, PUBLIC SECTION"
			},
			{
				id: 3,
				option: "There order doesn't matter"
			},
			{
				id: 4,
				option: "PUBLIC SECTION, PROTECTED SECTION, PRIVATE SECTION"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 1
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What does the Refactoring Assistant allow you to do? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Move components between superclasses and subclasses"
			},
			{
				id: 2,
				option: "Move between classes and interfaces"
			},
			{
				id: 3,
				option: "Rename all occurrences of a method"
			},
			{
				id: 4,
				option: "Rename all subclasses of a method"
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
		questionType: questionTypes.MultipleSelection,
		question: "You call a lock module. Which exceptions could the lock module raise when a logical lock cannot be set? Not there are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "CX_SY_DATA_ACCESS_ERROR"
			},
			{
				id: 2,
				option: "CX_SY_OPEN_SQL_ERROR"
			},
			{
				id: 3,
				option: "SYSTEM_FAILURE"
			},
			{
				id: 4,
				option: "FOREIGN_LOCK"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You use Unified Modelling language (UML) to design your classes. You want to describe the message exchange between objects. Which diagram can you see? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Sequence diagram"
			},
			{
				id: 2,
				option: "Object diagram"
			},
			{
				id: 3,
				option: "Class diagram"
			},
			{
				id: 4,
				option: "Component diagram"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 2
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You have created the following: A class with an event definition A handler class with method ON_EVT that handles this event. A report that instantiate the handler class. A message statement that raises an exception However the report doesn't react to the event. How do you analyze this issue? Not there are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Check if the handler method is registered to the correct event"
			},
			{
				id: 2,
				option: "Check if the event is triggered by setting a breakpoint at the RAISE_EVENT statement"
			},
			{
				id: 3,
				option: "Check if the implementation of the handler method ON_EVT contains the desired logic"
			},
			{
				id: 4,
				option: "Check if the handler method ON EVT is defined in the subroutine of report."
			},
			{
				id: 5,
				option: "Check if the event is triggered by setting a breakpoint at the MESSAGE.. Raising statement."
			}
		],
		answer: [
            1,2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 3
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following steps are required to set up a shared memory area? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Declare a catalog object"
			},
			{
				id: 2,
				option: "Enable mutiple versions of an area root class"
			},
			{
				id: 3,
				option: "Generate an area root class"
			},
			{
				id: 4,
				option: "Set the root object"
			},
			{
				id: 5,
				option: "Call the attach_for_write method of area root class"
			}
		],
		answer: [
            3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which of the following statements dynamically changes the data type of field z1? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Assing z1 to <fs> casting"
			},
			{
				id: 2,
				option: "Move z1 to <fs>"
			},
			{
				id: 3,
				option: "Unassing <fs>"
			},
			{
				id: 4,
				option: "Assing z1 to <fs>"
			}
		],
		answer: 1,
		topic: topic,
		isOriginalQuestion: false,
		page: 4
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following statements are true? Select all that apply. 2 are correct",
		options: [
			{
				id: 1,
				option: "A static attribute is the same across all instances of the class. There is only one static attribute across all instances of the class"
			},
			{
				id: 2,
				option: "Static attributes cannot be changed by an object"
			},
			{
				id: 3,
				option: "Static attributes can be declared only in the private visibility section of the class"
			},
			{
				id: 4,
				option: "Static attributes are declared with the CLASS-DATA statement"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What can be part of the signature of an instance constructor?",
		options: [
			{
				id: 1,
				option: "Import parameters"
			},
			{
				id: 2,
				option: "Export parameters"
			},
			{
				id: 3,
				option: "Changing parameters"
			},
			{
				id: 4,
				option: "Exceptions"
			}
		],
		answer: [
            1,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 5
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following features do you have to consider when you use shared objects? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Memory bottlenecks result in runtime errors and have to be caught"
			},
			{
				id: 2,
				option: "Concurrent read accesses are supported"
			},
			{
				id: 3,
				option: "Concurrent write accesses are supported"
			},
			{
				id: 4,
				option: "Data is saved as attributes of objects"
			},
			{
				id: 5,
				option: "Data is saved as tables of objects"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 6
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which of the following area valid combinations of event visibility and handler method visibility? There area 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Private event and private handler"
			},
			{
				id: 2,
				option: "Private event and public handler"
			},
			{
				id: 3,
				option: "Public event and protected handler"
			},
			{
				id: 4,
				option: "Protected event and public handler"
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
		questionType: questionTypes.MultipleSelection,
		question: "For which of the following requirements can you implement a functional method? There are 2 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Method to set an instance attribute with one importing parameter and no other parameters"
			},
			{
				id: 2,
				option: "A handler method for an event that has a returning parameter"
			},
			{
				id: 3,
				option: "A private static helper method that returns a single value as the result of an algorithm"
			},
			{
				id: 4,
				option: "A factory method that returns an object reference"
			}
		],
		answer: [
            3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You want to loop over an internal table without copying each table row to a work area. How can you achieve this using a field symbol? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "LOOP AT <itab> REFERENCE INTO <field_symbol>. ENDLOOP"
			},
			{
				id: 2,
				option: "LOOP AT <itab> TRANSPORTING INTO <field_symbol>. ENDLOOP"
			},
			{
				id: 3,
				option: "LOOP AT <itab> INTO <field_symbol>. ENDLOOP."
			},
			{
				id: 4,
				option: "LOOP AT <itab> ASSIGNING <field_symbol>. ENDLOOP."
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 7
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You add the CREATE PROTECTED addition to a class definition. From where you can instantiate the class? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "From the class itself"
			},
			{
				id: 2,
				option: "From a child class"
			},
			{
				id: 3,
				option: "From a parent class"
			},
			{
				id: 4,
				option: "From a friend class"
			},
			{
				id: 5,
				option: "From any protected class"
			}
		],
		answer: [
            1,2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "Which method of passing parameters is preferred for its performance? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Pass by class"
			},
			{
				id: 2,
				option: "Pass by reference"
			},
			{
				id: 3,
				option: "Pass by subclass"
			},
			{
				id: 4,
				option: "Pass by value"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 8
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What can you use to achieve polymorphism? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Reports"
			},
			{
				id: 2,
				option: "Events"
			},
			{
				id: 3,
				option: "Inheritance"
			},
			{
				id: 4,
				option: "Subroutines"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which steps are needed when implementing the singleton concept for class instantiation with minimum coding? There are 3 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Define the class as abstract"
			},
            {
				id: 2,
				option: "Define the instantiation of the class as private"
			},
			{
				id: 3,
				option: "Save the instance of the class in a static attribute"
			},
			{
				id: 4,
				option: "Create an instance of the class in a static constructor"
			},
			{
				id: 5,
				option: "Create an event that returns the instance of the class"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 9
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You are writing a program that uses ABAP class. Which components of the class can you create directly from the program? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Only protected components"
			},
			{
				id: 2,
				option: "All components"
			},
			{
				id: 3,
				option: "Only private components"
			},
			{
				id: 4,
				option: "Only public components"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "How would you define a method of an ABAP class to prevent this method from being available in a subclass? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Final"
			},
			{
				id: 2,
				option: "Abstract"
			},
			{
				id: 3,
				option: "Protected"
			},
			{
				id: 4,
				option: "Private"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 10
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "You have the following class definition, Which components can be addressed directly from a subclass of class CL_AIRPLANE? Note there are 3 correct answer to this question",
		code: `CLASS CL _AIRPLANTE DEFINITION
	PUBLIC SECTION.
		METHOD : set_passengers.
	PROTECTED SECTION.
		CONSTANTS c_pos type i.
		METHODS get_passengers.
	PRIVATE SECTION.
		DATA mv_passengers TYPE i,
		METHODS set_attributes.
ENDCLASS.`,
        options: [
			{
				id: 1,
				option: "SET_ATTRIBUTES"
			},
			{
				id: 2,
				option: "SET_PASSENGERS"
			},
			{
				id: 3,
				option: "C_POS"
			},
			{
				id: 4,
				option: "GET_PASSENGERS"
			}
		],
		answer: [
            2,3,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 11
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "In a subclass, you want to redefine a method of the super class. Which of the following conditions must be fulfilled? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "The subclass method has a lower visibility than the super class method"
			},
			{
				id: 2,
				option: "The subclass method has same visibility as the super class method"
			},
			{
				id: 3,
				option: "The superclass method is an instance method"
			},
			{
				id: 4,
				option: "The super class method is abstract"
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
		questionType: questionTypes.UniqueSelection,
		question: "You have 2 objects: O1 of type class C1 and O2 of type class C2. Class C2 is a subclass of class C1. Which of the following statements implements an up cast? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "MOVE O1 ?TO O2."
			},
			{
				id: 2,
				option: "O2 ?= O1."
			},
			{
				id: 3,
				option: "MOVE O1 TO O2."
			},
			{
				id: 4,
				option: "O1 = O2"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 12
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What must you do create singleton class? Not there are two correct answers to this question",
		options: [
			{
				id: 1,
				option: "Define the class as a abstract"
			},
			{
				id: 2,
				option: "Store the reference to the singleton object of an instance attribute of the object itself"
			},
			{
				id: 3,
				option: "Set the class instantiation to the private"
			},
			{
				id: 4,
				option: "Create object in static method of class itself"
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
		question: "You implemented a subclass that inherits the instance constructor from it superclass. What can you do with the inherited constructor? There are 2 correct answers to this question",
		options: [
			{
				id: 1,
				option: "Create several implementations"
			},
			{
				id: 2,
				option: "Change the signature"
			},
			{
				id: 3,
				option: "Redefine the implementation"
			},
			{
				id: 4,
				option: "Change the name"
			}
		],
		answer: [
            2,3
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 13
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "What is unique about a functional method? There are 5 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "It can contain an exporting parameter."
			},
			{
				id: 2,
				option: "It can be used in SELECT statements."
			},
			{
				id: 3,
				option: "It must be a singleton."
			},
            {
				id: 4,
				option: "It can contain an importing parameter."
			},
			{
				id: 5,
				option: "It can be used in logical expressions."
			},
            {
				id: 6,
				option: "It can contain a changing parameter."
			},
            {
				id: 7,
				option: "It must contain a returning parameter."
			}
		],
		answer: [
            1,4,5,6,7
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 14
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "A class is defined as follows. Which components of the class can static method static1 address directly? There are 2 correct answers to this question",
        code: `CLASS my class
	DEFINITION PUBLIC SECTION
		METHODS do_something
		EVENTS state_changed
		CLASS-Methods static1
			PRIVATE SECTION
			TYPES t_table Type Standard table OF1001
			CONSTANTS gc_const TYPE I VALUE 1
ENDCLASS.`,
		options: [
			{
				id: 1,
				option: "t_table type"
			},
			{
				id: 2,
				option: "gc_const constant"
			},
			{
				id: 3,
				option: "state_changed event"
			},
			{
				id: 4,
				option: "do_something method"
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
		question: "You change and SAP standard global class by defining a post-method for SAP method. The original SAP method as an exporting parameter named PAR1. What type of parameter is PAR1 in post-method? There are 2 correct answers to this question.",
		options: [
			{
				id: 1,
				option: "Returning"
			},
			{
				id: 2,
				option: "Exporting"
			},
			{
				id: 3,
				option: "Importing"
			},
			{
				id: 4,
				option: "Changing"
			}
		],
		answer: [
            2,4
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You created a class by inheriting from superclass. The superclass contains a public instance method do something. You want to redefine method do something. What must you do?",
		options: [
			{
				id: 1,
				option: "Declare the method FINAL"
			},
			{
				id: 2,
				option: "Call the implementation in the superclass"
			},
			{
				id: 3,
				option: "Leave the signature of method unchanged"
			},
			{
				id: 4,
				option: "Change the visibility of method to PROTECTED."
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 16
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What happens when an authorization check fails? Please choose the correct answer.",
		options: [
			{
				id: 1,
				option: "The program is terminated"
			},
			{
				id: 2,
				option: "A type E message is displayed"
			},
			{
				id: 3,
				option: "The system field SY-SUBRC is set to a value other than zero"
			},
			{
				id: 4,
				option: "A CX_AUTH_FAILED type exception is raised"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 17
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which components of the class can be accessed in the implementation of a static method in that class?",
		options: [
			{
				id: 1,
				option: "All events"
			},
			{
				id: 2,
				option: "Types"
			},
			{
				id: 3,
				option: "Instance attributes"
			},
			{
				id: 4,
				option: "Constants"
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
		question: "You defined data reference Z1 generically. Which statement would you use to access the content of the referenced variable? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "Assign (z1) to <fs>"
			},
			{
				id: 2,
				option: "Get reference of z1 into wa"
			},
			{
				id: 3,
				option: "Assign z1 to <fs>"
			},
			{
				id: 4,
				option: "Assign z1->* to <fs>"
			}
		],
		answer: 4,
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "You enhance an SAP standard global class by defining a post-method for an SAP method. The original SAP method has an EXPORT parameter named PARM1. Which parameters does the post-method have? Please choose the correct answer",
		options: [
			{
				id: 1,
				option: "An import parameter named PARM1"
			},
			{
				id: 2,
				option: "A changing parameter named PARM1"
			},
			{
				id: 3,
				option: "An export parameter named PARM1"
			},
			{
				id: 4,
				option: "Returning parameter named PARM1"
			}
		],
		answer: 2,
		topic: topic,
		isOriginalQuestion: false,
		page: 18
	},
    {
		questionType: questionTypes.MultipleSelection,
		question: "Which statements are considered obsolete and cannot be used in ABAP Objects? Please select all the correct answers that apply",
		options: [
			{
				id: 1,
				option: "New"
			},
			{
				id: 2,
				option: "Is instance of"
			},
			{
				id: 3,
				option: "Tables"
			},
			{
				id: 4,
				option: "Data .. type..occurs"
			},
			{
				id: 5,
				option: "Loop at dbtab"
			}
		],
		answer: [
            3,4,5
        ],
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
    {
		questionType: questionTypes.UniqueSelection,
		question: "What character is used as a symbol for the operand type in an expression?",
		options: [
			{
				id: 1,
				option: "@"
			},
			{
				id: 2,
				option: "none of above"
			},
			{
				id: 3,
				option: "#"
			},
			{
				id: 4,
				option: "~"
			}
		],
		answer: 3,
		topic: topic,
		isOriginalQuestion: false,
		page: 19
	},
]