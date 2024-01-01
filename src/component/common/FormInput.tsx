import {FormControl, Icon, Input, Pressable} from 'native-base';
import React, {FC} from 'react';
import {Platform, TextInputProps} from 'react-native';
import {Colors} from '../../styles/Colors';

type Props = TextInputProps & {
  error?: string;
  isInvalid?: boolean;
  isRequired: boolean;
  show?: boolean;
  helperText?: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  icon?: any;
  iconName1?: string;
  iconName2?: string;
  label?: string;
  onPressHandler?: () => void;
  fontStyle?: string;
};

export const FormInput: FC<Props> = ({
  error,
  isInvalid = false,
  isRequired = false,
  helperText,
  onChangeText,
  placeholder,
  icon,
  iconName1,
  iconName2,
  label,
  onPressHandler,
  show,
  fontStyle,
  ...restProps
}) => {
  return (
    <FormControl isInvalid={isInvalid} mb={5}>
      <FormControl.Label
        _text={{
          fontFamily: 'heading',
          fontWeight: '100',
          fontStyle: fontStyle ? fontStyle : 'normal',
          fontSize: 'sm',
          color: 'secondary.400',
        }}>
        {label}
      </FormControl.Label>
      <Input
        _focus={{backgroundColor: 'white'}}
        borderColor={Colors.secondary}
        height={45}
        {...restProps}
        autoComplete={'off'}
        _input={{
          selectionColor: '#FE6150',
          cursorColor: '#FE6150',
          color: Colors.primary,
        }}
        placeholder={placeholder}
        variant="outline"
        focusOutlineColor={Colors.primary}
        // colorScheme={'secondary'}
        // py={Platform.OS === 'ios' ? 4 : 2}
        // p={5}
        color={'black'}
        fontSize={'sm'}
        cursorColor={'#ffffff'}
        selectionColor={'#ffffff'}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.primary}
        InputLeftElement={
          <Pressable onPress={onPressHandler}>
            <Icon
              as={icon}
              name={show ? iconName1 : iconName2}
              size={5}
              ml="2"
              color={Colors.primary}
            />
          </Pressable>
        }
      />
      {helperText ? (
        <FormControl.HelperText>{helperText}</FormControl.HelperText>
      ) : null}
      <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
    </FormControl>
  );
};
