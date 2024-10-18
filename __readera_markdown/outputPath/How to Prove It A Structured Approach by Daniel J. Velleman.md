# How to Prove It A Structured Approach by Daniel J. Velleman

Finished at: -
Last read at: 2024-04-10

## Comments

Page: 14

*Before we can give an example of a proof involving prime numbers, we need to find something to prove – some fact about prime numbers whose correctness can be verified with a proof. Sometimes you can find interesting patterns in mathematics just by trying out a calculation on a few numbers.*

**Mathematics needs a certain playfulness. You need to be curious about possibilities and you need to have the courage to explore the fully. 

---
Page: 16

*Do you think that Conjecture 2 is correct? Having found counterexamples to Conjecture 1, we know that this conjecture is incorrect, but our failure to find a counterexample to Conjecture 2 does not show that it is correct. Perhaps there are counterexamples, but the smallest one is larger than 30. Continuing to check examples might uncover a counterexample, or, if it doesn’t, it might increase our confidence in the conjecture. But we can never be sure that the conjecture is correct if we only check examples. No matter how many examples we check, there is always the possibility that the next one will be the first counterexample. The only way we can be sure that Conjecture 2 is correct is to prove it.*

**Is there any value in doing bruteforce searches computationally? Maybe we only care that it's true for a fixed interval. 

---
Page: 16

*Since b < n, we can conclude that x = 2b − 1 < 2n − 1. Also, since ab = n > a, it follows that b > 1.*

**b > 1 because it's a factor in n that is assumed not prime. 

---
Page: 30

*The lesson of these examples is that to determine the logical form of a statement you must think about what the statement means, rather than just translating word by word into symbols.*

**I'm conflicted as to whether I would like it to be more or less mechanical. Mechanical means simple but inflexible. 

---
Page: 37

*Note that because this formula contains three letters, it takes eight lines to list all possible combinations of truth values for these letters. (If a formula contains n different letters, how many lines will its truth table have?)*

**2 to the nth power. 

---
Page: 39

*Recall that we decided to call an argument valid if the premises cannot all be true without the conclusion being true as well.*

**With even one premise wrong the conclusion cannot be true. What part is premise and what part is argument and what part is conclusion? The premises are used in the conclusion in the example.

**There are statements, they are involved in premises and they can also be involved in the conclusion. A statement is just a factual claim, the premise is how the statement relate to each other in terms of our boolean operators and the conclusion is drawn from the premises. 

---
Page: 42

*This should make sense if you think about what all the symbols mean. For example, suppose P stands for the statement “The Yankees won last night” and Q stands for “The Red Sox won last night.” Then ¬(P ∧ Q) would represent the statement “The Yankees and the Red Sox did not both win last night,” and ¬P ∨ ¬Q would represent “Either the Yankees or the Red Sox lost last night”; these statements clearly convey the same information. On the other hand, ¬P ∧ ¬Q would represent “The Yankees and the Red Sox both lost last night,” which means something entirely different.*

**If it's an inclusive or it can still mean that both lost last night. The only thing it can't mean is that both won. 

---
Page: 44

*Many of the equivalences in the list should remind you of similar rules involving +, ·, and − in algebra. As in algebra, these rules can be applied to more complex formulas, and they can be combined to work out more complicated equivalences. Any of the letters in these equivalences can be replaced by more complicated formulas, and the resulting equivalence will still be true. For example, by replacing P in the double negation law with the formula Q ∨ ¬R, you can see that ¬¬(Q ∨ ¬R) is equivalent to Q ∨ ¬R. Also, if two formulas are equivalent, you can always substitute one for the other in any expression and the results will be equivalent. For example, since ¬¬P is equivalent to P, if ¬¬P occurs in any formula, you can always replace it with P and the resulting formula will be equivalent to the original.*

**How far can we go in compressing statements? We could extract any group of letters into one letter. Though expanding it might get tough. 

---
Page: 45

*Formulas that are always true, such as P ∨ ¬P, are called tautologies. Similarly, formulas that are always false are called contradictions.*

**Contradictions is more rich in information than a tautology. 

