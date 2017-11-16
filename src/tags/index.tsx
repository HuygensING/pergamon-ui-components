import systemComponentsByTags, { Display, IComponentsByTags } from './system-components-by-tags'
import {
	Cell,
	Corr,
	DateTag,
	DivTag, // DivTag === TEI <div>, Div === HTML <div>
	Figure,
	Formula,
	Graphic,
	Line,
	LineGroup,
	Name,
	Opener,
	P,
	PersName,
	PlaceName,
	Row,
	Rs,
	Table,
	Title,
} from './tags'
import Anchor from "./anchor"
import { Div, None, Span } from './system-tags'

const componentsByTags: IComponentsByTags = {
	...systemComponentsByTags,
	...{
		ab: {
			component: Div,
			display: Display.Block,
		},
		anchor: {
			component: Anchor,
			display: Display.Inline,
		},
		body: {
			component: Div,
			display: Display.Block,
		},
		cell: {
			component: Cell,
			display: Display.Block,
		},
		choice: {
			component: Span,
			display: Display.Inline,
		},
		closer: {
			component: Div,
			display: Display.Block,
		},
		corr: {
			component: Corr,
			display: Display.Inline,
		},
		div: {
			component: DivTag,
			display: Display.Block,
		},
		date: {
			component: DateTag,
			display: Display.Inline,
		},
		figure: {
			component: Figure,
			display: Display.Block,
		},
		formula: {
			component: Formula,
			display: Display.Inline,
		},
		graphic: {
			component: Graphic,
			display: Display.Block,
		},
		hi: {
			component: Span,
			display: Display.Inline,
		},
		l: {
			component: Line,
			display: Display.Block,
		},
		lb: {
			component: Div,
			display: Display.Block,
		},
		lg: {
			component: LineGroup,
			display: Display.Block,
		},
		meta: {
			component: None,
			display: Display.None,
		},
		name: {
			component: Name,
			display: Display.Inline,
		},
		note: {
			component: Div,
			display: Display.Block,
		},
		opener: {
			component: Opener,
			display: Display.Block,
		},
		p: {
			component: P,
			display: Display.Block,
		},
		pb: {
			component: Div,
			display: Display.Block,
		},
		persName: {
			component: PersName,
			display: Display.Inline,
		},
		placeName: {
			component: PlaceName,
			display: Display.Inline,
		},
		row: {
			component: Row,
			display: Display.Block,
		},
		rs: {
			component: Rs,
			display: Display.Inline,
		},
		seg: {
			component: Span,
			display: Display.Inline,
		},
		table: {
			component: Table,
			display: Display.Block,
		},
		text: {
			component: Div,
			display: Display.Block,
		},
		title: {
			component: Title,
			display: Display.Block,
		},
		TEI: {
			component: Div,
			display: Display.Block,
		},
		teiHeader: {
			component: None,
			display: Display.None,
		},
	}
};

export default componentsByTags;
