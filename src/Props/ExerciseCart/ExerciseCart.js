import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductListEXC from './ProductListEXC'

export default class ExerciseCart extends Component {

    state = {
        gioHang: [
            // { maSP: 1, hinhAnh: '', tenSP: 'tên mặc định', soLuong: 1, donGia: 0 }
        ]
    }
    themGioHang = (sanPham) => {
        // console.log(sanPham);
        let spGioHang = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            donGia: sanPham.giaBan,
            soLuong: 1,
            hinhAnh: sanPham.hinhAnh,
        }
        //Tìm xem sản phẩm đã có trong giỏ hàng chưa
        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP);
        if (index != -1) {
            //Tìm thấy sản phẩm được clicl chứa tring giỏ hàng => tăng số lượng sản phẩm
            this.state.gioHang[index].soLuong +=1;
        }else{
            //Sản phẩm không tìm thấy trong gió hàng chứa sản phẩm đó thì thêm sản phẩm vào giỏ hàng

            this.state.gioHang.push(spGioHang);
        }
        //push vào state.gioHang
        let gioHangCapNhat = [...this.state.gioHang]
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    xoaGioHang =(maSP)=>{
        //Thực hiện tính năng xóa
        console.log(maSP);
        let index = this.state.gioHang.findIndex(spGioHang => spGioHang.maSP === maSP);
        if(index!==-1){
            this.state.gioHang.splice(index,1);
        }
        this.setState({
            gioHang:this.state.gioHang
        })
    }
    tinhTongSoLuong = () =>{
        //dùng for
        // let tongSoLuong =0;
        // for(let i=0;i<this.state.gioHang.length;i++){
        //     let spGioHang = this.state.gioHang[i];
        //     tongSoLuong += spGioHang.soLuong;
        // }
        // return tongSoLuong;

        //Dùng reduce
        return this.state.gioHang.reduce((tongSoLuong,spGioHang,index)=>{
            return tongSoLuong += spGioHang.soLuong;
        },0).toLocaleString();
    }

    tangGiamSoLuong = (maSP,number)=>{
        let gioHang = [...this.state.gioHang];

        let index = gioHang.findIndex(spGioHang=>spGioHang.maSP===maSP);
        if(index != -1){
            if(gioHang[index].soLuong<=1 && number===-1){
                alert('Số lượng tối thiểu ít nhât là 1!')
                return;
            }
            //tìm ra spGioHang trong giỏ hàng thứ index => tăng số lượng
            gioHang[index].soLuong += number;
        }
        //render và gián lại giá trị state.gioHang
        this.setState({
            gioHang:gioHang
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <h3 className='text-center'>BÀI TẬP GIỎ HÀNG</h3>
                <div className='text-right'>
                    <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
                        <i className='fa fa-cart mr-5'><i className='fa fa-cart-arrow-down'> ({this.tinhTongSoLuong()})Giỏ hàng</i></i>
                    </span>
                </div>
                <CartModal tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <ProductListEXC themGioHang={this.themGioHang} />
            </div>
        )
    }
}
