/**
 * Created By GrayFaith
 * email:wangcangyou@georsoft.com
 * CreatedTime:2018-09-17 13:23:05
 * modifiedTime:2018-09-28 10:59:56
 * version:0.2.4
 * 为了更规范的写法
 * 为了更优雅的调用
 * 为了更易懂的代码
 * 为了更节约的时间
 * 一切为了更加人性化的设计
 */

/**
 * 初始化模态框组件
 * 模态框的ID:
 * $('#ModalLabel');标题
 * $('#ModalBody');正文内容
 * $('#ModalFooter');页脚的按钮区
 */
function initModal(modalStyle) {
    var $body = $('body');
    // 模态框对象
    var modal = '<div id="Modal"></div>';
    // 包装modal
    var $modal = $(modal);
    // 添加样式
    $modal.addClass('modal fade');
    // 添加属性
    $modal.attr('tabindex', '-1').attr('role', 'dialog');
    // 加入Body
    $body.append($modal);
    // ----------------------------DialogDiv------------------------------------
    var modalDialogDiv = '<div></div>';
    // 包装modalDialogDiv
    var $modalDialogDiv = $(modalDialogDiv);
    // 添加样式
    $modalDialogDiv.addClass('modal-dialog modal-dialog-centered');
    if (modalStyle === 'lg') {
        // 大模态框
        $modalDialogDiv.addClass('modal-lg');
    } else if (modalStyle === 'sm') {
        // 紧致型模态框
        $modalDialogDiv.addClass('modal-sm');
    }
    // 添加属性
    $modalDialogDiv.attr('role', 'document');
    // 加入$modal
    $modal.append($modalDialogDiv);
    // --------------------------------------------------------------------------
    var modalContentDiv = '<div></div>';
    // 包装modalContentDiv
    var $modalContentDiv = $(modalContentDiv);
    // 添加样式
    $modalContentDiv.addClass('modal-content');
    // 加入$modalDialogDiv
    $modalDialogDiv.append($modalContentDiv);
    // --------------------------------------------------------------------------
    var modalHeaderDiv = '<div></div>';
    // 包装modalHeaderDiv
    var $modalHeaderDiv = $(modalHeaderDiv);
    // 添加样式
    $modalHeaderDiv.addClass('modal-header');
    // 加入$modalContentDiv
    $modalContentDiv.append($modalHeaderDiv);
    // ------------------------ModalLabel----------------------------------------
    var modalLabel = '<h5 id="ModalLabel"></h5>';
    // 包装$modalLabel
    var $modalLabel = $(modalLabel);
    // 添加样式
    $modalLabel.addClass('modal-title');
    // 加入$modalLabel
    $modalHeaderDiv.append($modalLabel);
    // ------------------------ModalLabelButton----------------------------------
    var modalCloseButton = '<button type="button"></button>';
    // $modalCloseButton
    var $modalCloseButton = $(modalCloseButton);
    // 添加样式
    $modalCloseButton.addClass('close');
    // 添加属性
    $modalCloseButton.attr('data-dismiss', 'modal').attr('aria-label', 'Close');
    // 加入$modalHeaderDiv
    $modalHeaderDiv.append($modalCloseButton);
    // --------------------------------------------------------------------------
    var modalCloseSpan = '<span>&bigotimes;</span>';
    // 包装modalCloseSpan
    var $modalCloseSpan = $(modalCloseSpan);
    // 添加属性
    $modalCloseSpan.attr('aria-hidden', 'true');
    // 加入$modalCloseButton
    $modalCloseButton.append($modalCloseSpan);
    // --------------------------ModalBody---------------------------------------
    var modalBody = '<div id="ModalBody"></div>';
    // 包装modalBody
    var $modalBody = $(modalBody);
    // 添加样式
    $modalBody.addClass('modal-body').addClass('form-group');
    // 加入$modalContentDiv
    $modalContentDiv.append($modalBody);
    // ---------------------------ModalFooter------------------------------------
    var modalFooter = '<div id="ModalFooter"></div>';
    // 包装modalFooter
    var $modalFooter = $(modalFooter);
    // 添加样式
    $modalFooter.addClass('modal-footer');
    // 加入$modalContentDiv
    $modalContentDiv.append($modalFooter);
}

/**
 * 调用该方法能够从body页面上摧毁模态框
 */
function destroyModal() {
    $('#Modal').remove();
}

/**
 * 调用该方法能够清除模态框
 * 标题和正文内容以及页脚的按钮
 */
function cleanData() {
    flushModal('', '', '');
}

/**
 * 传入一个文本变量,例如:
 * var title = '我是标题';
 * var body = '<input type="text" class="xxx" id="xxx"/>';
 * var footer = '<button type="button" class="close" value="Close"></button>' +
 *              '<button type="button" class="xxx" value="Submit"></button>';
 * flushModal(title,body,footer);
 * 警告!只有调用过initModal()方法才能调用该方法
 * 警告!
 * 调用toggleModal方法显示/隐藏模态框
 * toggleModal();
 * 当添加不止一个组件的时候支持传递一个数组
 * @param title 标题,需要传入标题文本(支持数组)
 * @param body 正文,需要传入正文文本(支持数组)
 * @param footer 页脚,可以传入按钮等(支持数组)
 */
function flushModal(title, body, footer) {
    $('#ModalLabel').html(title);
    $('#ModalBody').html(body);
    $('#ModalFooter').html(footer);
}

/**
 * 可以显示/隐藏模态框
 */
function toggleModal() {
    var $modal = $('#Modal');
    $modal.modal('toggle');
}

/**
 * 消息框
 */
function alert(title, msg) {
    destroyModal();
    initModal('sm');
    flushModal(title, msg,
        '<button class="btn btn-success" data-dismiss="modal">确定</button>');
    toggleModal();
}

/**
 * 警告框
 */
function warn(title, msg) {
    destroyModal();
    initModal('sm');
    flushModal(title, msg,
        '<button class="btn btn-danger" data-dismiss="modal">确定</button>');
    toggleModal();
}