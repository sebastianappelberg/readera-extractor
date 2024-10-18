# A Philosophy of Software Design - John Osterhout

Finished at: 2023-08-13
Last read at: 2023-08-13

## Comments

Page: 12

*This means that the greatest limitation in writing software is our ability to understand the systems we are creating. As a program evolves and acquires more features, it becomes complicated, with subtle dependencies between its components. Over time, complexity accumulates, and it becomes harder and harder for programmers to keep all of the relevant factors in their minds as they modify the system. This slows down development and leads to bugs, which slow development even more and add to its cost. Complexity increases inevitably over the life of any program. The larger the program, and the more people that work on it, the more difficult it is to manage complexity.*

**We will understand the moving parts of a system less and less I think. We're moving further and further away from the hardware. AI will write programs for us where the code is opaque. We may even come to the point where code is no longer deterministic. We will be working in areas that are so complex that it's in fact impossible to get deterministic behavior. We will of course wrap such things in a layer of determination. 

---
Page: 14

*Incremental development means that software design is never done. Design happens continuously over the life of a system: developers should always be thinking about design issues. Incremental development also means continuous redesign. The initial design for a system or component is almost never the best one; experience inevitably shows better ways to do things. As a software developer, you should always be on the lookout for opportunities to improve the design of the system you are working on, and you should plan on spending some fraction of your time on design improvements.*

**Software design is an infinite game, not a finite one. That fact alone tells you what kind of mindset is the most useful to have. 

---
Page: 15

*Beautiful designs reflect a balance between competing ideas and approaches.*

**The key to creativity and innovation lies in the tension of opposing viewpoints. 

---
Page: 17

*For the purposes of this book, I define “complexity” in a practical way.
Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system. Complexity can take many forms. For example, it might be hard to understand how a piece of code works; it might take a lot of effort to implement a small improvement, or it might not be clear which parts of the system must be modified to make the improvement; it might be difficult to fix one bug without introducing another. If a software system is hard to understand and modify, then it is complicated; if it is easy to understand and modify, then it is simple.*

**I like this behaviorist point of view on complexity. Complexity is defined by the interaction between you and the system. 

---
Page: 18

*The overall complexity of a system (C) is determined by the complexity of each part p (cp) weighted by the fraction of time developers spend working on that part (tp). Isolating complexity in a place where it will never be seen is almost as good as eliminating the complexity entirely.*

**Using this formula makes it easy to determine what parts of system needs to be fixed first. Simply sort it by complexity. 

---
Page: 19

*One of the goals of good design is to reduce the amount of code that is affected by each design decision, so design changes don’t require very many code modifications.*

**What is this property called? Is it that change amplification is low?

---
Page: 19

*Cognitive load: The second symptom of complexity is cognitive load, which refers to how much a developer needs to know in order to complete a task.*

**The whole point of modularity is to divide and conquer complexity in a way that let's each module be reasoned about in isolation. Of course the dependencies between modules also has to be considered.

---
Page: 20

*The third symptom of complexity is that it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully.*

**Everything that's implicit in a codebase is like this. 

---
Page: 21

*One of the most important goals of good design is for a system to be obvious.
This is the opposite of high cognitive load and unknown unknowns. In an obvious system, a developer can quickly understand how the existing code works and what is required to make a change. An obvious system is one where a developer can make a quick guess about what to do, without thinking very hard, and yet be confident that the guess is correct.*

**This is a good proxy for ease of use and simplicity. 

---
Page: 21

*For the purposes of this book, a dependency exists when a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed.*

**For something to be truly decoupled you need to be able to change it on complete isolation. I guess there are degrees of coupling and that you can limit the area that is coupled so you achieve near true decoupling. 

---
Page: 21

*However, one of the goals of software design is to reduce the number of dependencies and to make the dependencies that remain as simple and obvious as possible.*

**It's like the links in a train, where the coupling exists it's very explicit. 

---
Page: 23

*The incremental nature of complexity makes it hard to control. It’s easy to convince yourself that a little bit of complexity introduced by your current change is no big deal. However, if every developer takes this approach for every change, complexity accumulates rapidly. Once complexity has accumulated, it is hard to eliminate, since fixing a single dependency or obscurity will not, by itself, make a big difference. In order to slow the growth of complexity, you must adopt a “zero tolerance” philosophy, as discussed in Chapter 3.*

**Once you feel the complexity the disease has already spread throughout. Does it make sense to incrementally reduce complexity? Is it enough to solve it when you're in a bad spot?

---
Page: 23

*Complexity comes from an accumulation of dependencies and obscurities. As complexity increases, it leads to change amplification, a high cognitive load, and unknown unknowns. As a result, it takes more code modifications to implement each new feature. In addition, developers spend more time acquiring enough information to make the change safely and, in the worst case, they can’t even find all the information they need. The bottom line is that complexity makes it difficult and risky to modify an existing code base.*

**Complexity is the key factor in determining speed and stability.

---
Page: 26

*Some of the investments will be proactive. For example, it’s worth taking a little extra time to find a simple design for each new class; rather than implementing the first idea that comes to mind, try a couple of alternative designs and pick the cleanest one. Try to imagine a few ways in which the system might need to be changed in the future and make sure that will be easy with your design. Writing good documentation is another example of a proactive investment.
Other investments will be reactive. No matter how much you invest up front, there will inevitably be mistakes in your design decisions. Over time, these mistakes will become obvious. When you discover a design problem, don’t just ignore it or patch around it; take a little extra time to fix it. If you program strategically, you will continually make small improvements to the system design. This is the opposite of tactical programming, where you are continually adding small bits of complexity that cause problems in the future.*

**It's about playing the infinite game. There's going to be an infinite amount of change to the system, how does that change the relationship we have with it? 

---
Page: 26

*Thus, the best approach is to make lots of small investments on a continual basis. I suggest spending about 10– 20% of your total development time on investments. This amount is small enough that it won’t impact your schedules significantly, but large enough to produce significant benefits over time.*

**Seems like a good guideline. 

---
Page: 29

*The most effective approach is one where every engineer makes continuous small investments in good design.*

**How does one facilitate this? Firstly I would try to find out which parts of the system have the most complexity and then I'd try to make a dent in the top ones until something else overtakes them in terms of complexity. 

---
Page: 30

*Unfortunately, this ideal is not achievable. Modules must work together by calling each others’s functions or methods. As a result, modules must know something about each other. There will be dependencies between the modules: if one module changes, other modules may need to change to match. For example, the arguments for a method create a dependency between the method and any code that invokes the method. If the required arguments change, all invocations of the method must be modified to conform to the new signature. Dependencies can take many other forms, and they can be quite subtle. The goal of modular design is to minimize the dependencies between modules.*

**To minimize the dependencies between modules requires a good overview of your current dependencies. Very well facilitated by a dependency matrix. Though one could go deeper than that in order to visualize second order dependencies.

---
Page: 31

*For the purposes of this book, a module is any unit of code that has an interface and an implementation. Each class in an object-oriented programming language is a module. Methods within a class, or functions in a language that isn’t object-oriented, can also be thought of as modules: each of these has an interface and an implementation, and modular design techniques can be applied to them. Higher-level subsystems and services are also modules; their interfaces may take different forms, such as kernel calls or HTTP requests. Much of the discussion about modular design in this book focuses on designing classes, but the techniques and concepts apply to other kinds of modules as well.*

**It's modules all the way down.

---
Page: 32

