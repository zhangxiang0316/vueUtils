const permissionList=['1', '2', '3', '4', 'demo']//权限列表
import {Message} from "element-ui";


const disableClickFn = (event) => {
  event && event.stopImmediatePropagation();
}

const permission = {
  bind(el, binding) {
    let hasNoPermission = true;
    if (permissionList.length && permissionList.includes(binding.value)) {
      hasNoPermission = false;
    }
    el.$hasNoPermission=hasNoPermission
    if (hasNoPermission) {
      el.classList.add('permission-disabled');
      el.setAttribute('disabled', 'disabled');
      el.addEventListener('click', disableClickFn, true);
    }
  },
  unbind(el) {
    el.removeEventListener('click', disableClickFn);
  }
}

export default permission


/*inserted: function (el, binding) {
    let permission = binding.value // 获取到 v-permission的值
    if (permission) {
      let hasPermission = checkArray(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }*/
