"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rendStyle = (props) => ({
    fontStyle: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'italic' ?
        'italic' :
        'initial',
    fontVariant: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'case(smallcaps)' ?
        'small-caps' :
        'initial',
    fontWeight: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'bold' ?
        'bold' :
        'initial',
    textDecoration: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'underline' ?
        'underline' :
        props.annotation.attributes.hasOwnProperty('rend') &&
            props.annotation.attributes.rend === 'strikethrough' ?
            'line-through' :
            'initial',
    verticalAlign: props.annotation.attributes.hasOwnProperty('rend') &&
        props.annotation.attributes.rend === 'superscript' ?
        'super' :
        props.annotation.attributes.hasOwnProperty('rend') &&
            props.annotation.attributes.rend === 'subscript' ?
            'sub' :
            'initial',
});
exports.Add = (props) => React.createElement("span", { style: {
        color: 'green',
    } },
    "+ ",
    props.children);
exports.Choice = (props) => React.createElement("span", null, props.children);
exports.Sic = (props) => React.createElement("span", { style: {
        borderBottom: '1px solid #AAA',
        paddingRight: '.6em',
    } }, props.children);
exports.Corr = (props) => React.createElement("span", { style: {
        border: '1px solid #AAA',
        padding: '0 .6em',
    } }, props.children);
exports.DateTag = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'orange',
        color: 'white'
    } }, props.children);
exports.PersName = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'blue',
        color: 'white'
    } }, props.children);
exports.PlaceName = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'green',
        color: 'white'
    } }, props.children);
exports.Name = (props) => React.createElement("span", { id: props.id, style: {
        backgroundColor: 'red',
        color: 'white'
    } }, props.children);
exports.Hi = (props) => React.createElement("span", { id: props.id, style: rendStyle(props) }, props.children);
exports.Line = (props) => React.createElement("div", { id: props.id, style: { lineHeight: '2em' } }, props.children);
exports.LineGroup = (props) => React.createElement("div", { id: props.id, style: { margin: '2em 0' } }, props.children);
exports.P = (props) => React.createElement("div", { id: props.id, style: Object.assign({}, rendStyle(props), { margin: '1em 0' }) },
    props.children,
    React.createElement("hr", { style: { margin: '1em' } }));
exports.Seg = (props) => React.createElement("div", { id: props.id, style: rendStyle(props) }, props.children);
