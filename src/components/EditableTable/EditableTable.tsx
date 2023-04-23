import { useState, ChangeEvent, useEffect } from 'react';
import { EditableTableProps } from './EditableTable.props';
import styles from './EditableTable.module.scss';
import cn from 'classnames';
import { ILanguagePack } from '@/interfaces/MainPage.interface';

export const EditableTable = ({ fields, saveHandler, className, ...props }: EditableTableProps): JSX.Element => {
	if (!fields) return <span>Loading...</span>;

	const [data, setData] = useState<ILanguagePack>(fields);
	const { resources } = data;

	const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>, obj: { field: string; lang: string }) => {
		// need fix with immer library
		setData({
			...data,
			resources: {
				...data.resources,
				[obj.lang]: {
					...data.resources[obj.lang],
					translation: {
						...data.resources[obj.lang].translation,
						[obj.field]: event.target.value,
					},
				},
			},
		});
	};

	const fieldsRowName = Object.keys(Object.values(resources).map(item => item)[0].translation);
	const cells = Object.entries(resources)
		.map(([key, _]) => {
			return {
				key,
				value: fieldsRowName.map(fieldName => {
					return (
						<div key={`${key}${fieldName}`}>
							<span>{fieldName}: </span>
							<input
								type='text'
								value={data.resources[key].translation[fieldName]}
								className={styles.fields}
								onChange={event => inputChangeHandler(event, { field: fieldName, lang: key })}
							/>
						</div>
					);
				}),
			};
		})
		.map(item => {
			return (
				<div key={`${item.key}${item.value}`} className={styles.lang_section}>
					<span className={styles.lang_title}>Language: {item.key}</span>
					{item.value} <hr />
				</div>
			);
		});

	return (
		<div className={cn(styles.table, className)} {...props}>
			<div className={styles.wrapper}>
				<button className={styles.save} onClick={() => saveHandler(data)}>
					Send
				</button>
				<div className={styles.fields}>{cells}</div>
				<button className={cn(styles.save)} onClick={() => saveHandler(data)}>
					Send
				</button>
			</div>
		</div>
	);
};
