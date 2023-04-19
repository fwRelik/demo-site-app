import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

const LevelType = {
	h3: 'h3',
	h5: 'h5',
};

export interface SectionTitlesProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	level: keyof typeof LevelType;
	children?: ReactNode;
    pre_title?: boolean;
    section_title?: boolean;
}