*In general, if a developer needs to know a particular piece of information in order to use a module, then that information is part of the module’s interface. The informal aspects of an interface can only be described using comments, and the programming language cannot ensure that the description is complete or accurate1. For most interfaces the informal aspects are larger and more complex than the formal aspects.
One of the benefits of a clearly specified interface is that it indicates exactly what developers need to know in order to use the associated module. This helps to eliminate the “unknown unknowns” problem*

**What techniques can be used to always be explicit about the informal interface? Checklists? 

---
Page: 32

*The term abstraction is closely related to the idea of modular design. An abstraction is a simplified view of an entity, which omits unimportant details. Abstractions are useful because they make it easier for us to think about and manipulate complex things.*

**I just heard Dave Snowden refer to all art as abstractions that let's us view things from a different, much richer, perspective. 

---
Page: 32

*An abstraction can go wrong in two ways. First, it can include details that are not really important; when this happens, it makes the abstraction more complicated than necessary, which increases the cognitive load on developers using the abstraction. The second error is when an abstraction omits details that really are important. This results in obscurity: developers looking only at the abstraction will not have all the information they need to use the abstraction correctly.*

**Ask yourself what details are important and make sure that they are not hidden and that all unimportant details are. It's a balancing act.

---
Page: 35

*Another example of a deep module is the garbage collector in a language such as Go or Java. This module has no interface at all; it works invisibly behind the scenes to reclaim unused memory. Adding garbage collection to a system actually shrinks its overall interface, since it eliminates the interface for freeing objects. The implementation of a garbage collector is quite complex, but that complexity is hidden from programmers using the language.*

**Removing complexity completely is the best choice if it's available.

---
Page: 37

*Classitis may result in classes that are individually simple, but it increases the complexity of the overall system. Small classes don’t contribute much functionality, so there have to be a lot of them, each with its own interface. These interfaces accumulate to create tremendous complexity at the system level. Small classes also result in a verbose programming style, due to the boilerplate required for each class.*

**Is the Porto pattern promoting classitis? 

---
Page: 38

*Providing choice is good, but interfaces should be designed to make the common case as simple as possible*

**Growing pains in an abstraction is felt when the use of the interface strays more and more from the initial common case.

---
Page: 41

*Information leakage is one of the most important red flags in software design. One of the best skills you can learn as a software designer is a high level of sensitivity to information leakage. If you encounter information leakage between classes, ask yourself “How can I reorganize these classes so that this particular piece of knowledge only affects a single class?” If the affected classes are relatively small and closely tied to the leaked information, it may make sense to merge them into a single class. Another possible approach is to pull the information out of all of the affected classes and create a new class that encapsulates just that information. However, this approach will be effective only if you can find a simple interface that abstracts away from the details; if the new class exposes most of the knowledge through its interface, then it won’t provide much value (you’ve simply replaced back-door leakage with leakage through an interface).*

**Be absolutely ruthless when scrutinizing what modules actually expose to each other. Information hiding won't help when there are lots of dependencies, even if the interface is simple. An interface that has lots of consumers should itself be as stable as possible, otherwise you'll need to change lots of consumers lots of times. 

---
Page: 42

*When designing modules, focus on the knowledge that’s needed to perform each task, not the order in which tasks occur.*

**The way that I'm conceptualizing the new transaction flow suffers a bit from this. 

---
Page: 42

*In temporal decomposition, execution order is reflected in the code structure:
operations that happen at different times are in different methods or classes. If the same knowledge is used at different points in execution, it gets encoded in multiple places, resulting in information leakage.*

**This is tricky to detect when the information that both modules have in common is something abstract like untold business rules. 

---
Page: 43

*This approach also created extra complexity for callers, who had to invoke two methods in different classes, in a particular order, to receive a request.*

**How should one think about this when dealing with asynchronous flows?

---
Page: 46

*Try to design the private methods within a class so that each method encapsulates some information or capability and hides it from the rest of the class. In addition, try to minimize the number of places where each instance variable is used. Some variables may need to be accessed widely across the class, but others may be needed in only a few places; if you can reduce the number of places where a variable is used, you will eliminate dependencies within the class and reduce its complexity.*

**Only when you have something to hide from the class itself does it make sense to create modules within the class.

---
Page: 47

*When decomposing a system into modules, try not to be influenced by the order in which operations will occur at runtime; that will lead you down the path of temporal decomposition, which will result in information leakage and shallow modules. Instead, think about the different pieces of knowledge that are needed to carry out the tasks of your application, and design each module to encapsulate one or a few of those pieces of knowledge. This will produce a clean and simple design with deep modules.*

**A more data oriented way of thinking instead of process. It's more mathematical in a sense.

---
Page: 50

*The students probably thought that it would be easier to implement the user interface if the methods of the text class corresponded to the features visible to users. In reality, however, this specialization provided little benefit for the user interface code, and it created a high cognitive load for developers working on either the user interface or the text class. The text class ended up with a large number of shallow methods, each of which was only suitable for one user interface operation. Many of the methods, such as delete, were only invoked in a single place. As a result, a developer working on the user interface had to learn about a large number of methods for the text class.*

**This is exactly the problem that we have with the Transaction Repository. 

---
Page: 52

*The general-purpose interface also reduces cognitive load: a developer working on the user interface only needs to learn a few simple methods, which can be reused for a variety of purposes.*

**Strive for the least amount of composable primitives that will allow your interface to be complete and at the same time small. 

---
Page: 53

*One of the most important elements of software design is determining who needs to know what, and when.
When the details are important, it is better to make them explicit and as obvious as possible, such as the revised implementation of the backspace operation.
Hiding this information behind an interface just creates obscurity.*

**How does one determine this? It's all about use case and purpose of each party in the interaction. What does the caller know? What do they want to do? What do they need to know to do that?

---
Page: 53

*In how many situations will this method be used? If a method is designed for one particular use, such as the backspace method, that is a red flag that it may be too special-purpose. See if you can replace several special-purpose methods with a single general-purpose method.*

**We should have a general purpose rule for our repositories. No methods that are specific to a task's needs.

---
Page: 53

*Is this API easy to use for my current needs? This question can help you to determine when you have gone too far in making an API simple and general-purpose. If you have to write a lot of additional code to use a class for your current purpose, that’s a red flag that the interface doesn’t provide the right functionality.*

**This is what I'm struggling with right now for the API of the transaction service. 

---
Page: 56

*A pass-through method is one that does nothing except pass its arguments to another method, usually with the same API as the pass-through method. This typically indicates that there is not a clean division of responsibility between the classes.*

**We had this issue with our controllers in the beginning. All they did was call the actions. Now they validate the input and transform the output.

---
Page: 57

*the interface to a piece of functionality should be in the same class that implements the functionality. When you see pass-through methods from one class to another, consider the two classes and ask yourself “Exactly which features and abstractions is each of these classes responsible for?” You will probably notice that there is an overlap in responsibility between the classes.*

**I think this red flag is a bit more subtle than the size of the interface or the number of dependencies. Checking for pass-through methods is a good heuristic.

---
Page: 60

*A character-oriented interface encapsulates the complexity of line splitting and joining inside the text class, which makes the text class deeper and simplifies higher level code that uses the class. With this approach, the text API is quite different from the line-oriented storage mechanism; the difference represents valuable functionality provided by the class.*

**Ask yourself, what added value does my implementation have? What complexities are hidden from the user of the interface? 

---
Page: 61

*The solution I use most often is to introduce a context object as in Figure 7.2(d). A context stores all of the application’s global state (anything that would otherwise be a pass-through variable or global variable). Most applications have multiple variables in their global state, representing things such as configuration options, shared subsystems, and performance counters. There is one context object per instance of the system. The context allows multiple instances of the system to coexist in a single process, each with its own context.*

