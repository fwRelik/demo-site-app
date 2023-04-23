import { useEffect, useMemo, useState } from 'react';
import { FormProps } from './Form.props';
import styles from './Form.module.scss';
import { ChangeEvent } from 'react';
import cn from 'classnames';

export const Form = ({ fields, saveHandler, className, ...props }: FormProps): JSX.Element => {
	const [data, setData] = useState<Record<string, string>>(fields);

	const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>, key: string) => {
		setData({
			...data,
			[key]: event.target.value,
		});
	};

	useEffect(() => {
		setData(fields);
	}, [fields]);

	const inputs = Object.entries(data).map(([key, value]) => {
		return (
			<div key={key} className={styles.fields}>
				<label htmlFor={key}>{key}:</label>
				<input
					id={key}
					type='text'
					value={value}
					placeholder={key}
					onChange={event => inputChangeHandler(event, key)}
				/>
			</div>
		);
	});

	return (
		<div className={cn(styles.form, className)} {...props}>
			<div className={styles.wrapper}>
				<button className={styles.save} onClick={() => saveHandler(data)}>
					Send
				</button>
				{inputs}
				<button
					className={cn(styles.save, {
						[styles.hide]: Object.keys(data).length < 8,
					})}
					onClick={() => saveHandler(data)}>
					Send
				</button>
			</div>
		</div>
	);
};
