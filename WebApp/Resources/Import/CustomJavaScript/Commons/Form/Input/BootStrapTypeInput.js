/**
 * Created By GrayFaith
 * email:wangcangyou@georsoft.com
 * CreatedTime:2018-09-27 13:23:05
 * modifiedTime:2018-09-27 13:24:01
 * 为了更规范的写法
 * 为了更优雅的调用
 * 为了更易懂的代码
 * 为了更节约的时间
 * 一切为了更加人性化的设计
 */

/**
 * 实例化一个Input控件
 * @returns 一个BootStarp风格的$(Input)
 */
function newBootStrapInput(spanText, spanId, InputType, placeholder) {
    /*<div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>*/
    var inputGroup = '<div class="input-group mb-3"></div>';
    var $inputGroup = $(inputGroup);
    var inputGroupPrepend = '<div class="input-group-prepend"></div>';
    var $inputGroupPrepend = $(inputGroupPrepend);

    var span = '<span class="input-group-text"></span>';
    var $span = $(span);
    $span.attr('id', spanId);
    $span.html(spanText);

    $inputGroupPrepend.append($span);
    $inputGroup.append($inputGroupPrepend);

    var input = '<input type="' + InputType + '" class="form-control"/>';
    var $input = $(input);
    $input.attr('placeholder', placeholder);
    $input.attr('aria-label', placeholder);
    $input.attr('aria-describedby', spanId);

    $inputGroup.append($input);

    console.log($inputGroup.get(0));
    return $inputGroup;
}