**This is highly used in front-end frameworks, like React. The reason why is that it has a lot of deeply nested components and passing through variables all the way down is like treading a thread through them all and coupling them in an annoying way. 

---
Page: 63

*Contexts are far from an ideal solution. The variables stored in a context have most of the disadvantages of global variables; for example, it may not be obvious why a particular variable is present, or where it is used. Without discipline, a context can turn into a huge grab-bag of data that creates nonobvious dependencies throughout the system. Contexts may also create thread-safety issues; the best way to avoid problems is for variables in a context to be immutable. Unfortunately, I haven’t found a better solution than contexts.*

**There is another option, you could make the shared variable a constructor argument and then wire up all dependencies at the top level. You have to pass it multiple times but it's at the same level so it might be more obvious.

---
Page: 63

*Each piece of design infrastructure added to a system, such as an interface, argument, function, class, or definition, adds complexity, since developers must learn about this element. In order for an element to provide a net gain against complexity, it must eliminate some complexity that would be present in the absence of the design element. Otherwise, you are better off implementing the system without that particular element. For example, a class can reduce complexity by encapsulating functionality so that users of the class needn’t be aware of it.
The “different layer, different abstraction” rule is just an application of this idea: if different layers have the same abstraction, such as pass-through methods or decorators, then there’s a good chance that they haven’t provided enough benefit to compensate for the additional infrastructure they represent. Similarly, pass-through arguments require each of several methods to be aware of their existence (which adds to complexity) without contributing additional functionality.*

**Each and every single module of a system should be able to argue for its own existence. It's almost like they all need at least one USP. If they don't have it then consider removing or merging them with another module.

---
Page: 64

*Another way of expressing this idea is that it is more important for a module to have a simple interface than a simple implementation.
As a developer, it’s tempting to behave in the opposite fashion: solve the easy problems and punt the hard ones to someone else. If a condition arises that you’re not certain how to deal with, the easiest thing is to throw an exception and let the caller handle it. If you are not certain what policy to implement, you can define a few configuration parameters to control the policy and leave it up to the system administrator to figure out the best values for them.
Approaches like these will make your life easier in the short term, but they amplify complexity, so that many people must deal with a problem, rather than just one person. For example, if a class throws an exception, every caller of the class will have to deal with it. If a class exports configuration parameters, every system administrator in every installation will have to learn how to set them.*

**The total amount of human interaction with a piece of complexity matters a lot. If something is really complex but it only has to be dealt with by one person then that adds less total complexity then if a lot of people have to deal with something that's of medium complexity. If everyone considers the total complexity added, then people will be making better long-term decisions for the whole.

---
Page: 66

*Thus, you should avoid configuration parameters as much as possible. Before exporting a configuration parameter, ask yourself: “will users (or higher-level modules) be able to determine a better value than we can determine here?” When you do create configuration parameters, see if you can compute reasonable defaults automatically, so users will only need to provide values under exceptional conditions. Ideally, each module should solve a problem completely;
configuration parameters result in an incomplete solution, which adds to system complexity.*

**I have been pretty relaxed with my use of configuration parameters. It's like I've been thinking of consumers of the module just an extension of the same module.

---
Page: 68

*When deciding whether to combine or separate, the goal is to reduce the complexity of the system as a whole and improve its modularity.*

**When dividing the system into modules, and modules into smaller modules, always keep this in mind.

---
Page: 73

*In general, the lower layers of a system tend to be more general-purpose and the upper layers more special-purpose. For example, the topmost layer of an application consists of features totally specific to that application. The way to separate special-purpose code from general-purpose code is to pull the special-purpose code upwards, into the higher layers, leaving the lower layers general-purpose. When you encounter a class that includes both general-purpose and special-purpose features for the same abstraction, see if the class can be separated into two classes, one containing the general-purpose features, and the other layered on top of it to provide the special-purpose features.*

**Having multiple layers in your code gives you a nice way to separate responsibilities, but it also gives you a way of creating a gradient core where the further you go outwards the more specialized the functionality becomes. 

---
Page: 74

*This red flag occurs when a general-purpose mechanism also contains code specialized for a particular use of that mechanism. This makes the mechanism more complicated and creates information leakage between the mechanism and the particular use case: future modifications to the use case are likely to require changes to the underlying mechanism as well.*

**Lego pieces are more flexible than a construction made from those pieces. 

---
Page: 80

*When designing methods, the most important goal is to provide clean and simple abstractions. Each method should do one thing and do it completely.
The method should have a clean and simple interface, so that users don’t need to have much information in their heads in order to use it correctly. The method should be deep: its interface should be much simpler than its implementation. If a method has all of these properties, then it probably doesn’t matter whether it is long or not.*

**This is heresy to dogmatic clean coders.

---
Page: 81

*It should be possible to understand each method independently. If you can’t understand the implementation of one method without also understanding the implementation of another, that’s a red flag. This red flag can occur in other contexts as well: if two pieces of code are physically separated, but each can only be understood by looking at the other, that is a red flag.*

**When I need to understand the implementation of a su bmethod to understand the rest of the code in the method I'm looking at, start redesigning. 

---
Page: 81

*The decision to split or join modules should be based on complexity. Pick the The decision to split or join modules should be based on complexity. Pick the structure that results in the best information hiding, the fewest dependencies, and the deepest interfaces.*

**Every part of your system that has an interface and an implementation is a module. The same design rules apply to all of them, fractally. 

---
Page: 84

*Furthermore, exception handling code creates opportunities for more exceptions.*

**This is usually the most annoying part. Your error handling needs error handling. 

---
Page: 87

*The exceptions thrown by a class are part of its interface; classes with lots of exceptions have complex interfaces, and they are shallower than classes with fewer exceptions. An exception is a particularly complex element of an interface.
It can propagate up through several stack levels before being caught, so it affects not just the method’s caller, but potentially also higher-level callers (and their interfaces).*

**It also adds a whole lot of obscurity, since it's not as obvious from the method's signature.

---
Page: 87

*The best way to eliminate exception handling complexity is to define your APIs so that there are no exceptions to handle: define errors out of existence. This may seem sacrilegious, but it is very effective in practice.*

**Idempotency can help out here. 

---
Page: 89

*When I argue for defining errors out of existence, people sometimes counter that throwing errors will catch bugs; if errors are defined out of existence, won’t that result in buggier software? Perhaps this is why the Java developers decided that substring should throw exceptions. The error-ful approach may catch some bugs, but it also increases complexity, which results in other bugs. In the error-ful approach, developers must write additional code to avoid or ignore the errors, and this increases the likelihood of bugs; or, they may forget to write the additional code, in which case unexpected errors may be thrown at runtime. In contrast, defining errors out of existence simplifies APIs and it reduces the amount of code that must be written.
Overall, the best way to reduce bugs is to make software simpler.*

**Would be liberal in what you accept and conservative in what you process be aligned with this? I'd say so, if we can go ahead with an input we should even though it has extra fields.

---
Page: 90

*Exception masking doesn’t work in all situations, but it is a powerful tool in the situations where it works. It results in deeper classes, since it reduces the class’s interface (fewer exceptions for users to be aware of) and adds functionality in the form of the code that masks the exception. Exception masking is an example of pulling complexity downward.*

**It's also possible to pull exception handling, and other complexity, into infrastructure code. Step function retries is an example of that. Would that count or is that actually a bad way of masking complexity? 

---
Page: 94

*One way of thinking about exception aggregation is that it replaces several special-purpose mechanisms, each tailored for a particular situation, with a single general-purpose mechanism that can handle multiple situations. This provides another illustration of the benefits of general-purpose mechanisms.*

