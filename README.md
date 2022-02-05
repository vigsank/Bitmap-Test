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

## How the distance is computed

* Reads the input data from Input text. 
* Validates the No.of Test Cases & Bitmap size ranges.
* If ranges are valid, iterates though each row of Pixes and finds the nearest White Pixel (1) from the current pixel (the nearest can be at either it's left or right.).
* Collects all the distances and prints the output to Standard Output  
    * 🎉  Result

      ```
      Example:
      --------

      Input: 
      ------ 
      1
      3 4
      1010
      0010
      0111

      Output:
      -------
      0101
      2101
      1000
      ```

## 🏃 How to Run the Project

* Clone the Project.
* Install dependencies using

```
npm install
```
 * Run the program using
```
cat ./res/InputSamples/Samples.txt | npm run start

(You can 'cat' different sample file also.)
```

To run tests:

```
npm run test

This also generates 'coverage' data and puts into 'coverage' folder.
```

To check & fix linting:

```
npm run lint
npm run lint:fix
```
