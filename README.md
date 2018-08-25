# Theorizer: Analyze piano scores with neural network.

Theorizer helps students analyze musical scores. http://theorizer.herokuapp.com

# Background and Overview

Theorizer is a tool for musical education. A neural network accepts input from either a keyboard or piano and returns musical information, such as chord name (C, D, E) and type (major, minor, diminished).

Production is currently in beta, and only supports major chords. Back-end is a Django framework with a Neural Network powered by Theano, Keras, and associated libraries. Front-end is a React.js/Redux single page application.

# Technologies

A Django backend powers a self-designed and trained  dense neural network, built and exported with the Keras library. The Django backend loads the weights from the neural network, and serves analyses with an API. The frontend is a single page UI, built with React.js/Redux. Webpack manages frontend javascript assets.  

# Features:

1. [88-Key Input Piano, with horizontal scrolling.](#piano)
2. [CSS-Grid Layout.](#grid)
3. [Embedded I-Frame from Flat-IO.](#flat)
4. [Musical Analyzer.](#analyzer)
5. [Self Designed and Trained Neural Network to Recognize Chords.](#nn)


# Feature Highlights:

## 1. <a name="nn"></a>Piano
The piano draws inspiration from online virtual pianos. The problem with other online virtual pianos was that they weren't long enough.  The goal of Theorizer was to offer musical analysis for an entire keyboard, so horizontal scrolling was required:

```css
.keyboard-register {
  grid-area: footer;
  overflow: auto;
  white-space: nowrap;
  bottom: 0;
  height: 200px;
}

.white {
  width: 50px;
  height: 100%;
  display: inline-block;
  background: white;
  border-left: 1px solid black;
}

.black-positioning {
  position: relative;
  right: 1.5%;
  bottom: 30%;
}

.black-positioning::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 140px;
  bottom: 30%;
}
````


## 2. <a name="nn"></a>CSS-Grid

CSS-Grid organizes the components using this progressive grid-tool.

## 3. <a name="nn"></a>I-Frame

The Flat-IO Embedded score aims to give the users a starting point for selecting notes. A future implementation goal is to connect the score with the keyboard.

## 4. <a name="nn"></a>Musical Analyzer

Press the submit button to make an analysis of the notes that you've selected. If you've selected none, A major is returned by default.

## 5. <a name="nn"></a>Neural Network

See information about the neural network:
https://github.com/Adrianjewell91/first_neural_network



## Further Implementations:

1. Add Musical Score annotation feature.

2. Optimize neural-network/Django interactions.

3. Implement live-learning mechanism for neural network.
