import React, { Component } from 'react'
//Sủ dụng thư việt connect để lấy dữ liệu từ store về
import { connect } from "react-redux";
class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang)
        return (
            <div>
                
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{minWidth:800}}>
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.gioHang.map((spGH,index)=>{
                                            return <tr key={index}>
                                                <td>{spGH.maSP}</td>
                                                <td><img src={spGH.hinhAnh} alt={spGH.hinhAnh} width={50} height={50}/></td>
                                                <td>{spGH.tenSP}</td>
                                                
                                                <td>{spGH.gia.toLocaleString()}</td>
                                                <td>
                                                    <button className='btn btn-primary' onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,true)}}>+</button>
                                                    {spGH.soLuong.toLocaleString()}
                                                    <button className='btn btn-primary' onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,false)}}>-</button>
                                                    </td>
                                                <td>{(spGH.soLuong * spGH.gia).toLocaleString()}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{this.props.xoaGioHang(spGH.maSP)}} type="">Xóa</button></td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <th colSpan={5}></th>
                                        <th>{this.props.gioHang.reduce((tongTien, spGioHang,index)=>{
                                            return tongTien +=spGioHang.soLuong * spGioHang.gia;
                                        },0).toLocaleString()}</th>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

//Hàm lấy state redux biết đổi thành props của component
const mapStateToProps = (state) => {//state là state tổng của ứng dụng chứa các state con
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
//Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch)=>{
    return {
        xoaGioHang: (maSP)=>{
            //Tạo action
            let action ={
                type:'XOA_GIO_HANG', 
                maSP
            };
            //Dùng phương thức đưa lên redux cung cấp để đưa dữ liệu
            dispatch(action)

        },
        tangGiamSoLuong : (maSP,tangGiam)=>{//tangGiam = true => xử lý tăng, tangGiam = false => xử lý giảm
            //tạo action để đưa dữ liệu lên reducer
            let action = {
                type: 'TANG_GIAM_SO_LUONG',//Thuppjc tính bắt buộc để biết chạy vào case nào
                maSP,
                tangGiam
            }
            //Đưa action lên reducer mỗi lần người dùng click vào
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)
