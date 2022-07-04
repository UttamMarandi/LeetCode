/**
 * There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.

Input
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
Output
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]
 */

//PS: Copied => Could not understand the solution.

class OrderedStream {
  constructor(n) {
    this.map = new Map();
    this.key = 1;
  }
  insert(idKey, value) {
    this.map.set(idKey, value); // add the key-value to the map
    const result = [];
    // until able to find the key in the map, add it to the resultant chunk
    // each time the next greater key is found, it will start the result from that key value
    while (this.map.has(this.key)) {
      // O(n)
      result.push(this.map.get(this.key));
      ++this.key;
    }
    return result;
  }
}
