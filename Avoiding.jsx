import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View, Keyboard, Text, TextInput, Button, Modal} from 'react-native';

export default () => {

    return (
        <View style={{flex: 1, backgroundColor: 'gray'}}>
            <Modal
                visible
                transparent
            >
                <SafeAreaView style={{backgroundColor: "white", flex: 1,}}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : null}
                        style={{ flex: 1, backgroundColor: 'gray' }}
                    >
                        <SafeAreaView style={styles.container}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={styles.inner}>
                                    <Text style={styles.header}>
                                        Header
                                    </Text>
                                    <TextInput
                                        placeholder="Username"
                                        style={styles.input}
                                    />
                                    <TextInput
                                        placeholder="Password"
                                        style={styles.input}
                                    />
                                    <TextInput
                                        placeholder="Confrim Password"
                                        style={styles.input}
                                    />
                                    <View style={styles.btnContainer}>
                                        <Button title="Submit" onPress={() => null} />
                                    </View>
                                    <View style={{ flex : 1 }} />
                                </View>
                            </TouchableWithoutFeedback>
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                </SafeAreaView>

            </Modal>

            <View style={{paddingTop: 260}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "80%",
        backgroundColor: 'green',
        overflow: "hidden",
        marginTop: "30%"
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
    header: {
        fontSize: 36,
        marginBottom: 48 - parseInt("10%"),
    },
    input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
})