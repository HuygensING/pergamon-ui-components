import { Span, Div } from "./system-tags";
import { Tag } from "../interfaces";

export enum Display { None, Inline, Block };
export interface IComponentsByTags {
	[name: string]: {
		component: Tag
		display: Display
	}
}

const systemComponentsByTags: IComponentsByTags = {
	__text: {
		component: Span,
		display: Display.Inline,
	},
	__root: {
		component: Div,
		display: Display.Block,
	},
};

export default systemComponentsByTags;