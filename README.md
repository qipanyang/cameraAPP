# cameraAPP
## 1.	Environment setup
Install NodeJS 
		https://nodejs.org/en/download/
Install xcode (for mojave, only xcode 11.3 is available.) 
  https://developer.apple.com/download/more/
install cocoapods: 
  brew install cocoapods --build-from-source && brew link --overwrite cocoapods

## 2.	Deploy the application on iPhone using cable (tutorial video: https://www.youtube.com/watch?v=RBZL6PO2ytc)
(1)	Git clone https://github.com/qipanyang/cameraAPP
(2)	Double click ./ ios/.xworkspace to open the project with xcode
(3)	Product->destination select your iPhone device
(4)	Click the project name (camera) on the left panel
(5)	Selelct Signing & Capabilities (on the top menu) -> select team(using your Apple ID) & add “ness” in the end of the Buddle identifier
(6)	Do the same thing in tests in the target on the left
(7)	On your iPhone, setting->general->Device Management
(8)	Click run button in the top menu to build and run

## 3. usage
Click go to camera on the home page.
Click snap to take a picture, and the picturn will be saved in your album.
