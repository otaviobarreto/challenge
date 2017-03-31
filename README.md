
Prerequisites
----

You'll need to install [nodejs](https://nodejs.org/en/) to complete the task.


----

The program in this challenge is a very simple messaging system. There is a database of messages, and users can read their messages one at a time.

To run the program there are 2 inputs you need:

- a username
- a hash of the last message you read (so you can read the next one)

Run the program like this:

```
node index.js <username> <hash>
```

To get the correct solution you must use the following inputs:

```
node index.js bigbird88 60b725f10c9c85c70d97880dfe8191b3
```

Important 

Task: fix the bugs
----

But wait! There are some bugs in the program that you'll need to fix first. Once you've fixed them the program will display some output like this:

```
from: @gordon
---
need ur help batman, come quick
```

There are also comments in the code that you'll need to read to understand what it's trying to do. Then look closely at the code and make sure it is doing what the comments say.