---
Page: 51

*We could let P stand for the statement “x is a prime number,” D for “y is divisible by x,” and E for “z is divisible by x.” The entire statement would then be represented by the formula P ∧ (D ∨ E). But this analysis, though not incorrect, fails to capture the relationship between the statements D and E. A better analysis would be to let P(x) stand for “x is a prime number” and D(y, x) for “y is divisible by x.” Then D(z, x) would mean “z is divisible by x,” so the entire statement would be P(x)∧(D(y, x)∨D(z, x)).*

**Additional levels of meaning can be captured succinctly by extracting statements that are conceptually the same into functions that can be applied to variables. 

---
Page: 54

*The free variables in a statement stand for objects that the statement says something about. Plugging in different values for a free variable affects the meaning of a statement and may change its truth value. The fact that you can plug in different values for a free variable means that it is free to stand for anything. Bound variables, on the other hand, are simply letters that are used as a convenience to help express an idea and should not be thought of as standing for any particular object. A bound variable can always be replaced by a new variable without changing the meaning of the statement, and often the statement can be rephrased so that the bound variables are eliminated altogether.*

**Bound variables are like type parameters whereas free variables are more like parameters. 

---
Page: 55

*As you learn more mathematical notation, it will become increasingly important to make sure you are careful to distinguish between expressions that are mathematical statements and expressions that are names for mathematical objects.*

**What is the difference? I suppose a statement has a truth value whereas a name is just a shorthand description for something.

---
Page: 56

*The truth set of a statement P(x) is the set of all values of x that make the statement P(x) true. In other words, it is the set defined by using the statement P(x) as an elementhood test: {x | P(x)}.*

**Is the negation called the false set of a statement P(x)?

---
Page: 57

*When a statement contains free variables, it is often clear from context that these variables stand for objects of a particular kind. The set of all objects of this kind – in other words, the set of all possible values for the variables – is called the universe of discourse for the statement, and we say that the variables range over this universe. For example, in most contexts the universe for the statement x2 < 9 would be the set of all real numbers; the universe for the statement “x is a man” might be the set of all people.*

**Sounds synonymous with domain of a function. 

---
Page: 59

*Because a set is completely determined once its elements have been specified, there is only one set that has no elements.*

**Could it be any other way? I feel that I'm missing the deeper point. 

---
Page: 40

*Both premises are true in lines three and four of this table. The conclusion is also true in line three, but it is false in line four. Thus, it is possible for both premises to be true and the conclusion false, so the argument is invalid.*

**What happens if the premises are all true but the conclusion is false? 

---
Page: 69

*It is important to remember, though, that although the set theory operations and logical connectives are related, they are not interchangeable. The logical connectives can only be used to combine statements, whereas the set theory operations must be used to combine sets. For example, if A is the truth set of P(x) and B is the truth set of Q(x), then we can say that A ∩ B is the truth set of P(x) ∧ Q(x), but expressions such as A ∧ B or P(x) ∩ Q(x) are completely meaningless and should never be used.*

**I wonder why there's such a harsh warning for this.

---
Page: 80

*It appears that the crucial words here are if and then, which occur in the first premise. We therefore introduce a new logical connective, →, and write P → Q to represent the statement “If P then Q.” This statement is sometimes called a conditional statement, with P as its antecedent and Q as its consequent.*

**Does programming cover all logical connectives? I'm pretty sure it does. 

---
Page: 86

*But this doesn’t seem right. Just knowing that ifP is true then Q is true, but not knowing that Pis true, it doesn’t seem reasonable that we should be able to conclude that Q is true. For example, suppose we know that the statement “If John didn’t go to the store then we’re out of eggs” is true. Unless we also know whether or not John has gone to the store, we can’t reach any conclusion about whether or not we’re out of eggs. Thus, changing the first line of the truth table for P → Q would lead to an incorrect conclusion about the validity of an argument.*

**If then is a bit trickier than I thought, we definitely don't use it the same way in programming. If the antecedent is false the whole then expression is ignored. 

---
Page: 88

