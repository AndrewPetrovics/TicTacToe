# Tic Tac Toe
A simple app meant to demonstrate basic proficiency using React Native.

## How to run
```
git clone https://github.com/AndrewPetrovics/TicTacToe
cd TicTacToe
npm install
npx react-native run-ios 
```

## Architecture
The app uses a psuedo-MVVM architecture with three basic layers: app, database, and business logic.

#### Why MVVM?
This is typically my go to architecture for mobile or desktop application development (regardless of the language or frameworkout) mainly because I really like the fairly strict decoupling of the view and view model which makes maintaincence a lot eaiser in my opinion.

#### Is MVVM the best choice?
For React Native, probably not, due to the coupling nature of state and rendering. I've basically side-stepped all state management protocols and am pretty sure it's really inefficient from a rendering standpoint. However, for basic apps like this, I can't detect any performance issues.

#### What would be a better choice?
Probably Redux.


## Database
I spun up a simple Firebase database with anonymous authentication

#### Why?
I found it difficult to demonstrate basic code organization and project structure without having a database layer and at least a few screens.


## Other notes

#### Firebase timer warnings on Android
Android will show a timer warning on Android for some reason. This is mainly because I used the web SDK instead of the native Android SDK in the interest of time.

#### Testing
This was tested on an iPhoneX simulator and Android Pixel 2 emulator. This was not tested on a physical device.

#### Total time spent
~2-3 hours total inbetween other tasks
