import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const Input = ({
  name,
  label,
  formik,
  type = 'text',
}: {
  name: string
  label: string
  formik: FormikProps<any>
  type?: 'text' | 'password'
}) => {
  const value = formik.values[name]
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  const invalid = !!touched && !!error
  const disabled = formik.isSubmitting

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    void formik.setFieldValue(name, e.target.value)
  }

  return (
    <div className={cn({ [css.field]: true, [css.disabled]: disabled })}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={cn({
          [css.input]: true,
          [css.invalid]: invalid,
        })}
        type={type}
        onChange={handleChange}
        onBlur={() => {
          void formik.setFieldTouched(name)
        }}
        value={value}
        name={name}
        id={name}
        disabled={formik.isSubmitting}
      />
      {invalid && (
        <div className={css.error}>
          {error}
        </div>
      )}
    </div>
  )
}