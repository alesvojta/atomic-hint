# Atomic Categorizer

This work is based on great tool created by [Daniel Tonon](https://github.com/Dan503/) which you can try it out here: https://dan503.github.io/Atomic-Categorizer/

*One of the hardest things for new developers to pick up on when it comes to [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) is deciding on what category a particular component should be categorized under.*

This tool is basically a simple quiz that scores each category based on your answers. It then recommends the highest scoring category to you.

## Installation:
```shell script
yarn add -g @avojta/atomic-hint
```

### Usage:
```shell script
atomic-hint
```

Example output:
```
? Will the component only ever be used once per page? Yes
? Do you expect to use the component in multiple different contexts? Yes
? Does the component consist of only a single element? Yes
? Does the component contain a list of repeating components? Yes
? Is the component an item in a list of components? Yes
? Is the component large and complex? Yes
? Are there any atom components embedded into the component? Yes
? Are there any molecule components embedded into the component? Yes
? Is or will the component ever be embedded inside a molecule component? Yes
? Is or will the component ever be embedded inside an organism component? Yes
? What element is the outer wrapper for the component? section
Atom: 15; Molecule: 19; Organism: 21
```
