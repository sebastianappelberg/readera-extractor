# Modern Software Engineering Doing What Works to Build Better Software Faster

Finished at: 2023-05-21
Last read at: 2023-08-10

## Comments

Page: 32

*I believe that the approach to software development that I describe in this book represents such a paradigm shift. It provides us with a new perspective on what it is that we do and how we do it.*

**I wonder if a paradigm shift is enough to make software  advance at the pace of hardware. The time from thought to product is what's interesting to me. Even with our best software development techniques, we don't make much of a dent. We may go from months to weeks or even days, but that's still less than even an order of magnitudes difference. To be honest I think that AI may be the paradigm shift we're looking for. The theoretical speed limit of thought to product is instant. I think we could create what we now think of as state of the art complex systems with the click of a button. Of course iterations will probably still be part of it but each iteration would take seconds instead of weeks. A self-improving system would be even a step beyond that.

---
Page: 41

*One of the driving forces behind Hamilton’s approach was the focus on how things fail—the ways in which we get things wrong.
“There was a fascination on my part with errors, a never ending pass-time of mine was what made a particular error, or class of errors, happen and how to prevent it in the future.”
This focus was grounded in a scientifically rational approach to problem solving. The assumption was not that you could plan and get it right first time, rather that you treated all ideas, solutions, and designs with skepticism until you ran out of ideas about how things could go wrong. Occasionally, reality is still going to surprise you, but this is engineering empiricism at work.*

**Are we in the habit of exploring how things may go wrong? What types of errors we may have? What we can do to recover from failure?

---
Page: 38

*In other engineering disciplines, math is certainly an important tool, but it doesn’t replace the need to test and to learn empirically from real-world experience. There is too much variance in the real world to completely predict an outcome. If math alone was enough to design an airplane, then that is what aerospace companies would do, because it would be cheaper than building real prototypes, but they don’t do that. Instead, they use math extensively to inform their thinking, and then they check their thinking by testing a real device.*

**Math is fundamentally limited. Some calculations are dependent on the physical reality and time. This is where computation can give a more realistic view, though even that is limited as so many things are computationally irreducible. 

---
Page: 52

*This approach has multiple benefits; it means that catastrophic failure, in production, is largely avoided, but it also means that they can get an indication of a problem and valuable feedback on the health of their system much, much sooner. Instead of running a soak tests for weeks, the engineering-focused team can detect leaks during regular testing of the system and get a result in a matter of minutes.*

**How precise are our measurement tools? Is it possible to measure complexity? Behavior-based metrics are certainly interesting when it comes to locating complexity in a code base. What about more abstract complexity? How do we measure if our design is close to the optimal for its purpose? 

---
Page: 54

*I see no tension here between craft and engineering. If you take the reasonably formal view of craftsmanship, with guilds, apprentices, journeymen, and master craftsmen, then engineering really was the next step on from that. As scientific rationalism took hold, following on from the enlightenment thinking of the 17th and 18th centuries, engineering was really craft enhanced with a bit more accuracy and measurement. Engineering is the more scalable, more effective offspring of craft.*

**What comes after engineering? What comes after scientific rationalism? I know that complexity and integral thinking has something to do with it. 

---
Page: 56

*This is what engineering decisions look like. They are based on rational criteria, strength at a certain temperature, or economic impact. It is still experimental, it is still iterative, it is still empirical.
You make a decision based on the evidence before you and your theory of what that will mean, and then you test your ideas to see if they work. It is not some perfectly predictable process.
SpaceX built test structures and then pressurized them, first with water and then with liquid nitrogen so that they could test the cryogenic performance of the materials (steel) and of their manufacturing process. Design engineering is a deeply exploratory approach to gaining knowledge.*

**Donald Reinertsen is a pioneer in this kind of thinking for software development. The idea a project economic framework is the first step towards a serious engineering rigor. 

---
Page: 56

*Understanding the trade-offs that we face is a vital, fundamental aspect of engineering decision-making.*

**What are the trade-offs that are most interesting to us, how do they influence each other and how do they change over time?

---
Page: 57

*The decision to adopt a serverless approach is going to have some implications for the design of your system. Where do you store state? Where do you manipulate it? How do you divide up the functions of your system? How do you organize and navigate complex systems when the unit of design is a function?
These questions are much more interesting and much more important to the success of your endeavor, whatever it may be, than the detail of how you specify a function or how you use the storage or security features of the platform. Yet nearly all of the presentations that I see on this topic are about the tools, not the design of systems.*

**Know what matters, what we're doing is design engineering. Given a set of conceptual primitives, what can you conceptually conceive of?

---
Page: 63

*If we are to achieve our goal of trying to define a collection of long-lasting thoughts, ideas, practices, and behaviors that we could collectively group together under the name software engineering, these ideas must be fairly fundamental to the reality of software development and robust in the face of change.*

**Has there been a base level of inertia that has made it take time to converge on the fundamental best practices? Or is it that the pace of change is so fast that it doesn't have time to converge at all? All the other engineering fields have much older roots.

---
Page: 65

*We not only seem to find it difficult to learn new ideas; we seem to find it almost impossible to discard old ideas, however discredited they may have become.*

**Rapid error correction is the basis of learning. How does one stay ahead of the curve? You want to realize you've been doing something wrong on your own, and not have to wait for a book to tell you five years after.

---
Page: 67

*These are technical measures of our development approach. They answer the questions “what is the quality of our work?” and “how efficiently can we produce work of that quality?”
These are meaningful ideas, but they leave some gaps. They don’t say anything about whether we are building the right things, only if we are building them right, but just because they aren’t perfect does not diminish their utility.*

**Knowing if we're building the right thing goes beyond the development process. It's at the border between product and tech. 

---
Page: 69

*Without effective measurement, we can’t tell that it doesn’t work; we can only make guesses.
If we are to start applying a more evidence-based, scientifically rational approach to decision-making, you shouldn’t take my word, or the word of Forsgren and her co-authors, on this or anything else.
Instead, you could make this measurement for yourself, in your team. Measure the throughput and stability of your existing approach, whatever that may be. Make a change, whatever that may be. Does the change move the dial on either of these measures?*

**Let's make an effort to build out our own scientific framework for estimating and measuring. It can't be too time consuming or difficult to apply because then it won't be used, or the benefits has to clearly outweigh the efforts.

---
Page: 76

*This definition also reminds us that iteration allows us to progressively approach some goal. Its real power is that it allows us to do this even when we don’t really know how to approach our goals. As long as we have some way of telling whether we are closer to, or further from, our goal, we could even iterate randomly and still achieve our goal. We can discard the steps that take us further away and prefer the steps that move us nearer. This is in essence how evolution works. It is also at the heart of how modern machine learning (ML) works.*

**According to the myth of the objective this is only true for very simple goals. Perhaps most are? How much novel ground is covered between separate development shops? It might be more than expected as there is still much craft involved. It's pretty crazy to think how unstandardized development is.

---
Page: 77

*This change in perception is significant, but not enough. Why was this step significant? Because it represents a step in the direction of perceiving software development as a learning exercise rather than a production problem. Waterfall processes can be effective for some kinds of production problems, but they are an extremely poor fit for problems that involve exploration.*

**Donald Reinertsen also acknowledges the difference between the assembly line of design and ideas, and the assembly line of physical things.

---
Page: 79

*Agile planning depended, to a significant degree, on decomposing work into small enough pieces that we could complete our features within a single sprint, or iteration. Initially this was promoted as a way of measuring progress, but it had the much more profound impact of delivering definitive feedback on the quality and appropriateness of our work on a regular basis. This change increases the rate at which we can learn. Does this design work? Do our users like this feature? Is the system fast enough? Have I eliminated all of the bugs? Is my code nice to work in? and so on.
Working iteratively in small, definitive, and production-ready steps provides us with great feedback!*

**How might we slice things thinner?

---
Page: 82

*We couldn’t afford to spend lots of time in analysis and design without creating anything, because that means more time not learning what really works. So we would need to compress things. We need to work iteratively!
We need to do just enough analysis, design, coding, testing, and releasing to get our ideas out into the hands of our customers and users so that we can see what really works. We need to reflect on that and then, given that learning, adapt what we do next to take advantage of it.*

**So how much time is appropriate to spend upfront? How short can we make our lead time to change? Does AB testing count?

---
Page: 84

