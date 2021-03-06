import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TextNormal from './global/text/basic/text-normal';
const CommunityHeaderEmpty = (props) => React.createElement(View, { style: styles.container },
    React.createElement(TouchableOpacity, { onPress: props.onAdjustPressed },
        React.createElement(TextNormal, { style: styles.text }, "There is no one that meets your search criteria. So you need to be just a little less picky")));
const styles = {
    container: {
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        backgroundColor: "#F1D279"
    },
    text: {
        color: "#C33007",
        fontSize: 14,
        textAlign: "center",
        paddingRight: 60,
        paddingLeft: 60
    }
};
export default CommunityHeaderEmpty;
//# sourceMappingURL=community-header-empty.js.map