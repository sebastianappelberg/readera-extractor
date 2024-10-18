# An Elegant Puzzle by Will Larson

Finished at: -
Last read at: 2023-09-10

## Comments

Page: 30

*An important property of teams is that they abstract the complexities of the individuals that compose them. Teams with fewer than four individuals are a sufficiently leaky abstraction that they function indistinguishably from individuals. To reason about a small team’s delivery, you’ll have to know about each on-call shift, vacation, and interruption.
They are also fragile, with one departure easily moving them from innovation back into toiling to maintain technical debt.*

**A team is an emergent property of a collection of individuals. 

---
Page: 31

*Fitting together those guiding principles, the playbook that I’ve developed is surprisingly simple and effective:
Teams should be six to eight during steady state.
To create a new team, grow an existing team to eight to ten, and then bud into two teams of four or five.
Never create empty teams.
Never leave managers supporting more than eight individuals.
Like all guidelines, this is a structure to aid thinking through sizing problems, not a straitjacket to restrict every exception. The context of any situation deserves careful examination, but increasingly I’ve found that the long-term costs of exceptions outweigh what I once considered their strengths.*

**This is it, this is how we'll grow our teams. The mechanics for how is up to us.

---
Page: 36

*I can’t stress enough that these fixes are slow. This is because systems accumulate months or years of static, and you have to drain that all away. Conversely, the same properties that make these fixes slow to fix make them extremely durable once in effect!*

**What if we're systematically setup to fail? What if simply adding more bodies will create a phase shift? Like the way that a team isn't really a team until it has more than 4 people in it. 

---
Page: 42

*Sometimes you will want to grow faster than a gelled team allows, and that’s okay! The lesson is that you have to account for re-gelling costs after periods of change, not that you should never change them. This is part of why my proposed model recommends rapidly hiring into teams loaded down by technical debt, not into innovating teams, which avoids incurring re-gelling costs on high-performing teams.*

**This reminds me of the concept of differentiating between workloads as described by Don Reinertsen. 

---
Page: 45

*Shifting scope works better than moving people because it avoids re-gelling costs, and it preserves system behavior. Preserving behavior keeps your existing mental model intact, and if it doesn’t work out, you can always revert a workload change with less disruption than would be caused by a staffing change.*

**How do you measure whether a team has slack or not? I do see shifting scope around in the organization as a way of clearing bottlenecks, but you need to know if it needs shifting and where it can be shifted to.

---
Page: 45

*The other approach that I’ve seen work well is to rotate individuals for a fixed period into an area that needs help. The fixed duration allows them to retain their identity and membership in their current team, giving their full focus to helping out, rather than splitting their focus between performing the work and finding membership in the new team. This is also a safe way to measure how much slack the team really has!*

**There are so many ways to be flexible in dealing with work items flowing through a system.

---
Page: 47

*All real-world systems have some degree of inherent self-healing properties: an overloaded database will slow down enough that someone fixes it, and overwhelmed employees will get slow at finishing work until someone finds a way to help.*

**An organization is a complex adaptive system. How do you promote the good qualities of such a system and mitigate the chaos?

---
Page: 51

*Although it’s rarely quite this extreme, this is where the oft-raised concern that “hiring is slowing us down” comes from: at high enough rates, the marginal added value of hiring gets very slow, especially if your training process is weak.
Sometimes very low means negative!*

**This entire chapter is a good reminder that sometimes less is more.

---
Page: 55

*One specific tool that I’ve found extremely helpful here is an ownership registry, which allows you to look up who owns what, eliminating the frequent “Who owns X?” variety of question.
You’ll need this sort of thing to automate paging the right on-call rotation, so you might as well get two useful tools out of it!*

**Could we do this per domain? Domains are not evenly sized, though we could probably give several smaller ones to someone.

---
Page: 57

*There are some cases in which gatekeepers are necessary for legal or compliance reasons, or because a system is deeply frail, but I think that we should generally treat gatekeeping as a significant implementation bug rather than as a stability feature to be emulated.*

**What should the responsibility of code owners be, if we don't want them to end up as gatekeepers?

---
Page: 57