*The people who did this were not stupid, but they did make a big mistake. The problem is multifaceted. Software is complex stuff, and the process of its creation bears no real relationship to a traditional “production problem,” which is how most people seem to have thought about it.
Initial attempts at industrializing our discipline were painful, pervasive, and very damaging. It resulted in the creation of a lot of software, but a lot of it was problematic. It was slow, inefficient, late, did not deliver what our users wanted, and was extremely difficult to maintain. Through the 1980s and 1990s software development exploded as a discipline and so did the complexity of the processes applied to it in many large organizations.*

**Is this fundamental or is it accidental? It's not self-evident, as people have attempted to industrialize it. What software does is to do with thought stuff. It's the most flexible and creative matter that we know of. Even so, will AI be able to streamline to such an extent that we can treat it as a production engineering problem?

---
Page: 88

*This allows us to refine our thinking, identify the next small step, and then take that step. Agile development is an unbounded, infinite approach because we work on small pieces of the problem before moving forward from a known and understood position. This is a profoundly more organic, evolutionary, unbounded approach to problem solving.
This is a profound difference and explains why agile thinking represents an important and significant step forward in our ability to make progress in solving, ideally, harder and harder problems.
This doesn’t mean that agile thinking is perfect or the final answer.
Rather, it is an important, significant, enabling step in the direction of better performance.*

**A shift in underlying philosophy can have great downstream effects. In complexity thinking Dave Snowden also recognizes the inevitability of going about problems iteratively. Even with perfect information you can't predict more than one step ahead. The smaller the steps the less jagged your path will be and thus be closer to optimal. 

---
Page: 89

*An iterative approach to planning and execution allows us to always have the most up-to-date picture of the situation that we are really in, rather than some predictive, theoretical, always-inaccurate version of that situation. It allows us to learn, react, and adapt as changes happen along the way. Working iteratively is the only effective strategy for a changing situation.*

**Are we working like this? How small does your iterations need to be for a phase shift to happen? Maybe the change in mindset is the phase shift?

---
Page: 90

*TDD is often described by the practices that contribute to it: Red, Green, Refactor.
• Red: Write a test, run it, and see it fail.
• Green: Write just enough code to make the test pass, run it, and see it pass.
• Refactor: Modify the code and the test to make it clear, expressive, elegant and more general. Run the test after every tiny change and see it pass.
This is a deeply fine-grained, iterative approach. It encourages a substantially more iterative approach to the fundamental technicalities of writing code.*

**How great of an impact does the structure of your testing harness affect the design? 

**How does one shift to a TDD culture? Could I mandate an experimental week? It could be a two week experiment, the first week we measure the baseline and the second week we try the new approach. The result would need to take the unfamiliarity into account. 

---
Page: 92

*Feedback allows us to establish a source of evidence for our decisions. Once we have such a source, the quality of our decisions is, inevitably, improved. It allows us to begin to separate myth from reality.*

**What sources of feedback would give us the most value? How does one evaluate this? It has to be different sources at different stages of the process. How might we make sure that we don't miss gathering feedback where it's essential? 

---
Page: 94

*The first example is of a planned, predictive approach. This approach works well as long as you completely understand all of the variables and as long as nothing comes along to change your understanding or your plan. This is really the basis of any detailed, planned approach. If you have a detailed plan, there is only one correct solution, so either the problem has to be so simple to make that possible or you have to be omniscient in your abilities to predict the future.*

**You would need a Laplacian demon in order to device the perfect plan, and even if you have access to one of those the amount of information and variables you need to count is everything that has happened and ever will happen which is quite unfeasible. I do wonder if this is true though, is there some level of coarse graining here that will allow us to be confident in approximate approaches. Even with approximations allowed the feedback process is by far the most efficient one. What type of problem domains does it apply well to and which ones aren't as good of a fit? 

---
Page: 94

*The second, alternative approach still involves a plan “I am going to balance the broom,” but the plan is all about outcomes and says nothing about the mechanism through which you will achieve it.
Instead, you are just going to start work and do whatever it takes to achieve the desired outcome. If that means responding to feedback and moving your hand a few millimeters very quickly, good. If it means taking a few staggering steps forward and sideways while moving your hand a meter or more, because something unexpected happened, that is fine too, as long as the outcome is achieved.*

**Michael Levin claims that this is the only feasible approach to controlling biology as well. We can't specify every possible step for molecules, cells and organisms. They will face situations that could never be predicted ahead of time and if they don't have the capabilities and the permissions to adapt then they will be frozen. This is true for teams in an organization as well. In fact this may be true for anything that's embedded in a complex environment. Perhaps not even complex, just dynamic.

---
Page: 95

*“F Selig: External specifications, at any level, describe the software product in terms of the items controlled by and available to the user. The internal design describes the software product in terms of the program structures which realize the external specifications. It has to be understood that feedback between the design of the external and internal specifications is an essential part of a realistic and effective implementation process.”*

**Is it apparent in our system that we're taking the external specification into account? 

---
Page: 101

*So how do you put “quality,” on the basis of these attributes, into code? In the absence of TDD, it is solely down to the experience, commitment, and skills of a developer.*

**Are there any other ways of getting realtime feedback on your design? Pairprograming is one. Are there more? AI co-pilots. More? 

**The tighter our feedback cycles are the less rework will be needed as we won't build as much on faulty assumptions. 

---
Page: 103

*TDD remains a controversial idea in many quarters, but the data is pretty good. This approach can dramatically reduce the bug count in a system, and it has a positive impact on the quality of the design of a system.*

**Is the evidence for this solid enough? We can always run a firsthand experiment. 

---
Page: 104

*Some tests will need to test the deployment and configuration of the system and so the limiting case for time to feedback is based on the time to deploy the system and get it up and running, and the time to run the slowest test case.*

**This determines the theoretical limits of cycle speed for integration feedback. 

---
Page: 106

*This is a profound and important idea. It means that through the adoption of some generic principles we can gain a significant, measurable impact on the quality of the systems that we create. By focusing process, technology, practice, and culture on the efficient delivery of high-quality feedback, we can create better-quality software and do that with greater efficiency.*

**The levels of feedback described are local, integrative, external. 

**Constraints is another good control mechanism for the structure of complex systems.

---
Page: 111

*This feedback is invaluable as a “fitness function” for guiding our efforts toward the better outcomes predicted by the DORA model. By tracking our scores in terms of stability and throughput as we evolve our process, technology, organization, and culture, we can be sure that the changes that we make are in fact beneficial. We move from being victims of fashion or guesswork to being more like engineers.
These changes are still proxies for the real value of the software that we produce. That value is shown in the impact our changes have on users. However, these changes measure important properties of our work and are not open to manipulation. If your stability and throughput numbers are good, your technical delivery is good. So if you are not successful with good stability and throughput, your product ideas or business strategy is at fault!*

**How do we determine what our current state is? How do we determine what our desired next state should be? The DORA metrics. How do we generate good ideas for getting us to the desires state? What should be our time frame for evaluating action?

---
Page: 116

*A modular approach frees teams to work more independently. They can each make small incremental steps forward without needing to coordinate, or at least with minimal coordination, between teams.
This freedom allows organizations that embrace it fully to move forward and innovate at unprecedented pace.*

**This is what we're missing right now and a big part of it is because everyone's poking inside the same project. With the app and the pwa it's much more apparent that they don't feel the need to coordinate. 

---
Page: 116

*The most common approach to implementing change seems to be to try to standardize processes across an organization. “Process mapping” and “business transformation” are big business for management consultancies. The problem is that all organizations, certainly those involved in creative work, are dependent on human creativity. If we could “standardize” the process into a series of steps, we could automate it and eliminate the costly, error-prone people!
How many times have you used an automated telephone filtering system and gotten to some menu that doesn’t have an option that matches your inquiry or simply dumps the call? This is because some things aren’t simple to break into simple steps, as anyone who has ever written a computer program will attest.*

**I think this is why Reed Hastings warns against to rigid processes. His goal for Netflix is that it'll be more innovative than everybody else.

---
Page: 117

*One of the defining characteristics of high-performing teams in software development is their ability to make progress and to change their minds, without asking for permission from any person or group outside of their small team.3*

**Where can we delegate even more? Where does it feel bad to delegate and what can be done to fix that? What parts work better if they're not delegated? 

---
Page: 118

*The key transformation then that most organizations need to make is toward greater autonomy for people and teams to deliver high-quality, creative work. Distributed, incremental change is the key.
Modular organizations are more flexible, more scalable, and more efficient than more traditional organizational structures for software development.*

