# Theorizer: Analyze piano scores with neural network.

Theorizer helps students memorize piano music. http://theorizer.herokuapp.com

# Background and Overview

This section outlines the requirements and justification for Theorizer, an interactive music theory analyzer that helps students memorize their music more quickly.  There are two parts to the specification: the neural network itself and the user-interface. The user interface is the application through which the user inputs musical information, and the neural network will accept the input and return useful information to the user. The ultimate goal of this project is to preserve everything that is known about western classical music, specifically from the piano repertoire. That is a huge undertaking, in the meantime, we can satisfy ourselves with simply building a machine that can analyze patterns in music. 

As a pianist, I’m having trouble memorizing this particular section of music, so I open up Theorizer and play that portion of the music. Theorizer should return to some useful information about the passage that helps me think about the passage more clearly and thus helps me memorize it. 

# Technologies

Theorizer is a tool for musical education. A neural network accepts input from either a keyboard or piano and returns musical information, such as chord name (C, D, E).

Production is currently in beta, and currently only classifies major chords. Back-end is a Django framework with a Neural Network powered by Theano, Keras, and associated libraries. Front-end is a React.js/Redux single page application.

A Django backend powers a self-designed and trained  dense neural network, built and exported with the Keras library. The Django backend loads the weights from the neural network, and serves analyses with an API. The frontend is a single page UI, built with React.js/Redux. Webpack manages frontend javascript assets.  

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


## 6. <a name="spec"></a>Further Implementation: Specification for Further Development.

### User Interface: 

Users should be able to enter music information in three ways: listed in terms of priority:
1. By selecting information from a musical score (shown in the application), by using resizable boxes that encapsulate chunks of music. 
2. Through midi input that receive information and converts it into a musical score. 
3. Through an on-screen keyboard and musical score, on which they press buttons to enter musical information.

The UI needs a complete remake using a more lightwieght framework, and of course, the input methods need to be developed.

### The Middleware: 
The middleware, most likely necessary, will have to convert midi input into a sequence of arrays that denote each time step in the musical work. For the requirements below, each array will have 88 indices, consisting or either zeroes or ones, with a value of one denoting that particular pitch is being heard at that time.  At the early stages, musical information can perhaps be clumped by measure, but as rhythm becomes more of a factor in analysis, each array may need to denote a smaller and smaller unit of time, perhaps first by each beat, and then perhaps by each half note.  If a note is sustained longer than a single time frame, simply repeat that pitch in every time frame in which it would be heard. For example, if the sequence of arrays is representing every half note, and the score contains quarter notes, simply repeat the quarter notes in the immediately subsequent time frame to account for the fact that a quarter note is equal to two half notes, and so forth.

It certainly also be necessary to write logic that converts the output of the musical AI into human reading information, whether that be English, or musical notation. 

### The Musical-Analysis AI: 
The AI should be able to do a lot of things, ideally do everything an academic music theorist would be able to say about a work of classical piano from the earliest baroque works to twelve tone music. Any sequence of pitches that can be played on the 88 keys of the piano that has an organizational pattern is valid for analysis. To start, however, it should be very useful for the AI to be able to do the things below, in orders of priority:
1. Classify chords: The root, inversion, and chord type (maj, min, dim, aug, dom7, min7, maj7, maj/min7, sus2/4, additional extensions). Output: English
2. Classify chord progressions with three chords: Given three groups of pitches, determine chord progression (I-V-I, I-vi-I, I-IV-I, I-IV-V, I-iv-V, I-ii6-V, I-ii-V, and equivalent progressions in the minor mode). When I say ‘groups of pitches’, I mean three groups of ideally three or more notes, but not so convoluted as to make the type of chord unidentifiable. 
3. Classify chord progressions with four chords, same as above.
4. Classify chord progressions with pitch names.
5. Classify scales as ionian (major), doran, Phrygian, lydian, mixolydian, aeolian, lydian, along with root, and show different options. 
6. Read three-part chord progression and determine whether any rules of voice leading were broken, and name the pitch that broke the rule.
7. Read in a four-part chord progression and determine whether any rules of voice leading were broken.
8. Read in a three or four part progression and accurate separate out the voices, outputting one at a time. 
9. Read in a passage from a piano piece, and accurately separate piece into melody, harmony, and bass.
10. Read a a passage from a piano piece and separate out the voices, out putting one at a time. Output: potentially to color the score according to the melodies. 
11. Read in an entire musical piece, and determine the chord progressions by bar, along with any modulations. Output: A labeling and coloring of the score. 


### What people are forced to do now:

