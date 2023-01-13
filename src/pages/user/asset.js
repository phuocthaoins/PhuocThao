import React from "react";
import { instance } from "../../axios";
import { Form, Input, Button, InputNumber, Select } from "antd";
import { Alert } from 'antd';

export function AssetPage ({ setData }) {
  const [formSetData] = Form.useForm();

    const onReset = () => {
        formSetData.resetFields();
    };

    const onFinish = (values) => {
        instance.post("/add-data", values).then((ketQuaTraVe) => {
            const duLieu = ketQuaTraVe.data;
            
            setData(duLieu);
        });
    };

  return (
    <>
    <h3 style={{ textAlign:"center" }}>THÊM MỚI SẢN PHẨM</h3>
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        form={formSetData}
        onFinish={onFinish}
    >
        <Form.Item
            label="Tên Sản phẩm"
            name="tenSP"
            rules={[{ required: true, message: "Vui lòng nhập Tên Sản phẩm!" }]}
        >
            <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
            label="Giá"
            name="gia"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm" }]}
        >
            <InputNumber style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
            label="Số lượng đã bán"
            name="slBan"
            rules={[{ required: true, message: "Nhập số lượng đã bán" }]}
        >
            <InputNumber style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
            label="Nơi bán"
            name="noiban"
            rules={[{ required: true, message: "Chọn nơi bán" }]}
        >
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Vui lòng chọn nơi bán: HOSE/HNX/UPCOM"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                    {
                        value: "Bến Tre",
                        label: "Bến Tre",
                    },
                    {
                        value: "Hồ Chí Minh",
                        label: "HCM",
                    },
                    {
                        value: "Lâm Đồng",
                        label: "Lâm Đồng",
                    },
                ]}
            />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
                htmlType="button"
                style={{ marginRight: 10 }}
                onClick={onReset}
            >
                Reset
            </Button>

            <Button type="primary" htmlType="submit">
                Thêm Sản Phẩm
            </Button>
        </Form.Item>
    </Form>
</>
  );
};
