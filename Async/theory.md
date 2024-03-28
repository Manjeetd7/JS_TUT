javascript is a synchronised & single threaded langauge


synchronised  - moves to second task after completion of the first

single threaded - it canbe run on browser, node or environment . Bcoz of being single threaded, it is relatively slow to other languages


EXECUTION CONTEXT 

It takes place in two parts - Memory heap & Call stack

tasks are first categorised acc to their memory & then put in a stack after global execution in order to get executed

BLOCKING CODE 

Blocking code stops the flow of the program. It prevents the running of two tasks simultaneously. Blocks the second command until first gets executed

NON BLOCKING CODE

Non blocking code prefers execution of two tasks simultaneously

BOth are preffered according to the use cases, both are equally relevant

READING FILE is a hard task. First its context is given to kernel, then kernel access and read the required file and execution is done

JS ENGINE is made up of memory heap and call stack. It is connected to Web API / node

Web API can access DOM but node cannot do that


SUPPOSE we have given setTimeout to a function as setTimeOut(function) for 2 seconds. It gets registered in the call back and gets sent to the Queue which send it back to the stack accoridng to the priority.

SUPPOSE there are 3 tasks in call stack

console.log("1")
setTimeOut. console.log("2") after 0 seconds
console.log("3")

It seems that the second task would get executed first but actually , not
It has timeout of 0 sec, it does not mean it would get executed immediately
It still has to be saved in the callback, then queue, then back to stack. It takes time in which
both 1 & 3 would have been printed 

THERE are many APIs. One of them is Fetch()  -It contains PROMISE which basically informs whether if the task has been executed or not. It says "Just inform me" in both cases


