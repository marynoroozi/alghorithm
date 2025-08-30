/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  if (rooms.length <= 1) return true;
  const n = rooms.length;
  visited = new Set();

  const visitRoom = function (i) {
    if (visited.has(i)) return;
    visited.add(i);

    for (let key of rooms[i]) {
      visitRoom(key);
    }
  };
  visitRoom(0);
  return visited.size === n;
};

// Input: rooms = [[1],[2],[3],[]]
// Output: true
// 0: keys=[0]  => keys=[1]

// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// 0: keys=[0] ,  currkeys=[1,3]    visited = [0]
// 1: keys=[0,1,3] => currkeys = [3,0,1]        visited=[0,1]
// 3: keys=[0,1,3] => currkeys = [0]        visited = [0,1,3]

// roomsNumber = [0, 1, 2, 3]   Array.from({length: room.length}, (_,i)=>i)
// for(i=0; i<rooms.length; i++){
//
// }
