import Ionicons from '@expo/vector-icons/Ionicons'
import {
  StyleSheet,
  Text,
  View,
  Switch,
} from "react-native";

type HeaderProps = {
  isEnabled: boolean,
  setIsEnabled: Function
}

const Header = (props: HeaderProps) => {
  const {isEnabled, setIsEnabled} = props
  const toggleSwitch = () => setIsEnabled((previousState:boolean) => !previousState);
  return (
    <View style={[styles.topContainer, {backgroundColor: isEnabled ? "grey" : "#383A42"}]}>
      <View style={styles.subContainer}>
        <Text style={styles.titleHeader}>My Portfolio App</Text>
        <Ionicons style={styles.headerIcons} name={isEnabled ? "sunny-outline" : "moon-outline"} size={30}/>
        <Switch
          style ={styles.switchButton}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
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
