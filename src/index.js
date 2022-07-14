import Button from "./packages/button";
import Input from "./packages/input";
import FormItem from "./packages/form-item";
import Notice from "./packages/notice/notice.js";

const components = {
  kButton: Button,
  kInput: Input,
  KFormItem: FormItem,
};

const install = function (Vue, options = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });

  Vue.prototype.$notice = Notice;
};

export default install;
