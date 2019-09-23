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

    - This function takes in the structuredData object created from `getSpreadOfPercentCorrect()` and returns a sorted array based on the second condition `typeToSortBy`. 
    - Options of `typeToSortBy` includes `totalAppeared`, `aboveFiftyCount`, `belowFiftyCount`

  ### Top Ten Results

    - Most appearance
      ```
          [ { word: 'article',
        totalAppeared: 4043,
        aboveFiftyCount: 2520,
        belowFiftyCount: 1523 },
      { word: 'from',
        totalAppeared: 3962,
        aboveFiftyCount: 2462,
        belowFiftyCount: 1500 },
      { word: 'sentence',
        totalAppeared: 3113,
        aboveFiftyCount: 2147,
        belowFiftyCount: 966 },
      { word: 'following',
        totalAppeared: 2655,
        aboveFiftyCount: 1768,
        belowFiftyCount: 887 },
      { word: 'which',
        totalAppeared: 2577,
        aboveFiftyCount: 1669,
        belowFiftyCount: 908 },
      { word: 'select',
        totalAppeared: 2347,
        aboveFiftyCount: 1423,
        belowFiftyCount: 924 },
      { word: 'what',
        totalAppeared: 2090,
        aboveFiftyCount: 1546,
        belowFiftyCount: 544 },
      { word: 'paragraph',
        totalAppeared: 1929,
        aboveFiftyCount: 1090,
        belowFiftyCount: 839 },
      { word: 'read',
        totalAppeared: 1474,
        aboveFiftyCount: 1014,
        belowFiftyCount: 460 } ]
      ```
    - Most appearance with Above 50%
        ```
            [ { word: 'article',
        totalAppeared: 4043,
        aboveFiftyCount: 2520,
        belowFiftyCount: 1523 },
      { word: 'from',
        totalAppeared: 3962,
        aboveFiftyCount: 2462,
        belowFiftyCount: 1500 },
      { word: 'sentence',
        totalAppeared: 3113,
        aboveFiftyCount: 2147,
        belowFiftyCount: 966 },
      { word: 'following',
        totalAppeared: 2655,
        aboveFiftyCount: 1768,
        belowFiftyCount: 887 },
      { word: 'which',
        totalAppeared: 2577,
        aboveFiftyCount: 1669,
        belowFiftyCount: 908 },
      { word: 'what',
        totalAppeared: 2090,
        aboveFiftyCount: 1546,
        belowFiftyCount: 544 },
      { word: 'select',
        totalAppeared: 2347,
        aboveFiftyCount: 1423,
        belowFiftyCount: 924 },
      { word: 'paragraph',
        totalAppeared: 1929,
        aboveFiftyCount: 1090,
        belowFiftyCount: 839 },
      { word: 'read',
        totalAppeared: 1474,
        aboveFiftyCount: 1014,
        belowFiftyCount: 460 } ]
        ```

    - Most appearance with below 50%
      ```
      [ { word: 'article',
          totalAppeared: 4043,
          aboveFiftyCount: 2520,
          belowFiftyCount: 1523 },
        { word: 'from',
          totalAppeared: 3962,
          aboveFiftyCount: 2462,
          belowFiftyCount: 1500 },
        { word: 'sentence',
          totalAppeared: 3113,
          aboveFiftyCount: 2147,
          belowFiftyCount: 966 },
        { word: 'select',
          totalAppeared: 2347,
          aboveFiftyCount: 1423,
          belowFiftyCount: 924 },
        { word: 'which',
          totalAppeared: 2577,
          aboveFiftyCount: 1669,
          belowFiftyCount: 908 },
        { word: 'following',
          totalAppeared: 2655,
          aboveFiftyCount: 1768,
          belowFiftyCount: 887 },
        { word: 'paragraph',
          totalAppeared: 1929,
          aboveFiftyCount: 1090,
          belowFiftyCount: 839 },
        { word: 'best',
          totalAppeared: 1327,
          aboveFiftyCount: 754,
          belowFiftyCount: 573 },
        { word: 'what',
          totalAppeared: 2090,
          aboveFiftyCount: 1546,
          belowFiftyCount: 544 } ]
      ``` 
  
