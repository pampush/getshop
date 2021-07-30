import React from 'react';

interface FormFieldProps {
  value: string;
  format: string;
}

/**
 * custom hook to calculate number of '_' characters in format string
 * @param format Specifies template for input. E.g. 7_______ or Q__W__E__R_T_Y
 * where '_' is a place to fill up
 * @returns
 */
export const useFormField = (format: string) => {
  const matchLength = React.useRef(0);

  React.useEffect(() => {
    const arr = format.match(/_/g);
    matchLength.current = arr ? arr.length : 0;
  }, []);

  return { matchLength: matchLength.current };
};

/**
 * Change '_' symbols with actual value parameter symbols.\
 * Yeah, it could be plain for loop to filling up, but I decided to use RegExp).\
 * Also there is hack with using monospace font to make underline _ continious ____
 * @param param0
 * @returns
 */
function FormField({ value, format }: FormFieldProps) {
  const [result, setResult] = React.useState(format);
  const dashCounter = React.useRef(0);

  const { matchLength } = useFormField(format);

  React.useEffect(() => {
    if (value.length > matchLength) return;

    const res = format.replaceAll(/_/g, (): string => {
      return value[dashCounter.current] ? value[dashCounter.current++] : '_';
    });

    dashCounter.current = 0;
    setResult(res);
  }, [value]);

  return (
    <>
      {result.split('').map((item: string, i: number) => {
        return (
          // empty space &nbsp with underline
          <span className={`${item === '_' ? 'mobile__char' : ''}`} key={i}>
            {item !== '_' ? item : String.fromCharCode(160)}
          </span>
        );
      })}
    </>
  );
}

export default FormField;