**With many small, independent components your compositional capabilities increase. Are there any benefits at all with larger teams?

---
Page: 120

*Since testable code is modular with a good separation of concerns, that means automated testing creates a positive feedback loop that enhances our ability to design better systems, limit the blast radius of mistakes, and make changes more safely. Ultimately, the combination of these three techniques provides a massive step forward in our ability to make changes incrementally.*

**Refactoring and version control is done without even thinking about it. Testing on the other hand requires more effort to turn into a habit. 

---
Page: 121

*At any interface point between two components of the system that we want to decouple, a port, we define a separate piece of code to translate inputs and outputs, the adapter. This allows us more freedom to change the code behind the adapters without forcing change on other components that interact with it through this port.
This code is the core of our logic, so being able to change this without coordinating with other teams or people is a big win. As a result, we can safely make incremental progress in this part of the code and then deal with the significantly trickier and costly changes in the agreed-upon protocols of information exchange between components. These changes should, ideally, happen a lot less often and so teams will break one another’s code significantly less often too.*

**The more in touch with reality a pattern is the more effective it's going to be. In this case the reality is that there are integration points in any modular system. Those integration points necessarily requires more care and should be slower to change. Behind the integration points is your domain where you have full autonomy. What goes beyond modularity?  What complements it?

---
Page: 121

*The other important, and often overlooked, tool in managing the impact of change is speed of feedback. If I write some code that breaks your code, then how much that matters is very different depending on when we find out that I broke it.
If we only discover that I broke something months later, then the implications may be serious. If our code is already in production when we find the problem, the implications could be very serious!*

**I'm not sure how fast we would be able to detect something like this. Right now we have a monolith so it might not be a big issue, but we will need a strategy for it if we go with microservices. 

---
Page: 123

*Accepting that we don’t know, doubting what we do know, and working to learn fast is a step from dogma toward engineering.
We use facts about what we know and have discovered incrementally and, at every stage, look to extrapolate our next step forward into the unknown, based on all of the stuff that we currently believe that we know. This is a more scientifically rational worldview.
As physicist Richard Feynman once said, science is “a satisfactory philosophy of ignorance.” He also said:
The scientist has a lot of experience with ignorance and doubt and uncertainty, and this experience is of very great importance, I think.
The techniques of managing complexity are important for several reasons, but in this context of software development, as an act of discovery it is a vital one because they allow us to limit the “blast radius” when our “step forward” turns out to be a misstep. You can think of this as defensive design or defensive coding, but a better way to think of it is as incremental design.*

**It's like trying to navigate inside of a snowstorm. You barely make out what's in front of you and your fantasy constantly creates falsities. By taking very small steps and prodding you can for the most part avoid walking into a lamppost. 

---
Page: 124

*If we adopt these ideas at every level of granularity pervasively in our work, then we close fewer doors on change, and we leave more options open to make change, even unexpected change, in the future. This is different from over-engineering and writing code that copes with every eventuality. This is code that is organized to make change easier, not code that does everything that you can think of right now.*

**Many times it turns out that overengineering a solution was either a waste of time or downright harmful, in the same way that an overfitted organism is very bad at dealing with changes in the environment. 

---
Page: 125

*Working incrementally is fundamental to building any complex system. It is an illusion to imagine that such systems spring “fully formed” from the minds of some expert or experts; they don’t. They are the result of work and the gradual accretion of knowledge and understanding as we make progress. Organizing our work to facilitate and validate this learning allows us the ability to take, as yet unseen, routes in the direction of progress. These ideas are at the core of what allows us to make progress effectively.*

**There are some systems that are under constraints in terms of being modified. Backwards compatibility and auditability comes to mind. However even in those cases, or especially in those cases, we can work incrementally by adding the primitives and the structure to deal with or even assume that whatever we have right now will change tomorrow. 

---
Page: 130

*Science works! Make a hypothesis. Figure out how to prove or disprove it. Carry out the experiment. Observe the results and see they match your hypothesis. Repeat!
The lesson here is that being empirical is more complex than it looks and takes more discipline to achieve. You could imagine that when we correlated the problem that Darren had seen with the failing tests we were being empirical and reacting to the messages that reality was sending us. However, we weren’t. We were jumping to conclusions and skewing the facts to fit our preferred guess at what was going wrong. If at that point we had simply walked through “what we knew” in a more organized way, it would have been completely obvious that this wasn’t a “messaging problem” because our messaging changes had been working all week and hadn’t changed since they had been working.*

**Being systematic when you debug issues makes the process almost mechanical and you inevitably find the issue through qualified trial and error. 

---
Page: 131

*Human beings are remarkable, but to be as smart as we are takes an enormous amount of processing. Our perception of reality is not “reality,” and we have a series of biological tricks to make our perception of reality appear to be seamless. For example, our visual sampling rate is surprisingly slow. The smoothness of your perception of reality, as gathered through your eyes, is an illusion created by your brain. In reality, your eyes sample a small patch of your visual field, scanning at a rate of roughly once every couple of seconds, and your brain creates a “virtual reality” impression of what is really going on.*

**What's the rendering speed of the brain? The perception of it is that it's instant.

---
Page: 132

*Science is not what most people think it is. It is not about large hadron colliders or modern medicine or even physics. Science is a problem-solving technique. We create a model of the problem before us, and we check to see if everything that we currently know fits the model. We then try to think of ways in which we can prove the model is wrong. David Deutsch says that the model is composed of “good explanations.”*

**David Deutsch's view on science is refreshing. It's all about conjecture, error correction and better and better explanations. 

---
Page: 133

*One of the most common causes of a cache-miss for most systems that we found by measurement was concurrency.*

**What is the most common source of errors and performance issues that we have? And what type of metrics would be interesting for deeper insights?

---
Page: 134

*This is fine for running unconnected, independent processes, but what if you want to build a fast algorithm? The obvious conclusion (guess) is that it is inevitable that the solution to this problem is to parallelize our algorithms. In essence, the idea here is that we can speed things up by throwing more threads of execution at the problems that we tackle.*

**What class of problems are possible to make faster by parallelism? 

---
Page: 136

*Based on this feedback, we can make more informed, evidence-based decisions. If we want to maximize the rate at which an algorithm makes progress, we should try to keep as much work as possible on a single thread, unless we can make progress and never join the results back together again.*

**This result may not be true always and forever. 

---
Page: 136

*The best way to start is to assume that what you know, and what you think, is probably wrong and then figure out how you could find out how it is wrong.*

**What assumptions do we have in our system and how would we falsify them? A couple that I can think of are, serverless is easier and less expensive, our deployments are slow, testing makes us go faster. We could do something like assumption smashing for our architecture. 

---
Page: 137

*Empiricism is the mechanism through which we can sense-check the validity of our experiments. It helps us to place them into context and, in effect, test the validity of the simulations of reality at the heart of our experiments.*

**So is the difference between empiricism and experiments that  with empiricism you tie it back to observations made in the real world?

---
Page: 138

*Most software development, though, does not really work this way.
Most software development is consciously carried out as an exercise in craft where someone guesses what users may like. They guess about a design and/or technology that could achieve their product goals. Developers then guess about whether the code that they write does what they mean it to, and they guess about whether there are any bugs in it. Many organizations guess about whether their software is useful or made more money than it cost to build it.
We can do better. We can use guesses where they are appropriate, but then we can design experiments to test the guesses.
This sounds slow, expensive, and complex, but it is not. This is really only a shift in approach and mindset. This is not about “working harder”; this is about “working smarter.” The teams that I have seen that have worked this way and taken these ideas to heart are not slow or overly academic. They are, though, more disciplined in the way that they approach problem-solving, and as a result, they find better, cheaper solutions to problems more quickly and produce software with greater quality that pleases their users more.*

**How do we create small and cheap experiments that gives us good answers quickly? And how do we remove guessing from the parts that are the most critical in our system? How do we turn ourselves from craftsmen into engineers? 

**How do we prove things to each other? What tools, activities and capabilities do we need to acquire?

---
Page: 140

*Being experimental does not mean basing every decision on hard physics. All sciences are based on experiment, but the degree of control varies. In engineering, experimentation remains at its heart, but is a pragmatic, practical form of experimentation.*

**How do we scope the experiments? When is an experiment valid to do? Where do we start? 

---
Page: 142

*It was only through taking a fairly disciplined approach to applying this kind of experimental thinking to this problem—a problem that various attempts had tried to improve on before—that we were able to make progress. Several of our ideas didn’t pan out. Our experiments showed us that it was no good investing lots of time and effort on certain tools or techniques, because they wouldn’t give us the speedups that we needed.*

