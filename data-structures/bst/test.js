
const bst_types = ['key_only', 'key_value_pair', 'multi_value', 'worst_case', 'full_delete'];
const sel_type_str = process.argv[process.argv.length - 1];
const sel_type = 0;
try {
  sel_type = parseInt(sel_type_str);
} catch (ex) {
  console.error("Please provide a BST type (1,2,3,4,...) - defaulting to 1");
}

var Node = require(`./${sel_type+1}_${bst_types[sel_type]}.js`);
var print = require('./print_node.js');
var traverse = require('./traverse.js');
var rebalance = require('./rebalance.js');

const best_case_1 = [6,4,8,2,5,7,9,1,3];
const best_case_2 = [5,3,7,4,2,1,6,8,9];
const worst_case_1 = [1,2,3,4,5,6,7,8,9];
const worst_case_2 = [9,8,7,6,5,4,3,2,1];
const kv_best_case = [
  { "key": 5, "value": "anne"},
  { "key": 3, "value": "bob"},
  { "key": 7, "value": "carol"},
  { "key": 4, "value": "doug"},
  { "key": 2, "value": "eve"},
  { "key": 1, "value": "fred"},
  { "key": 6, "value": "gina"},
  { "key": 8, "value": "harry"},
  { "key": 9, "value": "isabel"},
];

function createTree(input) {
  var rootNode = null;

  for (var i = 0; i < input.length; i++) {
    var args = [input[i]];
    if (typeof(input[i]) == "object") {
      args = [input[i]["key"], input[i]["value"]];
    }

    if (i === 0) {
      rootNode = new Node(...args);
    } else {
      rootNode.insert(...args);
    }
  }
  return rootNode;
}

var tree = createTree(best_case_1);

print(tree, 'before.dot');
tree = rebalance(tree);
print(tree, 'after.dot');