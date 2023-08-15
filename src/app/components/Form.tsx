import { FormLineType } from '@/types';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  formLine: FormLineType;
  setFormLine: Dispatch<SetStateAction<FormLineType>>;
};

export const Form: FC<Props> = (props) => {
  const { formLine, setFormLine } = props;
  const labels: (keyof FormLineType)[] = [
    'XBP',
    'players',
    'board',
    'flop',
    'turn',
    'river',
  ];
  return (
    <div className="w-[300px]  flex flex-col gap-1">
      {labels.map((label, index) => (
        <div key={index}>
          <label
            className="block  text-sm font-medium text-gray-900 dark:text-white"
            htmlFor={label}
          >
            {label}
          </label>
          <input
            className={
              'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            }
            autoComplete="off"
            type="text"
            name={label}
            id={label}
            value={formLine[label]}
            onChange={(e) =>
              setFormLine((prev) => ({ ...prev, [label]: e.target.value }))
            }
          />
        </div>
      ))}
    </div>
  );
};
