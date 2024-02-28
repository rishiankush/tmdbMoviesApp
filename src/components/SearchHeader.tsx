import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import BaseFontStyle from "../constants/BaseFontStyle";
import Colors from "../constants/Colors";
import StaticText from "../constants/StaticText";
import { LinearGradient } from "expo-linear-gradient";

interface SearchHeaderProps {}

const SearchHeader: React.FC<SearchHeaderProps> = ({ route }) => {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.headerContainer}>
      <Text style={[BaseFontStyle.bold.xx_large, { color: Colors.WHITE }]}>
        {StaticText.WELCOME}
      </Text>
      <Text style={[BaseFontStyle.bold.large, { color: Colors.WHITE }]}>
        {StaticText.WELCOME_DESC}
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={[BaseFontStyle.regular.x_small, { height: 40, flex: 0.7 }]}
          placeholder={StaticText.SEARCH_PLACEHOLDER}
          onChangeText={onChangeText}
          value={text}
        />
        <LinearGradient
          colors={["rgb(30,213,169)", "rgb(1,180,228)"]}
          style={styles.linearGradientStyle}
        >
          <Text style={[BaseFontStyle.bold.small, { color: Colors.WHITE }]}>
            Search
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    padding: 20,
  },
  searchContainer: {
    marginTop: "10%",
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderRadius: 30,
  },
  linearGradientStyle: {
    flex: 0.3,
    borderRadius: 30,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchHeader;
