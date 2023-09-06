import { StyleSheet } from "react-native"

const colors = {
  blue: "#1E6F9F",
}

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flex: 1,
  },
  containerTop: {
    height: 173,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
  },
  containerTopIntern: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  buttonAdd: {
    backgroundColor: colors.blue,
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  inputAdd: {
    height: 50,
    width: 275,
    color: "white",
    paddingLeft: 20,
    backgroundColor: "#262626",
    borderRadius: 5,
  },
  containerInputAdd: {
    position: "absolute",
    bottom: -85,
    flexDirection: "row",
    gap: 7,
  },
  containerTasks: {
    marginTop: 40,
    paddingHorizontal: 30,
    gap: 20,
    flex: 1,
  },
  conclusionTasks: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  conclusionNumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  containerNumber: {
    width: 26,
    height: 20,
    borderRadius: 12000,
    backgroundColor: "#333333",
  },
  containerTasksComponents: {
    alignItems: "center",
    gap: 5,
  },
})
