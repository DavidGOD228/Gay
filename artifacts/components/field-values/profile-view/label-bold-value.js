import React from 'react';
import TextNormal from '../../global/text/basic/text-normal';
import { StyleSheet, View } from 'react-native';
import TextBold from '../../global/text/basic/text-bold';
const FieldLabelBoldValue = (props) => {
    const fieldTitle = props.profileData.field.name ? props.profileData.field.name : '';
    const fieldValue = props.profileData.fieldValues.length > 0 ? props.profileData.fieldValues[0].value : '';
    return React.createElement(View, { style: styles.container },
        React.createElement(TextNormal, null,
            fieldTitle,
            ": ",
            React.createElement(TextBold, null, fieldValue)));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    boldText: {
        color: 'rgb(92, 92, 92)'
    }
});
export default FieldLabelBoldValue;
//# sourceMappingURL=label-bold-value.js.map