*Along these lines, if you can keep your interfaces generic, then you are able to skip the migration phase of system re-implementation, which tends to be the longest and trickiest phase, and you can iterate much more quickly and maintain fewer concurrent versions. There is absolutely a cost to maintaining this extra layer of indirection, but if you’ve already rewritten a system twice, take the time to abstract the interface as part of the third rewrite and thank yourself later. (By the time you’d do the fourth rewrite, you’d be dealing with migrating six times as many engineers.)*

**What's overengineering and what's just good design? I guess it falls over to overengineering when the flexibility itself is more costly than useful.

---
Page: 58

*It’s my sense that managing rapid growth is more along the lines of stacking small wins than identifying silver bullets.*

**You only gain value from an initiative once it's finished. If you don't want to go out of breath you need to chunk up improvements in small bites. Each bite should pack a punch.

---
Page: 60

*Typically, my organizational philosophy is to stabilize team-by-team and organization-by-organization. Ensuring any given area is well on the path to health before moving my focus. I try not to push risks onto teams that are functioning well. You do need to delegate some risks, but generally I think it’s best to only delegate solvable risk. If something simply isn’t likely to go well, I think it’s best to hold the bag yourself. You may be the best suited to manage the risk, but you’re almost certainly the best positioned to take responsibility.*

**Teams tend to be robust but not anti-fragile, which means that like an elastic band they'll snap at a certain point but deal well with small shocks. How does one make a team anti-fragile? It almost has to be dealt with from outside the team itself, a kind of meta capability. 

---
Page: 62

*Succession planning is thinking through how the organization would function without you, documenting those gaps, and starting to fill them in. It’s awkward enough to talk about that it doesn’t get much discussion, but it’s a foundational skill for building an enduring organization.*

**Ever since I read "Turn the Ship Around!" I have liked the notion of strengthening your team and organization so much that they can fend for themselves. It's the ultimate receipt of success. 

---
Page: 65

*This isn’t a one-time tool, but rather a great exercise to run once a year to identify things you could be delegating. This helps nurture an enduring organization, and also frees up time for you to continue growing into a larger role as well. You can even get a sense of how well you’re doing by taking a two- or three-week vacation and seeing what slips through the cracks.
Those items can be the start of next year’s list!*

**I had this experience when we had a quarterly meet up where we booked meetings that ran through the entire week.

---
Page: 73

*Linking these pieces together, we see a feedback loop, in which the system’s downstream behavior impacts its upstream behavior. With a sufficiently high defect rate or slow recovery rate, you could easily see a world where each deploy leaves you even further behind.*

**Systems thinking is an additional way to view the world, it's complimentary to whatever other model you're using. Complexity theory is another view. 

---
Page: 78

*Cohorts. What is hiding behind your clean distributions?
Exploring your data for the cohorts hidden behind top-level analysis is an effective way to discover new kinds of users with surprising needs.*

**We've defined what our power users are, can we find more interesting cohorts if we dig deeper?

---
Page: 79

*Compounding leverage. What are the composable blocks you could start building today that would compound into major product or technical leverage  over time? I think of this category of work as finding ways to get the benefit at least twice. These are potentially tasks that initially don’t seem important enough to prioritize, but whose compounding value makes the work possible to prioritize*

**Mid-term to long-term thinking. To build something great there are stepping stones that may not be very interesting. 

---
Page: 82

*As an aside, I’ve found that most aspects of running a successful technology migration overlap with good solution validation!*

**Design thinking is about being good at solving problems. This chapter applies to solving internal problems too.

---
Page: 84

*What I needed was a way to coordinate my approach across teams, both in terms of very specific challenges and in terms of our long-term direction. After experimenting with a handful of different approaches, agreeing on strategy and vision has been the most effective approach that I’ve found to alignment at scale.*

**We're still not using this tool. I think we get by because we're small still, but it would still be useful and it would make our lives easier in the long term.

---
Page: 88

