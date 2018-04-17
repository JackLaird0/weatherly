import Trie from '../node_modules/@mrayanne113/tdd/scripts/Trie.js';
import Cities from './Cities.js';

const tree = new Trie();
tree.populate(Cities);

export default tree;