**Exceptions should only be dealt with at lower levels if they can be retried out of existence. 

---
Page: 95

*Aborting with an error message is also appropriate if an application encounters an internal error such as an inconsistent data structure. Conditions like this probably indicate bugs in the program.
Whether or not it is acceptable to crash on a particular error depends on the application. For a replicated storage system, it isn’t appropriate to abort on an I/O error. Instead, the system must use replicated data to recover any information that was lost. The recovery mechanisms will add considerable complexity to the program, but recovering lost data is an essential part of the value the system provides to its users.*

**If there is no way for the application to proceed then crash it.

---
Page: 96

*For the same reason that it makes sense to define errors out of existence, it also makes sense to define other special cases out of existence. Special cases can result in code that is riddled with if statements, which make the code hard to understand and lead to bugs. Thus, special cases should be eliminated wherever possible. The best way to do this is by designing the normal case in a way that automatically handles the special cases without any extra code.*

**Every case adds a branch to the complexity tree. In some sense it feels weird the the systems we create aim to be as simple as possible whereas life seems to be aiming for increased complexity. 

---
Page: 97

*With exceptions, as with many other areas in software design, you must determine what is important and what is not important. Things that are not important should be hidden, and the more of them the better. But when something is important, it must be exposed.*

**One must make the code obvious and not obscure.

---
Page: 97

*Special cases of any form make code harder to understand and increase the likelihood of bugs. This chapter focused on exceptions, which are one of the most significant sources of special-case code, and discussed how to reduce the number of places where exceptions must be handled. The best way to do this is by redefining semantics to eliminate error conditions. For exceptions that can’t be defined away, you should look for opportunities to mask them at a low level, so their impact is limited, or aggregate several special-case handlers into a single more generic handler. Together, these techniques can have a significant impact on overall system complexity.*

**Should turn this into a succinct principle to guide system design. 

---
Page: 100

*I have noticed that the design-it-twice principle is sometimes hard for really smart people to embrace. When they are growing up, smart people discover that their first quick idea about any problem is sufficient for a good grade; there is no need to consider a second or third possibility. This makes it easy to develop bad work habits. However, as these people get older, they get promoted into environments with harder and harder problems. Eventually, everyone reaches a point where your first ideas are no longer good enough; if you want to get really great results, you have to consider a second possibility, or perhaps a third, no matter how smart you are. The design of large software systems falls in this category: no-one is good enough to get it right with their first try.
Unfortunately, I often see smart people who insist on implementing the first idea that comes to mind, and this causes them to underperform their true potential (it also makes them frustrating to work with). Perhaps they subconsciously believe that “smart people get it right the first time,” so if they try multiple designs it would mean they are not smart after all. This is not the case.
It isn’t that you aren’t smart; it’s that the problems are really hard! Furthermore, that’s a good thing: it’s much more fun to work on a difficult problem where you have to think carefully, rather than an easy problem where you don’t have to think at all.*

**This is true for me, I have a hard time seeing other options even if I try.

---
Page: 98

*Try to pick approaches that are radically different from each other; you’ll learn more that way. Even if you are certain that there is only one reasonable approach, consider a second design anyway, no matter how bad you think it will be. It will be instructive to think about the weaknesses of that design and contrast them with the features of other designs.
After you have roughed out the designs for the alternatives, make a list of the pros and cons of each one. The most important consideration for an interface is ease of use for higher level software.*

**Don't get attached to anything and don't discard designs right away, let them play out and see what they can teach you about the shape of the design space.

---
Page: 99

*Once you have compared alternative designs, you will be in a better position to identify the best design. The best choice may be one of the alternatives, or you may discover that you can combine features of multiple alternatives into a new design that is better than any of the original choices.*

**The nice thing about design is that it's easy to judge whether a design is good or not. The tricky part is coming up with it, and that's where you need to suppress your own arrogance. 

---
Page: 100

*The design-it-twice approach not only improves your designs, but it also improves your design skills. The process of devising and comparing multiple approaches will teach you about the factors that make designs better or worse.
Over time, this will make it easier for you to rule out bad designs and hone in on really great ones.*

**Apply it to every design choice in the system.

---
Page: 101

*When developers don’t write comments, they usually justify their behavior with one or more of the following excuses:
“Good code is self-documenting.”
“I don’t have time to write comments.”
“Comments get out of date and become misleading.”
“The comments I have seen are all worthless; why bother?” In the sections below I will address each of these excuses in turn.*

**I'm guilty of all of these.

---
Page: 101

*Comments are essential to help developers understand a system and work efficiently, but the role of comments goes beyond this. Documentation also plays an important role in abstraction; without comments, you can’t hide complexity. Finally, the process of writing comments, if done correctly, will actually improve a system’s design. Conversely, a good software design loses much of its value if it is poorly documented.*

**I never even thought of comments as being part of the design. 

---
Page: 102

*For example, only a small part of a class’s interface, such as the signatures of its methods, can be specified formally in the code. The informal aspects of an interface, such as a high-level description of what each method does or the meaning of its result, can only be described in comments. There are many other examples of things that can’t be described in the code, such as the rationale for a particular design decision, or the conditions under which it makes sense to call a particular method.*

**The intended behavior of a module cannot fully be understood only through its API signature. To complete the interface one needs additional information. 

---
Page: 102

*Some developers argue that if others want to know what a method does, they should just read the code of the method: this will be more accurate than any comment. It’s possible that a reader could deduce the abstract interface of the method by reading its code, but it would be time-consuming and painful. In addition, if you write code with the expectation that users will read method implementations, you will try to make each method as short as possible, so that it’s easy to read. If the method does anything nontrivial, you will break it up into several smaller methods. This will result in a large number of shallow methods.
Furthermore, it doesn’t really make the code easier to read: in order to understand the behavior of the top-level method, readers will probably need to understand the behaviors of the nested methods. For large systems it isn’t practical for users to read the code to learn the behavior.*

**At what level does it make sense to document? At every level?  To read should only have to be done at the level of the module that you're using, not its dependencies. 

---
Page: 103

*Comments allow us to capture the additional information that callers need, thereby completing the simplified view while hiding implementation details. It’s also important that comments are written in a human language such as English;
this makes them less precise than code, but it provides more expressive power, so we can create simple, intuitive descriptions. If you want to use abstractions to hide complexity, comments are essential.*

**I'll think about treating comments as a first-class component in software design. 

---
Page: 103

*Good comments make a huge difference in the maintainability of software, so the effort spent on them will pay for itself quickly.*

**One thing that immediately comes to mind is adding comments about how not to use a module and more importantly how not to modify it. A clear description of what's important to think about when modifying it.

---
Page: 104

*The overall idea behind comments is to capture information that was in the mind of the designer but couldn’t be represented in the code. This information ranges from low-level details, such as a hardware quirk that motivates a particularly tricky piece of code, up to high-level concepts such as the rationale for a class. When other developers come along later to make modifications, the comments will allow them to work more quickly and accurately. Without documentation, future developers will have to rederive or guess at the developer’s original knowledge; this will take additional time, and there is a risk of bugs if the new developer misunderstands the original designer’s intentions. Comments are valuable even when the original designer is the one making the changes: if it has been more than a few weeks since you last worked in a piece of code, you will have forgotten many of the details of the original design.*

**It is a way to protect the conceptual integrity of your module. The design rationale and intent are important factors in understanding the design space for a module. 

---
Page: 105