*Because strategies are specific to a given problem, it’s okay—and even encouraged—to write quite a few of them. Over the past year, I’ve worked with people on strategies for how we partner with other teams, how we manage end-to-end API latency, and how we manage infrastructure costs.  I’ve also peered over others’ shoulders as they worked on quite a few more ideas. The act of writing a strategy leads folks through a systematic analysis, so, even if we don’t share them, writing these documents helps us work through quite a few challenges, both overwhelming and mundane.
15 People sometimes describe strategy as artful or sophisticated, but I’ve found that the hardest part of writing a good strategy is pretty mundane. You must be honest about the constraints that are making the challenge difficult, which almost always include people and organizational aspects that are uncomfortable to acknowledge. No extent of artistry can solve a problem that you’re unwilling to admit.*

**I hadn't really thought of strategy as a commodity, something that we can have lots of. I like the idea of just using it as a tool for understanding. And the part about the courage needed makes me think of my definition of leadership, where a big part of it is about the willingness to drive through change even if it's tough.

---
Page: 91

*Put all these pieces together, and you’ve crafted a document that is a guiding hand to align decisions yet still creates room for teams to make their own choices and trade-offs along the way.
You’ll know a vision is succeeding when people reference the document to make their own decisions, and you’ll know it’s struggling when decisions keep happening that don’t fit into its direction.*

**Usage is always a good measure of some sort of success. If we would put down architectural principles and people would constantly refer to them then that'd be a success. If we would write documentation that people constantly made use of then that'd be a success. 

---
Page: 92

*Like other leadership tools, a vision or strategy document is a solution to a specific set of problems, and it’s not always useful. If your team is aligned and doing good work, time spent writing these probably won’t be too valuable.
However, if your team is struggling to align with stakeholders, or if you’re struggling to lead a cohesive organization, these documents are exceptionally useful, fairly quick to write as you gain practice, and low risk (at worst, they get ignored).*

**Maybe a vision isn't necessary at the moment. If we had it, how would things change? What problems would it solve? 

---
Page: 93

*Good goals are a composition of four specific kinds of numbers:
?. A target states where you want to reach.
?. A baseline identifies where you are today.
?. A trend describes the current velocity.
?. A time frame sets bounds for the change.
Put these all together, and a well-structured goal takes the form of: “In Q3, we will reduce time to render our frontpage from 600ms (p95) to 300ms (p95). In Q2, render time increased from 500ms to 600ms.”*

**I like adding the baseline, it gives you context.

---
Page: 95

*Baseline metrics are useful for narrowing the solution space that you explore in order to accomplish your investment goals. They are also useful for identifying when you should pause pursuing your goals and instead invest in platform quality. For example, if you were making excellent progress toward launching a new feature but site stability has regressed below your baselines, this framework provides a structure to trigger rebalancing your priorities.
Although your baselines will often be about preserving a current property, you can also decide to accept some degradation before you want to trigger reprioritization. Perhaps you’re okay with costs increasing by 10 percent as long as your investment goals are accomplished. This kind of upfront clarity around trade-offs can be quite powerful.*

**Finding a good balance has to be driven by feedback from the system. Goals will always have unintended consequences, you need to find a homeostasis that moves towards the right direction.

---
Page: 97

*When you’re asked to take responsibility for a company’s overall infrastructure costs, you’re going to start from a goal along the lines of “Maintain infrastructure costs at their current percentage of net revenue of 30 percent.” (That percentage is a fictional number for this example’s purposes, since the percentage will depend on your industry and maturity, but I have found that tying 18 19 20 it against net revenue is more useful than pinning it at a specific dollar amount.)*

**I've been struggling to come up with a way of knowing what costs make sense for AWS, etc. Tying it to net revenue seems like a good idea. 

---
Page: 99

*What I’ve found effective is to send push notifications, typically email, to teams whose metric has changed recently, both in terms of absolute change and in terms of their benchmarked performance against their cohort. This ensures that each time you push information to a team, it includes important information that they should act on! What’s so powerful about nudges is that simply letting folks know their behavior has changed will typically stir them to action, and it doesn’t require any sort of organizational authority to do so.*

**Cost management is pretty easy to nudge people on but how about meeting deadlines, meeting goals, and other stuff? With the metrics we post every week in slack about the user numbers, it feels like it doesn't nudge anyone in any way.

---
Page: 100

*The next step is to work with the key teams to agree on baseline metrics for their performance. This is useful because it ensures that the baselines are top-of-mind, and it also gives them a powerful tool for negotiating priorities with their stakeholders.*

