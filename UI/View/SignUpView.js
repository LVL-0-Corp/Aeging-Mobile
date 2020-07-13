import React, { Fragment } from 'react';
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    View,
    DatePickerAndroidOpenReturn,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';


function ProfilView({ navigation, route }) {

    const [data, setData] = React.useState({
        pseudo: '',
        password: '',
        check_textInputChange: false,
        check_textInputMailChange: false,
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

    const textInputMailChange = (value) => {
        if(value.length != 0){
            setData({
                ...data,
                pseudo: value,
                check_textInputMailChange: true
            })
        }else {
            setData({
                ...data,
                pseudo: value,
                check_textInputMailChange: false
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
                            Nom
                        </Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Nom"
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
                        <Text style={styles.text_footer}>
                            Prénom
                        </Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Prénom"
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
                        <Text style={styles.text_footer_next}>
                            Email
                        </Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="email"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(value) => textInputMailChange(value)}
                            />
                            {data.check_textInputMailChange ? 
                            <Icon 
                                name="check-circle"
                                color="green"
                                size={25}
                            /> : null }
                        </View>
                        <Text style={styles.text_footer}>
                            Date de naissance
                        </Text>
                        <View style={styles.action}>
                            <TextInput
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                padding={5}
                                placeholder="01/01/2000"
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
                        <Text style={styles.text_footer}>
                            Adresse
                        </Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Adresse"
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
                        <Text style={styles.text_footer_next}  >
                            Password Confirme
                        </Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Password Confirme"
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
                                style={ [styles.textSign, {backgroundColor: "white"}, {padding: 20}] }
                                onPress= {() => {
                                    console.log(data.pseudo,data.password)
                                }}
                            >
                                Sign up
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
      flex: 1, 
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
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
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
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
        borderColor: 'gray'
    },
    text_footer_next: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 35
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
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});

export default ProfilView;