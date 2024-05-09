import { Control, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from 'react';

type formInputProps = {
  name: string;
  control?: Control<FieldValues> | any | undefined;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: HTMLInputAutoCompleteAttribute;
};

export default function FormInput({
  name,
  control,
  label,
  placeholder,
  type,
  autoComplete,
}: formInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              autoComplete={autoComplete}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