*Change amplification: a seemingly simple change requires code modifications in many places.
Cognitive load: in order to make a change, the developer must accumulate a large amount of information.
Unknown unknowns: it is unclear what code needs to be modified, or what information must be considered in order to make those modifications.*

**Having these in mind as metrics for how good your design is will make you better.

---
Page: 106

*The reason for writing comments is that statements in a programming language can’t capture all of the important information that was in the mind of the developer when the code was written. Comments record this information so that developers who come along later can easily understand and modify the code. The guiding principle for comments is that comments should describe things that aren’t obvious from the code.*

**Code can only go so far in terms of descriptiveness lest it turn into a compilation error. English is very forgiving in comparison. 

---
Page: 106

*There are many things that aren’t obvious from the code. Sometimes it’s low-level details that aren’t obvious. For example, when a pair of indices describe a range, it isn’t obvious whether the elements given by the indices are inside the range or out. Sometimes it’s not clear why code is needed, or why it was implemented in a particular way. Sometimes there are rules the developer followed, such as “always invoke a before b.” You might be able to guess at a rule by looking at all of the code, but this is painful and error-prone; a comment can make the rule explicit and clear.*

**How do you avoid readership blindness while writing? It's a special kind of skill to be able to put yourself in the shoes of the reader. What will they think when they read? What important things will they miss? 

---
Page: 106

*Developers should be able to understand the abstraction provided by a module without reading any code other than its externally visible declarations.*

**This is a high bar in term of level of understandability from just an interface. I wonder how this differs between language paradigms. Is the function signature more telling in functional programming languages?

---
Page: 107

*Conventions serve two purposes. First, they ensure consistency, which makes comments easier to read and understand. Second, they help to ensure that you actually write comments. If you don’t have a clear idea what you are going to comment and how, it’s easy to end up writing no comments at all.*

**Adopt the convention with least friction. 

---
Page: 107

*The most important comments are those in the first two categories. Every class should have an interface comment, every class variable should have a comment, and every method should have an interface comment. Occasionally, the declaration for a variable or method is so obvious that there is nothing useful to add in a comment (getters and setters sometimes fall in this category), but this is rare; it is easier to comment everything rather than spend energy worrying about whether a comment is needed. Implementation comments are often unnecessary (see Section 13.6 below). Cross-module comments are the most rare of all and they are problematic to write, but when they are needed they are quite important;*

**What would our system feel like if we had comments for everything? What would it feel like to add new things that are in need of comments? 

---
Page: 109

*After you have written a comment, ask yourself the following question: could someone who has never seen the code write the comment just by looking at the code next to the comment? If the answer is yes, as in the examples above, then the comment doesn’t make the code any easier to understand. Comments like these are why some people think that comments are worthless.*

**It'll be a little bit of a hurdle in the beginning to come up with comments that have added value, but once you get in the habit of doing it it'll become automatic. Your code will benefit from it in terms of readability. 

---
Page: 109

*These comments just take the words from the method or variable name, perhaps add a few words from argument names and types, and form them into a sentence.
For example, the only thing in the second comment that isn’t in the code is the word “to”! Once again, these comments could be written just by looking at the declarations, without any understanding the methods of variables; as a result, they have no value.*

**If you're committing to commenting then make sure that it has value. 

---
Page: 110

*If the information in a comment is already obvious from the code next to the comment, then the comment isn’t helpful. One example of this is when the comment uses the same words that make up the name of the thing it is describing.*

**A nice complement to principles and practices would be anti-practices and principles. 

---
Page: 110

*Comments augment the code by providing information at a different level of detail. Some comments provide information at a lower, more detailed, level than the code; these comments add precision by clarifying the exact meaning of the code. Other comments provide information at a higher, more abstract, level than the code; these comments offer intuition, such as the reasoning behind the code, or a simpler and more abstract way of thinking about the code. Comments at the same level as the code are likely to repeat the code.*

**Going up and down in levels of abstraction might help you understand your module better, perhaps prompting redesign. If it does that then it's already paying for itself.

---
Page: 111

*What are the units for this variable?
Are the boundary conditions inclusive or exclusive?
If a null value is permitted, what does it imply?
If a variable refers to a resource that must eventually be freed or closed, who is responsible for freeing or closing it?
Are there certain properties that are always true for the variable (invariants), such as “this list always contains at least one entry”?*

**What constraints are there in the input and the output? What side-effects are there if any? Are there any performance considerations? 

---
Page: 112

*When documenting a variable, think nouns, not verbs. In other words, focus on what the variable represents, not how it is manipulated.*

**If you describe how it's manipulated you're more likely to create noisy documentation. 

---
Page: 114

*The original comment didn’t describe the overall intent of the code, so it’s hard for a reader to decide whether the code is behaving correctly.
Higher-level comments are more difficult to write than lower-level comments because you must think about the code in a different way. Ask yourself: What is this code trying to do? What is the simplest thing you can say that explains everything in the code? What is the most important thing about this code?*

**Capturing the perfect level of abstraction will require some practice.

---
Page: 114

*But, great software designers can also step back from the details and think about a system at a higher level. This means deciding which aspects of the system are most important, and being able to ignore the low-level details and think about the system only in terms of its most fundamental characteristics. This is the essence of abstraction (finding a simple way to think about a complex entity), and it’s also what you must do when writing higher-level comments. A good higher-level comment expresses one or a few simple ideas that provide a conceptual framework, such as “append to an existing RPC.” Given the framework, it becomes easy to see how specific code statements relate to the overall goal.*

**Abstraction is necessary to talk about anything complex. Fields build up intricate jargon for this very purpose.

---
Page: 115

*Code isn’t suitable for describing abstractions; it’s too low level and it includes implementation details that shouldn’t be visible in the abstraction. The only way to describe an abstraction is with comments. If you want code that presents good abstractions, you must document those abstractions with comments.*

**Why not start with describing the abstraction? 

---
Page: 115

*The first step in documenting abstractions is to separate interface comments from implementation comments. Interface comments provide information that someone needs to know in order to use a class or method; they define the abstraction. Implementation comments describe how a class or method works internally in order to implement the abstraction. It’s important to separate these two kinds of comments, so that users of an interface are not exposed to implementation details. Furthermore, these two forms had better be different. If interface comments must also describe the implementation, then the class or method is shallow. This means that the act of writing comments can provide clues about the quality of a design*

**Documentation is part of a module's interface, don't let implementation details sneak out through it. Leaking implementation details in any way breaks an abstraction and couples the consumer of the module to its internals.

---
Page: 122

*The main goal of implementation comments is to help readers understand what the code is doing (not how it does it).*

**And in some cases why.

---
Page: 124

*The biggest challenge with cross-module documentation is finding a place to put it where it will naturally be discovered by developers. Sometimes there is an obvious central place to put such documentation.*

**Think about the behavior of the developer, when he is doing X where will he look? Where does he need to look? What will he potentially miss?

---
Page: 126

*Then, in any piece of code that relates to one of these issues there is a short comment referring to the designNotes file:
// See "Zombies" in designNotes.
With this approach, there is only a single copy of the documentation and it is relatively easy for developers to find it when they need it. However, this has the disadvantage that the documentation is not near any of the pieces of code that depend on it, so it may be difficult to keep up-to-date as the system evolves.*

**For the particularly complex documentation requirements just try to make the best of the situation, and in all honesty it feels like you may need to tradeoff documentation consistency in some cases.

---
Page: 126

*When following the rule that comments should describe things that aren’t obvious from the code, “obvious” is from the perspective of someone reading your code for the first time (not you). When writing comments, try to put yourself in the mindset of the reader and ask yourself what are the key things he or she will need to know. If your code is undergoing review and a reviewer tells you that something is not obvious, don’t argue with them; if a reader thinks it’s not obvious, then it’s not obvious. Instead of arguing, try to understand what they found confusing and see if you can clarify that, either with better comments or better code.*

