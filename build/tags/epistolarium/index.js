"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_by_tags_1 = require("../system-components-by-tags");
const tags_1 = require("./tags");
const default_tags_1 = require("../default-tags");
const componentsByTags = Object.assign({}, system_components_by_tags_1.default, {
    body: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    div: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    date: {
        component: tags_1.DateTag,
        display: system_components_by_tags_1.Display.Inline,
    },
    hi: {
        component: tags_1.Hi,
        display: system_components_by_tags_1.Display.Inline,
    },
    l: {
        component: tags_1.Line,
        display: system_components_by_tags_1.Display.Block,
    },
    lg: {
        component: tags_1.LineGroup,
        display: system_components_by_tags_1.Display.Block,
    },
    meta: {
        component: default_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
    name: {
        component: tags_1.Name,
        display: system_components_by_tags_1.Display.Inline,
    },
    p: {
        component: tags_1.P,
        display: system_components_by_tags_1.Display.Block,
    },
    persName: {
        component: tags_1.PersName,
        display: system_components_by_tags_1.Display.Inline,
    },
    placeName: {
        component: tags_1.PlaceName,
        display: system_components_by_tags_1.Display.Inline,
    },
    text: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    TEI: {
        component: default_tags_1.Div,
        display: system_components_by_tags_1.Display.Block,
    },
    teiHeader: {
        component: default_tags_1.None,
        display: system_components_by_tags_1.Display.None,
    },
});
exports.default = componentsByTags;