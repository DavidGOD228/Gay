var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import i18n from '../../locales/i18n';
import TextNormal from '../global/text/basic/text-normal';
import UiBlockBasic from '../ui/block/basic';
import { FieldValueService } from '../../services/field-value';
import { lazy } from '../../annotations/inversify';
import { EVENTS } from '../../configs/dicts';
import eventEmitter from '../../utils/event-emitter';
const maxValueLength = 400;
const getSymbolsRemained = (maxLength, text = '') => {
    return maxLength - text.length;
};
class FieldValueTextInputStateful extends Component {
    constructor(props) {
        super(props);
        this.editProfileScreenCloseListener = () => {
            this.saveValue(this.state.value);
        };
        this.textChanged = (text) => {
            this.changeValue(text);
        };
        this.savePressed = () => {
            this.saveValue(this.state.value);
        };
        this.calcValue = () => {
            return this.props.fieldData.fieldValues
                .map(it => it.value)
                .toString();
        };
        this.changeValue = (text) => __awaiter(this, void 0, void 0, function* () {
            this.setState(prevState => (Object.assign({}, prevState, { value: text, changed: true, saved: false })));
        });
        this.saveValue = (text) => __awaiter(this, void 0, void 0, function* () {
            return this.persist(text);
        });
        this.wrapText = (text) => {
            return this.createFieldValue(text);
        };
        this.createFieldValue = (value) => {
            return this.fieldValueService
                .createNew(this.props.section, this.props.subSection, this.props.field, value);
        };
        this.state = {
            value: this.calcValue(),
            changed: false,
            saved: false
        };
        eventEmitter.on(EVENTS.editProfileScreenClosed, this.editProfileScreenCloseListener);
    }
    componentWillUnmount() {
        eventEmitter.removeListener(EVENTS.editProfileScreenClosed, this.editProfileScreenCloseListener);
    }
    get placeholder() {
        return i18n.t(`profile.details.sections.${this.props.section.name}.subSections.${this.props.subSection.name}` +
            `.fields.${this.props.field.name}.placeholder${this.props.profileType}`, {
            defaults: [{
                    scope: `profile.details.sections.${this.props.section.name}.subSections.${this.props.subSection.name}` +
                        `.fields.${this.props.field.name}.placeholder`
                }]
        });
    }
    render() {
        return (React.createElement(UiBlockBasic, null,
            React.createElement(UiBlockBasic, null,
                this.state.value ? (null) : (React.createElement(TextNormal, { style: styles.placeholder }, this.placeholder)),
                React.createElement(TextInput, { multiline: true, numberOfLines: 5, editable: true, value: this.state.value, maxLength: maxValueLength, style: styles.textInput, onChangeText: this.textChanged, onEndEditing: () => this.savePressed() })),
            React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' } },
                React.createElement(TextNormal, { style: styles.counter }, getSymbolsRemained(maxValueLength, this.state.value)),
                this.state.changed ? (React.createElement(TouchableOpacity, { onPress: this.savePressed },
                    React.createElement(Image, { style: styles.smallButton, source: require('Musl/images/profile/icon-checkmark-save.png') }))) : (null),
                this.state.saved ? (React.createElement(Image, { style: styles.smallButton, source: require('Musl/images/profile/icon-check.png') })) : (null))));
    }
    persist(text) {
        this.wrapText(text)
            .then(fieldValue => this.props.onValueUpdated([fieldValue]))
            .then(() => {
            this.setState(Object.assign({}, this.state, { changed: false, saved: true }));
        });
    }
}
__decorate([
    lazy('FieldValueService'),
    __metadata("design:type", FieldValueService)
], FieldValueTextInputStateful.prototype, "fieldValueService", void 0);
const FieldValueTextInputLimited = ({ fieldData, field, onValueUpdated, subSection, section, profileType }) => (React.createElement(FieldValueTextInputStateful, { fieldData: fieldData, field: field, onValueUpdated: onValueUpdated, subSection: subSection, section: section, profileType: profileType, key: field.id }));
const styles = StyleSheet.create({
    textInput: {
        color: 'rgb(46, 46, 46)',
        textAlignVertical: 'top',
        fontSize: 16,
        fontFamily: 'Uniform',
        height: 60
    },
    placeholder: {
        color: '#8D8D8D',
        lineHeight: 20,
        position: 'absolute',
        left: 0,
        top: 5
    },
    counter: {
        color: '#AABFE3',
        fontSize: 16,
    },
    smallButton: {
        width: 22,
        height: 22,
        marginLeft: 10
    },
});
export default FieldValueTextInputLimited;
//# sourceMappingURL=text-limited.js.map