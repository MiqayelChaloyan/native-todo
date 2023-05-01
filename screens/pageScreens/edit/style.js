import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 15,
    },
    task: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    complited: {
        color: 'black',
        fontSize: 12,
        padding: 2,
        marginTop: 22,
    },
    contain: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 60,
        width: 280,
        margin: 50,
        shadowColor: 'rgba(0, 0, 0, 1)',
        elevation: 7,
        marginTop: 120,
    },
    myTask: {
        fontSize: 24,
        margin: 15,
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
    buttonsGroup: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        marginTop: 100,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    btnText: {
        fontSize: 20,
        color: '#55BCF6',
        opacity: 1,
        borderWidth: 1,
        width: 100,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: '#55BCF6',
    },
    addNewTask: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        marginTop: 20,
    },
    addBtnText: {
        fontSize: 20,
        color: '#55BCF6',
        opacity: 1,
        borderWidth: 1,
        width: 200,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: '#55BCF6',
    },
});

export default styles;