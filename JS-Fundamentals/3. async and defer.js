//  On loading of webpage two things happen
// 1. parsing of the html

// 2. loading of  scripts
// 2 => has two parts => 1. Fetching of scripts 2.execution of scripts

//  Let's say browser is parsing the html and encounters a script tag. At that moment browser will stop the parsing of html, then fetch the data
//  and then execute the script and then start parsing html again.
//  By default , this is the synchronous way
//  <script src=""/>
// async attribute.

// If we use async attribute
// <script async src=""/>
// The parsing of html continues and in the background we are fetching the the script files.
// As soon as the script files are available , the parsing of html  stops and after script files are completely executed , parsing of html continues.

// defer
// In case of defer attribute
// <script defer src=""/>
// The parsing of html happens first. script files are fetched parallel to html parsing. After the html parsing is totally complete, then only execution of srcipt files starts.

// Gotchas
// async attribute does not gurantee order of execution of scripts. So if one script is dependent on another script don't use async
// You can use async attribute in scripts which is independent of the main scipt code. Like google analytics script or other scripts.
// Best one is to use defer. As it maintains the order of execution of scripts and scripts are getting loaded while html is parsed.