**How does one stay disciplined? I myself feel that I've lost touch with following up on our delivery metrics? 

**If we bake it into a well structured meeting that runs on a regular cadence, perhaps we'd be able to do it? I do feel that I need some good control mechanism that is not too hard to keep up and doesn't restrict autonomy. 

---
Page: 143

*Guesses or hypotheses are the starting point. The difference between science and engineering, compared with other less effective approaches, is that the others stop there.
To be scientific, once we have a guess, in the form of a hypothesis, we start making some predictions, and then we can try to find ways to check those predictions.
Feynman goes on, in that great presentation, to say this:
If your guess disagrees with experiment, then it (your guess) is wrong!
That is the heart of it! That is where we need to get to in order to be able to claim that what we do is engineering rather than guesswork.
We need to be able to test our hypotheses. Our tests can take a variety of forms. We can observe reality (production), or we can carry out some more controlled experiment, perhaps in the form of an automated test of some kind.
We can focus on getting good feedback from production to inform our learning, or we can try our ideas in more controlled circumstances.
Organizing our thinking, and our work, to proceed as a series of experiments to validate our hypotheses is an important improvement in the quality of our work.*

**What should and what shouldn't be phrased as a hypothesis? 

**A design thinking playbook for software engineering would be amazing. I suppose Design It! Is a step in the right direction but it's not deep enough. 

---
Page: 145

*In this second example, we started out being experimental, but, in part due to the accuracy of our measurement, even though we were measuring some of the wrong things, we quickly started to learn and improve the quality and accuracy of our measurements and to better target our experiments. It’s all about learning!
Not everyone cares to this degree of precision in measurement, but the principles remain the same, whatever kind of software you are building. Being experimental demands that we pay more attention to the measurement of our system, whatever that means in our context.*

**What functional constraints do we have on our system? Cost, performance, scalability,  security, correctness. How do we measure them all?

---
Page: 146

*We can get a much clearer picture of “are we building the right things” because we have taken control of “are we building the things right.”*

**How much are we lacking on the building things right part?

---
Page: 150

*If we think of our software existing in a tiny universe that we create, however big or complex the software, then we can control that universe precisely and so evaluate our software’s role in it. If we work to be able to “control the variables” to the extent that we can reliably and repeatably re-create that universe—infrastructure as code as a part of a continuous delivery deployment pipeline, for example—then we have a good starting point for our experiments.*

**To what degree should you be building your test harness so that it makes variables easier to control? The Integration Tests Are a Scam video claims that we should be doing unit tests for everything within a module and contract tests between modules and have very limited amount of tests where the real integrations are used.

---
Page: 150

*If we want to “create new knowledge” in the system, we can create a new experiment, a test, that defines the new knowledge that we expect to observe, and then we can add that knowledge in the form of working code that meets the needs of the experiment. If the new ideas are not consistent with previous ideas, meaning the “body of knowledge” in our mini, controlled universe, then experiments will fail, and we will know that this idea is wrong, or at least inconsistent with the recorded statement of the knowledge in the system.*

**Are there facts and knowledge in a system that are not possible to create a test for?

---
Page: 155

*These days when I begin a software project, I will establish a check in the continuous delivery deployment pipeline, in the “commit stage,” that does exactly this kind of test and rejects any commit that contains a method longer that 20 or 30 lines of code. I also reject method signatures with more than five or six parameters. These are arbitrary values, based on my experience and preferences with the teams that I have worked on. My point is not to recommend these specific values, rather that “guiderails” like these are important to keep us honest in our design. Whatever the time pressure, writing bad code is never a time-saver!*

**Do we have the capability of configuring these kinds of code rules? If not, how do we acquire it?

---
Page: 155

*For me, this is the real skill of software development. This is the property that most differentiates the code written by experts, masters of their craft, from that written by neophytes. While it takes skill to achieve good modularity in our designs, what I perceive in a lot of the code that I see is that people don’t just “do modularity badly,” but, rather, they “don’t attempt it at all.” A lot of code is written as though it is a recipe, meaning a linear sequence of steps collected together in methods and functions spanning hundreds or even thousands of lines of code.*

**How good are our people at doing this? Do they need coaching to get there? How do we give them that coaching?

---
Page: 156

*There is some control over the scope of variables and functions that limit access to them so that there is a notion in some sense of there being an “outside” and an “inside” to the module. There is an interface of some kind that controls access, manages communication with other code, and deals with other modules.*

**We almost have modularity through our domains, actions and tasks concept. However we don't have a clear way of drawing a hard boundary on our domains since everything is in the same code project. 

---
Page: 157

*The real issue here, though, is that complex code is, kind of by definition, more difficult to change. That means you have one chance to get it right, when you write it the first time. Also, if my code is complex, then I probably don’t really understand it as well as I think that I do; there are more places for mistakes to hide.*

**This reminds of Rob Pike's idea of, given that debugging code is twice as hard as writing it, then it follows thet if you write code that's at your limit you will be definition not be capable of debugging it. 

---
Page: 158

*If our tests are difficult to write, it means that our design is poor. We get a signal, immediately. We get feedback on the quality of our design as we attempt to refine it for the next increment in behavior. These lessons are delivered automatically to us if we follow the Red, Green, Refactor discipline of TDD. When our tests are hard to write, our design is worse than it should be. If our tests are easy to write our code, the stuff that we are testing inevitably exhibits the properties that we value as hallmarks of high quality in code.*

**Is it easy to write tests for our system? If not, where is the design lacking? Are we breaking our backs trying to create a super flexible test framework to compensate for bad design? 

---
Page: 166

*When I was involved in creating a financial exchange, we treated the whole enterprise system as a single system, but we established clear, well-defined integration points for every external interaction and faked those external systems. Now we had control; now we could inject new account registrations and collect data that, in real operation, would have been sent to banks or clearinghouses and so on.
This allowed us, for some of our testing, to treat the whole system as a black box, inject data to get the system into an appropriate state for a test, and collect its outputs to evaluate the system’s response. We treated every point at which our system interacted with a third-party system and every integration point as a point of measurement where we could plug in to our test infrastructure. This was possible only because our entire enterprise system was designed with testability in mind from day one.*

**What integration points do we have and are they cleanly dealt with as such? Would we be able to setup deterministic tests for our whole system? Our integration tests as they are right now rely too much on third parties.

---
Page: 165

*So, what would it take to measure with this increased precision and specificity? Well, we would like our measuring points to be stable so that we get the same result from our measurement every time, all other things being equal. We would like our evaluations to be deterministic.
We would also like to not have to re-create our measurement points from scratch each time that the system changes.
To be clear, what I am describing here is a stable, modular interface to the part of the system that we would like to test. We compose larger systems of smaller modules, modules with clearly defined interfaces, for inputs and outputs. This architectural approach allows us to measure the system at those interfaces.
Reading this here, I hope that this seems obvious. The problem is that few real-world computer systems look like this.
If we make it a fundamental part of our job to test, with automated testing, the systems that we create, then we are very strongly encouraged by the extra work that we are forced to do if we get it wrong to create more modular systems. This is fractal. This is true at all levels of granularity, from entire enterprise systems down to individual methods, functions, and classes.*

**Being fractal is a sign of being universally true.

---
Page: 167

*From a purely practical perspective, we can think of a service as code that delivers some “service” to other code and hides the detail of how it delivers that “service.” This is just the idea of “information hiding” and is extremely important if we want to manage the complexity of our systems as they grow (see Chapter 12). Identifying “seams” in the design of our systems where the rest of the system doesn’t need to know and shouldn’t care about, the detail of what is happening on the other side of those “seams” is a very good idea. This is really the essence of design.*

**How should one enforce the boundaries at the seems? There are several mechanisms available for isolation. One is with packages and interfaces in the code base, one is with different git repositories all together, one is with static analysis, one is with informal agreements. 

---
Page: 169

*There are only two strategies that make sense if we are to take that idea to its logical conclusion. We can build, test, and deploy everything that constitutes our system together, or we can build, test, and deploy parts of that system separately. There is no halfway solution. If we don’t trust the output of our deployment pipeline sufficiently and feel it necessary to test the results it generates with the output of other deployment pipelines, then that presents problems; the messages that our deployment pipeline is sending to us are now unclear, and since we are trying to be engineers, that isn’t good enough!*