*in general, the statement “If you are a convicted murderer then you are untrustworthy” is true, without believing that the statement “If you are untrustworthy then you are a convicted murderer” is generally true. The formula Q → P is called the converse of P → Q. It is very important to make sure you never confuse a conditional statement with its converse.*

**Is it possible to automatically generate truth tables for texts?

---
Page: 88

*The contrapositive of P → Q is the formula ¬Q → ¬P, and it is equivalent to P → Q. This may not be obvious at first, but you can verify it with a truth table. For example, the statements “If John cashed the check I wrote then my bank account is overdrawn” and “If my bank account isn’t overdrawn then John hasn’t cashed the check I wrote” are equivalent.*

**What makes math and logic difficult is that there are so many cases that you need to consider. In order to scale yourself you have to be able to divide and conquer. 

---
Page: 101

*Notice that in the fifth statement in this example, we needed to know who y was to determine if the statement was true or false, but not who x was. The statement says that everyone likes y, and this is a statement about y, but not x. This means that y is a free variable in this statement but x is a bound variable.
Similarly, although all the other statements contain the letter x, we didn’t need to know the value of x to determine their truth values, so x is a bound variable in every case. In general, even if x is a free variable in some statement P(x), it is a bound variable in the statements ∀xP(x) and ∃xP(x).*

**Quantifiers bind variables. When we use X to setup a claim, it's bound. We can change X without changing the meaning of the statement. 

---
Page: 101

*Words such as everyone, someone, everything, or something are often used to express the meanings of statements containing quantifiers. If you are translating an English statement into symbols, these words will often tip you off that a quantifier will be needed.*

**Translating back and forth between natural language and logic symbols is great for getting different perspectives. 

---
Page: 104

*A good way to catch such mistakes is to pay attention to free and bound variables. In the incorrect formula, there are no quantifiers binding the variables y and z, so y and z are free variables. But the original statement, “All parents are married,” is not a statement about y and z, so these variables should not be free in the answer. This is a tip-off that quantifiers on y and z are missing. Note that if we translate the incorrect formula ∀x(P(x, y) → M(x, z)) back into English, we get a statement about y and z: “Everyone who is a parent of y is married to z.”*

**Still not entirely sure how to interpret bound and free variables. It seems like a free variable can be thought of as more specific. 

---
Page: 106

*Thinking first about just the first quantifier expression ∀x, we see that the statement means that for every real number x, the statement ∃y(x + y = 5) is true. We can worry later about what ∃y(x + y = 5) means; thinking about two quantifiers at once is too confusing.*

**It's analogous to have to think about functions being evaluated. 

---
Page: 108

*Apparently, the order of the quantifiers makes a difference! What is responsible for this difference? The first statement says that for every real number x, there is a real number y such that x + y = 5. For example, when we tried x = 2 we found that y = 3 worked in the equation x + y = 5, and with x = 7, y = −2 worked. Note that for different values of x, we had to use different values of y to make the equation come out true. You might think of this statement as saying that for each real number x there is a corresponding real number y such that x + y = 5. On the other hand, when we were analyzing the statement ∃y∀x(x + y = 5) we found ourselves searching for a single value of y that made the equation x + y = 5 true for all values of x, and this turned out to be impossible. For each value of x there is a corresponding value of y that makes the equation true, but no single value of y works for every x.*

**For all x there is a corresponding value of y versus a single value that works for each X.

---
Page: 113

*For example, in Example 2.1.2 we represented the statement “Nobody’s perfect” by the formula ¬∃xP(x), where P(x) meant “x is perfect.” But another way to express the same idea would be to say that everyone fails to be perfect, or in other words ∀x¬P(x). This suggests that these two formulas are equivalent, and a little thought should show that they are. No matter what P(x) stands for, the formula ¬∃xP(x) means that there’s no value of x in the universe of discourse for which P(x) is true. But that’s the same as saying that for every value of x in the universe, P(x) is false, or in other words ∀x¬P(x). Thus, ¬∃xP(x) is equivalent to ∀x¬P(x).*

**The second alternative was more natural to me. Default points of view are interesting, what are the based in and how do they affect your beliefs?

---
Page: 118

