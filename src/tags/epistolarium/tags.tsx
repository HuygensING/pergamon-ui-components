import * as React from 'react';
import { ITag } from '../default-tags';

export const Add: React.SFC<ITag> = (props) =>
	<span
		style={{
			color: 'green',
		}}
	>
		+ {props.children}
	</span>

export const Choice: React.SFC<ITag> = (props) =>
	<span>
		{props.children}
	</span>

export const Sic: React.SFC<ITag> = (props) =>
	<span
		style={{
			borderBottom: '1px solid #AAA',
			paddingRight: '.6em',
		}}
	>
		{props.children}
	</span>

export const Corr: React.SFC<ITag> = (props) =>
	<span
		style={{
			border: '1px solid #AAA',
			padding: '0 .6em',
		}}
	>
		{props.children}
	</span>

export const DateTag: React.SFC<ITag> = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'orange',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const PersName: React.SFC<ITag> = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'blue',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const PlaceName: React.SFC<ITag> = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'green',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const Name: React.SFC<ITag> = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'red',
			color: 'white'
		}}
	>
		{props.children}
	</span>

export const Hi: React.SFC<ITag> = (props) =>
	<span
		id={props.id}
		style={{
			backgroundColor: 'yellow',
		}}
	>
		{props.children}
	</span>

export const Line: React.StatelessComponent<ITag> = (props) =>
	<div
		id={props.id}
		style={{ lineHeight: '2em' }}
	>
		{props.children}
	</div>;

export const LineGroup: React.StatelessComponent<ITag> = (props) =>
	<div
		id={props.id}
		style={{ margin: '2em 0' }}
	>
		{props.children}
	</div>;

export const P: React.StatelessComponent<ITag> = (props) =>
	<div
		id={props.id}
		style={{
			margin: '1em 0'
		}}
	>
		{props.children}
		<hr style={{ margin: '1em' }} />
	</div>;

// export const Title: React.StatelessComponent<ITag> = (props) =>
// 	<h2
// 		id={props.id}
// 		style={{
// 			fontSize: '2em',
// 			fontWeight: 'bold',
// 		}}
// 	>
// 		{props.children}
// 	</h2>;
