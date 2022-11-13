//   Javascript Runtime Enviroment

// Javascript runtime enviroment is a container which has all the tools to run javascript code
// Tools include :
// 1. Javascript engine
// 2. Set of APIs which to connect to outer enviroment
// 3. Event loop
// 4. Callback Queue
// 5. Micro-task queue

// JS engine is the heart of the Javascript runtive enviroment
// Node JS also is Javascript runtime enviroment
// APIs present in both Node JS and Browser : But internally they may have different implementation. Name is same
// 1. console
// 2. setTimeOut

//  The first javascript engine in Spider Monkey

// Javascript engine not a machine. It's not a hardware. It's a normal language.
// V8 engine is built with C++

// JS ENgine
// Input => Human Redable code i.e JS code
// Goes through three major steps :
// 1. Parsing
// 2. Compilation
// 3. Execution

// Parsing
// During this phase, the code is broken into tokens.
// let a =7 ; let ,a ,=,7 all are tokens.
// Syntax Parser : The job of syntax parser is to take the code and convert it into AST => Abstract syntax tree
// AST=> It is just an object containing various information and data values.
// You can check the generated ast tree using astexplorer.net website
// AST which is generated for the code is passed into the compilation phase.
// Compilation stage
//Javascript used JIT => Just in time compilation

// Difference between compiler and interpreter
// Interpreter
// Here code gets executed line by line.
// Code is fast as code is not compiled
// Compiler
// Code is compiled first which generates an optimized version which is then sent for execution
// Compiler is more efficient
// Javascript can behave as a compiled language or an interpreted language depending on the JS engine.
// When Javascript was created , it was meant to be a interpreted language.
//

// But  moderen browsers use both interpreter and compiler
// JIT => Javascript engines can use both inpreted and compiler to execute js code. That's why it is called Just in time compiler
// JIT uses the best of both worlds for interpreted and compiler.

// Parsing (Syntax Parser) => Compilation => Execution
// The compilation and execution goes hand in hand.
// AST goes to the iterpreter. The interpreter converts the AST to bytecode and send to the execution phase. While interpreting it take help of the compiler for optimizing the code.
// This can happen in multiple phases
// In some JS Engine we have AOT => Ahead of time compilation.In AOT compiler takes a piece code that is going to be executed and optimized it as much as can.
// Optimization by compiler
// 1. Inilining, 2. Copy elision 3. inline caching
//
// Execution Phase.
// Execution phase has two components => Memory heap and call stack
//
// Memory Heap
// This is the place where all the memory is allocated for code , variables and functions.
// Memory heap is always in sync with the call stack and garbage collector
//
// Garbage collector tries to free up memory whenever possible.
// Garbage collector uses Mark And Sweep ALgorithm
//
//
// Google V8 javascript engine is the fastest javascript engine.
// Their interpreter is named as "Iginition"
// Their compiler is name as "Turbo Fan"
// Their garbage collector is known as "Orinoco" and "Oilpan"
//
//
