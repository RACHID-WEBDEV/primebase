'use client';
import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Label } from './Label';
import { ErrorMessage } from './ErrorMessage';
import classNames from 'classnames';
import { showError, showSuccess } from '@/utils/form-helpers';
// import ToolTip from '@/components/form/Tooltip';
import { HelpIcon, SuccessIcon } from '@/public/SvgsIcons';

type TextareaType = {
  className?: string;
  feedBack?: string;
  floatLabel?: boolean;
  hintText?: string;
  Icon?: ReactNode;
  label?: string;
  labelClassName?: string;
  leadingIcon?: any;
  name: string;
  placeholder?: string;
  rows?: number;
};
const Textarea = ({
  className,
  feedBack = 'FEEDBACK.ALL',
  floatLabel,
  hintText,
  label,
  labelClassName = 'bg-defaultBg2 text-white peer-focus:bg-defaultBg2 peer-focus:text-white -translate-y-7 peer-focus:-translate-y-7',
  leadingIcon,
  name,
  placeholder,
  rows = 3,
}: TextareaType) => {
  const {
    register,
    formState: { dirtyFields, errors },
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && (
        <Label
          feedBack="FEEDBACK.NONE"
          className="text-base flex items-center gap-x-2"
          name={name}
          htmlFor={name}
          text={label}
        ></Label>
      )}

      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute top-5 left-0 flex items-center pl-3 pointer-events-none">
            {leadingIcon}
          </div>
        )}
        <textarea
          rows={rows}
          placeholder={placeholder ? placeholder : label}
          {...register(name)}
          className={classNames(
            'block py-3.5 px-1 w-full text-base border-secondary-100 border-2 rounded-md focus:outline-none focus:ring-0 peer',
            className,
            { 'pl-10 pr-8': leadingIcon },
            {
              'placeholder:text-transparent focus:placeholder:text-secondary-400 border-secondary-300 appearance-none bg-defaultBg2 text-secondary-300 focus:ring-0 peer placeholder-opacity-0':
                floatLabel && !placeholder,
            },
            {
              errorClassName: showError(hasErrors, feedBack),
            },
            {
              successClassName: showSuccess(isValid, feedBack),
            },
            {
              focusClassName: !hasErrors && !isValid,
            },
            {
              ' placeHolderClassName': placeholder,
            }
          )}
        ></textarea>

        {floatLabel && (
          <Label
            name={name}
            feedBack={feedBack}
            htmlFor={name}
            floatLabel
            text={label}
            floatLabelClass={labelClassName}
          />
        )}

        {floatLabel && (
          <div
            className={classNames(
              'absolute right-0 flex items-center top-5',
              { 'pr-3': !isValid && !hasErrors },
              { 'pr-8': hasErrors },
              { hidden: isValid }
            )}
          ></div>
        )}

        {hasErrors && (
          <div
            className={classNames(
              'absolute right-0 flex items-center pointer-events-none top-5',
              {
                'pr-3': hasErrors,
              }
            )}
          >
            <HelpIcon />
          </div>
        )}

        {isValid &&
          (feedBack === 'FEEDBACK.SUCCESS' || feedBack === 'FEEDBACK.ALL') && (
            <div
              className={classNames(
                'absolute right-0 flex items-center pointer-events-none top-5',
                {
                  'pr-3': isValid,
                }
              )}
            >
              <SuccessIcon />
            </div>
          )}
      </div>

      {hintText && (
        <p className="pt-1 text-sm text-secondary-700">{hintText}</p>
      )}
      <ErrorMessage name={name} />
    </>
  );
};

export default Textarea;
