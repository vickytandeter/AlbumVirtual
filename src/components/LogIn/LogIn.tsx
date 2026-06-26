import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HeaderVacio from '@/components/HeaderVacio'
import FormLogIn from '@/components/LogIn/FormLogIn'

function LogIn() {
  return (
    <View>

        <HeaderVacio />

        <View>
        <Text>Inicio de Sesión</Text>
        <FormLogIn />
        </View>
        <Text>¿No tienes una cuenta?</Text>

        <TouchableOpacity
            onPress={() => navigation.navigate('registro' as never)}
            accessibilityLabel="Registrate"
        >
            <Text>Registrate</Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default LogIn