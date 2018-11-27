# Theorizer: Analyze piano scores with neural network.

Theorizer helps students memorize piano music. MVP: http://theorizer.herokuapp.com

See neural network implementation  https://github.com/Adrianjewell91/first_neural_network

Adrian Jewell's solo piano album: https://www.soundcloud.com/adrianjewell

# Overview

Theorizer is a tool for musical education. At its core is an artificial intelligence that accepts input from either a keyboard or piano and returns useful information about the music, such as chord name for a very simple example. As a pianist, I might be having trouble memorizing a particular section of music, so I open up Theorizer and play that portion of the music. Theorizer should return to some useful information about the passage that helps me think about the passage more clearly and thereby me memorize it. 

Production is currently in beta, and currently classifies major chords in atypical arrangements. The Back-end is a Django framework with a densely connected feed forward neural network powered by Theano, Keras, and associated libraries. Front-end is a React.js/Redux single page application.

A Django backend powers a hand-rolled and trained dense neural network, built and exported with the Keras library. The Django backend loads the weights from the neural network, and serves analyses via an API. The frontend is a single page UI, built with React.js/Redux. Webpack manages frontend javascript assets. 

# Features:

1. [88-Key Input Piano, with horizontal scrolling.](#piano)
2. [CSS-Grid Layout.](#grid)
3. [Embedded I-Frame from Flat-IO.](#flat)
4. [Musical Analyzer.](#analyzer)
5. [Self Designed and Trained Neural Network to Recognize Chords.](#nn)
6. [Detailed Specification for Further Development](#spec)

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
```

## 2. <a name="nn"></a>CSS-Grid

CSS-Grid organizes the components using this progressive grid-tool.

## 3. <a name="nn"></a>I-Frame

The Flat-IO Embedded score aims to give the users a starting point for selecting notes. A future implementation goal is to connect the score with the keyboard.

## 4. <a name="nn"></a>Musical Analyzer

Press the submit button to make an analysis of the notes that you've selected. If you've selected none, A major is returned by default.

## 5. <a name="nn"></a>Neural Network

See information about the neural network:
https://github.com/Adrianjewell91/first_neural_network


## 6. <a name="spec"></a>Further Implementation: Specification for Further Development.

# Requirements

This section outlines the major requirements and justification for Theorizer, an interactive music theory analyzer that helps students memorize music more quickly.  There are two parts to the specification: the artificial intelligence and the user-interface. The user interface is the means through which the user inputs musical information. The A.I. will process the input and return useful information to the user. 

The ultimate goal of this project is to preserve everything that is known about how to memorize piano music,  an intellectual feat in and of itself. That is a huge undertaking, so in the meantime, we can satisfy ourselves with simply building a machine that can analyze patterns in music. 

What isn't discussed are the implementation details that are part of engineering a secure and reliable software product.

### User Interface: 

Users should be able to enter music information in three ways: listed in terms of priority:
1. By selecting information from a musical score (shown in the application), by using either resizable boxes that encapsulate chunks of music, or a pointer system to select and de-select notes. 
2. Through midi input that receive information. 
3. Through an on-screen keyboard, on which they press buttons to enter musical information. This musical keyboard may either be connected or disconnected to the musical score.


### The Middleware: 
The middleware, which will most likely necessary, will have to convert user input into a useable format for the artificial intelligence. One way, among many possible, of this this will be to represent information as a sequence of arrays that denote each time step in the musical work. For the requirements as they stand, each array will have 88 indices, consisting or either zeroes or ones, with a value of one denoting that particular pitch is being heard at that particular time.  At the early stages, musical information can perhaps be clumped by measure, but as rhythm becomes more of a factor in analysis, each array may need to denote a smaller and smaller unit of time, perhaps first by each beat, and then perhaps by each half note.  If a note is sustained longer than a single time frame, simply repeat that pitch in every time frame in which it would be heard. For example, consider a sequence of arrays are representing every half note, and the score contains quarter notes. Simply repeat the quarter notes in the subsequent time frame to account for the fact that a quarter note is equal to two half notes, and so forth.

It will also be necessary to write logic that converts the output of the musical AI into human reading information, whether that be in a writtne language, or musical notation. 

### The Musical-Analysis AI: 
The AI should be able to do a lot of things, ideally do everything an academic music theorist would be able to say about a work of classical piano from the earliest baroque works to twelve tone music. For the sake of this exercise, analysis is limited to music written using pitches that can be characterized and describes as a sequence of pitched on a piano keyboard. As such, any sequence of pitches that can be played on the 88 keys of the piano that has an organizational pattern is valid for analysis. To start, however, it should be very useful for the AI to be able to do the things below, in orders of priority:
1. Classify chords: The root note, inversion, and chord type (maj, min, dim, aug, dom7, min7, maj7, maj/min7, sus2/4, additional extensions). Output: English
2. Classify chord progressions with three chords: Given three groups of pitches, determine chord progression (I-V-I, I-vi-I, I-IV-I, I-IV-V, I-iv-V, I-ii6-V, I-ii-V, and equivalent progressions in the minor mode). When I say ‘groups of pitches’, I mean three groups of ideally three or more notes, but not so convoluted as to make the type of chord unidentifiable. 
3. Classify chord progressions with four chords, same as above.
4. Classify chord progressions with pitch names.
5. Classify scales as ionian (major), doran, Phrygian, lydian, mixolydian, aeolian, lydian, along with root. For scales with multiple classifications, show different options. For added bonus, determine the classification among valid options by context in the piece (this would be super cool). 
6. Read three-part chord progression and determine whether any rules of voice leading were broken, and name the pitch that broke the rule.
7. Read in a four-part chord progression and determine whether any rules of voice leading were broken.
8. Read in a three or four part progression and accurate separate out the voices, outputting one at a time. 
9. Read in a passage from a piano piece, and accurately separate piece into melody, harmony, and bass.
10. Read a a passage from a piano piece and separate out the voices, out putting one at a time. Output: potentially to color the score according to the melodies. 
11. Read in an entire musical piece, and determine the chord progressions by bar, along with any modulations. Output: A labeling and coloring of the score. 

# Rationale for Building Theorizer

### What people are forced to do now:

In this age, there are millions of eager piano students all over the world. A Google search returns 787 million results, and a Youtube search returns 564 million. Still, the truth is that most of those students are ignorant about how to memorize their pieces. I know this because after more than ten years of working collaboratively with musicians, and teaching students, I can reliably say that plenty of students wish they could memorize, but don’t know how. Why is this a problem? It’s really not, if you just like playing, but humans want to impress each other, and a student who sits down the play piece without the sheet music, and does it successfully, will undoubtedly impress their audience. I know this because I am asked again and again after a performance how I was able to memorize the music that I performed, and people are impressed. More people want to know about how I memorize than how I play “that one phrase” so beautifully. Only a connoisseur would ask me the latter question, while the lay audience, while they certainly enjoy the music, are equally impressed by the visual experience of watching music flow from a pianist without the score as an aid. They are somehow convinced that the music is more authentic; they are just moved by the experience.  I was just told this recently by my great Uncle, who said he found that the most impressive thing about a recent piano performance was that the pianist memorized the whole concert.

I can’t disagree, because memorizing will absolutely deepen the musician’s relationship with the music. The truth is that memorizing is quite simple as long as the student can see the larger patterns in the musical score. People love music and they want to play their favorite pieces. You can go on Youtube and learn almost any popular piece, and you can go on the internet to learn music theory, and learn all sorts of things about music, even about the classics. There are also many books about music. However, there aren’t any tools that can show you how to memorize that classical piece that you really like in a customized way. In this day and age, people want customized solutions. How do you memorize that specific passage in Clair de Lune or Fur Elise or that piece that you really like? How do you solve the one little spot that always gives you a memory slip? It’s not that simple, and it takes intellectual work, otherwise all amateur students would be able to do it easily. How many times have you tried to play a piece without the music and had a memory slip, or gotten stuck? We want to stop that from happening. 

My tool will help people memorize by showing them patterns in the score. When an individual can visualize the score in their mind, then they can memorize it. In order to visualize a score, they need to see the patterns in the score. For example, instead of seeing eight notes in a row, they need to see two chords. To carry this idea a step further, instead of seeing two chords, the students need to see a chord progression, perhaps from the tonic to the dominant. Lastly, in order to feel the value of these two chords, they need to hear a melody that is meaningful to them. This is just one way among many to ways to analyze music.  I’ll never forget when my uncle, a professional musician, gave me a lesson on Bach, and found all of these interesting melodies in the music.  Suddenly the music was easier to memorize, because I could hear the way the melodies interacted with each other. This latter approached is what is called the contrapuntal analysis, while the former is what musicians call the harmonic analysis.

The truth is that most students’ habit is to read note-by-note instead of looking for patterns. Certainly, a student needs to learn to read musical notation, but once the notes come naturally, then the next step needs to be the work of seeing patterns, and hearing those patterns in their mind. There is no tool that can take any classical score of your choosing, and decompose it into phrases or chord progressions, or point out other useful patterns, so that a student can see the patterns more quickly. Specifically, it needs to be able to do exactly what the user wants analyzed rather than provide some generalized response. It facilitates the work done by an individual who wants to have a knowledge of the score and be able to have intellectual knowledge about it. So in that sense, Theorizer is also a pedagogic tool for people who need it, because there are certainly many fine pianists who will never need a tool to help them memorize a score. In fact, once a student is competent in this kind of thinking, they shouldn’t need to use this tool any more. 

### What will I build?

Currently, I have built a proof-of-concept: a densely connected, feed-forward neural network that accurately classifies major chords with 100% accuracy for all typical major chords as well as atypical arrangements, and those with some common chord extensions. I’ve also built a web app for interfacing with the neural network. This is a preliminary investigation into the feasibility of Theorizer, and I hope to expand the network’s capability and even build other neural networks with much more capability.  See the code at github.com/theorizer, and github.com/first_neural_network. View the UI and working example here at www.theorizer.herokuapp.com.(use chrome browser please, and wait a few moments for it to load). Input notes with the keyboard and then press the button to get a response from the neural network.

It’s important to emphasize the value of customized learning. I could pick up a book any day and study music theory, but we want to start building intelligent tools that help people enjoy the experience of discovery in classical music in a way that addresses their specific questions. Yes, the tool aims to replace the teacher in a sense, but more to supplement the teacher, because vocabulary still must be studied and learned. This tool, more so, is a way to investigate the way that the masters use the language of music. Call it Natural Music Processing. Classical music is not about learning the notes, it’s about seeing patterns and thinking about them. An intelligent tool that help student discover the patterns will give them insight without having to get it from experienced teachers, who are expensive. 

### How will I monetize?

If Theorizer charges 10 cents per request to the artifical intelligence, it might generate 3,000 dollars a month in revenue by having 100 users who each make 10 requests a day, every day day of the month. Certainly, other revenue methods are possible. 

The more important question is how to secure the application so that there is no way to bypass security measures put in place to enforce a subscription. At the very least, requests to the A.I. will require authorization and authentication.

### Why is it hard to build? 

You can listen to me on Soundcloud or hear my solo recitals from my time at Oberlin, all of which were memorized and free from slips. This machine is hard to build because it requires domain-specific knowledge in music theory, piano repertoire, computer science, and experience with students of music. At this point, I have professional experience in all of these fields and still feel there is much learning to be done in order to completely understand the tools at my disposal. In fact, I hope to make some academic discovery through this research. That is all to say, this application can only be built by a musicians with knowledge of the problem and the solution, and have successfully solved the problem himself. 