**I never thought of goal metrics as a power tool for the people responsible for the goal metrics, but of course it gives them the ability to say no to stuff that doesn't align with their goals.

---
Page: 103

*Migrations are both essential and frustratingly frequent as your codebase ages and your business grows: most tools and processes only support about one order of magnitude of growth before becoming ineffective, so rapid growth makes migrations a way of life. This isn’t because you have bad processes or poor tools—quite the opposite. The fact that something stops working at significantly increased scale is a sign that it was designed appropriately to the previous constraints rather than being over-designed.*

**We should start embracing migrations. Recognize them for what they are, just the next step in an infinite journey. Eventually you'll plateau and then you can start optimizing the shit out of what you have, which is the final migration. Though if you have a business that doesn't want to die in a dynamic ecosystem of competitors you will never reach a place where you can rest for too long.

---
Page: 107

*Start by stopping the bleeding, which is ensuring that all newly written code uses the new approach. That can be installing a ratchet in your linters,  or updating your documentation and self-service tooling. This is always the first step, because it turns time into your friend. Instead of falling behind by default, you’re now making progress by default.*

**This technique can be applied even for smaller issues. It's a systematic shift, which over time puts the system in order.

---
Page: 122

*The hardest bit is that most folks are always at the furthest point in their career, each change a step into the unknown, with limited visibility into the upcoming opportunities that their company can provide.*

**This characterizes any kind of way of being at the edge. It's a different mode of operating.

---
Page: 124

*With all of this in mind, take an hour and write up as many goals as you can for what you’d like to accomplish in the next one to five years. Then prioritize the list, pick a few that you’d like to focus on for the next three to six months, and share it with your manager at your next one-on-one.*

**Do our people know where they want to be in the future? Is it wrong to just let opportunities happen instead of pursuing them?

---
Page: 125

*Managers tend to have a strong sense of the business’s needs, and that gives them the superpower of finding the intersection of your interests and the business’s priorities. That translation is a creative pursuit, so don’t leave this entirely to your manager:
participate as well! Brainstorm projects, research how folks at other companies have pursued similar goals, and educate your manager on aspects of your goals that they don’t know much about. (For example, engineers often have more conference speaking experience than engineering managers do.)*

**Most interactions should be collaborative in my opinion. It's just a way of saying that everybody participates and plays out their perspective to the fullest. 

---
Page: 134

*A positive freedom is the freedom to do something, for example the freedom to pick a programming language you prefer. A negative freedom is the freedom from things happening to you, for example the freedom not to be obligated to support additional programming languages, even if others would greatly prefer them.*

**Depending on how prone people are for chaos versus order they are on different sides of the isle in most cases.

---
Page: 152

*When I first started facilitating the group, we focused on content-rich presentations. Each slide was dense with important lessons and essential details. It didn’t work well. Folks weren’t engaged.
Attendance dropped. Learning was not the order of the day.*

**This is the exact issue I feel when I hold a monolog for the entire meeting.

---
Page: 162

*These are good examples of constraints because they clearly constrain allowed behaviors. You could imagine less opinionated constraints, such as “folks in an office should prefer working on teams within that office,” but that would do less to constrain behavior.
If you find yourself writing constraints that don’t actually constrain choice, it’s useful to check if you’re dancing around an unstated goal that’s limiting your options. For example, in the above, you might have an unstated goal that an employee pursuing their preferred work is more important than offices being first-tier, which would lead you toward weak constraint.
The fixed cost of creating and maintaining a policy is high enough that I generally don’t recommend writing policies that do little to constrain behavior. In fact, that’s a useful definition of bad policy.
In such cases, I instead recommend writing norms, which provide nonbinding recommendations. Because they’re nonbinding, they don’t require escalations to address ambiguities or edge cases.*

**I'm never direct or constraining when I want to encourage behavior. I'm starting to think that it's just creating confusion and in a way less freedom due to the mudiness.

---
Page: 164

*When you roll out a policy, it’s quite helpful to declare a future time when you’ll refresh it, which ensures that you’ll have the time to fully evaluate your new policy before attempting revision. It’s fairly common for folks to modify good, effective policy due to concerns that arise before the policy has had time to show its effect. At a sufficiently high rate of change, policy is indistinguishable from exception.*

