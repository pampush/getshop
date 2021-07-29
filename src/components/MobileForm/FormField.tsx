import React from 'react';

interface FormFieldProps {
  value: string;
  format: string;
}

/**
 *
 * @param format
 * @returns
 */
const useFormField = (format: string) => {
  const matchLength = React.useRef(0);

  React.useEffect(() => {
    const arr = format.match(/_/g);
    matchLength.current = arr ? arr.length : 0;
  }, []);

  return { matchLength: matchLength.current };
};

/**
 *
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
    <div className="mobile__field">
      {result.split('').map((item: string, i: number) => {
        return (
          <span className={`${item === '_' ? 'mobile__char' : ''}`} key={i}>
            {item !== '_' ? item : String.fromCharCode(160)}
          </span>
        );
      })}
    </div>
  );
}

export default FormField;
export { useFormField };