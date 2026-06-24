import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';


function FormLogIn() {

    const navigation = useNavigation();
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    return(

        <View>
            
            <Text>Correo</Text>

            <TextInput
                value={correo}
                onChangeText={setCorreo}
                placeholder="Introduce tu correo"
                keyboardType="email-address"
                autoCapitalize="none"
                accessibilityLabel="Campo correo"
            />

            <Text>Contraseña</Text>

            <View>

                <TextInput
                    value={contrasena}
                    onChangeText={setContrasena}
                    placeholder="••••••••"
                    secureTextEntry={!mostrarContrasena}
                    accessibilityLabel="Campo contraseña"
                />

                <TouchableOpacity
                    onPress={() =>
                        setMostrarContrasena(!mostrarContrasena)
                    }
                    accessibilityLabel={
                        mostrarContrasena
                            ? 'Ocultar contraseña'
                            : 'Mostrar contraseña'
                    }
                >

                    <Feather
                        name={mostrarContrasena ? "eye-off" : "eye"}
                        size={22}
                        color="black"
                    />

                </TouchableOpacity>

            </View>

            <TouchableOpacity                
                onPress={() => navigation.navigate('' as never)}
                accessibilityLabel="Continuar"
            ></TouchableOpacity>

        </View>

    );

}

export default FormLogIn;