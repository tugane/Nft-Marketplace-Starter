import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { BlurView } from "expo-blur";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { user } from "../data";
import Font from "../constants/Font";

type MakeBidScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MakeBidScreen"
>;

const BUTTON_SIZE = Spacing * 7;

const MakeBidScreen: React.FC<MakeBidScreenProps> = ({
  navigation: { goBack },
  route: {
    params: { image, currency },
  },
}) => {
  return (
    <>
      <Text>MakeBidScreen</Text>
    </>
  );
};

export default MakeBidScreen;
