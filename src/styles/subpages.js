import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    main: {
        width: "100%",
        height: "88%",
        paddingHorizontal: 28,
        paddingVertical: 24,
    },

    image: {
        width: "100%",
        height: "40%",
        resizeMode: "contain",
        marginBottom: 16,
    },

    txt: {
        textAlign: "justify",
        lineHeight: 30
    },

    subTitle: {
        fontWeight: "bold",
    }
});

export default style;