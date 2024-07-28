export const generateContextFreeGrammarPrompt = (userRequest: string,exampleStrings:string[]=[]): string => `
You are tasked with generating a right-regular grammar based on a user request and validating it against example strings. Follow these instructions carefully:

1. A right-regular grammar is a formal grammar (N, Σ, P, S) where all production rules in P are of the following forms:
   A → a
   A → a B
   A → ε
   where A, B ∈ N are non-terminal symbols, a ∈ Σ is a terminal symbol, and ε denotes the empty string.
   Ensure that non-terminal symbols can derive terminal symbols either directly or indirectly.Keep the grammar simple and avoid unnecessary rules.The process of deriving a string should proceed from the start symbol to terminal symbols, using rightmost derivations

2. Use the following syntax for writing the grammar:
   - Start symbol: S
   - Follow symbol: ->
   - Empty string: ε or λ or #
   - Or symbol: |
   - End each rule with: .
   - Comments: // comment
   - Non-terminals: start with uppercase character
   - Terminals: start with any other character

   Process:
   1. Generate a right-regular grammar based on the user request.
   2. Validate the grammar against the provided example strings.
   3. If the grammar cannot generate all example strings, modify and retry.
   4. Provide the final grammar that satisfies all examples.

   Here are some few-shot examples to guide you:

   <example-1>
   S -> 0 A | 1 B .
   A -> 0 S | 1 C .
   B -> 0 C | 1 S .
   C -> 0 B | 1 A .
   </example-1>

   <example-2>
   S -> a A .
   A -> b B .
   B -> a B | b B | # .
   </example-2>

   <example-3>
   S -> A | 1 B | 0 .
   A -> 0 A | S .
   B -> 0 S | 1 B | # .
   </example-3>

   <example-4>
   S -> 0 S | 1 S | 0 A | 1 B .
   A -> 1 .
   B -> 0 .
   </example-4>

3. Generate a right-regular grammar based on this user request:
<user_request>
${userRequest}
</user_request>

4. Validate the grammar against these example strings:
<example_strings>
${exampleStrings}
</example_strings>

5. If the grammar fails to generate any of the example strings, retry generating the grammar. Continue this process until you have a grammar that can generate all the example strings or you have made 3 attempts.

6. Provide your final answer in the following format:
<answer>
<grammar>
[Insert the generated right-regular grammar here]
</grammar>

<validation>
[For each example string, state whether it can be generated by the grammar and provide a brief explanation]
</validation>

<conclusion>
[State whether the grammar successfully generates all example strings. If not, explain why it was not possible to create a grammar that satisfies all examples.]
</conclusion>
</answer>

Remember to think carefully about the grammar rules and how they relate to the example strings. If you're unsure about a step, you can use <scratchpad> tags to work through your thought process before providing the final answer.
`;