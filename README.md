# cameraAPP v0.0.0
Our final aim is to develop a iOS application for three-dimensional deflectometry-based surface measurements.

There are two parts:
- an iOS application that displays some fringe images and provides camera controls via web-interface.
- a web application with a web-server as backend that can remotely set the iOS camera and control the display content. 

The cameraApp v0.0.0 is a primitive version for the iOS application. For now, the application can take raw pictures using the front camera of iPhone with the access to set the exposure and resolution. The setting could be done manually be modified the code of ./components/CameraPage.js. 

## Architecture
The application is built throough React Native. For the camera access, we are using the component [RNCamera](https://react-native-community.github.io/react-native-camera/docs/rncamera). It uses AVfoundation to get access to the camera. To meet our requirements for photo capturing, we modified its native code in node_modules/react-native-camera/ios/RN/ to change the interface of component and its function -- takePictureAsync(). 

## Environment setup
### Install [NodeJS](https://nodejs.org/en/download/)
### Install [Xcode](https://developer.apple.com/download/more/) (for mojave, only xcode 11.3 is available.)   
### Install cocoapods: 
```
brew install cocoapods --build-from-source && brew link --overwrite cocoapods
```

## Deploy the application on iPhone using cable ([tutorial video](https://www.youtube.com/watch?v=RBZL6PO2ytc))
1. clone this repo
```
git clone https://github.com/qipanyang/cameraAPP
```
2. connect your iPhone with the computer through a cable

3. Double click ./camearaApp/ios/camera.xcworkspace to open the project with Xcode

4. Product->destination select your iPhone device

5. Click the project name (which is "camera") on the left panel

6. Select Signing & Capabilities (on the top menu) -> select team(using your Apple ID) 

7. Modify Buddle identifier. Append “ness” in the end of the "camera"

8. Do the same thing in tests in the target on the left

9. On your iPhone, setting->general->Device Management

10. Click run button in the top menu in Xcode to build and run


## Usage
- Connect your iPhone with the computer through a cable

- Double click ./camearaApp/ios/camera.xcworkspace to open the project with Xcode. Then click run button in the top menu to run the app on your phone. 

- In the app, click go to camera on the home page.

- Click snap to take a picture, and the picturn will be saved in your album.

- For exposure and resolution settings, open the file .cameraApp/components/CameraPage.js and make a change on line 22 and 24.

    The valid value for exposure are float numbers from 0 to 1 and -1(default). 

    The valid resolution options for front camera on iPhone 8 are "High", "Medium", "Low", "1280x720" and "None".


## Acknowledgements
This project is led by Panyang Qi (Computer Science MS, Northwestern University) and Bingyu Jiang (Electronic Engineer MS, Northwestern University) with the assistance of Dr. Oliver Cossairt, Dr. Florian Willomitzer, Florian Schiffers and others from the Computational Photography Lab at Northwestern University.