In this age, there are millions of eager piano students all over the world. A Google search returns 787 million results, and a Youtube search returns 564 million. But, the truth is that most of those students are ignorant about how to memorize their pieces. I know this because after more than ten years of working collaboratively with musicians, and teaching students, I can reliably say that plenty of students wish they could memorize, but don’t know how. Why is this a problem? It’s really not, if you just like playing, but humans want to impress each other, and a student who sits down the play piece without the sheet music, and does it successfully, will undoubtedly impress their audience. I know this because I am asked again and again after a performance how I was able to memorize the music, and people are impressed. More people want to know about how I memorize than how I play “that one phrase” so beautifully. Only a connoisseur would ask me the latter question, while the lay audience, while they certainly enjoy the music, are equally impressed by the visual experience of watching music flow from a pianist without the score. They are somehow convinced that the music is more authentic, they are just moved by the experience.  I was just told this yesterday by my great Uncle, who said he found that the most impressive thing about piano was when a pianist can memorize the music, sit down and play it.

I honestly can’t disagree, because memorizing will absolutely deepen the musician’s relationship with the music. The truth is that memorizing is quite simple, as long as the student can see the larger patterns in the musical score. People love music and they want to play their favorite pieces. You can go on Youtube and learn almost any popular piece, and you can go on the internet and learn music theory, and learn all sorts of things about music, and even about the classics. There are also many books about music. However, there aren’t any tools that can show you how to memorize that classical piece that you really like in a customized way. In this day and age, people want customized solutions. How do you memorize Clair de Lune or Fur Elise or that piece that you really like? It’s not that simple, and it takes intellectual work, otherwise all amateur students would be able to do it easily. How many times have you tried to play a piece without the music and had a memory slip, or gotten stuck? We want to stop that from happening. 

My tool will help people memorize by showing them patterns in the score. When an individual can visualize the score in their mind, then they can memorize it. In order to visualize a score, they need to see the patterns in the score. For example, instead of seeing eight notes in a row, they need to see two chords. To carry this idea a step further, instead of seeing two chords, the students need to see a chord progression from the tonic to the dominant. Lastly, in order to feel the value of these two chords, they need to hear a melody that is meaningful to them. There are other ways to analyze music too.  I’ll never forget when my uncle, a professional musician, gave me a lesson on Bach, and found all of these interesting melodies in the music.  Suddenly the music was easier to memorize.

The truth is that most students’ habit is to read note-by-note instead of looking for patterns. Certainly, a student needs to learn to read musical notation, but once the notes are fluent, then the next steps needs to be the work of seeing patterns, and hearing those patterns in their mind. There is no tool that can take any classical score of your choosing, and decompose it into phrases or chord progressions, or point out other useful patterns, so that a student can see the patterns more quickly. It facilitates the work done by an individual who wants to have a knowledge of the score and be able communicate it. So in that sense, it’s a pedagogic tool for people who need it, because there are certainly many fine pianists who will never need a tool to help them analyze a score. In fact, once a student is competent in this kind of work, they shouldn’t need to use this tool any more. 

### What will I build?

Warning: Understanding the details of this application will require knowledge of computer science and music theory, and the challenges of piano performance. 

Currently, I have built a densely connected, feed-forward neural network that accurately classifies major chords with 100% accuracy for all typical major chords as well as atypical arrangements or those with some common chord extensions. I’ve also built a User Interface for interfacing with the neural network. This is a preliminary investigation into the feasibility of this work, and I hope to expand the network’s capability and even built other neural networks, with much more capability.  See the code at github.com/theorizer, and github.com/first_neural_network. View the UI and working example here at www.theorizer.herokuapp.com.(use chrome browser please, and wait a few moments for it to load). Input notes with the keyboard and then press the button to get a response from the neural network.

In its finished state, this tool will accept as inputs: a musical score, or portion thereof, formatted in some way that is useful to the machine, and customizable by the user, and return as output: some useful information about the musical score that is relevant to the student. It could be as simple as how many notes make up the piece, to something as sophisticated as a breakdown of the music into melody, harmony, accompaniment, as well as a complete chord-progression analysis and correct indications of any modulation.  In between these extremes of analysis there are many options, such as a single chord analyses or scale that makes of a selection of notes. No matter what the student needs, the machine should be able to produce information that will help the student memorize the music.

It’s important to emphasize the value of customized learning here. I could pick up a book any day and study music theory, but we want to start building intelligent tools that help people enjoy the experience of discovery in classical music. Classical music is not about learning the notes, it’s about seeing patterns and thinking about them. An intelligent tool that help student discover the patterns will give them insight without having to get it from experienced teachers who are expensive. 

### How will I monetize?

This is largely an academic product, but if it required monetizing, charging for API requests to the machine learning software, monetizing with a subscription, monetizing with advertisement from piano companies. Ideally, I don’t want teachers to charge more money, nor do I want to charge more money to students, because music is hard enough to learn.  

### Why is it hard to build? 

Only someone who has solved the problem can build the solution. You can listen to me on Soundcloud or hear my solo recitals from my time at Oberlin, all of which were memorized and free from slips. This machine is hard to build because it requires domain-specific knowledge in music theory, piano repertoire, computer science, and experience with students of music. At this point, I have professional experience in all of these fields and still feel like there is much work to be done in order to completely understand the tools at my disposal, and perhaps there are new tools that will help me. In fact, I hope to make some academic discovery through this research. That is all to say, this application can only be built by a musicians with knowledge of the problem and the solution, and have successfully solved the problem himself. 
