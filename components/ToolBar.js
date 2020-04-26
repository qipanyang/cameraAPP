import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity, Dimensions, StyleSheet, Button, Text } from 'react-native';
import {RNCamera} from "react-native-camera";

export default function ToolBar({
                                    flashMode, setFlashMode,
                                    onShortCapture,
                                }){
    return(
        <Grid style={styles.bottomToolbar}>
            <Row>
                <Col style={styles.alignCenter}>
                    <Button title = "flash" onPress={() => setFlashMode(
                        flashMode == RNCamera.Constants.FlashMode.on ? RNCamera.Constants.FlashMode.off : RNCamera.Constants.FlashMode.on
                    )}>
                    </Button>
                </Col>
                <Col size={2} style={styles.alignCenter}>
                    <TouchableWithoutFeedback
                        onPress={onShortCapture.bind(this)}>
                        <View style={styles.captureBtn}>
                        </View>
                    </TouchableWithoutFeedback>
                </Col>
            </Row>
        </Grid>
    );
};

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
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
        borderColor: "#FFFFFF",
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
        backgroundColor: "red",
        borderColor: "transparent",
    },
    galleryContainer: {
        bottom: 100
    },
    galleryImageContainer: {
        width: 75,
        height: 75,
        marginRight: 5
    },
    galleryImage: {
        width: 75,
        height: 75
    }
});
