// class Vertex{
//     constructor(coordinate){
//         this.coordinate = coordinate;
//     }
// }

// class Graph{
//     constructor(){
//         this.startPos = null;
//     }

function createAdjList(startPos){
        const adjList = {};
        const possibleMoves = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ];

        for (let row = 0; row < 8; row++){
            for (let col = 0; col < 8; col++){
                const position = `${row},${col}`;
            adjList[position] = [];

            for (let move of possibleMoves) {
                const newRow = row + move[0];
                const newCol = col + move[1];

                if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                    const newPosition = `${newRow},${newCol}`;
                    adjList[position].push(newPosition);
                }
                 
                }
            }
        }
        console.log(adjList);
        return adjList;
    }

    function findNextMoves(adjList){

    }

createAdjList([0,0]);
// }