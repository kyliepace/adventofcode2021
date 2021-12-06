// which board will win first?
// calculate the score of that board - the sum of unmarked numbers times the number that triggered the win

const input = `63,23,2,65,55,94,38,20,22,39,5,98,9,60,80,45,99,68,12,3,6,34,64,10,70,69,95,96,83,81,32,30,42,73,52,48,92,28,37,35,54,7,50,21,74,36,91,97,13,71,86,53,46,58,76,77,14,88,78,1,33,51,89,26,27,31,82,44,61,62,75,66,11,93,49,43,85,0,87,40,24,29,15,59,16,67,19,72,57,41,8,79,56,4,18,17,84,90,47,25

25 29 78 57 69
47 51  7 21 82
61 81 99 53 30
50 80 41 94 46
 9 37 48 71 91

26 10 29 27 90
21 65 44  5  1
42 51 35 11 98
72 23 41 95 48
40 97 99 92  2

20 70 21 58  5
63 29 16 71 45
43  7 26  0 62
24 75  9 87 55
88 10 11 47  4

 5 31 99 96 16
61 37 91 92 23
46  8 36  9 42
 3 32 49 64 48
15  2 47 53 55

28 40 96 38  9
33 11 65 76 13
24 35 20  3 99
95 78 51 74  4
80 14 44 98 58

24 55  8 59 65
96 11 15 12 99
21 75 35 85 34
20 53 72 50 70
61 48 74 41 36

61 32 13 42 90
81 22 66 75 51
46  1 41  9 34
86 50 48 64 74
72 85 97 11 71

16 32 41 37 61
14 31 29  6 79
28 97 11 15  9
13 72  3 85 64
81 95 20 77 69

42 76 14 78 35
49 89  7 81 90
13 18 32 24  9
10 98 12  2 65
82 21 67 70 84

89 38 21 83  5
 7 87 37 14 98
55 81 13 56 39
42 19 51 36 30
76 15 57 94 20

29 18 49 10 67
91 93 37 45 34
60  8 56 86 32
95 89 71 51 59
87  3 27 44 41

 9 71 95 12 42
83 90 98 79 49
72  1 53 80 33
29 82 65  4 25
92  5 76 54 66

72 85  4 39 29
86  0 95 30 21
11 51  2 99 38
58 52 25 59 77
69 74 37 87 32

99 16  9 63 55
79 50 48 96 92
47 35 15 93 76
19 70 25 49 38
80 60 43 69 81

50 19 10  7 83
79 52 14 51 55
68 65 54 21 62
71 25 34 70 92
44 26 61  4 46

75 26 15 76 61
42  0 51 29 81
82 57 16 91  4
12 19 30 10 24
78 58 55 74 53

36 80 46  9 85
34 17 43 96 57
37  6 33 88 28
59 48 18 22 79
55 52 20  2 61

 3 99 46  7 31
61 43 17 78  4
59 45 47 52 10
55 95 33  9 35
13  8 89 73 12

19 58 46 56 62
11 72 82  0 12
92  9 70 18 65
35 61 79 87 36
 1 27 22  8 74

60 92 94  2 84
73 69 72 29 37
50 74 56 58  6
51 80 86 33  4
32 24 20  7 78

47 25 76 89 61
86 77 71 43 22
42 18 70 24 98
31 68 62 79  9
17 10 78 16 84

90 41 71  1 58
88 91 86  4 34
48 31  3 74 21
85  5 37 36 28
18 46 17 49 69

41 55 52 58 44
 4 75 81 12 48
72 93  8 86 10
66 29 94 85 69
74 36 50  9 19

80 76 36 21 57
58  8 27 18 86
79  5 48 82 64
 0 93 30  1  4
78 40 52 50 62

58 60 77 25 22
93 97 49  2 41
59 38 95 36 44
30 79 69 54 86
23  4 80 85 27

27 67 68 46 41
93  4 96 49 23
11 54 80 88 75
69 34 44 12 37
39 78 66  5 43

20 32 71 99 19
42 96 58 47 65
72 31 70 59 26
46 17 38 11 23
18 85 52 77 67

38 98 42 31 40
76  2 77 82 34
92 73 55 93 19
25 58 90 10 68
 6 56 85 43 95

16 71 12 76 86
78 26 15 34 45
17 22 20  8  1
51 52 24 90 79
53 40 14 69 21

77 75 68 32 69
61  9 74 58 44
21 39 94 84 46
14 29 93 31 63
12 72  2 98 40

68 32 38 58 24
61 11 76 55 39
 6 21 31 93 99
64 75 15 62 56
34 12 14 73 77

50 24 71 22 67
18 80 89 51 90
54 64 31 19 44
61 88 85 25 98
73 69 37 72 39

79  2 62 91 97
36 41 72 28 42
26 89 98 86 10
35 16 85 63 64
43 51 39 60 55

47 86 44 56 74
 0 96 39 84 54
38 45 68 88 21
11 33 17 52 97
83 58 42 65 81

16  1 22  8 24
 7  3 12 30 59
79 91 53 69 68
20 88 14 81 51
89 71 54 56 52

25 12 32 53  3
63 29 92 70 97
54  6 21  4 86
76 39 84 49 96
68  0 15 72 28

56 20 35 71 23
51 21 96 42 64
83  1  8 94 55
44 73 76 24 67
81 70  6 61 46

85 37 30 39 97
36 14 71 59 15
46 26 27 25  9
 6 56 79 52 67
72 54 58 74 76

90 24 86 43  1
18 70 89 20  9
44  4 52 65 66
56 17 96 78 67
53 80 32 42 63

35 50 95 53 16
75  1 85 31 81
99 22 27 84 38
98  8 19 25 92
56 59 62 48 54

 8 22 67 70 91
73 51 96 49 37
31  4 99 52 27
13 50 39  1 85
19  9 40 55 47

59 35 52 60 91
75 86 13 39 21
33 99 11 64 50
37 58 71 22 54
 6 72 88  3 85

85 63  5 48 20
96 55 53 35 60
 0 17 26 22 13
25 45 62  4 41
78 40 46 95 33

23 53 82 22 74
 5 45 15 44 65
62 84 68 83 88
52 46 61 77 59
56 60 71  2 43

27 77 28  8 84
33  0 22 62 40
 3 44 19 53 91
60 83 75 48 94
29 93 23 82 65

77 34 72 62  4
 9  8 76 52 60
37 54 98 20 22
11 13 86 48 57
10 63 41 23 61

58 57 47 55  3
38 11 39 15  9
 5 65 92 98 41
72 45  6 16 83
74 40 99 50 30

72 46 35  9 53
70 67 74 93 55
24  4 30 38 47
29 96 51 17 71
90  5 69 54 61

90 59 93 99 34
85 39 52 16 20
32 66 75 35 17
38 33 84 40 89
91 77 26 86 54

 2 87 96 34 28
98 74 56 17 37
10 62 71 89 95
 6 90  5 99 92
39 73 55 18  8

87 44 72  2 45
82 78 32 64 37
46 75 95 67 80
 8 60 57 97 56
22 43 92 26 96

98  1 21 17 14
85  6 33 69 16
53 82  0 41 73
46 72  2 35 23
89 94 80 76 42

27 94 98  5 95
64 19 77 15 92
11 52 41 50 51
 4 57 99 21 29
20 35 78 34 87

52 83 84 21 59
30 64 85 90 91
24 32 57  0 81
17 47  1 25 27
10 51 65 79 34

83  9 94 14 85
65 51 28 32 48
81 71  8 12 31
38 50 92 57 47
34 49 56 73 27

54  8 72 38 29
34 78 69 16 30
82 24  9  0 13
90 41 60 28 12
71 22 70 80 66

71 50 24 86 21
14 92 45 30 95
57 60  0 88 91
87 97  6  7 26
61 98 25  5 84

 1 63 45 36 67
27 16 54 72 41
32 74 53  9 35
95 29 90 19 26
82 97 11 42 28

 2 93 86 28 43
90 12 21 56 76
98 30 25  9 75
11 20 45 95 50
22 31 39 49  6

 2 53 74  9 64
24  8 85 86 59
41 38 57 63 32
88 93 14 11 55
69 31 25 66 52

10 60 42 16 95
 8 14 81 84  5
98 32 68 12  6
83 66 90 69 46
54 40 59 73 91

24 66 62 30 83
72 80 54 25 17
 3 77 60 68 36
26 22  8 74 95
63 39  4 53 87

49 96 48  2 78
14 21 38 98 45
30 34 54 16 92
 0 89 70 68 57
 7 74 10 86 97

25 91 46 84 66
44 50 40 10 67
62 77  5  6 43
63 29 79 51 53
70 69 61 80 54

19 11 24  9 93
21 53 81  2 61
69 83 33 23 68
73 22 77 71 52
92 76 94 86  1

51 31 27 28 95
16 50 36 13 57
 1 11 79 45 90
41 77  3 78 42
56 74 85 44 52

58  0 63 88 30
35 18 48 49 80
36 11 46 13 76
37 19  9 93 87
68 15 17  8 82

96 20  7 81 11
42 17 14 44 36
99 98 68 58 56
15 57 80  3 67
61 66 38 83 59

 3 60 25 55 17
42 45 66 24 14
13 16 41 11 88
89 96 97 35  1
83  5 52 69 28

99 11 53 82  3
88 74 42 38 13
94 80 27 92 34
29 56  8 14 76
85 65 66 79 59

80 82 43 87 70
85 22 53 10  1
30 78 39 26 77
 7 92 20 21 93
75 36 61 13 90

53 41 29 77 58
98 83 86 14 94
10 99 24 17 32
 3 87 42 19 61
57 89 36 13  9

30 45 53 99 41
80 85 25 18 10
47 98 64 78 11
58 94  9 91 87
35 97 43  0 32

70  1 80 98 85
73 69 90 63 20
53 77 39 49 64
28  7 78 84 57
56 86 23 88 97

18 53 73 49 40
36 95 46 42 94
97 19 23 72 84
21 47 91  8 17
99 90 68 30 25

26  9 84 35 59
44 47 66  8 48
 0 82 68 54 58
65  7 28 62 61
55 37 21 72 86

47 55 12 75 61
99 74  9 10 67
 2 57 25 20 46
83 97 43 49 59
 3 79 94 69 70

12  2 41 69 24
93 95 43 52 66
71 92 57 14 58
30 25 81 62 79
 7 96 70 22 42

92 83 35 65  8
63 71 43 33 19
95 24 51 85 41
66 13 68 12 20
 7  1 22 40 75

30 56 10 85 72
83 52 51 80 14
32 29 67 41 74
96 62 16 15 98
73 45 99 48 79

24  9  5 38 52
32 57 87 30 90
 7 54 39 43 14
31 76 96 65  0
51 99 20 61 92

19 37 39 15 86
53 32 42 57 70
 9 26 84 93 10
33 25 61 21  0
34 60 30 99  7

62 50 33 29 54
92 12 81  0 87
60  2 27  7  9
28 18 31 35 59
20 63 38 72 14

96 89 34 56 63
61  8 25 90 78
94 26 10 47 84
 1 32  7 83 73
16 65 69 23 97

44 59 87 16 18
31 50 27  9 38
49 10 56 69 35
13 24 91 46 70
22 37  6 43 25

87 79 59 26 35
81 73 36 66 51
97 11 43 17  7
24 94 71 91 48
12 77 93 55 34

91 93 56 55 58
24 11 82 35 86
68 81 50 34 23
59 73  1  8 37
18 83 80 53 85

40 30  7 72 22
68 94 95 89 42
91 84 11 49 36
64 29 26 73 76
37  1 51  9 25

32 48 47 36 88
54 91 59 72 50
31 83 19 20  0
24 67 61 46 99
52 53 11 16 69

86 52 95 73  6
56 45  8 13 80
28 77 19 59 48
99 33 47 10 85
35 81 27 46 76

41 45  1 12 49
32 16 21 85 27
50 80 66 64 10
76 11  9 59 52
71 37 34  2 43

43 19 88 81 12
 4 48  9 91 31
 1 46 10  6 56
72 41 30 36 94
61 83 86 28 79

39 10 40 25 52
29 60 38 18 31
65 46 11  0 94
68 12 42  4 84
55 20 86 77 26

12 65 79 59 43
93  6 68  1 29
17 48 45 26 80
37 22  5 66 47
71 11 41 18 64

 5 45 54 82 64
90 89 22 17 71
81 60 65 32 34
41 86 35 30 48
67 47 23 51  6

19 65 11 58 49
97 68 56 10 39
87 29 43 40 83
 9 41 26 79 77
63 72 93  4 51

82 50 90 45  4
53 96 93 30 19
 8 95 73 74 98
35 20 32  7 36
56 52 59 26 16

94 67 97 34 75
23 80 68 24 47
56  8 21 66 36
69  5  3 95 17
29 38 44 42 28

84 35 72  8 38
94 30 48 24 27
81 61 18 87 90
65 17 85 22 45
32 15 74 52 68

 9 69 63 68 36
44 31 35 12 39
57 83  6 49 23
64  0 10 85 81
82 40 34 91 24`

