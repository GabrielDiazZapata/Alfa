import Ionicons from '@expo/vector-icons/Ionicons'
import {
  StyleSheet,
  Text,
  View,
  Switch,
} from "react-native";


const Header = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.titleHeader}>My Portfolio App</Text>
        <Ionicons style={styles.headerIcons}/>
        <Switch
          style ={styles.switchButton}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "grey",
    width:"100%",
    paddingTop: 65,
  },
  subContainer: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  titleHeader: {
    color: "white",
    marginTop: 2,
    width: "50%",
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 25,
  },
  switchButton: {
    marginRight: 20, 
  },
  headerIcons: {
    verticalAlign: "middle",
    marginLeft: 60
  }
});
