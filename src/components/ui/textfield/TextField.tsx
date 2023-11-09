interface TextfieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield = ({ onChange, value }: TextfieldProps) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default Textfield;
