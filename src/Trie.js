import Trie from '../node_modules/@mrayanne113/tdd/scripts/Trie';
import Cities from './Cities';

const tree = new Trie();
tree.populate(Cities);

export default tree;