**The mindset that we have hasn't yet flipped to start trusting the pipeline fully. Is it a lack of communication? Is it the fact that bugs have been slipping through? What is it?

---
Page: 170

*We can either make the choice to build test and deploy everything that constitutes our system together and so eliminate dependency-management problems altogether (everything lives in a single repository), but then we must take on the responsibility to create fast enough feedback to allow developers to do a good job, which may take a big investment in engineering to get the feedback that drives any high-quality process quickly enough.
Alternatively, we can work so that each module is, essentially, independent of every other module. We can build, test, and deploy each of these things separately, without the need to test them together.
This means that the scope of our builds, tests, and deployment is small.
Each of them is simpler, and so it is easier to achieve fast, high-quality results.
However, this comes at the sometimes very significant cost of a more complex, more distributed architecture in our systems. We are forced, now, to take modularity very seriously indeed.*

**How does one transition from one to the other? And wouldn't you be stuck in the middle for a while?

---
Page: 173

*How do we integrate the work from separate streams of development? If you are as nerdy as me, this may be ringing bells; this is about something deeply fundamental. This is about information and concurrency. When you have independent streams of information, the cost of bringing them together to form a coherent whole can be extremely high if there is any overlap. The best way to parallelize things is to do it in a way where there is no need to re-integrate (nine babies). Essentially, this is the microservice approach. Microservices are an organizational scalability play; they don’t really have any other advantage, but let’s be clear, this is a big advantage if scalability is your problem!*

**How do you avoid coupling when you have one product? All the independent services will need to come together inside of the product and deliver value together. Is it even necessary to avoid for a certain system size? 

---
Page: 173

*So if we want our organizations to be able to scale up, the secret is to build teams and systems that need to coordinate to the minimum possible degree, we need to decouple them. Working hard to maintain this organizational modularity is important and one of the real hallmarks of genuinely high-performing, scalable organizations.*

**Why does our teams feel the need to constantly sync? I believe the biggest issue might be that we have a shared code base.

---
Page: 179

*The primary goal of code is to communicate ideas to humans!
We write code to express ideas as clearly and simply as we can, at least that is how it should work. We should never choose brevity at the cost of obscurity. Making our code readable is, to my mind, both a professional duty of care and one of the most important guiding principles in managing complexity. So I prefer to optimize to reduce thinking rather than to reduce typing.*

**This is foundational enough to become a principle for us.

---
Page: 180

*One effective tool to drive this kind of decision-making is domain-driven design.3 Allowing our thinking, and our designs, to be guided by the problem domain helps us to identify paths that are more likely to be profitable in the long run.*

**What belongs together depends on the context. Context is one of those annoying things that's different for every project. It's the part that requires you to get on the same page. Through collaborative workshops, through informal discussions, through documentation and any other kind of tool for alignment. 

---
Page: 181

*We can use ideas like ubiquitous language and bounded context to guide the design of our systems. If we follow their lead, we tend to build better systems, and they help us to more clearly see the core, essential complexity of our system and differentiate that from the accidental complexity that often, otherwise, can obscure what our code is really attempting to do.*

**Perhaps this is where you should start when it comes to fixing your architecture. Or we could define the problem with our current structure, what are some of the properties of a desired structure and the constraints that we need to work with. 

---
Page: 182

*If we design our system so that it is a simulation of the problem domain, as far as we understand it, then an idea that is viewed as a small change from the perspective of the problem domain will also be a small step in the code. This is a nice property to have.*

**Certain things in our system are extremely easy to add or change. The difference in lead time for the easy stuff versus the hard stuff is probably one order of magnitude. If an easy change takes one day, a hard change takes ten. The stuff that is easy just happened to turn out that way, there wasn't really a conscious effort to make it so. We should analyze what kind of changes that are requested the most. 

---
Page: 183

*We make progress incrementally through a series of experiments, and we use the techniques of managing complexity to protect ourselves from making mistakes that are too damaging.
This is how science and engineering work. We control the variables, take a small step, and evaluate where we are. If our evaluation suggests that we took a misstep, then we take a step back and decide what to try next. If it looks okay, we control the variables, take another small step, and so on.
Another way to think of this is that software development is a kind of evolutionary process. Our job as programmers is to guide our learning and our designs through an incremental process of directed evolution toward desirable outcomes.*

**We're lacking heavily on the evaluation part at all levels of abstraction. We don't do it for business outcomes, vendors, features, services or packages. When should we ask ourselves, is this good enough? 

---
Page: 190

*more flexible as a design, still lacks clarity. At this extreme it is easy for responsibilities to be so diffuse, so widely dispersed, that it is impossible to understand the picture without reading and understanding a lot of code. This could be a good thing, but my point is that there is a cost in clarity to coupling this loose, as well as some benefits.*

**The sweet spot can be teased out by the pressure of testability. Cresting a test is like verifying for yourself that you understand what a piece of code is doing. If you have a hard time doing it, it might not be cohesive enough. 

---
Page: 195

*The guiding principle is that this is a mix of essential and accidental complexity. That is, how and where we store something is not germane to the core shopping-cart behavior that we are trying to create. We want a clear line, a separation, between code that deals with essential and code that deals with accidental complexity.
The difference between the second two examples is more nuanced.
This is more of a matter of context and choice. My personal preference is strongly in favor of add_to_cart3. This is the most flexible solution of all. I may or may not choose to achieve my separation with a method-injected listener like this, but I very much like that I have removed the concept of storage from my core domain.*

**Will we some day be able to get rid of accidental complexity? Serverless is another step towards it, however it adds its own accidental complexity so the net benefit is not clear.

---
Page: 197

*So the “whole picture” is obscured only because we are looking in the wrong place. If we were to take that rather naive view of the world, then shouldn’t the generic collection that we are using to represent our cart also know about storage and totals? Of course not!
One of the reasons that I value separation of concerns so highly as a guiding principle is because it reminds me to keep my focus small.
I feel proud of code that I have written when you can look at each part and understand what that part does without thinking too hard about it. If you have to study it for more than a handful of seconds, I have failed. Now you may have to understand how that part is used by other parts, but those other parts will have their own concerns to deal with and ideally express them as clearly.*

**How deep can you go with your separation of concerns? The criticism of losing view of the whole picture is valid. He mentions that you test for that and look for that somewhere else, so wouldn't that place need to bundle concerns?

---
Page: 199

*An effective approach to improving our designs through separation of concerns is to focus very clearly on separating the concerns of the accidental and essential complexities of our systems.*

**Separating concerns can be done iteratively and incrementally. The first increment can be to separate essential and accidental complexity. The second step can be to apply domain-driven design. A third step could be to do it at the level of methods. All these increments can be touched in each iteration. I like how all the terms in this book are examples of the terms themselves. 

---
Page: 202

*We can also look to guide our designs from the perspective of the problem domain. If we take an evolutionary, incremental approach to design, we can work in ways that allow us to keep a sharp look out for those moments when we may identify new concerns. Concerns that may otherwise be inappropriately conflated in our designs.*

**Where do you start when you have a big system that has not applied these principles from the beginning? You're starting your evolution from a mess of an organism. Iterations, increments, error correction. 

---
Page: 204

*One of the keys here is to try to maintain a very low tolerance for complexity. Code should be simple and readable, and as soon as it begins to feel like hard work, you should pause and start looking for ways to simplify and clarify the part in front of you.*

**How does one deal with practices that requires discipline? The way that religions have dealt with it is with principles and rules. 

---
Page: 204

*Using the problem that you are solving to help you to define sensible lines of demarcation in your code is really the essence of separation of concerns. This is true at various levels of granularity. We can begin with bounded contexts to identify course-grained modules (or services) in our design and then work to refine our design over time as we learn more about the problem that we are solving and gain more insight into the readability, or otherwise, of our code.*

**What other guiding mechanisms can we use to do good separation? When you find yourself needing to change in multiple, seemingly unrelated areas of the code. When we need to use the word "and" a lot to describe what the module is responsible for. 

---
Page: 205

*If we work to ensure that our code is easy to test, then we must separate the concerns or our tests will lack focus. Our tests will also be more complex, and it will be difficult to make them repeatable and reliable. Striving to control the variables so that we can test encourages us to create systems that demonstrate the properties of high quality in software that we value: modularity, cohesion, separation of concerns, information hiding, and loose coupling.*

**What if the tests turn out to be more complicated than the code they're testing?

---
Page: 208