*In general, for any set A, the formula ∀x ∈ A P(x) means that for every value of x in the set A, P(x) is true, and ∃x ∈ A P(x) means that there is at least one value of xin the set A such that P(x) is true. The quantifiers in these formulas are sometimes called bounded quantifiers, because they place bounds on which values of x are to be considered.*

**In most real-life scenarios you'd probably put boundaries on the domain of discourse. 

---
Page: 119

*Now if A = ∅ then this last formula will be true, no matter what the statement P(x) is, because, as we have seen, ∃ x ∈ A ¬ P(x) must be false. Thus, ∀x ∈ A P(x) is always true if A = ∅. Mathematicians sometimes say that such a statement is vacuously true. Another way to see this is to rewrite the statement ∀x ∈ A P(x) in the equivalent form ∀x(x ∈ A → P(x)). Now according to the truth table for the conditional connective, the only way this can be false is if there is some value of x such that x ∈ A is true but P(x) is false. But there is no such value of x, simply because there isn’t a value of x for which x ∈ A is true.*

**What does vacuous mean? Math has a lot of peculiar terminology. Does it essentially mean a nonsense truth? 

---
Page: 120

*Consider the statement “Everyone is bright-eyed and bushy-tailed.” If we let E(x) mean “x is bright-eyed” and T(x) mean “x is bushy-tailed,” then we could represent this statement by the formula ∀x(E(x) ∧ T(x)). Is this equivalent to the formula ∀xE(x) ∧ ∀xT(x)? This latter formula means “Everyone is bright-eyed, and also everyone is bushy-tailed,” and intuitively this means the same thing as the original statement. Thus, it appears that ∀x(E(x) ∧ T(x)) is equivalent to ∀ xE(x) ∧ ∀xT(x). In other words, we could say that the universal quantifier distributes over conjunction.*

**What is the distributive property at its core? Is it a fact if symbol manipulation? Why is it applicable to so many different types of notation? Are they all the same at the bottom? 

---
Page: 121

*We have now introduced seven basic logical symbols: the connectives ∧, ∨, ¬, →, and ↔, and the quantifiers ∀ and ∃. It is a remarkable fact that the structure of all mathematical statements can be understood using these symbols, and all mathematical reasoning can be analyzed in terms of the proper use of these symbols.*

**Is there something as being too terse?

---
Page: 129

*It is often convenient to define families of sets as indexed families. For example, suppose we again let S stand for the set of all students, and for each student s we let Cs be the set of courses that s has taken. Then the collection of all of these sets Cs would be an indexed family of sets F = {Cs | s ∈ S}. Remember that the elements of this family are not courses but sets of courses. If we let t stand for some particular student Tina, and if Tina has taken Calculus, English Composition, and American History, then Ct = {Calculus, English Composition, American History} and Ct ∈ F, but Calculus ∉ F.*

**Are we allowed to flatten sets?

---
Page: 131

*As you learn the definitions of more mathematical terms and symbols, it will become more important to be able to choose which definition to think about first when working out the meaning of a complex mathematical statement. A good rule of thumb is to always start with the “outermost” symbol.*

**It's kind of like peeling something with a lot of layers. 

---
Page: 131

*If we wanted to know which courses had been taken by all students, we would need to find those elements that all the sets in F have in common. The set of all these common elements is called the intersection of the family F and is written ⋂F. Similarly, the union of the family F, written ⋃F, is the set resulting from throwing all the elements of all the sets in F together into one set. In this case, ⋃F would be the set of all courses that had been taken by any student.*

**The flatten operation I asked for even has its own symbol.

---
Page: 148

*If you find a counterexample to a theorem, then you can be sure that the theorem is incorrect, but the only way to know for sure that a theorem is correct is to prove it. A proof of a theorem is simply a deductive argument whose premises are the hypotheses of the theorem and whose conclusion is the conclusion of the theorem. Throughout the proof, we think of any free variables in the hypotheses and conclusion of the theorem as standing for some particular but unspecified elements of the universe of discourse. In other words, we imagine that we are reasoning about some instance of the theorem, but we don’t actually choose a particular instance; the reasoning in the proof should apply to all instances. Of course the argument should be valid, so we can be sure that if the hypotheses of the theorem are true for any instance, then the conclusion will be true for that instance as well.*

