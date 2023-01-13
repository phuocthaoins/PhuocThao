import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";

export const HomePage = () => {
  //   const navigate = useNavigate();

  //   const onFinish = (values) => {
  //     navigate("/user");
  //   };


  return (
    <div>
      <h1>GIỚI THIỆU VỀ VINASOL</h1>
      <h3>Công ty cổ phần Vinasol hoạt động trong lĩnh vực điện Năng lượng mặt trời chuyên:</h3>
      <div>
        <h4>- Cung cấp dịch vụ và phát triển giải pháp năng lượng hàng đầu thị trường Việt Nam.</h4>
        <h4>- Cung cấp các sản phẩm pin, Inverter, Ắc quy, Lithium... từ các thương hiệu Top đầu thế giới.</h4>
        <h4>- Nhà phân phối, tổng thầu và nhà đầu tư trong lĩnh vực điện năng lượng mặt trời.</h4>

      </div>
      <div>
        <h3>GIÁ TRỊ CỐT LÕI</h3>
        <h4>UY TÍN</h4>
        <div>
        &#10003; Ứng xử trung thực <br />
        &#10003; Xuất xứ thiết bị vật tư rõ ràng <br />
        &#10003; Hồ sơ, giấy tờ minh bạch <br />
        </div>
      </div>
      <div>
        <h4>TRÁCH NHIỆM</h4>
        <div>
        &#10003; Đảm bảo tiến độ giao hàng <br/>
        &#10003; Thi công đạt tiêu chuẩn quy định <br/>
        &#10003; Bảo hành, bảo trì bảo dưỡng sau thi công
        </div>
      </div>
      <div>
        <h4>CHẤT LƯỢNG</h4>
        &#10003; Sản phẩm đạt chứng chỉ chất lượng quốc tế <br/>
        &#10003; Hiệu suất hệ thống ổn định <br/>
        &#10003; sNâng tầm mỹ quan tổng thể dự án 
      </div>
    </div>
  );
};
