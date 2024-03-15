import { View, Text, TextInput, Button } from "react-native";

function HomePage(navigation) {
  const [username, setUsername] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Text styles={style.userName}>Username:</Text>
        <TextInput
          value={username}
          onChangeText={(newValue) => setUsername(newValue)}
        />
      </View>
      <Button
        onPress={() => {
          navigation.navigate("VideoCallPage", {
            userName,
          });
        }}
        title="Join Call"
      />
    </>
  );
}

export default HomePage;

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  userName: {
    fontWeight: "bold",
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    fontSize: 30,
  },
};
