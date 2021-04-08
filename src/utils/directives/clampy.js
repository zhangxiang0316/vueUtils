/**
 * create by zhangxiang on 2021-04-08 13:58
 * 类注释：文本截断
 * 备注：<p v-clampy="2"/>  显示行数
 */
import * as clampy_ from '../network/clampy.js';

const clampy = clampy_.default || clampy_;
var clampValue;
var _extends = Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var defaults = {
  clamp: 'auto',
  truncationChar: '…',
  splitOnChars: ['.', '-', '–', '—', ' '],
  useNativeClamp: false
};

export function setDefaults(options) {
  defaults = _extends({}, defaults, options);
}

function setup(el, clampValue) {
  tearDown(el);

  const resizeListener = () => {
    clampElement(el, clampValue);
  };

  el.__VueClampy = {
    clampValue,
    resizeListener
  };
  window.addEventListener('resize', resizeListener);
  clampElement(el, clampValue);
}

function tearDown(el) {
  if (!el || !el.__VueClampy) return;
  window.removeEventListener('resize', el.__VueClampy.resizeListener);
}

function setInitialContent(el) {
  if (el.clampInitialContent === undefined) {
    el.clampInitialContent = el.innerHTML.trim();
  }
}

function clampElement(el, clamp) {
  const scrollNode = el.querySelector('.erd_scroll_detection_container');
  if (scrollNode) {
    el.removeChild(scrollNode);
  }

  setInitialContent(el);

  if (el.clampInitialContent !== undefined) {
    el.innerHTML = el.clampInitialContent;
  }
  defaults = _extends({}, defaults, {clamp: clamp ? clamp : 'auto'});
  // Set the opacity to 0 to avoid content to flick when clamping.
  el.style.opacity = '0';
  const result = clampy.clamp(el, defaults);
  // Set the opacity back to 1 now that the content is clamped.
  el.style.opacity = '1';
  if (scrollNode) {
    el.appendChild(scrollNode);
  }
}

const vueClampy =  {
  inserted(el, binding, vnode) {
    clampValue = binding.value;
    setup(el, clampValue+1);
  },

  update(el, binding, vnode) {
    clampValue = binding.value;
    setup(el, clampValue+1);
  },

  unbind(el, binding, vnode) {
    tearDown(el);
    delete el.__VueClampy;
  }
};

export default vueClampy
