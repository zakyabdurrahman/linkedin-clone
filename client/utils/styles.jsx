import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
  },
  postsContainer: {
    backgroundColor: "gray",
    flex: 1,
  },
  postContainer: {
    backgroundColor: "white",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addPostForm: {
    fontSize: 18,
    borderWidth: 0.3,
    padding: 10,
    fontFamily: "monospace",
    textAlignVertical: "top",
    marginBottom: 10,
  },
  addPostSingleForm: {
    fontSize: 18,
    borderWidth: 0.3,
    padding: 10,
    marginTop: 10,

    fontFamily: "monospace",
  },
  postsNavbar: {
    backgroundColor: "white",

    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  linkedinLogo: {
    height: 110,
    width: 150,
  },
  loginTextContainer: {
    paddingLeft: 20,
  },
  formGroupLogin: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  form: {
    marginTop: 15,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  h1Login: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
