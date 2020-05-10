import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Container, Content, List, ListItem } from "native-base";
import { AllIcon } from "../ImportImage";

const AnalyzeG = () => {
  return(
      <List>
        <ListItem itemHeader first>
          <Text>음식종류</Text>
        </ListItem>
        <ListItem>
          <Text>Test</Text>
        </ListItem>
      </List>
  )
};
export default AnalyzeG;
