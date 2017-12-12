import * as React from 'react'
import AnnotationForm, {IAnnotationFormProps} from "./annotation-form"
import RenderedText from "../rendered-text/index"
import { IComponentsByTags } from '../tags/system-components-by-tags'
import { fontStyle } from '../default-styles'
import Person from './person'
import Place from './place'
import { Annotation } from '../index';

export interface IAnnotationCommon extends IAnnotationFormProps {
	activateAnnotation: (id: string) => void;
	tags: IComponentsByTags;
}

export interface IAnnotationProps extends IAnnotationCommon {
	annotation: Annotation;
}

const AnnotationItem: React.SFC<IAnnotationProps> = (props) =>
	<li style={{ minHeight: '2em' }}>
		<h4
			onClick={() =>
				props.activateAnnotation(props.annotation.id)
			}
			style={{
				...fontStyle,

			}}
		>
			{
				(props.annotation.type === 'note' && props.annotation.attributes.has('n')) &&
				<div style={{ color: '#444', fontSize:'.85em'}}>
					{ props.annotation.attributes.get('n') }
					<br />
					{ props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end) }
				</div>
			}
			{
				props.annotation.type === 'persName' &&
				<Person
					annotation={props.annotation}
					rootAnnotation={props.rootAnnotation}
				/>
			}
			{
				props.annotation.type === 'placeName' &&
				<Place
					annotation={props.annotation}
					rootAnnotation={props.rootAnnotation}
				/>
			}
		</h4>
		{
			(
				props.activeAnnotation != null &&
				props.annotation.id === props.activeAnnotation.id
			) ?
				<AnnotationForm
					activeAnnotation={props.activeAnnotation}
					rootAnnotation={props.rootAnnotation}
				/> :
				(
					props.activeAnnotation != null &&
					props.activeAnnotation.text != null
				) ?
					<RenderedText
						root={props.activeAnnotation}
						tags={props.tags}
					/> :
					null
		}
	</li>;

export default AnnotationItem