**Some changes need to have time to marinate, it sets an upper limit on how fast you can iterate on it. The slowness is why there can be an urge to overengineer it before rolling it out, but just take a long-term view of it and make improvements based on feedback the normal case and not the exception. 

---
Page: 167

*Folks who communicate a no effectively are not the firmest speakers, nor do they make frequent use of the word itself. They are able to convincingly explain their team’s constraints and articulate why the proposed path is either unattainable or undesirable.*

**Good communication is not all about articulating, it's also about repetition and story.

---
Page: 168

*I’ve found it useful to borrow the approach of a sampling profiler: for a week, check what your team is working on at a few random moments across the day, and use that as an approximation of how time is being spent.*

**How does one use sampling in an efficient way? Ideally you do 20% of the usual data collection and get 80% fidelity on your results.

---
Page: 169

*What I’ve found effective is to blend 3 4 existing planning artifacts (typically quarterly/annual plans) and your tickets into a list, and then test it against your most important stakeholders. Keep asking those who routinely have dependencies on your team, “Does this seem like the right list of tasks?” The result will be a fairly accurate artifact.*

**Definitely something I could use for our backend prioritization framework. 

---
Page: 175

*As a leader, you can’t run from problems; engage ’em head-on.*

**I've found this to be true on so many occasions. It's about putting your head down and marching forward. You always get a little bit of rest in between the storms.

---
Page: 175

*Lately, I’ve come to have something of a mantra for guiding decisionmaking: do the right thing for the company, the right thing for the team, and the right thing for yourself, in that order.
This is pretty obvious on some levels, but I’ve found it to be a useful thinking aid.*

**Putting the company first gives you the same benefits as working for something greater than yourself, it's a great aligner. 

---
Page: 177

*As a final thought, the best management philosophy never stands still, but—in the model of the Hegelian dialectic —continues to evolve as it comes in contact with reality. The worst theory of management is to not have one at all, but the second worst is one that doesn’t change.*

**Change is everything. Error correction is the kind of change we want because then we're always sure to move in the right direction. 

---
Page: 179

*Finally, I think it’s important to recognize to recognize that, in the growth plates, you are focused on surviving to the next round, which might be a different growth challenge, or might be the team stabilizing. It is extremely hard to consistently do the basics well in these circumstances, because you simply won’t have enough time to do them well. You’ll have to get comfortable doing as well as time constraints allow, and sometimes that will lead to being mediocre at things you’re passionate about. I personally find that I shift into working on the system, and—embarrassingly and unfortunately—tend to cut down on many facets of people management.*

**Falling back into comfort zones can be lethal to your own success as a leader. However as a leader you should try to create an environment that maximizes the comfort zone moments for people, as well as the uncomfort zone moments that spur growth. 

---
Page: 185

*Authority lets you get away with weak arguments and poor justifications, but it’s a pretty expensive way to work with people, because they’ll eventually turn off their minds and simply follow orders—if they’re in a complicated compensation or life situation, that is. Otherwise, they’ll just leave.*

**So how does one deal with this? How do you know that your arguments are weak if nobody calls you out on it?

---
Page: 186

*Only see the problems. It can be easy to only see what’s going wrong, and forget to celebrate the good stuff. Down this path lie frustration and madness.*

**Problems are always more interesting to me. How should I start celebrating successes?

---
Page: 188

*What your professional goals and growth areas are. Where you are between bored and challenged.*

**Some people are really good at telling me this without asking. For the others I have to start asking. 

---
Page: 189

*Is there anything you can do to help? This is particularly valuable for managers who don’t have strong delegation instincts.*

**People have naturally started doing this with me.

---
Page: 189

*This leads to the other key aspect of managing up: knowing some things about your manager and their needs.*

**This whole chapter would be good to share with all employees. We need to build them up so they can check management and keep them honest.

---
Page: 196

*The first step to setting direction is to cast the widest possible net for ideas. Talk to folks at your company who have worked at different kinds of companies, and ask what those companies did really well. Talk to your team and see if there are ideas to draw out that they’ve been noodling on but haven’t yet volunteered. Read some new technical papers.  Meet with peer companies and ask them what they’re focused on. Do the same with the Googles/Facebooks and the smallest, most interesting companies.*

