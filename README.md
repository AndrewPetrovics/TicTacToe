# TicTacToe
A simple app meant to demonstrate basic proficiency using React Native.

# Architecture
The app uses a psuedo-MVVM architecture with three basic layers: app, database, and business logic.

## Why MVVM?
This is typically my go to architecture for mobile or desktop application development (regardless of the language or frameworkout) mainly because I really like the fairly strict decoupling of the view and view model which makes maintaincence a lot eaiser in my opinion.

## Is MVVM the best choice?
For React Native, probably not, due to the coupling nature of state and rendering. I've basically side-stepped all state management protocols and am pretty sure it's really inefficient from a rendering standpoint. However, for basic apps like this, I can't detect any performance issues.

## What would be a better choice?
Probably Redux.

# Database
I spun up a simple Firebase database with anonymous authentication

## Why?
I found it difficult to demonstrate basic code organization and project structure without having a database layer and at least a few screens.

