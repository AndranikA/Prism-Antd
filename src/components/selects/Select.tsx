import Select, {
  SelectProps,
  SelectValue,
  OptionProps,
  OptionType,
  LabeledValue,
  InternalSelectProps,
  RefSelectProps,
} from 'antd/lib/select';

import './select.less';

const { Option, OptGroup } = Select;

export type { SelectProps, SelectValue, OptionProps, OptionType, LabeledValue, InternalSelectProps, RefSelectProps };
export { Option, OptGroup };
export default Select;
