import React from 'react'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import TextNormal from './global/text/basic/text-normal'
import {SelectableItem} from './button-selectable'

interface Props {
  item: SelectableItem,
  onPress: () => void
}

const RadioButtonBordered = ({item, onPress}: Props) => (
  <TouchableOpacity style={item.isSelected ? styles.buttonSelected : styles.button}
    onPress={onPress}
  >
    <TextNormal
      style={item.isSelected ? styles.textSelected : styles.text}
    >
      {item.title || item.value || item}
    </TextNormal>
  </TouchableOpacity>
)

export default RadioButtonBordered

const styles: any = StyleSheet.create({
  buttonSelected: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgb(77, 146, 223)',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A5B4BD'
  },
  textSelected: {
    fontSize: 12,
    color: '#fff'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgb(242, 242, 242)',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A5B4BD'
  },
  text: {
    fontSize: 12,
    color: 'rgb(92, 92, 92)'
  }
})
