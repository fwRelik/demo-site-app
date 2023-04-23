import styles from './SectionTitles.module.scss';
import { SectionTitlesProps } from './SectionTitles.props';
import cn from 'classnames';

export const SectionTitles = ({
	level,
	children,
	pre_title = false,
	section_title = false,
	className,
	...props
}: SectionTitlesProps): JSX.Element => {
	switch (level) {
		case 'h3':
			return (
				<h3
					className={cn(
						styles.section_head,
						{
							[styles.pre_title]: pre_title,
							[styles.section_title]: section_title,
						},
						className
					)}
					{...props}>
					{children}
				</h3>
			);
		case 'h5':
			return (
				<h5
					className={cn(
						styles.section_head,
						{
							[styles.pre_title]: pre_title,
							[styles.section_title]: section_title,
						},
						className
					)}
					{...props}>
					{children}
				</h5>
			);
		default:
			throw new Error('Incomprehensible header level');
	}
};
