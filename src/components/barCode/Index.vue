
<template>
  <van-actionsheet v-model="showBarcode.boo" :actions="actions" cancel-text="Cancel" />
</template>

<script>
/* eslint-disable */

export default {
  // name: '',
  data () {
    return {
      actions: [
        {
          name: '摄像头扫码',
          callback: this.scanViaCamera
        },
        {
          name: '从相册中选择',
          callback: this.scanViaAlbum
        }
      ]
    }
  },
  props: {
    showBarcode: Object
  },
  methods: {
    //  从相册中选取扫描
    scanViaAlbum () {
      function setOptions (srcType) {
        var options = {
        // Some common settings are 20, 50, and 100
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          // In this app, dynamically set the picture source, Camera or photo gallery
          sourceType: srcType,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE,
          allowEdit: false,
          correctOrientation: true // Corrects Android orientation quirks
        }
        return options
      }
      function openFilePicker () {
        var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM
        var options = setOptions(srcType)

        navigator.camera.getPicture(function cameraSuccess (imageUri) {
          console.log(imageUri)
          window.qrcode.decode(imageUri)
          window.qrcode.callback = function (imgMsg) {
            console.log(imgMsg)
          }
        // Do something
        }, function cameraError (error) {
          console.debug('Unable to obtain picture: ' + error, 'app')
        }, options)
      }

      openFilePicker()
    },
    //  通过相机扫描
    scanViaCamera () {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          console.log('We got a barcode\n' +
                'Result: ' + result.text + '\n' +
                'Format: ' + result.format + '\n' +
                'Cancelled: ' + result.cancelled)
        },
        function (error) {
          console.log('Scanning failed: ' + error)
        },
        {
          preferFrontCamera: false, // iOS and Android
          showFlipCameraButton: false, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: 'QR_CODE', // default: all but PDF_417 and RSS_EXPANDED
          orientation: 'portrait', // Android only (portrait 竖屏|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false // iOS and Android
        }
      )
    }
  }
}
</script>
