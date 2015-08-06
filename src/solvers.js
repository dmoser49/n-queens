/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []
  var board = new Board({'n':n})
  //iterate through board
    var checkRows = function(rowIndex){

      for (var colIndex = 0; colIndex < n; colIndex++){
      //toggle each space
        board.togglePiece(rowIndex, colIndex)
        //check for conflict
        if (board.hasAnyRooksConflicts()){
          //if conflict toggle back
          board.togglePiece(rowIndex, colIndex)
        }
      }
      solution.push(board.get(rowIndex))
      if (rowIndex < n-1){
        return checkRows(rowIndex+1)
      }
    }
    checkRows(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var countSolution = function(board, rowIndex){
    var result = 0, row;

    row = board.get(rowIndex);

    //check the whole row, column by column
    for(var colIndex = 0; colIndex < n; colIndex++){
      row[colIndex] = 1;
    if(!board.hasAnyRooksConflicts()){
      if(rowIndex < (n-1)){
        result += countSolution(board, rowIndex + 1)
      }
      else{
        result += 1;
        // if (rowIndex === n-1){
        //   return result
        // }
      }
    }
  //undo piece

  row[colIndex]= 0;
  }
  return result
}
  var board = new Board({'n':n})
  var solutionCount = countSolution(board,0); //fixme



  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({'n':n})
  if (n === 0){
    return [];
  }
  if (n === 2){
    return [[0,0],[0,0]]
  }
  if (n === 3){
    return [[0,0,0],[0,0,0],[0,0,0]]
  }

  var countSolution = function(board, row){
    //for loop over columns
    for(var colIndex = 0; colIndex < n; colIndex++){

      // toggle piece(row,col)
      board.togglePiece(row, colIndex)
        //if no conflicts
      if(!board.hasAnyQueensConflicts()){
          //if last row return board
        if(row === (n-1)){
          return board
        }
        else{
          //if not last row recurse board row + 1
          var recurseResult = countSolution(board, row+1)
          if(recurseResult === undefined){
            board.togglePiece(row, colIndex)
          }
          else{
            return recurseResult
          }
        }
      }
      //if conflicts toggle piece(row column)
      else{ board.togglePiece(row, colIndex)
      }
    }

  }
  var solvedBoard = countSolution(board, 0)

  if (solvedBoard === undefined){
    return [];
  }

  console.log('Number of solutions for ' + n + ' rooks:', countSolution);
  return solvedBoard.rows();
};
//   var countSolution = function(board, rowIndex){
//     var result = 0, row;

//     row = board.get(rowIndex);

//     //check the whole row, column by column
//     for(var colIndex = 0; colIndex < n; colIndex++){
//       row[colIndex] = 1;
//     if(!board.hasAnyQueensConflicts()){
//       if(rowIndex < (n-1)){
//         countSolution(board, rowIndex + 1)
//       }
//       else{
//         return board.rows();
//       }
//     }
//   //undo piece
//   row[colIndex]= 0;
//   }
// }
//   var board = new Board({'n':n})
//   var solutionCount = countSolution(board,0); //fixme

//   if (n === 0){
//     return [];
//   }





// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var counter = 0; //fixme
  var board = new Board({'n':n})
  if (n === 0){
    return 1;
  }
  if (n === 2){
    return 0
  }
  if (n === 3){
    return 0
  }

  var countSolution = function(board, row){
    //for loop over columns
    for(var colIndex = 0; colIndex < n; colIndex++){
    debugger;
      // toggle piece(row,col)
      board.togglePiece(row, colIndex)
        //if no conflicts
      if(!board.hasAnyQueensConflicts()){
          //if last row return board
        if(row === (n-1)){
          counter++
          board.togglePiece(row, colIndex)
        }
        else{
          //if not last row recurse board row + 1
          var recurseResult = countSolution(board, row+1)
          if(recurseResult === undefined){
            board.togglePiece(row, colIndex)
          }
          else{
            return recurseResult;
          }
        }
      }
      //if conflicts toggle piece(row column)
      else{ board.togglePiece(row, colIndex)
      }
    }

  }
  var finalCount = countSolution(board, 0)



  console.log('Number of solutions for ' + n + ' rooks:', countSolution);
  return finalCount;
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


