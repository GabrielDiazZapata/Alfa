import { StyleSheet, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';

type QrCodeProps = {
  qrURL: string;
}

const QrCode = (props: QrCodeProps) => {
  const { qrURL } = props;
  return (
    <View style={styles.qrCodeStyle}>
      <QRCode value={qrURL} />
    </View>
  )
}

export default QrCode

const styles = StyleSheet.create({
    
    qrCodeStyle: {
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      }
})