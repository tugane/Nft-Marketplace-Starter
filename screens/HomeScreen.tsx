import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import {
  categories,
  categoryInterface,
  collectionInterface,
  collections,
  user,
} from "../data";
import Font from "../constants/Font";
import Layout from "../constants/Layout";
import { BlurView } from "expo-blur";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const SIZE = Spacing * 6;
const NFT_HEIGHT = Spacing * 45;
const NFT_WIDTH = Layout.window.width - Spacing * 4;

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation: { navigate },
}) => {
  const [activeCategory, setActiveCategory] = useState<
    categoryInterface | undefined
  >(undefined);

  const [collectionList, setCollectionList] = useState<collectionInterface[]>(
    []
  );

  useEffect(() => {
    setCollectionList(
      collections.filter(
        (collection) => collection.category.id === activeCategory?.id
      )
    );
  }, [activeCategory?.id]);

  useEffect(() => {
    setActiveCategory(categories[0]);
  }, []);

  return (
    <>
      <Text>HomeScreen</Text>
    </>
  );
};

export default HomeScreen;
