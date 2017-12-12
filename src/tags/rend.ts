import * as React from 'react'
import { ITagProps } from '../interfaces';

const getRendAttr = (props: ITagProps) =>
	props.node.hasOwnProperty('attributes') &&
	props.node.attributes.hasOwnProperty('rend') ?
		props.node.attributes.get('rend') :
		undefined

const rendStyle = (props: ITagProps): React.CSSProperties=> {
	const rend = getRendAttr(props)
	if (rend == null) return {}
	return {
		fontSize:
			rend === 'superscript' || rend === 'subscript' ? '.8em' : null,
		fontStyle:
			rend === 'italic' ? 'italic' : null,
		fontVariant:
			rend === 'case(smallcaps)' ? 'small-caps' : null,
		fontWeight:
			rend === 'bold' ? 'bold' : null,
		lineHeight:
			rend === 'superscript' || rend === 'subscript' ? 0 : null,
		textDecoration:
			rend === 'underline' ?
				'underline' :
				rend === 'strikethrough' ? 'line-through' : null,
		verticalAlign:
			rend === 'superscript' ?
				'super' :
				rend === 'subscript' ? 'sub' : null,
	}
}

export default rendStyle