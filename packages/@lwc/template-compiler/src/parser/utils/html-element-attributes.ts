/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

/*
 * (The MIT License)
 *
 * Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { hasOwnProperty } from '@lwc/shared';

const HTML_ELEMENT_ATTRIBUTE_MAP = {
    '*': [
        'accesskey',
        'autocapitalize',
        'class',
        'contenteditable',
        'dir',
        'draggable',
        'enterkeyhint',
        'hidden',
        'id',
        'inputmode',
        'is',
        'itemid',
        'itemprop',
        'itemref',
        'itemscope',
        'itemtype',
        'lang',
        'nonce',
        'slot',
        'spellcheck',
        'style',
        'tabindex',
        'title',
        'translate',
    ],
    a: [
        'accesskey',
        'charset',
        'coords',
        'download',
        'href',
        'hreflang',
        'name',
        'ping',
        'referrerpolicy',
        'rel',
        'rev',
        'shape',
        'tabindex',
        'target',
        'type',
    ],
    abbr: ['title'],
    applet: [
        'align',
        'alt',
        'archive',
        'code',
        'codebase',
        'height',
        'hspace',
        'name',
        'object',
        'vspace',
        'width',
    ],
    area: [
        'accesskey',
        'alt',
        'coords',
        'download',
        'href',
        'hreflang',
        'nohref',
        'ping',
        'referrerpolicy',
        'rel',
        'shape',
        'tabindex',
        'target',
        'type',
    ],
    audio: ['autoplay', 'controls', 'crossorigin', 'loop', 'muted', 'preload', 'src'],
    base: ['href', 'target'],
    basefont: ['color', 'face', 'size'],
    bdo: ['dir'],
    blockquote: ['cite'],
    body: ['alink', 'background', 'bgcolor', 'link', 'text', 'vlink'],
    br: ['clear'],
    button: [
        'accesskey',
        'autofocus',
        'disabled',
        'form',
        'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget',
        'name',
        'tabindex',
        'type',
        'value',
    ],
    canvas: ['height', 'width'],
    caption: ['align'],
    col: ['align', 'char', 'charoff', 'span', 'valign', 'width'],
    colgroup: ['align', 'char', 'charoff', 'span', 'valign', 'width'],
    data: ['value'],
    del: ['cite', 'datetime'],
    details: ['open'],
    dfn: ['title'],
    dialog: ['open'],
    dir: ['compact'],
    div: ['align'],
    dl: ['compact'],
    embed: ['height', 'src', 'type', 'width'],
    fieldset: ['disabled', 'form', 'name'],
    font: ['color', 'face', 'size'],
    form: [
        'accept',
        'accept-charset',
        'action',
        'autocomplete',
        'enctype',
        'method',
        'name',
        'novalidate',
        'target',
    ],
    frame: [
        'frameborder',
        'longdesc',
        'marginheight',
        'marginwidth',
        'name',
        'noresize',
        'scrolling',
        'src',
    ],
    frameset: ['cols', 'rows'],
    h1: ['align'],
    h2: ['align'],
    h3: ['align'],
    h4: ['align'],
    h5: ['align'],
    h6: ['align'],
    head: ['profile'],
    hr: ['align', 'noshade', 'size', 'width'],
    html: ['manifest', 'version'],
    iframe: [
        'align',
        'allow',
        'allowfullscreen',
        'allowpaymentrequest',
        'allowusermedia',
        'frameborder',
        'height',
        'longdesc',
        'marginheight',
        'marginwidth',
        'name',
        'referrerpolicy',
        'sandbox',
        'scrolling',
        'src',
        'srcdoc',
        'width',
    ],
    img: [
        'align',
        'alt',
        'border',
        'crossorigin',
        'decoding',
        'height',
        'hspace',
        'ismap',
        'longdesc',
        'name',
        'referrerpolicy',
        'sizes',
        'src',
        'srcset',
        'usemap',
        'vspace',
        'width',
    ],
    input: [
        'accept',
        'accesskey',
        'align',
        'alt',
        'autocomplete',
        'autofocus',
        'checked',
        'dirname',
        'disabled',
        'form',
        'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget',
        'height',
        'ismap',
        'list',
        'max',
        'maxlength',
        'min',
        'minlength',
        'multiple',
        'name',
        'pattern',
        'placeholder',
        'readonly',
        'required',
        'size',
        'src',
        'step',
        'tabindex',
        'title',
        'type',
        'usemap',
        'value',
        'width',
    ],
    ins: ['cite', 'datetime'],
    isindex: ['prompt'],
    label: ['accesskey', 'for', 'form'],
    legend: ['accesskey', 'align'],
    li: ['type', 'value'],
    link: [
        'as',
        'charset',
        'color',
        'crossorigin',
        'href',
        'hreflang',
        'imagesizes',
        'imagesrcset',
        'integrity',
        'media',
        'nonce',
        'referrerpolicy',
        'rel',
        'rev',
        'sizes',
        'target',
        'title',
        'type',
    ],
    map: ['name'],
    menu: ['compact'],
    meta: ['charset', 'content', 'http-equiv', 'name', 'scheme'],
    meter: ['high', 'low', 'max', 'min', 'optimum', 'value'],
    object: [
        'align',
        'archive',
        'border',
        'classid',
        'codebase',
        'codetype',
        'data',
        'declare',
        'form',
        'height',
        'hspace',
        'name',
        'standby',
        'tabindex',
        'type',
        'typemustmatch',
        'usemap',
        'vspace',
        'width',
    ],
    ol: ['compact', 'reversed', 'start', 'type'],
    optgroup: ['disabled', 'label'],
    option: ['disabled', 'label', 'selected', 'value'],
    output: ['for', 'form', 'name'],
    p: ['align'],
    param: ['name', 'type', 'value', 'valuetype'],
    pre: ['width'],
    progress: ['max', 'value'],
    q: ['cite'],
    script: [
        'async',
        'charset',
        'crossorigin',
        'defer',
        'integrity',
        'language',
        'nomodule',
        'nonce',
        'referrerpolicy',
        'src',
        'type',
    ],
    select: [
        'autocomplete',
        'autofocus',
        'disabled',
        'form',
        'multiple',
        'name',
        'required',
        'size',
        'tabindex',
    ],
    slot: ['name'],
    source: ['media', 'sizes', 'src', 'srcset', 'type'],
    style: ['media', 'nonce', 'title', 'type'],
    table: [
        'align',
        'bgcolor',
        'border',
        'cellpadding',
        'cellspacing',
        'frame',
        'rules',
        'summary',
        'width',
    ],
    tbody: ['align', 'char', 'charoff', 'valign'],
    td: [
        'abbr',
        'align',
        'axis',
        'bgcolor',
        'char',
        'charoff',
        'colspan',
        'headers',
        'height',
        'nowrap',
        'rowspan',
        'scope',
        'valign',
        'width',
    ],
    textarea: [
        'accesskey',
        'autocomplete',
        'autofocus',
        'cols',
        'dirname',
        'disabled',
        'form',
        'maxlength',
        'minlength',
        'name',
        'placeholder',
        'readonly',
        'required',
        'rows',
        'tabindex',
        'wrap',
    ],
    tfoot: ['align', 'char', 'charoff', 'valign'],
    th: [
        'abbr',
        'align',
        'axis',
        'bgcolor',
        'char',
        'charoff',
        'colspan',
        'headers',
        'height',
        'nowrap',
        'rowspan',
        'scope',
        'valign',
        'width',
    ],
    thead: ['align', 'char', 'charoff', 'valign'],
    time: ['datetime'],
    tr: ['align', 'bgcolor', 'char', 'charoff', 'valign'],
    track: ['default', 'kind', 'label', 'src', 'srclang'],
    ul: ['compact', 'type'],
    video: [
        'autoplay',
        'controls',
        'crossorigin',
        'height',
        'loop',
        'muted',
        'playsinline',
        'poster',
        'preload',
        'src',
        'width',
    ],
};

export const HTML_ATTRIBUTE_ELEMENT_MAP: { [attr: string]: string[] } = Object.entries(
    HTML_ELEMENT_ATTRIBUTE_MAP
).reduce((accumulator, entry) => {
    const element = entry[0];
    const attributes = entry[1];

    if (element !== '*') {
        attributes.forEach(attribute => {
            if (!hasOwnProperty.call(accumulator, attribute)) {
                accumulator[attribute] = [];
            }

            accumulator[attribute].push(element);
        });
    }

    return accumulator;
}, {});

Object.values(HTML_ELEMENT_ATTRIBUTE_MAP['*']).forEach(
    globalAttribute => (HTML_ATTRIBUTE_ELEMENT_MAP[globalAttribute] = [])
);