**Starting at the extremes of values ought to be a good way to find counterexamples. 

---
Page: 150

*To prove a conclusion of the formP → Q:
Assume P is true and then prove Q.*

**Add P to the list of givens and let Q become the goal.

---
Page: 155

*Suppose Q is false.
[Proof of ¬P goes here.]
Therefore P → Q.*

**How do you know which strategy is the most appropriate? I suppose that if you find that notP is easier to prove than Q.

---
Page: 164

*Suppose x2 + y = 13 and y ≠ 4.
Suppose x ≠ 3.
[Proof of contradiction goes here.]
Therefore x ≠ 3.
Thus, if x2 + y = 13 and y ≠ 4 then x ≠ 3.*

**The first suppose should be x = 3. Structured proofs feel well suited for automation. 

---
Page: 167

*another important rule of proof writing: in many cases the logical form of a statement can be discovered by writing out the definition of some mathematical word or symbol that occurs in the statement. For this reason, knowing the precise statements of the definitions of all mathematical terms is extremely important when you’re writing a proof.*

**I wish I had an easily accessible encyclopedia with the definitions on demand. Then I'd be able to focus on the high level stuff. 

---
Page: 170

*The first of these rules of inference says that if you know that both P and P → Q are true, you can conclude that Q must also be true. Logicians call this rule modus ponens.*

**What does this mean in English?

---
Page: 170

*Usually you won’t find a given of the form P → Q to be much use until you are able to prove either P or ¬Q. However, if you ever reach a point in your proof where you have determined that P is true, you should probably use this given immediately to conclude that Q is true. Similarly, if you ever establish ¬Q, immediately use this given to conclude ¬P.*

**Who is providing the givens? How does one think up the theorem to prove? What is allowed to be givens? 

---
Page: 177

*To prove a goal of the form ∀xP(x):
Let x stand for an arbitrary object and prove P(x). The letter x must be a new variable in the proof. If x is already being used in the proof to stand for something, then you must choose an unused variable, say y, to stand for the arbitrary object, and prove P(y).*

**There are many logical relationships between things that hold no matter the things are. This is why recognizing categories only by the logical propositions that relate objects can lead to combinatorial explosions. 

---
Page: 180

*Because the goal starts with ∀x, the first step is to let x be arbitrary and try to prove P(x) → Q(x). To prove this goal, you will probably want to assume that P(x) is true and prove Q(x). Thus, the proof will probably start like this: “Let x be arbitrary. Suppose P(x).” It will then proceed with the steps needed to reach the goal Q(x). Often in this type of proof the statement that x is arbitrary is left out, and the proof simply starts with “Suppose P(x).” When a new variable x is introduced into a proof in this way, it is usually understood that x is arbitrary. In other words, no assumptions are being made about x other than the stated one that P(x) is true.*

**It's the idiomatic actions that make things nonobvious. 

---
Page: 180

*Mathematicians sometimes skip other steps in proofs, if knowledgeable readers could be expected to fill them in themselves. In particular, many of our proof strategies have suggested that the proof end with a sentence that sums up why the reasoning that has been given in the proof leads to the desired conclusion. In a proof in which several of these strategies have been combined, there might be several of these summing up sentences, one after another, at the end of the proof. Mathematicians often condense this summing up into one sentence, or even skip it entirely. When you are reading a proof written by someone else, you may find it helpful to fill in these skipped steps.*

**There are a whole lot of conventions for any kind of specialized language. Programming languages are full with conventions. Could one create a formatter for proofs?

---
Page: 182

*To prove a goal of the form ∃xP(x):
Try to find a value of x for which you think P(x) will be true. Then start your proof with “Let x = (the value you decided on)” and proceed to prove P(x) for this value of x. Once again, x should be a new variable. If the letter x is already being used in the proof for some other purpose, then you should choose an unused variable, say y, and rewrite the goal in the equivalent form ∃yP(y). Now proceed as before by starting your proof with “Let y = (the value you decided on)” and prove P(y).*

