import React from "react";
import { View } from "react-native";
import { SparklesIcon } from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

const Icons = () => {
  return (
    <View>
      <SparklesIcon />
      <SparklesIconOutline />
      <SparklesIconMini />
    </View>
  );
};

export default Icons;
