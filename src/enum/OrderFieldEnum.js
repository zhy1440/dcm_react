/**
 * Copyright (c) 2018 Zhuang Yue
 * @File   : OrderFieldEnum.js
 * @Link   :
 * @Date   : 2018-5-29 13:34:59
 *
 * All Rights Reserved
 */
import { OrderFieldType } from "./OrderFieldType";

export const OrderFieldEnum = {
    id: new OrderFieldType("id", "用户Id"),
    link: new OrderFieldType("link", "网站链接"),
    spName: new OrderFieldType("spName", "商品名称"),
    perPrice: new OrderFieldType("perPrice", "单价"),
    amount: new OrderFieldType("amount", "数量"),
    color: new OrderFieldType("color", "颜色"),
    size: new OrderFieldType("size", "尺寸"),
    discount: new OrderFieldType("discount", "折扣"),
    comment: new OrderFieldType("comment", "备注")
};

export const OrderPlaceFields = [
    [
        OrderFieldEnum.id.addProperty("must", true),
        OrderFieldEnum.link.addProperty("must", true),
        OrderFieldEnum.spName.addProperty("must", true),
        OrderFieldEnum.perPrice.addProperty("must", true),
        OrderFieldEnum.amount.addProperty("must", true),
        OrderFieldEnum.discount.addProperty("must", true)
    ],
    [OrderFieldEnum.color.addProperty("must", true), OrderFieldEnum.size.addProperty("must", true)],
    [OrderFieldEnum.comment]
];