const testInput = `63,23,2,65,55,94,38,20,22,39,5,98,9,60,80,45,99,68,12,3,6,34,64,10,70,69,95,96,83,81,32,30,42,73,52,48,92,28,37,35,54,7,50,21,74,36,91,97,13,71,86,53,46,58,76,77,14,88,78,1,33,51,89,26,27,31,82,44,61,62,75,66,11,93,49,43,85,0,87,40,24,29,15,59,16,67,19,72,57,41,8,79,56,4,18,17,84,90,47,25

63 23  2 65 55
 4 48  9 91 31
 1 46 10  6 56
72 41 30 36 94
61 83 86 28 79

24 55  8 59 65
96 11 15 12 99
21 75 35 85 34
20 53 72 50 70
61 48 74 41 36

63 23 72  2 65
94 30 48 24 27
81 61 18 87 90
65 17 85 22 45
32 15 74 52 68`

const inputToUse = input

const arrayOfInput = inputToUse.split('\n')
const numbersToBeCalled = arrayOfInput[0].split(',')

const inputBoards = inputToUse.split('\n\n')
inputBoards.shift()

console.log(inputBoards[0])


// https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript
function getArrayOfColumns(matrix) {
  return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
}
const boards = inputBoards.map(stringBoard => {
  // console.log('pre matrix: ', stringBoard.split('\n'))
  const splitBoardIntoRows = stringBoard.trim().split('\n')
  const matrix = splitBoardIntoRows.map(row => row.trim().replace(/\s\s+/g, ' ').split(' '))
  return {
    rows: splitBoardIntoRows.filter(val => !!val),
    columns: getArrayOfColumns(matrix).map(row => row.join(' '))
  }
})