**As a code reviewer let the coder know what was confusing to you, what wasn't obvious? 

---
Page: 128

*Selecting names for variables, methods, and other entities is one of the most underrated aspects of software design. Good names are a form of documentation:
they make code easier to understand. They reduce the need for other documentation and make it easier to detect errors. Conversely, poor name choices increase the complexity of code and create ambiguities and misunderstandings that can result in bugs. Name choice is an example of the principle that complexity is incremental. Choosing a mediocre name for a particular variable, as opposed to the best possible name, probably won’t have much impact on the overall complexity of a system. However, software systems have thousands of variables; choosing good names for all of these will have a significant impact on complexity and manageability.*

**I think that everyone knows the benefits of this by now.

---
Page: 129

*Thus, you shouldn’t settle for names that are just “reasonably close”. Take a bit of extra time to choose great names, which are precise, unambiguous, and intuitive. The extra attention will pay for itself quickly, and over time you’ll learn to choose good names quickly.*

**It's a thing that you can always become better at.

---
Page: 129

*When choosing a name, the goal is to create an image in the mind of the reader about the nature of the thing being named. A good name conveys a lot of information about what the underlying entity is, and, just as important, what it is not. When considering a particular name, ask yourself: “If someone sees this name in isolation, without seeing its declaration, its documentation, or any code that uses the name, how closely will they be able to guess what the name refers to? Is there some other name that will paint a clearer picture?”*

**The more empathic you are the better you are able to understand how someone else will view your code. It's a skill that can be honed.

---
Page: 130

*Names are a form of abstraction: they provide a simplified way of thinking about a more complex underlying entity. Like other forms of abstraction, the best names are those that focus attention on what is most important about the underlying entity while omitting details that are less important.*

**Everything in the world is a form of abstraction. There are layer and layers of it, like folds they compress information, the more you compress the more leverage you have with each thought. The information becomes more potent.

---
Page: 131

*A variable named result was used in a method with no return value. This name has multiple problems. First, it creates the misleading impression that it will be the return value of the method. Second, it provides essentially no information about what it actually holds, except that it is some computed value. The name should provide information about what the result actually is, such as mergedLine or totalChars. In methods that do actually have return values, then using the name result is reasonable. This name is still a bit generic, but readers can look at the method documentation to see its meaning, and it’s helpful to know that the value will eventually become the return value.*

**When the information about what the result is isn't important then I think it's fine to use. It let's you think about it like a generic result. In tests it's useful, all you need to know is that you're going to assert the result.

---
Page: 132

*If you find it difficult to come up with a name for a particular variable that is precise, intuitive, and not too long, this is a red flag. It suggests that the variable may not have a clear definition or purpose. When this happens, consider alternative factorings. For example, perhaps you are trying to use a single variable to represent several things; if so, separating the representation into multiple variables may result in a simpler definition for each variable. The process of choosing good names can improve your design by identifying weaknesses.*

**A lot of small tricks and practices build up to a rich sense for good design and ability to simplify.

---
Page: 133

*Consistent naming reduces cognitive load in much the same way as reusing a common class: once the reader has seen the name in one context, they can reuse their knowledge and instantly make assumptions when they see the name in a different context.*

**Your readers are on a journey. What context do they have with them? Make use of that to paint the clearest picture possible.

---
Page: 133

*Consistency has three requirements: first, always use the common name for the given purpose; second, never use the common name for anything other than the given purpose; third, make sure that the purpose is narrow enough that all variables with the name have the same behavior.*

**It's okay to change convention but then I'd make sure to refactor every other name in the same go. Or add a temporary comment explaining the change. 

---
Page: 135

*Overall, I would argue that readability must be determined by readers, not writers. If you write code with short variable names and the people who read it find it easy to understand, then that’s fine. If you start getting complaints that your code is cryptic, then you should consider using longer names (a Web search for “go language short names” will identify several such complaints). Similarly, if I start getting complaints that long variable names make my code harder to read, then I’ll consider using shorter ones.*

**It's all about the context, who will read your code, what do they understand best, what does the rest of the codebase look like, etc.

---
Page: 135

*The greater the distance between a name’s declaration and its uses, the longer the name should be.*

**Ideally the name declarations are never too far away.

---
Page: 136

*Many developers put off writing documentation until the end of the development process, after coding and unit testing are complete. This is one of the surest ways to produce poor quality documentation. The best time to write comments is at the beginning of the process, as you write the code. Writing the comments first makes documentation part of the design process. Not only does this produce better documentation, but it also produces better designs and it makes the process of writing documentation more enjoyable.*

**You have to remember to refactor your documentation as you go. So kind of like TDD but for comments, CDD.

---
Page: 136

*Unfortunately, this approach has several negative consequences. First, delaying documentation often means that it never gets written at all. Once you start delaying, it’s easy to delay a bit more; after all, the code will be even more stable in a few more weeks. By the time the code has inarguably stabilized, there is a lot of it, which means the task of writing documentation has become huge and even less attractive. There’s never a convenient time to stop for a few days and fill in all of the missing comments, and it’s easy to rationalize that the best thing for the project is to move on and fix bugs or write the next new feature.
This will create even more undocumented code.*

**The exact same applies to tests.

---
Page: 137

*Even if you do have the self-discipline to go back and write the comments (and don’t fool yourself: you probably don’t), the comments won’t be very good.
By this time in the process, you have checked out mentally. In your mind, this piece of code is done; you are eager to move on to your next project. You know that writing comments is the right thing to do, but it’s no fun. You just want to get through it as quickly as possible. Thus, you make a quick pass over the code, adding just enough comments to look respectable. By now, it’s been a while since you designed the code, so your memories of the design process are becoming fuzzy. You look at the code as you are writing the comments, so the comments repeat the code. Even if you try to reconstruct the design ideas that aren’t obvious from the code, there will be things you don’t remember. Thus, the comments are missing some of the most important things they should describe.*

**I've felt this so many times, and I've diagnosed it as: comments are hard and annoying to write. The correct diagnosis is that I try to write them at the wrong time. 

---
Page: 138

*Comments provide the only way to fully capture abstractions, and good abstractions are fundamental to good system design. If you write comments describing the abstractions at the beginning, you can review and tune them before writing implementation code.
To write a good comment, you must identify the essence of a variable or piece of code: what are the most important aspects of this thing? It’s important to do this early in the design process; otherwise you are just hacking code.*

**Complexity management requires deep thinking, writing is a tool for thinking, comments is writing. 

---
Page: 138

*The comment that describes a method or variable should be simple and yet complete. If you find it difficult to write such a comment, that’s an indicator that there may be a problem with the design of the thing you are describing.*

**Anywhere where you find there's more cognitive load than usual, your alarm should ring. 

---
Page: 138

*You can compare a method’s interface comment with the implementation to get a sense of how deep the method is: if the interface comment must describe all the major features of the implementation, then the method is shallow.*

**What's a good length on average for comments?

---
Page: 142

*If you want to maintain a clean design for a system, you must take a strategic approach when modifying existing code. Ideally, when you have finished with each change, the system will have the structure it would have had if you had designed it from the start with that change in mind. To achieve this goal, you must resist the temptation to make a quick fix. Instead, think about whether the current system design is still the best one, in light of the desired change. If not, refactor the system so that you end up with the best possible design. With this approach, the system design improves with every modification.*

