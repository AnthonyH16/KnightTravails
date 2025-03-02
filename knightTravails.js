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
        console.log(typeof(adjList));
        return adjList;
    }

function isVisited(visited, position) {
    return visited.indexOf(position) !== -1;
}

function knightMoves(startPos, endPos) {
    const start = `${startPos[0]},${startPos[1]}`;
    const end = `${endPos[0]},${endPos[1]}`;

    const adjList = createAdjList();
    
    const queue = [[start]]; // Queue for BFS, starts with the starting position
    const visited = []; // Array to track visited nodes
    
    while (queue.length > 0) {
        const path = queue.shift(); // Get the first path from the queue
        const position = path[path.length - 1]; // Get the last position from the path
        
        // Check if we have reached the end position
        if (position === end) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(`[${pos.split(',')[0]},${pos.split(',')[1]}]`));
            return;
        }

        // Mark this position as visited
        if (!isVisited(visited, position)) {
            visited.push(position); // Add position to the visited array
            
            // Explore neighbors
            for (const neighbor of adjList[position]) {
                if (!isVisited(visited, neighbor)) {
                    const newPath = [...path, neighbor]; // Create a new path
                    queue.push(newPath); // Add the new path to the queue
                }
            }
        }
    }

    console.log("There's no possible path to the end position.");
}

// Example Usage
knightMoves([3, 3], [4, 3]);