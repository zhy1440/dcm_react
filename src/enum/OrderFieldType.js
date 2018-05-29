/**
 * Copyright (c) 2018 Zhuang Yue
 * @File   : OrderFieldType.js
 * @Link   :
 * @Date   : 2018-5-29 13:39:36
 *
 * All Rights Reserved
 */

export class OrderFieldType {
    constructor(fieldName, displayName) {
        this.fieldName = fieldName;
        this.displayName = displayName;
    }

    addProperty(key, value) {
        Object.defineProperty(this, key, {
            value: value,
            writable: false
        });
    return this;
    }
}