*If we have created our own abstraction, our own Port & Adapter for S3, that does just, and only just, what our code needs, we can probably use that in more than just one place in the code. Maybe we use it everywhere, maybe there are some cases that are more complex, and maybe we have a different, separate Port & Adapter for those cases. Either way, we have significantly reduced our maintenance effort. We could completely rewrite the adapter to use the new client library. It wouldn’t affect the code that uses it at all.
This approach embodies many of the goals of good design. By working to manage complexity, we also insulate our code against change, even unexpected or unpredictable change.*

**Ports and adapters is a way of trimming all fat from your code, making sure that you only define what's actually going to be used. I like trimming as a guiding principle when writing clean code.

---
Page: 207

*By making the “invocation to store” more consistent with the other ideas in this function, we have increased the abstraction. We have also started to push our design in a different direction.*

**The level of abstraction within a module should be consistent. Otherwise you're clearly mixing essential and accidental complexity. 

---
Page: 209

*Combined, these two pieces of advice suggest a simple guideline of “Always translate information that flows between services,” or to put it another way, “Always communicate between services using Ports & Adapters.”*

**Can Porta and Adapters take different shapes and forms or is it bound to the interface mechanism provided by the language? 

---
Page: 212

*As a default stance, or a guideline, I recommend that you always add Ports & Adapters where the code that you talk to is in a different scope of evaluation, such as a different repo or a different deployment pipeline. Taking a more defensive stance in these situations will make your code more testable, yet again, and more robust in the face of change.*

**What about services within a monolith?

---
Page: 210

*An application programming interface (API) is all of the information that is exposed to consumers of a service, or library, that exposes that API.*

**This includes interaction with any data collection passed to the API that affects its behavior. Any information and interaction that the consumer needs to be aware of is part of the API. 

---
Page: 212

*If we design our code using the ideas of separation of concerns as a guiding principle, including the ideas of maintaining a consistent level of abstraction within any given, even small, context, then we leave the door open to incremental change. Even if we don’t yet know the details of how something will be communicated, stored, or interacted with in general, we can write code and make progress.*

**What I loved most about Go is that it's interface mechanism makes it so easy to define seams in your code. You almost automatically stub out all dependencies that you don't really care about, which lets you focus entirely on the essential complexity. It feels like you're writing pseudocode.

---
Page: 212

*TDD is the most powerful tool that we can wield to achieve that testability. By driving all of our development from the perspective of testing, we dramatically change the focus of our designs.*

**Complicated tests may be the consequence of adding them as an afterthought. Clearly you then need to adapt your test to the design of the code and you don't have a test suite to fall back on if you'd want to start refactoring the design. 

---
Page: 213

*Separation of concerns is also the easiest design heuristic to adopt of the collection here.
We could debate the modularity or cohesion of some code or system. As you can see, I consider these ideas to be extremely important, but ultimately their measurement is somewhat subjective.
While we can probably agree on bad examples, we’d probably struggle to, at the limit, define what ideal modularity or cohesion was.
Separation of concerns is different. If your module, class, or function does more than one thing, your concerns aren’t really separate. The result is that separation of concerns is a fantastic tool to guide us, definitively, in the direction of the design of better software.*

**The simpler a rule is the more we can lean on the path of least resistance to be in favor of applying it.

---
Page: 217

*One of the key findings of the “State of DevOps” report that underpins the scientific approach to analyzing the performance of software teams outlined in the Accelerate book is that there is no trade-off between speed and quality. You don’t create software faster if you do a poor job on quality.*

**Developers still claim that they move slower if they have to add tests and create high quality code. Perhaps with their current way of working that is true. What needs to change and how do we make that change? 

---
Page: 216

*The first thing to say is why do we, software developers, need to ask for permission to do a good job? We are the experts in software development, so we are best placed to understand what works and what doesn’t.
If you hire me to write code for you, it is my duty to you to do the best job that I can. That means I need to optimize my work so that I can reliably, repeatably, and sustainably deliver code over a long period of time. My code needs to solve the problem that I am faced with, and it needs to fulfill the needs of my users and ambitions of my employers.
So, I need to create code that works, but I also need to sustain my ability to do so over time, repeatably and reliably. I need to maintain my ability to modify the code as I learn more about the problem that we are solving and the system that we are developing!*

**I don't feel this ownership from the teams. Why is that? Don't they feel that they have the permission to focus on quality? Or is it a lack of skill in knowing how to reach it?

---
Page: 218

*It is usually the developers that rule out quality, not the managers or organization. Managers and organizations want “better software faster,” not “worse software faster.” In reality, even that is not the trade-off. As we have already seen, the real trade off, over long periods of time, is between “better software faster” and “worse software slower.” “Better” goes hand in hand with “faster.” This is important for all of us to recognize and to believe. The most efficient software development teams are not fast because they discard quality but because they embrace it.*

**How does one make people understand this concept? Show them through examples? Talk about it? Force them to do something that will let them find it out themselves? 

---
Page: 220

*If we buy in to this fundamental philosophy that we must retain our ability to change our ideas, our teams, our code, or our technology, as we learn more, then nearly everything else that I talk about in this book follows on as a natural consequence.
Working in ways that leave the door open to us making a mistake and being able to correct it; deepening our understanding of the problem that we face and reflecting our new understanding in our design; evolving our products and technologies incrementally in the direction of success wherever, or whatever, that may be—these are all targets for good engineering in software.*

**This is true for building a company as well, in fact it's true for building anything that contains complexity. This is very reminiscent of lean thinking and design thinking. 

---
Page: 221

*One common approach to diagram-driven development is to use the diagram to generate source code. The idea here is to use the diagrams to create the broad structure of the code, and then the detail can be filled in, by hand, by a programmer. This strategy is pretty much doomed to failure by one difficult-to-solve problem. The problem is that you are almost always going to learn more as the development of any complex system evolves.
At some point, you will need to revisit some of your early thinking. This means that your first version of your diagram and so the skeleton structure of your system is wrong and will need to change as your understanding deepens. The ability to “round-trip” or create a skeleton for your code, modify the detail by hand, change your mind, regenerate the diagram from the code, modify it, but keep the detailed changes is a tricky problem. It is the hurdle at which all such efforts, so far, have fallen.*

**I feel that this may be true even for AI driven development. It's great for creating an initial draft but once it has started growing in complexity. Complexity grows while the usefulness of the low code tools remain the same, as such their impact diminishes.

---
Page: 224

*We are technologists. As a result, we share certain tendencies. One of those tendencies that we should be aware of, and guard against, is chasing “technically shiny ideas.” I am as guilty as anyone of being interested in technical ideas. This is part of the appeal of our discipline, the kind of learning that we value. However, if we are to be engineers, we must adopt a degree of pragmatism, skepticism even. Part of my definition for engineering, at the start of this book, included the phrase “within economic constraints.” We should always be thinking of the simplest route to success, not the coolest, not the one with the most tech that we can add to our CVs or résumés.
By all means, keep up-to-date with new ideas. Be aware of new technologies or approaches to our work, but always evaluate their use honestly in the context of the problem that you are trying to solve. If you are applying this tech, or idea, to learn if it is useful, then recognize that fact and carry out your exploration quickly and efficiently as trial, prototype, or experiment, not as the cornerstone of your new architecture on which the future of the company depends.
Be prepared to discard it if it doesn’t work out, and don’t risk the entire development on tech that looks cool!*

**A lot of us are stuck on technology choices instead of making the best with what we've got. We should care minimally about accidental complexity, yet when we talk about architecture that is what comes up the most. We should be able to build something great no matter the underlying database or whatever technology is being discussed. We should care about it when it has a great impact on our users or our business. 

---
Page: 226

*Most orgs have a usually small number of people “heroes”4 who are called on to “save the day” when things go wrong or who are called on for the tricky changes that need to be made. If you have a hero in your organization, she needs to be working to spread her knowledge and to work with others to make the system more understandable.
This is profoundly more valuable than the more usual firefighting that “heroes” more commonly undertake.*

**I have been guilty of doing this many times. Now I'm hoping that I can coach everyone to be more disciplined and collaborative in their thinking, and not try and save the day.

---
Page: 225

*As I have already said many times in this book, software is weird stuff. It is almost infinitely flexible and extremely fragile. We can create any construct that we want in software, but we run the risk of damaging that construct when we change it. The problem that people are trying to address when they over-engineer their solutions, by attempting to future-proof them, is that they are nervous of changing their code.*

**All code should be written with the expectation that it will be changed as we learn more. 

---
Page: 226

