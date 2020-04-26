import React, { useState } from 'react';
import { View } from 'react-native';
import { TextStyle, TouchableWithoutFeedback } from 'react-native';
import { FieldProps } from '@cb/forms';
import {
  Body,
  Label,
  HStack,
  VStack,
  Spacer,
  Divider,
  ListCell,
  Icon,
} from '@designSystem/primitives';
import { Modal } from '@components/UI';
import {
  useTheme,
  border,
  spacing,
  fontSize,
  sizing,
  offsetGutter,
} from '@designSystem/theme';
import { TextInput } from '@components/interactables';
import { FlatList } from '@components/UI';
import { debounce } from '@utils/Events';
import { useAnalytics } from '@utils/analytics/useAnalytics';
import { MessageDescriptor } from 'react-intl';

export interface SearchSelectProps
  extends FieldProps<string, MessageDescriptor> {
  type: 'default' | 'auxilary';
  caret: 'right' | 'down' | 'none';
  placeholder?: string;
  label?: string;
  modalTitle: string;
  searchPlaceholder: string;
  width?: 'auto' | '100%';
  suggestion: string;
  suggestions: string[];
  onSuggestionChange: (value: string) => void;
}

const SearchSelect = ({
  value,
  onChange,
  isDirty,
  placeholder,
  label,
  modalTitle,
  searchPlaceholder,
  width,
  caret,
  suggestion,
  suggestions,
  onSuggestionChange,
  type,
  name,
  errors,
}: SearchSelectProps) => {
  const { colors } = useTheme();
  const isPlaceholder = !isDirty || value === '';
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { tapped } = useAnalytics();

  const styles: TextStyle = {
    padding: spacing[3],
    paddingTop: spacing[3] - 2, // account for border top and bottom
    fontSize: fontSize.body,
    width,
    marginBottom: spacing[4],
    borderStyle: 'solid',
    borderTopRightRadius: type === 'auxilary' ? 0 : border.inputRadius,
    borderTopLeftRadius: border.inputRadius,
    borderBottomRightRadius: type === 'auxilary' ? 0 : border.inputRadius,
    borderBottomLeftRadius: border.inputRadius,
    borderWidth: border.width,
    minWidth: 80,
    height: sizing.input,
    backgroundColor: colors.background.default,
    borderColor: colors.onBackground.line,
  };

  const onTouchable = () => {
    setIsModalVisible(true);
    tapped(name);
  };

  return (
    <View>
      {!!label && <Label>{label}</Label>}
      <TouchableWithoutFeedback onPress={debounce(onTouchable)}>
        <View style={styles}>
          <HStack spacing={0} alignItems="center">
            <Body
              ellipsize="tail"
              color={
                type === 'auxilary' || !isPlaceholder ? 'default' : 'muted'
              }
              spacing={{ right: 4 }}>
              {value || placeholder}
            </Body>
            <Spacer />
            {caret !== 'none' && (
              <Icon
                size="small"
                name={caret === 'right' ? 'caretRight' : 'caretDown'}
                color="muted"
              />
            )}
          </HStack>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={isModalVisible}
        title={modalTitle}
        onRequestClose={() => {
          onSuggestionChange('');
          setIsModalVisible(false);
        }}>
        <TextInput
          autoFocus
          label="Search"
          name="Search"
          placeholder={searchPlaceholder}
          value={suggestion}
          isDirty
          onChange={onSuggestionChange}
          onErrors={() => {}}
          errors={errors}
        />
        <Label>Suggestions</Label>
        <VStack spacing={{ horizontal: offsetGutter }}>
          <Divider />
        </VStack>
        <FlatList
          data={suggestions}
          keyboardDismissMode="on-drag"
          renderItem={({ item }) => (
            <ListCell
              name={`${name}_search_result`}
              title={<Body spacing={0}>{item}</Body>}
              onPress={() => {
                onChange(item);
                onSuggestionChange('');
                setIsModalVisible(false);
              }}
            />
          )}
        />
      </Modal>
    </View>
  );
};

SearchSelect.defaultProps = {
  width: '100%',
  caret: 'right',
  color: 'default',
};

export { SearchSelect };
