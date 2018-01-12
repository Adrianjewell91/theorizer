# Theorizer: Analyze piano scores with neural network.

Theorizer helps students analyze musical scores. http://theorizer.herokuapp.com

# Background and Overview

Theorizer is a tool for musical education. A neural network accepts input from either a keyboard or piano and returns musical information, such as chord name (C, D, E) and type (major, minor, diminished).

Production is currently in beta, and only supports major chords. Back-end is a Django framework with a Neural Network powered by Theano, Keras, and associated libraries. Front-end is a React.js/Redux single page application.

# Technologies

A Django backend powers a self-designed and trained  dense neural network, built and exported with the Keras library. The Django backend loads the weights from the neural network, and serves analyses with an API. The frontend is a single page UI, built with React.js/Redux. Webpack manages frontend javascript assets.  

# Features:

1. 88-Key Input Piano, with horizontal scrolling.
2. CSS-Grid Layout.
3. Embedded I-Frame from Flat-IO.
4. Musical Analyzer.


### Code Samples:

See Neural network here:
http://github.com/adrianjewell/first_neural_network



## Further Implementations:

1. Add Musical Score annotation feature.

2. Optimize neural-network/Django interactions.

3. Implement live-learning mechanism for neural network.
