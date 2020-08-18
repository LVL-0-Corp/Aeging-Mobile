import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';



function ProfilView({ navigation, route }) {
    const [data, setData] = React.useState({
        pseudo: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (value) => {
        if(value.length != 0){
            setData({
                ...data,
                pseudo: value,
                check_textInputChange: true
            })
        }else {
            setData({
                ...data,
                pseudo: value,
                check_textInputChange: false
            })
        }
    }

    const handlepasswordChange = (value) => {
        setData({
            ...data,
            password: value,
        })
    }

    const updatePasswordSee = (value) => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                >

                        <View style={styles.container}>
                            <Text style={{flex:1, paddingTop: 20, color:'#35D19E', fontSize: 20, fontFamily: 'futura-medium-bt', textAlign:'center', paddingBottom: 150}}>
                                Se connecter
                            </Text>
                        </View>
                        <View style={styles.container}>
                            {/* <Icon
                                name="user"
                                color="#05375a"
                                size={25}
                            /> */}
                            <TextInput
                                placeholder="contact@localgo.com"
                                placeholderTextColor="#35D19E"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(value) => textInputChange(value)}
                            />
                            <Text style={styles.text}>
                                Adresse mail
                            </Text>
                            {data.check_textInputChange ? 
                            <Icon 
                                name="check-circle"
                                color="green"
                                size={25}
                            /> : null }
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#35D19E"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(value) => handlepasswordChange(value)}
                            />
                            <Text style={styles.text}  >
                                Mot de passe
                            </Text>
                            {/* <TouchableOpacity
                                onPress={updatePasswordSee}
                            >
                                {data.secureTextEntry ? 
                                <Icon 
                                    name="eye-off"
                                    color="grey"
                                    size={25}
                                /> :
                                <Icon 
                                    name="eye"
                                    color="grey"
                                    size={25}
                                /> }
                            </TouchableOpacity> */}
                            
                        </View>
                        <View style={styles.container}>
                            <Text
                                style={styles.textSign}
                                onPress= {() => {
                                    console.log(data.pseudo,data.password)
                                }}
                            >
                                Sign In
                            </Text>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        position: 'relative',
        backgroundColor: "#F4FFF9",
    },
    text: {
        position: 'absolute',
        right: 25,
        top: 25,
        color: '#35D19E',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 10,
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 10,
        backgroundColor: '#F4FFF9',
        color: '#2CBF91',
        borderWidth: 1,
        borderColor: '#94FBAF',
        borderRadius: 7,
    },
    textSign: {
        flex:1,
        marginTop: 200,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 35,
        paddingBottom: 15,
        paddingTop: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#37D2A0',
        color: 'white',
    },
});
  
export default ProfilView;