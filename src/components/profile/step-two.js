import React from "react";
import { Input, Select } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const StepTwo = props => {
  return (
    <div className="auth">
      <TextArea className="address mb-3" placeholder="Address" onChange={e => props.onChange(e.target.value, "address")} />
      <Select placeholder="Country" className="country mb-3 w-100" onChange={value => props.onChange(value, "country")}>
        <Select.Option value="usa">United States</Select.Option>
        <Select.Option value="russia">Russia</Select.Option>
        <Select.Option value="france">France</Select.Option>
      </Select>
      <Input
        className="phone mb-3 w-100"
        placeholder="Phone"
        suffix={<PhoneOutlined className="site-form-item-icon" />}
        onChange={e => props.onChange(e.target.value, "phone")}
      />
    </div>
  );
};

export default StepTwo;