**It feels easier to prove that something is true for at least one value but the reach of the proof feels shorter. 

---
Page: 183

*Finding the right value to use for x may be difficult in some cases. One method that is sometimes helpful is to assume that P(x) is true and then see if you can figure out what x must be, based on this assumption. If P(x) is an equation involving x, this amounts to solving the equation for x. However, if this doesn’t work, you may use any other method you please to try to find a value to use for x, including trial-and-error and guessing. The reason you have such freedom with this step is that the reasoning you use to find a value forxwill not appear in the final proof. This is because of our rule that a proof should contain only the reasoning needed to justify the conclusion of the proof, not an explanation of how you thought of that reasoning. To justify the conclusion that ∃xP(x) is true it is only necessary to verify that P(x) comes out true when x is assigned some particular value. How you thought of that value is your own business, and not part of the justification of the conclusion.*

**Leaving out the thought behind your reasoning is what makes some proofs obscure. Though I suppose many proofs are embedded into papers that contains the context not included in the proof itself. Sometimes the reasoning process is mundane but sometimes the reasoning process itself is what's novel and cool. 

---
Page: 186

*To use a given of the form ∃xP(x):
Introduce a new variable x0 into the proof to stand for an object for which P(x0) is true. This means that you can now assume that P(x0) is true. Logicians call this rule of inference existential instantiation.
Note that using a given of the form ∃xP(x) is very different from proving a goal of the form ∃xP(x), because when using a given of the form ∃xP(x), youdon’t get to choose a particular value to plug in for x. You can assume that x0 stands for some object for which P(x0) is true, but you can’t assume anything else about x0*

**You need to remember not to treat givens and goals the same way. 

---
Page: 186

*To use a given of the form ∀xP(x):
You can plug in any value, say a, for x and use this given to conclude that P(a) is true. This rule is called universal instantiation.*

**Do we do universal instantiation just to have a variable that isn't bound?

---
Page: 187

*When analyzing the logical forms of givens and goals in order to figure out a proof, it is usually best to do only as much of the analysis as is needed to determine the next step of the proof. Going further with the logical analysis usually just introduces unnecessary complication, without providing any benefit.*

**Keep the table as clean as possible. Any extra will make it unnecessarily complicated. 

---
Page: 188

*The second given starts with ∀A, so we may not be able to use this given until a likely value to plug in for A pops up during the course of the proof. In particular, we should keep in mind that if we ever come across an element of F while trying to figure out the proof, we can plug it in for A in the second given and conclude that it contains x as an element.*

**It's a little bit confusing, since if we have a specific value a then saying for all a p(a) seems weird. Maybe it's not so weird, a is basically a constrained version of x. For all x where a specific condition is true. 

---
Page: 190

*It’s also important, when you’re introducing a new variable x, to be sure you know what kind of object x stands for. Is it a number? a set? a function? a matrix? You’d better not write aϵX unless X is a set, for example. If you aren’t careful about this, you might end up writing nonsense. You also sometimes need to know what kind of object a variable stands for to figure out the logical form of a statement involving that variable. For example, A = B means ∀x(xϵA ↔ xϵB) if A and B are sets, but not if they’re numbers.
The most important thing to keep in mind about introducing variables into a proof is simply the fact that variables must always be introduced before they are used. If you make a statement about x (i.e., a statement in which x occurs as a free variable) without first explaining what xstands for, a reader of your proof won’t know what you’re talking about – and there’s a good chance that you won’t know what you’re talking about either!*

**Be very clear on the terms being used going into a rigorous explanation such as a proof. 

---
Page: 129

*Definition 2.3.2. Suppose A is a set. The power set of A, denoted P(A), is the set whose elements are all the subsets of A. In other words,
P(A)= {x| x ⊆ A}.*

**Every member of the power set is a subset of the set. 

---
Page: 201

*To prove a goal of the formP ∧ Q:
Prove P and Q separately.
In other words, a goal of the form P ∧ Q is treated as two separate goals: P, and Q. The same is true of givens of the form P ∧ Q:
To use a given of the formP ∧ Q:
Treat this given as two separate givens: P, and Q.*