**If you don't change the design of the system that means it doesn't stay in sync with new knowledge about the world around it. Eventually there will such a big mismatch that the system no longer makes sense. I like this idea about striving the change the system so that it has the ideal design for every change.

---
Page: 141

*Unfortunately, when developers go into existing code to make changes such as bug fixes or new features, they don’t usually think strategically. A typical mindset is “what is the smallest possible change I can make that does what I need?” Sometimes developers justify this because they are not comfortable with the code being modified; they worry that larger changes carry a greater risk of introducing new bugs. However, this results in tactical programming. Each one of these minimal changes introduces a few special cases, dependencies, or other forms of complexity. As a result, the system design gets just a bit worse, and the problems accumulate with each step in the system’s evolution.*

**This is interesting, it puts an interesting nuance on what incremental and iterative should mean. It's not the fastest and hackiest way to do something. Each iteration and increment has a base level of quality it needs to be at, ideally it results in a neutral or positive change in terms of complexity. 

---
Page: 142

*Even if your particular change doesn’t require refactoring, you should still be on the lookout for design imperfections that you can fix while you’re in the code. Whenever you modify any code, try to find a way to improve the system design at least a little bit in the process. If you’re not making the design better, you are probably making it worse.*

**The boy scout rule. We should leave the place cleaner than it was when we got there. 

---
Page: 143

*The best way to ensure that comments get updated is to position them close to the code they describe, so developers will see them when they change the code. The farther a comment is from its associated code, the less likely it is that it will be updated properly. For example, the best place for a method’s interface comment is in the code file, right next to the body of the method. Any changes to the method will involve this code, so the developer is likely to see the interface comments and update them if needed.*

**It's a thing that needs to become a habit, otherwise the perceived pain of having to also think about comments is going to make you "forget" about updating them. Code reviews is an excellent tool for helping each other develop good habits.

---
Page: 144

*In general, the farther a comment is from the code it describes, the more abstract it should be (this reduces the likelihood that the comment will be invalidated by code changes).*

**A good heuristic to know what level of abstraction you should aim for.

---
Page: 143

*In addition, many IDEs will extract and present documentation to users, such as by displaying a method’s documentation when the method’s name is typed.
Given tools such as these, the documentation should be located in the place that is most convenient for developers working on the code.*

**Always keep the context of the user in mind when creating something. In this case part of the context is the IDE. 

---
Page: 144

*Instead, try to document each design decision exactly once. If there are multiple places in the code that are affected by a particular decision, don’t repeat the documentation at each of these points. Instead, find the most obvious single place to put the documentation. For example, suppose there is tricky behavior related to a variable, which affects several different places where the variable is used. You can document that behavior in the comment next to the variable’s declaration. This is a natural place that developers are likely to check if they’re having trouble understanding code that uses the variable.*

**Put yourself in their shoes and imagine that you're having a look at the code for the first time and now you need to do something with it, find a bug or whatever.

---
Page: 145

*If information is already documented someplace outside your program, don’t repeat the documentation inside the program; just reference the external documentation.*

**Part of the responsibility in documentation is actually reading it. Links to external docs increases the friction a bit but the reader should be expected to put in the effort in this case.

---
Page: 147

*Consistency is a powerful tool for reducing the complexity of a system and making its behavior more obvious. If a system is consistent, it means that similar things are done in similar ways, and dissimilar things are done in different ways.
Consistency creates cognitive leverage: once you have learned how something is done in one place, you can use that knowledge to immediately understand other places that use the same approach. If a system is not implemented in a consistent fashion, developers must learn about each situation separately. This will take more time.*

**Most code in a codebase is copy pasting what's already been done. Very little of the code is original.  

---
Page: 147

*Consistency reduces mistakes. If a system is not consistent, two situations may appear the same when in fact they are different. A developer may see a pattern that looks familiar and make incorrect assumptions based on previous encounters with that pattern. On the other hand, if the system is consistent, assumptions made based on familiar-looking situations will be safe. Consistency allows developers to work more quickly with fewer mistakes.*

**This is why it's important to always complete migrations and refactoring. If you only refactor half the system then you have created maximum possible inconsistency and it'll be hard for the copy pasters to not make mistakes. 

---
Page: 149

*Code reviews provide another opportunity for enforcing conventions and for educating new developers about the conventions. The more nit-picky that code reviewers are, the more quickly everyone on the team will learn the conventions, and the cleaner the code will be.*

**Code review is the simplest tool with the most effectiveness. Everyone should take it seriously. It's a way to enforce and teach. 

---
Page: 150

*Don’t change existing conventions. Resist the urge to “improve” on existing conventions. Having a “better idea” is not a sufficient excuse to introduce inconsistencies. Your new idea may indeed be better, but the value of consistency over inconsistency is almost always greater than the value of one approach over another. Before introducing inconsistent behavior, ask yourself two questions. First, do you have significant new information justifying your approach that wasn’t available when the old convention was established? Second, is the new approach so much better that it is worth taking the time to update all of the old uses? If your organization agrees that the answers to both questions are “yes,” then go ahead and make the upgrade; when you are done, there should be no sign of the old convention. However, you still run the risk that other developers will not know about the new convention, so they may reintroduce the old approach in the future. Overall, reconsidering established conventions is rarely a good use of developer time.*

**Sometimes I like to do this just to keep things fun and fresh. I try to balance it with how pervasive the convention is, if it's something that stretches across several projects, teams and systems I would think twice before doing it. If it's isolated to one project I would be more likely to do it.

---
Page: 150

*Consistency is another example of the investment mindset. It will take a bit of extra work to ensure consistency: work to decide on conventions, work to create automated checkers, work to look for similar situations to mimic in new code, and work in code reviews to educate the team. The return on this investment is that your code will be more obvious. Developers will be able to understand the code’s behavior more quickly and accurately, and this will allow them to work faster, with fewer bugs.*

**The goal would be that everybody instantly understands code that they're reading and that they instantly understand how to add new code for a given problem. 

---
Page: 151

*If code is obvious, it means that someone can read the code quickly, without much thought, and their first guesses about the behavior or meaning of the code will be correct. If code is obvious, a reader doesn’t need to spend much time or effort to gather all the information they need to work with the code. If code is not obvious, then a reader must expend a lot of time and energy to understand it. Not only does this reduce their efficiency, but it also increases the likelihood of misunderstanding and bugs. Obvious code needs fewer comments than nonobvious code.*

**Every nonobvious part of the unit of code under change will multiply the cognitive load of the person working on it. The load increase is non-linear, meaning there comes a certain point when it's impossible for anyone to bear. 

---
Page: 151

*Two of the most important techniques for making code obvious have already been discussed in previous chapters. The first is choosing good names (Chapter 14). Precise and meaningful names clarify the behavior of the code and reduce the need for documentation. If a name is vague or ambiguous, then readers will have read through the code in order to deduce the meaning of the named entity;
this is time-consuming and error-prone. The second technique is consistency (Chapter 17). If similar things are always done in similar ways, then readers can recognize patterns they have seen before and immediately draw (safe) conclusions without analyzing the code in detail.*

**When most of the code is obvious the chances that the developer will jump to conclusions increases, so make sure that if you have any nonobvious parts of the code that they have warning labels assigned to them.

---
Page: 154

*Event-driven programming makes it hard to follow the flow of control. The event handler functions are never invoked directly; they are invoked indirectly by the event module, typically using a function pointer or interface. Even if you find the point of invocation in the event module, it still isn’t possible to tell which specific function will be invoked: this will depend on which handlers were registered at runtime. Because of this, it’s hard to reason about event-driven code or convince yourself that it works.*

