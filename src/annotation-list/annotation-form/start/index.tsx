import * as React from 'react';
import Annotation from "../../../models/annotation";
import Input from "hire-forms-input";

export interface IProps {
	activeAnnotation: Annotation;
	updateAnnotation: (any) => void;
	start: number;
}

export interface IState {
	value: string;
}

class Start extends React.PureComponent<IProps, IState> {
	public state = {
		value: (this.props.start != null) ? this.props.start.toString() : '',
	};

	public componentWillReceiveProps(nextProps) {
		if (nextProps.start !== this.state.value)	{
			this.setState({ value: nextProps.start });
		}
	}

	public render() {
		const { activeAnnotation, updateAnnotation } = this.props;
		const { value } = this.state;
		return (
			<Input
				onChange={(value: string) => {
					let start: number = parseInt(value, 10);
					value = (Number.isNaN(start)) ? '' : start.toString();
					this.setState({ value });
				}}
				validate={(value: string) => {
					const start: number = parseInt(value, 10);
					const isValid = Number.isInteger(start) && start <= activeAnnotation.end;
					if (isValid) updateAnnotation({ start });
					return isValid ? { isValid } : { isValid, message: "The start point cannot be greater than the end point." };
				}}
				value={value}
			/>
		)
	}
}

export default Start;