**How often is this form used in practice?

---
Page: 203

*To prove a goal of the formP ↔ Q:
Prove P → Q and Q → P separately.
To use a given of the formP ↔ Q:
Treat this as two separate givens: P → Q, and Q → P.*

**Now this for seems like one of the most widely used ones. If you write out the logical form for it, it's easy to see how to deal with it. 

---
Page: 203

*Definition 3.4.2. An integer x is even if ∃kϵZ(x = 2k), and x is odd if ∃ kϵZ (x= 2 k + 1).*

**Are there definitions that you have to prove? I suppose as long as you keep them assertion free you're basically just introducing terms and notation.

---
Page: 206

*Our goal is now a negated statement, and reexpressing it would require the use of the very equivalence that we are trying to prove! We therefore fall back on our only other strategy for dealing with negative goals, proof by contradiction*

**Two important things, one is that we can't prove something with what we're trying to prove in the first place. And two, if we have a negative goal that we can't reexpress then we need to reach for proof by contradiction. 

---
Page: 209

*Thus, we might try to shorten the proof by writing it as a string of equivalences, starting with x ϵA ∩ (B \ C) and ending with xϵ (A ∩ B) \ C. In this case, if we start with x ϵA ∩ (B \ C) and follow the first string of equivalences displayed above, we come to a statement that is the same as the last statement in the second string of equivalences. We can then continue by following the second string of equivalences backward, ending with xϵ (A ∩ B) \ C.*

**It feels like a complicated way of doing algebraic equations. 

---
Page: 209

*The technique of figuring out a sequence of equivalences in one order and then writing it in the reverse order is used quite often in proofs. The order in which the steps should be written in the final proof is determined by our rule that an assertion should never be made until it can be justified. In particular, if you are trying to prove P ↔ Q, it is wrong to start your write-up of the proof with the unjustified statement P ↔ Q and then work out the meanings of the two sides P and Q, showing that they are the same. You should instead start with equivalences you can justify and string them together to produce a justification of the goal P ↔ Q before you assert this goal.*

**The difference is subtle but it's an important one in order to not have a circular argument. 

---
Page: 239

*Proof. Let x be an arbitrary real number, and suppose x ≠ 2. Let y = x/(2−x), which is defined since x ≠ 2. Then
To see that this solution is unique, suppose 2z/(z + 1) = x. Then 2z = x(z + 1), so z(2 − x) = x. Since x = 2 we can divide both sides by 2 − x to get z = x/(2 − x) = y.*

**Isn't it kind of obvious from the form of the equation that they're the same?

---
Page: 260

*Definition 4.1.1. Suppose A and B are sets. Then the Cartesian product of A and B, denoted A × B, is the set of all ordered pairs in which the first coordinate is an element of A and the second is an element of B. In other words,
A × B = {(a, b) | a ∈ A and b ∈ B}.*

**That's a beautiful way of summarizing the plane. It makes it obvious that the axes of the plane doesn't have to have the same length. 

---
Page: 265

*Usually when you’re trying to find the answer to a mathematical question you won’t know in advance what the answer is going to be. You might be able to take a guess at the answer and you might have an idea for how the proof might go, but your guess might be wrong and your idea for the proof might be flawed. It is only by turning your idea into a formal proof, according to the rules in Chapter 3, that you can be sure your answer is right. Often in the course of trying to construct a formal proof you will discover a flaw in your reasoning, as we did earlier, and you may have to revise your ideas to overcome the flaw. The final theorem and proof are often the result of repeated mistakes and corrections. Of course, when mathematicians write up their theorems and proofs, they follow our rule that proofs are for justifying theorems, not for explaining thought processes, and so they don’t describe all the mistakes they made. But just because mathematicians don’t explain their mistakes in their proofs, you shouldn’t be fooled into thinking they don’t make any!*

**The mistakes should be shared too, they'd be very informative. It's of course sensitive to share your thought process but open-sourcing that would allow everyone to become better thinkers. 
