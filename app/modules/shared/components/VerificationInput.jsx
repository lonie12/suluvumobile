import React, {useState} from 'react';
import {Text, StyleSheet, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { titleColor } from '../utils/colors';

const CELL_COUNT = 4;

export default () => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    
    return (
        <View style={{height: 40, marginVertical: 20, width: '60%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                caretHidden={false}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {flex: 1},
    codeFieldRoot: {width: '100%'},
    cell: {
      width: '20%',
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      color: titleColor,
      borderRadius: 6
    },
    focusCell: {
      borderColor: '#F06B6B',
    },
});