// part1(numbersToBeCalled, boards)
part2(numbersToBeCalled, boards)

/**
 * abstract away comparing called number to each value within a row array
 */
function scoreBoardDimension(arrayOfDimensions, stringValue, scores = new Array(5).fill(0)){
  arrayOfDimensions.forEach((dimension, index) => {
    const dimensionValues = dimension.split(' ').filter(val => !!val) // ['25', '29', '78', '57', '69]
    // if the called number is in that array, add a count to the column index (given rows)
    const indexOfValue = dimensionValues.indexOf(stringValue)
    if (indexOfValue > -1){
      const initialValue = scores[index]
      scores[index] = initialValue + 1
    }
    // check to see if any score has 5 yet
  })
  return scores
}



function part1(numbers, boards){
  const boardsScore = new Array(boards.length)
  console.log(`playing with ${boards.length} boards`)
  let winningBoardIndex, winningBoards

  // go through number by number to see if any board has won
  // const testNumbers = ['42', '76', '14', '78', '35']
  const winningNumber = numbers.find(stringValue => {

    // const numberValue = parseInt(stringValue)

    // check the number against each board
    winningBoards = boards.filter(({rows, columns}, boardIndex) => {
      const existingBoardScore = boardsScore[boardIndex]
      const rowScores = scoreBoardDimension(rows, stringValue, existingBoardScore?.rowScores)
      const columnScores = scoreBoardDimension(columns, stringValue, existingBoardScore?.columnScores)
      const newScores = {
        rowScores,
        columnScores
      }
      boardsScore[boardIndex] = newScores
      const isBingo = hasRowOrColumn(newScores)
      if (isBingo){
        console.log('is bingo for board at index ', boardIndex)
        winningBoardIndex = boardIndex
      }
      return isBingo
    })

    if (winningBoards.length > 0){
      console.log(`BINGO!`)
      return true
    }
  })

  console.log('winning number: ', winningNumber)
  console.log('winning boards: ', winningBoards)
  console.log('winning score: ', boardsScore[winningBoardIndex])

  // now calculate the puzzle answer

  // sum of all unmarked numbers

  // rowScores [5, 0, 0, 0, 0] means that the first row has 5 marked numbers
  // go through each number in row
  const indexOfWinningNumber = numbers.indexOf(winningNumber)
  console.log('index of winning number: ', indexOfWinningNumber)

  console.log('input board: ', typeof inputBoards[winningBoardIndex])

  const boardAsArrayOfNumbers = inputBoards[winningBoardIndex].replace(/\n/g, ' ')
    .split(' ')
    .filter(val => !!val)
    .map(val => parseInt(val))

  console.log(boardAsArrayOfNumbers)
  let unmarkedNumbers = boardAsArrayOfNumbers
  numbers.slice(0, 24).forEach(stringValue => {
    const existsAt = boardAsArrayOfNumbers.indexOf(parseInt(stringValue))
    if (existsAt > -1){
      unmarkedNumbers.splice(existsAt, 1)
    }
  })

  console.log('unmarked numbers: ', unmarkedNumbers)

  const sum = unmarkedNumbers.reduce((acc, stringValue) => {
    return acc + parseInt(stringValue)
  }, 0)

  console.log('sum: ', sum)

  // multiplied by winningNumber
  const answer = sum * winningNumber
  console.log('answer: ', answer)
}