**The best way in my opinion to deal with this is through information hiding. If a service emitting the event doesn't have to care about its consumers it's easier to understand the service. And if the consumer just have to care about incoming events, not necessarily where they're from it'll be easier to understand. I do however agree that getting a holistic understanding of the system becomes way harder.

---
Page: 157

*To make code obvious, you must ensure that readers always have the information they need to understand it. You can do this in three ways. The best way is to reduce the amount of information that is needed, using design techniques such as abstraction and eliminating special cases. Second, you can take advantage of information that readers have already acquired in other contexts (for example, by following conventions and conforming to expectations) so readers don’t have to learn new information for your code. Third, you can present the important information to them in the code, using techniques such as good names and strategic comments.*

**You can take an evolutionary approach where something starts out needing explanatory comments and then when you have a better understanding of the abstraction you simplify the design and remove the need for the comment.

---
Page: 159

*Another way of thinking about this is in terms of depth: the more different implementations there are of an interface, the deeper the interface becomes. In order for an interface to have many implementations, it must capture the essential features of all the underlying implementations while steering clear of the details that differ between the implementations; this notion is at the heart of abstraction.*

**Finding the bare essentials of a concept requires work, that's why simplicity is hard.

---
Page: 159

*Thus, implementation inheritance should be used with caution. Before using implementation inheritance, consider whether an approach based on composition can provide the same benefits. For instance, it may be possible to use small helper classes to implement the shared functionality. Rather than inheriting functions from a parent, the original classes can each build upon the features of the helper classes.*

**Composition let's you build complexity from simple building blocks. In terms of complexity and expressive power it's superior to a class hierarchy that usually is very inflexible and lacks isolation. 

---
Page: 160

*One of the risks of agile development is that it can lead to tactical programming. Agile development tends to focus developers on features, not abstractions, and it encourages developers to put off design decisions in order to produce working software as soon as possible. For example, some agile practitioners argue that you shouldn’t implement general-purpose mechanisms right away; implement a minimal special-purpose mechanism to start with, and refactor into something more generic later, once you know that it’s needed.
Although these arguments make sense to a degree, they argue against an investment approach, and they encourage a more tactical style of programming.
This can result in a rapid accumulation of complexity.
Developing incrementally is generally a good idea, but the increments of development should be abstractions, not features. It’s fine to put off all thoughts about a particular abstraction until it’s needed by a feature. Once you need the abstraction, invest the time to design it cleanly; follow the advice of Chapter 6 and make it somewhat general-purpose.*

**I've been unaware of this risk and by just going with the flow I've been affected by it. It's so easy to say that we'll make the dirty version first and go back later while never going back. 

---
Page: 161

*The second kind of test consists of system tests (sometimes called integration tests), which ensure that the different parts of an application all work together properly. They typically involve running the entire application in a production environment. System tests are more likely to be written by a separate QA or testing team.*

**It's interesting to get some confirmation that it makes sense for QA to take care of integration tests. 

---
Page: 162

*Although I am a strong advocate of unit testing, I am not a fan of test-driven development. The problem with test-driven development is that it focuses attention on getting specific features working, rather than finding the best design. This is tactical programming pure and simple, with all of its disadvantages. Test-driven development is too incremental: at any point in time, it’s tempting to just hack in the next feature to make the next test pass. There’s no obvious time to do design, so it’s easy to end up with a mess.*

**I see it as one of the most efficient ways of prototyping your design. TDD doesn't discourage designing upfront, in fact it'll be more effective if you do it. Defining the specification for your code first is kind of like iterating on the design with comments.

---
Page: 162

*As mentioned in Section 19.2, the units of development should be abstractions, not features. Once you discover the need for an abstraction, don’t create the abstraction in pieces over time; design it all at once (or at least enough to provide a reasonably comprehensive set of core functions). This is more likely to produce a clean design whose pieces fit together well.*

**An abstraction facilitates that creation of many features. A good abstraction can be extended indefinitely with features, and with low effort. If the abstraction is not easy to work with, then it's the wrong abstraction. 

---
Page: 163

*The greatest risk with design patterns is over-application. Not every problem can be solved cleanly with an existing design pattern; don’t try to force a problem into a design pattern when a custom approach will be cleaner. Using design patterns doesn’t automatically improve a software system; it only does so if the design patterns fit. As with many ideas in software design, the notion that design patterns are good doesn’t necessarily mean that more design patterns are better.*

**You need to always think from first principles. Given that I have this problem, this is the nature of this problem, what kind of solution makes sense? Does the design pattern give you ideas for other solutions? 

---
Page: 165

*On the other hand, if you completely ignore performance issues, it’s easy to end up with a large number of significant inefficiencies spread throughout the code; the resulting system can easily be 5– 10x slower than it needs to be. In this “death by a thousand cuts” scenario it’s hard to come back later and improve the performance, because there is no single improvement that will have much impact.*

**The death by a thousand cuts trap is probably the biggest risk when you try to move fast, just because you risk programming too much tactically for too long. 

---
Page: 166

*If the only way to improve efficiency is by adding complexity, then the choice is more difficult. If the more efficient design adds only a small amount of complexity, and if the complexity is hidden, so it doesn’t affect any interfaces, then it may be worthwhile (but beware: complexity is incremental). If the faster design adds a lot of implementation complexity, or if it results in more complicated interfaces, then it may be better to start off with the simpler approach and optimize later if performance turns out to be a problem. However, if you have clear evidence that performance will be important in a particular situation, then you might as well implement the faster approach immediately.*

**You need to be clear on what the non-functional requirements are. You don't want to make the system more complex in vain.

---
Page: 167

*In general, simpler code tends to run faster than complex code. If you have defined away special cases and exceptions, then no code is needed to check for those cases and the system runs faster. Deep classes are more efficient than shallow ones, because they get more work done for each method call. Shallow classes result in more layer crossings, and each layer crossing adds overhead.*

**That's a big pro for deep modules. 

---
Page: 168

*At this point, let’s assume that you have carefully analyzed performance and have identified a piece of code that is slow enough to affect the overall system performance. The best way to improve its performance is with a “fundamental” change, such as introducing a cache, or using a different algorithmic approach (balanced tree vs. list, for instance). Our decision to bypass the kernel for network communication in RAMCloud is an example of a fundamental fix. If you can identify a fundamental fix, then you can implement it using the design techniques discussed in previous chapters.*

**Fundamental fixes are in a sense an improvement of the abstractions within the system. 

---
Page: 174

*The most important overall lesson from this chapter is that clean design and high performance are compatible. The Buffer class rewrite improved its performance by a factor of 2 while simplifying its design and reducing code size by 20%.
Complicated code tends to be slow because it does extraneous or redundant work. On the other hand, if you write clean, simple code, your system will probably be fast enough that you don’t have to worry much about performance in the first place. In the few cases where you do need to optimize performance, the key is simplicity again: find the critical paths that are most important for performance and make them as simple as possible.*

**The best general mindset to performance. If performance is extremely critical you'll be in a different boat altogether and the focus will probably be quite heavily around fundamental fixes.

---
Page: 175

*On the other hand, if good design is an important goal for you, then the ideas in this book should make programming more fun. Design is a fascinating puzzle:
how can a particular problem be solved with the simplest possible structure? It’s fun to explore different approaches, and it’s a great feeling to discover a solution that is both simple and powerful. A clean, simple, and obvious design is a beautiful thing.*

**This kind of thinking is beautiful but it doesn't feel congruent with making code a production engineering discipline. Production in the sense of industrial factory, conveyor belt, consistent quality and massive output. 
