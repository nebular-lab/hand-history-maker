import { FormLineType } from '@/types';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  formLine: FormLineType;
  setFormLine: Dispatch<SetStateAction<FormLineType>>;
};

export const Form: FC<Props> = (props) => {
  const { formLine, setFormLine } = props;
  const inputDatas: { label: keyof FormLineType; example: string }[] = [
    { label: 'XBP', example: '3' },
    { label: 'players', example: 'BB/4s3c vs CO/AcTd' },
    { label: 'board', example: 'AsQd5s4c または As Qd 5s 4c' },
    { label: 'flop', example: 'x/b30%/c または x/b2.2BB/c' },
    { label: 'turn', example: 'x/b50%/r50%/c' },
    { label: 'river', example: 'a40%/f' },
  ];

  return (
    <div className="w-[300px]  flex flex-col gap-1">
      {inputDatas.map((inputData, index) => (
        <div key={index}>
          <label
            className="block  text-sm font-medium text-gray-900 dark:text-white"
            htmlFor={inputData.label}
          >
            {inputData.label}
          </label>
          <input
            className={
              'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            }
            autoComplete="off"
            type="text"
            name={inputData.label}
            id={inputData.label}
            value={formLine[inputData.label]}
            placeholder={inputData.example}
            onChange={(e) =>
              setFormLine((prev) => ({
                ...prev,
                [inputData.label]: e.target.value,
              }))
            }
          />
        </div>
      ))}
    </div>
  );
};
