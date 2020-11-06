![Build](https://github.com/Rogibb111/GameBoy-Emulator-Browser/workflows/Build/badge.svg)
# Gameboy Emulator 
## A browser based GB emulator for the modern world

A small project that I have been working on to familarize myself with TypeScript and my next step in writing emulators. This Readme will currently serve as a place for me to track my progress. Fascination reading material.
* 11/5/20 - A shitload has been done in the past few months, although there is probably not a whole lot to type about. The logging was wrapped up and is now working. I am using some object properties on the classes I want to log to denote which functions and properties are going to be logged. I also have a rudamentary console logger that consumes and prints the logs. At some point I will write a more robot logger that wil be more usefull. For right now im just logging the CPU and MMU functions and properties. Its hard to find the line on what I should be logging cause its easy to flood the console. I have also added in a testing framework (Jest) that will run with Github actions. All it does is run a test rom and checks to see if an error was thrown in the execution or not. It was slightly a pain in the ass because Jest really would rather use babel for transpilition instead of using native node ES6 syntax. Tried to get it to work but i needed babel in the end. Anywho, I am still working through the CPU exectuion chain, right now it mainly seems that loop are not working because conditional jumps are not working. Progress is still progress though.

* 7/24/20 - Almost two months and not much has been done. Well some stuff has been done. I started working through most of the major glaring runtime errors. Most of them were just bad imports. The way that ES6 modules are set up in my project means that typescript doesn't actually muck with the imports when it is compiling. This means that if try to import a typescript file, it explodes. Once all of those were done I was starting to work through the getting instructions to run. It became really hard pretty quickly because it was trying to run instructions that weren't there and I couldn't see very clearly the chain of already executed instructions. Thus I have started to work on the logging framework before going forward. After doing a bunch of research and playing in the typescript playground, I think I have a somewhat robust framework that will log all function calls and properties for all classes that extend the logger and register their functions and properties. I have hit a bit of a rode block because I am logging before and after functions are called, but the display interface wants to wrap the start and end into one single context. This means I have to keep track of function starts and pair them with their function ends. Currently thinking that combining their class id with their function name should be enough in most cases. Still have construct/deconstruct the keys for the map. 

* 6/3/20 - I am officially done with the bootloader instructions! Woot Woot. That being said, I still have yet to actually run the damn thing, so I am expecting a number of runtime errors to crop up before we are actually cooking with gas. Once I have fixed those, the bugs are going to be signficantly more difficult to figure out. I'll probably starting working on my logging tickets once that is done. Ill probably also be creating bugs for all of the logical bugs cropping up as well and filing them under the GetBootloaderWorking Milestone. There are still some other minor thing that I would like to fix in the interim too, like adding more functionality to the actual data types. That might involve some restructuring. We shall see.

* 5/23/20 - Have added a buttload more instructions at this point. Some of them were already there and just needed to be updated. There are still a few instructions left over from my initial start that need to be converted over, but aren't used by the GameBoy bios. I will probably hold off on updating these as they may fold into more generic instruction logic. Not much systemically has been done since the last checkin, but as I near the end of the bios instructions, I think I will start working on the beginning tickets for the logging system. For starts I think i need to flush out the ticket descriptions which will force me to think about implementation in more detail. I'm getting pretty close to having to actually debug all of this code! 

* 5/16/20 - Updated the execution logic so that the actions in the meta-data for instructions can referenece their own meta-data. This allowed me to do two things. One is for small edge cases where certain properties are decided by the logic in the action function, I can put the defaults in the data and change them if necessary in the action function. Two is it allowed me to attach the opcode maps for certain instructions directly to the meta-data. Makes it a hell of a lot easier to read what instructions use what opcode maps. The other major piece was flushing out the overall design of logging. After thinking it over a ton, It made the most sense to create a class for individual loggers that would wrap or attach themselves to all of the instances of classes floating around in the system. Then their would be a central aggregator class that combines and filters logs as necessary (could also be static functionality on the instance class). And finally there will be logging display components that take care of the rendering of logs into different outputs (console, web page, file). Also added a bunch more instructions.

* 5/4/20 - Have changed over the instructions to be meta-data instructions. This reduced the number of repeated logic was getting thrown in instructions. There are still some edge cases like jump instructions that modify some of the meta-data parameters, so a bunch of them still have to be edited in the action function. Want to look into seeing if I can use context and order of operations to simplify that. Need to make a ticket for it. Also have added some more instructions to get the BIOs working and some helper functions for setting flags in the CPU Registers. 

* 4/29/20 - Have added about 3 new instructions to the Z80 opcode map. Spent a bunch of time creating a small roadmap for myself using GitHub projects (I feel like a PM now with my fancy Kanban board).I also was able to get a GitHub action working to build the project whenever a PR gets put up and disable the merge button if the build fails. Not the most useful thing in the world, but does keep me from merging in bad typescript. Last and most painful was adding in all of the data models. There is a decent amount of redundancy in them for the time being, but I'm hoping that as I enter into the logging phase of this, I will be able to flush them out into more useful classes (As in different models will have different printouts). 

* 4/15/20 - Finished up the memory logic to wrap up work on the major systems. Did some minor error fixes with typing. Updated the module system to use ES2015 modules. Since modules don't work via loading from the file-system, needed to add small static node server to serve up files. Got button handlers fixed up as well. Started adding instructions to Z80 class. Wound up breaking them up into seperate files.

* 5/9/19 - All JavaScript files have been converted over to TypeScript. I have created MemoryBank instances for most of the ram, but have realized that my scheme doesn't work well with the Imran Nazar's ramoffset. Current thoughts are to read eram size from cartridge header and have the bank instance for eram take in the number of 8k banks to create. Then when reading and writing, we can pass in the rambank number for read and writes.

* 5/10/19 - Fixed most errors from linting. After looking over the MMU even more, I'm starting to think that I should be using the same scheme i use for handling ram banks with the roms banks as well. A: Better to use the same patter for similar operations and B: will probably help me debug. Now I need to come up with a good implementation.

* 5/11/19 - Added multuple bank support to the MemoryBank class. You can now pass in the size of the memory you are trying to emulate, and it will create the appropriate number of banks based off the bank size. It will now allow you set the active bank as well, so writes can occur in the right bank.
