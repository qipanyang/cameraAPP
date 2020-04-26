import React, {useState, useEffect, Component, PureComponent} from 'react';
import { Camera, RNCamera } from 'react-native-camera';
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";
import ToolBar from "./ToolBar"
import CameraRoll, { saveToCameraRoll } from "@react-native-community/cameraroll";


class CameraPage extends React.Component {
    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
    }
    state = {
        flashMode: RNCamera.Constants.FlashMode.off,
        exposure: -1,
        autoFocus: RNCamera.Constants.AutoFocus.on,
        resolution: RNCamera.Constants.VideoQuality["2160p"],
    }
    render()
    {
        const {flashMode,exposure,autoFocus, resolution} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={flashMode}
                        exposure={exposure}
                        autoFocus={autoFocus}
                        defaultVideoQuality={resolution}

                    />
                    {/*<ToolBar*/}
                    {/*    flashMode={this.flashMode}*/}
                    {/*    setFlashMode={this.setFlashMode}*/}
                    {/*    onShortCapture={this.takePicture}*/}
                    {/*/>*/}

                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={()=>{this.setState({resolution: RNCamera.Constants.VideoQuality["288p"]})}} style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> flash </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> SNAP </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    takePicture = async() => {
        if (this.camera) {
            const options = { quality: 0.1, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            await CameraRoll.saveToCameraRoll(data.uri);
        }
    };
};

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
});

export default CameraPage;
