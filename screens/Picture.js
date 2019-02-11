import React from 'react';
import { Text, View, Button, Modal, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraView extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    photo: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No acess to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={cam => {
              this.camera = cam;
            }}
          />
          <Button
            style={{ flex: 1 }}
            title='snap!'
            onPress={() => {
              if (this.camera) {
                this.camera.takePictureAsync().then(photo => {
                  // カメラオブジェクト取得
                  this.setState({ photo: photo });
                  // 三秒後にモーダルを閉じる
                  setTimeout(() => {
                    this.setState({ photo: null });
                  }, 3000);
                });
              }
            }}
          />
          <Modal
            animationType='slide'
            visible={this.state.photo !== null}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}
          >
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{
                uri: this.state.photo === null ? '' : this.state.photo.uri
              }}
            />
          </Modal>
        </View>
      );
    }
  }
}
