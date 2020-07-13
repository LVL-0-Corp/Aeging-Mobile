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
                        <Text style={styles.text_footer}>
                            Pseudo
                        </Text>
                        <View style={styles.action}>
                            <Icon
                                name="user"
                                color="#05375a"
                                size={25}
                            />
                            <TextInput
                                placeholder="Pseudo"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(value) => textInputChange(value)}
                            />
                            {data.check_textInputChange ? 
                            <Icon 
                                name="check-circle"
                                color="green"
                                size={25}
                            /> : null }
                        </View>
                        <Text style={styles.text_footer_next}  >
                            Password
                        </Text>
                        <View style={styles.action}>
                            <Icon
                                name="lock"
                                color="#05375a"
                                size={25}
                            />
                            <TextInput
                                placeholder="Password"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(value) => handlepasswordChange(value)}
                            />
                            <TouchableOpacity
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
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.button}>
                            <Text
                                style={
                                    [styles.textSign, {backgroundColor: "white"}, {padding: 20}]
                                }
                                onPress= {() => {
                                    console.log(data.pseudo,data.password)
                                }}
                            >
                                Sign In
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    text_footer_next: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 35
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 0 ,
        borderColor: 'black'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
  
export default ProfilView;