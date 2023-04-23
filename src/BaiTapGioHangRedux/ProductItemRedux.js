import React, { Component } from 'react'
// sử dụng thư viện kết nối với redux
import {connect} from 'react-redux'

class ProductItemRedux extends Component {

    render() {
        let {product}=this.props
        return (
            <div className="card text-left">
                <img style={{width:350,height:350}} className="card-img-top" src={product.hinhAnh} alt={product.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={()=>{this.props.themGioHang(product)}} type="">Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}
//Hàm gửi dữ liệu lên store
const mapDispatchToProps =(dispatch)=>{
    return{
        themGioHang: (sanPham)=>{
            //Tạo ra sp giỏ hàng
            let spGioHang = { 
                maSP: sanPham.maSP, 
                tenSP: sanPham.tenSP, 
                hinhAnh: sanPham.hinhAnh, 
                soLuong: 1, 
                gia: sanPham.giaBan }
            // console.log(spGioHang)
            let action = {
                type:'THEM_GIO_HANG',//thuộc tính bắt buộc
                spGioHang
            };
            //Dùng hàm dispatch từ redux => gửi dữ liệu lên reduccer
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(ProductItemRedux)