import { Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.menuText,
    fontWeight: theme.fontWeights.bold,
    margin: theme.margins.standardMargin,
    fontFamily: theme.fonts.main
  }
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default AppBarTab;