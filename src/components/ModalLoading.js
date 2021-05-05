import React from 'react';
import { StyleSheet, Modal, View, } from 'react-native';
import { Spinner } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constraints/size';

export const ModalLoading = (props) => {
    return (
        <Modal transparent={true} visible={props.loading}>
            <View style={styles.modalBackground}>
                <Spinner color='#00AEEF' style={styles.bigSpinner} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    bigSpinner: {
        position: 'absolute', bottom: SCREEN_HEIGHT / 2.5, alignSelf: 'center'
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#00000040'
    },
})