*To achieve this flat Cost of Change curve, we’d need an effective, efficient strategy for regression testing, which really means a wholly automated strategy for regression testing. Make a change, and run the tests so that you can see where you broke things!*

**How good is our quality? And is that what we're lacking or are we lacking more on the capabilities side? For example, is our alarms setup clear enough that we'd consider it a tool in our toolbox? 

---
Page: 229

*The “plain text” abstraction is an extremely powerful one, another extremely powerful abstraction is that of “files” in computing, brought to its height in the Unix model of computing in which everything is a file! We can connect logic to build up new, more complex systems, by “piping” files from the output of one module to the input of another. All of this is “made up” and is just a useful way of imagining and organizing what is really going on.
Abstractions are fundamental to our ability to deal with computers.
They are fundamental to our ability to understand and deal with the systems that we create to add value to our computers too. One way of looking at what it is that we do when we write software (and it is the only thing that we do in some ways) is to create new abstractions. The key is to create good ones.*

**I that sense every structured stream of ones and zeros is an abstraction over binary and its interpretation by a machine.  The ones and zeros are abstractions over the physics of the machine. 

---
Page: 231

*One take on this is that abstraction, all abstraction, is fundamentally about modeling. Our aim is to create a model of our problem that helps us to reason about it and helps us to do work. I like this quote from George Box:
All models are wrong, some models are useful.9 9 A quote from statistician George Box, though the idea is older. See https://bit.ly/2KWUgbY.
This is always the situation that we are in. However good our models, they are representations of truth, not the truth itself. Models can be enormously useful even when fundamentally untrue.
Our aim is not to achieve perfection but to achieve useful models that we can use as tools to solve problems.*

**What happens to systems when abstraction has been an afterthought? I guess it has an impact on the conceptual integrity. 

---
Page: 233

*One of the common arguments against unit testing, and sometimes against TDD too, is that the tests and the code become “locked together” and so everything becomes more difficult to change. This is much more a criticism of unit testing, where the tests are written after the code is complete. Inevitably, such tests are tightly coupled to the system under test, because they were written as tests rather than as specifications. TDD suffers less from this problem because we write the test (specification) first and so are led to abstract the problem, as I have described.*

**This answers the question whether writing tests after the fact is worse than writing them before.

---
Page: 234

*In general, our objective should be to retain our ability to change our mind about implementation, and as far as we can our design, without too much extra work. There is no fixed recipe here. This is the real skill of good software development, and it comes with practice and experience. We need to build up our instincts to be able to spot design choices that will limit our ability to change our minds later and that allow us to keep our options open.*

**Are there concrete metrics we can use to measure how good our design is from this perspective? Or is it a matter of feeling? Or can you start doing TDD for existing code, but even then is the feeling of quality just a feeling? 

---
Page: 234

*Modeling the problem domain will give your design some guide-rails.
This will allow you to achieve a natural for the problem domain separation of concerns as well as helping you, maybe even forcing you, to better understand the problem that you are attempting to solve. Techniques like event storming10 are a great starting point to mapping out the territory of a problem.*

**What other techniques are there?

---
Page: 237

*The cost to this abstraction, the leak that may get in the way of add_to_cart3 being the best choice, raises the question, what happens if the attempt to store fails? What happens if our database ran out of connections in the connection pool or our disk ran out of space or the network cable between our code and the database was dug up by accident?*

**Thinking about how things might go wrong is crucial for making informed trade-offs. Leaky abstractions are a great place to start poking. As soon as we have an abstraction, something is being hidden and that something may leak. 

---
Page: 240

*As soon as we allow third-party code into our code, we are coupled to it. In general, my preference and advice is to always insulate your code from third-party code with your own abstractions.
Some caveats before we proceed with this idea. Obviously, your programming language and its common supporting libraries are “third-party code” too. I am not suggesting that you write your own wrapper for Strings or Lists, so as usual my advice is a guideline rather than a hard-and-fast rule. However, I advise that you think carefully about what you allow “inside” your code. My default position is that I will allow language concepts and libraries that are standard, but not any third-party libraries that don’t come with my language.
Any third-party libraries that I use will be accessed through my own facade or adapter that will abstract, and so simplify, my interface to it and provide a usually pretty simple layer of insulation between my code and the code in the library. For this reason I tend to be wary of all-encompassing frameworks that try to impose their programming model on me.*

**How does one avoid letting 3rd party libraries and APIs sneak into your code? Is discipline and knowledge the only tool we have?

---
Page: 240

*Even in the trivial example we have been looking at here, add_to_cart2 presents an abstraction that makes sense in the context of my implementation of storage. I can provide a version that is in essence the block of code implementing storage in sqlite3 from add_to_store1, but I can also write a completely different kind of store, without needing to modify the add_to_cart2 implementation in any way. I could use the same code in different scenarios, and I could even write some kind of composite version of store that stored my items in multiple places if the need arose.*

**I believe that this is the eye-opener that makes people want to learn more about interfaces and abstraction. Doing dramatic implementation changes while letting the core remain pure and untouched. 

---
Page: 244

*In general, though, by far the most common way for developers and teams to make a big mistake is in the direction of overly tight coupling.
There are costs to “too loose coupling,” but they are generally much lower costs than the costs of “too tight coupling.” So, in general, we should aim to prefer looser coupling over tighter coupling, but also to understand the trade-offs that we make when we make that choice.*

**Coupling points are important, they are what makes the system work. We just need very clean coupling points that maximizes leverage and don't turn into knots that are impossible to untangle.

---
Page: 244

*The reason for this is coupling! If your team and my team are developmentally coupled, we could maybe work to coordinate our releases. We could imagine tracking changes, and each time I change my code, you are informed of it in some way. That may work for a very small number of people and teams, but it quickly gets out of hand. The overhead of keeping everyone in step rapidly spirals out of control.*

**We're at the limit of this right now. One more team will require us to decouple our deployments somehow.

---
Page: 247

*There is a cost to this decoupling. The service itself needs to be designed to be more flexible in the face of change with its collaborators. We need to adopt design strategies that insulate our service from change in other places. We need to break developmental coupling so that we can work independently of one another. This cost is the reason that microservice may be the wrong choice if you don’t need to scale up your team.
Independent deployability comes at a cost, like everything else. The cost is that we need to design our service to be better abstracted, better insulated, and so more loosely coupled in its interactions with other services. There are a variety of techniques that we can use to achieve this, but all of them add to the complexity of our service and so to the scale of the design challenge that we undertake.*

**What patterns are good to use for this? How does one keep performance good? How does one actually understand the fitness of the system and all of its capabilities? Is it impossible? 

---
Page: 249

*We should optimize for thinking, not for typing!*

**Think about the nature of coding. We're taking thought stuff and turning it into reality. Our approach should have clarity of mind baked into it. 

---
Page: 252

*The trick is to draw the seams of abstraction so that high-performance parts of the system fall on one side of that line or another and so that they are cohesive, accepting that the transition from one service, or one module, to another will incur additional costs.
These interfaces between services prefer looser coupling to the extent that each service hides details from another. These interfaces are more significant points in the design of your system and so should be treated with more care and allowed to come at a little higher cost in terms of runtime overhead as well as lines of code. This is an acceptable trade-off and a valuable step toward more modular, more flexible systems.*

**What parts of our system are performance critical? I'd say we're already missing our performance marks, what would happen if we'd reduce coupling and decrease our performance? 

---
Page: 254

*So, if our pipeline says all is good, we can release; that gives us a sensible scope to use for DRY. DRY should be the guiding principle within the scope of a deployment pipeline, but should be actively avoided between pipelines.
So if you are creating a microservice-based system, with each service being independently deployable, and so each service having its own deployment pipeline, you should not apply DRY between microservices.
Don’t share code between microservices.*

**The point of microservices is the decoupling it can provide. Chaining services together by for example a shared library is counterproductive. 

---
Page: 257

*This chapter is about coupling, not asynchronous programming or design.
My intent here is not to convince you of the merits of asynchronous programming, though there are many, but rather to use it as an example to show that by smart use of the ideas of reducing coupling, in this case between the accidental complexity of networks and remote comms and the essential complexity of the business functions of my services, then I can write one piece of code that works when the system is working well and when it is not. This is a well-engineered answer to a particular class of problem.*

**Changing abstractions changes the worldview for your local piece of code. The worldview doesn't have to be a precise mapping of the problem but it needs to be fit for purpose. Humans perspective of the world is a far cry from the underlying reality but it's extremely useful for the survival. 