**Who do I talk to? How do build my network?

---
Page: 204

*The basis: an inclusive organization is one in which individuals have access to opportunity and membership. Opportunity is having access to professional success and development. Membership is participating as a version of themselves that they feel comfortable with.*

**It's hard for me to see how this is not the base case, always.

---
Page: 205

*The most effective way to provide opportunity to the members of your organization is through the structured application of good process. Good process is as lightweight as possible, while being rigorous enough to consistently work. Structure application allows folks to learn how the processes work, and lets them build trust by watching the consistent, repeated application of those processes.*

**How does one cut down process to its bare bones?

---
Page: 216

*The members of such a team have shifted their first team from the folks they support to their peers. While these teams are rare, I’ve come to believe that supporting their creation is simple—albeit hard—work, and when the conditions are fostered, they lead to an exceptionally rewarding work environment.*

**I want this for my team of engineering managers. 

---
Page: 218

*Your peers can only provide excellent feedback if they’re aware of your work and are thinking about your work similarly to how you are. Likewise, as you’re thinking about your peers’ work, you’ll be able to learn from how they approach it differently than you anticipate. Soon, your team’s rate of learning will be the sum of everyone’s challenges, no longer restricted to just your own experiences.*

**I'm too secretive about my plans and the way I do things. Some of it is rooted in that I'm putting together plans that are at the edge of my abilities and thus it's hard for me to articulate them well. And it also brings a certain level of insecurity. Another reason is selfishness, I don't want someone to steal my awesome ideas.

---
Page: 220

*Can they present a compelling, energizing vision of the future state of their team and its scope?*

**Can I do this? Sometimes it's like I don't think I deserve to uther grandiose things. 

---
Page: 222

*Know that internal processes are awkward. You’ll have many internal candidates. They will talk to each other. They will interview external candidates for a role they are applying for themselves. One candidate may end up managing the others.
Don’t decide to avoid this morass of awkwardness. You can’t.
You’re deferring it until later. It’ll still be awkward, but now awkwardly in the realm of gossip.
Running this process, and enduring the awkwardness in doing so, is the most rewarding thing I’ve done as a manager. I recommend it.*

**Vulnerability and daring greatly is common among successful leaders. 

---
Page: 225

*A few closing tangents. First, Tom DeMarco’s Slack  has an excellent suggestion for a good starting state between positive and negative freedoms for engineering teams: generally follow the standard operating procedure (i.e., keep doing what you’re already doing, the way you’re doing it), but always change exactly one thing for each new project. Perhaps use a new database, a new web server, a different templating language, a static JavaScript front-end, whatever—but always change exactly one thing.*

**This is a great tech debt management tip. 

---
Page: 224

*Further down the road, if the structure loses its luster, the economy shifts around us, or entropy’s endless march throws a wrench into the machinery, then once again we shift toward positive freedoms, which gives the organization a greater chance to successfully adapt to its new circumstances.
Using the two together, management slowly decelerates to keep the good times rolling, and accelerates to help push through challenging periods.*

**Like a helix we cycle through the same opposing concepts but we are still moving forward, rather we're able to move forward successfully because of the pendulum swings. 

---
Page: 229

*Stocks and flows are especially valuable in understanding the failure of projects and teams. Projects fall behind one sprint at a time. Technical debt strangles projects over months.
Projects fail slowly—and fixing them takes time, too.
Working at a frenetic pace for a couple of weeks or a month may feel like a major outpouring of effort and energy, but it’s near impossible to quickly counteract a deficit created over months of poor implementation or management choices.
If hard work and breeding heroes doesn’t work, what does?*

**There's no such thing as a free lunch and quick fixes are doomed to fail. They end up the same way fentanyl addiction does. 

---
Page: 230

*Projects fail all the time, people screw up all the time. Usually it’s by failing to acknowledge missteps that we exacerbate them. If we acknowledge errors quickly, and cut our losses on bad decisions before burning ourselves out, then we can learn from our mistakes and improve.
Kill your heroes and stop doing it harder. Don’t trap yourself in your mistakes, learn from them and move forward.*

**This is good advice for all decisions that take a while to unfold. 
