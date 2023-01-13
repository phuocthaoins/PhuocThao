import React, { useState } from "react";


export function ForgetPasswordPage() {
  const [data, setData] = useState([
    { ma_ck: "VCB", kl: 1241, gia: 85000, von_hoa: 402312 },
    { ma_ck: "VIC", kl: 3591, gia: 68800, von_hoa: 15000 },
    { ma_ck: "GAS", kl: 572, gia: 111200, von_hoa: 13452 },
    { ma_ck: "BID", kl: 1503, gia: 41200, von_hoa: 395678 },
    { ma_ck: "VNM", kl: 2521, gia: 84000, von_hoa: 243521 },
    { ma_ck: "MSN", kl: 1435, gia: 103900, von_hoa: 253452 },
    { ma_ck: "CTG", kl: 8943, gia: 27950, von_hoa: 121534 },
    { ma_ck: "TCB", kl: 25889, gia: 28800, von_hoa: 45632 },
    { ma_ck: "VPB", kl: 756, gia: 17300, von_hoa: 23425 },
    { ma_ck: "SAB", kl: 1019, gia: 177000, von_hoa: 156223 },
    { ma_ck: "NVL", kl: 291, gia: 23800, von_hoa: 34235 },
    { ma_ck: "HPG", kl: 76450, gia: 19450, von_hoa: 87960 },
    { ma_ck: "MBB", kl: 1315, gia: 18800, von_hoa: 24567 },
    { ma_ck: "STB", kl: 126, gia: 20850, von_hoa: 14235 },
  ]);

  const [result, setResult] = useState(data);
  const [maCK, setMaCK] = useState("");
  const [sortTang, setSortTang] = useState(true);
  const [giaMin, setGiaMin] = useState("");
  const [giaMax, setGiaMax] = useState("");

  const onChangeSearch = (event) => {
    setMaCK(event.target.value.toUpperCase());
    if (event.target.value === "") {
      setResult(data);
    }
  };

  const onClickSearch = () => {
    if (maCK === "") {
      setResult(data);
    } else {
      let resultSearch = data.filter((value) => value.ma_ck === maCK);
      setResult(resultSearch);
    }
  };

  const onClickgiaMin = (event) => {
    setGiaMin(event.target.value);
  }

  const onClickgiaMax = (event) => {
    setGiaMax(event.target.value);
  }
  const onClieckSearch_Gia = () => {
    let resultSearch = data.filter((value) => value.gia <= giaMax && value.gia >= giaMin);
    setResult(resultSearch);
  }

  const onKeydown = (event) => {
    if (event.code === "Enter") {
      onClickSearch();
    }
  }
  const sortByName = () => {
    const newData = [...data];
    if (sortTang) {
      newData.sort(sortMaCKTang);
    } else {
      newData.sort(sortMaCKGiam);
    }
    setSortTang(!sortTang);
    setResult(newData);
  };

  const sortByVonHoa = () => {
    const newData = [...data];
    if (sortTang) {
      newData.sort(sortVonHoaTang);
    } else {
      newData.sort(sortVonHoaGiam);
    }
    setSortTang(!sortTang);
    setResult(newData);
  };
  return (
    <div style={{ minHeight: "500px"}} >
      <div>
        <input
          placeholder="Nhập mã chứng khoán"
          onChange={onChangeSearch}
          onKeyDown={onKeydown}
        ></input>
        <button onClick={onClickSearch}>Tìm kiếm</button></div>
      <input
        onChange={onClickgiaMin}
        placeholder="Nhap gia thap nhat"
      ></input>
      <button onClick={onClieckSearch_Gia}>Tim Kiem Theo Gia</button>
      <input
        onChange={onClickgiaMax}
        placeholder="Nhap gia cao nhat"
      ></input> <br></br>

      <div>
        <h3>BẢNG GIÁ CHỨNG KHOÁN</h3>
        <table class="table container" >
          <tr>
            <th >STT</th>
            <th > <button onClick={sortByName} type="button" class="btn"><span>Ma CK</span></button></th>
            <th>Khoi Luong (*1000)</th>
            <th>Gia (VND)</th>
            <th><button onClick={sortByVonHoa} type="button" class="btn">Von Hoa (nghìn tỷ đồng)</button></th>
          </tr>
          <tr>
            <td>
              {result.map(function (value, index) { return (<div><span>{index + 1}</span></div>); })}
            </td>
            <td>
              {result.map(function (value, index) { return (<div><span>{value.ma_ck}</span></div>); })}
            </td>
            <td>
              {result.map(function (value, index) { return (<div><span>{value.kl}</span></div>); })}

            </td>
            <td>
              {result.map(function (value, index) { return (<div><span>{value.gia}</span></div>); })}
            </td>
            <td>
              {result.map(function (value, index) { return (<div><span>{value.von_hoa}</span></div>); })}
            </td>
          </tr>
        </table>
      </div>
    </div>
    );
}
const sortMaCKTang = (a, b) => {
  if (a.ma_ck < b.ma_ck) {
    return -1;
  }
  if (a.ma_ck > b.ma_ck) {
    return 1;
  }
  return 0;
};

const sortMaCKGiam = (a, b) => {
  if (a.ma_ck < b.ma_ck) {
    return 1;
  }
  if (a.ma_ck > b.ma_ck) {
    return -1;
  }
  return 0;
};
const sortVonHoaTang = (a, b) => {
  if (a.von_hoa < b.von_hoa) {
    return -1;
  }
  if (a.von_hoa > b.von_hoa) {
    return 1;
  }
  return 0;
};

const sortVonHoaGiam = (a, b) => {
  if (a.von_hoa < b.von_hoa) {
    return 1;
  }
  if (a.von_hoa > b.von_hoa) {
    return -1;
  }
  return 0;
};

