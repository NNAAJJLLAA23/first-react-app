import {view, text, styleSheet} from "react-native";

const ExcerciseScreen =  () => {
  const firstname= "john";
  const lastName = "doe";
  let birthDate= "09/13/2000";

  const fullname = firistname + " " + lastName;

  return (
    <View style={styleSheet.container}>
      <Text style= {styles.bigText}>students info </Text>
      <Text> ime i prezime : {fullname}</Text>
      <Text> datum rođenja : {birthdate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  bigText:{ 
    fontSize: 24,
    frontWeight: "bold",
    marginBottom: 10,
  }
})

