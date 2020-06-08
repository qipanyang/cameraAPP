import React, {useState, useEffect, Component, PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Button,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import ToolBar from './ToolBar';
import CameraRoll, {saveToCameraRoll} from '@react-native-community/cameraroll';
import {Col, Row, Grid} from 'react-native-easy-grid';

class CameraPage extends React.Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.state = {
      flashMode: RNCamera.Constants.FlashMode.off,
      exposure: 0.5,
      autoFocus: RNCamera.Constants.AutoFocus.on,
    };
  }

  render() {
    const {flashMode, exposure, autoFocus} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={flashMode}
            exposure={exposure}
            autoFocus={autoFocus}
            pictureSize={'352x288'}
          />
        </View>
        <View>
          <Grid style={styles.bottomToolbar}>
            <Row>
              <Col size={2} style={styles.alignCenter}>
                <Button title="switch" />
              </Col>
              <Col size={2} style={styles.alignCenter}>
                <TouchableOpacity>
                  <Button
                    style={styles.captureBtn}
                    title={'Snap'}
                    onPress={this.takePicture.bind(this)}
                  />
                </TouchableOpacity>
              </Col>
            </Row>
          </Grid>

          {/*<View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>*/}
          {/*    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>*/}
          {/*        <Text style={{ fontSize: 14 }}> SNAP </Text>*/}
          {/*    </TouchableOpacity>*/}
          {/*</View>*/}
        </View>
      </View>
    );
  }
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.1, base64: true};
      // const data = await this.camera.takePictureAsync(options);
      await this.camera.takePictureAsync(options);
      // console.log(data.uri);
      // await CameraRoll.saveToCameraRoll(data.uri);
    }
  };
}

const {width: winWidth, height: winHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1,
  },
  shareButton: {
    alignContent: 'center',
    position: 'absolute',
    width: 300,
    padding: 10,
    bottom: 0,
    left: 0,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  bottomToolbar: {
    width: winWidth,
    position: 'absolute',
    height: 100,
    bottom: 0,
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: '#FFFFFF',
  },
  captureBtnActive: {
    width: 80,
    height: 80,
  },
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: 'red',
    borderColor: 'transparent',
  },
});

export default CameraPage;
