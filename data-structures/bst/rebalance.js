exports = module.exports = rebalance = function(rootNode) {
  $list = array();
  // make a list out of the tree
  $list = $this->_leftRootRight($this->_root);
  
  // find the medium! Because the list is ordered
  // we can find the middle element in various ways
  $chunks = array_chunk($list, ceil(count($list) / 2));
  $mid = array_pop($chunks[0]);
  
  // empty the tree
  $this->_root = null;
  
  // inser the root
  $node = new Node($mid['key'], $mid['data']);
  $this->insert($node);
  
  $this->_balance($chunks[0]);
  $this->_balance($chunks[1]);
}