import * as React from 'react';
import Input from "hire-forms-input";
import Annotation from '../../../models/annotation'

export interface IProps {
	activeAnnotation: Annotation;
	updateAnnotation: (any) => void;
	end: number;
}

export interface IState {
	value: string;
}

class End extends React.PureComponent<IProps, IState> {
	public state = {
		value: (this.props.end.toString()) ? this.props.end.toString() : '',
	};

	public componentWillReceiveProps(nextProps) {
		if (nextProps.end !== this.state.value)	{
			this.setState({ value: nextProps.end });
		}
	}

	public render() {
		const { activeAnnotation, updateAnnotation } = this.props;
		const { value } = this.state;
		return (
			<Input
				onChange={(value: string) => {
					let end: number = parseInt(value, 10);
					if (Number.isNaN(end)) end = null;
					this.setState({value: end.toString()});
				}}
				validate={(value: string) => {
					const end: number = parseInt(value, 10);
					const isValid = Number.isInteger(end) && activeAnnotation.start <= end;
					if (isValid) updateAnnotation({ end });
					return isValid ? { isValid } : { isValid, message: "The end point cannot be lower than the start point." };
				}}
				value={value}
			/>
		)
	}
}

export default End;