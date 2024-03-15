import React, { Component } from "react";
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from "@zegocloud/zego-uikit-prebuilt-call-rn";

export default function VoiceCallPage({ route, navigation }) {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={yourAppID}
        appSign={yourAppSign}
        userID={userName} // userID can be something like a phone number or the user id on your own user system.
        userName={userName}
        callID={"myCallId"} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            navigation.navigate("HomePage");
          },
          onHangUp: () => {
            navigation.navigate("HomePage");
          },
        }}
      />
    </View>
  );
}
