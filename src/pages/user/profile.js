import React, { useEffect, useState } from "react";
import { instance } from "../../axios/client";
import { Table } from "antd";

export function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //call api => gắn dữ liệu vào state data
    instance.post("/get-data").then((ketQuaTraVe) => {
      const duLieu = ketQuaTraVe.data;
      setData(duLieu);
    });
  }, []);

  const columns = [
    { title: "Tên Sản Phẩm", dataIndex: "tenSP", key: "tenSP", },
    { title: "Giá", dataIndex: "gia", key: "gia", },
    { title: "SL Đã Bán", dataIndex: "slBan", key: "slBan", },
    { title: "Nơi Bán", dataIndex: "noiban", key: "noiban", },
    { title: "Doanh Thu", dataIndex: "doanhthu", key: "doanhthu", }
  ];

  return (
    <div>
      <h3 style={{ textAlign:"center" }}>Báo cáo bán hàng tháng 12</h3>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
