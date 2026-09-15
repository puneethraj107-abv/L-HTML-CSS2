3 components of a backend system
1. Server
2. Application - logic
3. Database

Q. what is Node.js?
A- Node.js is an asynchronous event driven javascript runtime, it is designed to build scalable network applications.

Note: asynchronous event driven - means node doesn't have to do things sequentially

Node Read Eval Print Loop(REPL)
-is a computer environment where user inputs are read and evaluated, and the results are returned to the user.

<!-- 12/09/2026 -->
// var generateName = require('sillyname'); // used in case for "commonjs" configuration.
// import { generateName } from 'sillyname'; // used in case for "module" configuration.

<!-- 15/09/2026 -->
Creating a Express server
1. create a directory
2. create index.js file
3. initialize NPM
4. install Express package
5. write server application in index.js
6. start server

That command is used to **check whether a particular network port is currently being used/listened to by a program**.

You have:

```bash
netstat -ano | findstr "LISTENING"
```

 1. `netstat -ano`

`netstat` shows information about your computer's network connections and ports.

The options mean:

* `-a` → Show **all** connections and listening ports
* `-n` → Show addresses and ports as **numbers** instead of resolving names
* `-o` → Show the **PID** (Process ID) of the program using the connection

So you'll get something similar to:

```text
TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    12345
```

Here:

```text
3000     → port number
LISTENING → a program is waiting for connections
12345    → PID of that program
```

 2. `|`

This is called a **pipe**.

It takes the output from the command on the left and sends it to the command on the right.

So:

```bash
netstat -ano | findstr "LISTENING"
```

means:

> "Show me the network information, but only keep the lines containing `LISTENING`."

 3. `findstr "LISTENING"`

`findstr` searches text in the output.

So it filters out everything except connections whose state is:

```text
LISTENING
```

Q. Why would you use this with your Express server?

Your Express app is running on:

```js
const port = 3000;
```

So you could check specifically whether **port 3000** is being used:

```bash
netstat -ano | findstr ":3000"
```

If your Express server is running, you might see:

```text
TCP    0.0.0.0:3000    0.0.0.0:0    LISTENING    12345
```

That tells you:

> **Something is listening on port 3000.**

This is particularly useful when you get an error like:

```text
EADDRINUSE
```

which means **"address already in use"** — usually another program/server is already using that port.
