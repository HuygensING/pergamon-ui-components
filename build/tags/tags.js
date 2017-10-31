"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const rend_1 = require("./rend");
const default_styles_1 = require("../default-styles");
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
exports.DateTag = (props) => React.createElement("span", { id: props.id, style: Object.assign({}, rend_1.default(props), default_styles_1.basicAnnotation) },
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/date.svg" }),
    props.children);
exports.Hi = (props) => React.createElement("span", { id: props.id, style: rend_1.default(props) }, props.children);
exports.Line = (props) => React.createElement("div", { id: props.id, style: { lineHeight: '2em' } }, props.children);
exports.LineGroup = (props) => React.createElement("div", { id: props.id, style: { margin: '2em 0' } }, props.children);
exports.Name = (props) => props.annotation.attributes.type === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.annotation.attributes.type === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        null;
exports.P = (props) => React.createElement("div", { id: props.id, style: Object.assign({}, rend_1.default(props), { margin: '1em 0' }) },
    props.children,
    React.createElement("hr", { style: {
            height: '1px',
            backgroundColor: '#ddd',
            color: '#eee',
            width: '20px',
            border: 'none',
            marginLeft: '-10px',
            marginTop: '1em',
        } }));
const Icon = (props) => React.createElement("img", { src: props.src, style: {
        width: "12px",
        height: 'auto',
        marginRight: '.2em',
    } });
exports.PersName = (props) => React.createElement("span", { id: props.id, style: Object.assign({}, rend_1.default(props), default_styles_1.basicAnnotation) },
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/person.svg" }),
    props.children);
exports.PlaceName = (props) => React.createElement("span", { id: props.id, style: Object.assign({}, rend_1.default(props), default_styles_1.basicAnnotation) },
    React.createElement(Icon, { src: "http://design.huygens.knaw.nl/static/icons/location.svg" }),
    props.children);
exports.Rs = (props) => props.annotation.attributes.type === 'person' ?
    React.createElement(exports.PersName, Object.assign({}, props)) :
    props.annotation.attributes.type === 'place' ?
        React.createElement(exports.PlaceName, Object.assign({}, props)) :
        null;
exports.Seg = (props) => React.createElement("div", { id: props.id, style: rend_1.default(props) }, props.children);
exports.Title = (props) => React.createElement("div", { id: props.id, style: Object.assign({}, rend_1.default(props), {
        fontSize: '2em',
        fontWeight: 'bold',
    }) }, props.children);
