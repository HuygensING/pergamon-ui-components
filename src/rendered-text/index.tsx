import * as React from 'react';
import TextTreeNode, {ITextAnnotationCommon} from "./node";
import createTree, { generateTagId } from "./create-tree/index";
import {IAnnotation} from "../interfaces";
import { orangeRGB, orange } from '../constants';

export interface IProps extends ITextAnnotationCommon {
	root: IAnnotation;
}

export interface ITree extends IProps {
	text: string;
}

export interface IState {
	textTree: Object;
}

class RenderedText extends React.Component<IProps, IState> {
	private el: HTMLDivElement;
	public state = {
		textTree: null,
	}

	public componentWillReceiveProps(nextProps: IProps) {
		if (this.state.textTree == null) {
			const root = createTree(JSON.parse(JSON.stringify(nextProps.root)));
			const textTree = this.textTree(root, nextProps.root.text, nextProps.activeAnnotation);
			this.setState({ textTree });
		}

		// TODO change generateTagId to without suffix and querySelectorAll on tagId without suffix
		// to find also the splitted tags
		if (this.props.activeAnnotation !== nextProps.activeAnnotation) {
			const activeAnnotations = this.el.querySelectorAll('.active');
			[...activeAnnotations].forEach((a: HTMLElement) => {
				a.style.cssText = '';
				a.classList.remove('active');
			});

 			if (nextProps.activeAnnotation != null) {
				const activeTag = this.el.querySelector(`#${generateTagId(nextProps.activeAnnotation)}`);
				if (activeTag instanceof HTMLElement) {
					const tagStyle = `
						background-color: rgba(${orangeRGB}, 0.03);
						border: 1px solid ${orange};
						box-shadow: 4px 4px 0px rgba(${orangeRGB}, 0.4);
						line-height: 2.8em;
						margin: 0.5em;
						padding: 0.5em;
					`
					activeTag.style.cssText = tagStyle;
					activeTag.classList.add('active');
				}
			}
		}
	}

	public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
		return this.state.textTree == null && nextState.textTree != null;
	}

	public render() {
		return (
			<div
				ref={(el) => { this.el = el; }}
			>
				{this.state.textTree}
			</div>
		);
	}

	// TODO move activeAnnotation to settings
	private textTree(root, text, activeAnnotation) {
		if (root.text == null && text == null) return null;

		const children = (root.hasOwnProperty('children') && root.children.length) ?
			root.children.map((child, i) => this.textTree(child, text, activeAnnotation)) :
			text.slice(root.start, root.end);

		return (
			<TextTreeNode
				activeAnnotation={activeAnnotation}
				annotation={root}
				key={Math.random() * 999999999}
			>
				{children}
			</TextTreeNode>
		);
	}
}

export default RenderedText;
