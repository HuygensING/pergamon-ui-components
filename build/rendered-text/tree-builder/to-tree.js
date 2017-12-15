"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = require("./has-overlap");
const toTree = (agg, curr, index, arr) => {
    if (agg.length === 0) {
        agg.push(curr);
        return agg;
    }
    const prevAnnotations = arr.slice(0, index);
    for (let i = prevAnnotations.length - 1; i >= 0; i--) {
        const prevAnnotation = prevAnnotations[i];
        if (has_overlap_1.default(prevAnnotation, curr) ||
            (prevAnnotation.type === 'figure' &&
                curr.type === 'graphic' &&
                prevAnnotation.start === curr.start &&
                prevAnnotation.end === curr.end)) {
            if (!prevAnnotation.hasOwnProperty('children'))
                prevAnnotation.children = [];
            prevAnnotation.children.push(curr);
            return agg;
        }
    }
    agg.push(curr);
    return agg;
};
exports.default = toTree;
