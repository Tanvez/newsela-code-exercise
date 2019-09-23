# Write-up

I broke down the problem of `What words or phrases appear more frequently in questions that students tend to do poorly on, and what appear more frequently in questions that students do well on?` into 3 different functions.

## Functions

### breakDownQuestion(text)

  - The first function is a helper function called `breakDownQuestion` 
  - This function takes the text from the question and breaks it down into an array of words
  - This array of words is then filtered using `filterWords` array which contain common use words that would be used in most english sentences. The filtered array of words is then return

### getSpreadOfPercentCorrect(data)

  - This is the main function where we call `breakDownQuestion` function on each element in the data array
  - The different words and their respective percentages are tallied into an object structure.
  - The word itself becomes the key and then the program tallies the count based on percentages above or below the threshold of 50%
  ```
   presidents:
   { aboveFiftyCount: 2,
     belowFiftyCount: 0,
     totalAppeared: 2,
     percentageOfTotalQuestions: 0.5 },
  ```
  Note: at this point I have not used the `percentageOfTotalQuestions` in the final function but i thought it might be a good statistic if criteria changed

  ### formatAndSortData(structuredData, typeToSortBy)

  - 

  
