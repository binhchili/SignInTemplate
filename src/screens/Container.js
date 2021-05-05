import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { SmallNotify } from '../components/SmallNotify';
import { ModalLoading } from '../components/ModalLoading';

const mapStateToProps = state => ({
    loading: state.loading,
    popup: state.popup,
    tree: state
})

const Container = (props) => {
    const { loading, popup, tree } = props;
    useEffect(() => {
        console.log(JSON.stringify(tree));
    }, [])
    return (
        <SafeAreaView>
            <ModalLoading loading={loading} />
            <SmallNotify message={popup.message} toogleTime={popup.dispatch_time} />
            {props.children}
        </SafeAreaView>

    )
}

export default connect(mapStateToProps, null)(Container);