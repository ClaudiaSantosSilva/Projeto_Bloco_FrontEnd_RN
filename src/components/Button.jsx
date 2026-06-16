import React from "react";
import { Pressable, Text } from "react-native";

export default function Button({ accessibilityLabel, onPress, children, style }) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={style} 
    >
      {typeof children === "string" ? <Text>{children}</Text> : children}
    </Pressable>
  );
}