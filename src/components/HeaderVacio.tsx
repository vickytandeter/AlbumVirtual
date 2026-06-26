import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Feather } from "@expo/vector-icons";

function HeaderVacio(){

    return(

        <View>
            <TouchableOpacity accessibilityLabel="Volver">
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <Text>Título</Text>
        </View>
    );
}

export default HeaderVacio;