---
Page: 260

*If your team and mine can make progress without needing to coordinate our activities, the “State of DevOps” reports say that we are more likely to be supplying high-quality code more regularly.
We can achieve this in three ways. We can work with more coupled code and systems but through continuous integration and continuous delivery get fast enough feedback to identify problems quickly. We can design more decoupled systems that we can safely, with confidence, change without forcing change on others. Or we can work with interfaces that have been agreed on and fixed so that we never change them. These are really the only strategies available.
You ignore the costs of coupling, both in your software and in your organization, at your peril.*

**The way that we're doing it right now is the first path. We tried to transition half-heartedely but quickly realized that the middleway indeed was worse.

---
Page: 266

*There are four categories of learning relevant at the point where we are about to write some code:
• “Are we solving the right problem?”
• “Does our solution work as we think?”
• “What is the quality of our work?”
• “Are we working efficiently?”
These are certainly complex questions to answer, but fundamentally that is all that we are interested in when we develop software.*

**How do we create the tools, the environment and the processes so that we can answer those questions efficiently and accurately? 

---
Page: 265

*Instead of crossing our fingers and hoping that our code works, we should probably do some form of evaluation before we release changes into production. There are a few different ways that we could organize that.
If we have waited until we thought we were finished, that is clearly not giving us high-quality, timely feedback. We will have probably forgotten all the little nuances of what we did, and so our testing will be somewhat cursory. It is also going to be quite the chore.
At this point, many organizations decide to hire some other people to do that chore for us. Now we are back to square one, hostages to fortune, guessing that our software will probably work and relying on some other people to tell us that it didn’t. This is certainly a step forward compared to waiting to hear the wails of our users in production, but it is still a low-quality outcome.
Adding separate steps into the process, in the form of separate groups of people, does not improve the speed or quality of the feedback that we can collect. This is not criticism of the people involved; all people are too slow, too variable in what they do, and too expensive to rival an automated approach to gathering the feedback that we need.
We are also going to receive this feedback too late and so have no idea of how good or bad our software is while we are developing it.
This means we will miss out on the valuable learning opportunities that we could have benefited from if the feedback had been more timely. Instead, we wait until we think that we are finished and then get low-quality, slow feedback from people, however skilled and however diligent they are, who don’t know the inner workings of a system that wasn’t designed with testing in mind.*

**This is a great argument for testing while coding. Although I'd say it's not entirely true that code doesn't get tested at all until the end if you don't do TDD. People usually do small local iterations where they manually test each change by running the code. Of course that's a extremely unreliable way of doing it.

---
Page: 270

*The FakeEngine in our example demonstrates another important idea, that of measurement points. If we want our code to be testable, what that means is that we need to be able to control the variables. We want to be able to inject precisely the information that we need and only that information. To get out software into a state where we can test it, we invoke some behavior, and then we need the results to be visible and measurable.*

**How does one create useful measurement points when coding a UI? Unrelated to this, how can game developers be so extremely productive? They are masters at creating tools and frameworks to help them go faster. The whole game engine concept allows them to compound productivity gains. 

---
Page: 271

*The obvious answer to this problem is to design our systems so that these “edges” in our code are pushed to the margins and minimized in their complexity. This is really about reducing the coupling of the bulk of the system with respect to these edges. This, in turn, reduces our dependence on third-party software elements and so leaves our code more flexible, for little extra work.*

**Could one solve the UI test measurement problem by moving all logic to the backend? 

---
Page: 274

*I have met lots of teams that have told me that “We tried TDD, and it didn’t work,” but what all of the groups that I have met meant when they said that was that they had tried writing unit tests after they had written the code. This is not the same thing by a long margin.
The difference is that TDD encourages the design of testable code and unit testing does not. Unit testing, after the code is written, encourages us to cut corners, break encapsulation, and tightly couple our test to the code that we already wrote.*

**How do we make the culture shift necessary to become better engineers?

---
Page: 278

*This discipline says something important. It defines deployability as there being “no more work to do,” and that means to achieve a deployable outcome, we must take the ideas of modularity, cohesion, separation of concerns, coupling, and information hiding seriously at the level of deployable units of software.
The scope of our evaluation should always be an independently deployable unit of software. If we can’t confidently release our change into production without further work, then our unit of evaluation, the scope of our deployment pipeline, is incorrect.
There are a variety of ways to approach this. We can choose to include everything in our system within the scope of evaluation, within the scope of our deployment pipeline, or we can choose to decompose our system into independently deployable units of software, but nothing else makes sense.
We can organize multiple components of our system to be built in separate places, from separate repos, but the scope of evaluation is driven by the demands of deployability. So if we choose this path and feel it essential that we must evaluate these components together before release, then the scope of evaluation, the scope of the deployment pipeline, is still the whole system! This is important because however fast the evaluation of a small part of the system, it is the time it takes to evaluate the deployability of a change that really matters. So this is the scope that should be the target for our optimization.*

**Deployability is an emergent property of the design of the system. You can have many separate repositories but even though their individual pipeline passes it's still not deployable because you need to run another repository's pipeline as well. 

---
Page: 280

*We want the tests that we create to give precisely the same results every time that we run them for the same version of the software under test. If test results vary, then we should work to exert greater control, to better isolate the test from outside influences, or to improve the determinism in our code. Modularity and cohesion, separation of concerns, abstraction, and coupling are yet again key ideas in allowing us to exert this control.*

**A mistake we made here is to couple or tests directly to the workings of the blockchain. 

---
Page: 286

*This is a simple model for software engineering, but one that it is difficult to apply.
It is simple in that there are ten fundamental ideas in two groups and then a few tools like testability, deployability, speed, controlling the variables, and continuous delivery that can help us to achieve those fundamentals, and that is all that there is. However, the implications of these ten things are often thought-provoking and complex so that can make them difficult to apply.*

**What can we take from this framework and adapt to our own context?

---
Page: 287

*Engineering is the application of an empirical, scientific approach to finding efficient, economic solutions to practical problems.
Engineering is empirical, in that we are not attempting to apply science to the degree that we expect perfect results every time (actually science doesn’t work like that either; it just strives to approach it).
Engineering is about making rationally informed decisions, often with incomplete information, and then seeing how our ideas play out in reality based on the feedback that we gather from real-world experience.
It is based on a scientific style of reasoning. We want to measure what we can sensibly measure. Take an experimental approach to making changes. Control the variables so that we can understand the impact of our changes. Develop and maintain a model, a hypothesis, against which we can continually evaluate our understanding as that understanding grows.
It is important that the solutions that we find and the way in which we work to achieve them should be efficient.*

**Is there a reason that the field so far hadn't converged on engineering discipline? Is it a lack of ideas or tools? Is it too hard and needs to become easier? Is there a critical threshold where, now we have these ideas, tools and people so now the general approach we take is engineering instead of craftsmanship? 

---
Page: 290

*As with any other information system, managing the coupling within our organizations is one of the keys to success. In the same way that this is true for software, it is also true for organizations. Modular, cohesive organizations with a sensible separation of concerns and teams that are abstracted in a way that allows them to hide information from other parts of the organization are more scalable and more efficient than highly coupled groups that can make progress only in lock-step.*

**How does one deal with alignment among a set of decoupled groups of people? It's in the interface? Are interfaces really a good idea for managing people?

---
Page: 293

*More deeply than this, the ideas that we can take from science, the ideas that continuous delivery is founded upon, are the most durable of all.
• Characterize: Make an observation of the current state.
• Hypothesize: Create a description, a theory that may explain your observation.
• Predict: Make a prediction based on your hypothesis.
• Experiment: Test your prediction.
To make sense of what we learn from this approach, we must control the variables. We can do this in a few different ways. We can work in small steps so that we can understand the impact of each step. Exercise complete control over the configuration of our systems and limit the scope of change with the techniques of managing complexity that we have discussed.
This is what I mean by engineering—the ideas, methods, and tools that give us a demonstrably higher chance of success.
You may not be able to hit the feedback targets that I generally recommend, but you can use them as a target and work toward them within physical, or maybe economic, constraints.*

**Can this be applied to organizations and management as well? What would it look like to be a collaboration engineer?

---
Page: 297

*This is what we should expect from a real engineering process. It will not give us the answers, but it will provide us with an approach that guides us toward better answers.*

**Focusing on outcomes, capabilities and principles, we're better able to adapt to the situation at hand rather than face enormous friction by using tools and processes that are not well-suited to deal with the problem you have.
