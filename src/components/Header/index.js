import { SafeAreaView } from "react-native-safe-area-context";
import { View , Text } from "react-native";
import { style } from "./style";

export default function Header({title}) {
    return (
        <SafeAreaView  style={style.container}>
            <Text style={style.txt}>{title}</Text>
        </SafeAreaView>
    )
}