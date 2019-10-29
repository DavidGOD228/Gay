import 'react-native';
// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';
import TextButton from '../../../components/global/bottom-navigation/text-button';
it('renders correctly without text', () => {
    const tree = renderer.create(React.createElement(TextButton, { onPress: () => null }));
    expect(tree)
        .toMatchSnapshot();
});
it('renders correctly with text', () => {
    const tree = renderer.create(React.createElement(TextButton, { onPress: () => null }, " click bait "));
    expect(tree)
        .toMatchSnapshot();
});
it('renders correctly with text and is disabled', () => {
    const tree = renderer.create(React.createElement(TextButton, { disabled: true, onPress: () => null }, " click bait "));
    expect(tree)
        .toMatchSnapshot();
});
//# sourceMappingURL=text-button.spec.js.map