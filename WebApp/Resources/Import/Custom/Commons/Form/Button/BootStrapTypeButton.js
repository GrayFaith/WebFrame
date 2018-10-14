/**
 * Created By GrayFaith
 * email:wangcangyou@georsoft.com
 * CreatedTime:2018-09-27 13:23:05
 * modifiedTime:2018-09-28 13:02:51
 * version:0.2.5
 * 为了更规范的写法
 * 为了更优雅的调用
 * 为了更易懂的代码
 * 为了更节约的时间
 * 一切为了更加人性化的设计
 */

/**
 * @param classType
 * 值可以是
 * primary,secondary,
 * success,danger,
 * warning,info,
 * light,dark,link
 * @param type
 * 值可以是
 * button,submit,reset
 * @param text
 * 值是一个字符串,代表了按钮显示的value
 * @returns $button 一个BootStrap风格的Button
 */
function newBootStrapButton(classType, type, text) {
    var button = '<button class="btn btn-' + classType + '"></button>';
    var $button = $(button);
    $button.html(text);
    $button.attr('type', type);
    return $button;
}

/**
 * @param classType
 * 值可以是
 * primary,secondary,
 * success,danger,
 * warning,info,
 * light,dark,link
 * @param type
 * 值可以是
 * button,submit,reset
 * @param text
 * 值是一个字符串,代表了按钮显示的value
 * @returns $button 一个OutLineBootStrap风格的Button
 */
function newOutLineBootStrapButton(classType, type, text) {
    var button = '<button class="btn btn-outline-' + classType + '"></button>';
    var $button = $(button);
    $button.html(text);
    $button.attr('type', type);
    return $button;
}