function findWinningNumber(numbers, boards){
  return 
}

/**
 * takes two arrays of five numbers
 * [0, 4, 0, 0, 0] means that the row at index 1 has 4 marked numbers
 */
function hasRowOrColumn({rowScores, columnScores}){
  return rowScores.includes(5) || columnScores.includes(5)
}

// guesses
// 9720 - too low
// 63424 - argh my regex was off so I skipped the first winning board


// part 2
// which board will win last??

function part2(numbers, boards){
  const boardsScore = new Array(boards.length)
  console.log(`playing with ${boards.length} boards`)
  let winningBoardIndex
  let indexOfWinningNumber
  let losingBoards = [...Array(boards.length).keys()]
  let winningNumber
  

  // go through number by number to see if any board has won
  // const testNumbers = ['42', '76', '14', '78', '35']
  const losingNumber = numbers.map((stringValue, numberIndex) => {

    // const numberValue = parseInt(stringValue)

    if (losingBoards.length < 1){
      return
    }
    else {
          // check the number against each board
      return boards.map(({rows, columns}, boardIndex) => {

        if (losingBoards.length === 0){ return }
        const existingBoardScore = boardsScore[boardIndex]
        const rowScores = scoreBoardDimension(rows, stringValue, existingBoardScore?.rowScores)
        const columnScores = scoreBoardDimension(columns, stringValue, existingBoardScore?.columnScores)
        const newScores = {
          rowScores,
          columnScores
        }
        boardsScore[boardIndex] = newScores
        const isBingo = hasRowOrColumn(newScores)
        if (isBingo){
          const indexOfLosingBoard = losingBoards.indexOf(boardIndex)
            if (indexOfLosingBoard > -1){
              console.log('bingo, removing board', boardIndex)

              if (losingBoards.length > 1){
                losingBoards.splice(indexOfLosingBoard, 1)
                console.log('new losing boards: ', losingBoards)
              }
              else if (losingBoards.length > 0){
                console.log(`LAST BOARD DOWN! `, boardIndex)
                winningNumber = stringValue
                winningBoardIndex = boardIndex
                indexOfWinningNumber = numberIndex
                losingBoards = []
                console.log('new losing board length: ', losingBoards.length)
                return
              }

              
            }

 
          
          
          
        }
        
      })
    }



  })

  console.log('winning number: ', winningNumber) //46
  // console.log('winning score: ', boardsScore[winningBoardIndex])

  // now calculate the puzzle answer

  // sum of all unmarked numbers

  // go through each number in row
  console.log('index of winning number: ', indexOfWinningNumber)
  console.log('index of losing board: ', winningBoardIndex)

  console.log('input board: ', typeof inputBoards[winningBoardIndex])

  const boardAsArrayOfNumbers = inputBoards[winningBoardIndex].replace(/\n/g, ' ')
    .split(' ')
    .filter(val => !!val)
    .map(val => parseInt(val))

  console.log(boardAsArrayOfNumbers)
  let unmarkedNumbers = boardAsArrayOfNumbers
  numbers.slice(0, indexOfWinningNumber + 1).forEach(stringValue => {
    const existsAt = boardAsArrayOfNumbers.indexOf(parseInt(stringValue))
    if (existsAt > -1){
      unmarkedNumbers.splice(existsAt, 1)
    }
  })

  console.log('unmarked numbers: ', unmarkedNumbers)

  const sum = unmarkedNumbers.reduce((acc, stringValue) => {
    return acc + parseInt(stringValue)
  }, 0)

  console.log('sum: ', sum)

  // multiplied by winningNumber
  const answer = sum * winningNumber
  console.log('answer: ', answer)
}

// guesses
// 1368 too low
// 16146 too low
// 30654 too high
// 23541 correct - yay Oskar bark!