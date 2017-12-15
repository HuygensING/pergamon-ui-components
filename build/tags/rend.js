"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRendAttr = (props) => props.node.hasOwnProperty('attributes') &&
    props.node.attributes.has('rend') ?
    props.node.attributes.get('rend') :
    undefined;
const rendStyle = (props) => {
    const rend = getRendAttr(props);
    if (rend == null)
        return {};
    let rendStyle = {
        fontSize: rend === 'superscript' || rend === 'subscript' ? '.8em' : null,
        fontStyle: rend === 'italic' ? 'italic' : null,
        fontVariant: rend === 'case(smallcaps)' ? 'small-caps' : null,
        fontWeight: rend === 'bold' ? 'bold' : null,
        lineHeight: rend === 'superscript' || rend === 'subscript' ? 0 : null,
        textDecoration: rend === 'underline' ?
            'underline' :
            rend === 'strikethrough' ? 'line-through' : null,
        verticalAlign: rend === 'superscript' ?
            'super' :
            rend === 'subscript' ? 'sub' : null,
    };
    if (props.node.type === 'list') {
        let listStyleType = 'disc';
        if (rend === 'simple')
            listStyleType = 'none';
        else if (rend === 'numbered')
            listStyleType = 'decimal';
        rendStyle = Object.assign({}, rendStyle, { listStyleType });
    }
    return rendStyle;
};
exports.default = rendStyle;
