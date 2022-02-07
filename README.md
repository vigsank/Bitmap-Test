# Bitmap Challenge

## ❔ Task

There is given a rectangular bitmap of size n*m. Each pixel of the bitmap is either white or
black, but at least one is white. The pixel in i-th line and j-th column is called the pixel (i,j). The
distance between two pixels p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.

Write a program which:

* reads the description of the bitmap from the standard input;  
* for each pixel, computes the distance to the nearest white;  
* writes the results to the standard output.

Limitations:  
* No. of Test cases should range between 1<= n <=1000
* Bitmap (m,n) should range between 1<= m or n <=182


## 🖥  Tech Stack

[Node.js](https://nodejs.org)  
[TypeScript](https://www.typescriptlang.org)  

## How the distance is computed: 

### Approach 1:
* This Approach computes distance between current pixel and all
pixels in that same row or in that same column only and prints the minimum as output.
* Reads the input data from Input text. 
* Validates the No.of Test Cases & Bitmap size ranges.
* If ranges are valid, iterates though each row of Pixes and finds the nearest White Pixel (1) from the current pixel (the nearest can be at either it's left or right / top or bottom.).
* Collects all the distances and prints the output to Standard Output  
    * 🎉  Result

      ```
      Example:
      --------

      Input: 
      ------ 
      1
      4 4
      0001
      1011
      0010
      1101

      Output:
      -------
      1210
      0100
      1101
      0010
      ```
### Approach 2:
* This Approach computes distance between current pixel and all pixels across entire Bitmap and prints the minimum as output.
* Reads the input data from Input text. 
* Validates the No.of Test Cases & Bitmap size ranges.
* If ranges are valid, iterates though each row of Pixes and finds the nearest White Pixel (1) from the current pixel (the nearest can be at either it's left or right / top or bottom.).
* Collects all the distances and prints the output to Standard Output  
    * 🎉  Result

      ```
      Example:
      --------

      Input: 
      ------ 
      1
      5 5
      00010
      10111
      10110
      01110
      10111

      Output:
      -------
      12101 
      01000 
      01001 
      10001 
      01000 
      ```

## 🏃 How to Run the Project

* Clone the Project.
* Install dependencies using

```
npm install
```
* Run the program using Approach 1
```
cat ./res/InputSamples/Samples.txt | npm run start
```

* Run the program using Approach 2
```
cat ./res/InputSamples/Samples.txt | npm run start alternateApproach
```

To run tests: (This also generates 'coverage' data and puts into 'coverage' folder.)

```
npm run test
```

To check & fix linting:

```
npm run lint
npm run lint:fix
```

Sample Input and Output is inside **res** folder.
