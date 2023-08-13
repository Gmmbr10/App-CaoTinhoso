import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },

    btns: {
        width: "100%",
        height: "88%",
        paddingHorizontal: 28,
        justifyContent: "center",
        alignItems: "center",
        gap: 48,
    },

    btn: {
        width: "100%",
        height: "25%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f59e0b",
        borderRadius: 28
    },

    txtBtn: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 24,
    }
});

export default style;